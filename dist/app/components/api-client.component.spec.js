"use strict";
var testing_1 = require('@angular/core/testing');
var api_client_component_1 = require('./api-client.component');
testing_1.beforeEachProviders(function () { return [api_client_component_1.ApiClientAppComponent]; });
testing_1.describe('App: ApiClient', function () {
    testing_1.it('should create the app', testing_1.inject([api_client_component_1.ApiClientAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'api-client works!\'', testing_1.inject([api_client_component_1.ApiClientAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('api-client works!');
    }));
});
//# sourceMappingURL=api-client.component.spec.js.map