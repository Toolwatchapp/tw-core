///<reference path="../typings/browser.d.ts"/>

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { ApiClientAppComponent } from './app/components/api-client.component';


if (environment.production) {
  enableProdMode();
}


bootstrap(ApiClientAppComponent);

