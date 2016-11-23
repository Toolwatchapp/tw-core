import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Watch } from './../../models/watch.model';
import { TwAPIService } from './../../services/twapi.service';
import { GAService } from './../../services/ga.service';
import { FormBuilder, Validators } from '@angular/forms';
/**
 * From to add, delete and update watches
 */
export var WatchComponent = (function () {
    /**
     * Constructor with DI
     * @param {TranslateService} private translate [description]
     * @param {TwAPIService}     private twapi     [description]
     * @param {FormBuilder}      private builder   [description]
     */
    function WatchComponent(translate, twapi, formBuilder) {
        var _this = this;
        this.translate = translate;
        this.twapi = twapi;
        this.formBuilder = formBuilder;
        this.watchSaved = new EventEmitter();
        this.watchModel = new Watch(null, "");
        this.brands = [];
        this.models = [];
        this.filteredBrandList = [];
        this.filteredModelList = [];
        this.error = false;
        this.submitAttempt = false;
        translate.setDefaultLang('en');
        translate.use('en');
        this.initForm();
        this.twapi.getBrands().then(function (res) {
            _this.brands = res;
        });
    }
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
    /**
     * Select a model
     * @param {string} model [description]
     */
    WatchComponent.prototype.selectModel = function (model) {
        this.filteredModelList = [];
        this.watchModel.name = model;
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
    WatchComponent.prototype.initForm = function () {
        this.watchForm = this.formBuilder.group({
            id: this.watchModel.id,
            brand: [this.watchModel.brand, Validators.required],
            name: [this.watchModel.name, Validators.required],
            caliber: this.watchModel.caliber,
            year: [this.watchModel.yearOfBuy, Validators.compose([Validators.minLength(4), Validators.maxLength(4)])],
            serial: this.watchModel.serial
        });
    };
    /**
     * Submit a watch
     */
    WatchComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.watchForm.valid) {
            this.twapi.upsertWatch(this.watchModel).then(function (res) {
                GAService.event('CTA', 'WATCH_UPSERT', 'SUCCESS');
                _this.user.upsertWatch(res);
                _this.watchSaved.emit(_this.user);
                _this.submitAttempt = false;
            }, function (error) {
                GAService.event('CTA', 'WATCH_UPSERT', 'FAIL');
                _this.error = true;
                _this.submitAttempt = false;
            });
        }
    };
    WatchComponent.prototype.onDelete = function () {
        var _this = this;
        this.submitAttempt = true;
        this.twapi.deleteWatch(this.user, this.watchModel).then(function (res) {
            GAService.event('CTA', 'WATCH_DELETE', 'SUCCESS');
            _this.watchSaved.emit(res);
            _this.submitAttempt = false;
        }, function (error) {
            GAService.event('CTA', 'WATCH_DELETE', 'FAIL');
            _this.error = true;
            _this.submitAttempt = false;
        });
    };
    WatchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'watches',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    WatchComponent.ctorParameters = [
        { type: TranslateService, },
        { type: TwAPIService, },
        { type: FormBuilder, },
    ];
    WatchComponent.propDecorators = {
        'watchSaved': [{ type: Output },],
    };
    return WatchComponent;
}());
//# sourceMappingURL=watch.component.js.map