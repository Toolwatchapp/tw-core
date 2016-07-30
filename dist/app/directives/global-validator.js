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
var aspect_1 = require('aspect.js/dist/lib/aspect');
var logger_aspect_1 = require('./../aspects/logger.aspect');
var GlobalValidator = (function () {
    function GlobalValidator() {
    }
    GlobalValidator.mailFormat = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    };
    GlobalValidator.match = function (from, to, returnValue) {
        return function (group) {
            var fromGroup = group.controls[from];
            var toGroup = group.controls[to];
            if (fromGroup.value !== toGroup.value) {
                return returnValue;
            }
        };
    };
    GlobalValidator = __decorate([
        aspect_1.Wove(logger_aspect_1.LoggerAspect), 
        __metadata('design:paramtypes', [])
    ], GlobalValidator);
    return GlobalValidator;
}());
exports.GlobalValidator = GlobalValidator;
//# sourceMappingURL=global-validator.js.map