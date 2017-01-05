import { NgModule, CUSTOM_ELEMENTS_SCHEMA,Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateModule} from 'ng2-translate';
import {HttpModule} from '@angular/http';

import
{
  TwAPIService,
  GAService,
  ArethmeticSign,
  LeadingZero,
  KFormatter,
  Watch,
  User,
  Measure,
  BlogPost,
  ClockComponent,
  MoonPhasesComponent,
  LoginComponent,
  SignupComponent,
  WatchComponent,
  WatchAction,
  WatchStatus,
  EmailPreferences,
  MeasureStatus
} from '../index';

@NgModule({
  declarations: [
    ArethmeticSign,
    LeadingZero,
    KFormatter,
    MoonPhasesComponent
  ],
  providers: [
    TwAPIService,
    GAService
  ],
  exports: [
    ArethmeticSign,
    LeadingZero,
    KFormatter,
    MoonPhasesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TwCoreModule {
}