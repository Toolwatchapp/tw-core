"use strict";
var core_1 = require('@angular/core');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var twapi_service_1 = require('./../../services/twapi.service');
var global_validator_1 = require('./../global-validator');
var ga_service_1 = require('./../../services/ga.service');
var forms_1 = require('@angular/forms');
/**
 * Login component. Provides a login form with controlled and
 * emits a User ($event userLogged) on successful login.
 */
var LoginComponent = (function () {
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
        this.userLogged = new core_1.EventEmitter();
        this.loginAttempt = new core_1.EventEmitter();
        //Lang definition
        translate.setDefaultLang('en');
        translate.use('en');
        this.loginForm = this.formBuilder.group({
            email: ["", forms_1.Validators.compose([forms_1.Validators.required, global_validator_1.GlobalValidator.mailFormat])],
            password: ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])]
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
            ga_service_1.GAService.event('CTA', 'FB_LOGIN', 'SUCCESS');
        }, 
        //error, maybe it's the first time the user
        //connects with fb. Tries to signup
        function (err) {
            _this.twapi.signup(fbUser.email, fbUser.id, fbUser.firstname, fbUser.lastname, fbUser.country).then(
            //Success signup, away we go
            function (res) {
                ga_service_1.GAService.event('CTA', 'FB_SIGNUP', 'SUCCESS');
                _this.userLogged.emit(res);
            }, 
            //Error, most likely the user tries to signin
            //using facebook while he has a regular 
            //account with the same email.
            function (error) {
                _this.loginAttempt.emit(false);
                ga_service_1.GAService.event('CTA', 'FB_SIGNUP', 'FAIL');
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
                ga_service_1.GAService.event('CTA', 'LOGIN', 'SUCCESS');
            }, function (err) {
                ga_service_1.GAService.event('CTA', 'LOGIN', 'FAIL');
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
        { type: core_1.Component, args: [{
                    selector: 'app-login',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = [
        { type: ng2_translate_1.TranslateService, },
        { type: twapi_service_1.TwAPIService, },
        { type: forms_1.FormBuilder, },
    ];
    LoginComponent.propDecorators = {
        'userLogged': [{ type: core_1.Output },],
        'loginAttempt': [{ type: core_1.Output },],
    };
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map