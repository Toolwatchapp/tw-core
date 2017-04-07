import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import {TranslateService} from 'ng2-translate/ng2-translate';
import {TwAPIService} from './../../services/twapi.service'
import { GlobalValidator } from './../global-validator';
import { GAService } from './../../services/ga.service';

import {   
  Validators,  
  FormBuilder,  
  FormGroup
} from '@angular/forms';
 
/**
 * Login component. Provides a login form with controlled and
 * emits a User ($event userLogged) on successful login.
 */
export class LoginComponent implements OnInit {

  loginForm              : FormGroup;
  errors                 = [];
  submitAttempt:false;
  userLogged   = new EventEmitter();
  loginAttempt = new EventEmitter();


  /**
   * Constructor w/ service injection
   * @param {TranslateService} private translate [description]
   * @param {TwAPIService}     private twapi     [description]
   * @param {FormBuilder}      private builder   [description]
   */
  constructor(
    protected translate: any, 
    protected twapi  : TwAPIService, 
    private formBuilder  : any
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
  ){

    this.errors = [];

    this.loginAttempt.emit(true);

    //Tries to login an user using his fb email
    this.twapi.signupFacebook(fbUser.email, fbUser.token, fbUser.lastname, fbUser.firstname).then(
        //success, away we go
        res => { 
          this.userLogged.emit(res);
          GAService.event('CTA', 'FB_LOGIN', 'SUCCESS');
        }, 
        err => {

          //Error, most likely the user tries to signin
          //using facebook while he has a regular 
          //account with the same email.
          this.loginAttempt.emit(false);
          GAService.event('CTA', 'FB_SIGNUP', 'FAIL');
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

  /**
   * Form submit
   * @param {string}} user [description]
   */
  onSubmit(user:{email:string, password:string}){

    this.errors = [];
    
    //Form constraints are ok
    if(this.loginForm.valid){

      this.loginAttempt.emit(true);

      this.twapi.login(user.email, user.password).then(
        res => { 
          this.userLogged.emit(res);
          GAService.event('CTA', 'LOGIN', 'SUCCESS');
        }, 
        err => {
          GAService.event('CTA', 'LOGIN', 'FAIL');
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

  onPasswordResetSubmit(email:string){
    this.twapi.resetPassword(email);
  }

  ngOnInit() {

  }

}