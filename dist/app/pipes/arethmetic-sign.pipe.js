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
var aspect_1 = require('aspect.js/dist/lib/aspect');
var logger_aspect_1 = require('./../aspects/logger.aspect');
var ArethmeticSign = (function () {
    function ArethmeticSign() {
    }
    ArethmeticSign.prototype.transform = function (value) {
        if (value >= 0) {
            return "+" + value;
        }
        else {
            return value.toString();
        }
    };
    ArethmeticSign = __decorate([
        aspect_1.Wove(logger_aspect_1.LoggerAspect),
        core_1.Pipe({
            name: 'arethmeticSign'
        }), 
        __metadata('design:paramtypes', [])
    ], ArethmeticSign);
    return ArethmeticSign;
}());
exports.ArethmeticSign = ArethmeticSign;
//# sourceMappingURL=arethmetic-sign.pipe.js.map