(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/http"), require("@angular/common"), require("rxjs/Observable"), require("@angular/platform-browser"), require("rxjs/Rx"), require("rxjs/add/observable/of"), require("rxjs/add/operator/map"), require("rxjs/add/operator/merge"), require("rxjs/add/operator/share"), require("rxjs/add/operator/take"), require("rxjs/add/operator/toArray"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/http", "@angular/common", "rxjs/Observable", "@angular/platform-browser", "rxjs/Rx", "rxjs/add/observable/of", "rxjs/add/operator/map", "rxjs/add/operator/merge", "rxjs/add/operator/share", "rxjs/add/operator/take", "rxjs/add/operator/toArray"], factory);
	else if(typeof exports === 'object')
		exports["tw-core"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/http"), require("@angular/common"), require("rxjs/Observable"), require("@angular/platform-browser"), require("rxjs/Rx"), require("rxjs/add/observable/of"), require("rxjs/add/operator/map"), require("rxjs/add/operator/merge"), require("rxjs/add/operator/share"), require("rxjs/add/operator/take"), require("rxjs/add/operator/toArray"));
	else
		root["tw-core"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/http"], root["@angular/common"], root["rxjs/Observable"], root["@angular/platform-browser"], root["rxjs/Rx"], root["rxjs/add/observable/of"], root["rxjs/add/operator/map"], root["rxjs/add/operator/merge"], root["rxjs/add/operator/share"], root["rxjs/add/operator/take"], root["rxjs/add/operator/toArray"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_42__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_translate_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_translate_pipe__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_translate_store__ = __webpack_require__(26);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["b"]; });
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateModule; });















var TranslateModule = (function () {
    function TranslateModule() {
    }
    /**
     * Use this method in your root module to provide the TranslateService
     * @param {TranslateModuleConfig} config
     * @returns {ModuleWithProviders}
     */
    TranslateModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["a" /* TranslateLoader */], useClass: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["b" /* TranslateFakeLoader */] },
                config.parser || { provide: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["a" /* TranslateParser */], useClass: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["b" /* TranslateDefaultParser */] },
                config.missingTranslationHandler || { provide: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["a" /* MissingTranslationHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["b" /* FakeMissingTranslationHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__src_translate_store__["a" /* TranslateStore */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["a" /* USE_STORE */], useValue: config.isolate },
                __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["b" /* TranslateService */]
            ]
        };
    };
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {TranslateModuleConfig} config
     * @returns {ModuleWithProviders}
     */
    TranslateModule.forChild = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["a" /* TranslateLoader */], useClass: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["b" /* TranslateFakeLoader */] },
                config.parser || { provide: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["a" /* TranslateParser */], useClass: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["b" /* TranslateDefaultParser */] },
                config.missingTranslationHandler || { provide: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["a" /* MissingTranslationHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["b" /* FakeMissingTranslationHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["a" /* USE_STORE */], useValue: config.isolate },
                __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["b" /* TranslateService */]
            ]
        };
    };
    return TranslateModule;
}());

TranslateModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_6__src_translate_pipe__["a" /* TranslatePipe */],
                    __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__["a" /* TranslateDirective */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_6__src_translate_pipe__["a" /* TranslatePipe */],
                    __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__["a" /* TranslateDirective */]
                ]
            },] },
];
/** @nocollapse */
TranslateModule.ctorParameters = function () { return []; };


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_watch_model__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_model_factory__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analytics_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_string_helper__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__configuration_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwAPIService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TwAPIService = TwAPIService_1 = (function () {
    /**
     * Inject http service
     * @param {Http} private http
     */
    function TwAPIService(http, analytics, config) {
        this.http = http;
        this.analytics = analytics;
        this.config = config;
        this.accurateTime();
    }
    TwAPIService.resetTime = function () {
        TwAPIService_1.time = undefined;
    };
    /**
     * Log a user using email and password
     * @param  {string}        email
     * @param  {string}        password
     * @return {Promise<User>}
     */
    TwAPIService.prototype.login = function (email, password) {
        var _this = this;
        var creds = { email: email, password: password };
        return this.http.put(this.config.getAPIUrl() + "users", JSON.stringify(creds), TwAPIService_1.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_3__models_model_factory__["a" /* ModelFactory */].buildUser(res.json()); })
            .toPromise().then(function (res) {
            _this.analytics.event('API', 'LOGIN');
            TwAPIService_1.apikey = res.key;
            TwAPIService_1.headers.delete('X-API-KEY');
            TwAPIService_1.headers.append('X-API-KEY', TwAPIService_1.apikey);
            TwAPIService_1.user = res;
            return res;
        }, function (err) { return _this.handleError(err); });
    };
    /**
     * Get an user using his API key
     * @param  {string}        key [description]
     * @return {Promise<User>}     [description]
     */
    TwAPIService.prototype.getUser = function (key) {
        var _this = this;
        TwAPIService_1.apikey = key;
        TwAPIService_1.headers.delete('X-API-KEY');
        TwAPIService_1.headers.append('X-API-KEY', TwAPIService_1.apikey);
        return this.http.get(this.config.getAPIUrl() + "users", TwAPIService_1.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_3__models_model_factory__["a" /* ModelFactory */].buildUser(res.json()); })
            .toPromise().then(function (res) {
            _this.analytics.event('API', 'AUTOLOGIN');
            TwAPIService_1.user = res;
            res.key = key;
            return res;
        }, function (err) { return _this.handleError(err); });
    };
    /**
     * Registers a new user
     * @param  {string}        email
     * @param  {string}        password
     * @param  {string}        name
     * @param  {string}        lastname
     * @param  {string}        country
     * @return {Promise<User>}
     */
    TwAPIService.prototype.signup = function (email, password, name, lastname, country) {
        var _this = this;
        return this.http.post(this.config.getAPIUrl() + "users", JSON.stringify({
            email: email,
            password: password,
            name: name,
            lastname: lastname,
            country: country
        }), TwAPIService_1.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_3__models_model_factory__["a" /* ModelFactory */].buildUser(res.json()); })
            .toPromise().then(function (res) {
            _this.analytics.event('API', 'SIGNUP');
            TwAPIService_1.apikey = res.key;
            TwAPIService_1.headers.delete('X-API-KEY');
            TwAPIService_1.headers.append('X-API-KEY', TwAPIService_1.apikey);
            TwAPIService_1.user = res;
            return res;
        });
    };
    /**
     * Registers a new facebook user
     * @param  {string}        email
     * @param  {string}        token
     * @param  {string}        name
     * @param  {string}        lastname
     * @return {Promise<User>}
     */
    TwAPIService.prototype.signupFacebook = function (email, token, name, lastname) {
        var _this = this;
        return this.http.post(this.config.getAPIUrl() + "users/facebook", JSON.stringify({
            email: email,
            token: token,
            name: name,
            lastname: lastname
        }), TwAPIService_1.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_3__models_model_factory__["a" /* ModelFactory */].buildUser(res.json()); })
            .toPromise().then(function (res) {
            _this.analytics.event('API', 'SIGNUP');
            TwAPIService_1.apikey = res.key;
            TwAPIService_1.headers.delete('X-API-KEY');
            TwAPIService_1.headers.append('X-API-KEY', TwAPIService_1.apikey);
            TwAPIService_1.user = res;
            return res;
        });
    };
    /**
     * Ask a reset password link
     * @return {Promise<boolean>}
     */
    TwAPIService.prototype.resetPassword = function (email) {
        var _this = this;
        return this.http.post(this.config.getAPIUrl() + "users/reset", JSON.stringify({
            email: email
        }), TwAPIService_1.options).toPromise().then(function (response) {
            _this.analytics.event('API', 'RESET_PASSWORD');
            return true;
        }, function (err) { return _this.handleError(err); });
    };
    /**
     * Deletes the account currently logged in.
     * @return {Promise<boolean>}
     */
    TwAPIService.prototype.deleteAccount = function () {
        var _this = this;
        return this.http.delete(this.config.getAPIUrl() + "users", TwAPIService_1.options).toPromise().then(function (response) {
            _this.analytics.event('API', 'DELETE_ACCOUNT');
            return true;
        }, function (err) { return _this.handleError(err); });
    };
    /**
     * Get the watches of an user
     * @return {Promise<Watch[]>}
     */
    TwAPIService.prototype.getWatches = function () {
        var _this = this;
        return this.http.get(this.config.getAPIUrl() + "watches", TwAPIService_1.optionsGet)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_3__models_model_factory__["a" /* ModelFactory */].buildWatches(res.json()); })
            .toPromise().then(function (res) {
            _this.analytics.event('API', 'WATCHES', 'GET');
            return res;
        }, function (err) { return _this.handleError(err); });
    };
    /**
     * Update or insert a watch
     * @param  {Watch}          watch
     * @return {Promise<Watch>}
     */
    TwAPIService.prototype.upsertWatch = function (watch) {
        if (watch.id == null) {
            return this.insertWatch(watch);
        }
        else {
            return this.updateWatch(watch);
        }
    };
    /**
     * Deletes a watch and update the user accordingly
     * @param  {User}          user
     * @param  {Watch}         watch
     * @return {Promise<User>}
     */
    TwAPIService.prototype.deleteWatch = function (user, watch) {
        var _this = this;
        var deleteOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: TwAPIService_1.headers });
        deleteOptions.body = JSON.stringify({ watchId: watch.id });
        return this.http.delete(this.config.getAPIUrl() + "watches", deleteOptions).toPromise().then(function (response) {
            user.watches = user.watches.filter(function (filter) {
                return filter.id !== watch.id;
            });
            _this.analytics.event('API', 'WATCHES', 'DELETE');
            return user;
        });
    };
    /**
     * Insert or update a measure and the related watch
     * @param  {Watch}          watch
     * @param  {Measure}        measure
     * @return {Promise<Watch>}
     */
    TwAPIService.prototype.upsertMeasure = function (watch, measure) {
        if (measure.id == null) {
            return this.insertMeasure(watch, measure);
        }
        else {
            return this.updateMeasure(watch, measure);
        }
    };
    /**
     * Delete a measure and the update the related watch
     * @param  {Watch}          watch
     * @param  {Measure}        measure
     * @return {Promise<Watch>}
     */
    TwAPIService.prototype.deleteMeasure = function (watch, measure) {
        var _this = this;
        var deleteOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: TwAPIService_1.headers });
        deleteOptions.body = JSON.stringify({ measureId: measure.id });
        return this.http.delete(this.config.getAPIUrl() + "measures", deleteOptions).toPromise().then(function (response) {
            watch.measures = watch.measures.filter(function (filter) {
                return filter.id !== measure.id;
            });
            watch.computeNext();
            watch.historySize--;
            _this.analytics.event('API', 'MEASURE', 'DELETE');
            return watch;
        });
    };
    TwAPIService.prototype.getBlogPosts = function () {
        var _this = this;
        return this.http.get("https://blog.toolwatch.io/?json=1")
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_3__models_model_factory__["a" /* ModelFactory */].buildPosts(res.json()); })
            .toPromise().then(function (res) {
            _this.analytics.event('API', 'BLOG', 'GET');
            return res;
        });
    };
    /**
     * Given a brand, returns likely brands ordered by confidence
     * @param  {string}  brand [description]
     * @return {Promise}       [{brand:string, confidence:number}]
     */
    TwAPIService.prototype.getLikelyBrands = function (watch) {
        return this.http.get(this.config.getAssetsUrl() + '/watches/watch-brand.json')
            .map(function (res) { return res.json(); })
            .toPromise().then(function (brands) {
            var likelyBrands = { watch: watch, proposals: [] };
            for (var i = brands.length - 1; i >= 0; i--) {
                var levenshteinDistance = __WEBPACK_IMPORTED_MODULE_5__helpers_string_helper__["a" /* StringHelper */].levenshtein(brands[i].name, watch.brand);
                var confidence = levenshteinDistance / Math.max(watch.brand.length, brands[i].name.length) * 100;
                likelyBrands.proposals.push({
                    brand: brands[i].name,
                    logo: brands[i].icon,
                    confidence: 100 - confidence
                });
            }
            likelyBrands.proposals = likelyBrands.proposals.sort(function (a, b) {
                return b.confidence - a.confidence;
            });
            return likelyBrands;
        });
    };
    /**
     * Return known brands
     * @return {Promise}
     */
    TwAPIService.prototype.getBrands = function () {
        var _this = this;
        return this.http.get(this.config.getAssetsUrl() + '/watches/watch-brand.json')
            .map(function (res) { return res.json(); })
            .toPromise().then(function (brands) {
            _this.analytics.event('API', 'BRANDS', 'GET');
            return brands;
        });
    };
    /**
     * Returns model of a given brand
     * @param  {string}  brand
     * @return {Promise}
     */
    TwAPIService.prototype.getModels = function (brand) {
        var _this = this;
        brand = __WEBPACK_IMPORTED_MODULE_5__helpers_string_helper__["a" /* StringHelper */].replaceAll(brand, " ", "");
        brand = __WEBPACK_IMPORTED_MODULE_5__helpers_string_helper__["a" /* StringHelper */].replaceAll(brand, "&", "");
        return this.http.get(this.config.getAssetsUrl() + '/watches/watch-models/' + brand + ".json")
            .map(function (res) { return res.json(); })
            .toPromise().then(function (models) {
            _this.analytics.event('API', 'MODELS', 'GET');
            return models;
        });
    };
    /**
     * Returns model of a given brand
     * @param  {string}  brand
     * @return {Promise}
     */
    TwAPIService.prototype.getCalibers = function (brand) {
        var _this = this;
        brand = __WEBPACK_IMPORTED_MODULE_5__helpers_string_helper__["a" /* StringHelper */].replaceAll(brand, " ", "");
        brand = __WEBPACK_IMPORTED_MODULE_5__helpers_string_helper__["a" /* StringHelper */].replaceAll(brand, "&", "");
        return this.http.get(this.config.getAssetsUrl() + '/watches/watch-calibers/' + brand + ".json")
            .map(function (res) { return res.json(); })
            .toPromise().then(function (calibers) {
            _this.analytics.event('API', 'CALIBERS', 'GET');
            return calibers;
        });
    };
    /**
     * Gets the previously computed offset
     * @return {number} [description]
     */
    TwAPIService.prototype.getOffsetTime = function () {
        return TwAPIService_1.time.offset;
    };
    /**
     * Retrieve atomic clock time adjusted for network latency
     * @param  {number = 0} precison How many calls we want to aveage
     * @return {Promise<Date>}
     */
    TwAPIService.prototype.accurateTime = function (precison) {
        var _this = this;
        if (precison === void 0) { precison = 10; }
        this.analytics.event('API', 'TIME', 'GET');
        //If we aren't already sync'ed
        //or sync is older than 2 minutes
        if (TwAPIService_1.time === undefined ||
            TwAPIService_1.now() - TwAPIService_1.time.syncAnchor > 2 * 60 * 1000) {
            //Stores each Promise in array
            var promises = [];
            for (var i = 0; i < precison; ++i) {
                promises.push(this.fetchOffsetTime());
            }
            /**
             * Promise.all() is the Promise equivalent of thread.join().
             * It'll wait for all promises to be received.
             *
             * Returns a date adjusted w/ the median offset between
             * atomic clock and js time.
             * The offset received in each promise also accounts for
             * the network roundtrip time.
             */
            return Promise.all(promises).then(function (results) {
                return _this.computeAverageOffset(results);
            });
            //Only compute the difference from last time;
        }
        else {
            TwAPIService_1.time.syncDate = new Date(TwAPIService_1.time.syncDate.getTime() +
                TwAPIService_1.now() - TwAPIService_1.time.syncAnchor);
            TwAPIService_1.time.syncAnchor = TwAPIService_1.now();
            return new Promise(function (resolve, reject) {
                resolve(TwAPIService_1.time.syncDate);
            });
        }
    };
    /**
     * Compute average offsets and create TwAPIService.time
     * @param results
     */
    TwAPIService.prototype.computeAverageOffset = function (results) {
        results = results.sort(function (a, b) { return a - b; });
        var lowMiddle = Math.floor((results.length - 1) / 2);
        var highMiddle = Math.ceil((results.length - 1) / 2);
        var median = (results[lowMiddle] + results[highMiddle]) / 2;
        TwAPIService_1.time = {
            syncDate: new Date(Date.now() - median),
            syncAnchor: TwAPIService_1.now(),
            offset: median
        };
        return TwAPIService_1.time.syncDate;
    };
    /**
     * Fetch offset between atomic clock and js time
     */
    TwAPIService.prototype.fetchOffsetTime = function () {
        var beforeTime = TwAPIService_1.now();
        return this.http.get(this.config.getAPIUrl() + "time", TwAPIService_1.optionsGet)
            .toPromise()
            .then(function (response) {
            var timeDiff = (TwAPIService_1.now() - beforeTime) / 2;
            var serverTime = response.json().time - timeDiff;
            return Date.now() - serverTime;
        }).catch(this.handleError);
    };
    /**
     * Update a measure and the watch it belongs to
     * @param  {Watch}          watch
     * @param  {Measure}        measure
     * @return {Promise<Watch>}
     */
    TwAPIService.prototype.updateMeasure = function (watch, measure) {
        var _this = this;
        return this.http.put(this.config.getAPIUrl() + "measures", JSON.stringify({
            measureId: measure.id,
            referenceTime: measure.accuracyReferenceTime,
            userTime: measure.accuracyUserTime
        }), TwAPIService_1.options).toPromise().then(function (response) {
            _this.analytics.event('API', 'MEASURE', 'SECOND');
            var json = response.json().result;
            measure.addAccuracy(json.accuracy, json.accuracyAge, json.percentile);
            watch.upsertMeasure(measure);
            watch.next = __WEBPACK_IMPORTED_MODULE_2__models_watch_model__["b" /* WatchAction */].Measure;
            return watch;
        });
    };
    /**
     * Insert a measure and the watch it belongs to
     * @param  {Watch}          watch
     * @param  {Measure}        measure
     * @return {Promise<Watch>}
     */
    TwAPIService.prototype.insertMeasure = function (watch, measure) {
        var _this = this;
        return this.http.post(this.config.getAPIUrl() + "measures", JSON.stringify({
            watchId: watch.id,
            referenceTime: measure.measureReferenceTime,
            userTime: measure.measureUserTime
        }), TwAPIService_1.options).toPromise().then(function (response) {
            _this.analytics.event('API', 'MEASURE', 'FIRST');
            measure.id = response.json().measureId;
            watch.measures.push(measure);
            watch.historySize++;
            return watch;
        });
    };
    /**
     * Insert a watch
     * @param  {Watch}          watch
     * @return {Promise<Watch>}
     */
    TwAPIService.prototype.insertWatch = function (watch) {
        return this.http.post(this.config.getAPIUrl() + "watches", JSON.stringify({
            brand: watch.brand,
            name: watch.name,
            yearOfBuy: watch.yearOfBuy,
            serial: watch.serial,
            caliber: watch.caliber
        }), TwAPIService_1.options)
            .map(function (res) {
            return new __WEBPACK_IMPORTED_MODULE_2__models_watch_model__["a" /* Watch */](res.json().id, watch.brand, 0, [], watch.name, watch.yearOfBuy, watch.serial, watch.caliber);
        })
            .toPromise().then(function (response) {
            return response;
        });
    };
    /**
     * Update a watch
     * @param  {Watch}          watch
     * @return {Promise<Watch>}
     */
    TwAPIService.prototype.updateWatch = function (watch) {
        var _this = this;
        return this.http.put(this.config.getAPIUrl() + "watches", JSON.stringify({
            id: watch.id,
            brand: watch.brand,
            name: watch.name,
            yearOfBuy: watch.yearOfBuy,
            serial: watch.serial,
            caliber: watch.caliber
        }), TwAPIService_1.options).toPromise().then(function (response) {
            _this.analytics.event('API', 'WATCH', 'UPDATE');
            return watch;
        });
    };
    /**
     * Log error to console
     * @param {any} error [description]
     */
    TwAPIService.prototype.handleError = function (error) {
        return Promise.reject(error.message);
    };
    return TwAPIService;
}());
/**
 * All the HTTP code used by the toolwatch API are defined here.
 * Http codes can be to refine the error types
 */
TwAPIService.HTTP_CONTINUE = 100;
TwAPIService.HTTP_SWITCHING_PROTOCOLS = 101;
TwAPIService.HTTP_PROCESSING = 102; // RFC2518
// Success
/**
 * The request has succeeded
 */
TwAPIService.HTTP_OK = 200;
/**
 * The server successfully created a new resource
 */
TwAPIService.HTTP_CREATED = 201;
TwAPIService.HTTP_ACCEPTED = 202;
TwAPIService.HTTP_NON_AUTHORITATIVE_INFORMATION = 203;
/**
 * The server successfully processed the request, though no content is returned
 */
TwAPIService.HTTP_NO_CONTENT = 204;
TwAPIService.HTTP_RESET_CONTENT = 205;
TwAPIService.HTTP_PARTIAL_CONTENT = 206;
TwAPIService.HTTP_MULTI_STATUS = 207; // RFC4918
TwAPIService.HTTP_ALREADY_REPORTED = 208; // RFC5842
TwAPIService.HTTP_IM_USED = 226; // RFC3229
// Redirection
TwAPIService.HTTP_MULTIPLE_CHOICES = 300;
TwAPIService.HTTP_MOVED_PERMANENTLY = 301;
TwAPIService.HTTP_FOUND = 302;
TwAPIService.HTTP_SEE_OTHER = 303;
/**
 * The resource has not been modified since the last request
 */
TwAPIService.HTTP_NOT_MODIFIED = 304;
TwAPIService.HTTP_USE_PROXY = 305;
TwAPIService.HTTP_RESERVED = 306;
TwAPIService.HTTP_TEMPORARY_REDIRECT = 307;
TwAPIService.HTTP_PERMANENTLY_REDIRECT = 308; // RFC7238
// Client Error
/**
 * The request cannot be fulfilled due to multiple errors
 */
TwAPIService.HTTP_BAD_REQUEST = 400;
/**
 * The user is unauthorized to access the requested resource
 */
TwAPIService.HTTP_UNAUTHORIZED = 401;
TwAPIService.HTTP_PAYMENT_REQUIRED = 402;
/**
 * The requested resource is unavailable at this present time
 */
TwAPIService.HTTP_FORBIDDEN = 403;
/**
 * The requested resource could not be found
 *
 * Note: This is sometimes used to mask if there was an UNAUTHORIZED (401) or
 * FORBIDDEN (403) error, for security reasons
 */
TwAPIService.HTTP_NOT_FOUND = 404;
/**
 * The request method is not supported by the following resource
 */
TwAPIService.HTTP_METHOD_NOT_ALLOWED = 405;
/**
 * The request was not acceptable
 */
TwAPIService.HTTP_NOT_ACCEPTABLE = 406;
TwAPIService.HTTP_PROXY_AUTHENTICATION_REQUIRED = 407;
TwAPIService.HTTP_REQUEST_TIMEOUT = 408;
/**
 * The request could not be completed due to a conflict with the current state
 * of the resource
 */
TwAPIService.HTTP_CONFLICT = 409;
TwAPIService.HTTP_GONE = 410;
TwAPIService.HTTP_LENGTH_REQUIRED = 411;
TwAPIService.HTTP_PRECONDITION_FAILED = 412;
TwAPIService.HTTP_REQUEST_ENTITY_TOO_LARGE = 413;
TwAPIService.HTTP_REQUEST_URI_TOO_LONG = 414;
TwAPIService.HTTP_UNSUPPORTED_MEDIA_TYPE = 415;
TwAPIService.HTTP_REQUESTED_RANGE_NOT_SATISFIABLE = 416;
TwAPIService.HTTP_EXPECTATION_FAILED = 417;
TwAPIService.HTTP_I_AM_A_TEAPOT = 418; // RFC2324
TwAPIService.HTTP_UNPROCESSABLE_ENTITY = 422; // RFC4918
TwAPIService.HTTP_LOCKED = 423; // RFC4918
TwAPIService.HTTP_FAILED_DEPENDENCY = 424; // RFC4918
TwAPIService.HTTP_RESERVED_FOR_WEBDAV_ADVANCED_COLLECTIONS_EXPIRED_PROPOSAL = 425; // RFC2817
TwAPIService.HTTP_UPGRADE_REQUIRED = 426; // RFC2817
TwAPIService.HTTP_PRECONDITION_REQUIRED = 428; // RFC6585
TwAPIService.HTTP_TOO_MANY_REQUESTS = 429; // RFC6585
TwAPIService.HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE = 431; // RFC6585
// Server Error
/**
 * The server encountered an unexpected error
 *
 * Note: This is a generic error message when no specific message
 * is suitable
 */
TwAPIService.HTTP_INTERNAL_SERVER_ERROR = 500;
/**
 * The server does not recognise the request method
 */
TwAPIService.HTTP_NOT_IMPLEMENTED = 501;
TwAPIService.HTTP_BAD_GATEWAY = 502;
TwAPIService.HTTP_SERVICE_UNAVAILABLE = 503;
TwAPIService.HTTP_GATEWAY_TIMEOUT = 504;
TwAPIService.HTTP_VERSION_NOT_SUPPORTED = 505;
TwAPIService.HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL = 506; // RFC2295
TwAPIService.HTTP_INSUFFICIENT_STORAGE = 507; // RFC4918
TwAPIService.HTTP_LOOP_DETECTED = 508; // RFC5842
TwAPIService.HTTP_NOT_EXTENDED = 510; // RFC2774
TwAPIService.HTTP_NETWORK_AUTHENTICATION_REQUIRED = 511;
TwAPIService.user = null;
TwAPIService.time = undefined;
TwAPIService.now = __webpack_require__(34);
//Defines headers and request options
TwAPIService.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
TwAPIService.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: TwAPIService_1.headers });
// Regression RC5. Doesn't accept get without body
TwAPIService.optionsGet = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: TwAPIService_1.headers, body: "" });
TwAPIService.apikey = null;
TwAPIService = TwAPIService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    /**
     * Exposes the Toolwatch API.
     * Returns promeses on domain objects
     */
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_4__analytics_service__["a" /* AnalyticsService */],
        __WEBPACK_IMPORTED_MODULE_6__configuration_service__["a" /* ConfigurationService */]])
], TwAPIService);

var TwAPIService_1;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_merge__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toArray__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__translate_store__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__translate_loader__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__missing_translation_handler__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__translate_parser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USE_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslateService; });













var USE_STORE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('USE_STORE');
var TranslateService = (function () {
    /**
     *
     * @param store an instance of the store (that is supposed to be unique)
     * @param currentLoader An instance of the loader currently used
     * @param parser An instance of the parser currently used
     * @param missingTranslationHandler A handler for missing translations.
     * @param isolate whether this service should use the store or not
     */
    function TranslateService(store, currentLoader, parser, missingTranslationHandler, isolate) {
        if (isolate === void 0) { isolate = false; }
        this.store = store;
        this.currentLoader = currentLoader;
        this.parser = parser;
        this.missingTranslationHandler = missingTranslationHandler;
        this.isolate = isolate;
        this.pending = false;
        this._onTranslationChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._onLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._onDefaultLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._langs = [];
        this._translations = {};
        this._translationRequests = {};
    }
    Object.defineProperty(TranslateService.prototype, "onTranslationChange", {
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<TranslationChangeEvent>}
         */
        get: function () {
            return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "onLangChange", {
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<LangChangeEvent>}
         */
        get: function () {
            return this.isolate ? this._onLangChange : this.store.onLangChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "onDefaultLangChange", {
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<DefaultLangChangeEvent>}
         */
        get: function () {
            return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "defaultLang", {
        /**
         * The default lang to fallback when translations are missing on the current lang
         */
        get: function () {
            return this.isolate ? this._defaultLang : this.store.defaultLang;
        },
        set: function (defaultLang) {
            if (this.isolate) {
                this._defaultLang = defaultLang;
            }
            else {
                this.store.defaultLang = defaultLang;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        /**
         * The lang currently used
         * @type {string}
         */
        get: function () {
            return this.isolate ? this._currentLang : this.store.currentLang;
        },
        set: function (currentLang) {
            if (this.isolate) {
                this._currentLang = currentLang;
            }
            else {
                this.store.currentLang = currentLang;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "langs", {
        /**
         * an array of langs
         * @type {Array}
         */
        get: function () {
            return this.isolate ? this._langs : this.store.langs;
        },
        set: function (langs) {
            if (this.isolate) {
                this._langs = langs;
            }
            else {
                this.store.langs = langs;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "translations", {
        /**
         * a list of translations per lang
         * @type {{}}
         */
        get: function () {
            return this.isolate ? this._translations : this.store.translations;
        },
        set: function (translations) {
            if (this.isolate) {
                this._currentLang = translations;
            }
            else {
                this.store.translations = translations;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the default language to use as a fallback
     * @param lang
     */
    TranslateService.prototype.setDefaultLang = function (lang) {
        var _this = this;
        if (lang === this.defaultLang) {
            return;
        }
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the defaultLang immediately
            if (!this.defaultLang) {
                this.defaultLang = lang;
            }
            pending.take(1)
                .subscribe(function (res) {
                _this.changeDefaultLang(lang);
            });
        }
        else {
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Gets the default language used
     * @returns string
     */
    TranslateService.prototype.getDefaultLang = function () {
        return this.defaultLang;
    };
    /**
     * Changes the lang currently used
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.use = function (lang) {
        var _this = this;
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the currentLang immediately
            if (!this.currentLang) {
                this.currentLang = lang;
            }
            pending.take(1)
                .subscribe(function (res) {
                _this.changeLang(lang);
            });
            return pending;
        }
        else {
            this.changeLang(lang);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.translations[lang]);
        }
    };
    /**
     * Retrieves the given translations
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.retrieveTranslations = function (lang) {
        var pending;
        // if this language is unavailable, ask for it
        if (typeof this.translations[lang] === "undefined") {
            this._translationRequests[lang] = this._translationRequests[lang] || this.getTranslation(lang);
            pending = this._translationRequests[lang];
        }
        return pending;
    };
    /**
     * Gets an object of translations for a given language with the current loader
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.getTranslation = function (lang) {
        var _this = this;
        this.pending = true;
        this.loadingTranslations = this.currentLoader.getTranslation(lang).share();
        this.loadingTranslations.take(1)
            .subscribe(function (res) {
            _this.translations[lang] = res;
            _this.updateLangs();
            _this.pending = false;
        }, function (err) {
            _this.pending = false;
        });
        return this.loadingTranslations;
    };
    /**
     * Manually sets an object of translations for a given language
     * @param lang
     * @param translations
     * @param shouldMerge
     */
    TranslateService.prototype.setTranslation = function (lang, translations, shouldMerge) {
        if (shouldMerge === void 0) { shouldMerge = false; }
        if (shouldMerge && this.translations[lang]) {
            Object.assign(this.translations[lang], translations);
        }
        else {
            this.translations[lang] = translations;
        }
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Returns an array of currently available langs
     * @returns {any}
     */
    TranslateService.prototype.getLangs = function () {
        return this.langs;
    };
    /**
     * @param langs
     * Add available langs
     */
    TranslateService.prototype.addLangs = function (langs) {
        var _this = this;
        langs.forEach(function (lang) {
            if (_this.langs.indexOf(lang) === -1) {
                _this.langs.push(lang);
            }
        });
    };
    /**
     * Update the list of available langs
     */
    TranslateService.prototype.updateLangs = function () {
        this.addLangs(Object.keys(this.translations));
    };
    /**
     * Returns the parsed result of the translations
     * @param translations
     * @param key
     * @param interpolateParams
     * @returns {any}
     */
    TranslateService.prototype.getParsedResult = function (translations, key, interpolateParams) {
        var res;
        if (key instanceof Array) {
            var result = {}, observables = false;
            for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
                var k = key_1[_i];
                result[k] = this.getParsedResult(translations, k, interpolateParams);
                if (typeof result[k].subscribe === "function") {
                    observables = true;
                }
            }
            if (observables) {
                var mergedObs = void 0;
                for (var _a = 0, key_2 = key; _a < key_2.length; _a++) {
                    var k = key_2[_a];
                    var obs = typeof result[k].subscribe === "function" ? result[k] : __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(result[k]);
                    if (typeof mergedObs === "undefined") {
                        mergedObs = obs;
                    }
                    else {
                        mergedObs = mergedObs.merge(obs);
                    }
                }
                return mergedObs.toArray().map(function (arr) {
                    var obj = {};
                    arr.forEach(function (value, index) {
                        obj[key[index]] = value;
                    });
                    return obj;
                });
            }
            return result;
        }
        if (translations) {
            res = this.parser.interpolate(this.parser.getValue(translations, key), interpolateParams);
        }
        if (typeof res === "undefined" && this.defaultLang && this.defaultLang !== this.currentLang) {
            res = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], key), interpolateParams);
        }
        if (typeof res === "undefined") {
            var params = { key: key, translateService: this };
            if (typeof interpolateParams !== 'undefined') {
                params.interpolateParams = interpolateParams;
            }
            res = this.missingTranslationHandler.handle(params);
        }
        return typeof res !== "undefined" ? res : key;
    };
    /**
     * Gets the translated value of a key (or an array of keys)
     * @param key
     * @param interpolateParams
     * @returns {any} the translated key, or an object of translated keys
     */
    TranslateService.prototype.get = function (key, interpolateParams) {
        var _this = this;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["b" /* isDefined */])(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        // check if we are loading a new translation to use
        if (this.pending) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                var onComplete = function (res) {
                    observer.next(res);
                    observer.complete();
                };
                var onError = function (err) {
                    observer.error(err);
                };
                _this.loadingTranslations.subscribe(function (res) {
                    res = _this.getParsedResult(res, key, interpolateParams);
                    if (typeof res.subscribe === "function") {
                        res.subscribe(onComplete, onError);
                    }
                    else {
                        onComplete(res);
                    }
                }, onError);
            });
        }
        else {
            var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
            if (typeof res.subscribe === "function") {
                return res;
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(res);
            }
        }
    };
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     * @param key
     * @param interpolateParams
     * @returns {string}
     */
    TranslateService.prototype.instant = function (key, interpolateParams) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util__["b" /* isDefined */])(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
        if (typeof res.subscribe !== "undefined") {
            if (key instanceof Array) {
                var obj_1 = {};
                key.forEach(function (value, index) {
                    obj_1[key[index]] = key[index];
                });
                return obj_1;
            }
            return key;
        }
        else {
            return res;
        }
    };
    /**
     * Sets the translated value of a key
     * @param key
     * @param value
     * @param lang
     */
    TranslateService.prototype.set = function (key, value, lang) {
        if (lang === void 0) { lang = this.currentLang; }
        this.translations[lang][key] = value;
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Changes the current lang
     * @param lang
     */
    TranslateService.prototype.changeLang = function (lang) {
        this.currentLang = lang;
        this.onLangChange.emit({ lang: lang, translations: this.translations[lang] });
        // if there is no default lang, use the one that we just set
        if (!this.defaultLang) {
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Changes the default lang
     * @param lang
     */
    TranslateService.prototype.changeDefaultLang = function (lang) {
        this.defaultLang = lang;
        this.onDefaultLangChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Allows to reload the lang file from the file
     * @param lang
     * @returns {Observable<any>}
     */
    TranslateService.prototype.reloadLang = function (lang) {
        this.resetLang(lang);
        return this.getTranslation(lang);
    };
    /**
     * Deletes inner translation
     * @param lang
     */
    TranslateService.prototype.resetLang = function (lang) {
        this._translationRequests[lang] = undefined;
        this.translations[lang] = undefined;
    };
    /**
     * Returns the language code name from the browser, e.g. "de"
     *
     * @returns string
     */
    TranslateService.prototype.getBrowserLang = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        var browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        if (browserLang.indexOf('-') !== -1) {
            browserLang = browserLang.split('-')[0];
        }
        if (browserLang.indexOf('_') !== -1) {
            browserLang = browserLang.split('_')[0];
        }
        return browserLang;
    };
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     *
     * @returns string
     */
    TranslateService.prototype.getBrowserCultureLang = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        var browserCultureLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        return browserCultureLang;
    };
    return TranslateService;
}());

TranslateService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
TranslateService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_8__translate_store__["a" /* TranslateStore */], },
    { type: __WEBPACK_IMPORTED_MODULE_9__translate_loader__["a" /* TranslateLoader */], },
    { type: __WEBPACK_IMPORTED_MODULE_11__translate_parser__["a" /* TranslateParser */], },
    { type: __WEBPACK_IMPORTED_MODULE_10__missing_translation_handler__["a" /* MissingTranslationHandler */], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [USE_STORE,] },] },
]; };


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__measure_model__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WatchAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WatchStatus; });

/**
 * Represents a Toolwatch watch
 */
var Watch = (function () {
    /**
     * Classical constructor
     * @param id
     * @param brand
     * @param historySize
     * @param measures
     * @param name
     * @param yearOfBuy
     * @param serial
     * @param caliber
     */
    function Watch(id, brand, historySize, measures, name, yearOfBuy, serial, caliber) {
        if (historySize === void 0) { historySize = 0; }
        if (measures === void 0) { measures = []; }
        if (name === void 0) { name = ""; }
        if (yearOfBuy === void 0) { yearOfBuy = null; }
        if (serial === void 0) { serial = ""; }
        if (caliber === void 0) { caliber = ""; }
        var _this = this;
        /**
         * Retunrs a string represrentation
         */
        this.toString = function () {
            return "Watch (id: " + _this.id + ",\n                brand: " + _this.brand + ",\n                historySize: " + _this.historySize + ",\n                measures: " + _this.measures + ",\n                name: " + _this.name + ",\n                yearOfBuy: " + _this.yearOfBuy + ",\n                serial: " + _this.serial + ",\n                caliber: " + _this.caliber + ",\n                status: " + _this.status + ",\n                next: " + _this.next + ",\n                waiting: " + _this.waiting + ")";
        };
        this.id = id;
        this.brand = brand;
        this.historySize = historySize;
        //resort in case of server cached optimisation
        this.measures = measures.sort(function (a, b) {
            return a.id - b.id;
        });
        this.name = name;
        //if yearOfBuy is filled
        if (yearOfBuy !== 0) {
            this.yearOfBuy = yearOfBuy;
        }
        else {
            this.yearOfBuy = null;
        }
        this.serial = serial;
        this.caliber = caliber;
        //build the initials for the watch 
        this.initials = (this.brand != null && this.brand.length > 0) ? this.brand.charAt(0) : "";
        this.initials += (this.name.length > 0) ? this.name.charAt(0) : "";
        //compute next action & status
        if (historySize === 0) {
            this.status = WatchStatus.NeverMeasured;
            this.next = WatchAction.Measure;
        }
        else if (historySize > this.measures.length) {
            this.status = WatchStatus.HaveMoreMeasures;
        }
        else {
            this.status = 0;
        }
        this.computeNext();
    }
    /**
     * Computes the next action given the measures status
     */
    Watch.prototype.computeNext = function () {
        var lastMeasure = this.currentMeasure();
        if (lastMeasure !== null
            && lastMeasure.status & __WEBPACK_IMPORTED_MODULE_0__measure_model__["b" /* MeasureStatus */].BaseMeasure) {
            if (Math.abs((lastMeasure.measureUserTime - Date.now() / 1000) / 3600) < 12) {
                this.next = WatchAction.Waiting;
                this.waiting = Math.round(12 - Math.abs((lastMeasure.measureUserTime - Date.now() / 1000) / 3600));
            }
            else if (!(lastMeasure.status & __WEBPACK_IMPORTED_MODULE_0__measure_model__["b" /* MeasureStatus */].AccuracyMeasure)) {
                this.next = WatchAction.Accuracy;
            }
            else {
                this.next = WatchAction.Measure;
            }
        }
    };
    /**
     * Get the average precision of the received measures
     * Number of measures received depends on plan.
     * @param amount
     */
    Watch.prototype.average = function (amount) {
        var actualAmount = 0;
        var average = 0;
        var i = this.measures.length - 1;
        while (i >= 0 && actualAmount <= amount) {
            if (this.measures[i].status & __WEBPACK_IMPORTED_MODULE_0__measure_model__["b" /* MeasureStatus */].AccuracyMeasure) {
                average = average + Math.abs(this.measures[i].accuracy);
                actualAmount++;
            }
            i--;
        }
        return (average / actualAmount).toFixed(1);
    };
    /**
     * Returns the last complete measure for watch (i.e. 2/2)
     */
    Watch.prototype.lastCompleteMeasure = function () {
        var i = this.measures.length - 1;
        while (i >= 0) {
            if (this.measures[i].status & __WEBPACK_IMPORTED_MODULE_0__measure_model__["b" /* MeasureStatus */].AccuracyMeasure) {
                return this.measures[i];
            }
            i--;
        }
        return null;
    };
    /**
     * Returns the current measure for a watch. Could be
     * equal to lastCompleteMeasure() or an ongoing measure (i.e. 1/2)
     */
    Watch.prototype.currentMeasure = function () {
        if (this.measures.length !== 0) {
            return this.measures[this.measures.length - 1];
        }
        else {
            return null;
        }
    };
    /**
     * Add or update a measure depending on the measure id
     * @param measure
     */
    Watch.prototype.upsertMeasure = function (measure) {
        for (var i = 0; i < this.measures.length; i++) {
            if (this.measures[i].id === measure.id) {
                this.measures[i] = measure;
                return;
            }
        }
        this.historySize++;
        this.measures.push(measure);
    };
    /**
     * Returns a clone watch
     */
    Watch.prototype.clone = function () {
        return new Watch(this.id, this.brand, this.historySize, this.measures, this.name, this.yearOfBuy, this.serial, this.caliber);
    };
    return Watch;
}());

/**
 * Actions doable with a watch
 */
var WatchAction;
(function (WatchAction) {
    WatchAction[WatchAction["Measure"] = 0] = "Measure";
    WatchAction[WatchAction["Waiting"] = 1] = "Waiting";
    WatchAction[WatchAction["Accuracy"] = 2] = "Accuracy";
})(WatchAction || (WatchAction = {}));
/**
 * Special status for a watch
 */
var WatchStatus;
(function (WatchStatus) {
    WatchStatus[WatchStatus["NeverMeasured"] = 0] = "NeverMeasured";
    WatchStatus[WatchStatus["HaveMoreMeasures"] = 1] = "HaveMoreMeasures";
})(WatchStatus || (WatchStatus = {}));


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AnalyticsService = (function () {
    /**
     * Exposes the Toolwatch API.
     * Returns promeses on domain objects
     */
    function AnalyticsService() {
    }
    AnalyticsService.prototype.event = function (domain, path, method) {
        if (method === void 0) { method = ""; }
    };
    AnalyticsService.prototype.screenview = function (screen) {
    };
    return AnalyticsService;
}());
AnalyticsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    /**
     * Exposes the Toolwatch API.
     * Returns promeses on domain objects
     */
], AnalyticsService);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoonPhasesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MoonPhasesComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoonPhasesComponent = (function () {
    /**
     *
     * @param elementRef
     */
    function MoonPhasesComponent(elementRef) {
        this.elementRef = elementRef;
        var today = new Date();
        var lastFullMoon = new Date(2016, 10, 14, 12, 0, 0, 0);
        var diffDays = Math.round(Math.abs((today.getTime() - lastFullMoon.getTime()) / (24 * 60 * 60 * 1000)));
        this.angleMoon = diffDays * 6.101694915254;
    }
    /**
     *
     */
    MoonPhasesComponent.prototype.ngAfterViewInit = function () {
        var elem = this.elementRef.nativeElement.querySelector('.moon-disque');
        elem.style.webkitTransform = 'rotateZ(' + this.angleMoon + 'deg)';
        elem.style.transform = 'rotateZ(' + this.angleMoon + 'deg)';
    };
    return MoonPhasesComponent;
}());
MoonPhasesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'moon-phases',
        template: "<div class=\"moon-phase-container\">\n    <div class=\"moon-mask\"></div>\n    <div class=\"moon-disque\"></div>\n</div>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], MoonPhasesComponent);

var MoonPhasesComponentModule = (function () {
    function MoonPhasesComponentModule() {
    }
    return MoonPhasesComponentModule;
}());
MoonPhasesComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [MoonPhasesComponent],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        exports: [MoonPhasesComponent],
    })
], MoonPhasesComponentModule);



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationService; });
/* harmony export (immutable) */ __webpack_exports__["b"] = configurationProvider;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConfigurationService = (function () {
    /**
     * Exposes the Toolwatch API.
     * Returns promeses on domain objects
     */
    function ConfigurationService() {
    }
    ConfigurationService.prototype.getAPIUrl = function () {
        return this.baseUrl;
    };
    ConfigurationService.prototype.getAssetsUrl = function () {
        return this.assetsUrl;
    };
    return ConfigurationService;
}());
ConfigurationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    /**
     * Exposes the Toolwatch API.
     * Returns promeses on domain objects
     */
], ConfigurationService);

function configurationProvider(baseUrl, assetsUrl) {
    if (baseUrl === void 0) { baseUrl = "https://toolwatch.io/api/"; }
    if (assetsUrl === void 0) { assetsUrl = "assets"; }
    var cs = new ConfigurationService();
    cs.baseUrl = baseUrl;
    cs.assetsUrl = assetsUrl;
    return cs;
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = equals;
/* harmony export (immutable) */ __webpack_exports__["b"] = isDefined;
/* tslint:disable */
/**
 * @name equals
 *
 * @description
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param {*} o1 Object or value to compare.
 * @param {*} o2 Object or value to compare.
 * @returns {boolean} True if arguments are equal.
 */
/* tslint:disable */ function equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
    if (t1 == t2 && t1 == 'object') {
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2))
                return false;
            if ((length = o1.length) == o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key]))
                        return false;
                }
                return true;
            }
        }
        else {
            if (Array.isArray(o2)) {
                return false;
            }
            keySet = Object.create(null);
            for (key in o1) {
                if (!equals(o1[key], o2[key])) {
                    return false;
                }
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
/* tslint:enable */
function isDefined(value) {
    return typeof value !== 'undefined' && value !== null;
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Measure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MeasureStatus; });
/**
 * Represents a Toolwatch measure
 */
var Measure = (function () {
    /**
     * Constructor
     * @param id
     * @param measureUserTime
     * @param measureReferenceTime
     * @param status
     * @param accuracyUserTime
     * @param accuracyReferenceTime
     * @param accuracy
     * @param accuracyAge
     * @param percentile
     */
    function Measure(id, measureUserTime, measureReferenceTime, status, accuracyUserTime, accuracyReferenceTime, accuracy, accuracyAge, percentile) {
        var _this = this;
        this.status = MeasureStatus.None;
        this.serviced = false;
        this.renewed = false;
        /**
         * toString
         */
        this.toString = function () {
            return "Measure (id: " + _this.id + ",\n        measureUserTime: " + _this.measureUserTime + ",\n        measureReferenceTime: " + _this.measureReferenceTime + ",\n        accuracyUserTime: " + _this.accuracyUserTime + ",\n        accuracyReferenceTime: " + _this.accuracyReferenceTime + ",\n        accuracy: " + _this.accuracy + ",\n        accuracyAge: " + _this.accuracyAge + ",\n        percentile: " + _this.percentile + ",\n        status: " + _this.status + ")";
        };
        this.id = id;
        this.measureUserTime = measureUserTime;
        this.measureReferenceTime = measureReferenceTime;
        this.accuracyUserTime = accuracyUserTime;
        this.accuracyReferenceTime = accuracyReferenceTime;
        this.accuracy = accuracy;
        this.accuracyAge = accuracyAge;
        this.percentile = Math.round(percentile * 10) / 10;
        //Compute different status
        if (status >= 1) {
            this.status |= MeasureStatus.BaseMeasure;
        }
        if (status >= 2) {
            this.status |= MeasureStatus.AccuracyMeasure;
        }
        if (status >= 3) {
            this.status |= MeasureStatus.ArchivedMeasure;
        }
        if (accuracyAge > 30) {
            this.renewed = true;
            this.status |= MeasureStatus.ShouldBeRenewed;
        }
        if (Math.abs(accuracy) > 20) {
            this.serviced = true;
            this.status |= MeasureStatus.ShouldBeServiced;
        }
        this.computePostAccuracyStatus(accuracy, accuracyAge);
    }
    /**
     * Add the base measure (i.e. 1/2)
     * @param referenceTime
     * @param userTime
     */
    Measure.prototype.addBaseMeasure = function (referenceTime, userTime) {
        this.measureReferenceTime = referenceTime;
        this.measureUserTime = userTime;
        this.status |= MeasureStatus.BaseMeasure;
    };
    /**
     * Add the accuracy measure (i.e. 2/2)
     * @param referenceTime
     * @param userTime
     */
    Measure.prototype.addAccuracyMeasure = function (referenceTime, userTime) {
        this.accuracyReferenceTime = referenceTime;
        this.accuracyUserTime = userTime;
        this.status |= MeasureStatus.AccuracyMeasure;
    };
    /**
     * Add the accuracy to the measure
     * @param accuracy
     * @param accuracyAge
     * @param percentile
     */
    Measure.prototype.addAccuracy = function (accuracy, accuracyAge, percentile) {
        this.accuracy = accuracy;
        this.accuracyAge = accuracyAge;
        this.percentile = Math.round(percentile * 10) / 10;
        this.computePostAccuracyStatus(accuracy, accuracyAge);
    };
    /**
     * Check if the watch should be serviced
     * or the measure renewed
     * @param accuracy
     * @param accuracyAge
     */
    Measure.prototype.computePostAccuracyStatus = function (accuracy, accuracyAge) {
        if (accuracy != null && accuracyAge != null) {
            if (Math.abs(accuracy) > 20) {
                this.status |= MeasureStatus.ShouldBeServiced;
                this.serviced = true;
            }
            if (accuracyAge > 30) {
                this.renewed = true;
                this.status |= MeasureStatus.ShouldBeRenewed;
            }
        }
    };
    return Measure;
}());

/**
 * Different status for measures
 */
var MeasureStatus;
(function (MeasureStatus) {
    MeasureStatus[MeasureStatus["None"] = 0] = "None";
    MeasureStatus[MeasureStatus["BaseMeasure"] = 1] = "BaseMeasure";
    MeasureStatus[MeasureStatus["AccuracyMeasure"] = 2] = "AccuracyMeasure";
    MeasureStatus[MeasureStatus["ArchivedMeasure"] = 4] = "ArchivedMeasure";
    MeasureStatus[MeasureStatus["ShouldBeRenewed"] = 8] = "ShouldBeRenewed";
    MeasureStatus[MeasureStatus["ShouldBeServiced"] = 16] = "ShouldBeServiced";
})(MeasureStatus || (MeasureStatus = {}));


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moon_phases_moon_phases_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClockComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClockComponent = (function () {
    /**
     *
     * @param elementRef
     */
    function ClockComponent(elementRef) {
        this.elementRef = elementRef;
        this.monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.date = new Date();
        this.month = this.monthNames[this.date.getMonth()];
        this.day = this.dayNames[this.date.getDay()] + " " + this.date.getDate();
        this.nextLeap = this.date.getFullYear();
        while (!this.isLeapYear(this.nextLeap)) {
            this.nextLeap++;
        }
    }
    /**
     * Returns wether or not a year is leap
     * @param year
     */
    ClockComponent.prototype.isLeapYear = function (year) {
        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    };
    /**
     * Moves the hands
     */
    ClockComponent.prototype.initLocalClocks = function () {
        var milliseconds = this.date.getMilliseconds();
        var seconds = this.date.getSeconds();
        var minutes = this.date.getMinutes();
        var hours = this.date.getHours();
        // Create an object with each hand and it's angle in degrees
        var hands = [
            {
                hand: 'hours',
                angle: (hours * 30) + (minutes / 2)
            },
            {
                hand: 'minutes',
                angle: (minutes * 6) + (seconds / 60) * 6
            },
            {
                hand: 'seconds',
                angle: (seconds * 6) + (milliseconds / 1000) * 6
            }
        ];
        //Loop through each of these hands to set their angle
        for (var j = 0; j < hands.length; j++) {
            var element = this.elementRef.nativeElement.querySelector('.' + hands[j].hand);
            element.style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg)';
            element.style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
        }
    };
    return ClockComponent;
}());
ClockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n        <article class=\"clock\">\n            <div class=\"logo\"></div>\n            <div class=\"date month\">{{month}}</div>\n            <div class=\"date day\">{{day}}</div>\n            <moon-phases></moon-phases>\n            <div class=\"hours-container\">\n                <div class=\"hours\"></div>\n            </div>\n            <div class=\"minutes-container\">\n                <div class=\"minutes\"></div>\n            </div>\n            <div class=\"seconds-container\">\n                <div class=\"seconds\"></div>\n            </div>\n        </article>\n    "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], ClockComponent);

var ClockComponentModule = (function () {
    function ClockComponentModule() {
    }
    return ClockComponentModule;
}());
ClockComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [ClockComponent],
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__moon_phases_moon_phases_component__["b" /* MoonPhasesComponentModule */]],
        exports: [ClockComponent]
    })
], ClockComponentModule);



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_twapi_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_validator__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_analytics_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_forms__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






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
    function LoginComponent(translate, twapi, analytics, formBuilder) {
        this.translate = translate;
        this.twapi = twapi;
        this.analytics = analytics;
        this.formBuilder = formBuilder;
        this.errors = [];
        this.userLogged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loginAttempt = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //Lang definition
        this.translate.setDefaultLang('en');
        this.translate.use('en');
        this.loginForm = this.formBuilder.group({
            email: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__global_validator__["a" /* GlobalValidator */].mailFormat])],
            password: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(5)])]
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
        this.twapi.signupFacebook(fbUser.email, fbUser.token, fbUser.lastname, fbUser.firstname).then(
        //success, away we go
        function (res) {
            _this.userLogged.emit(res);
            _this.analytics.event('CTA', 'FB_LOGIN', 'SUCCESS');
        }, function (err) {
            //Error, most likely the user tries to signin
            //using facebook while he has a regular 
            //account with the same email.
            _this.analytics.event('CTA', 'FB_SIGNUP', 'FAIL');
            switch (err.status) {
                case __WEBPACK_IMPORTED_MODULE_2__services_twapi_service__["a" /* TwAPIService */].HTTP_UNAUTHORIZED:
                    _this.errors.push('credentials');
                    break;
                default:
                    _this.errors.push('error');
                    break;
            }
            _this.loginAttempt.emit(false);
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
                _this.analytics.event('CTA', 'LOGIN', 'SUCCESS');
            }, function (err) {
                _this.analytics.event('CTA', 'LOGIN', 'FAIL');
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
    /**
     * send a password reset request
     * @param email
     */
    LoginComponent.prototype.onPasswordResetSubmit = function (email) {
        this.twapi.resetPassword(email);
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "userLogged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "loginAttempt", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: ""
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_2__services_twapi_service__["a" /* TwAPIService */],
        __WEBPACK_IMPORTED_MODULE_4__services_analytics_service__["a" /* AnalyticsService */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
], LoginComponent);

var LoginComponentModule = (function () {
    function LoginComponentModule() {
    }
    return LoginComponentModule;
}());
LoginComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [LoginComponent],
        imports: [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["a" /* TranslateModule */]],
        exports: [LoginComponent, __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["a" /* TranslateModule */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__services_twapi_service__["a" /* TwAPIService */]
        ],
    })
], LoginComponentModule);



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_twapi_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_validator__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_analytics_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_forms__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SignupComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








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
    function SignupComponent(translate, twapi, formBuilder, analytics) {
        var _this = this;
        this.translate = translate;
        this.twapi = twapi;
        this.formBuilder = formBuilder;
        this.analytics = analytics;
        this.submitAttempt = false;
        this.errors = [];
        this.countries = [];
        this.filteredList = [];
        this.query = "";
        this.userLogged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.signupAttempt = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        translate.setDefaultLang('en');
        translate.use('en');
        translate.get("countries").subscribe(function (result) {
            _this.countries = result;
        });
        this.signupForm = this.formBuilder.group({
            email: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__global_validator__["a" /* GlobalValidator */].mailFormat])],
            emailRepeat: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__global_validator__["a" /* GlobalValidator */].mailFormat])],
            password: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(8)])],
            passwordRepeat: ["",
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(8)
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
     * @param {string} user [description]
     */
    SignupComponent.prototype.onSubmit = function (user) {
        var _this = this;
        this.submitAttempt = true;
        this.errors = [];
        if (this.signupForm.valid &&
            user.password === user.passwordRepeat &&
            user.email === user.emailRepeat) {
            this.signupAttempt.emit(true);
            this.twapi.signup(user.email, user.password, user.firstName, user.lastName, this.query).then(function (res) {
                _this.analytics.event('CTA', 'SIGNUP', 'SUCCESS');
                _this.userLogged.emit(res);
            }, function (error) {
                _this.analytics.event('CTA', 'SIGNUP', 'FAIL');
                switch (error.status) {
                    case __WEBPACK_IMPORTED_MODULE_2__services_twapi_service__["a" /* TwAPIService */].HTTP_UNAUTHORIZED:
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
            if (user.password !== user.passwordRepeat) {
                this.errors.push('password-match');
            }
            if (user.email !== user.emailRepeat) {
                this.errors.push('email-match');
            }
        }
    };
    return SignupComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SignupComponent.prototype, "userLogged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SignupComponent.prototype, "signupAttempt", void 0);
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: ''
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_2__services_twapi_service__["a" /* TwAPIService */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_4__services_analytics_service__["a" /* AnalyticsService */]])
], SignupComponent);

var SignupComponentModule = (function () {
    function SignupComponentModule() {
    }
    return SignupComponentModule;
}());
SignupComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [SignupComponent],
        imports: [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["a" /* TranslateModule */]],
        exports: [SignupComponent],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__services_twapi_service__["a" /* TwAPIService */]
        ],
    })
], SignupComponentModule);



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_watch_model__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_twapi_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WatchComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * From to add, delete and update watches
 */
var WatchComponent = (function () {
    /**
     * Constructor with DI
     * @param {TranslateService} private translate
     * @param {TwAPIService}     private twapi
     * @param {FormBuilder}      private builder
     */
    function WatchComponent(translate, twapi, formBuilder) {
        var _this = this;
        this.translate = translate;
        this.twapi = twapi;
        this.formBuilder = formBuilder;
        this.watchModel = new __WEBPACK_IMPORTED_MODULE_2__models_watch_model__["a" /* Watch */](null, "");
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
        this.watchSaved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        translate.setDefaultLang('en');
        translate.use('en');
        this.watchForm = this.formBuilder.group({
            id: this.watchModel.id,
            brand: [this.watchModel.brand, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            name: [this.watchModel.name, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            caliber: this.watchModel.caliber,
            year: [this.watchModel.yearOfBuy, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(4), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(4)])],
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
        this.twapi.getModels(brand.models.toLowerCase()).then(function (res) { return _this.models = res; });
        this.twapi.getCalibers(brand.models.toLowerCase()).then(function (res) { return _this.calibers = res; });
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
        if (this.brandSelected === false) {
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
        if (this.modelSelected === false) {
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
        if (this.caliberSelected === false) {
            this.filteredCaliberList = this.calibers.filter(function (element) {
                return element.toLowerCase().indexOf(caliber.toLowerCase()) > -1;
            });
        }
        else {
            setTimeout(function () { return _this.caliberSelected = false; }, 5);
        }
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
                _this.user.upsertWatch(res);
                _this.watchSaved.emit(_this.user);
                _this.submitAttempt = false;
                _this.error = false;
            }, function (error) {
                _this.error = true;
                _this.submitAttempt = false;
            });
        }
        else {
            this.error = true;
        }
    };
    /**
     * Delete a watch
     */
    WatchComponent.prototype.onDelete = function () {
        var _this = this;
        this.submitAttempt = true;
        this.twapi.deleteWatch(this.user, this.watchModel).then(function (res) {
            _this.watchSaved.emit(res);
            _this.submitAttempt = false;
        }, function (error) {
            _this.error = true;
            _this.submitAttempt = false;
        });
    };
    return WatchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], WatchComponent.prototype, "watchSaved", void 0);
WatchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: ''
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_3__services_twapi_service__["a" /* TwAPIService */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]])
], WatchComponent);

var WatchComponentModule = (function () {
    function WatchComponentModule() {
    }
    return WatchComponentModule;
}());
WatchComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [WatchComponent],
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["a" /* TranslateModule */]],
        exports: [WatchComponent],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__services_twapi_service__["a" /* TwAPIService */]
        ],
    })
], WatchComponentModule);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArethmeticSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ArethmeticSignPipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ArethmeticSign = (function () {
    function ArethmeticSign() {
    }
    ArethmeticSign.prototype.transform = function (value) {
        if (value >= 0) {
            return "+" + value;
        }
        else {
            return value.toString();
        }
    };
    return ArethmeticSign;
}());
ArethmeticSign = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'arethmeticSign'
    })
], ArethmeticSign);

var ArethmeticSignPipeModule = (function () {
    function ArethmeticSignPipeModule() {
    }
    return ArethmeticSignPipeModule;
}());
ArethmeticSignPipeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [ArethmeticSign],
        exports: [ArethmeticSign]
    })
], ArethmeticSignPipeModule);



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return KFormatterPipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var KFormatter = (function () {
    function KFormatter() {
    }
    //we expect a signed number (i.e +2.7)
    KFormatter.prototype.transform = function (value) {
        var sign = value.charAt(0);
        value = value.substr(1);
        var number = Number(value);
        if (Math.abs(number) > 999) {
            return sign + (number / 1000).toFixed(0) + 'k';
        }
        else if (Math.abs(number) > 100) {
            return sign + number.toFixed(0);
        }
        else {
            return sign + number.toFixed(1);
        }
    };
    return KFormatter;
}());
KFormatter = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'kFormatter'
    })
], KFormatter);

var KFormatterPipeModule = (function () {
    function KFormatterPipeModule() {
    }
    return KFormatterPipeModule;
}());
KFormatterPipeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [KFormatter],
        exports: [KFormatter]
    })
], KFormatterPipeModule);



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadingZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LeadingZeroPipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LeadingZero = (function () {
    function LeadingZero() {
    }
    LeadingZero.prototype.transform = function (value) {
        if (value < 10) {
            return "0" + value;
        }
        else {
            return value.toString();
        }
    };
    return LeadingZero;
}());
LeadingZero = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'leadingZero'
    })
], LeadingZero);

var LeadingZeroPipeModule = (function () {
    function LeadingZeroPipeModule() {
    }
    return LeadingZeroPipeModule;
}());
LeadingZeroPipeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [LeadingZero],
        exports: [LeadingZero]
    })
], LeadingZeroPipeModule);



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FakeMissingTranslationHandler; });

var MissingTranslationHandler = (function () {
    function MissingTranslationHandler() {
    }
    return MissingTranslationHandler;
}());

/**
 * This handler is just a placeholder that does nothing, in case you don't need a missing translation handler at all
 */
var FakeMissingTranslationHandler = (function () {
    function FakeMissingTranslationHandler() {
    }
    FakeMissingTranslationHandler.prototype.handle = function (params) {
        return params.key;
    };
    return FakeMissingTranslationHandler;
}());

FakeMissingTranslationHandler.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
FakeMissingTranslationHandler.ctorParameters = function () { return []; };


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslateFakeLoader; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TranslateLoader = (function () {
    function TranslateLoader() {
    }
    return TranslateLoader;
}());

/**
 * This loader is just a placeholder that does nothing, in case you don't need a loader at all
 */
var TranslateFakeLoader = (function (_super) {
    __extends(TranslateFakeLoader, _super);
    function TranslateFakeLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TranslateFakeLoader.prototype.getTranslation = function (lang) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of({});
    };
    return TranslateFakeLoader;
}(TranslateLoader));

TranslateFakeLoader.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/** @nocollapse */
TranslateFakeLoader.ctorParameters = function () { return []; };


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslateDefaultParser; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TranslateParser = (function () {
    function TranslateParser() {
    }
    return TranslateParser;
}());

var TranslateDefaultParser = (function (_super) {
    __extends(TranslateDefaultParser, _super);
    function TranslateDefaultParser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
        return _this;
    }
    TranslateDefaultParser.prototype.interpolate = function (expr, params) {
        var _this = this;
        if (typeof expr !== 'string' || !params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, function (substring, b) {
            var r = _this.getValue(params, b);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(r) ? r : substring;
        });
    };
    TranslateDefaultParser.prototype.getValue = function (target, key) {
        var keys = key.split('.');
        key = '';
        do {
            key += keys.shift();
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(target) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
                target = target[key];
                key = '';
            }
            else if (!keys.length) {
                target = undefined;
            }
            else {
                key += '.';
            }
        } while (keys.length);
        return target;
    };
    return TranslateDefaultParser;
}(TranslateParser));

TranslateDefaultParser.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
TranslateDefaultParser.ctorParameters = function () { return []; };


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPost; });
/**
 * Represents a blog post from
 * https://blog.toolwatch.io/
 */
var BlogPost = (function () {
    /**
     * Constructor
     * @param id
     * @param title
     * @param date
     * @param excerpt
     * @param url
     */
    function BlogPost(id, title, date, excerpt, url) {
        var _this = this;
        /**
         * toString
         */
        this.toString = function () {
            return "BlogPost (id: " + _this.id + ",\n                title: " + _this.title + ",\n                date: " + _this.date + ",\n                excerpt: " + _this.excerpt + ",\n                url: " + _this.url + ")";
        };
        this.id = id;
        this.title = this.decodeHTMLEntities(title);
        this.date = date;
        this.excerpt = this.decodeHTMLEntities(excerpt);
        this.url = url;
    }
    /**
     * Transforms a string into a html cleaned string
     * @param str
     */
    BlogPost.prototype.decodeHTMLEntities = function (str) {
        var txt = document.createElement("textarea");
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
        str = str.replace('[Read more…]', '');
        txt.innerHTML = str;
        return txt.value;
    };
    return BlogPost;
}());



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/**
 * Represents a Tw user
 */
var User = (function () {
    /**
     *
     * @param id
     * @param email
     * @param name
     * @param lastname
     * @param country
     * @param registerDate
     * @param key
     * @param watches
     */
    function User(id, email, name, lastname, country, registerDate, key, watches) {
        var _this = this;
        this.watches = [];
        /**
         * Returns a string representation of an user
         */
        this.toString = function () {
            return "User (\n            id: " + _this.id + ", \n            email: " + _this.email + ", \n            name: " + _this.name + ", \n            lastname: " + _this.lastname + ", \n            country: " + _this.country + ", \n            registerDate: " + _this.registerDate + ", \n            key: " + _this.key + ", \n            watches: " + _this.watches + ")";
        };
        this.id = id;
        this.email = email;
        this.name = name;
        this.lastname = lastname;
        this.country = country;
        this.registerDate = registerDate;
        this.key = key;
        this.watches = watches;
    }
    /**
     * Add or update a watch depending on the presence of
     * a watch with the same ID.
     * IDs are uniq.
     *
     * @param watch
     */
    User.prototype.upsertWatch = function (watch) {
        for (var i = 0; i < this.watches.length; i++) {
            if (this.watches[i].id === watch.id) {
                this.watches[i] = watch;
                return;
            }
        }
        this.watches.push(watch);
    };
    return User;
}());



/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateDirective; });



var TranslateDirective = (function () {
    function TranslateDirective(translateService, element, _ref) {
        var _this = this;
        this.translateService = translateService;
        this.element = element;
        this._ref = _ref;
        // subscribe to onTranslationChange event, in case the translations of the current lang change
        if (!this.onTranslationChangeSub) {
            this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe(function (event) {
                if (event.lang === _this.translateService.currentLang) {
                    _this.checkNodes(true, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChangeSub) {
            this.onLangChangeSub = this.translateService.onLangChange.subscribe(function (event) {
                _this.checkNodes(true, event.translations);
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe(function (event) {
                _this.checkNodes(true);
            });
        }
    }
    Object.defineProperty(TranslateDirective.prototype, "translate", {
        set: function (key) {
            if (key) {
                this.key = key;
                this.checkNodes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateDirective.prototype, "translateParams", {
        set: function (params) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* equals */])(this.currentParams, params)) {
                this.currentParams = params;
                this.checkNodes(true);
            }
        },
        enumerable: true,
        configurable: true
    });
    TranslateDirective.prototype.ngAfterViewChecked = function () {
        this.checkNodes();
    };
    TranslateDirective.prototype.checkNodes = function (forceUpdate, translations) {
        if (forceUpdate === void 0) { forceUpdate = false; }
        var nodes = this.element.nativeElement.childNodes;
        // if the element is empty
        if (!nodes.length) {
            // we add the key as content
            this.setContent(this.element.nativeElement, this.key);
            nodes = this.element.nativeElement.childNodes;
        }
        for (var i = 0; i < nodes.length; ++i) {
            var node = nodes[i];
            if (node.nodeType === 3) {
                var key = void 0;
                if (this.key) {
                    key = this.key;
                    if (forceUpdate) {
                        node.lastKey = null;
                    }
                }
                else {
                    var content = this.getContent(node).trim();
                    if (content.length) {
                        // we want to use the content as a key, not the translation value
                        if (content !== node.currentValue) {
                            key = content;
                            // the content was changed from the user, we'll use it as a reference if needed
                            node.originalContent = this.getContent(node);
                        }
                        else if (node.originalContent && forceUpdate) {
                            node.lastKey = null;
                            // the current content is the translation, not the key, use the last real content as key
                            key = node.originalContent.trim();
                        }
                    }
                }
                this.updateValue(key, node, translations);
            }
        }
    };
    TranslateDirective.prototype.updateValue = function (key, node, translations) {
        var _this = this;
        if (key) {
            if (node.lastKey === key && this.lastParams === this.currentParams) {
                return;
            }
            this.lastParams = this.currentParams;
            var onTranslation = function (res) {
                if (res !== key) {
                    node.lastKey = key;
                }
                if (!node.originalContent) {
                    node.originalContent = _this.getContent(node);
                }
                node.currentValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(res) ? res : (node.originalContent || key);
                // we replace in the original content to preserve spaces that we might have trimmed
                _this.setContent(node, _this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));
                _this._ref.markForCheck();
            };
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(translations)) {
                var res = this.translateService.getParsedResult(translations, key, this.currentParams);
                if (typeof res.subscribe === "function") {
                    res.subscribe(onTranslation);
                }
                else {
                    onTranslation(res);
                }
            }
            else {
                this.translateService.get(key, this.currentParams).subscribe(onTranslation);
            }
        }
    };
    TranslateDirective.prototype.getContent = function (node) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(node.textContent) ? node.textContent : node.data;
    };
    TranslateDirective.prototype.setContent = function (node, content) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(node.textContent)) {
            node.textContent = content;
        }
        else {
            node.data = content;
        }
    };
    TranslateDirective.prototype.ngOnDestroy = function () {
        if (this.onLangChangeSub) {
            this.onLangChangeSub.unsubscribe();
        }
        if (this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub.unsubscribe();
        }
        if (this.onTranslationChangeSub) {
            this.onTranslationChangeSub.unsubscribe();
        }
    };
    return TranslateDirective;
}());

TranslateDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[translate],[ngx-translate]'
            },] },
];
/** @nocollapse */
TranslateDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__translate_service__["b" /* TranslateService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
TranslateDirective.propDecorators = {
    'translate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'translateParams': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatePipe; });



var TranslatePipe = (function () {
    function TranslatePipe(translate, _ref) {
        this.translate = translate;
        this._ref = _ref;
        this.value = '';
    }
    TranslatePipe.prototype.updateValue = function (key, interpolateParams, translations) {
        var _this = this;
        var onTranslation = function (res) {
            _this.value = res !== undefined ? res : key;
            _this.lastKey = key;
            _this._ref.markForCheck();
        };
        if (translations) {
            var res = this.translate.getParsedResult(translations, key, interpolateParams);
            if (typeof res.subscribe === 'function') {
                res.subscribe(onTranslation);
            }
            else {
                onTranslation(res);
            }
        }
        this.translate.get(key, interpolateParams).subscribe(onTranslation);
    };
    TranslatePipe.prototype.transform = function (query) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!query || query.length === 0) {
            return query;
        }
        // if we ask another time for the same key, return the last value
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* equals */])(query, this.lastKey) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* equals */])(args, this.lastParams)) {
            return this.value;
        }
        var interpolateParams;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* isDefined */])(args[0]) && args.length) {
            if (typeof args[0] === 'string' && args[0].length) {
                // we accept objects written in the template such as {n:1}, {'n':1}, {n:'v'}
                // which is why we might need to change it to real JSON objects such as {"n":1} or {"n":"v"}
                var validArgs = args[0]
                    .replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":')
                    .replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                try {
                    interpolateParams = JSON.parse(validArgs);
                }
                catch (e) {
                    throw new SyntaxError("Wrong parameter in TranslatePipe. Expected a valid Object, received: " + args[0]);
                }
            }
            else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
                interpolateParams = args[0];
            }
        }
        // store the query, in case it changes
        this.lastKey = query;
        // store the params, in case they change
        this.lastParams = args;
        // set the value
        this.updateValue(query, interpolateParams);
        // if there is a subscription to onLangChange, clean it
        this._dispose();
        // subscribe to onTranslationChange event, in case the translations change
        if (!this.onTranslationChange) {
            this.onTranslationChange = this.translate.onTranslationChange.subscribe(function (event) {
                if (_this.lastKey && event.lang === _this.translate.currentLang) {
                    _this.lastKey = null;
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChange) {
            this.onLangChange = this.translate.onLangChange.subscribe(function (event) {
                if (_this.lastKey) {
                    _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChange) {
            this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(function () {
                if (_this.lastKey) {
                    _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    _this.updateValue(query, interpolateParams);
                }
            });
        }
        return this.value;
    };
    /**
     * Clean any existing subscription to change events
     * @private
     */
    TranslatePipe.prototype._dispose = function () {
        if (typeof this.onTranslationChange !== 'undefined') {
            this.onTranslationChange.unsubscribe();
            this.onTranslationChange = undefined;
        }
        if (typeof this.onLangChange !== 'undefined') {
            this.onLangChange.unsubscribe();
            this.onLangChange = undefined;
        }
        if (typeof this.onDefaultLangChange !== 'undefined') {
            this.onDefaultLangChange.unsubscribe();
            this.onDefaultLangChange = undefined;
        }
    };
    TranslatePipe.prototype.ngOnDestroy = function () {
        this._dispose();
    };
    return TranslatePipe;
}());

TranslatePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'translate',
                pure: false // required to update the value when the promise is resolved
            },] },
];
/** @nocollapse */
TranslatePipe.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__translate_service__["b" /* TranslateService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateStore; });

var TranslateStore = (function () {
    function TranslateStore() {
        /**
         * The lang currently used
         * @type {string}
         */
        this.currentLang = this.defaultLang;
        /**
         * a list of translations per lang
         * @type {{}}
         */
        this.translations = {};
        /**
         * an array of langs
         * @type {Array}
         */
        this.langs = [];
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<TranslationChangeEvent>}
         */
        this.onTranslationChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<LangChangeEvent>}
         */
        this.onLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<DefaultLangChangeEvent>}
         */
        this.onDefaultLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return TranslateStore;
}());



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalValidator; });
var GlobalValidator = (function () {
    function GlobalValidator() {
    }
    GlobalValidator.mailFormat = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value !== "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    };
    return GlobalValidator;
}());



/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_pipes_arethmetic_sign_pipe__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_pipes_leading_zero_pipe__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_pipes_k_formatter_pipe__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_directives_clock_moon_phases_moon_phases_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_services_twapi_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_services_configuration_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_directives_watch_watch_component__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_directives_signup_signup_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_directives_login_login_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_directives_clock_clock_component__ = __webpack_require__(11);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TwAPIService", function() { return __WEBPACK_IMPORTED_MODULE_7__src_services_twapi_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_services_analytics_service__ = __webpack_require__(6);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return __WEBPACK_IMPORTED_MODULE_15__src_services_analytics_service__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return __WEBPACK_IMPORTED_MODULE_8__src_services_configuration_service__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "configurationProvider", function() { return __WEBPACK_IMPORTED_MODULE_8__src_services_configuration_service__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ArethmeticSign", function() { return __WEBPACK_IMPORTED_MODULE_3__src_pipes_arethmetic_sign_pipe__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ArethmeticSignPipeModule", function() { return __WEBPACK_IMPORTED_MODULE_3__src_pipes_arethmetic_sign_pipe__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LeadingZero", function() { return __WEBPACK_IMPORTED_MODULE_4__src_pipes_leading_zero_pipe__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LeadingZeroPipeModule", function() { return __WEBPACK_IMPORTED_MODULE_4__src_pipes_leading_zero_pipe__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "KFormatter", function() { return __WEBPACK_IMPORTED_MODULE_5__src_pipes_k_formatter_pipe__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "KFormatterPipeModule", function() { return __WEBPACK_IMPORTED_MODULE_5__src_pipes_k_formatter_pipe__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_models_watch_model__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Watch", function() { return __WEBPACK_IMPORTED_MODULE_16__src_models_watch_model__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "WatchAction", function() { return __WEBPACK_IMPORTED_MODULE_16__src_models_watch_model__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "WatchStatus", function() { return __WEBPACK_IMPORTED_MODULE_16__src_models_watch_model__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_models_user_model__ = __webpack_require__(22);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "User", function() { return __WEBPACK_IMPORTED_MODULE_17__src_models_user_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_models_measure_model__ = __webpack_require__(10);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Measure", function() { return __WEBPACK_IMPORTED_MODULE_18__src_models_measure_model__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MeasureStatus", function() { return __WEBPACK_IMPORTED_MODULE_18__src_models_measure_model__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_models_blog_post_model__ = __webpack_require__(21);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BlogPost", function() { return __WEBPACK_IMPORTED_MODULE_19__src_models_blog_post_model__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ClockComponent", function() { return __WEBPACK_IMPORTED_MODULE_14__src_directives_clock_clock_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ClockComponentModule", function() { return __WEBPACK_IMPORTED_MODULE_14__src_directives_clock_clock_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MoonPhasesComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__src_directives_clock_moon_phases_moon_phases_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MoonPhasesComponentModule", function() { return __WEBPACK_IMPORTED_MODULE_6__src_directives_clock_moon_phases_moon_phases_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return __WEBPACK_IMPORTED_MODULE_13__src_directives_login_login_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LoginComponentModule", function() { return __WEBPACK_IMPORTED_MODULE_13__src_directives_login_login_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return __WEBPACK_IMPORTED_MODULE_12__src_directives_signup_signup_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SignupComponentModule", function() { return __WEBPACK_IMPORTED_MODULE_12__src_directives_signup_signup_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "WatchComponent", function() { return __WEBPACK_IMPORTED_MODULE_11__src_directives_watch_watch_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "WatchComponentModule", function() { return __WEBPACK_IMPORTED_MODULE_11__src_directives_watch_watch_component__["b"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwCoreModule", function() { return TwCoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















/**
 * SERVICES
 */



/**
 * PIPES
 */



/**
 * MODEL
 */




/**
 * DIRECTIVES
 */





var TwCoreModule = (function () {
    function TwCoreModule() {
    }
    return TwCoreModule;
}());
TwCoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__src_services_twapi_service__["a" /* TwAPIService */],
            __WEBPACK_IMPORTED_MODULE_8__src_services_configuration_service__["a" /* ConfigurationService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_3__src_pipes_arethmetic_sign_pipe__["b" /* ArethmeticSignPipeModule */],
            __WEBPACK_IMPORTED_MODULE_4__src_pipes_leading_zero_pipe__["b" /* LeadingZeroPipeModule */],
            __WEBPACK_IMPORTED_MODULE_5__src_pipes_k_formatter_pipe__["b" /* KFormatterPipeModule */],
            __WEBPACK_IMPORTED_MODULE_6__src_directives_clock_moon_phases_moon_phases_component__["b" /* MoonPhasesComponentModule */],
            __WEBPACK_IMPORTED_MODULE_11__src_directives_watch_watch_component__["b" /* WatchComponentModule */],
            __WEBPACK_IMPORTED_MODULE_12__src_directives_signup_signup_component__["b" /* SignupComponentModule */],
            __WEBPACK_IMPORTED_MODULE_13__src_directives_login_login_component__["b" /* LoginComponentModule */],
            __WEBPACK_IMPORTED_MODULE_14__src_directives_clock_clock_component__["b" /* ClockComponentModule */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"],
        ]
    })
], TwCoreModule);



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringHelper; });
var StringHelper = (function () {
    function StringHelper() {
    }
    StringHelper.levenshtein = function (a, b) {
        if (!a || !b) {
            return (a || b).length;
        }
        var m = [];
        for (var i = 0; i <= b.length; i++) {
            m[i] = [i];
            if (i === 0) {
                continue;
            }
            ;
            for (var j = 0; j <= a.length; j++) {
                m[0][j] = j;
                if (j === 0) {
                    continue;
                }
                m[i][j] = b.charAt(i - 1) === a.charAt(j - 1) ? m[i - 1][j - 1] : Math.min(m[i - 1][j - 1] + 1, m[i][j - 1] + 1, m[i - 1][j] + 1);
            }
        }
        return m[b.length][a.length];
    };
    StringHelper.replaceAll = function (target, search, replacement) {
        return target.split(search).join(replacement);
    };
    return StringHelper;
}());



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__watch_model__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_post_model__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__measure_model__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelFactory; });




var ModelFactory = (function () {
    function ModelFactory() {
    }
    /**
     * Builds an User from json response
     * @param  {any}  jsonUser
     * @return {User}
     */
    ModelFactory.buildUser = function (jsonUser) {
        return new __WEBPACK_IMPORTED_MODULE_0__user_model__["a" /* User */](jsonUser.userId, jsonUser.email, jsonUser.firstname, jsonUser.name, jsonUser.country, jsonUser.registerDate, jsonUser.key, ModelFactory.buildWatches(jsonUser.watches));
    };
    /**
     * Build One Watch from JSON
     * @param jsonWatch
     */
    ModelFactory.buildWatchFromJSON = function (jsonWatch) {
        return new __WEBPACK_IMPORTED_MODULE_1__watch_model__["a" /* Watch */](jsonWatch.watchId, jsonWatch.brand, jsonWatch.historySize, jsonWatch.measures.map(ModelFactory.buildMeasureFromJSON), jsonWatch.name, jsonWatch.yearOfBuy, jsonWatch.serial, jsonWatch.caliber);
    };
    /**
     * Build one measure from  JSON
     * @param jsonMeasure
     */
    ModelFactory.buildMeasureFromJSON = function (jsonMeasure) {
        return new __WEBPACK_IMPORTED_MODULE_3__measure_model__["a" /* Measure */](jsonMeasure.id, jsonMeasure.measureUserTime, jsonMeasure.measureReferenceTime, jsonMeasure.statusId, jsonMeasure.accuracyUserTime, jsonMeasure.accuracyReferenceTime, jsonMeasure.accuracy, jsonMeasure.accuracyAge, jsonMeasure.percentile);
    };
    /**
     * Build a blog post from JSON
     * @param jsonPost
     */
    ModelFactory.buildBlogPostFromJSON = function (jsonPost) {
        return new __WEBPACK_IMPORTED_MODULE_2__blog_post_model__["a" /* BlogPost */](jsonPost.id, jsonPost.title, new Date(jsonPost.date), jsonPost.excerpt, jsonPost.url);
    };
    /**
     * Builds a watch from json response
     * @param  {any}     jsonWatches
     * @return {Watch[]}
     */
    ModelFactory.buildWatches = function (jsonWatches) {
        return jsonWatches.map(ModelFactory.buildWatchFromJSON);
    };
    /**
     * Builds Json post from json response
     * @param  {any}        jsonPosts [description]
     * @return {BlogPost[]}           [description]
     */
    ModelFactory.buildPosts = function (jsonPosts) {
        return jsonPosts.posts.map(ModelFactory.buildBlogPostFromJSON);
    };
    return ModelFactory;
}());



/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlNjhkMGMwYThiYmUxOWRkYzU2MSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3R3YXBpLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy90cmFuc2xhdGUuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3dhdGNoLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9hbmFseXRpY3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9jbG9jay9tb29uLXBoYXNlcy9tb29uLXBoYXNlcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9+L0BuZ3gtdHJhbnNsYXRlL2NvcmUvc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9tZWFzdXJlLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL2Nsb2NrL2Nsb2NrLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvd2F0Y2gvd2F0Y2guY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlcy9hcmV0aG1ldGljLXNpZ24ucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGlwZXMvay1mb3JtYXR0ZXIucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGlwZXMvbGVhZGluZy16ZXJvLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy90cmFuc2xhdGUubG9hZGVyLmpzIiwid2VicGFjazovLy8uL34vQG5neC10cmFuc2xhdGUvY29yZS9zcmMvdHJhbnNsYXRlLnBhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2Jsb2ctcG9zdC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy8uL34vQG5neC10cmFuc2xhdGUvY29yZS9zcmMvdHJhbnNsYXRlLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L0BuZ3gtdHJhbnNsYXRlL2NvcmUvc3JjL3RyYW5zbGF0ZS5waXBlLmpzIiwid2VicGFjazovLy8uL34vQG5neC10cmFuc2xhdGUvY29yZS9zcmMvdHJhbnNsYXRlLnN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL2dsb2JhbC12YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9PYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3N0cmluZy5oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9tb2RlbC5mYWN0b3J5LnRzIiwid2VicGFjazovLy8uL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9SeFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3NoYXJlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdGFrZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvQXJyYXlcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtB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QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7QUNuTHRDLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6ImNvcmUudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSwgcmVxdWlyZShcInJ4anMvT2JzZXJ2YWJsZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIiksIHJlcXVpcmUoXCJyeGpzL1J4XCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmVcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci90YWtlXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdG9BcnJheVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYW5ndWxhci9jb3JlXCIsIFwiQGFuZ3VsYXIvZm9ybXNcIiwgXCJAYW5ndWxhci9odHRwXCIsIFwiQGFuZ3VsYXIvY29tbW9uXCIsIFwicnhqcy9PYnNlcnZhYmxlXCIsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiLCBcInJ4anMvUnhcIiwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL29mXCIsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VcIiwgXCJyeGpzL2FkZC9vcGVyYXRvci9zaGFyZVwiLCBcInJ4anMvYWRkL29wZXJhdG9yL3Rha2VcIiwgXCJyeGpzL2FkZC9vcGVyYXRvci90b0FycmF5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInR3LWNvcmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpLCByZXF1aXJlKFwicnhqcy9PYnNlcnZhYmxlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKSwgcmVxdWlyZShcInJ4anMvUnhcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vYnNlcnZhYmxlL29mXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9zaGFyZVwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3Rha2VcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci90b0FycmF5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ0dy1jb3JlXCJdID0gZmFjdG9yeShyb290W1wiQGFuZ3VsYXIvY29yZVwiXSwgcm9vdFtcIkBhbmd1bGFyL2Zvcm1zXCJdLCByb290W1wiQGFuZ3VsYXIvaHR0cFwiXSwgcm9vdFtcIkBhbmd1bGFyL2NvbW1vblwiXSwgcm9vdFtcInJ4anMvT2JzZXJ2YWJsZVwiXSwgcm9vdFtcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIl0sIHJvb3RbXCJyeGpzL1J4XCJdLCByb290W1wicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiXSwgcm9vdFtcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiXSwgcm9vdFtcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlXCJdLCByb290W1wicnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmVcIl0sIHJvb3RbXCJyeGpzL2FkZC9vcGVyYXRvci90YWtlXCJdLCByb290W1wicnhqcy9hZGQvb3BlcmF0b3IvdG9BcnJheVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yOF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzM3X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzhfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzQwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNDFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80Ml9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTY4ZDBjMGE4YmJlMTlkZGM1NjEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlRmFrZUxvYWRlciB9IGZyb20gXCIuL3NyYy90cmFuc2xhdGUubG9hZGVyXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLCBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB9IGZyb20gXCIuL3NyYy9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXJcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVBhcnNlciwgVHJhbnNsYXRlRGVmYXVsdFBhcnNlciB9IGZyb20gXCIuL3NyYy90cmFuc2xhdGUucGFyc2VyXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVEaXJlY3RpdmUgfSBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gXCIuL3NyYy90cmFuc2xhdGUucGlwZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU3RvcmUgfSBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLnN0b3JlXCI7XG5pbXBvcnQgeyBVU0VfU1RPUkUgfSBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLnNlcnZpY2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy90cmFuc2xhdGUubG9hZGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLnNlcnZpY2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy90cmFuc2xhdGUucGFyc2VyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLmRpcmVjdGl2ZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5waXBlXCI7XG52YXIgVHJhbnNsYXRlTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVNb2R1bGUoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCBpbiB5b3VyIHJvb3QgbW9kdWxlIHRvIHByb3ZpZGUgdGhlIFRyYW5zbGF0ZVNlcnZpY2VcbiAgICAgKiBAcGFyYW0ge1RyYW5zbGF0ZU1vZHVsZUNvbmZpZ30gY29uZmlnXG4gICAgICogQHJldHVybnMge01vZHVsZVdpdGhQcm92aWRlcnN9XG4gICAgICovXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3QgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB7fTsgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFRyYW5zbGF0ZU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIGNvbmZpZy5sb2FkZXIgfHwgeyBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVGYWtlTG9hZGVyIH0sXG4gICAgICAgICAgICAgICAgY29uZmlnLnBhcnNlciB8fCB7IHByb3ZpZGU6IFRyYW5zbGF0ZVBhcnNlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZURlZmF1bHRQYXJzZXIgfSxcbiAgICAgICAgICAgICAgICBjb25maWcubWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB8fCB7IHByb3ZpZGU6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIHVzZUNsYXNzOiBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB9LFxuICAgICAgICAgICAgICAgIFRyYW5zbGF0ZVN0b3JlLFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogVVNFX1NUT1JFLCB1c2VWYWx1ZTogY29uZmlnLmlzb2xhdGUgfSxcbiAgICAgICAgICAgICAgICBUcmFuc2xhdGVTZXJ2aWNlXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVc2UgdGhpcyBtZXRob2QgaW4geW91ciBvdGhlciAobm9uIHJvb3QpIG1vZHVsZXMgdG8gaW1wb3J0IHRoZSBkaXJlY3RpdmUvcGlwZVxuICAgICAqIEBwYXJhbSB7VHJhbnNsYXRlTW9kdWxlQ29uZmlnfSBjb25maWdcbiAgICAgKiBAcmV0dXJucyB7TW9kdWxlV2l0aFByb3ZpZGVyc31cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yQ2hpbGQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB7fTsgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFRyYW5zbGF0ZU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIGNvbmZpZy5sb2FkZXIgfHwgeyBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVGYWtlTG9hZGVyIH0sXG4gICAgICAgICAgICAgICAgY29uZmlnLnBhcnNlciB8fCB7IHByb3ZpZGU6IFRyYW5zbGF0ZVBhcnNlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZURlZmF1bHRQYXJzZXIgfSxcbiAgICAgICAgICAgICAgICBjb25maWcubWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB8fCB7IHByb3ZpZGU6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIHVzZUNsYXNzOiBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogVVNFX1NUT1JFLCB1c2VWYWx1ZTogY29uZmlnLmlzb2xhdGUgfSxcbiAgICAgICAgICAgICAgICBUcmFuc2xhdGVTZXJ2aWNlXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNsYXRlTW9kdWxlO1xufSgpKTtcbmV4cG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9O1xuVHJhbnNsYXRlTW9kdWxlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgVHJhbnNsYXRlUGlwZSxcbiAgICAgICAgICAgICAgICAgICAgVHJhbnNsYXRlRGlyZWN0aXZlXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBleHBvcnRzOiBbXG4gICAgICAgICAgICAgICAgICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgICAgICAgICAgICAgICAgIFRyYW5zbGF0ZURpcmVjdGl2ZVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuVHJhbnNsYXRlTW9kdWxlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vQG5neC10cmFuc2xhdGUvY29yZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXF1ZXN0T3B0aW9ucywgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLy4uL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCB7IFdhdGNoLCBXYXRjaEFjdGlvbiB9IGZyb20gJy4vLi4vbW9kZWxzL3dhdGNoLm1vZGVsJztcbmltcG9ydCB7IE1lYXN1cmUgfSBmcm9tICcuLy4uL21vZGVscy9tZWFzdXJlLm1vZGVsJztcbmltcG9ydCB7IE1vZGVsRmFjdG9yeSB9IGZyb20gJy4vLi4vbW9kZWxzL21vZGVsLmZhY3RvcnknO1xuaW1wb3J0IHsgQmxvZ1Bvc3QgfSBmcm9tICcuLy4uL21vZGVscy9ibG9nLXBvc3QubW9kZWwnO1xuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4vYW5hbHl0aWNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RyaW5nSGVscGVyIH0gZnJvbSAnLi8uLi9oZWxwZXJzL3N0cmluZy5oZWxwZXInO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5cbmltcG9ydCAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbi8qKlxuICogRXhwb3NlcyB0aGUgVG9vbHdhdGNoIEFQSS5cbiAqIFJldHVybnMgcHJvbWVzZXMgb24gZG9tYWluIG9iamVjdHNcbiAqL1xuZXhwb3J0IGNsYXNzIFR3QVBJU2VydmljZSB7XG5cbiAgICAvKipcbiAgICAgKiBBbGwgdGhlIEhUVFAgY29kZSB1c2VkIGJ5IHRoZSB0b29sd2F0Y2ggQVBJIGFyZSBkZWZpbmVkIGhlcmUuXG4gICAgICogSHR0cCBjb2RlcyBjYW4gYmUgdG8gcmVmaW5lIHRoZSBlcnJvciB0eXBlc1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9DT05USU5VRSA9IDEwMDtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfU1dJVENISU5HX1BST1RPQ09MUyA9IDEwMTtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUFJPQ0VTU0lORyA9IDEwMjsgICAgICAgICAgICAvLyBSRkMyNTE4XG5cbiAgICAvLyBTdWNjZXNzXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmVxdWVzdCBoYXMgc3VjY2VlZGVkXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX09LID0gMjAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcnZlciBzdWNjZXNzZnVsbHkgY3JlYXRlZCBhIG5ldyByZXNvdXJjZVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9DUkVBVEVEID0gMjAxO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9BQ0NFUFRFRCA9IDIwMjtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTk9OX0FVVEhPUklUQVRJVkVfSU5GT1JNQVRJT04gPSAyMDM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VydmVyIHN1Y2Nlc3NmdWxseSBwcm9jZXNzZWQgdGhlIHJlcXVlc3QsIHRob3VnaCBubyBjb250ZW50IGlzIHJldHVybmVkXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX05PX0NPTlRFTlQgPSAyMDQ7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1JFU0VUX0NPTlRFTlQgPSAyMDU7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1BBUlRJQUxfQ09OVEVOVCA9IDIwNjtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTVVMVElfU1RBVFVTID0gMjA3OyAgICAgICAgICAvLyBSRkM0OTE4XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0FMUkVBRFlfUkVQT1JURUQgPSAyMDg7ICAgICAgLy8gUkZDNTg0MlxuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9JTV9VU0VEID0gMjI2OyAgICAgICAgICAgICAgIC8vIFJGQzMyMjlcblxuICAgIC8vIFJlZGlyZWN0aW9uXG5cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTVVMVElQTEVfQ0hPSUNFUyA9IDMwMDtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTU9WRURfUEVSTUFORU5UTFkgPSAzMDE7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0ZPVU5EID0gMzAyO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9TRUVfT1RIRVIgPSAzMDM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgaGFzIG5vdCBiZWVuIG1vZGlmaWVkIHNpbmNlIHRoZSBsYXN0IHJlcXVlc3RcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTk9UX01PRElGSUVEID0gMzA0O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9VU0VfUFJPWFkgPSAzMDU7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1JFU0VSVkVEID0gMzA2O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9URU1QT1JBUllfUkVESVJFQ1QgPSAzMDc7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1BFUk1BTkVOVExZX1JFRElSRUNUID0gMzA4OyAgLy8gUkZDNzIzOFxuXG4gICAgLy8gQ2xpZW50IEVycm9yXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmVxdWVzdCBjYW5ub3QgYmUgZnVsZmlsbGVkIGR1ZSB0byBtdWx0aXBsZSBlcnJvcnNcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfQkFEX1JFUVVFU1QgPSA0MDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXNlciBpcyB1bmF1dGhvcml6ZWQgdG8gYWNjZXNzIHRoZSByZXF1ZXN0ZWQgcmVzb3VyY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfVU5BVVRIT1JJWkVEID0gNDAxO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9QQVlNRU5UX1JFUVVJUkVEID0gNDAyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlcXVlc3RlZCByZXNvdXJjZSBpcyB1bmF2YWlsYWJsZSBhdCB0aGlzIHByZXNlbnQgdGltZVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9GT1JCSURERU4gPSA0MDM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmVxdWVzdGVkIHJlc291cmNlIGNvdWxkIG5vdCBiZSBmb3VuZFxuICAgICAqXG4gICAgICogTm90ZTogVGhpcyBpcyBzb21ldGltZXMgdXNlZCB0byBtYXNrIGlmIHRoZXJlIHdhcyBhbiBVTkFVVEhPUklaRUQgKDQwMSkgb3JcbiAgICAgKiBGT1JCSURERU4gKDQwMykgZXJyb3IsIGZvciBzZWN1cml0eSByZWFzb25zXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX05PVF9GT1VORCA9IDQwNDtcblxuICAgIC8qKlxuICAgICAqIFRoZSByZXF1ZXN0IG1ldGhvZCBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBmb2xsb3dpbmcgcmVzb3VyY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTUVUSE9EX05PVF9BTExPV0VEID0gNDA1O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlcXVlc3Qgd2FzIG5vdCBhY2NlcHRhYmxlXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX05PVF9BQ0NFUFRBQkxFID0gNDA2O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9QUk9YWV9BVVRIRU5USUNBVElPTl9SRVFVSVJFRCA9IDQwNztcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUkVRVUVTVF9USU1FT1VUID0gNDA4O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlcXVlc3QgY291bGQgbm90IGJlIGNvbXBsZXRlZCBkdWUgdG8gYSBjb25mbGljdCB3aXRoIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICogb2YgdGhlIHJlc291cmNlXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0NPTkZMSUNUID0gNDA5O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9HT05FID0gNDEwO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9MRU5HVEhfUkVRVUlSRUQgPSA0MTE7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1BSRUNPTkRJVElPTl9GQUlMRUQgPSA0MTI7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1JFUVVFU1RfRU5USVRZX1RPT19MQVJHRSA9IDQxMztcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUkVRVUVTVF9VUklfVE9PX0xPTkcgPSA0MTQ7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1VOU1VQUE9SVEVEX01FRElBX1RZUEUgPSA0MTU7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1JFUVVFU1RFRF9SQU5HRV9OT1RfU0FUSVNGSUFCTEUgPSA0MTY7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0VYUEVDVEFUSU9OX0ZBSUxFRCA9IDQxNztcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfSV9BTV9BX1RFQVBPVCA9IDQxODsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzIzMjRcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfVU5QUk9DRVNTQUJMRV9FTlRJVFkgPSA0MjI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzQ5MThcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTE9DS0VEID0gNDIzOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzQ5MThcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfRkFJTEVEX0RFUEVOREVOQ1kgPSA0MjQ7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzQ5MThcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUkVTRVJWRURfRk9SX1dFQkRBVl9BRFZBTkNFRF9DT0xMRUNUSU9OU19FWFBJUkVEX1BST1BPU0FMID0gNDI1OyAgIC8vIFJGQzI4MTdcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfVVBHUkFERV9SRVFVSVJFRCA9IDQyNjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzI4MTdcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUFJFQ09ORElUSU9OX1JFUVVJUkVEID0gNDI4OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzY1ODVcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfVE9PX01BTllfUkVRVUVTVFMgPSA0Mjk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzY1ODVcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUkVRVUVTVF9IRUFERVJfRklFTERTX1RPT19MQVJHRSA9IDQzMTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzY1ODVcblxuICAgIC8vIFNlcnZlciBFcnJvclxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcnZlciBlbmNvdW50ZXJlZCBhbiB1bmV4cGVjdGVkIGVycm9yXG4gICAgICpcbiAgICAgKiBOb3RlOiBUaGlzIGlzIGEgZ2VuZXJpYyBlcnJvciBtZXNzYWdlIHdoZW4gbm8gc3BlY2lmaWMgbWVzc2FnZVxuICAgICAqIGlzIHN1aXRhYmxlXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0lOVEVSTkFMX1NFUlZFUl9FUlJPUiA9IDUwMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZXJ2ZXIgZG9lcyBub3QgcmVjb2duaXNlIHRoZSByZXF1ZXN0IG1ldGhvZFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9OT1RfSU1QTEVNRU5URUQgPSA1MDE7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0JBRF9HQVRFV0FZID0gNTAyO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9TRVJWSUNFX1VOQVZBSUxBQkxFID0gNTAzO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9HQVRFV0FZX1RJTUVPVVQgPSA1MDQ7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1ZFUlNJT05fTk9UX1NVUFBPUlRFRCA9IDUwNTtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfVkFSSUFOVF9BTFNPX05FR09USUFURVNfRVhQRVJJTUVOVEFMID0gNTA2OyAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzIyOTVcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfSU5TVUZGSUNJRU5UX1NUT1JBR0UgPSA1MDc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzQ5MThcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTE9PUF9ERVRFQ1RFRCA9IDUwODsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzU4NDJcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTk9UX0VYVEVOREVEID0gNTEwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzI3NzRcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTkVUV09SS19BVVRIRU5USUNBVElPTl9SRVFVSVJFRCA9IDUxMTtcblxuICAgIHB1YmxpYyBzdGF0aWMgdXNlcjogVXNlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBzdGF0aWMgdGltZToge1xuICAgICAgICBzeW5jRGF0ZTogRGF0ZSxcbiAgICAgICAgc3luY0FuY2hvcjogbnVtYmVyLFxuICAgICAgICBvZmZzZXQ6IG51bWJlclxuICAgIH0gPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBzdGF0aWMgbm93ID0gcmVxdWlyZShcInBlcmZvcm1hbmNlLW5vd1wiKTtcblxuICAgIC8vRGVmaW5lcyBoZWFkZXJzIGFuZCByZXF1ZXN0IG9wdGlvbnNcbiAgICBwcml2YXRlIHN0YXRpYyBoZWFkZXJzOiBIZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgIHByaXZhdGUgc3RhdGljIG9wdGlvbnM6IFJlcXVlc3RPcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogVHdBUElTZXJ2aWNlLmhlYWRlcnMgfSk7XG4gICAgLy8gUmVncmVzc2lvbiBSQzUuIERvZXNuJ3QgYWNjZXB0IGdldCB3aXRob3V0IGJvZHlcbiAgICBwcml2YXRlIHN0YXRpYyBvcHRpb25zR2V0OiBSZXF1ZXN0T3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IFR3QVBJU2VydmljZS5oZWFkZXJzLCBib2R5OiBcIlwiIH0pO1xuICAgIHByaXZhdGUgc3RhdGljIGFwaWtleTogc3RyaW5nID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEluamVjdCBodHRwIHNlcnZpY2VcbiAgICAgKiBAcGFyYW0ge0h0dHB9IHByaXZhdGUgaHR0cCBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgICAgICBwcml2YXRlIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSxcbiAgICAgICAgcHVibGljIGNvbmZpZzogQ29uZmlndXJhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5hY2N1cmF0ZVRpbWUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlc2V0VGltZSgpIHtcbiAgICAgICAgVHdBUElTZXJ2aWNlLnRpbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9nIGEgdXNlciB1c2luZyBlbWFpbCBhbmQgcGFzc3dvcmRcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICBlbWFpbCAgIFxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIHBhc3N3b3JkXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxVc2VyPn0gICAgICAgICBcbiAgICAgKi9cbiAgICBsb2dpbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiB7XG5cbiAgICAgICAgbGV0IGNyZWRzID0geyBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCB9O1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmdldEFQSVVybCgpICsgXCJ1c2Vyc1wiLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoY3JlZHMpLFxuICAgICAgICAgICAgVHdBUElTZXJ2aWNlLm9wdGlvbnNcbiAgICAgICAgKVxuICAgICAgICAgICAgLm1hcCgocmVzKSA9PiB7IHJldHVybiBNb2RlbEZhY3RvcnkuYnVpbGRVc2VyKHJlcy5qc29uKCkpOyB9KVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpLnRoZW4oXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzLmV2ZW50KCdBUEknLCAnTE9HSU4nKTtcbiAgICAgICAgICAgICAgICBUd0FQSVNlcnZpY2UuYXBpa2V5ID0gcmVzLmtleTtcbiAgICAgICAgICAgICAgICBUd0FQSVNlcnZpY2UuaGVhZGVycy5kZWxldGUoJ1gtQVBJLUtFWScpO1xuICAgICAgICAgICAgICAgIFR3QVBJU2VydmljZS5oZWFkZXJzLmFwcGVuZCgnWC1BUEktS0VZJywgVHdBUElTZXJ2aWNlLmFwaWtleSk7XG4gICAgICAgICAgICAgICAgVHdBUElTZXJ2aWNlLnVzZXIgPSByZXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnIpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IGFuIHVzZXIgdXNpbmcgaGlzIEFQSSBrZXlcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICBrZXkgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8VXNlcj59ICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0VXNlcihrZXk6IHN0cmluZyk6IFByb21pc2U8VXNlcj4ge1xuXG5cbiAgICAgICAgVHdBUElTZXJ2aWNlLmFwaWtleSA9IGtleTtcbiAgICAgICAgVHdBUElTZXJ2aWNlLmhlYWRlcnMuZGVsZXRlKCdYLUFQSS1LRVknKTtcbiAgICAgICAgVHdBUElTZXJ2aWNlLmhlYWRlcnMuYXBwZW5kKCdYLUFQSS1LRVknLCBUd0FQSVNlcnZpY2UuYXBpa2V5KTtcblxuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgICAgICAgdGhpcy5jb25maWcuZ2V0QVBJVXJsKCkgKyBcInVzZXJzXCIsXG4gICAgICAgICAgICBUd0FQSVNlcnZpY2Uub3B0aW9uc1xuICAgICAgICApXG4gICAgICAgICAgICAubWFwKChyZXMpID0+IHsgcmV0dXJuIE1vZGVsRmFjdG9yeS5idWlsZFVzZXIocmVzLmpzb24oKSk7IH0pXG4gICAgICAgICAgICAudG9Qcm9taXNlKCkudGhlbihcbiAgICAgICAgICAgIHJlcyA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljcy5ldmVudCgnQVBJJywgJ0FVVE9MT0dJTicpO1xuICAgICAgICAgICAgICAgIFR3QVBJU2VydmljZS51c2VyID0gcmVzO1xuICAgICAgICAgICAgICAgIHJlcy5rZXkgPSBrZXk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnIpXG4gICAgICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgbmV3IHVzZXJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICBlbWFpbCAgIFxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIHBhc3N3b3JkXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgbmFtZSAgICBcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICBsYXN0bmFtZVxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIGNvdW50cnkgXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxVc2VyPn0gICAgICAgICBcbiAgICAgKi9cbiAgICBzaWdudXAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbmFtZT86IHN0cmluZywgbGFzdG5hbWU/OiBzdHJpbmcsIGNvdW50cnk/OiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5nZXRBUElVcmwoKSArIFwidXNlcnNcIixcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgbGFzdG5hbWU6IGxhc3RuYW1lLFxuICAgICAgICAgICAgICAgIGNvdW50cnk6IGNvdW50cnlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgVHdBUElTZXJ2aWNlLm9wdGlvbnNcbiAgICAgICAgKVxuICAgICAgICAgICAgLm1hcCgocmVzKSA9PiB7IHJldHVybiBNb2RlbEZhY3RvcnkuYnVpbGRVc2VyKHJlcy5qc29uKCkpOyB9KVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpLnRoZW4oXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzLmV2ZW50KCdBUEknLCAnU0lHTlVQJyk7XG4gICAgICAgICAgICAgICAgVHdBUElTZXJ2aWNlLmFwaWtleSA9IHJlcy5rZXk7XG4gICAgICAgICAgICAgICAgVHdBUElTZXJ2aWNlLmhlYWRlcnMuZGVsZXRlKCdYLUFQSS1LRVknKTtcbiAgICAgICAgICAgICAgICBUd0FQSVNlcnZpY2UuaGVhZGVycy5hcHBlbmQoJ1gtQVBJLUtFWScsIFR3QVBJU2VydmljZS5hcGlrZXkpO1xuICAgICAgICAgICAgICAgIFR3QVBJU2VydmljZS51c2VyID0gcmVzO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIG5ldyBmYWNlYm9vayB1c2VyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgZW1haWwgICBcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICB0b2tlblxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIG5hbWUgICAgXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgbGFzdG5hbWVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFVzZXI+fSAgICAgXG4gICAgICovXG4gICAgc2lnbnVwRmFjZWJvb2soZW1haWw6IHN0cmluZywgdG9rZW46IHN0cmluZywgbmFtZT86IHN0cmluZywgbGFzdG5hbWU/OiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgICAgICAgdGhpcy5jb25maWcuZ2V0QVBJVXJsKCkgKyBcInVzZXJzL2ZhY2Vib29rXCIsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGxhc3RuYW1lOiBsYXN0bmFtZVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBUd0FQSVNlcnZpY2Uub3B0aW9uc1xuICAgICAgICApXG4gICAgICAgICAgICAubWFwKChyZXMpID0+IHsgcmV0dXJuIE1vZGVsRmFjdG9yeS5idWlsZFVzZXIocmVzLmpzb24oKSk7IH0pXG4gICAgICAgICAgICAudG9Qcm9taXNlKCkudGhlbihcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXRpY3MuZXZlbnQoJ0FQSScsICdTSUdOVVAnKTtcbiAgICAgICAgICAgICAgICBUd0FQSVNlcnZpY2UuYXBpa2V5ID0gcmVzLmtleTtcbiAgICAgICAgICAgICAgICBUd0FQSVNlcnZpY2UuaGVhZGVycy5kZWxldGUoJ1gtQVBJLUtFWScpO1xuICAgICAgICAgICAgICAgIFR3QVBJU2VydmljZS5oZWFkZXJzLmFwcGVuZCgnWC1BUEktS0VZJywgVHdBUElTZXJ2aWNlLmFwaWtleSk7XG4gICAgICAgICAgICAgICAgVHdBUElTZXJ2aWNlLnVzZXIgPSByZXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXNrIGEgcmVzZXQgcGFzc3dvcmQgbGlua1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59XG4gICAgICovXG4gICAgcmVzZXRQYXNzd29yZChlbWFpbDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmdldEFQSVVybCgpICsgXCJ1c2Vycy9yZXNldFwiLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBUd0FQSVNlcnZpY2Uub3B0aW9uc1xuICAgICAgICApLnRvUHJvbWlzZSgpLnRoZW4oXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXRpY3MuZXZlbnQoJ0FQSScsICdSRVNFVF9QQVNTV09SRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgYWNjb3VudCBjdXJyZW50bHkgbG9nZ2VkIGluLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59XG4gICAgICovXG4gICAgZGVsZXRlQWNjb3VudCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmdldEFQSVVybCgpICsgXCJ1c2Vyc1wiLFxuICAgICAgICAgICAgVHdBUElTZXJ2aWNlLm9wdGlvbnNcbiAgICAgICAgKS50b1Byb21pc2UoKS50aGVuKFxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzLmV2ZW50KCdBUEknLCAnREVMRVRFX0FDQ09VTlQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnIpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgd2F0Y2hlcyBvZiBhbiB1c2VyXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxXYXRjaFtdPn1cbiAgICAgKi9cbiAgICBnZXRXYXRjaGVzKCk6IFByb21pc2U8V2F0Y2hbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmdldEFQSVVybCgpICsgXCJ3YXRjaGVzXCIsXG4gICAgICAgICAgICBUd0FQSVNlcnZpY2Uub3B0aW9uc0dldClcbiAgICAgICAgICAgIC5tYXAoKHJlcykgPT4geyByZXR1cm4gTW9kZWxGYWN0b3J5LmJ1aWxkV2F0Y2hlcyhyZXMuanNvbigpKTsgfSlcbiAgICAgICAgICAgIC50b1Byb21pc2UoKS50aGVuKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljcy5ldmVudCgnQVBJJywgJ1dBVENIRVMnLCAnR0VUJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnIpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBvciBpbnNlcnQgYSB3YXRjaFxuICAgICAqIEBwYXJhbSAge1dhdGNofSAgICAgICAgICB3YXRjaFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8V2F0Y2g+fSAgICAgIFxuICAgICAqL1xuICAgIHVwc2VydFdhdGNoKHdhdGNoOiBXYXRjaCk6IFByb21pc2U8V2F0Y2g+IHtcblxuICAgICAgICBpZiAod2F0Y2guaWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0V2F0Y2god2F0Y2gpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlV2F0Y2god2F0Y2gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhIHdhdGNoIGFuZCB1cGRhdGUgdGhlIHVzZXIgYWNjb3JkaW5nbHlcbiAgICAgKiBAcGFyYW0gIHtVc2VyfSAgICAgICAgICB1c2VyICBcbiAgICAgKiBAcGFyYW0gIHtXYXRjaH0gICAgICAgICB3YXRjaCBcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFVzZXI+fSAgICAgICBcbiAgICAgKi9cbiAgICBkZWxldGVXYXRjaCh1c2VyOiBVc2VyLCB3YXRjaDogV2F0Y2gpOiBQcm9taXNlPFVzZXI+IHtcbiAgICAgICAgbGV0IGRlbGV0ZU9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBUd0FQSVNlcnZpY2UuaGVhZGVycyB9KTtcbiAgICAgICAgZGVsZXRlT3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyB3YXRjaElkOiB3YXRjaC5pZCB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmdldEFQSVVybCgpICsgXCJ3YXRjaGVzXCIsXG4gICAgICAgICAgICBkZWxldGVPcHRpb25zXG4gICAgICAgICkudG9Qcm9taXNlKCkudGhlbihcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcblxuICAgICAgICAgICAgICAgIHVzZXIud2F0Y2hlcyA9IHVzZXIud2F0Y2hlcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChmaWx0ZXI6IFdhdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyLmlkICE9PSB3YXRjaC5pZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljcy5ldmVudCgnQVBJJywgJ1dBVENIRVMnLCAnREVMRVRFJyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0IG9yIHVwZGF0ZSBhIG1lYXN1cmUgYW5kIHRoZSByZWxhdGVkIHdhdGNoXG4gICAgICogQHBhcmFtICB7V2F0Y2h9ICAgICAgICAgIHdhdGNoICBcbiAgICAgKiBAcGFyYW0gIHtNZWFzdXJlfSAgICAgICAgbWVhc3VyZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8V2F0Y2g+fSAgICAgICAgXG4gICAgICovXG4gICAgdXBzZXJ0TWVhc3VyZSh3YXRjaDogV2F0Y2gsIG1lYXN1cmU6IE1lYXN1cmUpOiBQcm9taXNlPFdhdGNoPiB7XG4gICAgICAgIGlmIChtZWFzdXJlLmlkID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc2VydE1lYXN1cmUod2F0Y2gsIG1lYXN1cmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlTWVhc3VyZSh3YXRjaCwgbWVhc3VyZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYSBtZWFzdXJlIGFuZCB0aGUgdXBkYXRlIHRoZSByZWxhdGVkIHdhdGNoXG4gICAgICogQHBhcmFtICB7V2F0Y2h9ICAgICAgICAgIHdhdGNoICBcbiAgICAgKiBAcGFyYW0gIHtNZWFzdXJlfSAgICAgICAgbWVhc3VyZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8V2F0Y2g+fSAgICAgICAgXG4gICAgICovXG4gICAgZGVsZXRlTWVhc3VyZSh3YXRjaDogV2F0Y2gsIG1lYXN1cmU6IE1lYXN1cmUpOiBQcm9taXNlPFdhdGNoPiB7XG5cbiAgICAgICAgbGV0IGRlbGV0ZU9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBUd0FQSVNlcnZpY2UuaGVhZGVycyB9KTtcbiAgICAgICAgZGVsZXRlT3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyBtZWFzdXJlSWQ6IG1lYXN1cmUuaWQgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5nZXRBUElVcmwoKSArIFwibWVhc3VyZXNcIixcbiAgICAgICAgICAgIGRlbGV0ZU9wdGlvbnNcbiAgICAgICAgKS50b1Byb21pc2UoKS50aGVuKFxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xuXG4gICAgICAgICAgICAgICAgd2F0Y2gubWVhc3VyZXMgPSB3YXRjaC5tZWFzdXJlcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChmaWx0ZXI6IE1lYXN1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXIuaWQgIT09IG1lYXN1cmUuaWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgd2F0Y2guY29tcHV0ZU5leHQoKTtcbiAgICAgICAgICAgICAgICB3YXRjaC5oaXN0b3J5U2l6ZS0tO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXRpY3MuZXZlbnQoJ0FQSScsICdNRUFTVVJFJywgJ0RFTEVURScpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdhdGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRCbG9nUG9zdHMoKTogUHJvbWlzZTxCbG9nUG9zdFtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgICAgICAgXCJodHRwczovL2Jsb2cudG9vbHdhdGNoLmlvLz9qc29uPTFcIlxuICAgICAgICApXG4gICAgICAgICAgICAubWFwKChyZXMpID0+IHsgcmV0dXJuIE1vZGVsRmFjdG9yeS5idWlsZFBvc3RzKHJlcy5qc29uKCkpOyB9KVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpLnRoZW4oXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzLmV2ZW50KCdBUEknLCAnQkxPRycsICdHRVQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIGJyYW5kLCByZXR1cm5zIGxpa2VseSBicmFuZHMgb3JkZXJlZCBieSBjb25maWRlbmNlXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgYnJhbmQgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgIFt7YnJhbmQ6c3RyaW5nLCBjb25maWRlbmNlOm51bWJlcn1dXG4gICAgICovXG4gICAgZ2V0TGlrZWx5QnJhbmRzKHdhdGNoOiBXYXRjaCk6IFByb21pc2U8eyB3YXRjaDogV2F0Y2gsIHByb3Bvc2FsczogW3sgYnJhbmQ6IHN0cmluZywgbG9nbzogc3RyaW5nLCBjb25maWRlbmNlOiBudW1iZXIgfV0gfT4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgICAgICAgdGhpcy5jb25maWcuZ2V0QXNzZXRzVXJsKCkgKyAnL3dhdGNoZXMvd2F0Y2gtYnJhbmQuanNvbicpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpLnRoZW4oXG4gICAgICAgICAgICBicmFuZHMgPT4ge1xuXG4gICAgICAgICAgICAgICAgdmFyIGxpa2VseUJyYW5kcyA9IHsgd2F0Y2g6IHdhdGNoLCBwcm9wb3NhbHM6IFtdIGFzIHsgYnJhbmQ6IHN0cmluZywgbG9nbzogc3RyaW5nLCBjb25maWRlbmNlOiBudW1iZXIgfVtdIH07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gYnJhbmRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cblxuICAgICAgICAgICAgICAgICAgICBsZXQgbGV2ZW5zaHRlaW5EaXN0YW5jZSA9IFN0cmluZ0hlbHBlci5sZXZlbnNodGVpbihicmFuZHNbaV0ubmFtZSwgd2F0Y2guYnJhbmQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29uZmlkZW5jZSA9IGxldmVuc2h0ZWluRGlzdGFuY2UgLyBNYXRoLm1heCh3YXRjaC5icmFuZC5sZW5ndGgsIGJyYW5kc1tpXS5uYW1lLmxlbmd0aCkgKiAxMDA7XG5cbiAgICAgICAgICAgICAgICAgICAgbGlrZWx5QnJhbmRzLnByb3Bvc2Fscy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5kOiBicmFuZHNbaV0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiBicmFuZHNbaV0uaWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWRlbmNlOiAxMDAgLSBjb25maWRlbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGlrZWx5QnJhbmRzLnByb3Bvc2FscyA9IGxpa2VseUJyYW5kcy5wcm9wb3NhbHMuc29ydChmdW5jdGlvbiAoXG4gICAgICAgICAgICAgICAgICAgIGE6IHsgYnJhbmQ6IHN0cmluZywgY29uZmlkZW5jZTogbnVtYmVyIH0sXG4gICAgICAgICAgICAgICAgICAgIGI6IHsgYnJhbmQ6IHN0cmluZywgY29uZmlkZW5jZTogbnVtYmVyIH0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuY29uZmlkZW5jZSAtIGEuY29uZmlkZW5jZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBsaWtlbHlCcmFuZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGtub3duIGJyYW5kc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2V9IFxuICAgICAqL1xuICAgIGdldEJyYW5kcygpOiBQcm9taXNlPFt7IG5hbWU6IHN0cmluZywgaWNvbjogc3RyaW5nLCBtb2RlbHM6IHN0cmluZyB9XT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmdldEFzc2V0c1VybCgpICsgJy93YXRjaGVzL3dhdGNoLWJyYW5kLmpzb24nKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50b1Byb21pc2UoKS50aGVuKFxuICAgICAgICAgICAgYnJhbmRzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljcy5ldmVudCgnQVBJJywgJ0JSQU5EUycsICdHRVQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1vZGVsIG9mIGEgZ2l2ZW4gYnJhbmRcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICBicmFuZFxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgXG4gICAgICovXG4gICAgZ2V0TW9kZWxzKGJyYW5kOiBzdHJpbmcpOiBQcm9taXNlPFtzdHJpbmddPiB7XG5cbiAgICAgICAgYnJhbmQgPSBTdHJpbmdIZWxwZXIucmVwbGFjZUFsbChicmFuZCwgXCIgXCIsIFwiXCIpO1xuICAgICAgICBicmFuZCA9IFN0cmluZ0hlbHBlci5yZXBsYWNlQWxsKGJyYW5kLCBcIiZcIiwgXCJcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5nZXRBc3NldHNVcmwoKSArICcvd2F0Y2hlcy93YXRjaC1tb2RlbHMvJyArIGJyYW5kICsgXCIuanNvblwiKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50b1Byb21pc2UoKS50aGVuKFxuICAgICAgICAgICAgbW9kZWxzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljcy5ldmVudCgnQVBJJywgJ01PREVMUycsICdHRVQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1vZGVsIG9mIGEgZ2l2ZW4gYnJhbmRcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICBicmFuZFxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgXG4gICAgICovXG4gICAgZ2V0Q2FsaWJlcnMoYnJhbmQ6IHN0cmluZyk6IFByb21pc2U8W3N0cmluZ10+IHtcblxuICAgICAgICBicmFuZCA9IFN0cmluZ0hlbHBlci5yZXBsYWNlQWxsKGJyYW5kLCBcIiBcIiwgXCJcIik7XG4gICAgICAgIGJyYW5kID0gU3RyaW5nSGVscGVyLnJlcGxhY2VBbGwoYnJhbmQsIFwiJlwiLCBcIlwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmdldEFzc2V0c1VybCgpICsgJy93YXRjaGVzL3dhdGNoLWNhbGliZXJzLycgKyBicmFuZCArIFwiLmpzb25cIilcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudG9Qcm9taXNlKCkudGhlbihcbiAgICAgICAgICAgIGNhbGliZXJzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljcy5ldmVudCgnQVBJJywgJ0NBTElCRVJTJywgJ0dFVCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxpYmVycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJldmlvdXNseSBjb21wdXRlZCBvZmZzZXRcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRPZmZzZXRUaW1lKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBUd0FQSVNlcnZpY2UudGltZS5vZmZzZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgYXRvbWljIGNsb2NrIHRpbWUgYWRqdXN0ZWQgZm9yIG5ldHdvcmsgbGF0ZW5jeVxuICAgICAqIEBwYXJhbSAge251bWJlciA9IDB9IHByZWNpc29uIEhvdyBtYW55IGNhbGxzIHdlIHdhbnQgdG8gYXZlYWdlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxEYXRlPn0gXG4gICAgICovXG4gICAgYWNjdXJhdGVUaW1lKHByZWNpc29uOiBudW1iZXIgPSAxMCk6IFByb21pc2U8RGF0ZT4ge1xuXG4gICAgICAgIHRoaXMuYW5hbHl0aWNzLmV2ZW50KCdBUEknLCAnVElNRScsICdHRVQnKTtcblxuICAgICAgICAvL0lmIHdlIGFyZW4ndCBhbHJlYWR5IHN5bmMnZWRcbiAgICAgICAgLy9vciBzeW5jIGlzIG9sZGVyIHRoYW4gMiBtaW51dGVzXG4gICAgICAgIGlmIChUd0FQSVNlcnZpY2UudGltZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBUd0FQSVNlcnZpY2Uubm93KCkgLSBUd0FQSVNlcnZpY2UudGltZS5zeW5jQW5jaG9yID4gMiAqIDYwICogMTAwMCkge1xuICAgICAgICAgICAgLy9TdG9yZXMgZWFjaCBQcm9taXNlIGluIGFycmF5XG4gICAgICAgICAgICBsZXQgcHJvbWlzZXM6IFByb21pc2U8bnVtYmVyPltdID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByZWNpc29uOyArK2kpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuZmV0Y2hPZmZzZXRUaW1lKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFByb21pc2UuYWxsKCkgaXMgdGhlIFByb21pc2UgZXF1aXZhbGVudCBvZiB0aHJlYWQuam9pbigpLlxuICAgICAgICAgICAgICogSXQnbGwgd2FpdCBmb3IgYWxsIHByb21pc2VzIHRvIGJlIHJlY2VpdmVkLiBcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBSZXR1cm5zIGEgZGF0ZSBhZGp1c3RlZCB3LyB0aGUgbWVkaWFuIG9mZnNldCBiZXR3ZWVuIFxuICAgICAgICAgICAgICogYXRvbWljIGNsb2NrIGFuZCBqcyB0aW1lLiBcbiAgICAgICAgICAgICAqIFRoZSBvZmZzZXQgcmVjZWl2ZWQgaW4gZWFjaCBwcm9taXNlIGFsc28gYWNjb3VudHMgZm9yXG4gICAgICAgICAgICAgKiB0aGUgbmV0d29yayByb3VuZHRyaXAgdGltZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKChyZXN1bHRzOiBudW1iZXJbXSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcHV0ZUF2ZXJhZ2VPZmZzZXQocmVzdWx0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vT25seSBjb21wdXRlIHRoZSBkaWZmZXJlbmNlIGZyb20gbGFzdCB0aW1lO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBUd0FQSVNlcnZpY2UudGltZS5zeW5jRGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgIFR3QVBJU2VydmljZS50aW1lLnN5bmNEYXRlLmdldFRpbWUoKSArXG4gICAgICAgICAgICAgICAgVHdBUElTZXJ2aWNlLm5vdygpIC0gVHdBUElTZXJ2aWNlLnRpbWUuc3luY0FuY2hvclxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgVHdBUElTZXJ2aWNlLnRpbWUuc3luY0FuY2hvciA9IFR3QVBJU2VydmljZS5ub3coKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPERhdGU+KFxuICAgICAgICAgICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShUd0FQSVNlcnZpY2UudGltZS5zeW5jRGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbXB1dGUgYXZlcmFnZSBvZmZzZXRzIGFuZCBjcmVhdGUgVHdBUElTZXJ2aWNlLnRpbWVcbiAgICAgKiBAcGFyYW0gcmVzdWx0cyBcbiAgICAgKi9cbiAgICBwcml2YXRlIGNvbXB1dGVBdmVyYWdlT2Zmc2V0KHJlc3VsdHM6IG51bWJlcltdKTogRGF0ZSB7XG5cbiAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuc29ydChmdW5jdGlvbiAoYTogbnVtYmVyLCBiOiBudW1iZXIpIHsgcmV0dXJuIGEgLSBiOyB9KTtcblxuICAgICAgICBsZXQgbG93TWlkZGxlID0gTWF0aC5mbG9vcigocmVzdWx0cy5sZW5ndGggLSAxKSAvIDIpO1xuICAgICAgICBsZXQgaGlnaE1pZGRsZSA9IE1hdGguY2VpbCgocmVzdWx0cy5sZW5ndGggLSAxKSAvIDIpO1xuICAgICAgICBsZXQgbWVkaWFuID0gKHJlc3VsdHNbbG93TWlkZGxlXSArIHJlc3VsdHNbaGlnaE1pZGRsZV0pIC8gMjtcblxuICAgICAgICBUd0FQSVNlcnZpY2UudGltZSA9IHtcbiAgICAgICAgICAgIHN5bmNEYXRlOiBuZXcgRGF0ZShEYXRlLm5vdygpIC0gbWVkaWFuKSxcbiAgICAgICAgICAgIHN5bmNBbmNob3I6IFR3QVBJU2VydmljZS5ub3coKSxcbiAgICAgICAgICAgIG9mZnNldDogbWVkaWFuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIFR3QVBJU2VydmljZS50aW1lLnN5bmNEYXRlO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBGZXRjaCBvZmZzZXQgYmV0d2VlbiBhdG9taWMgY2xvY2sgYW5kIGpzIHRpbWVcbiAgICAgKi9cbiAgICBwcml2YXRlIGZldGNoT2Zmc2V0VGltZSgpOiBQcm9taXNlPG51bWJlcj4ge1xuXG4gICAgICAgIGxldCBiZWZvcmVUaW1lOiBudW1iZXIgPSBUd0FQSVNlcnZpY2Uubm93KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlnLmdldEFQSVVybCgpICsgXCJ0aW1lXCIsIFR3QVBJU2VydmljZS5vcHRpb25zR2V0KVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGltZURpZmYgPSAoVHdBUElTZXJ2aWNlLm5vdygpIC0gYmVmb3JlVGltZSkgLyAyO1xuICAgICAgICAgICAgICAgIGxldCBzZXJ2ZXJUaW1lID0gcmVzcG9uc2UuanNvbigpLnRpbWUgLSB0aW1lRGlmZjtcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIHNlcnZlclRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBhIG1lYXN1cmUgYW5kIHRoZSB3YXRjaCBpdCBiZWxvbmdzIHRvXG4gICAgICogQHBhcmFtICB7V2F0Y2h9ICAgICAgICAgIHdhdGNoICBcbiAgICAgKiBAcGFyYW0gIHtNZWFzdXJlfSAgICAgICAgbWVhc3VyZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8V2F0Y2g+fSAgICAgICAgXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVNZWFzdXJlKHdhdGNoOiBXYXRjaCwgbWVhc3VyZTogTWVhc3VyZSk6IFByb21pc2U8V2F0Y2g+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5nZXRBUElVcmwoKSArIFwibWVhc3VyZXNcIixcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBtZWFzdXJlSWQ6IG1lYXN1cmUuaWQsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlVGltZTogbWVhc3VyZS5hY2N1cmFjeVJlZmVyZW5jZVRpbWUsXG4gICAgICAgICAgICAgICAgdXNlclRpbWU6IG1lYXN1cmUuYWNjdXJhY3lVc2VyVGltZVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBUd0FQSVNlcnZpY2Uub3B0aW9uc1xuICAgICAgICApLnRvUHJvbWlzZSgpLnRoZW4oXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXRpY3MuZXZlbnQoJ0FQSScsICdNRUFTVVJFJywgJ1NFQ09ORCcpO1xuICAgICAgICAgICAgICAgIGxldCBqc29uID0gcmVzcG9uc2UuanNvbigpLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBtZWFzdXJlLmFkZEFjY3VyYWN5KGpzb24uYWNjdXJhY3ksIGpzb24uYWNjdXJhY3lBZ2UsIGpzb24ucGVyY2VudGlsZSk7XG4gICAgICAgICAgICAgICAgd2F0Y2gudXBzZXJ0TWVhc3VyZShtZWFzdXJlKTtcbiAgICAgICAgICAgICAgICB3YXRjaC5uZXh0ID0gV2F0Y2hBY3Rpb24uTWVhc3VyZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2F0Y2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBhIG1lYXN1cmUgYW5kIHRoZSB3YXRjaCBpdCBiZWxvbmdzIHRvXG4gICAgICogQHBhcmFtICB7V2F0Y2h9ICAgICAgICAgIHdhdGNoICBcbiAgICAgKiBAcGFyYW0gIHtNZWFzdXJlfSAgICAgICAgbWVhc3VyZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8V2F0Y2g+fSAgICAgICAgXG4gICAgICovXG4gICAgcHJpdmF0ZSBpbnNlcnRNZWFzdXJlKHdhdGNoOiBXYXRjaCwgbWVhc3VyZTogTWVhc3VyZSk6IFByb21pc2U8V2F0Y2g+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgICAgICAgdGhpcy5jb25maWcuZ2V0QVBJVXJsKCkgKyBcIm1lYXN1cmVzXCIsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2F0Y2hJZDogd2F0Y2guaWQsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlVGltZTogbWVhc3VyZS5tZWFzdXJlUmVmZXJlbmNlVGltZSxcbiAgICAgICAgICAgICAgICB1c2VyVGltZTogbWVhc3VyZS5tZWFzdXJlVXNlclRpbWVcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgVHdBUElTZXJ2aWNlLm9wdGlvbnNcbiAgICAgICAgKS50b1Byb21pc2UoKS50aGVuKFxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzLmV2ZW50KCdBUEknLCAnTUVBU1VSRScsICdGSVJTVCcpO1xuICAgICAgICAgICAgICAgIG1lYXN1cmUuaWQgPSByZXNwb25zZS5qc29uKCkubWVhc3VyZUlkO1xuICAgICAgICAgICAgICAgIHdhdGNoLm1lYXN1cmVzLnB1c2gobWVhc3VyZSk7XG4gICAgICAgICAgICAgICAgd2F0Y2guaGlzdG9yeVNpemUrKztcbiAgICAgICAgICAgICAgICByZXR1cm4gd2F0Y2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBhIHdhdGNoXG4gICAgICogQHBhcmFtICB7V2F0Y2h9ICAgICAgICAgIHdhdGNoXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxXYXRjaD59ICAgICAgXG4gICAgICovXG4gICAgcHJpdmF0ZSBpbnNlcnRXYXRjaCh3YXRjaDogV2F0Y2gpOiBQcm9taXNlPFdhdGNoPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmdldEFQSVVybCgpICsgXCJ3YXRjaGVzXCIsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgYnJhbmQ6IHdhdGNoLmJyYW5kLFxuICAgICAgICAgICAgICAgIG5hbWU6IHdhdGNoLm5hbWUsXG4gICAgICAgICAgICAgICAgeWVhck9mQnV5OiB3YXRjaC55ZWFyT2ZCdXksXG4gICAgICAgICAgICAgICAgc2VyaWFsOiB3YXRjaC5zZXJpYWwsXG4gICAgICAgICAgICAgICAgY2FsaWJlcjogd2F0Y2guY2FsaWJlclxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBUd0FQSVNlcnZpY2Uub3B0aW9uc1xuICAgICAgICApXG4gICAgICAgICAgICAubWFwKChyZXMpID0+IHtcblxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2F0Y2goXG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCkuaWQsIHdhdGNoLmJyYW5kLCAwLCBbXSwgd2F0Y2gubmFtZSwgd2F0Y2gueWVhck9mQnV5LCB3YXRjaC5zZXJpYWwsIHdhdGNoLmNhbGliZXIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50b1Byb21pc2UoKS50aGVuKFxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGEgd2F0Y2hcbiAgICAgKiBAcGFyYW0gIHtXYXRjaH0gICAgICAgICAgd2F0Y2hcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFdhdGNoPn0gICAgICBcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZVdhdGNoKHdhdGNoOiBXYXRjaCk6IFByb21pc2U8V2F0Y2g+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5nZXRBUElVcmwoKSArIFwid2F0Y2hlc1wiLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGlkOiB3YXRjaC5pZCxcbiAgICAgICAgICAgICAgICBicmFuZDogd2F0Y2guYnJhbmQsXG4gICAgICAgICAgICAgICAgbmFtZTogd2F0Y2gubmFtZSxcbiAgICAgICAgICAgICAgICB5ZWFyT2ZCdXk6IHdhdGNoLnllYXJPZkJ1eSxcbiAgICAgICAgICAgICAgICBzZXJpYWw6IHdhdGNoLnNlcmlhbCxcbiAgICAgICAgICAgICAgICBjYWxpYmVyOiB3YXRjaC5jYWxpYmVyXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFR3QVBJU2VydmljZS5vcHRpb25zXG4gICAgICAgICkudG9Qcm9taXNlKCkudGhlbihcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljcy5ldmVudCgnQVBJJywgJ1dBVENIJywgJ1VQREFURScpO1xuICAgICAgICAgICAgICAgIHJldHVybiB3YXRjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9nIGVycm9yIHRvIGNvbnNvbGVcbiAgICAgKiBAcGFyYW0ge2FueX0gZXJyb3IgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZXMvdHdhcGkuc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPcGFxdWVUb2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmVcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3RvQXJyYXlcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3Rha2VcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVN0b3JlIH0gZnJvbSBcIi4vdHJhbnNsYXRlLnN0b3JlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVMb2FkZXIgfSBmcm9tIFwiLi90cmFuc2xhdGUubG9hZGVyXCI7XG5pbXBvcnQgeyBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIH0gZnJvbSBcIi4vbWlzc2luZy10cmFuc2xhdGlvbi1oYW5kbGVyXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVQYXJzZXIgfSBmcm9tIFwiLi90cmFuc2xhdGUucGFyc2VyXCI7XG5pbXBvcnQgeyBpc0RlZmluZWQgfSBmcm9tIFwiLi91dGlsXCI7XG5leHBvcnQgdmFyIFVTRV9TVE9SRSA9IG5ldyBPcGFxdWVUb2tlbignVVNFX1NUT1JFJyk7XG52YXIgVHJhbnNsYXRlU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmUgYW4gaW5zdGFuY2Ugb2YgdGhlIHN0b3JlICh0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHVuaXF1ZSlcbiAgICAgKiBAcGFyYW0gY3VycmVudExvYWRlciBBbiBpbnN0YW5jZSBvZiB0aGUgbG9hZGVyIGN1cnJlbnRseSB1c2VkXG4gICAgICogQHBhcmFtIHBhcnNlciBBbiBpbnN0YW5jZSBvZiB0aGUgcGFyc2VyIGN1cnJlbnRseSB1c2VkXG4gICAgICogQHBhcmFtIG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgQSBoYW5kbGVyIGZvciBtaXNzaW5nIHRyYW5zbGF0aW9ucy5cbiAgICAgKiBAcGFyYW0gaXNvbGF0ZSB3aGV0aGVyIHRoaXMgc2VydmljZSBzaG91bGQgdXNlIHRoZSBzdG9yZSBvciBub3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVTZXJ2aWNlKHN0b3JlLCBjdXJyZW50TG9hZGVyLCBwYXJzZXIsIG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIGlzb2xhdGUpIHtcbiAgICAgICAgaWYgKGlzb2xhdGUgPT09IHZvaWQgMCkgeyBpc29sYXRlID0gZmFsc2U7IH1cbiAgICAgICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgICAgICB0aGlzLmN1cnJlbnRMb2FkZXIgPSBjdXJyZW50TG9hZGVyO1xuICAgICAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgICAgICAgdGhpcy5taXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyID0gbWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcjtcbiAgICAgICAgdGhpcy5pc29sYXRlID0gaXNvbGF0ZTtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX29uVHJhbnNsYXRpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuX29uTGFuZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5fb25EZWZhdWx0TGFuZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5fbGFuZ3MgPSBbXTtcbiAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25zID0ge307XG4gICAgICAgIHRoaXMuX3RyYW5zbGF0aW9uUmVxdWVzdHMgPSB7fTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLCBcIm9uVHJhbnNsYXRpb25DaGFuZ2VcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byB0cmFuc2xhdGlvbiBjaGFuZ2UgZXZlbnRzXG4gICAgICAgICAqIG9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxUcmFuc2xhdGlvbkNoYW5nZUV2ZW50Pn1cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX29uVHJhbnNsYXRpb25DaGFuZ2UgOiB0aGlzLnN0b3JlLm9uVHJhbnNsYXRpb25DaGFuZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZSwgXCJvbkxhbmdDaGFuZ2VcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byBsYW5nIGNoYW5nZSBldmVudHNcbiAgICAgICAgICogb25MYW5nQ2hhbmdlLnN1YnNjcmliZSgocGFyYW1zOiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxMYW5nQ2hhbmdlRXZlbnQ+fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fb25MYW5nQ2hhbmdlIDogdGhpcy5zdG9yZS5vbkxhbmdDaGFuZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZSwgXCJvbkRlZmF1bHRMYW5nQ2hhbmdlXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gZGVmYXVsdCBsYW5nIGNoYW5nZSBldmVudHNcbiAgICAgICAgICogb25EZWZhdWx0TGFuZ0NoYW5nZS5zdWJzY3JpYmUoKHBhcmFtczogRGVmYXVsdExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQ+fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fb25EZWZhdWx0TGFuZ0NoYW5nZSA6IHRoaXMuc3RvcmUub25EZWZhdWx0TGFuZ0NoYW5nZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLCBcImRlZmF1bHRMYW5nXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IGxhbmcgdG8gZmFsbGJhY2sgd2hlbiB0cmFuc2xhdGlvbnMgYXJlIG1pc3Npbmcgb24gdGhlIGN1cnJlbnQgbGFuZ1xuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fZGVmYXVsdExhbmcgOiB0aGlzLnN0b3JlLmRlZmF1bHRMYW5nO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkZWZhdWx0TGFuZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNvbGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlZmF1bHRMYW5nID0gZGVmYXVsdExhbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmRlZmF1bHRMYW5nID0gZGVmYXVsdExhbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZSwgXCJjdXJyZW50TGFuZ1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbGFuZyBjdXJyZW50bHkgdXNlZFxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fY3VycmVudExhbmcgOiB0aGlzLnN0b3JlLmN1cnJlbnRMYW5nO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChjdXJyZW50TGFuZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNvbGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRMYW5nID0gY3VycmVudExhbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmN1cnJlbnRMYW5nID0gY3VycmVudExhbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZSwgXCJsYW5nc1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhbiBhcnJheSBvZiBsYW5nc1xuICAgICAgICAgKiBAdHlwZSB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzb2xhdGUgPyB0aGlzLl9sYW5ncyA6IHRoaXMuc3RvcmUubGFuZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGxhbmdzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc29sYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFuZ3MgPSBsYW5ncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUubGFuZ3MgPSBsYW5ncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLCBcInRyYW5zbGF0aW9uc1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhIGxpc3Qgb2YgdHJhbnNsYXRpb25zIHBlciBsYW5nXG4gICAgICAgICAqIEB0eXBlIHt7fX1cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX3RyYW5zbGF0aW9ucyA6IHRoaXMuc3RvcmUudHJhbnNsYXRpb25zO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzb2xhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50TGFuZyA9IHRyYW5zbGF0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUudHJhbnNsYXRpb25zID0gdHJhbnNsYXRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBkZWZhdWx0IGxhbmd1YWdlIHRvIHVzZSBhcyBhIGZhbGxiYWNrXG4gICAgICogQHBhcmFtIGxhbmdcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5zZXREZWZhdWx0TGFuZyA9IGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChsYW5nID09PSB0aGlzLmRlZmF1bHRMYW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBlbmRpbmcgPSB0aGlzLnJldHJpZXZlVHJhbnNsYXRpb25zKGxhbmcpO1xuICAgICAgICBpZiAodHlwZW9mIHBlbmRpbmcgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIC8vIG9uIGluaXQgc2V0IHRoZSBkZWZhdWx0TGFuZyBpbW1lZGlhdGVseVxuICAgICAgICAgICAgaWYgKCF0aGlzLmRlZmF1bHRMYW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0TGFuZyA9IGxhbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwZW5kaW5nLnRha2UoMSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VEZWZhdWx0TGFuZyhsYW5nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZWZhdWx0TGFuZyhsYW5nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZGVmYXVsdCBsYW5ndWFnZSB1c2VkXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuZ2V0RGVmYXVsdExhbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRMYW5nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgbGFuZyBjdXJyZW50bHkgdXNlZFxuICAgICAqIEBwYXJhbSBsYW5nXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8Kj59XG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHBlbmRpbmcgPSB0aGlzLnJldHJpZXZlVHJhbnNsYXRpb25zKGxhbmcpO1xuICAgICAgICBpZiAodHlwZW9mIHBlbmRpbmcgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIC8vIG9uIGluaXQgc2V0IHRoZSBjdXJyZW50TGFuZyBpbW1lZGlhdGVseVxuICAgICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRMYW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGFuZyA9IGxhbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwZW5kaW5nLnRha2UoMSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VMYW5nKGxhbmcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcGVuZGluZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTGFuZyhsYW5nKTtcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKHRoaXMudHJhbnNsYXRpb25zW2xhbmddKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBnaXZlbiB0cmFuc2xhdGlvbnNcbiAgICAgKiBAcGFyYW0gbGFuZ1xuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPCo+fVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLnJldHJpZXZlVHJhbnNsYXRpb25zID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgdmFyIHBlbmRpbmc7XG4gICAgICAgIC8vIGlmIHRoaXMgbGFuZ3VhZ2UgaXMgdW5hdmFpbGFibGUsIGFzayBmb3IgaXRcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25SZXF1ZXN0c1tsYW5nXSA9IHRoaXMuX3RyYW5zbGF0aW9uUmVxdWVzdHNbbGFuZ10gfHwgdGhpcy5nZXRUcmFuc2xhdGlvbihsYW5nKTtcbiAgICAgICAgICAgIHBlbmRpbmcgPSB0aGlzLl90cmFuc2xhdGlvblJlcXVlc3RzW2xhbmddO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwZW5kaW5nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0cyBhbiBvYmplY3Qgb2YgdHJhbnNsYXRpb25zIGZvciBhIGdpdmVuIGxhbmd1YWdlIHdpdGggdGhlIGN1cnJlbnQgbG9hZGVyXG4gICAgICogQHBhcmFtIGxhbmdcbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTwqPn1cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5nZXRUcmFuc2xhdGlvbiA9IGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMubG9hZGluZ1RyYW5zbGF0aW9ucyA9IHRoaXMuY3VycmVudExvYWRlci5nZXRUcmFuc2xhdGlvbihsYW5nKS5zaGFyZSgpO1xuICAgICAgICB0aGlzLmxvYWRpbmdUcmFuc2xhdGlvbnMudGFrZSgxKVxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBfdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gPSByZXM7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVMYW5ncygpO1xuICAgICAgICAgICAgX3RoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBfdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkaW5nVHJhbnNsYXRpb25zO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWFudWFsbHkgc2V0cyBhbiBvYmplY3Qgb2YgdHJhbnNsYXRpb25zIGZvciBhIGdpdmVuIGxhbmd1YWdlXG4gICAgICogQHBhcmFtIGxhbmdcbiAgICAgKiBAcGFyYW0gdHJhbnNsYXRpb25zXG4gICAgICogQHBhcmFtIHNob3VsZE1lcmdlXG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuc2V0VHJhbnNsYXRpb24gPSBmdW5jdGlvbiAobGFuZywgdHJhbnNsYXRpb25zLCBzaG91bGRNZXJnZSkge1xuICAgICAgICBpZiAoc2hvdWxkTWVyZ2UgPT09IHZvaWQgMCkgeyBzaG91bGRNZXJnZSA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChzaG91bGRNZXJnZSAmJiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSwgdHJhbnNsYXRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25zW2xhbmddID0gdHJhbnNsYXRpb25zO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTGFuZ3MoKTtcbiAgICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlLmVtaXQoeyBsYW5nOiBsYW5nLCB0cmFuc2xhdGlvbnM6IHRoaXMudHJhbnNsYXRpb25zW2xhbmddIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBjdXJyZW50bHkgYXZhaWxhYmxlIGxhbmdzXG4gICAgICogQHJldHVybnMge2FueX1cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5nZXRMYW5ncyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3M7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbGFuZ3NcbiAgICAgKiBBZGQgYXZhaWxhYmxlIGxhbmdzXG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuYWRkTGFuZ3MgPSBmdW5jdGlvbiAobGFuZ3MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgbGFuZ3MuZm9yRWFjaChmdW5jdGlvbiAobGFuZykge1xuICAgICAgICAgICAgaWYgKF90aGlzLmxhbmdzLmluZGV4T2YobGFuZykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubGFuZ3MucHVzaChsYW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGxpc3Qgb2YgYXZhaWxhYmxlIGxhbmdzXG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUudXBkYXRlTGFuZ3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRkTGFuZ3MoT2JqZWN0LmtleXModGhpcy50cmFuc2xhdGlvbnMpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBhcnNlZCByZXN1bHQgb2YgdGhlIHRyYW5zbGF0aW9uc1xuICAgICAqIEBwYXJhbSB0cmFuc2xhdGlvbnNcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHBhcmFtIGludGVycG9sYXRlUGFyYW1zXG4gICAgICogQHJldHVybnMge2FueX1cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5nZXRQYXJzZWRSZXN1bHQgPSBmdW5jdGlvbiAodHJhbnNsYXRpb25zLCBrZXksIGludGVycG9sYXRlUGFyYW1zKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIGlmIChrZXkgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHt9LCBvYnNlcnZhYmxlcyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBrZXlfMSA9IGtleTsgX2kgPCBrZXlfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgayA9IGtleV8xW19pXTtcbiAgICAgICAgICAgICAgICByZXN1bHRba10gPSB0aGlzLmdldFBhcnNlZFJlc3VsdCh0cmFuc2xhdGlvbnMsIGssIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdFtrXS5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZhYmxlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9ic2VydmFibGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1lcmdlZE9icyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfYSA9IDAsIGtleV8yID0ga2V5OyBfYSA8IGtleV8yLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgayA9IGtleV8yW19hXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9icyA9IHR5cGVvZiByZXN1bHRba10uc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIgPyByZXN1bHRba10gOiBPYnNlcnZhYmxlLm9mKHJlc3VsdFtrXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVyZ2VkT2JzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXJnZWRPYnMgPSBvYnM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXJnZWRPYnMgPSBtZXJnZWRPYnMubWVyZ2Uob2JzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWVyZ2VkT2JzLnRvQXJyYXkoKS5tYXAoZnVuY3Rpb24gKGFycikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgICAgICAgICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtrZXlbaW5kZXhdXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zbGF0aW9ucykge1xuICAgICAgICAgICAgcmVzID0gdGhpcy5wYXJzZXIuaW50ZXJwb2xhdGUodGhpcy5wYXJzZXIuZ2V0VmFsdWUodHJhbnNsYXRpb25zLCBrZXkpLCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZXMgPT09IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5kZWZhdWx0TGFuZyAmJiB0aGlzLmRlZmF1bHRMYW5nICE9PSB0aGlzLmN1cnJlbnRMYW5nKSB7XG4gICAgICAgICAgICByZXMgPSB0aGlzLnBhcnNlci5pbnRlcnBvbGF0ZSh0aGlzLnBhcnNlci5nZXRWYWx1ZSh0aGlzLnRyYW5zbGF0aW9uc1t0aGlzLmRlZmF1bHRMYW5nXSwga2V5KSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0geyBrZXk6IGtleSwgdHJhbnNsYXRlU2VydmljZTogdGhpcyB9O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnRlcnBvbGF0ZVBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuaW50ZXJwb2xhdGVQYXJhbXMgPSBpbnRlcnBvbGF0ZVBhcmFtcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcyA9IHRoaXMubWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlci5oYW5kbGUocGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZW9mIHJlcyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJlcyA6IGtleTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHRyYW5zbGF0ZWQgdmFsdWUgb2YgYSBrZXkgKG9yIGFuIGFycmF5IG9mIGtleXMpXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEBwYXJhbSBpbnRlcnBvbGF0ZVBhcmFtc1xuICAgICAqIEByZXR1cm5zIHthbnl9IHRoZSB0cmFuc2xhdGVkIGtleSwgb3IgYW4gb2JqZWN0IG9mIHRyYW5zbGF0ZWQga2V5c1xuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXksIGludGVycG9sYXRlUGFyYW1zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghaXNEZWZpbmVkKGtleSkgfHwgIWtleS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcmFtZXRlciBcXFwia2V5XFxcIiByZXF1aXJlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBhcmUgbG9hZGluZyBhIG5ldyB0cmFuc2xhdGlvbiB0byB1c2VcbiAgICAgICAgaWYgKHRoaXMucGVuZGluZykge1xuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHZhciBvbkNvbXBsZXRlID0gZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgb25FcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIF90aGlzLmxvYWRpbmdUcmFuc2xhdGlvbnMuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gX3RoaXMuZ2V0UGFyc2VkUmVzdWx0KHJlcywga2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuc3Vic2NyaWJlKG9uQ29tcGxldGUsIG9uRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZShyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgb25FcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciByZXMgPSB0aGlzLmdldFBhcnNlZFJlc3VsdCh0aGlzLnRyYW5zbGF0aW9uc1t0aGlzLmN1cnJlbnRMYW5nXSwga2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcy5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdHJhbnNsYXRpb24gaW5zdGFudGx5IGZyb20gdGhlIGludGVybmFsIHN0YXRlIG9mIGxvYWRlZCB0cmFuc2xhdGlvbi5cbiAgICAgKiBBbGwgcnVsZXMgcmVnYXJkaW5nIHRoZSBjdXJyZW50IGxhbmd1YWdlLCB0aGUgcHJlZmVycmVkIGxhbmd1YWdlIG9mIGV2ZW4gZmFsbGJhY2sgbGFuZ3VhZ2VzIHdpbGwgYmUgdXNlZCBleGNlcHQgYW55IHByb21pc2UgaGFuZGxpbmcuXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEBwYXJhbSBpbnRlcnBvbGF0ZVBhcmFtc1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuaW5zdGFudCA9IGZ1bmN0aW9uIChrZXksIGludGVycG9sYXRlUGFyYW1zKSB7XG4gICAgICAgIGlmICghaXNEZWZpbmVkKGtleSkgfHwgIWtleS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcmFtZXRlciBcXFwia2V5XFxcIiByZXF1aXJlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzID0gdGhpcy5nZXRQYXJzZWRSZXN1bHQodGhpcy50cmFuc2xhdGlvbnNbdGhpcy5jdXJyZW50TGFuZ10sIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICBpZiAodHlwZW9mIHJlcy5zdWJzY3JpYmUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGlmIChrZXkgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHZhciBvYmpfMSA9IHt9O1xuICAgICAgICAgICAgICAgIGtleS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqXzFba2V5W2luZGV4XV0gPSBrZXlbaW5kZXhdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmpfMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0cmFuc2xhdGVkIHZhbHVlIG9mIGEga2V5XG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBwYXJhbSBsYW5nXG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGxhbmcpIHtcbiAgICAgICAgaWYgKGxhbmcgPT09IHZvaWQgMCkgeyBsYW5nID0gdGhpcy5jdXJyZW50TGFuZzsgfVxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXVtrZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlTGFuZ3MoKTtcbiAgICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlLmVtaXQoeyBsYW5nOiBsYW5nLCB0cmFuc2xhdGlvbnM6IHRoaXMudHJhbnNsYXRpb25zW2xhbmddIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgY3VycmVudCBsYW5nXG4gICAgICogQHBhcmFtIGxhbmdcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5jaGFuZ2VMYW5nID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TGFuZyA9IGxhbmc7XG4gICAgICAgIHRoaXMub25MYW5nQ2hhbmdlLmVtaXQoeyBsYW5nOiBsYW5nLCB0cmFuc2xhdGlvbnM6IHRoaXMudHJhbnNsYXRpb25zW2xhbmddIH0pO1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBkZWZhdWx0IGxhbmcsIHVzZSB0aGUgb25lIHRoYXQgd2UganVzdCBzZXRcbiAgICAgICAgaWYgKCF0aGlzLmRlZmF1bHRMYW5nKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZURlZmF1bHRMYW5nKGxhbmcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSBkZWZhdWx0IGxhbmdcbiAgICAgKiBAcGFyYW0gbGFuZ1xuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLmNoYW5nZURlZmF1bHRMYW5nID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0TGFuZyA9IGxhbmc7XG4gICAgICAgIHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZS5lbWl0KHsgbGFuZzogbGFuZywgdHJhbnNsYXRpb25zOiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFsbG93cyB0byByZWxvYWQgdGhlIGxhbmcgZmlsZSBmcm9tIHRoZSBmaWxlXG4gICAgICogQHBhcmFtIGxhbmdcbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLnJlbG9hZExhbmcgPSBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICB0aGlzLnJlc2V0TGFuZyhsYW5nKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHJhbnNsYXRpb24obGFuZyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGlubmVyIHRyYW5zbGF0aW9uXG4gICAgICogQHBhcmFtIGxhbmdcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5yZXNldExhbmcgPSBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICB0aGlzLl90cmFuc2xhdGlvblJlcXVlc3RzW2xhbmddID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhbmd1YWdlIGNvZGUgbmFtZSBmcm9tIHRoZSBicm93c2VyLCBlLmcuIFwiZGVcIlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuZ2V0QnJvd3NlckxhbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93Lm5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJyb3dzZXJMYW5nID0gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXMgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlc1swXSA6IG51bGw7XG4gICAgICAgIGJyb3dzZXJMYW5nID0gYnJvd3NlckxhbmcgfHwgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJMYW5ndWFnZTtcbiAgICAgICAgaWYgKGJyb3dzZXJMYW5nLmluZGV4T2YoJy0nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGJyb3dzZXJMYW5nID0gYnJvd3Nlckxhbmcuc3BsaXQoJy0nKVswXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnJvd3NlckxhbmcuaW5kZXhPZignXycpICE9PSAtMSkge1xuICAgICAgICAgICAgYnJvd3NlckxhbmcgPSBicm93c2VyTGFuZy5zcGxpdCgnXycpWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBicm93c2VyTGFuZztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1bHR1cmUgbGFuZ3VhZ2UgY29kZSBuYW1lIGZyb20gdGhlIGJyb3dzZXIsIGUuZy4gXCJkZS1ERVwiXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5nZXRCcm93c2VyQ3VsdHVyZUxhbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93Lm5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJyb3dzZXJDdWx0dXJlTGFuZyA9IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXNbMF0gOiBudWxsO1xuICAgICAgICBicm93c2VyQ3VsdHVyZUxhbmcgPSBicm93c2VyQ3VsdHVyZUxhbmcgfHwgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJMYW5ndWFnZTtcbiAgICAgICAgcmV0dXJuIGJyb3dzZXJDdWx0dXJlTGFuZztcbiAgICB9O1xuICAgIHJldHVybiBUcmFuc2xhdGVTZXJ2aWNlO1xufSgpKTtcbmV4cG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfTtcblRyYW5zbGF0ZVNlcnZpY2UuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cblRyYW5zbGF0ZVNlcnZpY2UuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBUcmFuc2xhdGVTdG9yZSwgfSxcbiAgICB7IHR5cGU6IFRyYW5zbGF0ZUxvYWRlciwgfSxcbiAgICB7IHR5cGU6IFRyYW5zbGF0ZVBhcnNlciwgfSxcbiAgICB7IHR5cGU6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIH0sXG4gICAgeyB0eXBlOiB1bmRlZmluZWQsIGRlY29yYXRvcnM6IFt7IHR5cGU6IEluamVjdCwgYXJnczogW1VTRV9TVE9SRSxdIH0sXSB9LFxuXTsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy90cmFuc2xhdGUuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBNZWFzdXJlLCBNZWFzdXJlU3RhdHVzIH0gZnJvbSAnLi9tZWFzdXJlLm1vZGVsJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVG9vbHdhdGNoIHdhdGNoXG4gKi9cbmV4cG9ydCBjbGFzcyBXYXRjaCB7XG4gICAgaWQ6bnVtYmVyO1xuICAgIGJyYW5kOnN0cmluZztcbiAgICBoaXN0b3J5U2l6ZTpudW1iZXI7XG4gICAgbWVhc3VyZXM6TWVhc3VyZVtdO1xuICAgIG5hbWU6c3RyaW5nO1xuICAgIHllYXJPZkJ1eTpudW1iZXI7XG4gICAgc2VyaWFsOnN0cmluZztcbiAgICBjYWxpYmVyOnN0cmluZztcbiAgICBzdGF0dXM6IFdhdGNoU3RhdHVzO1xuICAgIG5leHQ6IFdhdGNoQWN0aW9uO1xuICAgIHdhaXRpbmc6bnVtYmVyO1xuICAgIGluaXRpYWxzOnN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENsYXNzaWNhbCBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSBpZCBcbiAgICAgKiBAcGFyYW0gYnJhbmQgXG4gICAgICogQHBhcmFtIGhpc3RvcnlTaXplIFxuICAgICAqIEBwYXJhbSBtZWFzdXJlcyBcbiAgICAgKiBAcGFyYW0gbmFtZSBcbiAgICAgKiBAcGFyYW0geWVhck9mQnV5IFxuICAgICAqIEBwYXJhbSBzZXJpYWwgXG4gICAgICogQHBhcmFtIGNhbGliZXIgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGlkOiBudW1iZXIsIGJyYW5kOiBzdHJpbmcsIFxuICAgICAgICBoaXN0b3J5U2l6ZTogbnVtYmVyID0gMCxcbiAgICAgICAgbWVhc3VyZXM6IE1lYXN1cmVbXSA9IFtdLCBcbiAgICAgICAgbmFtZTogc3RyaW5nID0gXCJcIiwgXG4gICAgICAgIHllYXJPZkJ1eTogbnVtYmVyID0gbnVsbCxcbiAgICAgICAgc2VyaWFsOiBzdHJpbmcgPSBcIlwiLCBcbiAgICAgICAgY2FsaWJlcjogc3RyaW5nID0gXCJcIlxuICAgICkge1xuXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5icmFuZCA9IGJyYW5kO1xuICAgICAgICB0aGlzLmhpc3RvcnlTaXplID0gaGlzdG9yeVNpemU7XG5cbiAgICAgICAgLy9yZXNvcnQgaW4gY2FzZSBvZiBzZXJ2ZXIgY2FjaGVkIG9wdGltaXNhdGlvblxuICAgICAgICB0aGlzLm1lYXN1cmVzID0gbWVhc3VyZXMuc29ydChmdW5jdGlvbihhOk1lYXN1cmUsIGI6TWVhc3VyZSl7XG4gICAgICAgICAgICByZXR1cm4gYS5pZCAtIGIuaWQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuXG4gICAgICAgIC8vaWYgeWVhck9mQnV5IGlzIGZpbGxlZFxuICAgICAgICBpZih5ZWFyT2ZCdXkgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMueWVhck9mQnV5ID0geWVhck9mQnV5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy55ZWFyT2ZCdXkgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXJpYWwgPSBzZXJpYWw7XG4gICAgICAgIHRoaXMuY2FsaWJlciA9IGNhbGliZXI7XG5cbiAgICAgICAgLy9idWlsZCB0aGUgaW5pdGlhbHMgZm9yIHRoZSB3YXRjaCBcbiAgICAgICAgdGhpcy5pbml0aWFscyA9ICh0aGlzLmJyYW5kICE9IG51bGwgJiYgdGhpcy5icmFuZC5sZW5ndGggPiAwKSA/IHRoaXMuYnJhbmQuY2hhckF0KDApIDogXCJcIjtcbiAgICAgICAgdGhpcy5pbml0aWFscyArPSAodGhpcy5uYW1lLmxlbmd0aCA+IDApID8gdGhpcy5uYW1lLmNoYXJBdCgwKSA6IFwiXCI7XG5cbiAgICAgICAgLy9jb21wdXRlIG5leHQgYWN0aW9uICYgc3RhdHVzXG4gICAgICAgIGlmIChoaXN0b3J5U2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBXYXRjaFN0YXR1cy5OZXZlck1lYXN1cmVkO1xuICAgICAgICAgICAgdGhpcy5uZXh0ID0gV2F0Y2hBY3Rpb24uTWVhc3VyZTtcbiAgICAgICAgfWVsc2UgaWYoaGlzdG9yeVNpemUgPiB0aGlzLm1lYXN1cmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBXYXRjaFN0YXR1cy5IYXZlTW9yZU1lYXN1cmVzO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbXB1dGVOZXh0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIG5leHQgYWN0aW9uIGdpdmVuIHRoZSBtZWFzdXJlcyBzdGF0dXNcbiAgICAgKi9cbiAgICBjb21wdXRlTmV4dCgpIHtcbiAgICAgICAgbGV0IGxhc3RNZWFzdXJlID0gdGhpcy5jdXJyZW50TWVhc3VyZSgpO1xuICAgICAgICBpZiAobGFzdE1lYXN1cmUgIT09IG51bGwgXG4gICAgICAgICAgICAmJiBsYXN0TWVhc3VyZS5zdGF0dXMgJiBNZWFzdXJlU3RhdHVzLkJhc2VNZWFzdXJlKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChNYXRoLmFicygobGFzdE1lYXN1cmUubWVhc3VyZVVzZXJUaW1lIC0gRGF0ZS5ub3coKS8xMDAwKS8zNjAwKSA8IDEyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0ID0gV2F0Y2hBY3Rpb24uV2FpdGluZztcbiAgICAgICAgICAgICAgICB0aGlzLndhaXRpbmcgPSBNYXRoLnJvdW5kKDEyIC0gTWF0aC5hYnMoKGxhc3RNZWFzdXJlLm1lYXN1cmVVc2VyVGltZSAtIERhdGUubm93KCkvMTAwMCkvMzYwMCkpO1xuICAgICAgICAgICAgfWVsc2UgaWYoIShsYXN0TWVhc3VyZS5zdGF0dXMgJiBNZWFzdXJlU3RhdHVzLkFjY3VyYWN5TWVhc3VyZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQgPSBXYXRjaEFjdGlvbi5BY2N1cmFjeTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQgPSBXYXRjaEFjdGlvbi5NZWFzdXJlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dW5ycyBhIHN0cmluZyByZXByZXNyZW50YXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgdG9TdHJpbmcgPSAoKSA6IHN0cmluZyA9PiB7XG4gICAgICAgIHJldHVybiBgV2F0Y2ggKGlkOiAke3RoaXMuaWR9LFxuICAgICAgICAgICAgICAgIGJyYW5kOiAke3RoaXMuYnJhbmR9LFxuICAgICAgICAgICAgICAgIGhpc3RvcnlTaXplOiAke3RoaXMuaGlzdG9yeVNpemV9LFxuICAgICAgICAgICAgICAgIG1lYXN1cmVzOiAke3RoaXMubWVhc3VyZXN9LFxuICAgICAgICAgICAgICAgIG5hbWU6ICR7dGhpcy5uYW1lfSxcbiAgICAgICAgICAgICAgICB5ZWFyT2ZCdXk6ICR7dGhpcy55ZWFyT2ZCdXl9LFxuICAgICAgICAgICAgICAgIHNlcmlhbDogJHt0aGlzLnNlcmlhbH0sXG4gICAgICAgICAgICAgICAgY2FsaWJlcjogJHt0aGlzLmNhbGliZXJ9LFxuICAgICAgICAgICAgICAgIHN0YXR1czogJHt0aGlzLnN0YXR1c30sXG4gICAgICAgICAgICAgICAgbmV4dDogJHt0aGlzLm5leHR9LFxuICAgICAgICAgICAgICAgIHdhaXRpbmc6ICR7dGhpcy53YWl0aW5nfSlgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYXZlcmFnZSBwcmVjaXNpb24gb2YgdGhlIHJlY2VpdmVkIG1lYXN1cmVzXG4gICAgICogTnVtYmVyIG9mIG1lYXN1cmVzIHJlY2VpdmVkIGRlcGVuZHMgb24gcGxhbi5cbiAgICAgKiBAcGFyYW0gYW1vdW50IFxuICAgICAqL1xuICAgIGF2ZXJhZ2UoYW1vdW50Om51bWJlcikge1xuXG4gICAgICAgIGxldCBhY3R1YWxBbW91bnQ6bnVtYmVyID0gMDtcbiAgICAgICAgbGV0IGF2ZXJhZ2U6bnVtYmVyID0gMDtcbiAgICAgICAgbGV0IGk6bnVtYmVyID0gdGhpcy5tZWFzdXJlcy5sZW5ndGggLSAxO1xuXG4gICAgICAgIHdoaWxlKGk+PSAwICYmIGFjdHVhbEFtb3VudCA8PSBhbW91bnQpIHtcbiAgICAgICAgICAgIGlmKHRoaXMubWVhc3VyZXNbaV0uc3RhdHVzICYgTWVhc3VyZVN0YXR1cy5BY2N1cmFjeU1lYXN1cmUpIHtcbiAgICAgICAgICAgICAgICBhdmVyYWdlID0gYXZlcmFnZSArIE1hdGguYWJzKHRoaXMubWVhc3VyZXNbaV0uYWNjdXJhY3kpO1xuICAgICAgICAgICAgICAgIGFjdHVhbEFtb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGF2ZXJhZ2UvYWN0dWFsQW1vdW50KS50b0ZpeGVkKDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhc3QgY29tcGxldGUgbWVhc3VyZSBmb3Igd2F0Y2ggKGkuZS4gMi8yKVxuICAgICAqL1xuICAgIGxhc3RDb21wbGV0ZU1lYXN1cmUoKTpNZWFzdXJlIHtcbiAgICAgICAgbGV0IGk6bnVtYmVyID0gdGhpcy5tZWFzdXJlcy5sZW5ndGggLSAxO1xuXG4gICAgICAgIHdoaWxlKGkgPj0gMCkge1xuICAgICAgICAgICAgaWYodGhpcy5tZWFzdXJlc1tpXS5zdGF0dXMgJiBNZWFzdXJlU3RhdHVzLkFjY3VyYWN5TWVhc3VyZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lYXN1cmVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IG1lYXN1cmUgZm9yIGEgd2F0Y2guIENvdWxkIGJlIFxuICAgICAqIGVxdWFsIHRvIGxhc3RDb21wbGV0ZU1lYXN1cmUoKSBvciBhbiBvbmdvaW5nIG1lYXN1cmUgKGkuZS4gMS8yKVxuICAgICAqL1xuICAgIGN1cnJlbnRNZWFzdXJlKCk6TWVhc3VyZSB7XG4gICAgICAgIGlmKHRoaXMubWVhc3VyZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tZWFzdXJlc1t0aGlzLm1lYXN1cmVzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBvciB1cGRhdGUgYSBtZWFzdXJlIGRlcGVuZGluZyBvbiB0aGUgbWVhc3VyZSBpZFxuICAgICAqIEBwYXJhbSBtZWFzdXJlIFxuICAgICAqL1xuICAgIHVwc2VydE1lYXN1cmUobWVhc3VyZTpNZWFzdXJlKSB7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1lYXN1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLm1lYXN1cmVzW2ldLmlkID09PSBtZWFzdXJlLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZWFzdXJlc1tpXSA9IG1lYXN1cmU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGlzdG9yeVNpemUrKztcbiAgICAgICAgdGhpcy5tZWFzdXJlcy5wdXNoKG1lYXN1cmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBjbG9uZSB3YXRjaFxuICAgICAqL1xuICAgIGNsb25lKCk6V2F0Y2gge1xuICAgICAgICByZXR1cm4gbmV3IFdhdGNoKFxuICAgICAgICAgICAgdGhpcy5pZCxcbiAgICAgICAgICAgIHRoaXMuYnJhbmQsXG4gICAgICAgICAgICB0aGlzLmhpc3RvcnlTaXplLFxuICAgICAgICAgICAgdGhpcy5tZWFzdXJlcyxcbiAgICAgICAgICAgIHRoaXMubmFtZSxcbiAgICAgICAgICAgIHRoaXMueWVhck9mQnV5LFxuICAgICAgICAgICAgdGhpcy5zZXJpYWwsXG4gICAgICAgICAgICB0aGlzLmNhbGliZXJcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbi8qKlxuICogQWN0aW9ucyBkb2FibGUgd2l0aCBhIHdhdGNoXG4gKi9cbmV4cG9ydCBlbnVtIFdhdGNoQWN0aW9uIHtcbiAgICBNZWFzdXJlLCBXYWl0aW5nLCBBY2N1cmFjeVxufVxuXG4vKipcbiAqIFNwZWNpYWwgc3RhdHVzIGZvciBhIHdhdGNoXG4gKi9cbmV4cG9ydCBlbnVtIFdhdGNoU3RhdHVzIHtcbiAgICBOZXZlck1lYXN1cmVkLFxuICAgIEhhdmVNb3JlTWVhc3VyZXNcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL3dhdGNoLm1vZGVsLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG4vKipcbiAqIEV4cG9zZXMgdGhlIFRvb2x3YXRjaCBBUEkuXG4gKiBSZXR1cm5zIHByb21lc2VzIG9uIGRvbWFpbiBvYmplY3RzXG4gKi9cbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NTZXJ2aWNlIHtcblxuXG4gICAgcHVibGljIGV2ZW50KGRvbWFpbjpzdHJpbmcsIHBhdGg6c3RyaW5nLCBtZXRob2Q6c3RyaW5nID0gXCJcIik6dm9pZCB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc2NyZWVudmlldyhzY3JlZW46c3RyaW5nKTp2b2lkIHtcblxuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9hbmFseXRpY3Muc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7IFxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtb29uLXBoYXNlcycsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm1vb24tcGhhc2UtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1vb24tbWFza1wiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtb29uLWRpc3F1ZVwiPjwvZGl2PlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIE1vb25QaGFzZXNDb21wb25lbnQge1xuXG4gIGFuZ2xlTW9vbjpudW1iZXI7XG4gIFxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBlbGVtZW50UmVmIFxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cbiAgICAgIGxldCB0b2RheTpEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGxldCBsYXN0RnVsbE1vb24gPSBuZXcgRGF0ZSgyMDE2LCAxMCwgMTQsIDEyLCAwLCAwLCAwKTtcbiAgICAgIGxldCBkaWZmRGF5cyA9IE1hdGgucm91bmQoTWF0aC5hYnMoKHRvZGF5LmdldFRpbWUoKSAtIGxhc3RGdWxsTW9vbi5nZXRUaW1lKCkpLygyNCo2MCo2MCoxMDAwKSkpO1xuXG4gICAgICB0aGlzLmFuZ2xlTW9vbiA9IGRpZmZEYXlzICogNi4xMDE2OTQ5MTUyNTQ7ICAgXG4gIH1cblxuICAvKipcbiAgICogXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICBsZXQgZWxlbSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29uLWRpc3F1ZScpO1xuICAgICAgZWxlbS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAncm90YXRlWignICsgdGhpcy5hbmdsZU1vb24gKyAnZGVnKSc7XG4gICAgICBlbGVtLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVaKCcgKyB0aGlzLmFuZ2xlTW9vbiArICdkZWcpJztcbiAgfVxuXG59XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTW9vblBoYXNlc0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTW9vblBoYXNlc0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE1vb25QaGFzZXNDb21wb25lbnRNb2R1bGUgeyB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvZGlyZWN0aXZlcy9jbG9jay9tb29uLXBoYXNlcy9tb29uLXBoYXNlcy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbi8qKlxuICogRXhwb3NlcyB0aGUgVG9vbHdhdGNoIEFQSS5cbiAqIFJldHVybnMgcHJvbWVzZXMgb24gZG9tYWluIG9iamVjdHNcbiAqL1xuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgYmFzZVVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgYXNzZXRzVXJsOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZ2V0QVBJVXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VVcmw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFzc2V0c1VybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5hc3NldHNVcmw7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyYXRpb25Qcm92aWRlcihcbiAgICBiYXNlVXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vdG9vbHdhdGNoLmlvL2FwaS9cIixcbiAgICBhc3NldHNVcmw6IHN0cmluZyA9IFwiYXNzZXRzXCIpOiBDb25maWd1cmF0aW9uU2VydmljZSB7XG5cbiAgICBsZXQgY3MgPSBuZXcgQ29uZmlndXJhdGlvblNlcnZpY2UoKTtcbiAgICAoY3MgYXMgYW55KS5iYXNlVXJsID0gYmFzZVVybDtcbiAgICAoY3MgYXMgYW55KS5hc3NldHNVcmwgPSBhc3NldHNVcmw7XG4gICAgcmV0dXJuIGNzO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyoqXG4gKiBAbmFtZSBlcXVhbHNcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIERldGVybWluZXMgaWYgdHdvIG9iamVjdHMgb3IgdHdvIHZhbHVlcyBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBUd28gb2JqZWN0cyBvciB2YWx1ZXMgYXJlIGNvbnNpZGVyZWQgZXF1aXZhbGVudCBpZiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZyBpcyB0cnVlOlxuICpcbiAqICogQm90aCBvYmplY3RzIG9yIHZhbHVlcyBwYXNzIGA9PT1gIGNvbXBhcmlzb24uXG4gKiAqIEJvdGggb2JqZWN0cyBvciB2YWx1ZXMgYXJlIG9mIHRoZSBzYW1lIHR5cGUgYW5kIGFsbCBvZiB0aGVpciBwcm9wZXJ0aWVzIGFyZSBlcXVhbCBieVxuICogICBjb21wYXJpbmcgdGhlbSB3aXRoIGBlcXVhbHNgLlxuICpcbiAqIEBwYXJhbSB7Kn0gbzEgT2JqZWN0IG9yIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG8yIE9iamVjdCBvciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgYXJndW1lbnRzIGFyZSBlcXVhbC5cbiAqL1xuLyogdHNsaW50OmRpc2FibGUgKi8gZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhvMSwgbzIpIHtcbiAgICBpZiAobzEgPT09IG8yKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAobzEgPT09IG51bGwgfHwgbzIgPT09IG51bGwpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAobzEgIT09IG8xICYmIG8yICE9PSBvMilcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIE5hTiA9PT0gTmFOXG4gICAgdmFyIHQxID0gdHlwZW9mIG8xLCB0MiA9IHR5cGVvZiBvMiwgbGVuZ3RoLCBrZXksIGtleVNldDtcbiAgICBpZiAodDEgPT0gdDIgJiYgdDEgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobzEpKSB7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobzIpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmICgobGVuZ3RoID0gbzEubGVuZ3RoKSA9PSBvMi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGtleSA9IDA7IGtleSA8IGxlbmd0aDsga2V5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlcXVhbHMobzFba2V5XSwgbzJba2V5XSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobzIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIG8xKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcXVhbHMobzFba2V5XSwgbzJba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBrZXlTZXRba2V5XSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBvMikge1xuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBrZXlTZXQpICYmIHR5cGVvZiBvMltrZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLyogdHNsaW50OmVuYWJsZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L0BuZ3gtdHJhbnNsYXRlL2NvcmUvc3JjL3V0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZXByZXNlbnRzIGEgVG9vbHdhdGNoIG1lYXN1cmVcbiAqL1xuZXhwb3J0IGNsYXNzIE1lYXN1cmUge1xuXG4gICAgaWQ6IG51bWJlcjtcbiAgICBtZWFzdXJlVXNlclRpbWU6IG51bWJlcjtcbiAgICBtZWFzdXJlUmVmZXJlbmNlVGltZTogbnVtYmVyO1xuICAgIGFjY3VyYWN5VXNlclRpbWU6IG51bWJlcjtcbiAgICBhY2N1cmFjeVJlZmVyZW5jZVRpbWU6IG51bWJlcjtcbiAgICBhY2N1cmFjeTogbnVtYmVyO1xuICAgIGFjY3VyYWN5QWdlOiBudW1iZXI7XG4gICAgcGVyY2VudGlsZTogbnVtYmVyO1xuICAgIHN0YXR1czogTWVhc3VyZVN0YXR1cyA9IE1lYXN1cmVTdGF0dXMuTm9uZTtcbiAgICBzZXJ2aWNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHJlbmV3ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIGlkIFxuICAgICAqIEBwYXJhbSBtZWFzdXJlVXNlclRpbWUgXG4gICAgICogQHBhcmFtIG1lYXN1cmVSZWZlcmVuY2VUaW1lIFxuICAgICAqIEBwYXJhbSBzdGF0dXMgXG4gICAgICogQHBhcmFtIGFjY3VyYWN5VXNlclRpbWUgXG4gICAgICogQHBhcmFtIGFjY3VyYWN5UmVmZXJlbmNlVGltZSBcbiAgICAgKiBAcGFyYW0gYWNjdXJhY3kgXG4gICAgICogQHBhcmFtIGFjY3VyYWN5QWdlIFxuICAgICAqIEBwYXJhbSBwZXJjZW50aWxlIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBpZDogbnVtYmVyLFxuICAgICAgICBtZWFzdXJlVXNlclRpbWU6IG51bWJlcixcbiAgICAgICAgbWVhc3VyZVJlZmVyZW5jZVRpbWU6IG51bWJlcixcbiAgICAgICAgc3RhdHVzPzogbnVtYmVyLFxuICAgICAgICBhY2N1cmFjeVVzZXJUaW1lPzogbnVtYmVyLFxuICAgICAgICBhY2N1cmFjeVJlZmVyZW5jZVRpbWU/OiBudW1iZXIsXG4gICAgICAgIGFjY3VyYWN5PzogbnVtYmVyLFxuICAgICAgICBhY2N1cmFjeUFnZT86IG51bWJlcixcbiAgICAgICAgcGVyY2VudGlsZT86IG51bWJlclxuICAgICkge1xuXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5tZWFzdXJlVXNlclRpbWUgPSBtZWFzdXJlVXNlclRpbWU7XG4gICAgICAgIHRoaXMubWVhc3VyZVJlZmVyZW5jZVRpbWUgPSBtZWFzdXJlUmVmZXJlbmNlVGltZTtcbiAgICAgICAgdGhpcy5hY2N1cmFjeVVzZXJUaW1lID0gYWNjdXJhY3lVc2VyVGltZTtcbiAgICAgICAgdGhpcy5hY2N1cmFjeVJlZmVyZW5jZVRpbWUgPSBhY2N1cmFjeVJlZmVyZW5jZVRpbWU7XG4gICAgICAgIHRoaXMuYWNjdXJhY3kgPSBhY2N1cmFjeTtcbiAgICAgICAgdGhpcy5hY2N1cmFjeUFnZSA9IGFjY3VyYWN5QWdlO1xuICAgICAgICB0aGlzLnBlcmNlbnRpbGUgPSBNYXRoLnJvdW5kKHBlcmNlbnRpbGUgKiAxMCkgLyAxMDtcblxuICAgICAgICAvL0NvbXB1dGUgZGlmZmVyZW50IHN0YXR1c1xuICAgICAgICBpZiAoc3RhdHVzID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzIHw9IE1lYXN1cmVTdGF0dXMuQmFzZU1lYXN1cmU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdHVzID49IDIpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzIHw9IE1lYXN1cmVTdGF0dXMuQWNjdXJhY3lNZWFzdXJlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXR1cyA+PSAzKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXR1cyB8PSBNZWFzdXJlU3RhdHVzLkFyY2hpdmVkTWVhc3VyZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY2N1cmFjeUFnZSA+IDMwKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmV3ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5TaG91bGRCZVJlbmV3ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTWF0aC5hYnMoYWNjdXJhY3kpID4gMjApIHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5TaG91bGRCZVNlcnZpY2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb21wdXRlUG9zdEFjY3VyYWN5U3RhdHVzKGFjY3VyYWN5LCBhY2N1cmFjeUFnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdG9TdHJpbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9TdHJpbmcgPSAoKTogc3RyaW5nID0+IHtcbiAgICAgICAgcmV0dXJuIGBNZWFzdXJlIChpZDogJHt0aGlzLmlkfSxcbiAgICAgICAgbWVhc3VyZVVzZXJUaW1lOiAke3RoaXMubWVhc3VyZVVzZXJUaW1lfSxcbiAgICAgICAgbWVhc3VyZVJlZmVyZW5jZVRpbWU6ICR7dGhpcy5tZWFzdXJlUmVmZXJlbmNlVGltZX0sXG4gICAgICAgIGFjY3VyYWN5VXNlclRpbWU6ICR7dGhpcy5hY2N1cmFjeVVzZXJUaW1lfSxcbiAgICAgICAgYWNjdXJhY3lSZWZlcmVuY2VUaW1lOiAke3RoaXMuYWNjdXJhY3lSZWZlcmVuY2VUaW1lfSxcbiAgICAgICAgYWNjdXJhY3k6ICR7dGhpcy5hY2N1cmFjeX0sXG4gICAgICAgIGFjY3VyYWN5QWdlOiAke3RoaXMuYWNjdXJhY3lBZ2V9LFxuICAgICAgICBwZXJjZW50aWxlOiAke3RoaXMucGVyY2VudGlsZX0sXG4gICAgICAgIHN0YXR1czogJHt0aGlzLnN0YXR1c30pYDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIGJhc2UgbWVhc3VyZSAoaS5lLiAxLzIpXG4gICAgICogQHBhcmFtIHJlZmVyZW5jZVRpbWUgXG4gICAgICogQHBhcmFtIHVzZXJUaW1lIFxuICAgICAqL1xuICAgIGFkZEJhc2VNZWFzdXJlKHJlZmVyZW5jZVRpbWU6IG51bWJlciwgdXNlclRpbWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLm1lYXN1cmVSZWZlcmVuY2VUaW1lID0gcmVmZXJlbmNlVGltZTtcbiAgICAgICAgdGhpcy5tZWFzdXJlVXNlclRpbWUgPSB1c2VyVGltZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5CYXNlTWVhc3VyZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIGFjY3VyYWN5IG1lYXN1cmUgKGkuZS4gMi8yKVxuICAgICAqIEBwYXJhbSByZWZlcmVuY2VUaW1lIFxuICAgICAqIEBwYXJhbSB1c2VyVGltZSBcbiAgICAgKi9cbiAgICBhZGRBY2N1cmFjeU1lYXN1cmUocmVmZXJlbmNlVGltZTogbnVtYmVyLCB1c2VyVGltZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYWNjdXJhY3lSZWZlcmVuY2VUaW1lID0gcmVmZXJlbmNlVGltZTtcbiAgICAgICAgdGhpcy5hY2N1cmFjeVVzZXJUaW1lID0gdXNlclRpbWU7XG4gICAgICAgIHRoaXMuc3RhdHVzIHw9IE1lYXN1cmVTdGF0dXMuQWNjdXJhY3lNZWFzdXJlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgYWNjdXJhY3kgdG8gdGhlIG1lYXN1cmVcbiAgICAgKiBAcGFyYW0gYWNjdXJhY3kgXG4gICAgICogQHBhcmFtIGFjY3VyYWN5QWdlIFxuICAgICAqIEBwYXJhbSBwZXJjZW50aWxlIFxuICAgICAqL1xuICAgIGFkZEFjY3VyYWN5KGFjY3VyYWN5OiBudW1iZXIsIGFjY3VyYWN5QWdlOiBudW1iZXIsIHBlcmNlbnRpbGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFjY3VyYWN5ID0gYWNjdXJhY3k7XG4gICAgICAgIHRoaXMuYWNjdXJhY3lBZ2UgPSBhY2N1cmFjeUFnZTtcbiAgICAgICAgdGhpcy5wZXJjZW50aWxlID0gTWF0aC5yb3VuZChwZXJjZW50aWxlICogMTApIC8gMTA7XG4gICAgICAgIHRoaXMuY29tcHV0ZVBvc3RBY2N1cmFjeVN0YXR1cyhhY2N1cmFjeSwgYWNjdXJhY3lBZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSB3YXRjaCBzaG91bGQgYmUgc2VydmljZWQgXG4gICAgICogb3IgdGhlIG1lYXN1cmUgcmVuZXdlZFxuICAgICAqIEBwYXJhbSBhY2N1cmFjeSBcbiAgICAgKiBAcGFyYW0gYWNjdXJhY3lBZ2UgXG4gICAgICovXG4gICAgcHJpdmF0ZSBjb21wdXRlUG9zdEFjY3VyYWN5U3RhdHVzKGFjY3VyYWN5OiBudW1iZXIsIGFjY3VyYWN5QWdlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGFjY3VyYWN5ICE9IG51bGwgJiYgYWNjdXJhY3lBZ2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFjY3VyYWN5KSA+IDIwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5TaG91bGRCZVNlcnZpY2VkO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWNjdXJhY3lBZ2UgPiAzMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZXdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5TaG91bGRCZVJlbmV3ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogRGlmZmVyZW50IHN0YXR1cyBmb3IgbWVhc3VyZXNcbiAqL1xuZXhwb3J0IGVudW0gTWVhc3VyZVN0YXR1cyB7XG4gICAgTm9uZSA9IDAsXG4gICAgQmFzZU1lYXN1cmUgPSAxIDw8IDAsXG4gICAgQWNjdXJhY3lNZWFzdXJlID0gMSA8PCAxLFxuICAgIEFyY2hpdmVkTWVhc3VyZSA9IDEgPDwgMixcbiAgICBTaG91bGRCZVJlbmV3ZWQgPSAxIDw8IDMsXG4gICAgU2hvdWxkQmVTZXJ2aWNlZCA9IDEgPDwgNFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tb2RlbHMvbWVhc3VyZS5tb2RlbC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vb25QaGFzZXNDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL21vb24tcGhhc2VzL21vb24tcGhhc2VzLmNvbXBvbmVudCdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7IFxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJjbG9ja1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlIG1vbnRoXCI+e3ttb250aH19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZSBkYXlcIj57e2RheX19PC9kaXY+XG4gICAgICAgICAgICA8bW9vbi1waGFzZXM+PC9tb29uLXBoYXNlcz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3Vycy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG91cnNcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1pbnV0ZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1pbnV0ZXNcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZHNcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBDbG9ja0NvbXBvbmVudCB7XG5cbiAgICBtb250aDogc3RyaW5nO1xuICAgIGRheTogc3RyaW5nO1xuICAgIGRhdGU6IERhdGU7XG4gICAgbmV4dExlYXA6IG51bWJlcjtcbiAgICBtb250aE5hbWVzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xuICAgIGRheU5hbWVzID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXTtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBlbGVtZW50UmVmIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXG4gICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMubW9udGggPSB0aGlzLm1vbnRoTmFtZXNbdGhpcy5kYXRlLmdldE1vbnRoKCldO1xuICAgICAgICB0aGlzLmRheSA9IHRoaXMuZGF5TmFtZXNbdGhpcy5kYXRlLmdldERheSgpXSArIFwiIFwiICsgdGhpcy5kYXRlLmdldERhdGUoKTtcblxuICAgICAgICB0aGlzLm5leHRMZWFwID0gdGhpcy5kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgd2hpbGUgKCF0aGlzLmlzTGVhcFllYXIodGhpcy5uZXh0TGVhcCkpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dExlYXArKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2V0aGVyIG9yIG5vdCBhIHllYXIgaXMgbGVhcFxuICAgICAqIEBwYXJhbSB5ZWFyIFxuICAgICAqL1xuICAgIGlzTGVhcFllYXIoeWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoKHllYXIgJSA0ID09PSAwKSAmJiAoeWVhciAlIDEwMCAhPT0gMCkpIHx8ICh5ZWFyICUgNDAwID09PSAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyB0aGUgaGFuZHNcbiAgICAgKi9cbiAgICBpbml0TG9jYWxDbG9ja3MoKTogdm9pZCB7XG5cbiAgICAgICAgdmFyIG1pbGxpc2Vjb25kcyA9IHRoaXMuZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICAgICAgdmFyIHNlY29uZHMgPSB0aGlzLmRhdGUuZ2V0U2Vjb25kcygpO1xuICAgICAgICB2YXIgbWludXRlcyA9IHRoaXMuZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgIHZhciBob3VycyA9IHRoaXMuZGF0ZS5nZXRIb3VycygpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhbiBvYmplY3Qgd2l0aCBlYWNoIGhhbmQgYW5kIGl0J3MgYW5nbGUgaW4gZGVncmVlc1xuICAgICAgICB2YXIgaGFuZHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGFuZDogJ2hvdXJzJyxcbiAgICAgICAgICAgICAgICBhbmdsZTogKGhvdXJzICogMzApICsgKG1pbnV0ZXMgLyAyKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoYW5kOiAnbWludXRlcycsXG4gICAgICAgICAgICAgICAgYW5nbGU6IChtaW51dGVzICogNikgKyAoc2Vjb25kcyAvIDYwKSAqIDZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGFuZDogJ3NlY29uZHMnLFxuICAgICAgICAgICAgICAgIGFuZ2xlOiAoc2Vjb25kcyAqIDYpICsgKG1pbGxpc2Vjb25kcyAvIDEwMDApICogNlxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIC8vTG9vcCB0aHJvdWdoIGVhY2ggb2YgdGhlc2UgaGFuZHMgdG8gc2V0IHRoZWlyIGFuZ2xlXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaGFuZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnLicgKyBoYW5kc1tqXS5oYW5kXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdyb3RhdGVaKCcgKyBoYW5kc1tqXS5hbmdsZSArICdkZWcpJztcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVooJyArIGhhbmRzW2pdLmFuZ2xlICsgJ2RlZyknO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0Nsb2NrQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTW9vblBoYXNlc0NvbXBvbmVudE1vZHVsZV0sXG4gIGV4cG9ydHM6IFtDbG9ja0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ2xvY2tDb21wb25lbnRNb2R1bGUgeyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2RpcmVjdGl2ZXMvY2xvY2svY2xvY2suY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgVHdBUElTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy90d2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEdsb2JhbFZhbGlkYXRvciB9IGZyb20gJy4vLi4vZ2xvYmFsLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3Muc2VydmljZSc7XG5cbmltcG9ydCB7ICAgXG4gIFZhbGlkYXRvcnMsICBcbiAgRm9ybUJ1aWxkZXIsICBcbiAgRm9ybUdyb3VwLFxuICBGb3Jtc01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogTG9naW4gY29tcG9uZW50LiBQcm92aWRlcyBhIGxvZ2luIGZvcm0gd2l0aCBjb250cm9sbGVkIGFuZFxuICogZW1pdHMgYSBVc2VyICgkZXZlbnQgdXNlckxvZ2dlZCkgb24gc3VjY2Vzc2Z1bCBsb2dpbi5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBcIlwiXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcblxuICBsb2dpbkZvcm06IEZvcm1Hcm91cDtcbiAgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICBzdWJtaXRBdHRlbXB0OiBmYWxzZTtcbiAgQE91dHB1dCgpIHVzZXJMb2dnZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsb2dpbkF0dGVtcHQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIHcvIHNlcnZpY2UgaW5qZWN0aW9uXG4gICAqIEBwYXJhbSB7VHJhbnNsYXRlU2VydmljZX0gcHJpdmF0ZSB0cmFuc2xhdGUgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0ge1R3QVBJU2VydmljZX0gICAgIHByaXZhdGUgdHdhcGkgICAgIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtIHtGb3JtQnVpbGRlcn0gICAgICBwcml2YXRlIGJ1aWxkZXIgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLCBcbiAgICBwcm90ZWN0ZWQgdHdhcGk6IFR3QVBJU2VydmljZSwgXG4gICAgcHJvdGVjdGVkIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSxcbiAgICBwcml2YXRlICAgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyXG4gICkgeyBcblxuICAgIC8vTGFuZyBkZWZpbml0aW9uXG4gICAgICB0aGlzLnRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZygnZW4nKTtcbiAgICAgIHRoaXMudHJhbnNsYXRlLnVzZSgnZW4nKTtcblxuICAgICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgZW1haWwgICA6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEdsb2JhbFZhbGlkYXRvci5tYWlsRm9ybWF0XSldLFxuICAgICAgICBwYXNzd29yZDogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNSldKV1cbiAgICAgIH0pO1xuXG4gIH1cblxuICAvKipcbiAgICogTG9naW4gYW4gRkIgdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmJVc2VyIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIG9uRmJTdWJtaXQoZmJVc2VyOntcbiAgICBlbWFpbDogc3RyaW5nLCBcbiAgICB0b2tlbjogc3RyaW5nLFxuICAgIGxhc3RuYW1lOiBzdHJpbmcsIFxuICAgIGZpcnN0bmFtZTogc3RyaW5nfVxuICApIHtcblxuICAgIHRoaXMuZXJyb3JzID0gW107XG5cbiAgICB0aGlzLmxvZ2luQXR0ZW1wdC5lbWl0KHRydWUpO1xuXG4gICAgLy9UcmllcyB0byBsb2dpbiBhbiB1c2VyIHVzaW5nIGhpcyBmYiBlbWFpbFxuICAgIHRoaXMudHdhcGkuc2lnbnVwRmFjZWJvb2soZmJVc2VyLmVtYWlsLCBmYlVzZXIudG9rZW4sIGZiVXNlci5sYXN0bmFtZSwgZmJVc2VyLmZpcnN0bmFtZSkudGhlbihcbiAgICAgICAgLy9zdWNjZXNzLCBhd2F5IHdlIGdvXG4gICAgICAgIHJlcyA9PiB7IFxuICAgICAgICAgIHRoaXMudXNlckxvZ2dlZC5lbWl0KHJlcyk7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3MuZXZlbnQoJ0NUQScsICdGQl9MT0dJTicsICdTVUNDRVNTJyk7XG4gICAgICAgIH0sIFxuICAgICAgICBlcnIgPT4ge1xuXG4gICAgICAgICAgLy9FcnJvciwgbW9zdCBsaWtlbHkgdGhlIHVzZXIgdHJpZXMgdG8gc2lnbmluXG4gICAgICAgICAgLy91c2luZyBmYWNlYm9vayB3aGlsZSBoZSBoYXMgYSByZWd1bGFyIFxuICAgICAgICAgIC8vYWNjb3VudCB3aXRoIHRoZSBzYW1lIGVtYWlsLlxuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzLmV2ZW50KCdDVEEnLCAnRkJfU0lHTlVQJywgJ0ZBSUwnKTtcbiAgICAgICAgICBzd2l0Y2ggKGVyci5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgVHdBUElTZXJ2aWNlLkhUVFBfVU5BVVRIT1JJWkVEOlxuICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdjcmVkZW50aWFscycpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ2Vycm9yJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmxvZ2luQXR0ZW1wdC5lbWl0KGZhbHNlKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICB0aGlzLmxvZ2luQXR0ZW1wdC5lbWl0KGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtIHN1Ym1pdFxuICAgKiBAcGFyYW0ge3N0cmluZ319IHVzZXIgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgb25TdWJtaXQodXNlcjp7ZW1haWw6c3RyaW5nLCBwYXNzd29yZDpzdHJpbmd9KSB7XG5cbiAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgIFxuICAgIC8vRm9ybSBjb25zdHJhaW50cyBhcmUgb2tcbiAgICBpZih0aGlzLmxvZ2luRm9ybS52YWxpZCkge1xuXG4gICAgICB0aGlzLmxvZ2luQXR0ZW1wdC5lbWl0KHRydWUpO1xuXG4gICAgICB0aGlzLnR3YXBpLmxvZ2luKHVzZXIuZW1haWwsIHVzZXIucGFzc3dvcmQpLnRoZW4oXG4gICAgICAgIHJlcyA9PiB7IFxuICAgICAgICAgIHRoaXMudXNlckxvZ2dlZC5lbWl0KHJlcyk7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3MuZXZlbnQoJ0NUQScsICdMT0dJTicsICdTVUNDRVNTJyk7XG4gICAgICAgIH0sIFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzLmV2ZW50KCdDVEEnLCAnTE9HSU4nLCAnRkFJTCcpO1xuICAgICAgICAgIHN3aXRjaCAoZXJyLnN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSA0MDE6XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ2NyZWRlbnRpYWxzJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnZXJyb3InKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLmxvZ2luQXR0ZW1wdC5lbWl0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogc2VuZCBhIHBhc3N3b3JkIHJlc2V0IHJlcXVlc3RcbiAgICogQHBhcmFtIGVtYWlsIFxuICAgKi9cbiAgb25QYXNzd29yZFJlc2V0U3VibWl0KGVtYWlsOnN0cmluZykge1xuICAgIHRoaXMudHdhcGkucmVzZXRQYXNzd29yZChlbWFpbCk7XG4gIH1cblxufVxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0xvZ2luQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBUcmFuc2xhdGVNb2R1bGVdLFxuICBleHBvcnRzOiBbTG9naW5Db21wb25lbnQsIFRyYW5zbGF0ZU1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIFR3QVBJU2VydmljZVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudE1vZHVsZSB7IH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvZGlyZWN0aXZlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgVHdBUElTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy90d2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEdsb2JhbFZhbGlkYXRvciB9IGZyb20gJy4vLi4vZ2xvYmFsLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9hbmFseXRpY3Muc2VydmljZSc7XG5cbmltcG9ydCB7ICAgXG4gIFZhbGlkYXRvcnMsXG4gIEZvcm1CdWlsZGVyLCAgXG4gIEZvcm1Hcm91cFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogU2lnbnVwIGZvcm0uIEVtaXRzIGEgdXNlckxvZ2dlZCBldmVudCBvbiBuZXcgdXNlciBzaWdudXBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQge1xuXG4gIHNpZ251cEZvcm06IEZvcm1Hcm91cDtcbiAgc3VibWl0QXR0ZW1wdDogYm9vbGVhbiAgPSBmYWxzZTtcbiAgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICBjb3VudHJpZXM6IHN0cmluZ1tdID0gW107XG4gIGZpbHRlcmVkTGlzdDogc3RyaW5nW10gPSBbXTtcbiAgcXVlcnk6IHN0cmluZyAgID0gXCJcIjtcblxuICBAT3V0cHV0KCkgdXNlckxvZ2dlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNpZ251cEF0dGVtcHQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIC8qKlxuICAgKiBDb25zdHJ1Y3RvciB3LyBzZXJ2aWNlIGluamVjdGlvblxuICAgKiBAcGFyYW0ge1RyYW5zbGF0ZVNlcnZpY2V9IHByaXZhdGUgdHJhbnNsYXRlIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtIHtUd0FQSVNlcnZpY2V9ICAgICBwcml2YXRlIHR3YXBpICAgICBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSB7Rm9ybUJ1aWxkZXJ9ICAgICAgcHJpdmF0ZSBidWlsZGVyICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkICAgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLCBcbiAgICBwcml2YXRlICAgICB0d2FwaTogVHdBUElTZXJ2aWNlLCBcbiAgICBwcml2YXRlICAgICBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJvdGVjdGVkICAgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlXG4gICkgeyBcblxuICAgIHRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZygnZW4nKTtcbiAgICB0cmFuc2xhdGUudXNlKCdlbicpO1xuXG4gICAgdHJhbnNsYXRlLmdldChcImNvdW50cmllc1wiKS5zdWJzY3JpYmUoKHJlc3VsdDogW3N0cmluZ10pID0+IHtcbiAgICAgIHRoaXMuY291bnRyaWVzID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgdGhpcy5zaWdudXBGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgIGVtYWlsICAgICAgICAgOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBHbG9iYWxWYWxpZGF0b3IubWFpbEZvcm1hdF0pXSxcbiAgICAgICAgZW1haWxSZXBlYXQgICA6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEdsb2JhbFZhbGlkYXRvci5tYWlsRm9ybWF0XSldLFxuXG4gICAgICAgIHBhc3N3b3JkICAgICAgOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KV0pXSxcbiAgICAgICAgcGFzc3dvcmRSZXBlYXQ6IFtcIlwiLCBcbiAgICAgICAgICBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgXG4gICAgICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIGxhc3ROYW1lICAgICAgOiBcIlwiLFxuICAgICAgICBmaXJzdE5hbWUgICAgIDogXCJcIixcbiAgICAgICAgY291bnRyeSAgICAgICA6IFwiXCJcbiAgICAgIH0pO1xuICB9XG5cblxuICAvKipcbiAgICogVHJpbXMgdGhlIGZpbHRlcmVkTGlzdCBhY2NvcmluZyB0byB0aGUgXG4gICAqIGNvdW50cnkgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGZpbHRlcihxdWVyeTpzdHJpbmcpIHtcbiAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IHRoaXMuY291bnRyaWVzLmZpbHRlcihmdW5jdGlvbihlbGVtZW50OnN0cmluZyl7XG4gICAgICByZXR1cm4gZWxlbWVudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NpZ24gdGhlIGNvdW50cnkgbGFiZWwgd2hlbiBzZWxlY3RlZCBcbiAgICogZnJvbSB0aGUgbGlzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaXRlbSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBzZWxlY3QoaXRlbTpzdHJpbmcpIHtcbiAgICB0aGlzLnF1ZXJ5ID0gaXRlbTtcbiAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIHN1Ym1pdCB0aGUgZm9ybVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlciBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBvblN1Ym1pdCh1c2VyOntcbiAgICAgIGVtYWlsOiBzdHJpbmcsIFxuICAgICAgcGFzc3dvcmQ6IHN0cmluZyxcbiAgICAgIGVtYWlsUmVwZWF0OiBzdHJpbmcsXG4gICAgICBwYXNzd29yZFJlcGVhdDogc3RyaW5nLFxuICAgICAgbGFzdE5hbWU6IHN0cmluZyxcbiAgICAgIGZpcnN0TmFtZTogc3RyaW5nXG4gICAgfSkge1xuXG4gICAgdGhpcy5zdWJtaXRBdHRlbXB0ID0gdHJ1ZTtcbiAgICB0aGlzLmVycm9ycyA9IFtdO1xuXG5cbiAgICBpZih0aGlzLnNpZ251cEZvcm0udmFsaWQgJiYgXG4gICAgICB1c2VyLnBhc3N3b3JkID09PSB1c2VyLnBhc3N3b3JkUmVwZWF0ICYmXG4gICAgICB1c2VyLmVtYWlsID09PSB1c2VyLmVtYWlsUmVwZWF0KSB7XG5cbiAgICAgIHRoaXMuc2lnbnVwQXR0ZW1wdC5lbWl0KHRydWUpO1xuXG4gICAgICB0aGlzLnR3YXBpLnNpZ251cCh1c2VyLmVtYWlsLFxuICAgICAgIHVzZXIucGFzc3dvcmQsXG4gICAgICAgdXNlci5maXJzdE5hbWUsXG4gICAgICAgdXNlci5sYXN0TmFtZSxcbiAgICAgICB0aGlzLnF1ZXJ5KS50aGVuKFxuICAgICAgICByZXMgPT4geyBcbiAgICAgICAgICB0aGlzLmFuYWx5dGljcy5ldmVudCgnQ1RBJywgJ1NJR05VUCcsICdTVUNDRVNTJyk7XG4gICAgICAgICAgdGhpcy51c2VyTG9nZ2VkLmVtaXQocmVzKTsgXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljcy5ldmVudCgnQ1RBJywgJ1NJR05VUCcsICdGQUlMJyk7XG4gICAgICAgICAgc3dpdGNoIChlcnJvci5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgVHdBUElTZXJ2aWNlLkhUVFBfVU5BVVRIT1JJWkVEOlxuICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdlbWFpbC10YWtlbicpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ2Vycm9yJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICk7XG5cbiAgICAgIHRoaXMuc2lnbnVwQXR0ZW1wdC5lbWl0KGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICBpZih1c2VyLnBhc3N3b3JkICE9PSB1c2VyLnBhc3N3b3JkUmVwZWF0KSB7XG4gICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ3Bhc3N3b3JkLW1hdGNoJyk7XG4gICAgICB9XG5cbiAgICAgIGlmKHVzZXIuZW1haWwgIT09IHVzZXIuZW1haWxSZXBlYXQpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnZW1haWwtbWF0Y2gnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2lnbnVwQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBUcmFuc2xhdGVNb2R1bGVdLFxuICBleHBvcnRzOiBbU2lnbnVwQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgVHdBUElTZXJ2aWNlXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudE1vZHVsZSB7IH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvZGlyZWN0aXZlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgV2F0Y2ggfSBmcm9tICcuLy4uLy4uL21vZGVscy93YXRjaC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi8uLi8uLi9tb2RlbHMvdXNlci5tb2RlbCc7XG5cbmltcG9ydCB7IFR3QVBJU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvdHdhcGkuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7ICAgXG4gIEZvcm1CdWlsZGVyLCAgXG4gIEZvcm1Hcm91cCxcbiAgVmFsaWRhdG9yc1xufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogRnJvbSB0byBhZGQsIGRlbGV0ZSBhbmQgdXBkYXRlIHdhdGNoZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBXYXRjaENvbXBvbmVudCB7XG5cbiAgdXNlcjogVXNlcjsgXG4gIHdhdGNoTW9kZWw6IFdhdGNoID0gbmV3IFdhdGNoKG51bGwsIFwiXCIpO1xuICB3YXRjaEZvcm06IEZvcm1Hcm91cDtcbiAgYnJhbmRzOiB7IG5hbWU6IHN0cmluZywgaWNvbjogc3RyaW5nLCBtb2RlbHM6IHN0cmluZyB9W10gPSBbXTtcbiAgbW9kZWxzOiBzdHJpbmdbXSA9IFtdO1xuICBjYWxpYmVyczogc3RyaW5nW10gPSBbXTtcbiAgZmlsdGVyZWRCcmFuZExpc3Q6IHsgbmFtZTogc3RyaW5nLCBpY29uOiBzdHJpbmcsIG1vZGVsczogc3RyaW5nIH1bXSA9IFtdO1xuICBmaWx0ZXJlZE1vZGVsTGlzdDogc3RyaW5nW10gPSBbXTtcbiAgZmlsdGVyZWRDYWxpYmVyTGlzdDogc3RyaW5nW10gPSBbXTtcbiAgZXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc3VibWl0QXR0ZW1wdDogYm9vbGVhbiA9IGZhbHNlO1xuICBicmFuZFNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIG1vZGVsU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY2FsaWJlclNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHdhdGNoU2F2ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIFxuICAvKipcbiAgICogQ29uc3RydWN0b3Igd2l0aCBESVxuICAgKiBAcGFyYW0ge1RyYW5zbGF0ZVNlcnZpY2V9IHByaXZhdGUgdHJhbnNsYXRlXG4gICAqIEBwYXJhbSB7VHdBUElTZXJ2aWNlfSAgICAgcHJpdmF0ZSB0d2FwaSAgICBcbiAgICogQHBhcmFtIHtGb3JtQnVpbGRlcn0gICAgICBwcml2YXRlIGJ1aWxkZXIgIFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlICAgdHdhcGk6IFR3QVBJU2VydmljZSwgXG4gICAgcHJpdmF0ZSAgIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgKSB7XG5cbiAgICB0cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoJ2VuJyk7XG4gICAgdHJhbnNsYXRlLnVzZSgnZW4nKTtcbiAgICBcbiAgICB0aGlzLndhdGNoRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgaWQgICAgIDogdGhpcy53YXRjaE1vZGVsLmlkLFxuICAgICAgYnJhbmQgIDogW3RoaXMud2F0Y2hNb2RlbC5icmFuZCwgIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbmFtZSAgIDogW3RoaXMud2F0Y2hNb2RlbC5uYW1lLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNhbGliZXI6IHRoaXMud2F0Y2hNb2RlbC5jYWxpYmVyLFxuICAgICAgeWVhciAgIDogW3RoaXMud2F0Y2hNb2RlbC55ZWFyT2ZCdXksIFZhbGlkYXRvcnMuY29tcG9zZShcbiAgICAgICAgW1ZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLCAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoNCldXG4gICAgICApXSxcbiAgICAgIHNlcmlhbCA6IHRoaXMud2F0Y2hNb2RlbC5zZXJpYWxcbiAgICB9KTtcblxuICAgIHRoaXMudHdhcGkuZ2V0QnJhbmRzKCkudGhlbihcbiAgICAgIHJlcyA9PiB7XG4gICAgICAgIHRoaXMuYnJhbmRzID0gcmVzO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogW3NlbGVjdEJyYW5kIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gYnJhbmQgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgc2VsZWN0QnJhbmQoYnJhbmQ6IHsgbmFtZTogc3RyaW5nLCBpY29uOiBzdHJpbmcsIG1vZGVsczpzdHJpbmd9KSB7XG4gICAgdGhpcy5icmFuZFNlbGVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLnR3YXBpLmdldE1vZGVscyhicmFuZC5tb2RlbHMudG9Mb3dlckNhc2UoKSkudGhlbihcbiAgICAgIHJlcyAgID0+IHRoaXMubW9kZWxzID0gcmVzXG4gICAgKTtcbiAgICBcbiAgICB0aGlzLnR3YXBpLmdldENhbGliZXJzKGJyYW5kLm1vZGVscy50b0xvd2VyQ2FzZSgpKS50aGVuKFxuICAgICAgcmVzICAgPT4gdGhpcy5jYWxpYmVycyA9IHJlc1xuICAgICk7XG5cbiAgICB0aGlzLmZpbHRlcmVkQnJhbmRMaXN0ID0gW107XG4gICAgdGhpcy53YXRjaE1vZGVsLmJyYW5kID0gYnJhbmQubmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3QgYSBtb2RlbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZWwgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgc2VsZWN0TW9kZWwobW9kZWw6IHN0cmluZykge1xuICAgIHRoaXMubW9kZWxTZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy5maWx0ZXJlZE1vZGVsTGlzdCA9IFtdO1xuICAgIHRoaXMud2F0Y2hNb2RlbC5uYW1lID0gbW9kZWw7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IGEgY2FsaWJlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2FsaWJlciBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBzZWxlY3RDYWxpYmVyKGNhbGliZXI6IHN0cmluZykge1xuICAgIHRoaXMuY2FsaWJlclNlbGVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmZpbHRlcmVkQ2FsaWJlckxpc3QgPSBbXTtcbiAgICB0aGlzLndhdGNoTW9kZWwuY2FsaWJlciA9IGNhbGliZXI7XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVyIGJyYW5kcyBhY2NvcmRpbmcgdGhlIGJyYW5kXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBicmFuZCBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBmaWx0ZXJCcmFuZChicmFuZDogc3RyaW5nKSB7XG5cbiAgICBpZih0aGlzLmJyYW5kU2VsZWN0ZWQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmZpbHRlcmVkQnJhbmRMaXN0ID0gdGhpcy5icmFuZHMuZmlsdGVyKFxuICAgICAgICBmdW5jdGlvbihlbGVtZW50OiB7IG5hbWU6IHN0cmluZywgaWNvbjogc3RyaW5nLCBtb2RlbHM6IHN0cmluZyB9KSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoYnJhbmQudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgICAgIH0pO1xuICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpPT4gdGhpcy5icmFuZFNlbGVjdGVkID0gZmFsc2UsIDUpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlcnMgbW9kZWxzIGFjY29yZGluZyB0byBtb2RlbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZWwgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgZmlsdGVyTW9kZWwobW9kZWw6c3RyaW5nKSB7XG5cbiAgICBpZih0aGlzLm1vZGVsU2VsZWN0ZWQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmZpbHRlcmVkTW9kZWxMaXN0ID0gdGhpcy5tb2RlbHMuZmlsdGVyKGZ1bmN0aW9uKGVsZW1lbnQ6c3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihtb2RlbC50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCk9PiB0aGlzLm1vZGVsU2VsZWN0ZWQgPSBmYWxzZSwgNSk7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlcnMgb3V0IGNhbGliZXJzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBpbnB1dFxuICAgKiBAcGFyYW0gY2FsaWJlciBcbiAgICovXG4gIGZpbHRlckNhbGliZXIoY2FsaWJlcjpzdHJpbmcpIHtcbiAgICBcbiAgICBpZih0aGlzLmNhbGliZXJTZWxlY3RlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZmlsdGVyZWRDYWxpYmVyTGlzdCA9IHRoaXMuY2FsaWJlcnMuZmlsdGVyKGZ1bmN0aW9uKGVsZW1lbnQ6c3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihjYWxpYmVyLnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKT0+IHRoaXMuY2FsaWJlclNlbGVjdGVkID0gZmFsc2UsIDUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJtaXQgYSB3YXRjaFxuICAgKi9cbiAgb25TdWJtaXQoKSB7XG5cbiAgICB0aGlzLnN1Ym1pdEF0dGVtcHQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMud2F0Y2hGb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLmVycm9yID0gZmFsc2U7XG4gICAgXG4gICAgICB0aGlzLnR3YXBpLnVwc2VydFdhdGNoKHRoaXMud2F0Y2hNb2RlbCkudGhlbihcbiAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICB0aGlzLnVzZXIudXBzZXJ0V2F0Y2gocmVzKTtcbiAgICAgICAgICB0aGlzLndhdGNoU2F2ZWQuZW1pdCh0aGlzLnVzZXIpO1xuICAgICAgICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGEgd2F0Y2hcbiAgICovXG4gIG9uRGVsZXRlKCkge1xuICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IHRydWU7XG4gICAgdGhpcy50d2FwaS5kZWxldGVXYXRjaCh0aGlzLnVzZXIsIHRoaXMud2F0Y2hNb2RlbCkudGhlbihcbiAgICAgIHJlcyA9PiB7XG4gICAgICAgIHRoaXMud2F0Y2hTYXZlZC5lbWl0KHJlcyk7XG4gICAgICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIGVycm9yID0+IHtcbiAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IGZhbHNlO1xuICAgICAgfVxuICAgICk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbV2F0Y2hDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIFRyYW5zbGF0ZU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtXYXRjaENvbXBvbmVudF0sXG4gICBwcm92aWRlcnM6IFtcbiAgICBUd0FQSVNlcnZpY2VcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgV2F0Y2hDb21wb25lbnRNb2R1bGUgeyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2RpcmVjdGl2ZXMvd2F0Y2gvd2F0Y2guY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnYXJldGhtZXRpY1NpZ24nXG59KSBcbmV4cG9ydCBjbGFzcyBBcmV0aG1ldGljU2lnbiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZih2YWx1ZSA+PSAwKSB7XG4gICAgICAgIHJldHVybiBcIitcIiArIHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICAgIH1cbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBcmV0aG1ldGljU2lnbl0sXG4gIGV4cG9ydHM6IFtBcmV0aG1ldGljU2lnbl1cbn0pXG5leHBvcnQgY2xhc3MgQXJldGhtZXRpY1NpZ25QaXBlTW9kdWxlIHsgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9waXBlcy9hcmV0aG1ldGljLXNpZ24ucGlwZS50cyIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAna0Zvcm1hdHRlcidcclxufSkgXHJcbmV4cG9ydCBjbGFzcyBLRm9ybWF0dGVyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIC8vd2UgZXhwZWN0IGEgc2lnbmVkIG51bWJlciAoaS5lICsyLjcpXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cclxuICAgIGxldCBzaWduOnN0cmluZyA9IHZhbHVlLmNoYXJBdCgwKTtcclxuICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKDEpO1xyXG4gICAgbGV0IG51bWJlciA9IE51bWJlcih2YWx1ZSk7XHJcblxyXG4gICAgaWYoTWF0aC5hYnMobnVtYmVyKSA+IDk5OSkge1xyXG4gICAgICByZXR1cm4gc2lnbiArIChudW1iZXIvMTAwMCkudG9GaXhlZCgwKSArICdrJztcclxuICAgIH0gZWxzZSBpZihNYXRoLmFicyhudW1iZXIpID4gMTAwKSB7XHJcbiAgICAgIHJldHVybiBzaWduICsgbnVtYmVyLnRvRml4ZWQoMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gc2lnbiArIG51bWJlci50b0ZpeGVkKDEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtLRm9ybWF0dGVyXSxcclxuICBleHBvcnRzOiBbS0Zvcm1hdHRlcl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEtGb3JtYXR0ZXJQaXBlTW9kdWxlIHsgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9waXBlcy9rLWZvcm1hdHRlci5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbGVhZGluZ1plcm8nXG59KVxuZXhwb3J0IGNsYXNzIExlYWRpbmdaZXJvIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmICh2YWx1ZSA8IDEwKSB7XG4gICAgICAgIHJldHVybiBcIjBcIiArIHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICAgIH1cbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMZWFkaW5nWmVyb10sXG4gIGV4cG9ydHM6IFtMZWFkaW5nWmVyb11cbn0pXG5leHBvcnQgY2xhc3MgTGVhZGluZ1plcm9QaXBlTW9kdWxlIHsgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9waXBlcy9sZWFkaW5nLXplcm8ucGlwZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xudmFyIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIoKSB7XG4gICAgfVxuICAgIHJldHVybiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyO1xufSgpKTtcbmV4cG9ydCB7IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgfTtcbi8qKlxuICogVGhpcyBoYW5kbGVyIGlzIGp1c3QgYSBwbGFjZWhvbGRlciB0aGF0IGRvZXMgbm90aGluZywgaW4gY2FzZSB5b3UgZG9uJ3QgbmVlZCBhIG1pc3NpbmcgdHJhbnNsYXRpb24gaGFuZGxlciBhdCBhbGxcbiAqL1xudmFyIEZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcigpIHtcbiAgICB9XG4gICAgRmFrZU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIucHJvdG90eXBlLmhhbmRsZSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5rZXk7XG4gICAgfTtcbiAgICByZXR1cm4gRmFrZU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXI7XG59KCkpO1xuZXhwb3J0IHsgRmFrZU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgfTtcbkZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5GYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L0BuZ3gtdHJhbnNsYXRlL2NvcmUvc3JjL21pc3NpbmctdHJhbnNsYXRpb24taGFuZGxlci5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG52YXIgVHJhbnNsYXRlTG9hZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVMb2FkZXIoKSB7XG4gICAgfVxuICAgIHJldHVybiBUcmFuc2xhdGVMb2FkZXI7XG59KCkpO1xuZXhwb3J0IHsgVHJhbnNsYXRlTG9hZGVyIH07XG4vKipcbiAqIFRoaXMgbG9hZGVyIGlzIGp1c3QgYSBwbGFjZWhvbGRlciB0aGF0IGRvZXMgbm90aGluZywgaW4gY2FzZSB5b3UgZG9uJ3QgbmVlZCBhIGxvYWRlciBhdCBhbGxcbiAqL1xudmFyIFRyYW5zbGF0ZUZha2VMb2FkZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUcmFuc2xhdGVGYWtlTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRyYW5zbGF0ZUZha2VMb2FkZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgVHJhbnNsYXRlRmFrZUxvYWRlci5wcm90b3R5cGUuZ2V0VHJhbnNsYXRpb24gPSBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih7fSk7XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNsYXRlRmFrZUxvYWRlcjtcbn0oVHJhbnNsYXRlTG9hZGVyKSk7XG5leHBvcnQgeyBUcmFuc2xhdGVGYWtlTG9hZGVyIH07XG5UcmFuc2xhdGVGYWtlTG9hZGVyLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5UcmFuc2xhdGVGYWtlTG9hZGVyLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vQG5neC10cmFuc2xhdGUvY29yZS9zcmMvdHJhbnNsYXRlLmxvYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzRGVmaW5lZCB9IGZyb20gXCIuL3V0aWxcIjtcbnZhciBUcmFuc2xhdGVQYXJzZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyYW5zbGF0ZVBhcnNlcigpIHtcbiAgICB9XG4gICAgcmV0dXJuIFRyYW5zbGF0ZVBhcnNlcjtcbn0oKSk7XG5leHBvcnQgeyBUcmFuc2xhdGVQYXJzZXIgfTtcbnZhciBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVHJhbnNsYXRlRGVmYXVsdFBhcnNlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMudGVtcGxhdGVNYXRjaGVyID0gL3t7XFxzPyhbXnt9XFxzXSopXFxzP319L2c7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgVHJhbnNsYXRlRGVmYXVsdFBhcnNlci5wcm90b3R5cGUuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiAoZXhwciwgcGFyYW1zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0eXBlb2YgZXhwciAhPT0gJ3N0cmluZycgfHwgIXBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cHIucmVwbGFjZSh0aGlzLnRlbXBsYXRlTWF0Y2hlciwgZnVuY3Rpb24gKHN1YnN0cmluZywgYikge1xuICAgICAgICAgICAgdmFyIHIgPSBfdGhpcy5nZXRWYWx1ZShwYXJhbXMsIGIpO1xuICAgICAgICAgICAgcmV0dXJuIGlzRGVmaW5lZChyKSA/IHIgOiBzdWJzdHJpbmc7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVHJhbnNsYXRlRGVmYXVsdFBhcnNlci5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgdmFyIGtleXMgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgICAga2V5ID0gJyc7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGtleSArPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAoaXNEZWZpbmVkKHRhcmdldCkgJiYgaXNEZWZpbmVkKHRhcmdldFtrZXldKSAmJiAodHlwZW9mIHRhcmdldFtrZXldID09PSAnb2JqZWN0JyB8fCAha2V5cy5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0W2tleV07XG4gICAgICAgICAgICAgICAga2V5ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgha2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZXkgKz0gJy4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChrZXlzLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNsYXRlRGVmYXVsdFBhcnNlcjtcbn0oVHJhbnNsYXRlUGFyc2VyKSk7XG5leHBvcnQgeyBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyIH07XG5UcmFuc2xhdGVEZWZhdWx0UGFyc2VyLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5UcmFuc2xhdGVEZWZhdWx0UGFyc2VyLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vQG5neC10cmFuc2xhdGUvY29yZS9zcmMvdHJhbnNsYXRlLnBhcnNlci5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFJlcHJlc2VudHMgYSBibG9nIHBvc3QgZnJvbSBcbiAqIGh0dHBzOi8vYmxvZy50b29sd2F0Y2guaW8vXG4gKi9cbmV4cG9ydCBjbGFzcyBCbG9nUG9zdCB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRhdGU6IERhdGU7XG4gICAgZXhjZXJwdDogc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0gaWQgXG4gICAgICogQHBhcmFtIHRpdGxlIFxuICAgICAqIEBwYXJhbSBkYXRlIFxuICAgICAqIEBwYXJhbSBleGNlcnB0IFxuICAgICAqIEBwYXJhbSB1cmwgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgdGl0bGU6IHN0cmluZywgZGF0ZTogRGF0ZSwgZXhjZXJwdDogc3RyaW5nLCB1cmw6IHN0cmluZykge1xuXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMuZGVjb2RlSFRNTEVudGl0aWVzKHRpdGxlKTtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5leGNlcnB0ID0gdGhpcy5kZWNvZGVIVE1MRW50aXRpZXMoZXhjZXJwdCk7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRvU3RyaW5nXG4gICAgICovXG4gICAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiB7XG4gICAgICAgIHJldHVybiBgQmxvZ1Bvc3QgKGlkOiAke3RoaXMuaWR9LFxuICAgICAgICAgICAgICAgIHRpdGxlOiAke3RoaXMudGl0bGV9LFxuICAgICAgICAgICAgICAgIGRhdGU6ICR7dGhpcy5kYXRlfSxcbiAgICAgICAgICAgICAgICBleGNlcnB0OiAke3RoaXMuZXhjZXJwdH0sXG4gICAgICAgICAgICAgICAgdXJsOiAke3RoaXMudXJsfSlgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYSBzdHJpbmcgaW50byBhIGh0bWwgY2xlYW5lZCBzdHJpbmdcbiAgICAgKiBAcGFyYW0gc3RyXG4gICAgICovXG4gICAgcHJpdmF0ZSBkZWNvZGVIVE1MRW50aXRpZXMoc3RyOiBzdHJpbmcpIHtcblxuICAgICAgICB2YXIgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgvPHNjcmlwdFtePl0qPihbXFxTXFxzXSo/KTxcXC9zY3JpcHQ+L2dtaSwgJycpO1xuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgvPFxcLz9cXHcoPzpbXlwiJz5dfFwiW15cIl0qXCJ8J1teJ10qJykqPi9nbWksICcnKTtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoJ1tSZWFkIG1vcmXigKZdJywgJycpO1xuICAgICAgICB0eHQuaW5uZXJIVE1MID0gc3RyO1xuXG4gICAgICAgIHJldHVybiB0eHQudmFsdWU7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21vZGVscy9ibG9nLXBvc3QubW9kZWwudHMiLCJpbXBvcnQgeyBXYXRjaCB9IGZyb20gJy4vd2F0Y2gubW9kZWwnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBUdyB1c2VyXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgICBpZDpudW1iZXI7XG4gICAgZW1haWw6c3RyaW5nO1xuICAgIG5hbWU6c3RyaW5nO1xuICAgIGxhc3RuYW1lOnN0cmluZztcbiAgICBjb3VudHJ5OnN0cmluZztcbiAgICByZWdpc3RlckRhdGU6c3RyaW5nOyBcbiAgICBrZXk6c3RyaW5nO1xuICAgIHdhdGNoZXM6V2F0Y2hbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIGlkIFxuICAgICAqIEBwYXJhbSBlbWFpbCBcbiAgICAgKiBAcGFyYW0gbmFtZSBcbiAgICAgKiBAcGFyYW0gbGFzdG5hbWUgXG4gICAgICogQHBhcmFtIGNvdW50cnkgXG4gICAgICogQHBhcmFtIHJlZ2lzdGVyRGF0ZSBcbiAgICAgKiBAcGFyYW0ga2V5IFxuICAgICAqIEBwYXJhbSB3YXRjaGVzIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBpZDogbnVtYmVyLFxuICAgICAgICBlbWFpbDogc3RyaW5nLFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGxhc3RuYW1lOiBzdHJpbmcsXG4gICAgICAgIGNvdW50cnk6IHN0cmluZyxcbiAgICAgICAgcmVnaXN0ZXJEYXRlOiBzdHJpbmcsXG4gICAgICAgIGtleTogc3RyaW5nLFxuICAgICAgICB3YXRjaGVzOiBXYXRjaFtdKSB7XG5cbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmVtYWlsID0gZW1haWw7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGFzdG5hbWUgPSBsYXN0bmFtZTtcbiAgICAgICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckRhdGUgPSByZWdpc3RlckRhdGU7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLndhdGNoZXMgPSB3YXRjaGVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBvciB1cGRhdGUgYSB3YXRjaCBkZXBlbmRpbmcgb24gdGhlIHByZXNlbmNlIG9mXG4gICAgICogYSB3YXRjaCB3aXRoIHRoZSBzYW1lIElELlxuICAgICAqIElEcyBhcmUgdW5pcS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gd2F0Y2ggXG4gICAgICovXG4gICAgdXBzZXJ0V2F0Y2god2F0Y2g6V2F0Y2gpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLndhdGNoZXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgaWYodGhpcy53YXRjaGVzW2ldLmlkID09PSB3YXRjaC5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMud2F0Y2hlc1tpXSA9IHdhdGNoO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2F0Y2hlcy5wdXNoKHdhdGNoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGFuIHVzZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9TdHJpbmcgPSAoKSA6IHN0cmluZyA9PiB7XG5cbiAgICAgICAgcmV0dXJuIGBVc2VyIChcbiAgICAgICAgICAgIGlkOiAke3RoaXMuaWR9LCBcbiAgICAgICAgICAgIGVtYWlsOiAke3RoaXMuZW1haWx9LCBcbiAgICAgICAgICAgIG5hbWU6ICR7dGhpcy5uYW1lfSwgXG4gICAgICAgICAgICBsYXN0bmFtZTogJHt0aGlzLmxhc3RuYW1lfSwgXG4gICAgICAgICAgICBjb3VudHJ5OiAke3RoaXMuY291bnRyeX0sIFxuICAgICAgICAgICAgcmVnaXN0ZXJEYXRlOiAke3RoaXMucmVnaXN0ZXJEYXRlfSwgXG4gICAgICAgICAgICBrZXk6ICR7dGhpcy5rZXl9LCBcbiAgICAgICAgICAgIHdhdGNoZXM6ICR7dGhpcy53YXRjaGVzfSlgO1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tb2RlbHMvdXNlci5tb2RlbC50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZXF1YWxzLCBpc0RlZmluZWQgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRlLnNlcnZpY2UnO1xudmFyIFRyYW5zbGF0ZURpcmVjdGl2ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHJhbnNsYXRlRGlyZWN0aXZlKHRyYW5zbGF0ZVNlcnZpY2UsIGVsZW1lbnQsIF9yZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlID0gdHJhbnNsYXRlU2VydmljZTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5fcmVmID0gX3JlZjtcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIG9uVHJhbnNsYXRpb25DaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIHRyYW5zbGF0aW9ucyBvZiB0aGUgY3VycmVudCBsYW5nIGNoYW5nZVxuICAgICAgICBpZiAoIXRoaXMub25UcmFuc2xhdGlvbkNoYW5nZVN1Yikge1xuICAgICAgICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlU3ViID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5sYW5nID09PSBfdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNoZWNrTm9kZXModHJ1ZSwgZXZlbnQudHJhbnNsYXRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gb25MYW5nQ2hhbmdlIGV2ZW50LCBpbiBjYXNlIHRoZSBsYW5ndWFnZSBjaGFuZ2VzXG4gICAgICAgIGlmICghdGhpcy5vbkxhbmdDaGFuZ2VTdWIpIHtcbiAgICAgICAgICAgIHRoaXMub25MYW5nQ2hhbmdlU3ViID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2hlY2tOb2Rlcyh0cnVlLCBldmVudC50cmFuc2xhdGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIG9uRGVmYXVsdExhbmdDaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UgY2hhbmdlc1xuICAgICAgICBpZiAoIXRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZVN1Yikge1xuICAgICAgICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlU3ViID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uRGVmYXVsdExhbmdDaGFuZ2Uuc3Vic2NyaWJlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNoZWNrTm9kZXModHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNsYXRlRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ0cmFuc2xhdGVcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTm9kZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zbGF0ZURpcmVjdGl2ZS5wcm90b3R5cGUsIFwidHJhbnNsYXRlUGFyYW1zXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAoIWVxdWFscyh0aGlzLmN1cnJlbnRQYXJhbXMsIHBhcmFtcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja05vZGVzKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBUcmFuc2xhdGVEaXJlY3RpdmUucHJvdG90eXBlLm5nQWZ0ZXJWaWV3Q2hlY2tlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jaGVja05vZGVzKCk7XG4gICAgfTtcbiAgICBUcmFuc2xhdGVEaXJlY3RpdmUucHJvdG90eXBlLmNoZWNrTm9kZXMgPSBmdW5jdGlvbiAoZm9yY2VVcGRhdGUsIHRyYW5zbGF0aW9ucykge1xuICAgICAgICBpZiAoZm9yY2VVcGRhdGUgPT09IHZvaWQgMCkgeyBmb3JjZVVwZGF0ZSA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBub2RlcyA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXM7XG4gICAgICAgIC8vIGlmIHRoZSBlbGVtZW50IGlzIGVtcHR5XG4gICAgICAgIGlmICghbm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyB3ZSBhZGQgdGhlIGtleSBhcyBjb250ZW50XG4gICAgICAgICAgICB0aGlzLnNldENvbnRlbnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMua2V5KTtcbiAgICAgICAgICAgIG5vZGVzID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGROb2RlcztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmtleSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLmtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcmNlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmxhc3RLZXkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudChub2RlKS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2Ugd2FudCB0byB1c2UgdGhlIGNvbnRlbnQgYXMgYSBrZXksIG5vdCB0aGUgdHJhbnNsYXRpb24gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50ICE9PSBub2RlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGNvbnRlbnQgd2FzIGNoYW5nZWQgZnJvbSB0aGUgdXNlciwgd2UnbGwgdXNlIGl0IGFzIGEgcmVmZXJlbmNlIGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUub3JpZ2luYWxDb250ZW50ID0gdGhpcy5nZXRDb250ZW50KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5vcmlnaW5hbENvbnRlbnQgJiYgZm9yY2VVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmxhc3RLZXkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IGNvbnRlbnQgaXMgdGhlIHRyYW5zbGF0aW9uLCBub3QgdGhlIGtleSwgdXNlIHRoZSBsYXN0IHJlYWwgY29udGVudCBhcyBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBub2RlLm9yaWdpbmFsQ29udGVudC50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShrZXksIG5vZGUsIHRyYW5zbGF0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRyYW5zbGF0ZURpcmVjdGl2ZS5wcm90b3R5cGUudXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoa2V5LCBub2RlLCB0cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubGFzdEtleSA9PT0ga2V5ICYmIHRoaXMubGFzdFBhcmFtcyA9PT0gdGhpcy5jdXJyZW50UGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXN0UGFyYW1zID0gdGhpcy5jdXJyZW50UGFyYW1zO1xuICAgICAgICAgICAgdmFyIG9uVHJhbnNsYXRpb24gPSBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcyAhPT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGFzdEtleSA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLm9yaWdpbmFsQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLm9yaWdpbmFsQ29udGVudCA9IF90aGlzLmdldENvbnRlbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUuY3VycmVudFZhbHVlID0gaXNEZWZpbmVkKHJlcykgPyByZXMgOiAobm9kZS5vcmlnaW5hbENvbnRlbnQgfHwga2V5KTtcbiAgICAgICAgICAgICAgICAvLyB3ZSByZXBsYWNlIGluIHRoZSBvcmlnaW5hbCBjb250ZW50IHRvIHByZXNlcnZlIHNwYWNlcyB0aGF0IHdlIG1pZ2h0IGhhdmUgdHJpbW1lZFxuICAgICAgICAgICAgICAgIF90aGlzLnNldENvbnRlbnQobm9kZSwgX3RoaXMua2V5ID8gbm9kZS5jdXJyZW50VmFsdWUgOiBub2RlLm9yaWdpbmFsQ29udGVudC5yZXBsYWNlKGtleSwgbm9kZS5jdXJyZW50VmFsdWUpKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpc0RlZmluZWQodHJhbnNsYXRpb25zKSkge1xuICAgICAgICAgICAgICAgIHZhciByZXMgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0UGFyc2VkUmVzdWx0KHRyYW5zbGF0aW9ucywga2V5LCB0aGlzLmN1cnJlbnRQYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdWJzY3JpYmUob25UcmFuc2xhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvblRyYW5zbGF0aW9uKHJlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldChrZXksIHRoaXMuY3VycmVudFBhcmFtcykuc3Vic2NyaWJlKG9uVHJhbnNsYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBUcmFuc2xhdGVEaXJlY3RpdmUucHJvdG90eXBlLmdldENvbnRlbnQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gaXNEZWZpbmVkKG5vZGUudGV4dENvbnRlbnQpID8gbm9kZS50ZXh0Q29udGVudCA6IG5vZGUuZGF0YTtcbiAgICB9O1xuICAgIFRyYW5zbGF0ZURpcmVjdGl2ZS5wcm90b3R5cGUuc2V0Q29udGVudCA9IGZ1bmN0aW9uIChub2RlLCBjb250ZW50KSB7XG4gICAgICAgIGlmIChpc0RlZmluZWQobm9kZS50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5kYXRhID0gY29udGVudDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJhbnNsYXRlRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub25MYW5nQ2hhbmdlU3ViKSB7XG4gICAgICAgICAgICB0aGlzLm9uTGFuZ0NoYW5nZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2VTdWIpIHtcbiAgICAgICAgICAgIHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2VTdWIpIHtcbiAgICAgICAgICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNsYXRlRGlyZWN0aXZlO1xufSgpKTtcbmV4cG9ydCB7IFRyYW5zbGF0ZURpcmVjdGl2ZSB9O1xuVHJhbnNsYXRlRGlyZWN0aXZlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdbdHJhbnNsYXRlXSxbbmd4LXRyYW5zbGF0ZV0nXG4gICAgICAgICAgICB9LF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cblRyYW5zbGF0ZURpcmVjdGl2ZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICB7IHR5cGU6IFRyYW5zbGF0ZVNlcnZpY2UsIH0sXG4gICAgeyB0eXBlOiBFbGVtZW50UmVmLCB9LFxuICAgIHsgdHlwZTogQ2hhbmdlRGV0ZWN0b3JSZWYsIH0sXG5dOyB9O1xuVHJhbnNsYXRlRGlyZWN0aXZlLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICd0cmFuc2xhdGUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ3RyYW5zbGF0ZVBhcmFtcyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vQG5neC10cmFuc2xhdGUvY29yZS9zcmMvdHJhbnNsYXRlLmRpcmVjdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUGlwZSwgSW5qZWN0YWJsZSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IGVxdWFscywgaXNEZWZpbmVkIH0gZnJvbSAnLi91dGlsJztcbnZhciBUcmFuc2xhdGVQaXBlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVQaXBlKHRyYW5zbGF0ZSwgX3JlZikge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IHRyYW5zbGF0ZTtcbiAgICAgICAgdGhpcy5fcmVmID0gX3JlZjtcbiAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBUcmFuc2xhdGVQaXBlLnByb3RvdHlwZS51cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uIChrZXksIGludGVycG9sYXRlUGFyYW1zLCB0cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG9uVHJhbnNsYXRpb24gPSBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBfdGhpcy52YWx1ZSA9IHJlcyAhPT0gdW5kZWZpbmVkID8gcmVzIDoga2V5O1xuICAgICAgICAgICAgX3RoaXMubGFzdEtleSA9IGtleTtcbiAgICAgICAgICAgIF90aGlzLl9yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciByZXMgPSB0aGlzLnRyYW5zbGF0ZS5nZXRQYXJzZWRSZXN1bHQodHJhbnNsYXRpb25zLCBrZXksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzLnN1YnNjcmliZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJlcy5zdWJzY3JpYmUob25UcmFuc2xhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvblRyYW5zbGF0aW9uKHJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpLnN1YnNjcmliZShvblRyYW5zbGF0aW9uKTtcbiAgICB9O1xuICAgIFRyYW5zbGF0ZVBpcGUucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXF1ZXJ5IHx8IHF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHdlIGFzayBhbm90aGVyIHRpbWUgZm9yIHRoZSBzYW1lIGtleSwgcmV0dXJuIHRoZSBsYXN0IHZhbHVlXG4gICAgICAgIGlmIChlcXVhbHMocXVlcnksIHRoaXMubGFzdEtleSkgJiYgZXF1YWxzKGFyZ3MsIHRoaXMubGFzdFBhcmFtcykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbnRlcnBvbGF0ZVBhcmFtcztcbiAgICAgICAgaWYgKGlzRGVmaW5lZChhcmdzWzBdKSAmJiBhcmdzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyAmJiBhcmdzWzBdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIHdlIGFjY2VwdCBvYmplY3RzIHdyaXR0ZW4gaW4gdGhlIHRlbXBsYXRlIHN1Y2ggYXMge246MX0sIHsnbic6MX0sIHtuOid2J31cbiAgICAgICAgICAgICAgICAvLyB3aGljaCBpcyB3aHkgd2UgbWlnaHQgbmVlZCB0byBjaGFuZ2UgaXQgdG8gcmVhbCBKU09OIG9iamVjdHMgc3VjaCBhcyB7XCJuXCI6MX0gb3Ige1wiblwiOlwidlwifVxuICAgICAgICAgICAgICAgIHZhciB2YWxpZEFyZ3MgPSBhcmdzWzBdXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXFwnKT8oW2EtekEtWjAtOV9dKykoXFwnKT8oXFxzKT86L2csICdcIiQyXCI6JylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLzooXFxzKT8oXFwnKSguKj8pKFxcJykvZywgJzpcIiQzXCInKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZVBhcmFtcyA9IEpTT04ucGFyc2UodmFsaWRBcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiV3JvbmcgcGFyYW1ldGVyIGluIFRyYW5zbGF0ZVBpcGUuIEV4cGVjdGVkIGEgdmFsaWQgT2JqZWN0LCByZWNlaXZlZDogXCIgKyBhcmdzWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoYXJnc1swXSkpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZVBhcmFtcyA9IGFyZ3NbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3RvcmUgdGhlIHF1ZXJ5LCBpbiBjYXNlIGl0IGNoYW5nZXNcbiAgICAgICAgdGhpcy5sYXN0S2V5ID0gcXVlcnk7XG4gICAgICAgIC8vIHN0b3JlIHRoZSBwYXJhbXMsIGluIGNhc2UgdGhleSBjaGFuZ2VcbiAgICAgICAgdGhpcy5sYXN0UGFyYW1zID0gYXJncztcbiAgICAgICAgLy8gc2V0IHRoZSB2YWx1ZVxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHF1ZXJ5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgc3Vic2NyaXB0aW9uIHRvIG9uTGFuZ0NoYW5nZSwgY2xlYW4gaXRcbiAgICAgICAgdGhpcy5fZGlzcG9zZSgpO1xuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gb25UcmFuc2xhdGlvbkNoYW5nZSBldmVudCwgaW4gY2FzZSB0aGUgdHJhbnNsYXRpb25zIGNoYW5nZVxuICAgICAgICBpZiAoIXRoaXMub25UcmFuc2xhdGlvbkNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlID0gdGhpcy50cmFuc2xhdGUub25UcmFuc2xhdGlvbkNoYW5nZS5zdWJzY3JpYmUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmxhc3RLZXkgJiYgZXZlbnQubGFuZyA9PT0gX3RoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxhc3RLZXkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVWYWx1ZShxdWVyeSwgaW50ZXJwb2xhdGVQYXJhbXMsIGV2ZW50LnRyYW5zbGF0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIG9uTGFuZ0NoYW5nZSBldmVudCwgaW4gY2FzZSB0aGUgbGFuZ3VhZ2UgY2hhbmdlc1xuICAgICAgICBpZiAoIXRoaXMub25MYW5nQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLm9uTGFuZ0NoYW5nZSA9IHRoaXMudHJhbnNsYXRlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmxhc3RLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGFzdEtleSA9IG51bGw7IC8vIHdlIHdhbnQgdG8gbWFrZSBzdXJlIGl0IGRvZXNuJ3QgcmV0dXJuIHRoZSBzYW1lIHZhbHVlIHVudGlsIGl0J3MgYmVlbiB1cGRhdGVkXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVZhbHVlKHF1ZXJ5LCBpbnRlcnBvbGF0ZVBhcmFtcywgZXZlbnQudHJhbnNsYXRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gb25EZWZhdWx0TGFuZ0NoYW5nZSBldmVudCwgaW4gY2FzZSB0aGUgZGVmYXVsdCBsYW5ndWFnZSBjaGFuZ2VzXG4gICAgICAgIGlmICghdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2UgPSB0aGlzLnRyYW5zbGF0ZS5vbkRlZmF1bHRMYW5nQ2hhbmdlLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmxhc3RLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGFzdEtleSA9IG51bGw7IC8vIHdlIHdhbnQgdG8gbWFrZSBzdXJlIGl0IGRvZXNuJ3QgcmV0dXJuIHRoZSBzYW1lIHZhbHVlIHVudGlsIGl0J3MgYmVlbiB1cGRhdGVkXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVZhbHVlKHF1ZXJ5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbGVhbiBhbnkgZXhpc3Rpbmcgc3Vic2NyaXB0aW9uIHRvIGNoYW5nZSBldmVudHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZVBpcGUucHJvdG90eXBlLl9kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZS51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vbkxhbmdDaGFuZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLm9uTGFuZ0NoYW5nZS51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5vbkxhbmdDaGFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2UudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJhbnNsYXRlUGlwZS5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2UoKTtcbiAgICB9O1xuICAgIHJldHVybiBUcmFuc2xhdGVQaXBlO1xufSgpKTtcbmV4cG9ydCB7IFRyYW5zbGF0ZVBpcGUgfTtcblRyYW5zbGF0ZVBpcGUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbiAgICB7IHR5cGU6IFBpcGUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3RyYW5zbGF0ZScsXG4gICAgICAgICAgICAgICAgcHVyZTogZmFsc2UgLy8gcmVxdWlyZWQgdG8gdXBkYXRlIHRoZSB2YWx1ZSB3aGVuIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkXG4gICAgICAgICAgICB9LF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cblRyYW5zbGF0ZVBpcGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBUcmFuc2xhdGVTZXJ2aWNlLCB9LFxuICAgIHsgdHlwZTogQ2hhbmdlRGV0ZWN0b3JSZWYsIH0sXG5dOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L0BuZ3gtdHJhbnNsYXRlL2NvcmUvc3JjL3RyYW5zbGF0ZS5waXBlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xudmFyIFRyYW5zbGF0ZVN0b3JlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVTdG9yZSgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBsYW5nIGN1cnJlbnRseSB1c2VkXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmN1cnJlbnRMYW5nID0gdGhpcy5kZWZhdWx0TGFuZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGEgbGlzdCBvZiB0cmFuc2xhdGlvbnMgcGVyIGxhbmdcbiAgICAgICAgICogQHR5cGUge3t9fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbnMgPSB7fTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFuIGFycmF5IG9mIGxhbmdzXG4gICAgICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubGFuZ3MgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gdHJhbnNsYXRpb24gY2hhbmdlIGV2ZW50c1xuICAgICAgICAgKiBvblRyYW5zbGF0aW9uQ2hhbmdlLnN1YnNjcmliZSgocGFyYW1zOiBUcmFuc2xhdGlvbkNoYW5nZUV2ZW50KSA9PiB7XG4gICAgICAgICAqICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8VHJhbnNsYXRpb25DaGFuZ2VFdmVudD59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBFdmVudEVtaXR0ZXIgdG8gbGlzdGVuIHRvIGxhbmcgY2hhbmdlIGV2ZW50c1xuICAgICAgICAgKiBvbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPExhbmdDaGFuZ2VFdmVudD59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uTGFuZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gZGVmYXVsdCBsYW5nIGNoYW5nZSBldmVudHNcbiAgICAgICAgICogb25EZWZhdWx0TGFuZ0NoYW5nZS5zdWJzY3JpYmUoKHBhcmFtczogRGVmYXVsdExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQ+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIH1cbiAgICByZXR1cm4gVHJhbnNsYXRlU3RvcmU7XG59KCkpO1xuZXhwb3J0IHsgVHJhbnNsYXRlU3RvcmUgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy90cmFuc2xhdGUuc3RvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRpb25SZXN1bHQge1xuIFtrZXk6c3RyaW5nXTpib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgR2xvYmFsVmFsaWRhdG9yIHtcblxuICAgIHN0YXRpYyBtYWlsRm9ybWF0KGNvbnRyb2w6IEZvcm1Db250cm9sKTogVmFsaWRhdGlvblJlc3VsdCB7XG5cbiAgICAgICAgdmFyIEVNQUlMX1JFR0VYUCA9IC9eW2EtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykqJC9pO1xuXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlICE9PSBcIlwiICYmIChjb250cm9sLnZhbHVlLmxlbmd0aCA8PSA1IHx8ICFFTUFJTF9SRUdFWFAudGVzdChjb250cm9sLnZhbHVlKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IFwiaW5jb3JyZWN0TWFpbEZvcm1hdFwiOiB0cnVlIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2RpcmVjdGl2ZXMvZ2xvYmFsLXZhbGlkYXRvci50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yOF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9PYnNlcnZhYmxlXCJcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQXJldGhtZXRpY1NpZ25QaXBlTW9kdWxlIH0gZnJvbSAnLi9zcmMvcGlwZXMvYXJldGhtZXRpYy1zaWduLnBpcGUnO1xuaW1wb3J0IHsgTGVhZGluZ1plcm9QaXBlTW9kdWxlIH0gZnJvbSAnLi9zcmMvcGlwZXMvbGVhZGluZy16ZXJvLnBpcGUnO1xuaW1wb3J0IHsgS0Zvcm1hdHRlclBpcGVNb2R1bGUgfSBmcm9tICcuL3NyYy9waXBlcy9rLWZvcm1hdHRlci5waXBlJztcbmltcG9ydCB7IE1vb25QaGFzZXNDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL3NyYy9kaXJlY3RpdmVzL2Nsb2NrL21vb24tcGhhc2VzL21vb24tcGhhc2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUd0FQSVNlcnZpY2UgfSBmcm9tICcuL3NyYy9zZXJ2aWNlcy90d2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zcmMvc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFdhdGNoQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9zcmMvZGlyZWN0aXZlcy93YXRjaC93YXRjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9zcmMvZGlyZWN0aXZlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vc3JjL2RpcmVjdGl2ZXMvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IENsb2NrQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9zcmMvZGlyZWN0aXZlcy9jbG9jay9jbG9jay5jb21wb25lbnQnO1xuXG4vKipcbiAqIFNFUlZJQ0VTXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vc3JjL3NlcnZpY2VzL3R3YXBpLnNlcnZpY2UnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9zZXJ2aWNlcy9hbmFseXRpY3Muc2VydmljZSdcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSdcbi8qKlxuICogUElQRVNcbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvcGlwZXMvYXJldGhtZXRpYy1zaWduLnBpcGUnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9waXBlcy9sZWFkaW5nLXplcm8ucGlwZSdcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3BpcGVzL2stZm9ybWF0dGVyLnBpcGUnXG4vKipcbiAqIE1PREVMXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vc3JjL21vZGVscy93YXRjaC5tb2RlbCdcbmV4cG9ydCAqIGZyb20gJy4vc3JjL21vZGVscy91c2VyLm1vZGVsJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvbW9kZWxzL21lYXN1cmUubW9kZWwnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9tb2RlbHMvYmxvZy1wb3N0Lm1vZGVsJ1xuLyoqXG4gKiBESVJFQ1RJVkVTXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RpcmVjdGl2ZXMvY2xvY2svY2xvY2suY29tcG9uZW50J1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZGlyZWN0aXZlcy9jbG9jay9tb29uLXBoYXNlcy9tb29uLXBoYXNlcy5jb21wb25lbnQnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kaXJlY3RpdmVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudCdcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RpcmVjdGl2ZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kaXJlY3RpdmVzL3dhdGNoL3dhdGNoLmNvbXBvbmVudCdcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgVHdBUElTZXJ2aWNlLFxuICAgIENvbmZpZ3VyYXRpb25TZXJ2aWNlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgICAgIEFyZXRobWV0aWNTaWduUGlwZU1vZHVsZSxcbiAgICBMZWFkaW5nWmVyb1BpcGVNb2R1bGUsXG4gICAgS0Zvcm1hdHRlclBpcGVNb2R1bGUsXG4gICAgTW9vblBoYXNlc0NvbXBvbmVudE1vZHVsZSxcbiAgICBXYXRjaENvbXBvbmVudE1vZHVsZSxcbiAgICBTaWdudXBDb21wb25lbnRNb2R1bGUsXG4gICAgTG9naW5Db21wb25lbnRNb2R1bGUsXG4gICAgQ2xvY2tDb21wb25lbnRNb2R1bGVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgSHR0cE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcblxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFR3Q29yZU1vZHVsZSB7XG59IFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL2luZGV4LnRzIiwiZXhwb3J0IGNsYXNzIFN0cmluZ0hlbHBlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsZXZlbnNodGVpbihhOnN0cmluZywgYjpzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIWEgfHwgIWIpIHtyZXR1cm4gKGEgfHwgYikubGVuZ3RoO31cclxuICAgICAgICB2YXIgbSA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPD0gYi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBtW2ldID0gW2ldO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge2NvbnRpbnVlO307XHJcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPD0gYS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbVswXVtqXSA9IGo7XHJcbiAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMCkge2NvbnRpbnVlO31cclxuICAgICAgICAgICAgICAgIG1baV1bal0gPSBiLmNoYXJBdChpIC0gMSkgPT09IGEuY2hhckF0KGogLSAxKSA/IG1baSAtIDFdW2ogLSAxXSA6IE1hdGgubWluKFxyXG4gICAgICAgICAgICAgICAgICAgIG1baS0xXVtqLTFdICsgMSxcclxuICAgICAgICAgICAgICAgICAgICBtW2ldW2otMV0gKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG1baS0xXVtqXSArIDFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1bYi5sZW5ndGhdW2EubGVuZ3RoXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlcGxhY2VBbGwodGFyZ2V0OnN0cmluZywgc2VhcmNoOnN0cmluZywgcmVwbGFjZW1lbnQ6c3RyaW5nKTpzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQuc3BsaXQoc2VhcmNoKS5qb2luKHJlcGxhY2VtZW50KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9oZWxwZXJzL3N0cmluZy5oZWxwZXIudHMiLCJpbXBvcnQgeyBVc2VyLCB9IGZyb20gJy4vdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBXYXRjaCB9IGZyb20gJy4vd2F0Y2gubW9kZWwnO1xuaW1wb3J0IHsgQmxvZ1Bvc3QgfSBmcm9tICcuL2Jsb2ctcG9zdC5tb2RlbCc7XG5pbXBvcnQgeyBNZWFzdXJlIH0gZnJvbSAnLi9tZWFzdXJlLm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIE1vZGVsRmFjdG9yeSB7XG5cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhbiBVc2VyIGZyb20ganNvbiByZXNwb25zZVxuICAgICAqIEBwYXJhbSAge2FueX0gIGpzb25Vc2VyXG4gICAgICogQHJldHVybiB7VXNlcn0gICAgICAgICBcbiAgICAgKi9cbiAgICBzdGF0aWMgYnVpbGRVc2VyKGpzb25Vc2VyOiBhbnkpOiBVc2VyIHtcblxuICAgICAgICByZXR1cm4gbmV3IFVzZXIoXG4gICAgICAgICAgICBqc29uVXNlci51c2VySWQsXG4gICAgICAgICAgICBqc29uVXNlci5lbWFpbCxcbiAgICAgICAgICAgIGpzb25Vc2VyLmZpcnN0bmFtZSxcbiAgICAgICAgICAgIGpzb25Vc2VyLm5hbWUsXG4gICAgICAgICAgICBqc29uVXNlci5jb3VudHJ5LFxuICAgICAgICAgICAganNvblVzZXIucmVnaXN0ZXJEYXRlLFxuICAgICAgICAgICAganNvblVzZXIua2V5LFxuICAgICAgICAgICAgTW9kZWxGYWN0b3J5LmJ1aWxkV2F0Y2hlcyhqc29uVXNlci53YXRjaGVzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIE9uZSBXYXRjaCBmcm9tIEpTT05cbiAgICAgKiBAcGFyYW0ganNvbldhdGNoIFxuICAgICAqL1xuICAgIHN0YXRpYyBidWlsZFdhdGNoRnJvbUpTT04oanNvbldhdGNoOiBhbnkpOiBXYXRjaCB7XG4gICAgICAgIHJldHVybiBuZXcgV2F0Y2goXG4gICAgICAgICAgICBqc29uV2F0Y2gud2F0Y2hJZCxcbiAgICAgICAgICAgIGpzb25XYXRjaC5icmFuZCxcbiAgICAgICAgICAgIGpzb25XYXRjaC5oaXN0b3J5U2l6ZSxcbiAgICAgICAgICAgIGpzb25XYXRjaC5tZWFzdXJlcy5tYXAoTW9kZWxGYWN0b3J5LmJ1aWxkTWVhc3VyZUZyb21KU09OKSxcbiAgICAgICAgICAgIGpzb25XYXRjaC5uYW1lLFxuICAgICAgICAgICAganNvbldhdGNoLnllYXJPZkJ1eSxcbiAgICAgICAgICAgIGpzb25XYXRjaC5zZXJpYWwsXG4gICAgICAgICAgICBqc29uV2F0Y2guY2FsaWJlclxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIG9uZSBtZWFzdXJlIGZyb20gIEpTT05cbiAgICAgKiBAcGFyYW0ganNvbk1lYXN1cmUgXG4gICAgICovXG4gICAgc3RhdGljIGJ1aWxkTWVhc3VyZUZyb21KU09OKGpzb25NZWFzdXJlOiBhbnkpOiBNZWFzdXJlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNZWFzdXJlKFxuICAgICAgICAgICAganNvbk1lYXN1cmUuaWQsXG4gICAgICAgICAgICBqc29uTWVhc3VyZS5tZWFzdXJlVXNlclRpbWUsXG4gICAgICAgICAgICBqc29uTWVhc3VyZS5tZWFzdXJlUmVmZXJlbmNlVGltZSxcbiAgICAgICAgICAgIGpzb25NZWFzdXJlLnN0YXR1c0lkLFxuICAgICAgICAgICAganNvbk1lYXN1cmUuYWNjdXJhY3lVc2VyVGltZSxcbiAgICAgICAgICAgIGpzb25NZWFzdXJlLmFjY3VyYWN5UmVmZXJlbmNlVGltZSxcbiAgICAgICAgICAgIGpzb25NZWFzdXJlLmFjY3VyYWN5LFxuICAgICAgICAgICAganNvbk1lYXN1cmUuYWNjdXJhY3lBZ2UsXG4gICAgICAgICAgICBqc29uTWVhc3VyZS5wZXJjZW50aWxlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBhIGJsb2cgcG9zdCBmcm9tIEpTT05cbiAgICAgKiBAcGFyYW0ganNvblBvc3QgXG4gICAgICovXG4gICAgc3RhdGljIGJ1aWxkQmxvZ1Bvc3RGcm9tSlNPTihqc29uUG9zdDogYW55KTogQmxvZ1Bvc3Qge1xuICAgICAgICByZXR1cm4gbmV3IEJsb2dQb3N0KFxuICAgICAgICAgICAganNvblBvc3QuaWQsXG4gICAgICAgICAgICBqc29uUG9zdC50aXRsZSxcbiAgICAgICAgICAgIG5ldyBEYXRlKGpzb25Qb3N0LmRhdGUpLFxuICAgICAgICAgICAganNvblBvc3QuZXhjZXJwdCxcbiAgICAgICAgICAgIGpzb25Qb3N0LnVybFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhIHdhdGNoIGZyb20ganNvbiByZXNwb25zZVxuICAgICAqIEBwYXJhbSAge2FueX0gICAgIGpzb25XYXRjaGVzXG4gICAgICogQHJldHVybiB7V2F0Y2hbXX0gICAgICAgICAgICBcbiAgICAgKi9cbiAgICBzdGF0aWMgYnVpbGRXYXRjaGVzKGpzb25XYXRjaGVzOiBhbnkpOiBXYXRjaFtdIHtcbiAgICAgICAgcmV0dXJuIGpzb25XYXRjaGVzLm1hcChNb2RlbEZhY3RvcnkuYnVpbGRXYXRjaEZyb21KU09OKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgSnNvbiBwb3N0IGZyb20ganNvbiByZXNwb25zZVxuICAgICAqIEBwYXJhbSAge2FueX0gICAgICAgIGpzb25Qb3N0cyBbZGVzY3JpcHRpb25dXG4gICAgICogQHJldHVybiB7QmxvZ1Bvc3RbXX0gICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBzdGF0aWMgYnVpbGRQb3N0cyhqc29uUG9zdHM6IGFueSk6IEJsb2dQb3N0W10ge1xuICAgICAgICByZXR1cm4ganNvblBvc3RzLnBvc3RzLm1hcChNb2RlbEZhY3RvcnkuYnVpbGRCbG9nUG9zdEZyb21KU09OKTtcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbW9kZWxzL21vZGVsLmZhY3RvcnkudHMiLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuMlxuKGZ1bmN0aW9uKCkge1xuICB2YXIgZ2V0TmFub1NlY29uZHMsIGhydGltZSwgbG9hZFRpbWUsIG1vZHVsZUxvYWRUaW1lLCBub2RlTG9hZFRpbWUsIHVwVGltZTtcblxuICBpZiAoKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwZXJmb3JtYW5jZSAhPT0gbnVsbCkgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzICE9PSBudWxsKSAmJiBwcm9jZXNzLmhydGltZSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKGdldE5hbm9TZWNvbmRzKCkgLSBub2RlTG9hZFRpbWUpIC8gMWU2O1xuICAgIH07XG4gICAgaHJ0aW1lID0gcHJvY2Vzcy5ocnRpbWU7XG4gICAgZ2V0TmFub1NlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocjtcbiAgICAgIGhyID0gaHJ0aW1lKCk7XG4gICAgICByZXR1cm4gaHJbMF0gKiAxZTkgKyBoclsxXTtcbiAgICB9O1xuICAgIG1vZHVsZUxvYWRUaW1lID0gZ2V0TmFub1NlY29uZHMoKTtcbiAgICB1cFRpbWUgPSBwcm9jZXNzLnVwdGltZSgpICogMWU5O1xuICAgIG5vZGVMb2FkVGltZSA9IG1vZHVsZUxvYWRUaW1lIC0gdXBUaW1lO1xuICB9IGVsc2UgaWYgKERhdGUubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IERhdGUubm93KCk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wZXJmb3JtYW5jZS1ub3cuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzZfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvUnhcIlxuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzM3X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL29mXCJcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zOF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VcIlxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzQwX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zaGFyZVwiXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNDFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3Rha2VcIlxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzQyX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b0FycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=