"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
/**
 * SERVICES
 */
var twapi_service_1 = require('./services/twapi.service');
var ga_service_1 = require('./services/ga.service');
/**
 * PIPES
 */
var arethmetic_sign_pipe_1 = require('./pipes/arethmetic-sign.pipe');
var leading_zero_pipe_1 = require('./pipes/leading-zero.pipe');
var k_formatter_pipe_1 = require('./pipes/k-formatter.pipe');
/**
 * DIRECTIVES
 */
var clock_component_1 = require('./directives/clock/clock.component');
var moon_phases_component_1 = require('./directives/clock/moon-phases/moon-phases.component');
var login_component_1 = require('./directives/login/login.component');
var signup_component_1 = require('./directives/signup/signup.component');
var watch_component_1 = require('./directives/watch/watch.component');
/**
 * SERVICES
 */
__export(require('./services/twapi.service'));
__export(require('./services/ga.service'));
/**
 * PIPES
 */
__export(require('./pipes/arethmetic-sign.pipe'));
__export(require('./pipes/leading-zero.pipe'));
__export(require('./pipes/k-formatter.pipe'));
/**
 * MODEL
 */
__export(require('./models/watch.model'));
__export(require('./models/user.model'));
__export(require('./models/measure.model'));
__export(require('./models/blog-post.model'));
/**
 * DIRECTIVES
 */
__export(require('./directives/clock/clock.component'));
__export(require('./directives/clock/moon-phases/moon-phases.component'));
__export(require('./directives/login/login.component'));
__export(require('./directives/signup/signup.component'));
__export(require('./directives/watch/watch.component'));
var ToolwatchModule = (function () {
    function ToolwatchModule() {
    }
    ToolwatchModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        arethmetic_sign_pipe_1.ArethmeticSign,
                        leading_zero_pipe_1.LeadingZero,
                        k_formatter_pipe_1.KFormatter,
                        clock_component_1.ClockComponent,
                        moon_phases_component_1.MoonPhasesComponent,
                        login_component_1.LoginComponent,
                        signup_component_1.SignupComponent,
                        watch_component_1.WatchComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        http_1.HttpModule,
                        forms_1.ReactiveFormsModule,
                        ng2_translate_1.TranslateModule.forRoot()
                    ],
                    exports: [
                        arethmetic_sign_pipe_1.ArethmeticSign,
                        leading_zero_pipe_1.LeadingZero,
                        k_formatter_pipe_1.KFormatter,
                        clock_component_1.ClockComponent,
                        moon_phases_component_1.MoonPhasesComponent,
                        login_component_1.LoginComponent,
                        signup_component_1.SignupComponent,
                        watch_component_1.WatchComponent
                    ],
                    providers: [twapi_service_1.TwAPIService, ga_service_1.GAService]
                },] },
    ];
    /** @nocollapse */
    ToolwatchModule.ctorParameters = [];
    return ToolwatchModule;
}());
exports.ToolwatchModule = ToolwatchModule;
//# sourceMappingURL=toolwatch.js.map