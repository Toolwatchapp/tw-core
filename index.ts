import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ArethmeticSignPipeModule } from './src/pipes/arethmetic-sign.pipe';
import { LeadingZeroPipeModule } from './src/pipes/leading-zero.pipe';
import { KFormatterPipeModule } from './src/pipes/k-formatter.pipe';
import { MoonPhasesComponentModule } from './src/directives/clock/moon-phases/moon-phases.component';
import { TwAPIService } from './src/services/twapi.service';
import { ConfigurationService } from './src/services/configuration.service';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule }   from '@angular/forms';
import { WatchComponentModule } from './src/directives/watch/watch.component';
import { SignupComponentModule } from './src/directives/signup/signup.component';
import { LoginComponentModule } from './src/directives/login/login.component';
import { ClockComponentModule } from './src/directives/clock/clock.component';


@NgModule({
  declarations: [],
  providers: [
    TwAPIService,
    ConfigurationService
  ],
  exports: [
    TranslateModule,
        ArethmeticSignPipeModule,
    LeadingZeroPipeModule,
    KFormatterPipeModule,
    MoonPhasesComponentModule,
    WatchComponentModule,
    SignupComponentModule,
    LoginComponentModule,
    ClockComponentModule
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,

  ]
})
export class TwCoreModule {
} 