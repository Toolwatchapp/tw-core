import { ComponentFixture, TestBed, async} from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './../../src/directives/login/login.component';
import { TwAPIService } from './../../src/services/twapi.service';
import { FormBuilder } from '@angular/forms';

import { TranslateServiceStub } from './../mocks/translate.service.stub';
import { TwAPIServiceStub } from './../mocks/twapi.service.stub';



describe('LoginComponent (inline template)', () => {

    let comp: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    //   let de:      DebugElement;
    //   let el:      HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent], // declare the test component
            imports: [FormsModule],
            providers: [

                FormBuilder,
                { provide: TranslateService, useValue: new TranslateServiceStub() },
                { provide: TwAPIService, useValue: new TwAPIServiceStub() },
            ]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(LoginComponent);
                comp = fixture.componentInstance;
            });
    }));

    it('should be thruthy', () => {

        expect(true).toBeTruthy();
    });

});