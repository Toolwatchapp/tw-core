import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';

/**
 * SERVICES
 */
import {TwAPIService} from './services/twapi.service'
import {GAService} from './services/ga.service'
/**
 * PIPES
 */
import {ArethmeticSign} from './pipes/arethmetic-sign.pipe'
import {LeadingZero} from './pipes/leading-zero.pipe'
import {KFormatter} from './pipes/k-formatter.pipe'
/**
 * MODEL
 */
import {Watch, WatchAction, WatchStatus} from './models/watch.model'
import {User, EmailPreferences} from './models/user.model'
import {Measure, MeasureStatus} from './models/measure.model'
import {BlogPost} from './models/blog-post.model'
/**
 * DIRECTIVES
 */
import {ClockComponent} from './directives/clock/clock.component'
import {MoonPhasesComponent} from './directives/clock/moon-phases/moon-phases.component'
import {LoginComponent} from './directives/login/login.component'
import {SignupComponent} from './directives/signup/signup.component'
import {WatchComponent} from './directives/watch/watch.component'

@NgModule({
  declarations: [
    ClockComponent,
    MoonPhasesComponent,
    LoginComponent,
    SignupComponent,
    WatchComponent,
    ArethmeticSign,
    LeadingZero,
    KFormatter
  ],
  providers: [ TwAPIService, GAService ],
  exports: [
    ClockComponent,
    MoonPhasesComponent,
    LoginComponent,
    SignupComponent,
    WatchComponent,
    ArethmeticSign,
    LeadingZero,
    KFormatter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class TwCoreModule {}