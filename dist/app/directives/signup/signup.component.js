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
var http_1 = require('@angular/http');
var button_1 = require('@angular2-material/button');
var global_validator_1 = require('./../global-validator');
var SignupComponent = (function () {
    /**
    * Constructor w/ service injection
    * @param {TranslateService} private translate [description]
    * @param {TwAPIService}     private twapi     [description]
    * @param {FormBuilder}      private builder   [description]
    */
    function SignupComponent(translate, twapi, builder) {
        var _this = this;
        this.translate = translate;
        this.twapi = twapi;
        this.builder = builder;
        this.firstName = new common_1.Control();
        this.lastName = new common_1.Control();
        this.country = new common_1.Control();
        this.submitAttempt = false;
        this.emailTaken = false;
        this.error = false;
        this.filteredList = [];
        this.query = "";
        this.userLogged = new core_1.EventEmitter();
        translate.setDefaultLang('en');
        translate.use('en');
        translate.get("countries").subscribe(function (result) {
            _this.countries = result;
        });
        //Form constraints
        this.password = new common_1.Control('', common_1.Validators.required);
        this.email = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required,
            global_validator_1.GlobalValidator.mailFormat]));
        this.emailRepeat = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required,
            global_validator_1.GlobalValidator.mailFormat]));
        this.password = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required,
            common_1.Validators.minLength(8)]));
        this.passwordRepeat = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required,
            common_1.Validators.minLength(8)]));
        this.signupForm = builder.group({
            email: this.email,
            password: this.password,
            emailRepeat: this.emailRepeat,
            passwordRepeat: this.passwordRepeat,
            lastName: this.lastName,
            firstName: this.firstName,
            country: this.country
        }, {
            validator: common_1.Validators.compose([
                global_validator_1.GlobalValidator.match("email", "emailRepeat", { "emailMatch": true }),
                global_validator_1.GlobalValidator.match("password", "passwordRepeat", { "passwordMatch": true }),
            ])
        });
    }
    /**
     * Trims the filteredList accoring to the
     * country field
     * @param {string} query [description]
     */
    SignupComponent.prototype.filter = function (query) {
        this.filteredList = this.countries.filter(function (element) {
            return element.toLowerCase().indexOf(query.toLowerCase()) > -1;
        });
    };
    /**
     * Assign the country label when selected
     * from the list
     * @param {string} item [description]
     */
    SignupComponent.prototype.select = function (item) {
        this.query = item;
        this.filteredList = [];
    };
    /**
     * submit the form
     * @param {string    }} user [description]
     */
    SignupComponent.prototype.onSubmit = function (user) {
        var _this = this;
        this.submitAttempt = true;
        if (this.signupForm.valid) {
            this.twapi.signup(user.email, user.password, user.firstName, user.lastName, this.query).then(function (res) { _this.userLogged.emit(res); }, function (error) {
                switch (error.status) {
                    case twapi_service_1.TwAPIService.HTTP_UNAUTHORIZED:
                        _this.emailTaken = true;
                        break;
                    default:
                        _this.error = true;
                        break;
                }
            });
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SignupComponent.prototype, "userLogged", void 0);
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: 'app/directives/signup/signup.component.html',
            styleUrls: ['app/directives/signup/signup.component.css'],
            pipes: [ng2_translate_1.TranslatePipe],
            providers: [twapi_service_1.TwAPIService, http_1.HTTP_PROVIDERS],
            directives: [common_1.FORM_DIRECTIVES, button_1.MD_BUTTON_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [ng2_translate_1.TranslateService, twapi_service_1.TwAPIService, common_1.FormBuilder])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map