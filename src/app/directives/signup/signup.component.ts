import { Component, OnInit } from '@angular/core';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {  FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES, NgForm }    from '@angular/common';
import {TwAPIService} from './../../services/twapi.service'
import {Http, HTTP_PROVIDERS, Headers}  from '@angular/http';

@Component({
  selector: 'app-signup',
  templateUrl: 'app/directives/signup/signup.component.html',
  styleUrls: ['app/directives/signup/signup.component.css'],
  pipes: [TranslatePipe],
  providers: [TwAPIService, HTTP_PROVIDERS]
})
export class SignupComponent implements OnInit {

  email: string;
  emailRepeat: string;
  password: string;
  passwordRepeat: string;
  firstname: string;
  lastname: string;
  country: string;
  success: boolean = true;


  constructor(private translate: TranslateService,
	  private twapi: TwAPIService) {
	  //use navigator lang if available
	  var userLang = navigator.language.split('-')[0];
	  userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
	  translate.setDefaultLang('en');
	  translate.use(userLang);
  }

  onSubmit(){
	  console.log(this.email, this.password);

	  this.twapi.signup(
	  	this.email, 
	  	this.password,
	  	this.firstname, 
	  	this.lastname, '').then(
		  response => {

			  this.success = typeof response == "User";
		  }
	  )
  }

  ngOnInit() {
  }

}
