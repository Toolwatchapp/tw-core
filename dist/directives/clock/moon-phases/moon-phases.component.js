"use strict";
var core_1 = require('@angular/core');
var MoonPhasesComponent = (function () {
    function MoonPhasesComponent(elementRef) {
        this.elementRef = elementRef;
        var today = new Date();
        var lastFullMoon = new Date(2016, 10, 14, 12, 0, 0, 0);
        var diffDays = Math.round(Math.abs((today.getTime() - lastFullMoon.getTime()) / (24 * 60 * 60 * 1000)));
        this.angleMoon = diffDays * 12.41;
    }
    MoonPhasesComponent.prototype.ngAfterViewInit = function () {
        var elem = this.elementRef.nativeElement.querySelector('.moon-disque');
        elem.style.webkitTransform = 'rotateZ(' + this.angleMoon + 'deg)';
        elem.style.transform = 'rotateZ(' + this.angleMoon + 'deg)';
    };
    MoonPhasesComponent.prototype.ngOnInit = function () {
    };
    MoonPhasesComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'moon-phases',
                    template: "<div class=\"moon-phase-container\">\n               <div class=\"moon-mask\"></div>\n               <div class=\"moon-disque\"></div>\n             </div>\n             "
                },] },
    ];
    /** @nocollapse */
    MoonPhasesComponent.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    return MoonPhasesComponent;
}());
exports.MoonPhasesComponent = MoonPhasesComponent;
//# sourceMappingURL=moon-phases.component.js.map