"use strict";
var core_1 = require('@angular/core');
var GAService = (function () {
    function GAService() {
    }
    GAService.spawn = function () {
        // if(!GAService.gaCreated){
        //   ga('create', 'UA-59148878-1', 'auto');
        //   GAService.gaCreated = true;
        // }
    };
    GAService.event = function (eventCategory, eventAction, eventLabel, eventValue) {
        if (eventLabel === void 0) { eventLabel = ''; }
        if (eventValue === void 0) { eventValue = 0; }
        // GAService.spawn();
        // ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue);
    };
    GAService.screenview = function (screenName) {
        // if(GAService.appName == undefined || GAService.appVersion == undefined){
        //     throw "App not configured";
        // }
        // GAService.spawn();
        // ga('send', 'screenview', {
        //   'appName': GAService.appName,
        //   'appVersion': GAService.appVersion,
        //   'screenName': screenName
        // });
    };
    GAService.pageview = function (page) {
        // GAService.spawn();
        // ga('set', 'page', page);
        // ga('send', 'pageview')
    };
    GAService.gaCreated = false;
    GAService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    GAService.ctorParameters = [];
    return GAService;
}());
exports.GAService = GAService;
//# sourceMappingURL=ga.service.js.map