"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var moon_phases_component_1 = require('./directives/clock/moon-phases/moon-phases.component');
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
    ToolwatchModule.forRoot = function () {
        return {
            ngModule: ToolwatchModule
        };
    };
    ToolwatchModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        moon_phases_component_1.MoonPhasesComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        http_1.HttpModule,
                        forms_1.ReactiveFormsModule,
                    ],
                    exports: [
                        moon_phases_component_1.MoonPhasesComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    ToolwatchModule.ctorParameters = [];
    return ToolwatchModule;
}());
exports.ToolwatchModule = ToolwatchModule;
//# sourceMappingURL=toolwatch.js.map