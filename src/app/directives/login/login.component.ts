import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {Control, ControlGroup, Validators}  from '@angular/common';
import {TwAPIService} from './../../services/twapi.service'
import {Http, HTTP_PROVIDERS, Headers}  from '@angular/http';
import { GlobalValidator } from './../global-validator';
import { GAService } from './../../services/ga.service';
import { FormHelper } from './../../helpers/form.helper';

import {   
  REACTIVE_FORM_DIRECTIVES,  
  FormBuilder,  
  FormGroup,
  FormControl
} from '@angular/forms';
 
@Component({
  selector: 'app-login',
  templateUrl: 'app/directives/login/login.component.html',
  styleUrls: ['app/directives/login/login.component.css'],
  pipes: [TranslatePipe],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
/**
 * Login component. Provides a login form with controlled and
 * emits a User ($event userLogged) on successful login.
 */
export class LoginComponent implements OnInit {

  loginForm              : FormGroup;
  submitAttempt          : boolean = false;
  credientials           = false;
  error                  = false;
  @Output() userLogged   = new EventEmitter();
  @Output() loginAttempt = new EventEmitter();
  @Output() loginError   = new EventEmitter();

  /**
   * Constructor w/ service injection
   * @param {TranslateService} private translate [description]
   * @param {TwAPIService}     private twapi     [description]
   * @param {FormBuilder}      private builder   [description]
   */
  constructor(
    private translate: TranslateService, 
    protected twapi  : TwAPIService, 
    private builder  : FormBuilder
  ) { 

    //Lang definition
	  translate.setDefaultLang('en');
	  translate.use('en');

    this.loginForm = FormHelper.group(this.builder, {
      email   : [<any>Validators.required, <any>GlobalValidator.mailFormat],
      password: [<any>Validators.required, <any>Validators.minLength(5)]
    });

  }

  /**
   * Form submit
   * @param {string}} user [description]
   */
  onSubmit(user:{email:string, password:string}){

    this.submitAttempt = true;
    this.error = false;
    this.credientials = false;
    
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
    }
  }

  ngOnInit() {

  }

}
