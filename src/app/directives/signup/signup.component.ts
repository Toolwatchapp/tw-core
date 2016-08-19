import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {TwAPIService} from './../../services/twapi.service'
import {Http, HTTP_PROVIDERS, Headers}  from '@angular/http';
import { GlobalValidator } from './../global-validator';
import { GAService } from './../../services/ga.service';
import { FormHelper } from './../../helpers/form.helper';

import {   
  REACTIVE_FORM_DIRECTIVES,  
  FormBuilder,  
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: 'base/dist/app/directives/signup/signup.component.html',
  // styleUrls: ['app/directives/signup/signup.component.css'],
  pipes: [TranslatePipe],
  providers: [TwAPIService, HTTP_PROVIDERS],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
/**
 * Signup form. Emits a userLogged event on new user signup
 */
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitAttempt:boolean = false;
  emailTaken:boolean = false;
  error:boolean = false;
  countries:[string];
  filteredList = [];
  query: string = "";

  @Output() userLogged = new EventEmitter();

   /**
   * Constructor w/ service injection
   * @param {TranslateService} private translate [description]
   * @param {TwAPIService}     private twapi     [description]
   * @param {FormBuilder}      private builder   [description]
   */
  constructor(private translate: TranslateService, 
    private twapi: TwAPIService, private builder: FormBuilder) { 

    translate.setDefaultLang('en');
    translate.use('en');

    translate.get("countries").subscribe((result: [string]) => {
      this.countries = result;
    });

    this.signupForm = FormHelper.group(this.builder, {
        email: [<any>Validators.required, <any>GlobalValidator.mailFormat],
        emailRepeat: [<any>Validators.required, <any>GlobalValidator.mailFormat],
        password: [<any>Validators.required, <any>Validators.minLength(8)],
        passwordRepeat: [<any>Validators.required, <any>Validators.minLength(8)],
        lastName: [],
        firstName: [],
        country: []
      });
  }

  /**
   * Trims the filteredList accoring to the 
   * country field
   * @param {string} query [description]
   */
  filter(query:string) {
    this.filteredList = this.countries.filter(function(element:string){
      return element.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
  }

  /**
   * Assign the country label when selected 
   * from the list
   * @param {string} item [description]
   */
  select(item:string){
    this.query = item;
    this.filteredList = [];
  }

  /**
   * submit the form
   * @param {string    }} user [description]
   */
  onSubmit(user:{
      email: string, 
      password: string,
      emailRepeat: string,
      passwordRepeat: string,
      lastName: string,
      firstName: string
    }) {

    this.submitAttempt = true;

    if(this.signupForm.valid && 
      user.password == user.passwordRepeat &&
      user.email == user.emailRepeat){

      this.twapi.signup(user.email,
       user.password,
       user.firstName,
       user.lastName,
       this.query).then(
        res => { 
          GAService.event('CTA', 'SIGNUP', 'SUCCESS');
          this.userLogged.emit(res) 
        },
        error => {
          GAService.event('CTA', 'SIGNUP', 'FAIL');
          switch (error.status) {
            case TwAPIService.HTTP_UNAUTHORIZED:
              this.emailTaken = true;
              break;
            default:
              this.error = true;
              break;
          }
        }
       )
    }
  }

  ngOnInit() {
  }

}
