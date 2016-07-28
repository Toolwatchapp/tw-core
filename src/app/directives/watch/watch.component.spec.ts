import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';


import {provide} from '@angular/core';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {GAService} from './../../services/ga.service';
import {TwAPIService} from './../../services/twapi.service';

import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { WatchComponent } from './watch.component';

describe('Component: Watch', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [WatchComponent,  provide(TranslateLoader, {
        useFactory: (http: Http) => new TranslateStaticLoader(http, 'base/dist/app/assets/i18n', '.json'),
        deps: [Http]
    }), HTTP_PROVIDERS,GAService,TranslateService, TwAPIService]);
  
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([WatchComponent],
      (component: WatchComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(WatchComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(WatchComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <watch-form></watch-form>
  `,
  directives: [WatchComponent]
})
class WatchComponentTestController {
}

