import { ComponentFixture, TestBed, async } from '@angular/core/testing';
// import { By }              from '@angular/platform-browser';
// import { DebugElement }    from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { WatchComponent } from './../../../src/directives/watch/watch.component';
import { TwAPIService } from './../../../src/services/twapi.service';
import { FormBuilder } from '@angular/forms';

import { TranslateServiceStub } from './../../mocks/translate.service.stub';
import { TwAPIServiceStub } from './../../mocks/twapi.service.stub';



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

  it('should display original title', () => {

    comp.filterBrand("Cart");

    expect(comp.filteredBrandList).toEqual(
      [{ name: "Cartier", icon: "cartier.ico", models: "cartier.models" }]
    );
  });
});