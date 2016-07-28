import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { TwAPIService } from './twapi.service';

import {provide} from '@angular/core';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {GAService} from './ga.service';

describe('TWAPI Service', () => {
  beforeEachProviders(() => [TwAPIService, provide(TranslateLoader, {
        useFactory: (http: Http) => new TranslateStaticLoader(http, 'base/dist/app/assets/i18n', '.json'),
        deps: [Http]
    }), HTTP_PROVIDERS,GAService,TranslateService]);

  it('should ...',
      inject([TwAPIService], (service: TwAPIService) => {
    expect(service).toBeTruthy();
  }));
});
