import { EventEmitter, Output } from '@angular/core';
import { Watch } from './../../models/watch.model';
import { GAService } from './../../services/ga.service';
import { Validators } from '@angular/forms';
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
        this.calibers = [];
        this.filteredBrandList = [];
        this.filteredModelList = [];
        this.filteredCaliberList = [];
        this.error = false;
        this.submitAttempt = false;
        this.brandSelected = false;
        this.modelSelected = false;
        this.caliberSelected = false;
        translate.setDefaultLang('en');
        translate.use('en');
        this.watchForm = this.formBuilder.group({
            id: this.watchModel.id,
            brand: [this.watchModel.brand, Validators.required],
            name: [this.watchModel.name, Validators.required],
            caliber: this.watchModel.caliber,
            year: [this.watchModel.yearOfBuy, Validators.compose([Validators.minLength(4), Validators.maxLength(4)])],
            serial: this.watchModel.serial
        });
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
        this.brandSelected = true;
        this.twapi.getModels(brand.models.toLowerCase()).then(function (res) { return _this.models = res; }, function (error) { return _this.models = []; });
        this.twapi.getCalibers(brand.models.toLowerCase()).then(function (res) { return _this.calibers = res; }, function (error) { return _this.calibers = []; });
        this.filteredBrandList = [];
        this.watchModel.brand = brand.name;
    };
    /**
     * Select a model
     * @param {string} model [description]
     */
    WatchComponent.prototype.selectModel = function (model) {
        this.modelSelected = true;
        this.filteredModelList = [];
        this.watchModel.name = model;
    };
    /**
     * Select a caliber
     * @param {string} caliber [description]
     */
    WatchComponent.prototype.selectCaliber = function (caliber) {
        this.caliberSelected = true;
        this.filteredCaliberList = [];
        this.watchModel.caliber = caliber;
    };
    /**
     * Filter brands according the brand
     * @param {string} brand [description]
     */
    WatchComponent.prototype.filterBrand = function (brand) {
        var _this = this;
        if (this.brandSelected == false) {
            this.filteredBrandList = this.brands.filter(function (element) {
                return element.name.toLowerCase().indexOf(brand.toLowerCase()) > -1;
            });
        }
        else {
            setTimeout(function () { return _this.brandSelected = false; }, 5);
        }
    };
    /**
     * Filters models according to model
     * @param {string} model [description]
     */
    WatchComponent.prototype.filterModel = function (model) {
        var _this = this;
        if (this.modelSelected == false) {
            this.filteredModelList = this.models.filter(function (element) {
                return element.toLowerCase().indexOf(model.toLowerCase()) > -1;
            });
        }
        else {
            setTimeout(function () { return _this.modelSelected = false; }, 5);
        }
    };
    /**
     * Filters out calibers according to the current input
     * @param caliber
     */
    WatchComponent.prototype.filterCaliber = function (caliber) {
        var _this = this;
        if (this.caliberSelected == false) {
            this.filteredCaliberList = this.calibers.filter(function (element) {
                return element.toLowerCase().indexOf(caliber.toLowerCase()) > -1;
            });
        }
        else {
            setTimeout(function () { return _this.caliberSelected = false; }, 5);
        }
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
            this.error = false;
            this.twapi.upsertWatch(this.watchModel).then(function (res) {
                GAService.event('CTA', 'WATCH_UPSERT', 'SUCCESS');
                _this.user.upsertWatch(res);
                _this.watchSaved.emit(_this.user);
                _this.submitAttempt = false;
                _this.error = false;
            }, function (error) {
                GAService.event('CTA', 'WATCH_UPSERT', 'FAIL');
                _this.error = true;
                _this.submitAttempt = false;
            });
        }
        else {
            this.error = true;
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
    WatchComponent.propDecorators = {
        'watchSaved': [{ type: Output },],
    };
    return WatchComponent;
}());
//# sourceMappingURL=watch.component.js.map