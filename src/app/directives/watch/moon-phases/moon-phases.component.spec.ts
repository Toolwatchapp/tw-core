import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MoonPhasesComponent } from './moon-phases.component';

describe('Component: MoonPhases', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MoonPhasesComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MoonPhasesComponent],
      (component: MoonPhasesComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MoonPhasesComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MoonPhasesComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-moon-phases></app-moon-phases>
  `,
  directives: [MoonPhasesComponent]
})
class MoonPhasesComponentTestController {
}

