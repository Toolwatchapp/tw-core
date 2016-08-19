"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var common_1 = require('@angular/common');
var twapi_service_1 = require('./../../services/twapi.service');
var global_validator_1 = require('./../global-validator');
var ga_service_1 = require('./../../services/ga.service');
var form_helper_1 = require('./../../helpers/form.helper');
var forms_1 = require('@angular/forms');
var LoginComponent = (function () {
    /**
     * Constructor w/ service injection
     * @param {TranslateService} private translate [description]
     * @param {TwAPIService}     private twapi     [description]
     * @param {FormBuilder}      private builder   [description]
     */
    function LoginComponent(translate, twapi, builder) {
        this.translate = translate;
        this.twapi = twapi;
        this.builder = builder;
        this.submitAttempt = false;
        this.credientials = false;
        this.error = false;
        this.userLogged = new core_1.EventEmitter();
        this.loginAttempt = new core_1.EventEmitter();
        this.loginError = new core_1.EventEmitter();
        //Lang definition
        translate.setDefaultLang('en');
        translate.use('en');
        this.loginForm = form_helper_1.FormHelper.group(this.builder, {
            email: [common_1.Validators.required, global_validator_1.GlobalValidator.mailFormat],
            password: [common_1.Validators.required, common_1.Validators.minLength(5)]
        });
    }
    /**
     * Form submit
     * @param {string}} user [description]
     */
    LoginComponent.prototype.onSubmit = function (user) {
        var _this = this;
        this.submitAttempt = true;
        this.error = false;
        this.credientials = false;
        //Form constraints are ok
        if (this.loginForm.valid) {
            this.loginAttempt.emit(true);
            this.twapi.login(user.email, user.password).then(function (res) {
                _this.userLogged.emit(res);
                ga_service_1.GAService.event('CTA', 'LOGIN', 'SUCCESS');
            }, function (err) {
                ga_service_1.GAService.event('CTA', 'LOGIN', 'FAIL');
                _this.loginAttempt.emit(false);
                switch (err.status) {
                    case 401:
                        _this.credientials = true;
                        break;
                    default:
                        _this.error = true;
                        break;
                }
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LoginComponent.prototype, "userLogged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LoginComponent.prototype, "loginAttempt", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LoginComponent.prototype, "loginError", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: 'app/directives/login/login.component.html',
            styleUrls: ['app/directives/login/login.component.css'],
            pipes: [ng2_translate_1.TranslatePipe],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [ng2_translate_1.TranslateService, twapi_service_1.TwAPIService, forms_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map