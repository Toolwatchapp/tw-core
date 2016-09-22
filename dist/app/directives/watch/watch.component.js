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
var watch_model_1 = require('./../../models/watch.model');
var twapi_service_1 = require('./../../services/twapi.service');
var http_1 = require('@angular/http');
var ga_service_1 = require('./../../services/ga.service');
var form_helper_1 = require('./../../helpers/form.helper');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var WatchComponent = (function () {
    /**
     * Constructor with DI
     * @param {TranslateService} private translate [description]
     * @param {TwAPIService}     private twapi     [description]
     * @param {FormBuilder}      private builder   [description]
     */
    function WatchComponent(translate, twapi, builder) {
        this.translate = translate;
        this.twapi = twapi;
        this.builder = builder;
        this.watchModel = new watch_model_1.Watch(null, null);
        this.watchSaved = new core_1.EventEmitter();
        this.brands = [];
        this.models = [];
        this.filteredBrandList = [];
        this.filteredModelList = [];
        this.error = false;
        this.submitAttempt = false;
        translate.setDefaultLang('en');
        translate.use('en');
        console.log(this.watchModel);
        console.log(this.user);
        this.watchForm = form_helper_1.FormHelper.group(this.builder, {
            id: [],
            brand: [common_1.Validators.required],
            name: [],
            caliber: [],
            year: [common_1.Validators.minLength(4), common_1.Validators.maxLength(4)],
            serial: []
        });
    }
    WatchComponent.prototype.fillFormValue = function () {
        form_helper_1.FormHelper.updateValue(this.watchForm, "id", this.watchModel.id);
        form_helper_1.FormHelper.updateValue(this.watchForm, "brand", this.watchModel.brand);
        form_helper_1.FormHelper.updateValue(this.watchForm, "name", this.watchModel.name);
        form_helper_1.FormHelper.updateValue(this.watchForm, "caliber", this.watchModel.caliber);
        form_helper_1.FormHelper.updateValue(this.watchForm, "year", this.watchModel.yearOfBuy);
        form_helper_1.FormHelper.updateValue(this.watchForm, "serial", this.watchModel.serial);
    };
    /**
     * Pull the brands
     */
    WatchComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //Get the known brands
        this.twapi.getBrands().then(function (res) {
            _this.brands = res;
        });
    };
    /**
     * [selectBrand description]
     * @param {string} brand [description]
     */
    WatchComponent.prototype.selectBrand = function (brand) {
        var _this = this;
        this.twapi.getModels(brand.toLowerCase()).then(function (res) { return _this.models = res; }, function (error) { return _this.models = []; });
        this.filteredBrandList = [];
        form_helper_1.FormHelper.updateValue(this.watchForm, 'brand', brand);
    };
    /**
     * Select a model
     * @param {string} model [description]
     */
    WatchComponent.prototype.selectModel = function (model) {
        this.filteredModelList = [];
        form_helper_1.FormHelper.updateValue(this.watchForm, 'name', model);
    };
    /**
     * Filter brands according the brand
     * @param {string} brand [description]
     */
    WatchComponent.prototype.filterBrand = function (brand) {
        this.filteredBrandList = this.brands.filter(function (element) {
            return element.name.toLowerCase().indexOf(brand.toLowerCase()) > -1;
        });
    };
    /**
     * Filters models according to model
     * @param {string} model [description]
     */
    WatchComponent.prototype.filterModel = function (model) {
        this.filteredModelList = this.models.filter(function (element) {
            return element.toLowerCase().indexOf(model.toLowerCase()) > -1;
        });
    };
    WatchComponent.prototype.ngOnInit = function () {
    };
    /**
     * Submit a watch
     */
    WatchComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.watchForm.valid) {
            this.twapi.upsertWatch(this.watchFromForm()).then(function (res) {
                ga_service_1.GAService.event('CTA', 'WATCH_UPSERT', 'SUCCESS');
                _this.user.upsertWatch(res);
                _this.watchSaved.emit(_this.user);
            }, function (error) {
                ga_service_1.GAService.event('CTA', 'WATCH_UPSERT', 'FAIL');
                _this.error = true;
            });
        }
    };
    WatchComponent.prototype.onDelete = function () {
        var _this = this;
        this.twapi.deleteWatch(this.user, this.watchFromForm()).then(function (res) {
            ga_service_1.GAService.event('CTA', 'WATCH_DELETE', 'SUCCESS');
            _this.watchSaved.emit(res);
        }, function (error) {
            ga_service_1.GAService.event('CTA', 'WATCH_DELETE', 'FAIL');
            _this.error = true;
        });
    };
    WatchComponent.prototype.watchFromForm = function () {
        return new watch_model_1.Watch((this.watchForm.value.id == "") ? null : this.watchForm.value.id, this.watchForm.value.brand, this.watchModel.historySize, this.watchModel.measures, this.watchForm.value.name, this.watchForm.value.year, this.watchForm.value.serial, this.watchForm.value.caliber);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WatchComponent.prototype, "watchSaved", void 0);
    WatchComponent = __decorate([
        core_1.Component({
            selector: 'watch-form',
            templateUrl: 'base/dist/app/directives/watch/watch.component.html',
            styleUrls: ['app/directives/watch/watch.component.css'],
            pipes: [ng2_translate_1.TranslatePipe],
            providers: [twapi_service_1.TwAPIService, http_1.HTTP_PROVIDERS],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [ng2_translate_1.TranslateService, twapi_service_1.TwAPIService, forms_1.FormBuilder])
    ], WatchComponent);
    return WatchComponent;
}());
exports.WatchComponent = WatchComponent;
//# sourceMappingURL=watch.component.js.map