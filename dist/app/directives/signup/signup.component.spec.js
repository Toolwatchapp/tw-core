// import {
//   beforeEach,
//   beforeEachProviders,
//   describe,
//   expect,
//   it,
//   inject,
// } from '@angular/core/testing';
// import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
// import { Component } from '@angular/core';
// import { By } from '@angular/platform-browser';
// import { SignupComponent } from './signup.component';
// import {provide} from '@angular/core';
// import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
// import {HTTP_PROVIDERS, Http} from '@angular/http';
// import {GAService} from './../../services/ga.service';
// import {TwAPIService} from './../../services/twapi.service';
// describe('Component: Signup', () => {
//   let builder: TestComponentBuilder;
//   beforeEachProviders(() => [SignupComponent, provide(TranslateLoader, {
//         useFactory: (http: Http) => new TranslateStaticLoader(http, 'base/dist/app/assets/i18n', '.json'),
//         deps: [Http]
//     }), HTTP_PROVIDERS,GAService,TranslateService, TwAPIService]);
//   beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
//     builder = tcb;
//   }));
//   it('should inject the component', inject([SignupComponent],
//       (component: SignupComponent) => {
//     expect(component).toBeTruthy();
//   }));
//   it('should create the component', inject([], () => {
//     return builder.createAsync(SignupComponentTestController)
//       .then((fixture: ComponentFixture<any>) => {
//         let query = fixture.debugElement.query(By.directive(SignupComponent));
//         expect(query).toBeTruthy();
//         expect(query.componentInstance).toBeTruthy();
//       });
//   }));
// });
// @Component({
//   selector: 'test',
//   template: `
//     <app-signup></app-signup>
//   `,
//   directives: [SignupComponent]
// })
// class SignupComponentTestController {
// }
//# sourceMappingURL=signup.component.spec.js.map