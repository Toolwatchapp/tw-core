///<reference path="../typings/browser.d.ts"/>
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var watch_component_1 = require('./app/directives/watch/watch.component');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var http_1 = require('@angular/http');
var core_2 = require('@angular/core');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(watch_component_1.WatchComponent, [
    http_1.HTTP_PROVIDERS,
    core_2.provide(ng2_translate_1.TranslateLoader, {
        useFactory: function (http) { return new ng2_translate_1.TranslateStaticLoader(http, 'app/assets/i18n', '.json'); },
        deps: [http_1.Http]
    }),
    // use TranslateService here, and not TRANSLATE_PROVIDERS (which will define a default TranslateStaticLoader)
    ng2_translate_1.TranslateService
]);
//# sourceMappingURL=main.js.map