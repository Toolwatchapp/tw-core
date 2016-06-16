///<reference path="../typings/browser.d.ts"/>
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var api_client_component_1 = require('./app/components/api-client.component');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(api_client_component_1.ApiClientAppComponent);
//# sourceMappingURL=main.js.map