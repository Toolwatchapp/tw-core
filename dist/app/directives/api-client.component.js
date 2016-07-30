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
var core_1 = require('@angular/core');
var twapi_service_1 = require('./../services/twapi.service');
var http_1 = require('@angular/http');
var aspect_1 = require('aspect.js/dist/lib/aspect');
var ApiClientAppComponent = (function () {
    function ApiClientAppComponent() {
        this.title = 'api-client works!';
    }
    ApiClientAppComponent.prototype.onClick = function () {
        console.log("awdawd");
    };
    ApiClientAppComponent = __decorate([
        aspect_1.Wove(),
        core_1.Component({
            moduleId: module.id,
            selector: 'api-client-app',
            templateUrl: 'api-client.component.html',
            styleUrls: ['api-client.component.css'],
            providers: [twapi_service_1.TwAPIService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], ApiClientAppComponent);
    return ApiClientAppComponent;
}());
exports.ApiClientAppComponent = ApiClientAppComponent;
//# sourceMappingURL=api-client.component.js.map