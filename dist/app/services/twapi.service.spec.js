"use strict";
var testing_1 = require('@angular/core/testing');
var twapi_service_1 = require('./twapi.service');
var core_1 = require('@angular/core');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var http_1 = require('@angular/http');
var ga_service_1 = require('./ga.service');
testing_1.describe('TWAPI Service', function () {
    testing_1.beforeEachProviders(function () { return [twapi_service_1.TwAPIService, core_1.provide(ng2_translate_1.TranslateLoader, {
            useFactory: function (http) { return new ng2_translate_1.TranslateStaticLoader(http, 'base/dist/app/assets/i18n', '.json'); },
            deps: [http_1.Http]
        }), http_1.HTTP_PROVIDERS, ga_service_1.GAService, ng2_translate_1.TranslateService]; });
    testing_1.it('should ...', testing_1.inject([twapi_service_1.TwAPIService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=twapi.service.spec.js.map