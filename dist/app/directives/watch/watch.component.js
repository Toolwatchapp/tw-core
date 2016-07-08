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
var common_1 = require('@angular/common');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var watch_model_1 = require('./../../models/watch.model');
var user_model_1 = require('./../../models/user.model');
var twapi_service_1 = require('./../../services/twapi.service');
var http_1 = require('@angular/http');
var button_1 = require('@angular2-material/button');
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
        this.watchSaved = new core_1.EventEmitter();
        this.brand = new common_1.Control('', common_1.Validators.required);
        this.model = new common_1.Control();
        this.caliber = new common_1.Control();
        this.year = new common_1.Control('', common_1.Validators.compose([common_1.Validators.maxLength(4),
            common_1.Validators.minLength(4)]));
        this.serial = new common_1.Control();
        this.brands = [];
        this.models = [];
        this.filteredBrandList = [];
        this.filteredModelList = [];
        this.error = false;
        this.submitAttempt = false;
        translate.setDefaultLang('en');
        translate.use('en');
        //Construct form
        this.watchForm = builder.group({
            brand: this.brand,
            model: this.model,
            caliber: this.caliber,
            year: this.year,
            serial: this.serial
        });
        //Create an empty watch if none was passed
        if (this.watchModel === undefined) {
            this.watchModel = new watch_model_1.Watch(null, null);
        }
    }
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
        this.watchModel.brand = brand;
    };
    WatchComponent.prototype.selectModel = function (model) {
        this.filteredModelList = [];
        this.watchModel.name = model;
    };
    WatchComponent.prototype.filterBrand = function (brand) {
        this.filteredBrandList = this.brands.filter(function (element) {
            return element.name.toLowerCase().indexOf(brand.toLowerCase()) > -1;
        });
    };
    WatchComponent.prototype.filterModel = function (model) {
        this.filteredModelList = this.models.filter(function (element) {
            return element.toLowerCase().indexOf(model.toLowerCase()) > -1;
        });
    };
    WatchComponent.prototype.ngOnInit = function () {
    };
    WatchComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.watchForm.valid) {
            this.twapi.upsertWatch(this.watchModel).then(function (res) {
                _this.user.watches.push(res);
                _this.watchSaved.emit(_this.user);
            }, function (error) { return _this.error = true; });
        }
    };
    WatchComponent.prototype.onDelete = function () {
        var _this = this;
        this.twapi.deleteWatch(this.user, this.watchModel).then(function (res) { return _this.watchSaved.emit(res); }, function (error) { return _this.error = true; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', watch_model_1.Watch)
    ], WatchComponent.prototype, "watchModel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_model_1.User)
    ], WatchComponent.prototype, "user", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WatchComponent.prototype, "watchSaved", void 0);
    WatchComponent = __decorate([
        core_1.Component({
            selector: 'watch-form',
            templateUrl: 'app/directives/watch/watch.component.html',
            styleUrls: ['app/directives/watch/watch.component.css'],
            pipes: [ng2_translate_1.TranslatePipe],
            providers: [twapi_service_1.TwAPIService, http_1.HTTP_PROVIDERS],
            directives: [common_1.FORM_DIRECTIVES, button_1.MD_BUTTON_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [ng2_translate_1.TranslateService, twapi_service_1.TwAPIService, common_1.FormBuilder])
    ], WatchComponent);
    return WatchComponent;
}());
exports.WatchComponent = WatchComponent;
//# sourceMappingURL=watch.component.js.map