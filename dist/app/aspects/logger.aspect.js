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
var LoggerAspect = (function () {
    function LoggerAspect() {
    }
    LoggerAspect.prototype.beforeStatic = function (meta) {
        //console.log(`TW: AFTER: ${meta.className}.${meta.method.name} with result ${meta.method.result}`);
    };
    LoggerAspect.prototype.before = function (meta) {
        //console.log(`TW: BEFORE: ${meta.className}.${meta.method.name} with args ${meta.method.args.join(', ')}`);
    };
    LoggerAspect.prototype.after = function (meta) {
        //console.log(`TW: AFTER: ${meta.className}.${meta.method.name} with result ${meta.method.result}`);
    };
    LoggerAspect.prototype.afterStaticMethod = function (meta) {
        //console.log(`TW: AFTER: ${meta.className}.${meta.method.name} with result ${meta.method.result}`);
    };
    __decorate([
        aspect_1.beforeStaticMethod({ classNamePattern: /.*/, methodNamePattern: /.*/ }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [aspect_1.Metadata]), 
        __metadata('design:returntype', void 0)
    ], LoggerAspect.prototype, "beforeStatic", null);
    __decorate([
        aspect_1.beforeMethod({ classNamePattern: /.*/, methodNamePattern: /.*/ }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [aspect_1.Metadata]), 
        __metadata('design:returntype', void 0)
    ], LoggerAspect.prototype, "before", null);
    __decorate([
        aspect_1.afterMethod({ classNamePattern: /.*/, methodNamePattern: /.*/ }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [aspect_1.Metadata]), 
        __metadata('design:returntype', void 0)
    ], LoggerAspect.prototype, "after", null);
    __decorate([
        aspect_1.afterStaticMethod({ classNamePattern: /.*/, methodNamePattern: /.*/ }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [aspect_1.Metadata]), 
        __metadata('design:returntype', void 0)
    ], LoggerAspect.prototype, "afterStaticMethod", null);
    return LoggerAspect;
}());
exports.LoggerAspect = LoggerAspect;
//# sourceMappingURL=../../logger.aspect.js.map