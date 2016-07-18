import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators}  from '@angular/common';
import {TwAPIService} from './../../services/twapi.service'
import {Http, HTTP_PROVIDERS, Headers}  from '@angular/http';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { GlobalValidator } from './../global-validator';

@Component({
  selector: 'app-login',
  templateUrl: 'app/directives/login/login.component.html',
  styleUrls: ['app/directives/login/login.component.css'],
  pipes: [TranslatePipe],
  providers: [TwAPIService, HTTP_PROVIDERS],
  directives: [FORM_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
/**
 * Login component. Provides a login form with controlled and
 * emits a User ($event userLogged) on successful login.
 */
export class LoginComponent implements OnInit {

  loginForm: ControlGroup;
  email:Control;
  password: Control;
  submitAttempt:boolean = false;
  credientials = false;
  error = false;
  @Output() userLogged = new EventEmitter();
  @Output() loginAttempt = new EventEmitter();

  /**
   * Constructor w/ service injection
   * @param {TranslateService} private translate [description]
   * @param {TwAPIService}     private twapi     [description]
   * @param {FormBuilder}      private builder   [description]
   */
  constructor(private translate: TranslateService, 
    private twapi: TwAPIService, private builder: FormBuilder) { 
  	
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
    if(this.loginForm.valid 
      && user.email.length != 0 
      && user.password.length !=0){
      this.twapi.login(user.email, user.password).then(
        res => { this.userLogged.emit(res) },
        error => {
          switch (error.status) {
            case 401:
              this.credientials = true;
              break;
            default:
              this.error = true;
              break;
          }
          this.loginAttempt.emit(false);
        }
      );
    }
  }

  ngOnInit() {
  }

}
