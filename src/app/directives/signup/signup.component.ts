import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators}  from '@angular/common';
import {TwAPIService} from './../../services/twapi.service'
import {Http, HTTP_PROVIDERS, Headers}  from '@angular/http';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { GlobalValidator } from './../global-validator';
import { GAService } from './../../services/ga.service';

@Component({
  selector: 'app-signup',
  templateUrl: 'app/directives/signup/signup.component.html',
  styleUrls: ['app/directives/signup/signup.component.css'],
  pipes: [TranslatePipe],
  providers: [TwAPIService, HTTP_PROVIDERS],
  directives: [FORM_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
/**
 * Signup form. Emits a userLogged event on new user signup
 */
export class SignupComponent implements OnInit {

  signupForm: ControlGroup;
  email:Control;
  emailRepeat:Control;
  password: Control;
  passwordRepeat: Control;
  firstName: Control = new Control();
  lastName: Control = new Control();
  country: Control = new Control();
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

    //Form constraints
    this.password = new Control('', Validators.required);
    this.email = new Control(
      '', 
      Validators.compose(
        [Validators.required, 
        GlobalValidator.mailFormat]
      )
    );
    this.emailRepeat = new Control(
      '', 
      Validators.compose(
        [Validators.required, 
        GlobalValidator.mailFormat]
      )
    );
    this.password = new Control(
      '',
      Validators.compose(
        [Validators.required,
        Validators.minLength(8)]
      )
    );
    this.passwordRepeat = new Control(
      '',
      Validators.compose(
        [Validators.required,
          Validators.minLength(8)]
      )
    );


    this.signupForm = builder.group({
        email: this.email,
        password: this.password,
        emailRepeat: this.emailRepeat,
        passwordRepeat: this.passwordRepeat,
        lastName: this.lastName,
        firstName: this.firstName,
        country: this.country
      }, { 
        validator: Validators.compose([
          GlobalValidator.match(
            "email",
            "emailRepeat",
            { "emailMatch": true }),
          GlobalValidator.match(
            "password",
            "passwordRepeat",
            { "passwordMatch": true }),
          ]) 
      }
    );
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

    if(this.signupForm.valid){
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
