"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var astro_1 = require('./../astro');
var aspect_1 = require('aspect.js/dist/lib/aspect');
var logger_aspect_1 = require('./../../../aspects/logger.aspect');
var MoonPhasesComponent = (function (_super) {
    __extends(MoonPhasesComponent, _super);
    function MoonPhasesComponent(elementRef) {
        _super.call(this);
        this.elementRef = elementRef;
        this.illum = this.getMoonIllumination(new Date());
        this.pos = this.getMoonPosition(new Date(), 0, 0);
        this.angleMoon = this.illum.angle - this.pos.parallacticAngle;
        console.log(this.illum.angle - this.pos.parallacticAngle);
        console.log();
    }
    MoonPhasesComponent.prototype.ngAfterViewInit = function () {
        var elem = this.elementRef.nativeElement.querySelector('.moon-disque');
        elem.style.webkitTransform = 'rotateZ(' + this.angleMoon * 360 + 'deg)';
        elem.style.transform = 'rotateZ(' + this.angleMoon * 360 + 'deg)';
    };
    MoonPhasesComponent.prototype.ngOnInit = function () {
    };
    MoonPhasesComponent = __decorate([
        aspect_1.Wove(logger_aspect_1.LoggerAspect),
        core_1.Component({
            selector: 'moon-phases',
            template: '',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MoonPhasesComponent);
    return MoonPhasesComponent;
}(astro_1.Astro));
exports.MoonPhasesComponent = MoonPhasesComponent;
//# sourceMappingURL=moon-phases.component.js.map