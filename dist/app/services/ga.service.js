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
require('./analytics');
var aspect_1 = require('aspect.js/dist/lib/aspect');
var logger_aspect_1 = require('./../aspects/logger.aspect');
var GAService = (function () {
    function GAService() {
    }
    GAService.spawn = function () {
        if (!GAService.gaCreated) {
            ga('create', 'UA-59148878-1', 'auto');
            GAService.gaCreated = true;
        }
    };
    GAService.event = function (eventCategory, eventAction, eventLabel, eventValue) {
        if (eventLabel === void 0) { eventLabel = ''; }
        if (eventValue === void 0) { eventValue = 0; }
        GAService.spawn();
        ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue);
    };
    GAService.screenview = function (screenName) {
        if (GAService.appName == undefined || GAService.appVersion == undefined) {
            throw "App not configured";
        }
        GAService.spawn();
        ga('send', 'screenview', {
            'appName': GAService.appName,
            'appVersion': GAService.appVersion,
            'screenName': screenName
        });
    };
    GAService.pageview = function (page) {
        GAService.spawn();
        ga('set', 'page', page);
        ga('send', 'pageview');
    };
    GAService.gaCreated = false;
    GAService = __decorate([
        aspect_1.Wove(logger_aspect_1.LoggerAspect),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GAService);
    return GAService;
}());
exports.GAService = GAService;
//# sourceMappingURL=ga.service.js.map