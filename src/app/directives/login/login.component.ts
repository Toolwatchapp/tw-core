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
 
@Component({
  selector: 'app-login',
  template: ''
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
    private formBuilder  : FormBuilder
  ) { 

    //Lang definition
	  translate.setDefaultLang('en');
	  translate.use('en');

    this.loginForm = this.formBuilder.group({
      email   : Validators.compose([Validators.required, GlobalValidator.mailFormat]),
      password: Validators.compose([Validators.required, Validators.minLength(5)])
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
