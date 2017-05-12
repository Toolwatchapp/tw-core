
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ArethmeticSign } from './src/pipes/arethmetic-sign.pipe';
import { LeadingZero } from './src/pipes/leading-zero.pipe';
import { KFormatter } from './src/pipes/k-formatter.pipe';
import { MoonPhasesComponent } from './src/directives/clock/moon-phases/moon-phases.component';
import { TwAPIService } from './src/services/twapi.service';
import { ConfigurationService } from './src/services/configuration.service';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule }   from '@angular/forms';
import { WatchComponent } from './src/directives/watch/watch.component';
import { SignupComponent } from './src/directives/signup/signup.component';
import { LoginComponent } from './src/directives/login/login.component';
import { ClockComponent } from './src/directives/clock/clock.component';

/**
 * SERVICES
 */
export * from './src/services/twapi.service'
export * from './src/services/analytics.service'
export * from './src/services/configuration.service'
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
    MoonPhasesComponent,
    WatchComponent,
    SignupComponent,
    LoginComponent,
    ClockComponent
  ],
  providers: [
    TwAPIService,
    ConfigurationService
  ],
  exports: [
    ArethmeticSign,
    LeadingZero,
    KFormatter,
    MoonPhasesComponent,
    TranslateModule
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule 
  ]
})
export class TwCoreModule {
} 