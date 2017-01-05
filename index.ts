import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';

/**
 * SERVICES
 */
import {TwAPIService} from './src/services/twapi.service'
import {GAService} from './src/services/ga.service'
/**
 * PIPES
 */
import {ArethmeticSign} from './src/pipes/arethmetic-sign.pipe'
import {LeadingZero} from './src/pipes/leading-zero.pipe'
import {KFormatter} from './src/pipes/k-formatter.pipe'
/**
 * MODEL
 */
import {Watch, WatchAction, WatchStatus} from './src/models/watch.model'
import {User, EmailPreferences} from './src/models/user.model'
import {Measure, MeasureStatus} from './src/models/measure.model'
import {BlogPost} from './src/models/blog-post.model'
/**
 * DIRECTIVES
 */
import {ClockComponent} from './src/directives/clock/clock.component'
import {MoonPhasesComponent} from './src/directives/clock/moon-phases/moon-phases.component'
import {LoginComponent} from './src/directives/login/login.component'
import {SignupComponent} from './src/directives/signup/signup.component'
import {WatchComponent} from './src/directives/watch/watch.component'

/**
 * SERVICES
 */
export * from './src/services/twapi.service'
export * from './src/services/ga.service'
/**
 * PIPES
 */
export * from './src/pipes/arethmetic-sign.pipe'
export * from './src/pipes/leading-zero.pipe'
export * from './src/pipes/k-formatter.pipe'
/**
 * MODEL
 */
export * from './src/models/watch.model'
export * from './src/models/user.model'
export * from './src/models/measure.model'
export * from './src/models/blog-post.model'
/**
 * DIRECTIVES
 */
export * from './src/directives/clock/clock.component'
export * from './src/directives/clock/moon-phases/moon-phases.component'
export * from './src/directives/login/login.component'
export * from './src/directives/signup/signup.component'
export * from './src/directives/watch/watch.component'

export * from './src/tw-core.module'