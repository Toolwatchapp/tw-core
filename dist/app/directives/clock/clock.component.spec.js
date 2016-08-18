/// <reference path="../../../../typings/globals/jasmine/index.d.ts" />
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
// import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
var core_1 = require('@angular/core');
var clock_component_1 = require('./clock.component');
var MockElementRef = (function () {
    function MockElementRef() {
        this.nativeElement = {};
    }
    return MockElementRef;
}());
// describe('Component: Clock', () => {
//   let builder: TestComponentBuilder;
//   beforeEach(() => addProviders([ClockComponent, MoonPhasesComponent, provide(ElementRef, { useValue: new MockElementRef() })]));
//   beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
//     builder = tcb;
//   }));
//   it('should inject the component', inject([ClockComponent],
//       (component: ClockComponent) => {
//     expect(component).toBeTruthy();
//   }));
//   it('should create the component', inject([], () => {
//     return builder.createAsync(ClockComponentTestController)
//       .then((fixture: ComponentFixture<any>) => {
//         let query = fixture.debugElement.query(By.directive(ClockComponent));
//         expect(query).toBeTruthy();
//         expect(query.componentInstance).toBeTruthy();
//       });
//   }));
// });
var ClockComponentTestController = (function () {
    function ClockComponentTestController() {
    }
    ClockComponentTestController = __decorate([
        core_1.Component({
            selector: 'test',
            template: "\n    <clock></clock>\n  ",
            directives: [clock_component_1.ClockComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ClockComponentTestController);
    return ClockComponentTestController;
}());
//# sourceMappingURL=../../../clock.component.spec.js.map