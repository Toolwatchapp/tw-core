///<reference path="../typings/index.d.ts"/>

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, disableDeprecatedForms, provideForms }   from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { ApiClientAppComponent } from './app/directives/api-client.component';
import { LoginComponent } from './app/directives/login/login.component';
import { SignupComponent } from './app/directives/signup/signup.component';
import { WatchComponent } from './app/directives/watch/watch.component';
import { TwAPIService } from './app/services/twapi.service';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {Component, Injectable, provide} from '@angular/core';
import {GAService} from './app/services/ga.service';

if (environment.production) {
  enableProdMode();
}

console.log(this);


@NgModule({
  imports: [
  	BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    
  ],
  providers: [
  	GAService,
  	TwAPIService,
  	provide(TranslateLoader, {
	    useFactory: (http: Http) => new TranslateStaticLoader(http, 'app/assets/i18n', '.json'),
	    deps: [Http]
	}),
	// use TranslateService here, and not TRANSLATE_PROVIDERS (which will define a default TranslateStaticLoader)
	TranslateService,
	disableDeprecatedForms(), 
	provideForms() 
  ],
  bootstrap: [ LoginComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
