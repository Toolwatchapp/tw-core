import { ComponentFixture, TestBed, async, fakeAsync } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './../../src/directives/signup/signup.component';
import { TwAPIService } from './../../src/services/twapi.service';
import { FormBuilder } from '@angular/forms';
import { AnalyticsService } from './../../src/services/analytics.service';
import { TwAPIServiceStub } from './../mocks/twapi.service.stub';

import { User } from './../../src/models/user.model';


describe('SignupComponent (inline template)', () => {

    let comp: SignupComponent;
    let fixture: ComponentFixture<SignupComponent>;
    //   let de:      DebugElement;
    //   let el:      HTMLElement;
    let user = {
        email: "null",
        password: "null",
        emailRepeat: "null",
        passwordRepeat: "null",
        lastName: "null",
        firstName: "null"
    };
    let countryEmitter = new EventEmitter();
    let translateServiceStub = { 
        setDefaultLang(lang: string) { },
        use(lang: string) { },
        get(key:string) { return countryEmitter; }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignupComponent], // declare the test component
            imports: [FormsModule],
            providers: [
                AnalyticsService,
                FormBuilder,
                { provide: TranslateService, useValue: translateServiceStub },
                { provide: TwAPIService, useValue: new TwAPIServiceStub() },
            ]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(SignupComponent);
                comp = fixture.componentInstance;
            });
    }));


    it('should return Canada', () => {

        countryEmitter.emit(["Canada", "France", "Suisse"]);
        comp.filter("Can");
        expect(comp.filteredList).toEqual(["Canada"]);

    });

    it('should select Canada', () => {

        countryEmitter.emit(["Canada", "France", "Suisse"]);
        comp.filter("Can");
        expect(comp.filteredList).toEqual(["Canada"]);
        comp.select("Canada");
        expect(comp.query).toEqual("Canada");
        expect(comp.filteredList).toEqual([]);

    });

    it('should\'nt submit: form invalid', () => {

        comp.onSubmit(user);
        expect(comp.submitAttempt).toBeTruthy();
        expect(comp.signupForm.valid).toBeFalsy();

    });

    it('should\'nt submit: email wrong format', () => {

        comp.signupForm.controls['email'].setValue("adawd");
        comp.signupForm.controls['emailRepeat'].setValue("adawd");

        comp.onSubmit(user);
        expect(comp.submitAttempt).toBeTruthy();
        expect(comp.signupForm.valid).toBeFalsy();

    });

    it('should\'nt submit: email mismatch', () => {

        user.emailRepeat = "n@n.com";
        user.email = "m@m.com";

        comp.onSubmit(user);
        expect(comp.submitAttempt).toBeTruthy();
        expect(comp.signupForm.valid).toBeFalsy();
        expect(comp.errors).toEqual(["email-match"]);

        user.emailRepeat = null;
        user.email = null;
    });

    it('should\'nt submit: password format', () => {

        comp.signupForm.controls['password'].setValue("a");
        comp.signupForm.controls['passwordRepeat'].setValue("a");

        comp.onSubmit(user);
        expect(comp.submitAttempt).toBeTruthy();
        expect(comp.signupForm.valid).toBeFalsy();
    });

    it('should\'nt submit: password mismatch', () => {

        user.password = "aaaaa";
        user.passwordRepeat = "bbbbb";

        comp.onSubmit(user);
        expect(comp.submitAttempt).toBeTruthy();
        expect(comp.signupForm.valid).toBeFalsy();
        expect(comp.errors).toEqual(["password-match"]);

        user.password = null;
        user.passwordRepeat = null;
    });

    it('should create an user', fakeAsync(() => {

        comp.signupForm.controls['password'].setValue("qwertyui");
        comp.signupForm.controls['passwordRepeat'].setValue("qwertyui");
        comp.signupForm.controls['email'].setValue("m@m.com");
        comp.signupForm.controls['emailRepeat'].setValue("m@m.com");
        comp.signupForm.controls['lastName'].setValue("lname");
        comp.signupForm.controls['firstName'].setValue("fname");
        comp.signupForm.controls['country'].setValue("country");

        user.password = "qwertyui";
        user.passwordRepeat = "qwertyui";
        user.email = "m@m.com";
        user.emailRepeat = "m@m.com";
        user.lastName = "lname";
        user.firstName = "fname";

        let api = TestBed.get(TwAPIService);

        api.signup = function (
            email: string,
            password: string,
            lastName: string,
            firstName: string,
            country: string) {

            return new Promise(
                (resolve, reject) => {
                    resolve(user);
                }
            );
        };

        expect(comp.signupForm.valid).toBeTruthy();

        comp.onSubmit(user);

        comp.userLogged.subscribe((userLogged: User) => {
            expect(userLogged.email).toEqual(user.email);
        });

    }));

    it('shouldn\'t create an user: email taken', fakeAsync(() => {

        comp.signupForm.controls['password'].setValue("qwertyui");
        comp.signupForm.controls['passwordRepeat'].setValue("qwertyui");
        comp.signupForm.controls['email'].setValue("m@m.com");
        comp.signupForm.controls['emailRepeat'].setValue("m@m.com");
        comp.signupForm.controls['lastName'].setValue("lname");
        comp.signupForm.controls['firstName'].setValue("fname");
        comp.signupForm.controls['country'].setValue("country");

        user.password = "qwertyui";
        user.passwordRepeat = "qwertyui";
        user.email = "m@m.com";
        user.emailRepeat = "m@m.com";
        user.lastName = "lname";
        user.firstName = "fname";

        let api = TestBed.get(TwAPIService);

        api.signup = function (
            email: string,
            password: string,
            lastName: string,
            firstName: string,
            country: string) {

            return new Promise(
                (resolve, reject) => {
                    reject({ status: TwAPIService.HTTP_UNAUTHORIZED });
                }
            );
        };

        expect(comp.signupForm.valid).toBeTruthy();

        comp.onSubmit(user);

        comp.signupAttempt.subscribe((attemp: boolean) => {
            //wait for promise to come around
            if (attemp === false) {
                expect(comp.errors).toEqual(['email-taken']);
            }
        });

    }));

    it('shouldn\'t create an user: api error', fakeAsync(() => {

        comp.signupForm.controls['password'].setValue("qwertyui");
        comp.signupForm.controls['passwordRepeat'].setValue("qwertyui");
        comp.signupForm.controls['email'].setValue("m@m.com");
        comp.signupForm.controls['emailRepeat'].setValue("m@m.com");
        comp.signupForm.controls['lastName'].setValue("lname");
        comp.signupForm.controls['firstName'].setValue("fname");
        comp.signupForm.controls['country'].setValue("country");

        user.password = "qwertyui";
        user.passwordRepeat = "qwertyui";
        user.email = "m@m.com";
        user.emailRepeat = "m@m.com";
        user.lastName = "lname";
        user.firstName = "fname";

        let api = TestBed.get(TwAPIService);

        api.signup = function (
            email: string,
            password: string,
            lastName: string,
            firstName: string,
            country: string) {

            return new Promise(
                (resolve, reject) => {
                    reject({ status: TwAPIService.HTTP_BAD_REQUEST });
                }
            );
        };

        expect(comp.signupForm.valid).toBeTruthy();

        comp.onSubmit(user);

        comp.signupAttempt.subscribe((attemp: boolean) => {
            //wait for promise to come around
            if (attemp === false) {
                expect(comp.errors).toEqual(['error']);
            }
        });

    }));
});