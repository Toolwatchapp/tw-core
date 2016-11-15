import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

/**
 * SERVICES
 */
export * from './services/twapi.service'
export * from './services/ga.service'
/**
 * PIPES
 */
export * from './pipes/arethmetic-sign.pipe'
export * from './pipes/leading-zero.pipe'
export * from './pipes/k-formatter.pipe'
/**
 * MODEL
 */
export * from './models/watch.model'
export * from './models/user.model'
export * from './models/measure.model'
export * from './models/blog-post.model'
/**
 * DIRECTIVES
 */
export * from './directives/clock/clock.component'
export * from './directives/clock/moon-phases/moon-phases.component'
export * from './directives/login/login.component'
export * from './directives/signup/signup.component'
export * from './directives/watch/watch.component'

@NgModule({
  declarations: [
    ArethmeticSign,
    LeadingZero,
    KFormatter,
    ClockComponent,
    MoonPhasesComponent,
    LoginComponent,
    SignupComponent,
    WatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    TranslateModule.forRoot()
  ],
  exports: [
    ArethmeticSign,
    LeadingZero,
    KFormatter,
    ClockComponent,
    MoonPhasesComponent,
    LoginComponent,
    SignupComponent,
    WatchComponent
  ],
  providers: [TwAPIService, GAService]
})
export class ToolwatchModule { }
