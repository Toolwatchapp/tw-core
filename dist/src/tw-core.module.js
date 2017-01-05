import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from 'ng2-translate';
import { HttpModule } from '@angular/http';
import { TwAPIService, GAService, ArethmeticSign, LeadingZero, KFormatter, MoonPhasesComponent } from '../index';
export var TwCoreModule = (function () {
    function TwCoreModule() {
    }
    TwCoreModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    TwCoreModule.ctorParameters = [];
    return TwCoreModule;
}());
//# sourceMappingURL=/mnt/dev/1-NodeWorkspace/toolwatch/tw-core/src/src/tw-core.module.js.map