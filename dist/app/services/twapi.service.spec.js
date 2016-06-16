"use strict";
var testing_1 = require('@angular/core/testing');
var twapi_service_1 = require('./twapi.service');
testing_1.describe('TWAPI Service', function () {
    testing_1.beforeEachProviders(function () { return [twapi_service_1.TwAPIService]; });
    testing_1.it('should ...', testing_1.inject([twapi_service_1.TwAPIService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=twapi.service.spec.js.map