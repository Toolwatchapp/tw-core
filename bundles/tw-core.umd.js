(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/http"), require("@angular/platform-browser"), require("rxjs/Rx"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/http", "@angular/platform-browser", "rxjs/Rx"], factory);
	else if(typeof exports === 'object')
		exports["tw-core"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/http"), require("@angular/platform-browser"), require("rxjs/Rx"));
	else
		root["tw-core"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/http"], root["@angular/platform-browser"], root["rxjs/Rx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GAService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GAService = (function () {
    function GAService() {
    }
    GAService.spawn = function () {
        if (!GAService.gaCreated) {
            var currdate = new Date();
            var gaNewElem = {};
            var gaElems = {};
            /* tslint:disable:no-string-literal */
            /* tslint:disable:semicolon */
            /* tslint:disable:no-unused-expression */
            // This code is from Google, so let's not modify it too much, just add gaNewElem and gaElems:
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments);
                }, i[r].l = 1 * currdate;
                a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m);
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga', gaNewElem, gaElems);
            /* tslint:enable:no-unused-expression */
            /* tslint:enable:semicolon */
            /* tslint:enable:no-string-literal */
            ga('create', 'UA-59148878-1', 'app.toolwatch.io');
            GAService.gaCreated = true;
        }
    };
    GAService.event = function (eventCategory, eventAction, eventLabel, eventValue) {
        if (eventLabel === void 0) { eventLabel = ''; }
        if (eventValue === void 0) { eventValue = 0; }
        GAService.spawn();
        ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue);
    };
    GAService.screenview = function (screenName) {
        //appVersion and appName are handled by ionic-native promises on mobile
        //In case the promises are still working, we timeout the call by 1s.
        if (GAService.appName == undefined || GAService.appVersion == undefined) {
            console.log("GAService isn't configured yet. Postponing call", GAService.appName, GAService.appVersion);
            setTimeout(function () {
                GAService.screenview(screenName);
            }, 1000);
        }
        else {
            GAService.spawn();
            ga('send', 'screenview', {
                'appName': GAService.appName,
                'appVersion': GAService.appVersion,
                'screenName': screenName
            });
        }
    };
    GAService.pageview = function (page) {
        GAService.spawn();
        ga('set', 'page', page);
        ga('send', 'pageview');
    };
    GAService.gaCreated = false;
    GAService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], GAService);
    return GAService;
}());


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__measure_model__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WatchAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WatchStatus; });

var Watch = (function () {
    function Watch(id, brand, historySize, measures, name, yearOfBuy, serial, caliber) {
        var _this = this;
        if (historySize === void 0) { historySize = 0; }
        if (measures === void 0) { measures = []; }
        if (name === void 0) { name = ""; }
        if (yearOfBuy === void 0) { yearOfBuy = null; }
        if (serial === void 0) { serial = ""; }
        if (caliber === void 0) { caliber = ""; }
        this.toString = function () {
            return "Watch (id: " + _this.id + ",\n\t\t\t\tbrand: " + _this.brand + ",\n\t\t\t\thistorySize: " + _this.historySize + ",\n\t\t\t\tmeasures: " + _this.measures + ",\n\t\t\t\tname: " + _this.name + ",\n\t\t\t\tyearOfBuy: " + _this.yearOfBuy + ",\n\t\t\t\tserial: " + _this.serial + ",\n\t\t\t\tcaliber: " + _this.caliber + ",\n\t\t\t\tstatus: " + _this.status + ",\n\t\t\t\tnext: " + _this.next + ",\n\t\t\t\twaiting: " + _this.waiting + ")";
        };
        this.id = id;
        this.brand = brand;
        this.historySize = historySize;
        this.measures = measures.sort(function (a, b) {
            return a.id - b.id;
        });
        this.name = name;
        if (yearOfBuy != 0) {
            this.yearOfBuy = yearOfBuy;
        }
        this.serial = serial;
        this.caliber = caliber;
        this.initials = (this.brand != null && this.brand.length > 0) ? this.brand.charAt(0) : "";
        this.initials += (this.name.length > 0) ? this.name.charAt(0) : "";
        if (historySize == 0) {
            this.status = WatchStatus.NeverMeasured;
            this.next = WatchAction.Measure;
        }
        else if (historySize > this.measures.length) {
            this.status = WatchStatus.HaveMoreMeasures;
        }
        this.computeNext();
    }
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
    Watch.prototype.currentMeasure = function () {
        if (this.measures.length !== 0) {
            return this.measures[this.measures.length - 1];
        }
        else {
            return null;
        }
    };
    Watch.prototype.upsertMeasure = function (measure) {
        for (var i = 0; i < this.measures.length; i++) {
            console.log("i", i);
            if (this.measures[i].id == measure.id) {
                this.measures[i] = measure;
                return;
            }
        }
        this.historySize++;
        this.measures.push(measure);
    };
    Watch.prototype.clone = function () {
        return new Watch(this.id, this.brand, this.historySize, this.measures, this.name, this.yearOfBuy, this.serial, this.caliber);
    };
    return Watch;
}());
var WatchAction;
(function (WatchAction) {
    WatchAction[WatchAction["Measure"] = 0] = "Measure";
    WatchAction[WatchAction["Waiting"] = 1] = "Waiting";
    WatchAction[WatchAction["Accuracy"] = 2] = "Accuracy";
})(WatchAction || (WatchAction = {}));
var WatchStatus;
(function (WatchStatus) {
    WatchStatus[WatchStatus["NeverMeasured"] = 0] = "NeverMeasured";
    WatchStatus[WatchStatus["HaveMoreMeasures"] = 1] = "HaveMoreMeasures";
})(WatchStatus || (WatchStatus = {}));


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Measure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MeasureStatus; });
var Measure = (function () {
    function Measure(id, measureUserTime, measureReferenceTime, status, accuracyUserTime, accuracyReferenceTime, accuracy, accuracyAge, percentile) {
        var _this = this;
        this.status = MeasureStatus.None;
        this.serviced = false;
        this.renewed = false;
        this.toString = function () {
            return "Measure (id: " + _this.id + ",\n\t\tmeasureUserTime: " + _this.measureUserTime + ",\n\t\tmeasureReferenceTime: " + _this.measureReferenceTime + ",\n\t\taccuracyUserTime: " + _this.accuracyUserTime + ",\n\t\taccuracyReferenceTime: " + _this.accuracyReferenceTime + ",\n\t\taccuracy: " + _this.accuracy + ",\n\t\taccuracyAge: " + _this.accuracyAge + ",\n\t\tpercentile: " + _this.percentile + ",\n\t\tstatus: " + _this.status + ")";
        };
        this.id = id;
        this.measureUserTime = measureUserTime;
        this.measureReferenceTime = measureReferenceTime;
        this.accuracyUserTime = accuracyUserTime;
        this.accuracyReferenceTime = accuracyReferenceTime;
        this.accuracy = accuracy;
        this.accuracyAge = accuracyAge;
        this.percentile = Math.round(percentile * 10) / 10;
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
    Measure.prototype.addBaseMeasure = function (referenceTime, userTime) {
        this.measureReferenceTime = referenceTime;
        this.measureUserTime = userTime;
        this.status |= MeasureStatus.BaseMeasure;
    };
    Measure.prototype.addAccuracyMeasure = function (referenceTime, userTime) {
        this.accuracyReferenceTime = referenceTime;
        this.accuracyUserTime = userTime;
        this.status |= MeasureStatus.AccuracyMeasure;
    };
    Measure.prototype.addAccuracy = function (accuracy, accuracyAge, percentile) {
        console.log("addAccuracy", accuracy, accuracyAge, percentile);
        this.accuracy = accuracy;
        this.accuracyAge = accuracyAge;
        this.percentile = Math.round(percentile * 10) / 10;
        this.computePostAccuracyStatus(accuracy, accuracyAge);
    };
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_watch_model__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_model_factory__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ga_service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_string_helper__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
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







var TwAPIService = (function () {
    /**
     * Inject http service
     * @param {Http} private http
     */
    function TwAPIService(http) {
        this.http = http;
        this.accurateTime();
    }
    TwAPIService.resetTime = function () {
        TwAPIService.time = undefined;
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
        return this.http.put(TwAPIService.baseUrl + "users", JSON.stringify(creds), TwAPIService.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_3__models_model_factory__["a" /* ModelFactory */].buildUser(res.json()); })
            .toPromise().then(function (res) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'LOGIN');
            TwAPIService.apikey = res.key;
            TwAPIService.headers.delete('X-API-KEY');
            TwAPIService.headers.append('X-API-KEY', TwAPIService.apikey);
            TwAPIService.user = res;
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
        TwAPIService.apikey = key;
        TwAPIService.headers.delete('X-API-KEY');
        TwAPIService.headers.append('X-API-KEY', TwAPIService.apikey);
        return this.http.get(TwAPIService.baseUrl + "users", TwAPIService.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_3__models_model_factory__["a" /* ModelFactory */].buildUser(res.json()); })
            .toPromise().then(function (res) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'AUTOLOGIN');
            TwAPIService.user = res;
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
        return this.http.post(TwAPIService.baseUrl + "users", JSON.stringify({
            email: email,
            password: password,
            name: name,
            lastname: lastname,
            country: country
        }), TwAPIService.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_3__models_model_factory__["a" /* ModelFactory */].buildUser(res.json()); })
            .toPromise().then(function (res) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'SIGNUP');
            TwAPIService.apikey = res.key;
            TwAPIService.headers.delete('X-API-KEY');
            TwAPIService.headers.append('X-API-KEY', TwAPIService.apikey);
            TwAPIService.user = res;
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
        return this.http.post(TwAPIService.baseUrl + "users/facebook", JSON.stringify({
            email: email,
            token: token,
            name: name,
            lastname: lastname
        }), TwAPIService.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_3__models_model_factory__["a" /* ModelFactory */].buildUser(res.json()); })
            .toPromise().then(function (res) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'SIGNUP');
            return res;
        });
    };
    /**
     * Ask a reset password link
     * @return {Promise<boolean>}
     */
    TwAPIService.prototype.resetPassword = function (email) {
        return this.http.post(TwAPIService.baseUrl + "users/reset", JSON.stringify({
            email: email
        }), TwAPIService.options).toPromise().then(function (response) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'RESET_PASSWORD');
            return true;
        }).catch(this.handleError);
    };
    /**
     * Deletes the account currently logged in.
     * @return {Promise<boolean>}
     */
    TwAPIService.prototype.deleteAccount = function () {
        return this.http.delete(TwAPIService.baseUrl + "users", TwAPIService.options).toPromise().then(function (response) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'DELETE_ACCOUNT');
            return true;
        }).catch(this.handleError);
    };
    TwAPIService.prototype.getWatches = function () {
        return this.http.get(TwAPIService.baseUrl + "watches", TwAPIService.optionsGet)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_3__models_model_factory__["a" /* ModelFactory */].buildWatches(res.json()); })
            .toPromise().then(function (res) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'WATCHES', 'GET');
            return res;
        });
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
        var deleteOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: TwAPIService.headers });
        deleteOptions.body = JSON.stringify({ watchId: watch.id });
        return this.http.delete(TwAPIService.baseUrl + "watches", deleteOptions).toPromise().then(function (response) {
            user.watches = user.watches.filter(function (filter) {
                return filter.id != watch.id;
            });
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'WATCHES', 'DELETE');
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
        var deleteOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: TwAPIService.headers });
        deleteOptions.body = JSON.stringify({ measureId: measure.id });
        return this.http.delete(TwAPIService.baseUrl + "measures", deleteOptions).toPromise().then(function (response) {
            watch.measures = watch.measures.filter(function (filter) {
                return filter.id != measure.id;
            });
            watch.computeNext();
            watch.historySize--;
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'MEASURE', 'DELETE');
            return watch;
        }).catch(this.handleError);
    };
    TwAPIService.prototype.getBlogPosts = function () {
        return this.http.get("https://blog.toolwatch.io/?json=1")
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_3__models_model_factory__["a" /* ModelFactory */].buildPosts(res.json()); })
            .toPromise().then(function (res) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'BLOG', 'GET');
            return res;
        });
    };
    /**
     * Given a brand, returns likely brands ordered by confidence
     * @param  {string}  brand [description]
     * @return {Promise}       [{brand:string, confidence:number}]
     */
    TwAPIService.prototype.getLikelyBrands = function (watch) {
        return this.http.get(TwAPIService.assetsUrl + '/watch-brand.json')
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
        return this.http.get(TwAPIService.assetsUrl + '/watches/watch-brand.json')
            .map(function (res) { return res.json(); })
            .toPromise().then(function (brands) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'BRANDS', 'GET');
            return brands;
        });
    };
    /**
     * Returns model of a given brand
     * @param  {string}  brand
     * @return {Promise}
     */
    TwAPIService.prototype.getModels = function (brand) {
        brand = __WEBPACK_IMPORTED_MODULE_5__helpers_string_helper__["a" /* StringHelper */].replaceAll(brand, " ", "");
        brand = __WEBPACK_IMPORTED_MODULE_5__helpers_string_helper__["a" /* StringHelper */].replaceAll(brand, "&", "");
        return this.http.get(TwAPIService.assetsUrl + '/watches/watch-models/' + brand + ".json")
            .map(function (res) { return res.json(); })
            .toPromise().then(function (models) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'MODELS', 'GET');
            return models;
        });
    };
    /**
     * Returns model of a given brand
     * @param  {string}  brand
     * @return {Promise}
     */
    TwAPIService.prototype.getCalibers = function (brand) {
        brand = __WEBPACK_IMPORTED_MODULE_5__helpers_string_helper__["a" /* StringHelper */].replaceAll(brand, " ", "");
        brand = __WEBPACK_IMPORTED_MODULE_5__helpers_string_helper__["a" /* StringHelper */].replaceAll(brand, "&", "");
        return this.http.get(TwAPIService.assetsUrl + '/watches/watch-calibers/' + brand + ".json")
            .map(function (res) { return res.json(); })
            .toPromise().then(function (calibers) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'CALIBERS', 'GET');
            return calibers;
        });
    };
    /**
     * Gets the previously computed offset
     * @return {number} [description]
     */
    TwAPIService.prototype.getOffsetTime = function () {
        return TwAPIService.time.offset;
    };
    /**
     * Retrieve atomic clock time adjusted for network latency
     * @param  {()=>void} statusCallback Called at each partial complete
     * @param  {number = 0} precison How many calls we want to aveage
     * @return {Promise<Date>}
     */
    TwAPIService.prototype.accurateTime = function (statusCallback, precison) {
        if (precison === void 0) { precison = 10; }
        __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'TIME', 'GET');
        //If we aren't already sync'ed
        if (TwAPIService.time === undefined) {
            //Stores each Promise in array
            var promises = [];
            for (var i = 0; i < precison; ++i) {
                promises.push(this.fetchTime(statusCallback));
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
                results.sort(function (a, b) { return a - b; });
                var half = Math.floor(results.length / 2);
                var medianOffset;
                if (results.length % 2) {
                    medianOffset = results[half];
                }
                else {
                    medianOffset = (results[half - 1] + results[half]) / 2.0;
                }
                TwAPIService.time = {
                    syncDate: new Date(Date.now() - medianOffset),
                    syncAnchor: window.performance.now(),
                    offset: medianOffset
                };
                return TwAPIService.time.syncDate;
            });
        }
        else {
            TwAPIService.time.syncDate = new Date(TwAPIService.time.syncDate.getTime() +
                window.performance.now() - TwAPIService.time.syncAnchor);
            TwAPIService.time.syncAnchor = window.performance.now();
            return new Promise(function (resolve, reject) {
                console.log(TwAPIService.time);
                resolve(TwAPIService.time.syncDate);
            });
        }
    };
    /**
     * Fetch offset between atomic clock and js time
     * @param {() => void} statusCallback
     */
    TwAPIService.prototype.fetchTime = function (statusCallback) {
        var beforeTime = window.performance.now();
        return this.http.get(TwAPIService.baseUrl + "time", TwAPIService.optionsGet)
            .toPromise()
            .then(function (response) {
            if (statusCallback !== undefined) {
                statusCallback();
            }
            var now = window.performance.now();
            var timeDiff = (now - beforeTime) / 2;
            var serverTime = response.json().time - timeDiff;
            return Date.now() - serverTime;
        }, function (reject) { return console.error(reject); }).catch(this.handleError);
    };
    /**
     * Update a measure and the watch it belongs to
     * @param  {Watch}          watch
     * @param  {Measure}        measure
     * @return {Promise<Watch>}
     */
    TwAPIService.prototype.updateMeasure = function (watch, measure) {
        return this.http.put(TwAPIService.baseUrl + "measures", JSON.stringify({
            measureId: measure.id,
            referenceTime: measure.accuracyReferenceTime,
            userTime: measure.accuracyUserTime
        }), TwAPIService.options).toPromise().then(function (response) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'MEASURE', 'SECOND');
            var json = response.json().result;
            measure.addAccuracy(json.accuracy, json.accuracyAge, json.percentile);
            watch.upsertMeasure(measure);
            watch.next = __WEBPACK_IMPORTED_MODULE_2__models_watch_model__["b" /* WatchAction */].Measure;
            return watch;
        }).catch(this.handleError);
    };
    /**
     * Insert a measure and the watch it belongs to
     * @param  {Watch}          watch
     * @param  {Measure}        measure
     * @return {Promise<Watch>}
     */
    TwAPIService.prototype.insertMeasure = function (watch, measure) {
        return this.http.post(TwAPIService.baseUrl + "measures", JSON.stringify({
            watchId: watch.id,
            referenceTime: measure.measureReferenceTime,
            userTime: measure.measureUserTime
        }), TwAPIService.options).toPromise().then(function (response) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'MEASURE', 'FIRST');
            measure.id = response.json().measureId;
            watch.measures.push(measure);
            watch.historySize++;
            return watch;
        }).catch(this.handleError);
    };
    /**
     * Insert a watch
     * @param  {Watch}          watch
     * @return {Promise<Watch>}
     */
    TwAPIService.prototype.insertWatch = function (watch) {
        return this.http.post(TwAPIService.baseUrl + "watches", JSON.stringify({
            brand: watch.brand,
            name: watch.name,
            yearOfBuy: watch.yearOfBuy,
            serial: watch.serial,
            caliber: watch.caliber
        }), TwAPIService.options)
            .map(function (res) {
            return __WEBPACK_IMPORTED_MODULE_3__models_model_factory__["a" /* ModelFactory */].buildWatch(res.json().id, watch.brand, watch.name, watch.yearOfBuy, watch.serial, watch.caliber);
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
        return this.http.put(TwAPIService.baseUrl + "watches", JSON.stringify({
            id: watch.id,
            brand: watch.brand,
            name: watch.name,
            yearOfBuy: watch.yearOfBuy,
            serial: watch.serial,
            caliber: watch.caliber
        }), TwAPIService.options).toPromise().then(function (response) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'WATCH', 'UPDATE');
            return watch;
        });
    };
    /**
     * Log error to console
     * @param {any} error [description]
     */
    TwAPIService.prototype.handleError = function (error) {
        console.error('An error occurred', error || "plop");
        return Promise.reject(error.message || error);
    };
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
    //Defines headers and request options
    TwAPIService.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
    TwAPIService.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: TwAPIService.headers });
    // Regression RC5. Doesn't accept get without body
    TwAPIService.optionsGet = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: TwAPIService.headers, body: "" });
    TwAPIService.baseUrl = "https://toolwatch.io/api/";
    TwAPIService.assetsUrl = "assets";
    TwAPIService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], TwAPIService);
    return TwAPIService;
}());


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoonPhasesComponent; });
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
    function MoonPhasesComponent(elementRef) {
        this.elementRef = elementRef;
        var today = new Date();
        var lastFullMoon = new Date(2016, 10, 14, 12, 0, 0, 0);
        var diffDays = Math.round(Math.abs((today.getTime() - lastFullMoon.getTime()) / (24 * 60 * 60 * 1000)));
        this.angleMoon = diffDays * 6.101694915254;
    }
    MoonPhasesComponent.prototype.ngAfterViewInit = function () {
        var elem = this.elementRef.nativeElement.querySelector('.moon-disque');
        elem.style.webkitTransform = 'rotateZ(' + this.angleMoon + 'deg)';
        elem.style.transform = 'rotateZ(' + this.angleMoon + 'deg)';
    };
    MoonPhasesComponent.prototype.ngOnInit = function () {
    };
    MoonPhasesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'moon-phases',
            template: "<div class=\"moon-phase-container\">\n\t<div class=\"moon-mask\"></div>\n\t<div class=\"moon-disque\"></div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], MoonPhasesComponent);
    return MoonPhasesComponent;
}());


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalValidator; });
var GlobalValidator = (function () {
    function GlobalValidator() {
    }
    GlobalValidator.mailFormat = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    };
    GlobalValidator.match = function (group, from, distant) {
        console.log(group);
        if (group && group.controls[from].value != group.controls[from].value) {
            return { "noMatch": true };
        }
        return null;
    };
    return GlobalValidator;
}());


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPost; });
var BlogPost = (function () {
    function BlogPost(id, title, date, excerpt, url) {
        var _this = this;
        this.toString = function () {
            return "BlogPost (id: " + _this.id + ",\n\t\t\t\ttitle: " + _this.title + ",\n\t\t\t\tdate: " + _this.date + ",\n\t\t\t\texcerpt: " + _this.excerpt + ",\n\t\t\t\turl: " + _this.url + ")";
        };
        this.id = id;
        this.title = this.decodeHTMLEntities(title);
        this.date = date;
        this.excerpt = this.decodeHTMLEntities(excerpt);
        String.fromCharCode;
        this.url = url;
    }
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EmailPreferences; });
var User = (function () {
    function User(id, email, name, lastname, country, registerDate, key, watches) {
        var _this = this;
        this.watches = [];
        this.emailPreferences = EmailPreferences.None;
        this.toString = function () {
            return "User (\n\t\t\tid: " + _this.id + ", \n\t\t\temail: " + _this.email + ", \n\t\t\tname: " + _this.name + ", \n\t\t\tlastname: " + _this.lastname + ", \n\t\t\tcountry: " + _this.country + ", \n\t\t\tregisterDate: " + _this.registerDate + ", \n\t\t\tkey: " + _this.key + ", \n\t\t\twatches: " + _this.watches + ")";
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
    User.prototype.upsertWatch = function (watch) {
        for (var i = 0; i < this.watches.length; i++) {
            if (this.watches[i].id == watch.id) {
                this.watches[i] = watch;
                return;
            }
        }
        this.watches.push(watch);
    };
    return User;
}());
var EmailPreferences;
(function (EmailPreferences) {
    EmailPreferences[EmailPreferences["None"] = 0] = "None";
    EmailPreferences[EmailPreferences["FirstWatch"] = 2] = "FirstWatch";
    EmailPreferences[EmailPreferences["FirstMeasure"] = 4] = "FirstMeasure";
    EmailPreferences[EmailPreferences["DayAccuracy"] = 8] = "DayAccuracy";
    EmailPreferences[EmailPreferences["WeekAccuracy"] = 16] = "WeekAccuracy";
    EmailPreferences[EmailPreferences["Result"] = 32] = "Result";
    EmailPreferences[EmailPreferences["NewMeasure"] = 64] = "NewMeasure";
    EmailPreferences[EmailPreferences["SecondWatch"] = 128] = "SecondWatch";
    EmailPreferences[EmailPreferences["Comeback"] = 256] = "Comeback";
    EmailPreferences[EmailPreferences["WatchStories"] = 512] = "WatchStories";
})(EmailPreferences || (EmailPreferences = {}));


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArethmeticSign; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
    ArethmeticSign = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'arethmeticSign'
        }), 
        __metadata('design:paramtypes', [])
    ], ArethmeticSign);
    return ArethmeticSign;
}());


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KFormatter; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
    KFormatter = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'kFormatter'
        }), 
        __metadata('design:paramtypes', [])
    ], KFormatter);
    return KFormatter;
}());


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadingZero; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
    LeadingZero = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'leadingZero'
        }), 
        __metadata('design:paramtypes', [])
    ], LeadingZero);
    return LeadingZero;
}());


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_pipes_arethmetic_sign_pipe__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_pipes_leading_zero_pipe__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_pipes_k_formatter_pipe__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_directives_clock_moon_phases_moon_phases_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_services_twapi_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_services_ga_service__ = __webpack_require__(1);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__src_services_twapi_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__src_services_ga_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__src_pipes_arethmetic_sign_pipe__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__src_pipes_leading_zero_pipe__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__src_pipes_k_formatter_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_models_watch_model__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_9__src_models_watch_model__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_9__src_models_watch_model__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_9__src_models_watch_model__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_models_user_model__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_10__src_models_user_model__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__src_models_user_model__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_models_measure_model__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_11__src_models_measure_model__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_11__src_models_measure_model__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_models_blog_post_model__ = __webpack_require__(8);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_12__src_models_blog_post_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_directives_clock_clock_component__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_13__src_directives_clock_clock_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_6__src_directives_clock_moon_phases_moon_phases_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_directives_login_login_component__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_14__src_directives_login_login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_directives_signup_signup_component__ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_15__src_directives_signup_signup_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_directives_watch_watch_component__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_16__src_directives_watch_watch_component__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwCoreModule; });
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
    TwCoreModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__src_pipes_arethmetic_sign_pipe__["a" /* ArethmeticSign */],
                __WEBPACK_IMPORTED_MODULE_4__src_pipes_leading_zero_pipe__["a" /* LeadingZero */],
                __WEBPACK_IMPORTED_MODULE_5__src_pipes_k_formatter_pipe__["a" /* KFormatter */],
                __WEBPACK_IMPORTED_MODULE_6__src_directives_clock_moon_phases_moon_phases_component__["a" /* MoonPhasesComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__src_services_twapi_service__["a" /* TwAPIService */],
                __WEBPACK_IMPORTED_MODULE_8__src_services_ga_service__["a" /* GAService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__src_pipes_arethmetic_sign_pipe__["a" /* ArethmeticSign */],
                __WEBPACK_IMPORTED_MODULE_4__src_pipes_leading_zero_pipe__["a" /* LeadingZero */],
                __WEBPACK_IMPORTED_MODULE_5__src_pipes_k_formatter_pipe__["a" /* KFormatter */],
                __WEBPACK_IMPORTED_MODULE_6__src_directives_clock_moon_phases_moon_phases_component__["a" /* MoonPhasesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TwCoreModule);
    return TwCoreModule;
}());


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockComponent; });
var ClockComponent = (function () {
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
    ClockComponent.prototype.isLeapYear = function (year) {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    };
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
    ClockComponent.prototype.ngOnInit = function () {
    };
    return ClockComponent;
}());


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_validator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ga_service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_forms__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });




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
        this.userLogged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loginAttempt = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //Lang definition
        this.translate.setDefaultLang('en');
        this.translate.use('en');
        this.loginForm = this.formBuilder.group({
            email: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__global_validator__["a" /* GlobalValidator */].mailFormat])],
            password: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(5)])]
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
            __WEBPACK_IMPORTED_MODULE_2__services_ga_service__["a" /* GAService */].event('CTA', 'FB_LOGIN', 'SUCCESS');
        }, function (err) {
            //Error, most likely the user tries to signin
            //using facebook while he has a regular 
            //account with the same email.
            _this.loginAttempt.emit(false);
            __WEBPACK_IMPORTED_MODULE_2__services_ga_service__["a" /* GAService */].event('CTA', 'FB_SIGNUP', 'FAIL');
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
                __WEBPACK_IMPORTED_MODULE_2__services_ga_service__["a" /* GAService */].event('CTA', 'LOGIN', 'SUCCESS');
            }, function (err) {
                __WEBPACK_IMPORTED_MODULE_2__services_ga_service__["a" /* GAService */].event('CTA', 'LOGIN', 'FAIL');
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
    LoginComponent.prototype.onPasswordResetSubmit = function (email) {
        this.twapi.resetPassword(email);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_twapi_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_validator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ga_service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
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
    function SignupComponent(translate, twapi, formBuilder) {
        var _this = this;
        this.translate = translate;
        this.twapi = twapi;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.errors = [];
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
            email: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__global_validator__["a" /* GlobalValidator */].mailFormat])],
            emailRepeat: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__global_validator__["a" /* GlobalValidator */].mailFormat])],
            password: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(8)])],
            passwordRepeat: ["",
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(8)
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
                __WEBPACK_IMPORTED_MODULE_3__services_ga_service__["a" /* GAService */].event('CTA', 'SIGNUP', 'SUCCESS');
                _this.userLogged.emit(res);
            }, function (error) {
                __WEBPACK_IMPORTED_MODULE_3__services_ga_service__["a" /* GAService */].event('CTA', 'SIGNUP', 'FAIL');
                switch (error.status) {
                    case __WEBPACK_IMPORTED_MODULE_1__services_twapi_service__["a" /* TwAPIService */].HTTP_UNAUTHORIZED:
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
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], SignupComponent.prototype, "userLogged", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], SignupComponent.prototype, "signupAttempt", void 0);
    return SignupComponent;
}());


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_watch_model__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ga_service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_forms__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchComponent; });
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
     * @param {TranslateService} private translate [description]
     * @param {TwAPIService}     private twapi     [description]
     * @param {FormBuilder}      private builder   [description]
     */
    function WatchComponent(translate, twapi, formBuilder) {
        var _this = this;
        this.translate = translate;
        this.twapi = twapi;
        this.formBuilder = formBuilder;
        this.watchSaved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.watchModel = new __WEBPACK_IMPORTED_MODULE_1__models_watch_model__["a" /* Watch */](null, "");
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
            brand: [this.watchModel.brand, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            name: [this.watchModel.name, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            caliber: this.watchModel.caliber,
            year: [this.watchModel.yearOfBuy, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(4), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(4)])],
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
                __WEBPACK_IMPORTED_MODULE_2__services_ga_service__["a" /* GAService */].event('CTA', 'WATCH_UPSERT', 'SUCCESS');
                _this.user.upsertWatch(res);
                _this.watchSaved.emit(_this.user);
                _this.submitAttempt = false;
                _this.error = false;
            }, function (error) {
                __WEBPACK_IMPORTED_MODULE_2__services_ga_service__["a" /* GAService */].event('CTA', 'WATCH_UPSERT', 'FAIL');
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
            __WEBPACK_IMPORTED_MODULE_2__services_ga_service__["a" /* GAService */].event('CTA', 'WATCH_DELETE', 'SUCCESS');
            _this.watchSaved.emit(res);
            _this.submitAttempt = false;
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_2__services_ga_service__["a" /* GAService */].event('CTA', 'WATCH_DELETE', 'FAIL');
            _this.error = true;
            _this.submitAttempt = false;
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], WatchComponent.prototype, "watchSaved", void 0);
    return WatchComponent;
}());


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringHelper; });
var StringHelper = (function () {
    function StringHelper() {
    }
    StringHelper.levenshtein = function (a, b) {
        if (!a || !b)
            return (a || b).length;
        var m = [];
        for (var i = 0; i <= b.length; i++) {
            m[i] = [i];
            if (i === 0)
                continue;
            for (var j = 0; j <= a.length; j++) {
                m[0][j] = j;
                if (j === 0)
                    continue;
                m[i][j] = b.charAt(i - 1) == a.charAt(j - 1) ? m[i - 1][j - 1] : Math.min(m[i - 1][j - 1] + 1, m[i][j - 1] + 1, m[i - 1][j] + 1);
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__watch_model__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_post_model__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__measure_model__ = __webpack_require__(3);
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
     * Builds a watch from json response
     * @param  {any}     jsonWatches
     * @return {Watch[]}
     */
    ModelFactory.buildWatches = function (jsonWatches) {
        return jsonWatches.map(function (jsonWatch) {
            return new __WEBPACK_IMPORTED_MODULE_1__watch_model__["a" /* Watch */](jsonWatch.watchId, jsonWatch.brand, jsonWatch.historySize, jsonWatch.measures.map(function (jsonMeasure) {
                return new __WEBPACK_IMPORTED_MODULE_3__measure_model__["a" /* Measure */](jsonMeasure.id, jsonMeasure.measureUserTime, jsonMeasure.measureReferenceTime, jsonMeasure.statusId, jsonMeasure.accuracyUserTime, jsonMeasure.accuracyReferenceTime, jsonMeasure.accuracy, jsonMeasure.accuracyAge, jsonMeasure.percentile);
            }), jsonWatch.name, jsonWatch.yearOfBuy, jsonWatch.serial, jsonWatch.caliber);
        });
    };
    /**
     * Builds Json post from json response
     * @param  {any}        jsonPosts [description]
     * @return {BlogPost[]}           [description]
     */
    ModelFactory.buildPosts = function (jsonPosts) {
        return jsonPosts.posts.map(function (jsonPost) {
            return new __WEBPACK_IMPORTED_MODULE_2__blog_post_model__["a" /* BlogPost */](jsonPost.id, jsonPost.title, new Date(jsonPost.date), jsonPost.excerpt, jsonPost.url);
        });
    };
    ModelFactory.buildWatch = function (id, brand, name, yearOfBuy, serial, caliber) {
        return new __WEBPACK_IMPORTED_MODULE_1__watch_model__["a" /* Watch */](id, brand, 0, [], name, yearOfBuy, serial, caliber);
    };
    return ModelFactory;
}());


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(14);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TwCoreModule", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TwAPIService", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GAService", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ArethmeticSign", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LeadingZero", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "KFormatter", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Watch", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "WatchAction", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "WatchStatus", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "User", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EmailPreferences", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Measure", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MeasureStatus", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BlogPost", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ClockComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MoonPhasesComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "WatchComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["s"]; });



/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map