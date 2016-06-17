///<reference path="../typings/browser.d.ts"/>

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { ApiClientAppComponent } from './app/directives/api-client.component';
import { LoginComponent } from './app/directives/login/login.component';
import { SignupComponent } from './app/directives/signup/signup.component';
import { WatchComponent } from './app/directives/watch/watch.component';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {Component, Injectable, provide} from '@angular/core';

if (environment.production) {
  enableProdMode();
}


bootstrap(WatchComponent, [
    HTTP_PROVIDERS,
    provide(TranslateLoader, {
        useFactory: (http: Http) => new TranslateStaticLoader(http, 'app/assets/i18n', '.json'),
        deps: [Http]
    }),
    // use TranslateService here, and not TRANSLATE_PROVIDERS (which will define a default TranslateStaticLoader)
    TranslateService
]);

