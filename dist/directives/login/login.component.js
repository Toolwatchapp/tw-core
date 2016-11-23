import { Component, EventEmitter } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { TwAPIService } from './../../services/twapi.service';
import { GlobalValidator } from './../global-validator';
import { GAService } from './../../services/ga.service';
import { Validators, FormBuilder } from '@angular/forms';
/**
 * Login component. Provides a login form with controlled and
 * emits a User ($event userLogged) on successful login.
 */
export var LoginComponent = (function () {
    /**
     * Constructor w/ service injection
     * @param {TranslateService} private translate [description]
     * @param {TwAPIService}     private twapi     [description]
     * @param {FormBuilder}      private builder   [description]
     */
    function LoginComponent(translate, twapi, formBuilder) {
        this.translate = translate;
        this.twapi = twapi;
        this.formBuilder = formBuilder;
        this.errors = [];
        this.userLogged = new EventEmitter();
        this.loginAttempt = new EventEmitter();
        console.log(translate, twapi, formBuilder);
        //Lang definition
        translate.setDefaultLang('en');
        translate.use('en');
        this.loginForm = this.formBuilder.group({
            email: ["", Validators.compose([Validators.required, GlobalValidator.mailFormat])],
            password: ["", Validators.compose([Validators.required, Validators.minLength(5)])]
        });
    }
    /**
     * Login an FB user
     * @param {string} fbUser [description]
     */
    LoginComponent.prototype.onFbSubmit = function (fbUser) {
        var _this = this;
        this.errors = [];
        this.loginAttempt.emit(true);
        //Tries to login an user using his fb email
        this.twapi.login(fbUser.email, fbUser.id).then(
        //success, away we go
        function (res) {
            _this.userLogged.emit(res);
            GAService.event('CTA', 'FB_LOGIN', 'SUCCESS');
        }, 
        //error, maybe it's the first time the user
        //connects with fb. Tries to signup
        function (err) {
            _this.twapi.signup(fbUser.email, fbUser.id, fbUser.firstname, fbUser.lastname, fbUser.country).then(
            //Success signup, away we go
            function (res) {
                GAService.event('CTA', 'FB_SIGNUP', 'SUCCESS');
                _this.userLogged.emit(res);
            }, 
            //Error, most likely the user tries to signin
            //using facebook while he has a regular 
            //account with the same email.
            function (error) {
                _this.loginAttempt.emit(false);
                GAService.event('CTA', 'FB_SIGNUP', 'FAIL');
                switch (err.status) {
                    case 401:
                        _this.errors.push('credentials');
                        break;
                    default:
                        _this.errors.push('error');
                        break;
                }
            });
        });
        this.loginAttempt.emit(false);
    };
    /**
     * Form submit
     * @param {string}} user [description]
     */
    LoginComponent.prototype.onSubmit = function (user) {
        var _this = this;
        this.errors = [];
        //Form constraints are ok
        if (this.loginForm.valid) {
            this.loginAttempt.emit(true);
            this.twapi.login(user.email, user.password).then(function (res) {
                _this.userLogged.emit(res);
                GAService.event('CTA', 'LOGIN', 'SUCCESS');
            }, function (err) {
                GAService.event('CTA', 'LOGIN', 'FAIL');
                switch (err.status) {
                    case 401:
                        _this.errors.push('credentials');
                        break;
                    default:
                        _this.errors.push('error');
                        break;
                }
            });
            this.loginAttempt.emit(false);
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'watches',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = [
        { type: TranslateService, },
        { type: TwAPIService, },
        { type: FormBuilder, },
    ];
    return LoginComponent;
}());
//# sourceMappingURL=login.component.js.map