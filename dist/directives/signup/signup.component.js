"use strict";
var core_1 = require('@angular/core');
var twapi_service_1 = require('./../../services/twapi.service');
var global_validator_1 = require('./../global-validator');
var ga_service_1 = require('./../../services/ga.service');
var forms_1 = require('@angular/forms');
/**
 * Signup form. Emits a userLogged event on new user signup
 */
var SignupComponent = (function () {
    /**
    * Constructor w/ service injection
    * @param {TranslateService} private translate [description]
    * @param {TwAPIService}     private twapi     [description]
    * @param {FormBuilder}      private builder   [description]
    */
    function SignupComponent(translate, twapi, formBuilder) {
        var _this = this;
        this.translate = translate;
        this.twapi = twapi;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.errors = [];
        this.filteredList = [];
        this.query = "";
        this.userLogged = new core_1.EventEmitter();
        this.signupAttempt = new core_1.EventEmitter();
        translate.setDefaultLang('en');
        translate.use('en');
        translate.get("countries").subscribe(function (result) {
            _this.countries = result;
        });
        this.signupForm = this.formBuilder.group({
            email: ["", forms_1.Validators.compose([forms_1.Validators.required, global_validator_1.GlobalValidator.mailFormat])],
            emailRepeat: ["", forms_1.Validators.compose([forms_1.Validators.required, global_validator_1.GlobalValidator.mailFormat])],
            password: ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8)])],
            passwordRepeat: ["",
                forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(8)
                ])
            ],
            lastName: "",
            firstName: "",
            country: ""
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
        this.errors = [];
        if (this.signupForm.valid &&
            user.password == user.passwordRepeat &&
            user.email == user.emailRepeat) {
            this.signupAttempt.emit(true);
            this.twapi.signup(user.email, user.password, user.firstName, user.lastName, this.query).then(function (res) {
                ga_service_1.GAService.event('CTA', 'SIGNUP', 'SUCCESS');
                _this.userLogged.emit(res);
            }, function (error) {
                ga_service_1.GAService.event('CTA', 'SIGNUP', 'FAIL');
                switch (error.status) {
                    case twapi_service_1.TwAPIService.HTTP_UNAUTHORIZED:
                        _this.errors.push('email-taken');
                        break;
                    default:
                        _this.errors.push('error');
                        break;
                }
            });
            this.signupAttempt.emit(false);
        }
        else {
            if (user.password != user.passwordRepeat) {
                this.errors.push('password-match');
            }
            if (user.email != user.emailRepeat) {
                this.errors.push('email-match');
            }
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.propDecorators = {
        'userLogged': [{ type: core_1.Output },],
        'signupAttempt': [{ type: core_1.Output },],
    };
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map