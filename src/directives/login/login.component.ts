import { Component, Output, EventEmitter, NgModule } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { TwAPIService } from './../../services/twapi.service';
import { GlobalValidator } from './../global-validator';
import { AnalyticsService } from './../../services/analytics.service';

import {   
  Validators,  
  FormBuilder,  
  FormGroup,
  FormsModule
} from '@angular/forms';

/**
 * Login component. Provides a login form with controlled and
 * emits a User ($event userLogged) on successful login.
 */
@Component({
  template: ""
})
export class LoginComponent {

  loginForm: FormGroup;
  errors: string[] = [];
  submitAttempt: false;
  @Output() userLogged = new EventEmitter();
  @Output() loginAttempt = new EventEmitter();

  /**
   * Constructor w/ service injection
   * @param {TranslateService} private translate [description]
   * @param {TwAPIService}     private twapi     [description]
   * @param {FormBuilder}      private builder   [description]
   */
  constructor(
    protected translate: TranslateService, 
    protected twapi: TwAPIService, 
    protected analytics: AnalyticsService,
    private   formBuilder: FormBuilder
  ) { 

    //Lang definition
      this.translate.setDefaultLang('en');
      this.translate.use('en');

      this.loginForm = this.formBuilder.group({
        email   : ["", Validators.compose([Validators.required, GlobalValidator.mailFormat])],
        password: ["", Validators.compose([Validators.required, Validators.minLength(5)])]
      });

  }

  /**
   * Login an FB user
   * @param {string} fbUser [description]
   */
  onFbSubmit(fbUser:{
    email: string, 
    token: string,
    lastname: string, 
    firstname: string}
  ) {

    this.errors = [];

    this.loginAttempt.emit(true);

    //Tries to login an user using his fb email
    this.twapi.signupFacebook(fbUser.email, fbUser.token, fbUser.lastname, fbUser.firstname).then(
        //success, away we go
        res => { 
          this.userLogged.emit(res);
          this.analytics.event('CTA', 'FB_LOGIN', 'SUCCESS');
        }, 
        err => {

          //Error, most likely the user tries to signin
          //using facebook while he has a regular 
          //account with the same email.
          this.analytics.event('CTA', 'FB_SIGNUP', 'FAIL');
          switch (err.status) {
            case TwAPIService.HTTP_UNAUTHORIZED:
              this.errors.push('credentials');
              break;
            default:
              this.errors.push('error');
              break;
          }
          this.loginAttempt.emit(false);
        }
    );

    this.loginAttempt.emit(false);
  }

  /**
   * Form submit
   * @param {string}} user [description]
   */
  onSubmit(user:{email:string, password:string}) {

    this.errors = [];
    
    //Form constraints are ok
    if(this.loginForm.valid) {

      this.loginAttempt.emit(true);

      this.twapi.login(user.email, user.password).then(
        res => { 
          this.userLogged.emit(res);
          this.analytics.event('CTA', 'LOGIN', 'SUCCESS');
        }, 
        err => {
          this.analytics.event('CTA', 'LOGIN', 'FAIL');
          switch (err.status) {
            case 401:
              this.errors.push('credentials');
              break;
            default:
              this.errors.push('error');
              break;
          }
        }
      );

      this.loginAttempt.emit(false);
    }
  }

  /**
   * send a password reset request
   * @param email 
   */
  onPasswordResetSubmit(email:string) {
    this.twapi.resetPassword(email);
  }

}


@NgModule({
  declarations: [LoginComponent],
  imports: [FormsModule, TranslateModule],
  exports: [LoginComponent, TranslateModule],
  providers: [
    TwAPIService
  ],
})
export class LoginComponentModule { }