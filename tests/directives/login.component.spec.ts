import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './../../src/directives/login/login.component';
import { TwAPIService } from './../../src/services/twapi.service';
import { configurationProvider, ConfigurationService } from './../../src/services/configuration.service';
import { FormBuilder } from '@angular/forms';

import { TranslateServiceStub } from './../mocks/translate.service.stub';
import { TwAPIServiceStub } from './../mocks/twapi.service.stub';

import { User } from './../../src/models/user.model';

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
                { provide: ConfigurationService, useValue: configurationProvider() },
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

    it('should login fb user', () => {

        let api = TestBed.get(TwAPIService);

        let fbUser = {
            email: "a@a.com",
            token: "a",
            lastname: "b",
            firstname: "c"
        };

        api.signupFacebook = function () {
            return new Promise(
                (resolve, reject) => {
                    resolve(new User(1, "a@a.com", "b", "c", "fra", "a", "a", []));
                }
            );
        };

        comp.onFbSubmit(fbUser);

        comp.userLogged.subscribe((user: User) => {
            expect(user.id).toEqual(1);
            expect(user.email).toEqual("a@a.com");
        });

        expect(comp.errors).toEqual([]);
    });

    it('shouldn t login fb user: account is linked to email', () => {

        let api = TestBed.get(TwAPIService);

        let fbUser = {
            email: "a@a.com",
            token: "a",
            lastname: "b",
            firstname: "c"
        };

        api.signupFacebook = function () {
            return new Promise(
                (resolve, reject) => {
                    reject({ status: TwAPIService.HTTP_UNAUTHORIZED });
                }
            );
        };

        comp.onFbSubmit(fbUser);

        comp.loginAttempt.subscribe((attemp: boolean) => {
            //wait for promise to come around
            if (attemp === false) {
                expect(comp.errors).toEqual(['credentials']);
            }
        });
    });

    it('shouldn t login fb user: API error', () => {

        let api = TestBed.get(TwAPIService);

        let fbUser = {
            email: "a@a.com",
            token: "a",
            lastname: "b",
            firstname: "c"
        };

        api.signupFacebook = function () {
            return new Promise(
                (resolve, reject) => {
                    reject({ status: TwAPIService.HTTP_BAD_REQUEST });
                }
            );
        };

        comp.onFbSubmit(fbUser);

        comp.loginAttempt.subscribe((attemp: boolean) => {
            //wait for promise to come around
            if (attemp === false) {
                expect(comp.errors).toEqual(['error']);
            }
        });
    });


    it('shouldn t login email user: form invalid', () => {

        comp.onSubmit({ email: "m@m.com", password: "aa" });
        expect(comp.loginForm.valid).toBeFalsy();
    });

    it('shouldn t login email user: wrong credentials', () => {

        let api = TestBed.get(TwAPIService);

        api.login = function () {
            return new Promise(
                (resolve, reject) => {
                    reject({ status: TwAPIService.HTTP_UNAUTHORIZED });
                }
            );
        };

        comp.loginForm.controls['email'].setValue("m@m.com");
        comp.loginForm.controls['password'].setValue("aawdada");
        expect(comp.loginForm.valid).toBeTruthy();

        comp.onSubmit({ email: "m@m.com", password: "aa" });

        comp.loginAttempt.subscribe((attemp: boolean) => {
            //wait for promise to come around
            if (attemp === false) {
                expect(comp.errors).toEqual(['credentials']);
            }
        });
    });

    it('shouldn t login email user: API error', () => {

        let api = TestBed.get(TwAPIService);

        api.login = function () {
            return new Promise(
                (resolve, reject) => {
                    reject({ status: TwAPIService.HTTP_BAD_REQUEST });
                }
            );
        };

        comp.loginForm.controls['email'].setValue("m@m.com");
        comp.loginForm.controls['password'].setValue("aawdada");
        expect(comp.loginForm.valid).toBeTruthy();

        comp.onSubmit({ email: "m@m.com", password: "aa" });

        comp.loginAttempt.subscribe((attemp: boolean) => {
            //wait for promise to come around
            if (attemp === false) {
                expect(comp.errors).toEqual(['error']);
            }
        });

    });

    it('should login email user', () => {

        let api = TestBed.get(TwAPIService);

        api.login = function () {
            return new Promise(
                (resolve, reject) => {
                    resolve(new User(1, "a@a.com", "b", "c", "fra", "a", "a", []));
                }
            );
        };

        comp.loginForm.controls['email'].setValue("m@m.com");
        comp.loginForm.controls['password'].setValue("aawdada");

        comp.onSubmit({ email: "m@m.com", password: "aa" });

        comp.userLogged.subscribe((user: User) => {
            expect(user.id).toEqual(1);
            expect(user.email).toEqual("a@a.com");
        });
        expect(comp.loginForm.valid).toBeTruthy();
        expect(comp.errors).toEqual([]);
    });

    it('should reset a password', () => {

        let api = TestBed.get(TwAPIService);

        api.resetPassword = function(){};

        comp.onPasswordResetSubmit("a@a.com");

    });



});