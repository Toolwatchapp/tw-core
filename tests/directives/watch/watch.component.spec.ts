import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
// import { By }              from '@angular/platform-browser';
// import { DebugElement }    from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { WatchComponent } from './../../../src/directives/watch/watch.component';
import { TwAPIService } from './../../../src/services/twapi.service';
import { FormBuilder } from '@angular/forms';

import { TranslateServiceStub } from './../../mocks/translate.service.stub';
import { TwAPIServiceStub } from './../../mocks/twapi.service.stub';

import { User } from './../../../src/models/user.model';



describe('WatchComponent (inline template)', () => {

  let comp: WatchComponent;
  let fixture: ComponentFixture<WatchComponent>;
  //   let de:      DebugElement;
  //   let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WatchComponent], // declare the test component
      imports: [FormsModule],
      providers: [

        FormBuilder
      ]
    })
      .overrideComponent(WatchComponent, {
        set: {
          providers: [
            { provide: TranslateService, useValue: new TranslateServiceStub() },
            { provide: TwAPIService, useValue: new TwAPIServiceStub() },
          ]
        }
      })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(WatchComponent);
        comp = fixture.componentInstance;
      });
  }));

  it('should select a Cartier', () => {

    comp.filterBrand("Cart");

    expect(comp.filteredBrandList).toEqual(
      [{ name: "Cartier", icon: "cartier.ico", models: "cartier.models" }]
    );

    comp.selectBrand({ name: "Cartier", icon: "cartier.ico", models: "cartier.models" })

    expect(comp.brandSelected).toEqual(true);
    expect(comp.filteredBrandList).toEqual([]);
    expect(comp.watchModel.brand).toEqual("Cartier");

    comp.models = ["A", "B", "C"];
    comp.filterModel("A")
    expect(comp.filteredModelList).toEqual(["A"]);
    comp.selectModel("A")

    expect(comp.modelSelected).toEqual(true);
    expect(comp.filteredModelList).toEqual([]);
    expect(comp.watchModel.name).toEqual("A");

    comp.calibers = ["1", "2", "3"]

    comp.filterCaliber("1")
    expect(comp.filteredCaliberList).toEqual(["1"]);
    comp.selectCaliber("1")

    expect(comp.caliberSelected).toEqual(true);
    expect(comp.filteredCaliberList).toEqual([]);
    expect(comp.watchModel.caliber).toEqual("1");

  });

  it('shouldn\'t change the model', fakeAsync(() => {

    comp.brandSelected = true;
    comp.filterBrand("Cart");
    expect(comp.filteredBrandList).toEqual([]);

    comp.modelSelected = true;
    comp.filterModel("A");
    expect(comp.filteredModelList).toEqual([]);

    comp.caliberSelected = true;
    comp.filterCaliber("1");
    expect(comp.filteredCaliberList).toEqual([]);

    tick(500);

    fixture.detectChanges();
    expect(comp.brandSelected).toEqual(false);
    expect(comp.modelSelected).toEqual(false);
    expect(comp.caliberSelected).toEqual(false);

  }));

  it('shouldn\'t submit a watch as the form is empty', fakeAsync(() => {

    expect(comp.watchForm.valid).toBeFalsy();
    comp.onSubmit();
    expect(comp.submitAttempt).toEqual(true);
    expect(comp.error).toEqual(true);

  }));

  it('shouldn\'t submit a watch as the form is falsy', fakeAsync(() => {

    comp.watchForm.controls['brand'].setValue("Cartier");
    comp.watchForm.controls['year'].setValue("12");

    expect(comp.watchForm.valid).toBeFalsy();
    comp.onSubmit();
    expect(comp.submitAttempt).toEqual(true);
    expect(comp.error).toEqual(true);

  }));

  it('shouldn t submit a watch as the date is invalid', fakeAsync(() => {

    comp.watchForm.controls['brand'].setValue("Cartier");
    comp.watchForm.controls['year'].setValue("12");

    expect(comp.watchForm.valid).toBeFalsy();
    comp.onSubmit();
    expect(comp.submitAttempt).toBeTruthy();
    expect(comp.error).toBeTruthy();

  }));

  it('should submit a watch', fakeAsync(() => {

    comp.user = new User(1, "m@m.com", "m", "m", "CA", "20", "abc", []);

    comp.watchForm.controls['brand'].setValue("Cartier");
    comp.watchForm.controls['name'].setValue("A");
    comp.watchForm.controls['year'].setValue("1989");

    comp.watchModel.brand = "Cartier";
    comp.watchModel.name = "A";
    comp.watchModel.yearOfBuy = 1989;

    expect(comp.watchForm.valid).toBeTruthy();
    comp.onSubmit();
    expect(comp.submitAttempt).toBeTruthy();

    tick(500);

    expect(comp.user.watches.length).toEqual(1);

  }));

  it('should trigger an API error on save', fakeAsync(() => {

    comp.user = new User(1, "m@m.com", "m", "m", "CA", "20", "abc", []);

    comp.watchForm.controls['brand'].setValue("Cartier");
    comp.watchForm.controls['name'].setValue("A");
    comp.watchForm.controls['year'].setValue("1989");

    comp.watchModel = null;

    expect(comp.watchForm.valid).toBeTruthy();
    comp.onSubmit();
    expect(comp.submitAttempt).toBeTruthy();

    tick(500);

    expect(comp.submitAttempt).toBeFalsy();
    expect(comp.error).toBeTruthy();
  }));

  it('should trigger an API error on delete', fakeAsync(() => {
    comp.user = null;
    comp.onDelete();
    expect(comp.submitAttempt).toBeTruthy();

    tick(500);

    expect(comp.submitAttempt).toBeFalsy();
    expect(comp.error).toBeTruthy();
  }));

  it('should delete', fakeAsync(() => {

    comp.user = new User(1, "m@m.com", "m", "m", "CA", "20", "abc", []);
    comp.onDelete();
    expect(comp.submitAttempt).toBeTruthy();

    tick(500);

    expect(comp.submitAttempt).toBeFalsy();
    expect(comp.error).toBeFalsy();
  }));

});