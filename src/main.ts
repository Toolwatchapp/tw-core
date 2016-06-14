///<reference path="../typings/browser.d.ts"/>

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ApiClientAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ApiClientAppComponent);

