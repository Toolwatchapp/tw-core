import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, ElementRef, provide } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ClockComponent } from './clock.component';
import { MoonPhasesComponent } from './moon-phases/moon-phases.component';

class MockElementRef implements ElementRef {
  nativeElement = {};
}

describe('Component: Clock', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ClockComponent, MoonPhasesComponent, provide(ElementRef, { useValue: new MockElementRef() })]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ClockComponent],
      (component: ClockComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ClockComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ClockComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <clock></clock>
  `,
  directives: [ClockComponent]
})
class ClockComponentTestController {
}

