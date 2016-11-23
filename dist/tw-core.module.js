import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { TwAPIService } from './services/twapi.service';
import { GAService } from './services/ga.service';
import { ArethmeticSign } from './pipes/arethmetic-sign.pipe';
import { LeadingZero } from './pipes/leading-zero.pipe';
import { KFormatter } from './pipes/k-formatter.pipe';
import { ClockComponent } from './directives/clock/clock.component';
import { MoonPhasesComponent } from './directives/clock/moon-phases/moon-phases.component';
import { LoginComponent } from './directives/login/login.component';
import { SignupComponent } from './directives/signup/signup.component';
import { WatchComponent } from './directives/watch/watch.component';
export var TwCoreModule = (function () {
    function TwCoreModule() {
    }
    TwCoreModule.decorators = [
        { type: NgModule, args: [{
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
                    providers: [TwAPIService, GAService],
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
                },] },
    ];
    /** @nocollapse */
    TwCoreModule.ctorParameters = [];
    return TwCoreModule;
}());
//# sourceMappingURL=tw-core.module.js.map