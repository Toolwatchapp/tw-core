import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {Control, ControlGroup, Validators}  from '@angular/common';
import {TwAPIService} from './../../services/twapi.service'
import {Http, HTTP_PROVIDERS, Headers}  from '@angular/http';
import { GlobalValidator } from './../global-validator';
import { GAService } from './../../services/ga.service';

import {  
  FORM_DIRECTIVES,  
  REACTIVE_FORM_DIRECTIVES,  
  FormBuilder,  
  FormGroup  
} from '@angular/forms';

import { Wove } from 'aspect.js/dist/lib/aspect';
import { LoggerAspect } from './../../aspects/logger.aspect';

// @Wove(LoggerAspect)
@Component({
  selector: 'app-login',
  templateUrl: 'app/directives/login/login.component.html',
  styleUrls: ['app/directives/login/login.component.css'],
  pipes: [TranslatePipe],
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
/**
 * Login component. Provides a login form with controlled and
 * emits a User ($event userLogged) on successful login.
 */
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email:Control;
  password: Control;
  submitAttempt:boolean = false;
  credientials = false;
  error = false;
  @Output() userLogged = new EventEmitter();
  @Output() loginAttempt = new EventEmitter();
  @Output() loginError = new EventEmitter();

  /**
   * Constructor w/ service injection
   * @param {TranslateService} private translate [description]
   * @param {TwAPIService}     private twapi     [description]
   * @param {FormBuilder}      private builder   [description]
   */
  constructor(private translate: TranslateService, 
    protected twapi: TwAPIService, private builder: FormBuilder) { 


    this.twapi.http.get('https://toolwatch.io/api/time')
    .toPromise()
    .then(res => console.log(res));

    this.twapi.fetchTime()
    .then( res => console.log(res));

    this.twapi.login("vincentsatiat@gmail.com", "qwerty")
    .then(user => console.log(user));
  	
    console.log("aawdawd");
    //Lang definition
	  translate.setDefaultLang('en');
	  translate.use('en');

    //Form constraints
    this.password = new Control('', Validators.required);
    this.email = new Control('', Validators.compose([Validators.required, GlobalValidator.mailFormat]));

    this.loginForm = builder.group({
      email: this.email,
      password: this.password
    });
  }

  /**
   * Form submit
   * @param {string}} user [description]
   */
  onSubmit(user:{email:string, password:string}){

    this.loginAttempt.emit(true);

    this.submitAttempt = true;
    this.error = false;
    this.credientials = false;

    //Form constraints are ok
    if(this.loginForm.valid){
      this.twapi.login(user.email, user.password).then(
        res => { 
          this.userLogged.emit(res);
          GAService.event('CTA', 'LOGIN', 'SUCCESS');
        }, 
        err => {
          GAService.event('CTA', 'LOGIN', 'FAIL');
          this.loginAttempt.emit(false);

          switch (err.status) {
            case 401:
              this.credientials = true;
              break;
            default:
              this.error = true;
              break;
          }
        }
      );
    }else{
      this.loginAttempt.emit(false);
    }
  }

  ngOnInit() {
  }

}
