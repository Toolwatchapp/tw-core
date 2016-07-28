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
import { MoonPhasesComponent } from './moon-phases.component';

class MockElementRef implements ElementRef {
  nativeElement = {};
}

describe('Component: MoonPhases', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    MoonPhasesComponent,  
    provide(ElementRef, { useValue: new MockElementRef() })]);
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
    <moon-phases></moon-phases>
  `,
  directives: [MoonPhasesComponent]
})
class MoonPhasesComponentTestController {
}

