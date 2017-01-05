import { Component, ElementRef } from '@angular/core';
export var MoonPhasesComponent = (function () {
    function MoonPhasesComponent(elementRef) {
        this.elementRef = elementRef;
        var today = new Date();
        var lastFullMoon = new Date(2016, 10, 14, 12, 0, 0, 0);
        var diffDays = Math.round(Math.abs((today.getTime() - lastFullMoon.getTime()) / (24 * 60 * 60 * 1000)));
        this.angleMoon = diffDays * 6.101694915254;
    }
    MoonPhasesComponent.prototype.ngAfterViewInit = function () {
        var elem = this.elementRef.nativeElement.querySelector('.moon-disque');
        elem.style.webkitTransform = 'rotateZ(' + this.angleMoon + 'deg)';
        elem.style.transform = 'rotateZ(' + this.angleMoon + 'deg)';
    };
    MoonPhasesComponent.prototype.ngOnInit = function () {
    };
    MoonPhasesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'moon-phases',
                    template: "<div class=\"moon-phase-container\">\n\t<div class=\"moon-mask\"></div>\n\t<div class=\"moon-disque\"></div>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    MoonPhasesComponent.ctorParameters = [
        { type: ElementRef, },
    ];
    return MoonPhasesComponent;
}());
//# sourceMappingURL=/mnt/dev/1-NodeWorkspace/toolwatch/tw-core/src/src/directives/clock/moon-phases/moon-phases.component.js.map