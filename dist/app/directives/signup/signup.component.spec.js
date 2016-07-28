"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var signup_component_1 = require('./signup.component');
var core_2 = require('@angular/core');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var http_1 = require('@angular/http');
var ga_service_1 = require('./../../services/ga.service');
var twapi_service_1 = require('./../../services/twapi.service');
testing_1.describe('Component: Signup', function () {
    var builder;
    testing_1.beforeEachProviders(function () { return [signup_component_1.SignupComponent, core_2.provide(ng2_translate_1.TranslateLoader, {
            useFactory: function (http) { return new ng2_translate_1.TranslateStaticLoader(http, 'base/dist/app/assets/i18n', '.json'); },
            deps: [http_1.Http]
        }), http_1.HTTP_PROVIDERS, ga_service_1.GAService, ng2_translate_1.TranslateService, twapi_service_1.TwAPIService]; });
    testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
        builder = tcb;
    }));
    testing_1.it('should inject the component', testing_1.inject([signup_component_1.SignupComponent], function (component) {
        testing_1.expect(component).toBeTruthy();
    }));
    testing_1.it('should create the component', testing_1.inject([], function () {
        return builder.createAsync(SignupComponentTestController)
            .then(function (fixture) {
            var query = fixture.debugElement.query(platform_browser_1.By.directive(signup_component_1.SignupComponent));
            testing_1.expect(query).toBeTruthy();
            testing_1.expect(query.componentInstance).toBeTruthy();
        });
    }));
});
var SignupComponentTestController = (function () {
    function SignupComponentTestController() {
    }
    SignupComponentTestController = __decorate([
        core_1.Component({
            selector: 'test',
            template: "\n    <app-signup></app-signup>\n  ",
            directives: [signup_component_1.SignupComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SignupComponentTestController);
    return SignupComponentTestController;
}());
//# sourceMappingURL=signup.component.spec.js.map