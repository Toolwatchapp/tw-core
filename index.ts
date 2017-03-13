
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ArethmeticSign } from './src/pipes/arethmetic-sign.pipe';
import { LeadingZero } from './src/pipes/leading-zero.pipe';
import { KFormatter } from './src/pipes/k-formatter.pipe';
import { MoonPhasesComponent } from './src/directives/clock/moon-phases/moon-phases.component';
import { TwAPIService } from './src/services/twapi.service';
import { GAService } from './src/services/ga.service';
import { TranslateModule, TranslateLoader } from 'ng2-translate/ng2-translate';


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
    HttpModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TwCoreModule {
} 