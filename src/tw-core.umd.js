(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/http"), require("@angular/platform-browser"), require("rxjs/Rx"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/http", "@angular/platform-browser", "rxjs/Rx"], factory);
	else if(typeof exports === 'object')
		exports["tw-core"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/http"), require("@angular/platform-browser"), require("rxjs/Rx"));
	else
		root["tw-core"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/http"], root["@angular/platform-browser"], root["rxjs/Rx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_23__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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

var GAService = GAService_1 = (function () {
    function GAService() {
    }
    GAService.spawn = function () {
        if (!GAService_1.gaCreated) {
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
            GAService_1.gaCreated = true;
        }
    };
    GAService.event = function (eventCategory, eventAction, eventLabel, eventValue) {
        if (eventLabel === void 0) { eventLabel = ''; }
        if (eventValue === void 0) { eventValue = 0; }
        GAService_1.spawn();
        ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue);
    };
    GAService.screenview = function (screenName) {
        //appVersion and appName are handled by ionic-native promises on mobile
        //In case the promises are still working, we timeout the call by 1s.
        if (GAService_1.appName == undefined || GAService_1.appVersion == undefined) {
            console.log("GAService isn't configured yet. Postponing call", GAService_1.appName, GAService_1.appVersion);
            setTimeout(function () {
                GAService_1.screenview(screenName);
            }, 1000);
        }
        else {
            GAService_1.spawn();
            ga('send', 'screenview', {
                'appName': GAService_1.appName,
                'appVersion': GAService_1.appVersion,
                'screenName': screenName
            });
        }
    };
    GAService.pageview = function (page) {
        GAService_1.spawn();
        ga('set', 'page', page);
        ga('send', 'pageview');
    };
    return GAService;
}());
GAService.gaCreated = false;
GAService = GAService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], GAService);

var GAService_1;


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
        if (historySize === void 0) { historySize = 0; }
        if (measures === void 0) { measures = []; }
        if (name === void 0) { name = ""; }
        if (yearOfBuy === void 0) { yearOfBuy = null; }
        if (serial === void 0) { serial = ""; }
        if (caliber === void 0) { caliber = ""; }
        var _this = this;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(23);
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







var TwAPIService = TwAPIService_1 = (function () {
    /**
     * Inject http service
     * @param {Http} private http
     */
    function TwAPIService(http) {
        this.http = http;
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
        return this.http.put(TwAPIService_1.baseUrl + "users", JSON.stringify(creds), TwAPIService_1.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_3__models_model_factory__["a" /* ModelFactory */].buildUser(res.json()); })
            .toPromise().then(function (res) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'LOGIN');
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
        return this.http.get(TwAPIService_1.baseUrl + "users", TwAPIService_1.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_3__models_model_factory__["a" /* ModelFactory */].buildUser(res.json()); })
            .toPromise().then(function (res) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'AUTOLOGIN');
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
        return this.http.post(TwAPIService_1.baseUrl + "users", JSON.stringify({
            email: email,
            password: password,
            name: name,
            lastname: lastname,
            country: country
        }), TwAPIService_1.options)
            .map(function (res) { return __WEBPACK_IMPORTED_MODULE_3__models_model_factory__["a" /* ModelFactory */].buildUser(res.json()); })
            .toPromise().then(function (res) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'SIGNUP');
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
        return this.http.post(TwAPIService_1.baseUrl + "users/facebook", JSON.stringify({
            email: email,
            token: token,
            name: name,
            lastname: lastname
        }), TwAPIService_1.options)
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
        return this.http.post(TwAPIService_1.baseUrl + "users/reset", JSON.stringify({
            email: email
        }), TwAPIService_1.options).toPromise().then(function (response) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'RESET_PASSWORD');
            return true;
        }).catch(this.handleError);
    };
    /**
     * Deletes the account currently logged in.
     * @return {Promise<boolean>}
     */
    TwAPIService.prototype.deleteAccount = function () {
        return this.http.delete(TwAPIService_1.baseUrl + "users", TwAPIService_1.options).toPromise().then(function (response) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'DELETE_ACCOUNT');
            return true;
        }).catch(this.handleError);
    };
    TwAPIService.prototype.getWatches = function () {
        return this.http.get(TwAPIService_1.baseUrl + "watches", TwAPIService_1.optionsGet)
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
        var deleteOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: TwAPIService_1.headers });
        deleteOptions.body = JSON.stringify({ watchId: watch.id });
        return this.http.delete(TwAPIService_1.baseUrl + "watches", deleteOptions).toPromise().then(function (response) {
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
        var deleteOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: TwAPIService_1.headers });
        deleteOptions.body = JSON.stringify({ measureId: measure.id });
        return this.http.delete(TwAPIService_1.baseUrl + "measures", deleteOptions).toPromise().then(function (response) {
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
        return this.http.get(TwAPIService_1.assetsUrl + '/watch-brand.json')
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
        return this.http.get(TwAPIService_1.assetsUrl + '/watch-brand.json')
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
        return this.http.get(TwAPIService_1.assetsUrl + '/watch-models/' + brand + ".json")
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
        return this.http.get(TwAPIService_1.assetsUrl + '/watch-calibers/' + brand + ".json")
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
        return TwAPIService_1.time.offset;
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
        if (TwAPIService_1.time === undefined) {
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
                TwAPIService_1.time = {
                    syncDate: new Date(Date.now() - medianOffset),
                    syncAnchor: window.performance.now(),
                    offset: medianOffset
                };
                return TwAPIService_1.time.syncDate;
            });
            //Only compute the difference from last time;
        }
        else {
            TwAPIService_1.time.syncDate = new Date(TwAPIService_1.time.syncDate.getTime() +
                window.performance.now() - TwAPIService_1.time.syncAnchor);
            TwAPIService_1.time.syncAnchor = window.performance.now();
            return new Promise(function (resolve, reject) {
                console.log(TwAPIService_1.time);
                resolve(TwAPIService_1.time.syncDate);
            });
        }
    };
    /**
     * Fetch offset between atomic clock and js time
     * @param {() => void} statusCallback
     */
    TwAPIService.prototype.fetchTime = function (statusCallback) {
        var beforeTime = window.performance.now();
        return this.http.get(TwAPIService_1.baseUrl + "time", TwAPIService_1.optionsGet)
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
        return this.http.put(TwAPIService_1.baseUrl + "measures", JSON.stringify({
            measureId: measure.id,
            referenceTime: measure.accuracyReferenceTime,
            userTime: measure.accuracyUserTime
        }), TwAPIService_1.options).toPromise().then(function (response) {
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
        return this.http.post(TwAPIService_1.baseUrl + "measures", JSON.stringify({
            watchId: watch.id,
            referenceTime: measure.measureReferenceTime,
            userTime: measure.measureUserTime
        }), TwAPIService_1.options).toPromise().then(function (response) {
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
        return this.http.post(TwAPIService_1.baseUrl + "watches", JSON.stringify({
            brand: watch.brand,
            name: watch.name,
            yearOfBuy: watch.yearOfBuy,
            serial: watch.serial,
            caliber: watch.caliber
        }), TwAPIService_1.options)
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
        return this.http.put(TwAPIService_1.baseUrl + "watches", JSON.stringify({
            id: watch.id,
            brand: watch.brand,
            name: watch.name,
            yearOfBuy: watch.yearOfBuy,
            serial: watch.serial,
            caliber: watch.caliber
        }), TwAPIService_1.options).toPromise().then(function (response) {
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
//Defines headers and request options
TwAPIService.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
TwAPIService.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: TwAPIService_1.headers });
// Regression RC5. Doesn't accept get without body
TwAPIService.optionsGet = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: TwAPIService_1.headers, body: "" });
TwAPIService.baseUrl = "https://toolwatch.io/api/";
TwAPIService.assetsUrl = "app/assets";
TwAPIService = TwAPIService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    /**
     * Exposes the Toolwatch API.
     * Returns promeses on domain objects
     */
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
], TwAPIService);

var TwAPIService_1;


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
    return MoonPhasesComponent;
}());
MoonPhasesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'moon-phases',
        template: "<div class=\"moon-phase-container\">\n\t<div class=\"moon-mask\"></div>\n\t<div class=\"moon-disque\"></div>\n</div>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], MoonPhasesComponent);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
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
    })
], TwCoreModule);



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
    return WatchComponent;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], WatchComponent.prototype, "watchSaved", void 0);


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



/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkYzZjNzUwNjYwMjljYzBhZjgzMCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2dhLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy93YXRjaC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL21lYXN1cmUubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3R3YXBpLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9jbG9jay9tb29uLXBoYXNlcy9tb29uLXBoYXNlcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvZ2xvYmFsLXZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2Jsb2ctcG9zdC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpcGVzL2FyZXRobWV0aWMtc2lnbi5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlcy9rLWZvcm1hdHRlci5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlcy9sZWFkaW5nLXplcm8ucGlwZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvY2xvY2svY2xvY2suY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy93YXRjaC93YXRjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvc3RyaW5nLmhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL21vZGVsLmZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vdHctY29yZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9SeFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSwrQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0EyQztBQUkzQyxJQUFhLFNBQVM7SUFBdEI7SUFrRUEsQ0FBQztJQXhEZ0IsZUFBSyxHQUFwQjtRQUVJLEVBQUUsRUFBQyxDQUFDLFdBQVMsQ0FBQyxTQUFTLENBQUMsRUFBQztZQUN2QixJQUFJLFFBQVEsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1lB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d2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKSwgcmVxdWlyZShcInJ4anMvUnhcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQGFuZ3VsYXIvY29yZVwiLCBcIkBhbmd1bGFyL2Zvcm1zXCIsIFwiQGFuZ3VsYXIvaHR0cFwiLCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIiwgXCJyeGpzL1J4XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInR3LWNvcmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKSwgcmVxdWlyZShcInJ4anMvUnhcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInR3LWNvcmVcIl0gPSBmYWN0b3J5KHJvb3RbXCJAYW5ndWxhci9jb3JlXCJdLCByb290W1wiQGFuZ3VsYXIvZm9ybXNcIl0sIHJvb3RbXCJAYW5ndWxhci9odHRwXCJdLCByb290W1wiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiXSwgcm9vdFtcInJ4anMvUnhcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yM19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGM2Yzc1MDY2MDI5Y2MwYWY4MzAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IGdhOmFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdBU2VydmljZSB7XG5cbiAgcHVibGljIHN0YXRpYyBhcHBOYW1lOnN0cmluZztcbiAgcHVibGljIHN0YXRpYyBhcHBWZXJzaW9uOnN0cmluZztcbiAgcHVibGljIHN0YXRpYyB1c2VyTmFtZTpzdHJpbmc7XG4gIHB1YmxpYyBzdGF0aWMgdXNlckVtYWlsOnN0cmluZztcbiAgcHJpdmF0ZSBzdGF0aWMgZ2FDcmVhdGVkOmJvb2xlYW4gPSBmYWxzZTtcblxuXG5cbiAgcHJpdmF0ZSBzdGF0aWMgc3Bhd24oKXtcblxuICAgICAgaWYoIUdBU2VydmljZS5nYUNyZWF0ZWQpe1xuICAgICAgICB2YXIgY3VycmRhdGUgOiBhbnkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgZ2FOZXdFbGVtIDogYW55ID0ge307XG4gICAgICAgIHZhciBnYUVsZW1zIDogYW55ID0ge307XG5cbiAgICAgICAgLyogdHNsaW50OmRpc2FibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgICAgICAgLyogdHNsaW50OmRpc2FibGU6c2VtaWNvbG9uICovXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLXVudXNlZC1leHByZXNzaW9uICovXG4gICAgICAgIC8vIFRoaXMgY29kZSBpcyBmcm9tIEdvb2dsZSwgc28gbGV0J3Mgbm90IG1vZGlmeSBpdCB0b28gbXVjaCwganVzdCBhZGQgZ2FOZXdFbGVtIGFuZCBnYUVsZW1zOlxuXG4gICAgICAgIChmdW5jdGlvbihpLHMsbyxnLHIsYSxtKXtpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXT1yO2lbcl09aVtyXXx8ZnVuY3Rpb24oKXtcbiAgICAgICAgKGlbcl0ucT1pW3JdLnF8fFtdKS5wdXNoKGFyZ3VtZW50cyl9LGlbcl0ubD0xKmN1cnJkYXRlO2E9cy5jcmVhdGVFbGVtZW50KG8pLFxuICAgICAgICBtPXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07YS5hc3luYz0xO2Euc3JjPWc7bS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLG0pXG4gICAgICAgIH0pKHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzJywnZ2EnLCBnYU5ld0VsZW0sIGdhRWxlbXMpO1xuICAgICAgICBcbiAgICAgICAgLyogdHNsaW50OmVuYWJsZTpuby11bnVzZWQtZXhwcmVzc2lvbiAqL1xuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlOnNlbWljb2xvbiAqL1xuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLXN0cmluZy1saXRlcmFsICovXG4gICAgICAgIGdhKCdjcmVhdGUnLCAnVUEtNTkxNDg4NzgtMScsICdhcHAudG9vbHdhdGNoLmlvJyk7XG4gICAgICAgIEdBU2VydmljZS5nYUNyZWF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBldmVudChldmVudENhdGVnb3J5OnN0cmluZywgZXZlbnRBY3Rpb246c3RyaW5nLCBldmVudExhYmVsOnN0cmluZz0nJywgZXZlbnRWYWx1ZTpudW1iZXI9MCl7XG4gICAgR0FTZXJ2aWNlLnNwYXduKCk7XG4gICAgZ2EoJ3NlbmQnLCAnZXZlbnQnLCBldmVudENhdGVnb3J5LCBldmVudEFjdGlvbiwgZXZlbnRMYWJlbCwgZXZlbnRWYWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNjcmVlbnZpZXcoc2NyZWVuTmFtZTpzdHJpbmcpe1xuXG4gICAgLy9hcHBWZXJzaW9uIGFuZCBhcHBOYW1lIGFyZSBoYW5kbGVkIGJ5IGlvbmljLW5hdGl2ZSBwcm9taXNlcyBvbiBtb2JpbGVcbiAgICAvL0luIGNhc2UgdGhlIHByb21pc2VzIGFyZSBzdGlsbCB3b3JraW5nLCB3ZSB0aW1lb3V0IHRoZSBjYWxsIGJ5IDFzLlxuICAgIGlmKEdBU2VydmljZS5hcHBOYW1lID09IHVuZGVmaW5lZCB8fCBHQVNlcnZpY2UuYXBwVmVyc2lvbiA9PSB1bmRlZmluZWQpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkdBU2VydmljZSBpc24ndCBjb25maWd1cmVkIHlldC4gUG9zdHBvbmluZyBjYWxsXCIsIEdBU2VydmljZS5hcHBOYW1lLCBHQVNlcnZpY2UuYXBwVmVyc2lvbik7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICBHQVNlcnZpY2Uuc2NyZWVudmlldyhzY3JlZW5OYW1lKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfWVsc2V7XG4gICAgICBHQVNlcnZpY2Uuc3Bhd24oKTtcbiAgICAgIGdhKCdzZW5kJywgJ3NjcmVlbnZpZXcnLCB7XG4gICAgICAgICdhcHBOYW1lJzogR0FTZXJ2aWNlLmFwcE5hbWUsXG4gICAgICAgICdhcHBWZXJzaW9uJzogR0FTZXJ2aWNlLmFwcFZlcnNpb24sXG4gICAgICAgICdzY3JlZW5OYW1lJzogc2NyZWVuTmFtZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBwYWdldmlldyhwYWdlOnN0cmluZyl7XG4gICAgR0FTZXJ2aWNlLnNwYXduKCk7XG4gICAgZ2EoJ3NldCcsICdwYWdlJywgcGFnZSk7XG4gICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnKVxuICB9XG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL2dhLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBNZWFzdXJlLCBNZWFzdXJlU3RhdHVzIH0gZnJvbSAnLi9tZWFzdXJlLm1vZGVsJ1xuXG5leHBvcnQgY2xhc3MgV2F0Y2h7XG5cdGlkOm51bWJlcjtcblx0YnJhbmQ6c3RyaW5nO1xuXHRoaXN0b3J5U2l6ZTpudW1iZXI7XG5cdG1lYXN1cmVzOk1lYXN1cmVbXTtcblx0bmFtZTpzdHJpbmc7XG5cdHllYXJPZkJ1eTpudW1iZXI7XG5cdHNlcmlhbDpzdHJpbmc7XG5cdGNhbGliZXI6c3RyaW5nO1xuXHRzdGF0dXM6IFdhdGNoU3RhdHVzO1xuXHRuZXh0OiBXYXRjaEFjdGlvbjtcblx0d2FpdGluZzpudW1iZXI7XG5cdGluaXRpYWxzOnN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBicmFuZDogc3RyaW5nLCBoaXN0b3J5U2l6ZTogbnVtYmVyID0gMCxcblx0XHRtZWFzdXJlczogTWVhc3VyZVtdID0gW10sIG5hbWU6IHN0cmluZyA9IFwiXCIsIHllYXJPZkJ1eTogbnVtYmVyID0gbnVsbCxcblx0XHRzZXJpYWw6IHN0cmluZyA9IFwiXCIsIGNhbGliZXI6IHN0cmluZyA9IFwiXCIpIHtcblxuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLmJyYW5kID0gYnJhbmQ7XG5cdFx0dGhpcy5oaXN0b3J5U2l6ZSA9IGhpc3RvcnlTaXplO1xuXHRcdHRoaXMubWVhc3VyZXMgPSBtZWFzdXJlcy5zb3J0KGZ1bmN0aW9uKGE6TWVhc3VyZSwgYjpNZWFzdXJlKXtcblx0XHRcdHJldHVybiBhLmlkIC0gYi5pZDtcblx0XHR9KTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdGlmKHllYXJPZkJ1eSAhPSAwKXtcblx0XHRcdHRoaXMueWVhck9mQnV5ID0geWVhck9mQnV5O1xuXHRcdH1cblx0XHR0aGlzLnNlcmlhbCA9IHNlcmlhbDtcblx0XHR0aGlzLmNhbGliZXIgPSBjYWxpYmVyO1xuXHRcdHRoaXMuaW5pdGlhbHMgPSAodGhpcy5icmFuZCAhPSBudWxsICYmIHRoaXMuYnJhbmQubGVuZ3RoID4gMCkgPyB0aGlzLmJyYW5kLmNoYXJBdCgwKSA6IFwiXCI7XG5cdFx0dGhpcy5pbml0aWFscyArPSAodGhpcy5uYW1lLmxlbmd0aCA+IDApID8gdGhpcy5uYW1lLmNoYXJBdCgwKSA6IFwiXCI7XG5cblx0XHRpZiAoaGlzdG9yeVNpemUgPT0gMCl7XG5cdFx0XHR0aGlzLnN0YXR1cyA9IFdhdGNoU3RhdHVzLk5ldmVyTWVhc3VyZWQ7XG5cdFx0XHR0aGlzLm5leHQgPSBXYXRjaEFjdGlvbi5NZWFzdXJlO1xuXHRcdH1lbHNlIGlmKGhpc3RvcnlTaXplID4gdGhpcy5tZWFzdXJlcy5sZW5ndGgpe1xuXHRcdFx0dGhpcy5zdGF0dXMgPSBXYXRjaFN0YXR1cy5IYXZlTW9yZU1lYXN1cmVzO1xuXHRcdH1cblxuXHRcdHRoaXMuY29tcHV0ZU5leHQoKTtcblx0fVxuXG5cdGNvbXB1dGVOZXh0KCl7XG5cdFx0bGV0IGxhc3RNZWFzdXJlID0gdGhpcy5jdXJyZW50TWVhc3VyZSgpO1xuXHRcdGlmIChsYXN0TWVhc3VyZSAhPT0gbnVsbCBcblx0XHRcdCYmIGxhc3RNZWFzdXJlLnN0YXR1cyAmIE1lYXN1cmVTdGF0dXMuQmFzZU1lYXN1cmUpe1xuXHRcdFx0XG5cdFx0XHRpZiAoTWF0aC5hYnMoKGxhc3RNZWFzdXJlLm1lYXN1cmVVc2VyVGltZSAtIERhdGUubm93KCkvMTAwMCkvMzYwMCkgPCAxMil7XG5cdFx0XHRcdHRoaXMubmV4dCA9IFdhdGNoQWN0aW9uLldhaXRpbmc7XG5cdFx0XHRcdHRoaXMud2FpdGluZyA9IE1hdGgucm91bmQoMTIgLSBNYXRoLmFicygobGFzdE1lYXN1cmUubWVhc3VyZVVzZXJUaW1lIC0gRGF0ZS5ub3coKS8xMDAwKS8zNjAwKSk7XG5cdFx0XHR9ZWxzZSBpZighKGxhc3RNZWFzdXJlLnN0YXR1cyAmIE1lYXN1cmVTdGF0dXMuQWNjdXJhY3lNZWFzdXJlKSkge1xuXHRcdFx0XHR0aGlzLm5leHQgPSBXYXRjaEFjdGlvbi5BY2N1cmFjeTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLm5leHQgPSBXYXRjaEFjdGlvbi5NZWFzdXJlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyB0b1N0cmluZyA9ICgpIDogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gYFdhdGNoIChpZDogJHt0aGlzLmlkfSxcblx0XHRcdFx0YnJhbmQ6ICR7dGhpcy5icmFuZH0sXG5cdFx0XHRcdGhpc3RvcnlTaXplOiAke3RoaXMuaGlzdG9yeVNpemV9LFxuXHRcdFx0XHRtZWFzdXJlczogJHt0aGlzLm1lYXN1cmVzfSxcblx0XHRcdFx0bmFtZTogJHt0aGlzLm5hbWV9LFxuXHRcdFx0XHR5ZWFyT2ZCdXk6ICR7dGhpcy55ZWFyT2ZCdXl9LFxuXHRcdFx0XHRzZXJpYWw6ICR7dGhpcy5zZXJpYWx9LFxuXHRcdFx0XHRjYWxpYmVyOiAke3RoaXMuY2FsaWJlcn0sXG5cdFx0XHRcdHN0YXR1czogJHt0aGlzLnN0YXR1c30sXG5cdFx0XHRcdG5leHQ6ICR7dGhpcy5uZXh0fSxcblx0XHRcdFx0d2FpdGluZzogJHt0aGlzLndhaXRpbmd9KWA7XG5cdH1cblxuXHRhdmVyYWdlKGFtb3VudDpudW1iZXIpe1xuXG5cdFx0bGV0IGFjdHVhbEFtb3VudDpudW1iZXIgPSAwO1xuXHRcdGxldCBhdmVyYWdlOm51bWJlciA9IDA7XG5cdFx0bGV0IGk6bnVtYmVyID0gdGhpcy5tZWFzdXJlcy5sZW5ndGggLSAxO1xuXG5cdFx0d2hpbGUoaT49IDAgJiYgYWN0dWFsQW1vdW50IDw9IGFtb3VudCl7XG5cdFx0XHRpZih0aGlzLm1lYXN1cmVzW2ldLnN0YXR1cyAmIE1lYXN1cmVTdGF0dXMuQWNjdXJhY3lNZWFzdXJlKXtcblx0XHRcdFx0YXZlcmFnZSA9IGF2ZXJhZ2UgKyBNYXRoLmFicyh0aGlzLm1lYXN1cmVzW2ldLmFjY3VyYWN5KTtcblx0XHRcdFx0YWN0dWFsQW1vdW50Kys7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGktLTtcblx0XHRcdFxuXHRcdH1cblx0XHRyZXR1cm4gKGF2ZXJhZ2UvYWN0dWFsQW1vdW50KS50b0ZpeGVkKDEpO1xuXHR9XG5cblx0bGFzdENvbXBsZXRlTWVhc3VyZSgpOk1lYXN1cmV7XG5cdFx0bGV0IGk6bnVtYmVyID0gdGhpcy5tZWFzdXJlcy5sZW5ndGggLSAxO1xuXG5cdFx0d2hpbGUoaSA+PSAwKXtcblx0XHRcdGlmKHRoaXMubWVhc3VyZXNbaV0uc3RhdHVzICYgTWVhc3VyZVN0YXR1cy5BY2N1cmFjeU1lYXN1cmUpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5tZWFzdXJlc1tpXTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aS0tO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y3VycmVudE1lYXN1cmUoKTpNZWFzdXJle1xuXHRcdGlmKHRoaXMubWVhc3VyZXMubGVuZ3RoICE9PSAwKXtcblx0XHRcdHJldHVybiB0aGlzLm1lYXN1cmVzW3RoaXMubWVhc3VyZXMubGVuZ3RoIC0gMV07XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHR1cHNlcnRNZWFzdXJlKG1lYXN1cmU6TWVhc3VyZSl7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWVhc3VyZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiaVwiLCBpKTtcblx0XHRcdGlmKHRoaXMubWVhc3VyZXNbaV0uaWQgPT0gbWVhc3VyZS5pZCl7XG5cdFx0XHRcdHRoaXMubWVhc3VyZXNbaV0gPSBtZWFzdXJlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuaGlzdG9yeVNpemUrKztcblx0XHR0aGlzLm1lYXN1cmVzLnB1c2gobWVhc3VyZSk7XG5cdH1cblxuXHRjbG9uZSgpOldhdGNoe1xuXHRcdHJldHVybiBuZXcgV2F0Y2goXG5cdFx0XHR0aGlzLmlkLFxuXHRcdFx0dGhpcy5icmFuZCxcblx0XHRcdHRoaXMuaGlzdG9yeVNpemUsXG5cdFx0XHR0aGlzLm1lYXN1cmVzLFxuXHRcdFx0dGhpcy5uYW1lLFxuXHRcdFx0dGhpcy55ZWFyT2ZCdXksXG5cdFx0XHR0aGlzLnNlcmlhbCxcblx0XHRcdHRoaXMuY2FsaWJlclxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGVudW0gV2F0Y2hBY3Rpb257XG5cdE1lYXN1cmUsIFdhaXRpbmcsIEFjY3VyYWN5XG59XG5cbmV4cG9ydCBlbnVtIFdhdGNoU3RhdHVze1xuXHROZXZlck1lYXN1cmVkLFxuXHRIYXZlTW9yZU1lYXN1cmVzXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVscy93YXRjaC5tb2RlbC50cyIsImV4cG9ydCBjbGFzcyBNZWFzdXJle1xuXG5cdGlkOm51bWJlcjtcblx0bWVhc3VyZVVzZXJUaW1lOm51bWJlcjtcblx0bWVhc3VyZVJlZmVyZW5jZVRpbWU6bnVtYmVyO1xuXHRhY2N1cmFjeVVzZXJUaW1lOm51bWJlcjtcblx0YWNjdXJhY3lSZWZlcmVuY2VUaW1lOm51bWJlcjtcblx0YWNjdXJhY3k6bnVtYmVyO1xuXHRhY2N1cmFjeUFnZTpudW1iZXI7XG5cdHBlcmNlbnRpbGU6bnVtYmVyO1xuXHRzdGF0dXM6IE1lYXN1cmVTdGF0dXMgPSBNZWFzdXJlU3RhdHVzLk5vbmU7XG5cdHNlcnZpY2VkOmJvb2xlYW4gPSBmYWxzZTtcblx0cmVuZXdlZDpib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoaWQ6IG51bWJlciwgbWVhc3VyZVVzZXJUaW1lOiBudW1iZXIsIG1lYXN1cmVSZWZlcmVuY2VUaW1lOiBudW1iZXIsIFxuXHRcdHN0YXR1cz86IG51bWJlciwgYWNjdXJhY3lVc2VyVGltZT86IG51bWJlciwgYWNjdXJhY3lSZWZlcmVuY2VUaW1lPzogbnVtYmVyLCBcblx0XHRhY2N1cmFjeT86IG51bWJlciwgYWNjdXJhY3lBZ2U/OiBudW1iZXIsIHBlcmNlbnRpbGU/OiBudW1iZXIpe1xuXG5cdFx0dGhpcy5pZCA9IGlkXG5cdFx0dGhpcy5tZWFzdXJlVXNlclRpbWUgPSBtZWFzdXJlVXNlclRpbWU7XG5cdFx0dGhpcy5tZWFzdXJlUmVmZXJlbmNlVGltZSA9IG1lYXN1cmVSZWZlcmVuY2VUaW1lO1xuXHRcdHRoaXMuYWNjdXJhY3lVc2VyVGltZSA9IGFjY3VyYWN5VXNlclRpbWU7XG5cdFx0dGhpcy5hY2N1cmFjeVJlZmVyZW5jZVRpbWUgPSBhY2N1cmFjeVJlZmVyZW5jZVRpbWU7XG5cdFx0dGhpcy5hY2N1cmFjeSA9IGFjY3VyYWN5O1xuXHRcdHRoaXMuYWNjdXJhY3lBZ2UgPSBhY2N1cmFjeUFnZTtcblx0XHR0aGlzLnBlcmNlbnRpbGUgPSBNYXRoLnJvdW5kKHBlcmNlbnRpbGUqMTApLzEwO1xuXG5cdFx0aWYoc3RhdHVzID49IDEpe1xuXHRcdFx0dGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5CYXNlTWVhc3VyZTtcblx0XHR9XG5cblx0XHRpZihzdGF0dXMgPj0gMil7XG5cdFx0XHR0aGlzLnN0YXR1cyB8PSBNZWFzdXJlU3RhdHVzLkFjY3VyYWN5TWVhc3VyZTtcblx0XHR9XG5cblx0XHRpZiAoc3RhdHVzID49IDMpIHtcblx0XHRcdHRoaXMuc3RhdHVzIHw9IE1lYXN1cmVTdGF0dXMuQXJjaGl2ZWRNZWFzdXJlO1xuXHRcdH1cblxuXHRcdGlmKGFjY3VyYWN5QWdlID4gMzApe1xuXHRcdFx0dGhpcy5yZW5ld2VkID0gdHJ1ZTtcblx0XHRcdHRoaXMuc3RhdHVzIHw9IE1lYXN1cmVTdGF0dXMuU2hvdWxkQmVSZW5ld2VkO1xuXHRcdH1cblxuXHRcdGlmKE1hdGguYWJzKGFjY3VyYWN5KSA+IDIwKXtcblx0XHRcdHRoaXMuc2VydmljZWQgPSB0cnVlO1xuXHRcdFx0dGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5TaG91bGRCZVNlcnZpY2VkO1xuXHRcdH1cblxuXHRcdHRoaXMuY29tcHV0ZVBvc3RBY2N1cmFjeVN0YXR1cyhhY2N1cmFjeSwgYWNjdXJhY3lBZ2UpO1xuXHR9XG5cblx0cHVibGljIHRvU3RyaW5nID0gKCkgOiBzdHJpbmcgPT4ge1xuXHRcdHJldHVybiBgTWVhc3VyZSAoaWQ6ICR7dGhpcy5pZH0sXG5cdFx0bWVhc3VyZVVzZXJUaW1lOiAke3RoaXMubWVhc3VyZVVzZXJUaW1lfSxcblx0XHRtZWFzdXJlUmVmZXJlbmNlVGltZTogJHt0aGlzLm1lYXN1cmVSZWZlcmVuY2VUaW1lfSxcblx0XHRhY2N1cmFjeVVzZXJUaW1lOiAke3RoaXMuYWNjdXJhY3lVc2VyVGltZX0sXG5cdFx0YWNjdXJhY3lSZWZlcmVuY2VUaW1lOiAke3RoaXMuYWNjdXJhY3lSZWZlcmVuY2VUaW1lfSxcblx0XHRhY2N1cmFjeTogJHt0aGlzLmFjY3VyYWN5fSxcblx0XHRhY2N1cmFjeUFnZTogJHt0aGlzLmFjY3VyYWN5QWdlfSxcblx0XHRwZXJjZW50aWxlOiAke3RoaXMucGVyY2VudGlsZX0sXG5cdFx0c3RhdHVzOiAke3RoaXMuc3RhdHVzfSlgO1xuXHR9XG5cblx0YWRkQmFzZU1lYXN1cmUocmVmZXJlbmNlVGltZTpudW1iZXIsIHVzZXJUaW1lOm51bWJlcil7XG5cdFx0dGhpcy5tZWFzdXJlUmVmZXJlbmNlVGltZSA9IHJlZmVyZW5jZVRpbWU7XG5cdFx0dGhpcy5tZWFzdXJlVXNlclRpbWUgPSB1c2VyVGltZTtcblx0XHR0aGlzLnN0YXR1cyB8PSBNZWFzdXJlU3RhdHVzLkJhc2VNZWFzdXJlO1xuXHR9XG5cblx0YWRkQWNjdXJhY3lNZWFzdXJlKHJlZmVyZW5jZVRpbWU6IG51bWJlciwgdXNlclRpbWU6IG51bWJlcikge1xuXHRcdHRoaXMuYWNjdXJhY3lSZWZlcmVuY2VUaW1lID0gcmVmZXJlbmNlVGltZTtcblx0XHR0aGlzLmFjY3VyYWN5VXNlclRpbWUgPSB1c2VyVGltZTtcblx0XHR0aGlzLnN0YXR1cyB8PSBNZWFzdXJlU3RhdHVzLkFjY3VyYWN5TWVhc3VyZTtcblx0fVxuXG5cdGFkZEFjY3VyYWN5KGFjY3VyYWN5Om51bWJlciwgYWNjdXJhY3lBZ2U6bnVtYmVyLCBwZXJjZW50aWxlOm51bWJlcil7XG5cdFx0Y29uc29sZS5sb2coXCJhZGRBY2N1cmFjeVwiLCBhY2N1cmFjeSxhY2N1cmFjeUFnZSxwZXJjZW50aWxlKTtcblx0XHR0aGlzLmFjY3VyYWN5ID0gYWNjdXJhY3k7XG5cdFx0dGhpcy5hY2N1cmFjeUFnZSA9IGFjY3VyYWN5QWdlO1xuXHRcdHRoaXMucGVyY2VudGlsZSA9IE1hdGgucm91bmQocGVyY2VudGlsZSoxMCkvMTA7XG5cdFx0dGhpcy5jb21wdXRlUG9zdEFjY3VyYWN5U3RhdHVzKGFjY3VyYWN5LCBhY2N1cmFjeUFnZSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbXB1dGVQb3N0QWNjdXJhY3lTdGF0dXMoYWNjdXJhY3k6bnVtYmVyLCBhY2N1cmFjeUFnZTpudW1iZXIpe1xuXHRcdGlmIChhY2N1cmFjeSAhPSBudWxsICYmIGFjY3VyYWN5QWdlICE9IG51bGwpIHtcblx0XHRcdGlmIChNYXRoLmFicyhhY2N1cmFjeSkgPiAyMCkge1xuXHRcdFx0XHR0aGlzLnN0YXR1cyB8PSBNZWFzdXJlU3RhdHVzLlNob3VsZEJlU2VydmljZWQ7XG5cdFx0XHRcdHRoaXMuc2VydmljZWQgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYWNjdXJhY3lBZ2UgPiAzMCkge1xuXHRcdFx0XHR0aGlzLnJlbmV3ZWQgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnN0YXR1cyB8PSBNZWFzdXJlU3RhdHVzLlNob3VsZEJlUmVuZXdlZDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGVudW0gTWVhc3VyZVN0YXR1c3tcblx0Tm9uZSA9IDAsXG5cdEJhc2VNZWFzdXJlID0gMSA8PCAwLFxuXHRBY2N1cmFjeU1lYXN1cmUgPSAxIDw8IDEsXG5cdEFyY2hpdmVkTWVhc3VyZSA9IDEgPDwgMixcblx0U2hvdWxkQmVSZW5ld2VkID0gMSA8PCAzLFxuXHRTaG91bGRCZVNlcnZpY2VkID0gMSA8PCA0XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVscy9tZWFzdXJlLm1vZGVsLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnMgfSAgZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cblxuaW1wb3J0IHsgVXNlciB9ICBmcm9tICcuLy4uL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCB7IFdhdGNoLCBXYXRjaEFjdGlvbiB9ICBmcm9tICcuLy4uL21vZGVscy93YXRjaC5tb2RlbCc7XG5pbXBvcnQgeyBNZWFzdXJlIH0gIGZyb20gJy4vLi4vbW9kZWxzL21lYXN1cmUubW9kZWwnO1xuaW1wb3J0IHsgTW9kZWxGYWN0b3J5IH0gIGZyb20gJy4vLi4vbW9kZWxzL21vZGVsLmZhY3RvcnknO1xuaW1wb3J0IHsgQmxvZ1Bvc3QgfSBmcm9tICcuLy4uL21vZGVscy9ibG9nLXBvc3QubW9kZWwnXG5pbXBvcnQgeyBHQVNlcnZpY2UgfSBmcm9tICcuL2dhLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RyaW5nSGVscGVyIH0gZnJvbSAnLi8uLi9oZWxwZXJzL3N0cmluZy5oZWxwZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuLyoqXG4gKiBFeHBvc2VzIHRoZSBUb29sd2F0Y2ggQVBJLlxuICogUmV0dXJucyBwcm9tZXNlcyBvbiBkb21haW4gb2JqZWN0c1xuICovXG5leHBvcnQgY2xhc3MgVHdBUElTZXJ2aWNlIHtcblxuXHQvKipcblx0ICogQWxsIHRoZSBIVFRQIGNvZGUgdXNlZCBieSB0aGUgdG9vbHdhdGNoIEFQSSBhcmUgZGVmaW5lZCBoZXJlLlxuXHQgKiBIdHRwIGNvZGVzIGNhbiBiZSB0byByZWZpbmUgdGhlIGVycm9yIHR5cGVzXG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIEhUVFBfQ09OVElOVUUgPSAxMDA7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1NXSVRDSElOR19QUk9UT0NPTFMgPSAxMDE7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1BST0NFU1NJTkcgPSAxMDI7ICAgICAgICAgICAgLy8gUkZDMjUxOFxuXG4gICAgLy8gU3VjY2Vzc1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlcXVlc3QgaGFzIHN1Y2NlZWRlZFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9PSyA9IDIwMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZXJ2ZXIgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYSBuZXcgcmVzb3VyY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfQ1JFQVRFRCA9IDIwMTtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfQUNDRVBURUQgPSAyMDI7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX05PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OID0gMjAzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcnZlciBzdWNjZXNzZnVsbHkgcHJvY2Vzc2VkIHRoZSByZXF1ZXN0LCB0aG91Z2ggbm8gY29udGVudCBpcyByZXR1cm5lZFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9OT19DT05URU5UID0gMjA0O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9SRVNFVF9DT05URU5UID0gMjA1O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9QQVJUSUFMX0NPTlRFTlQgPSAyMDY7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX01VTFRJX1NUQVRVUyA9IDIwNzsgICAgICAgICAgLy8gUkZDNDkxOFxuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9BTFJFQURZX1JFUE9SVEVEID0gMjA4OyAgICAgIC8vIFJGQzU4NDJcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfSU1fVVNFRCA9IDIyNjsgICAgICAgICAgICAgICAvLyBSRkMzMjI5XG5cbiAgICAvLyBSZWRpcmVjdGlvblxuXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX01VTFRJUExFX0NIT0lDRVMgPSAzMDA7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX01PVkVEX1BFUk1BTkVOVExZID0gMzAxO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9GT1VORCA9IDMwMjtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfU0VFX09USEVSID0gMzAzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIGhhcyBub3QgYmVlbiBtb2RpZmllZCBzaW5jZSB0aGUgbGFzdCByZXF1ZXN0XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX05PVF9NT0RJRklFRCA9IDMwNDtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfVVNFX1BST1hZID0gMzA1O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9SRVNFUlZFRCA9IDMwNjtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfVEVNUE9SQVJZX1JFRElSRUNUID0gMzA3O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9QRVJNQU5FTlRMWV9SRURJUkVDVCA9IDMwODsgIC8vIFJGQzcyMzhcblxuICAgIC8vIENsaWVudCBFcnJvclxuXG4gICAgLyoqXG4gICAgICogVGhlIHJlcXVlc3QgY2Fubm90IGJlIGZ1bGZpbGxlZCBkdWUgdG8gbXVsdGlwbGUgZXJyb3JzXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0JBRF9SRVFVRVNUID0gNDAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHVzZXIgaXMgdW5hdXRob3JpemVkIHRvIGFjY2VzcyB0aGUgcmVxdWVzdGVkIHJlc291cmNlXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1VOQVVUSE9SSVpFRCA9IDQwMTtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUEFZTUVOVF9SRVFVSVJFRCA9IDQwMjtcblxuICAgIC8qKlxuICAgICAqIFRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgaXMgdW5hdmFpbGFibGUgYXQgdGhpcyBwcmVzZW50IHRpbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfRk9SQklEREVOID0gNDAzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlcXVlc3RlZCByZXNvdXJjZSBjb3VsZCBub3QgYmUgZm91bmRcbiAgICAgKlxuICAgICAqIE5vdGU6IFRoaXMgaXMgc29tZXRpbWVzIHVzZWQgdG8gbWFzayBpZiB0aGVyZSB3YXMgYW4gVU5BVVRIT1JJWkVEICg0MDEpIG9yXG4gICAgICogRk9SQklEREVOICg0MDMpIGVycm9yLCBmb3Igc2VjdXJpdHkgcmVhc29uc1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9OT1RfRk9VTkQgPSA0MDQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmVxdWVzdCBtZXRob2QgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgZm9sbG93aW5nIHJlc291cmNlXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX01FVEhPRF9OT1RfQUxMT1dFRCA9IDQwNTtcblxuICAgIC8qKlxuICAgICAqIFRoZSByZXF1ZXN0IHdhcyBub3QgYWNjZXB0YWJsZVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9OT1RfQUNDRVBUQUJMRSA9IDQwNjtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUFJPWFlfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQgPSA0MDc7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1JFUVVFU1RfVElNRU9VVCA9IDQwODtcblxuICAgIC8qKlxuICAgICAqIFRoZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSBjb21wbGV0ZWQgZHVlIHRvIGEgY29uZmxpY3Qgd2l0aCB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAqIG9mIHRoZSByZXNvdXJjZVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9DT05GTElDVCA9IDQwOTtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfR09ORSA9IDQxMDtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTEVOR1RIX1JFUVVJUkVEID0gNDExO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9QUkVDT05ESVRJT05fRkFJTEVEID0gNDEyO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9SRVFVRVNUX0VOVElUWV9UT09fTEFSR0UgPSA0MTM7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1JFUVVFU1RfVVJJX1RPT19MT05HID0gNDE0O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9VTlNVUFBPUlRFRF9NRURJQV9UWVBFID0gNDE1O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9SRVFVRVNURURfUkFOR0VfTk9UX1NBVElTRklBQkxFID0gNDE2O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9FWFBFQ1RBVElPTl9GQUlMRUQgPSA0MTc7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0lfQU1fQV9URUFQT1QgPSA0MTg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkMyMzI0XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1VOUFJPQ0VTU0FCTEVfRU5USVRZID0gNDIyOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkM0OTE4XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0xPQ0tFRCA9IDQyMzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkM0OTE4XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0ZBSUxFRF9ERVBFTkRFTkNZID0gNDI0OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkM0OTE4XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1JFU0VSVkVEX0ZPUl9XRUJEQVZfQURWQU5DRURfQ09MTEVDVElPTlNfRVhQSVJFRF9QUk9QT1NBTCA9IDQyNTsgICAvLyBSRkMyODE3XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1VQR1JBREVfUkVRVUlSRUQgPSA0MjY7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkMyODE3XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1BSRUNPTkRJVElPTl9SRVFVSVJFRCA9IDQyODsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkM2NTg1XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1RPT19NQU5ZX1JFUVVFU1RTID0gNDI5OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkM2NTg1XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1JFUVVFU1RfSEVBREVSX0ZJRUxEU19UT09fTEFSR0UgPSA0MzE7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkM2NTg1XG5cbiAgICAvLyBTZXJ2ZXIgRXJyb3JcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZXJ2ZXIgZW5jb3VudGVyZWQgYW4gdW5leHBlY3RlZCBlcnJvclxuICAgICAqXG4gICAgICogTm90ZTogVGhpcyBpcyBhIGdlbmVyaWMgZXJyb3IgbWVzc2FnZSB3aGVuIG5vIHNwZWNpZmljIG1lc3NhZ2VcbiAgICAgKiBpcyBzdWl0YWJsZVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9JTlRFUk5BTF9TRVJWRVJfRVJST1IgPSA1MDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VydmVyIGRvZXMgbm90IHJlY29nbmlzZSB0aGUgcmVxdWVzdCBtZXRob2RcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTk9UX0lNUExFTUVOVEVEID0gNTAxO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9CQURfR0FURVdBWSA9IDUwMjtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfU0VSVklDRV9VTkFWQUlMQUJMRSA9IDUwMztcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfR0FURVdBWV9USU1FT1VUID0gNTA0O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURUQgPSA1MDU7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1ZBUklBTlRfQUxTT19ORUdPVElBVEVTX0VYUEVSSU1FTlRBTCA9IDUwNjsgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkMyMjk1XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0lOU1VGRklDSUVOVF9TVE9SQUdFID0gNTA3OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkM0OTE4XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0xPT1BfREVURUNURUQgPSA1MDg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkM1ODQyXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX05PVF9FWFRFTkRFRCA9IDUxMDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkMyNzc0XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX05FVFdPUktfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQgPSA1MTE7XG5cbiAgICBwdWJsaWMgc3RhdGljIHVzZXI6VXNlcjtcbiAgICBwcml2YXRlIHN0YXRpYyB0aW1lOntcbiAgICBcdHN5bmNEYXRlOkRhdGUsXG4gICAgXHRzeW5jQW5jaG9yOm51bWJlcixcbiAgICBcdG9mZnNldDpudW1iZXJcbiAgICB9XG5cblx0Ly9EZWZpbmVzIGhlYWRlcnMgYW5kIHJlcXVlc3Qgb3B0aW9uc1xuXHRwcml2YXRlIHN0YXRpYyBoZWFkZXJzOiBIZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuXHRwcml2YXRlIHN0YXRpYyBvcHRpb25zOiBSZXF1ZXN0T3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IFR3QVBJU2VydmljZS5oZWFkZXJzIH0pO1xuXHQvLyBSZWdyZXNzaW9uIFJDNS4gRG9lc24ndCBhY2NlcHQgZ2V0IHdpdGhvdXQgYm9keVxuXHRwcml2YXRlIHN0YXRpYyBvcHRpb25zR2V0OiBSZXF1ZXN0T3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IFR3QVBJU2VydmljZS5oZWFkZXJzLCBib2R5OlwiXCIgfSk7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGJhc2VVcmw6c3RyaW5nID0gXCJodHRwczovL3Rvb2x3YXRjaC5pby9hcGkvXCI7XG5cdHB1YmxpYyBzdGF0aWMgYXNzZXRzVXJsID0gXCJhcHAvYXNzZXRzXCJcblx0cHJpdmF0ZSBzdGF0aWMgYXBpa2V5OnN0cmluZztcblxuXHQvKipcblx0ICogSW5qZWN0IGh0dHAgc2VydmljZVxuXHQgKiBAcGFyYW0ge0h0dHB9IHByaXZhdGUgaHR0cCBcblx0ICovXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7XG5cdFx0dGhpcy5hY2N1cmF0ZVRpbWUoKTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgcmVzZXRUaW1lKCl7XG5cdFx0VHdBUElTZXJ2aWNlLnRpbWUgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKipcblx0ICogTG9nIGEgdXNlciB1c2luZyBlbWFpbCBhbmQgcGFzc3dvcmRcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgZW1haWwgICBcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgcGFzc3dvcmRcblx0ICogQHJldHVybiB7UHJvbWlzZTxVc2VyPn0gICAgICAgICBcblx0ICovXG5cdGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+IHtcblxuXHRcdGxldCBjcmVkcyA9IHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQgfTtcblx0XHRyZXR1cm4gdGhpcy5odHRwLnB1dChcblx0XHRcdFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJ1c2Vyc1wiLCBcblx0XHRcdEpTT04uc3RyaW5naWZ5KGNyZWRzKSwgXG5cdFx0XHRUd0FQSVNlcnZpY2Uub3B0aW9uc1xuXHRcdClcblx0XHQubWFwKChyZXMpID0+IHsgcmV0dXJuIE1vZGVsRmFjdG9yeS5idWlsZFVzZXIocmVzLmpzb24oKSk7IH0pXG5cdFx0LnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRyZXMgPT4ge1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ0xPR0lOJyk7XG5cdFx0XHRcdFR3QVBJU2VydmljZS5hcGlrZXkgPSByZXMua2V5O1xuXHRcdFx0XHRUd0FQSVNlcnZpY2UuaGVhZGVycy5kZWxldGUoJ1gtQVBJLUtFWScpO1xuXHRcdFx0XHRUd0FQSVNlcnZpY2UuaGVhZGVycy5hcHBlbmQoJ1gtQVBJLUtFWScsIFR3QVBJU2VydmljZS5hcGlrZXkpO1xuXHRcdFx0XHRUd0FQSVNlcnZpY2UudXNlciA9IHJlcztcblx0XHRcdFx0cmV0dXJuIHJlcztcblx0XHRcdH0sXG5cdFx0XHRlcnIgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnIpXG5cdFx0KTtcblx0fSAgXG5cblxuICAgIC8qKlxuICAgICAqIEdldCBhbiB1c2VyIHVzaW5nIGhpcyBBUEkga2V5XG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAga2V5IFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFVzZXI+fSAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldFVzZXIoa2V5OnN0cmluZyk6UHJvbWlzZTxVc2VyPiB7XG5cbiAgICAgICAgXG4gICAgICAgIFR3QVBJU2VydmljZS5hcGlrZXkgPSBrZXk7XG4gICAgICAgIFR3QVBJU2VydmljZS5oZWFkZXJzLmRlbGV0ZSgnWC1BUEktS0VZJyk7XG4gICAgICAgIFR3QVBJU2VydmljZS5oZWFkZXJzLmFwcGVuZCgnWC1BUEktS0VZJywgVHdBUElTZXJ2aWNlLmFwaWtleSk7XG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgICAgICAgVHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcInVzZXJzXCIsIFxuICAgICAgICAgICAgVHdBUElTZXJ2aWNlLm9wdGlvbnNcbiAgICAgICAgKVxuICAgICAgICAubWFwKChyZXMpID0+IHsgcmV0dXJuIE1vZGVsRmFjdG9yeS5idWlsZFVzZXIocmVzLmpzb24oKSk7IH0pXG4gICAgICAgIC50b1Byb21pc2UoKS50aGVuKFxuICAgICAgICAgICAgcmVzID0+IHtcblxuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ0FVVE9MT0dJTicpO1xuICAgICAgICAgICAgICAgIFR3QVBJU2VydmljZS51c2VyID0gcmVzO1xuICAgICAgICAgICAgICAgIHJlcy5rZXkgPSBrZXk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnIpXG4gICAgICAgIClcblxuICAgIH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGEgbmV3IHVzZXJcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgZW1haWwgICBcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgcGFzc3dvcmRcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgbmFtZSAgICBcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgbGFzdG5hbWVcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgY291bnRyeSBcblx0ICogQHJldHVybiB7UHJvbWlzZTxVc2VyPn0gICAgICAgICBcblx0ICovXG5cdHNpZ251cChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCBsYXN0bmFtZT86IHN0cmluZywgY291bnRyeT86IHN0cmluZyk6IFByb21pc2U8VXNlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuXHRcdFx0VHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcInVzZXJzXCIsXG5cdFx0XHRKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdGVtYWlsOiBlbWFpbCwgXG5cdFx0XHRcdHBhc3N3b3JkOiBwYXNzd29yZCxcblx0XHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdFx0bGFzdG5hbWU6IGxhc3RuYW1lLFxuXHRcdFx0XHRjb3VudHJ5OmNvdW50cnlcblx0XHRcdH0pLFxuXHRcdFx0VHdBUElTZXJ2aWNlLm9wdGlvbnNcblx0XHQpXG5cdFx0Lm1hcCgocmVzKSA9PiB7IHJldHVybiBNb2RlbEZhY3RvcnkuYnVpbGRVc2VyKHJlcy5qc29uKCkpOyB9KVxuXHRcdC50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzID0+IHtcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdTSUdOVVAnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGEgbmV3IGZhY2Vib29rIHVzZXJcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgZW1haWwgICBcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgdG9rZW5cblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgbmFtZSAgICBcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgbGFzdG5hbWVcblx0ICogQHJldHVybiB7UHJvbWlzZTxVc2VyPn0gICAgIFxuXHQgKi9cblx0c2lnbnVwRmFjZWJvb2soZW1haWw6IHN0cmluZywgdG9rZW46IHN0cmluZywgbmFtZT86IHN0cmluZywgbGFzdG5hbWU/OiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+e1xuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChcblx0XHRcdFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJ1c2Vycy9mYWNlYm9va1wiLFxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRlbWFpbDogZW1haWwsIFxuXHRcdFx0XHR0b2tlbjogdG9rZW4sXG5cdFx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRcdGxhc3RuYW1lOiBsYXN0bmFtZVxuXHRcdFx0fSksXG5cdFx0XHRUd0FQSVNlcnZpY2Uub3B0aW9uc1xuXHRcdClcblx0XHQubWFwKChyZXMpID0+IHsgcmV0dXJuIE1vZGVsRmFjdG9yeS5idWlsZFVzZXIocmVzLmpzb24oKSk7IH0pXG5cdFx0LnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRyZXMgPT4ge1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ1NJR05VUCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBc2sgYSByZXNldCBwYXNzd29yZCBsaW5rXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59XG5cdCAqL1xuXHRyZXNldFBhc3N3b3JkKGVtYWlsOnN0cmluZyk6UHJvbWlzZTxib29sZWFuPntcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwidXNlcnMvcmVzZXRcIixcblx0XHRcdEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0ZW1haWw6IGVtYWlsXG5cdFx0XHR9KSxcblx0XHRcdFR3QVBJU2VydmljZS5vcHRpb25zXG5cdFx0KS50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ1JFU0VUX1BBU1NXT1JEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cdFx0KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWxldGVzIHRoZSBhY2NvdW50IGN1cnJlbnRseSBsb2dnZWQgaW4uXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59XG5cdCAqL1xuXHRkZWxldGVBY2NvdW50KCk6UHJvbWlzZTxib29sZWFuPntcblxuXHRcdHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFxuXHRcdFx0VHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcInVzZXJzXCIsXG5cdFx0XHRUd0FQSVNlcnZpY2Uub3B0aW9uc1xuXHRcdCkudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdERUxFVEVfQUNDT1VOVCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXHRcdCkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG5cdH1cblxuXHRnZXRXYXRjaGVzKCk6IFByb21pc2U8V2F0Y2hbXT57XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwid2F0Y2hlc1wiLFxuXHRcdFx0VHdBUElTZXJ2aWNlLm9wdGlvbnNHZXQpXG5cdFx0Lm1hcCgocmVzKSA9PiB7IHJldHVybiBNb2RlbEZhY3RvcnkuYnVpbGRXYXRjaGVzKHJlcy5qc29uKCkpOyB9KVxuXHRcdC50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzID0+IHtcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdXQVRDSEVTJywgJ0dFVCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAgIH1cblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZSBvciBpbnNlcnQgYSB3YXRjaFxuXHQgKiBAcGFyYW0gIHtXYXRjaH0gICAgICAgICAgd2F0Y2hcblx0ICogQHJldHVybiB7UHJvbWlzZTxXYXRjaD59ICAgICAgXG5cdCAqL1xuXHR1cHNlcnRXYXRjaCh3YXRjaDogV2F0Y2gpOiBQcm9taXNlPFdhdGNoPiB7XG5cblx0XHRpZih3YXRjaC5pZCA9PSBudWxsKXtcblx0XHRcdHJldHVybiB0aGlzLmluc2VydFdhdGNoKHdhdGNoKTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiB0aGlzLnVwZGF0ZVdhdGNoKHdhdGNoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRGVsZXRlcyBhIHdhdGNoIGFuZCB1cGRhdGUgdGhlIHVzZXIgYWNjb3JkaW5nbHlcblx0ICogQHBhcmFtICB7VXNlcn0gICAgICAgICAgdXNlciAgXG5cdCAqIEBwYXJhbSAge1dhdGNofSAgICAgICAgIHdhdGNoIFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFVzZXI+fSAgICAgICBcblx0ICovXG5cdGRlbGV0ZVdhdGNoKHVzZXI6VXNlciwgd2F0Y2g6V2F0Y2gpOlByb21pc2U8VXNlcj57XG5cdFx0bGV0IGRlbGV0ZU9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBUd0FQSVNlcnZpY2UuaGVhZGVycyB9KTtcblx0XHRkZWxldGVPcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeSh7IHdhdGNoSWQ6IHdhdGNoLmlkIH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwid2F0Y2hlc1wiLFxuXHRcdFx0ZGVsZXRlT3B0aW9uc1xuXHRcdCkudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdHJlc3BvbnNlID0+IHtcblxuXHRcdFx0XHR1c2VyLndhdGNoZXMgPSB1c2VyLndhdGNoZXMuZmlsdGVyKFxuXHRcdFx0XHRcdGZ1bmN0aW9uKGZpbHRlcjogV2F0Y2gpIHtcblx0XHRcdFx0XHRcdHJldHVybiBmaWx0ZXIuaWQgIT0gd2F0Y2guaWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnV0FUQ0hFUycsICdERUxFVEUnKTtcblxuXHRcdFx0XHRyZXR1cm4gdXNlcjtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluc2VydCBvciB1cGRhdGUgYSBtZWFzdXJlIGFuZCB0aGUgcmVsYXRlZCB3YXRjaFxuXHQgKiBAcGFyYW0gIHtXYXRjaH0gICAgICAgICAgd2F0Y2ggIFxuXHQgKiBAcGFyYW0gIHtNZWFzdXJlfSAgICAgICAgbWVhc3VyZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFdhdGNoPn0gICAgICAgIFxuXHQgKi9cblx0dXBzZXJ0TWVhc3VyZSh3YXRjaDogV2F0Y2gsIG1lYXN1cmU6IE1lYXN1cmUpOiBQcm9taXNlPFdhdGNoPiB7XG5cdFx0aWYobWVhc3VyZS5pZCA9PSBudWxsKXtcblx0XHRcdHJldHVybiB0aGlzLmluc2VydE1lYXN1cmUod2F0Y2gsIG1lYXN1cmUpO1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIHRoaXMudXBkYXRlTWVhc3VyZSh3YXRjaCwgbWVhc3VyZSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIERlbGV0ZSBhIG1lYXN1cmUgYW5kIHRoZSB1cGRhdGUgdGhlIHJlbGF0ZWQgd2F0Y2hcblx0ICogQHBhcmFtICB7V2F0Y2h9ICAgICAgICAgIHdhdGNoICBcblx0ICogQHBhcmFtICB7TWVhc3VyZX0gICAgICAgIG1lYXN1cmVcblx0ICogQHJldHVybiB7UHJvbWlzZTxXYXRjaD59ICAgICAgICBcblx0ICovXG5cdGRlbGV0ZU1lYXN1cmUod2F0Y2g6IFdhdGNoLCBtZWFzdXJlOiBNZWFzdXJlKTogUHJvbWlzZTxXYXRjaD4ge1xuXG5cdFx0bGV0IGRlbGV0ZU9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBUd0FQSVNlcnZpY2UuaGVhZGVycyB9KTtcblx0XHRkZWxldGVPcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeSh7bWVhc3VyZUlkOm1lYXN1cmUuaWR9KTtcblxuXHRcdHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFxuXHRcdFx0VHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcIm1lYXN1cmVzXCIsXG5cdFx0XHRkZWxldGVPcHRpb25zXG5cdFx0KS50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzcG9uc2UgPT4ge1xuXG5cdFx0XHRcdHdhdGNoLm1lYXN1cmVzID0gd2F0Y2gubWVhc3VyZXMuZmlsdGVyKFxuXHRcdFx0XHRcdGZ1bmN0aW9uKGZpbHRlcjogTWVhc3VyZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZpbHRlci5pZCAhPSBtZWFzdXJlLmlkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblxuXHRcdFx0XHR3YXRjaC5jb21wdXRlTmV4dCgpO1xuXHRcdFx0XHR3YXRjaC5oaXN0b3J5U2l6ZS0tO1xuXG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnTUVBU1VSRScsICdERUxFVEUnKTtcblxuXHRcdFx0XHRyZXR1cm4gd2F0Y2g7XG5cdFx0XHR9XG5cdFx0KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblx0fVxuXG5cdGdldEJsb2dQb3N0cygpOiBQcm9taXNlPEJsb2dQb3N0W10+e1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuXHRcdFx0XCJodHRwczovL2Jsb2cudG9vbHdhdGNoLmlvLz9qc29uPTFcIlxuXHRcdClcblx0XHQubWFwKChyZXMpID0+IHsgcmV0dXJuIE1vZGVsRmFjdG9yeS5idWlsZFBvc3RzKHJlcy5qc29uKCkpOyB9KVxuXHRcdC50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzID0+IHtcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdCTE9HJywgJ0dFVCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAgIH1cblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdpdmVuIGEgYnJhbmQsIHJldHVybnMgbGlrZWx5IGJyYW5kcyBvcmRlcmVkIGJ5IGNvbmZpZGVuY2Vcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgYnJhbmQgW2Rlc2NyaXB0aW9uXVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgICBbe2JyYW5kOnN0cmluZywgY29uZmlkZW5jZTpudW1iZXJ9XVxuXHQgKi9cblx0Z2V0TGlrZWx5QnJhbmRzKHdhdGNoOldhdGNoKTogUHJvbWlzZTx7d2F0Y2g6V2F0Y2gsIHByb3Bvc2Fsczpbe2JyYW5kOnN0cmluZywgbG9nbzpzdHJpbmcsIGNvbmZpZGVuY2U6bnVtYmVyfV19PntcblxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuXHRcdFx0VHdBUElTZXJ2aWNlLmFzc2V0c1VybCArICcvd2F0Y2gtYnJhbmQuanNvbicpXG5cdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSlcblx0XHQudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdGJyYW5kcyA9PiB7XG5cblx0XHRcdFx0dmFyIGxpa2VseUJyYW5kcyA9IHt3YXRjaDogd2F0Y2gsIHByb3Bvc2FsczpbXX07XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IGJyYW5kcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXG5cblx0XHRcdFx0XHRsZXQgbGV2ZW5zaHRlaW5EaXN0YW5jZSA9IFN0cmluZ0hlbHBlci5sZXZlbnNodGVpbihicmFuZHNbaV0ubmFtZSwgd2F0Y2guYnJhbmQpO1xuXHRcdFx0XHRcdGxldCBjb25maWRlbmNlID0gbGV2ZW5zaHRlaW5EaXN0YW5jZSAvIE1hdGgubWF4KHdhdGNoLmJyYW5kLmxlbmd0aCwgYnJhbmRzW2ldLm5hbWUubGVuZ3RoKSAqMTAwO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGxpa2VseUJyYW5kcy5wcm9wb3NhbHMucHVzaChcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0YnJhbmQ6YnJhbmRzW2ldLm5hbWUsXG5cdFx0XHRcdFx0XHRcdGxvZ286IGJyYW5kc1tpXS5pY29uLFxuXHRcdFx0XHRcdFx0XHRjb25maWRlbmNlOiAxMDAgLSBjb25maWRlbmNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxpa2VseUJyYW5kcy5wcm9wb3NhbHMgPSBsaWtlbHlCcmFuZHMucHJvcG9zYWxzLnNvcnQoZnVuY3Rpb24gKFxuXHRcdFx0XHRcdGE6e2JyYW5kOnN0cmluZywgY29uZmlkZW5jZTpudW1iZXJ9LCBcblx0XHRcdFx0XHRiOnticmFuZDpzdHJpbmcsIGNvbmZpZGVuY2U6bnVtYmVyfSl7XG5cdFx0XHRcdFx0cmV0dXJuIGIuY29uZmlkZW5jZSAtIGEuY29uZmlkZW5jZTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIGxpa2VseUJyYW5kcztcbiAgICAgICAgICAgIH1cblx0XHQpO1xuXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGtub3duIGJyYW5kc1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlfSBcblx0ICovXG5cdGdldEJyYW5kcygpOiBQcm9taXNlPFt7IG5hbWU6IHN0cmluZywgaWNvbjogc3RyaW5nLCBtb2RlbHM6c3RyaW5nfV0+IHtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcblx0XHRcdFR3QVBJU2VydmljZS5hc3NldHNVcmwgKyAnL3dhdGNoLWJyYW5kLmpzb24nKVxuXHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG5cdFx0LnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRicmFuZHMgPT4ge1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ0JSQU5EUycsICdHRVQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmRzO1xuICAgICAgICAgICAgfVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBtb2RlbCBvZiBhIGdpdmVuIGJyYW5kXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gIGJyYW5kXG5cdCAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgXG5cdCAqL1xuXHRnZXRNb2RlbHMoYnJhbmQ6c3RyaW5nKTogUHJvbWlzZTxbc3RyaW5nXT4ge1xuXG5cdFx0YnJhbmQgPSBTdHJpbmdIZWxwZXIucmVwbGFjZUFsbChicmFuZCwgXCIgXCIsIFwiXCIpO1xuXHRcdGJyYW5kID0gU3RyaW5nSGVscGVyLnJlcGxhY2VBbGwoYnJhbmQsIFwiJlwiLCBcIlwiKTtcblx0XHRcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcblx0XHRcdFR3QVBJU2VydmljZS5hc3NldHNVcmwgKyAnL3dhdGNoLW1vZGVscy8nICsgYnJhbmQgKyBcIi5qc29uXCIpXG5cdFx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKVxuXHRcdFx0LnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRtb2RlbHMgPT4ge1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ01PREVMUycsICdHRVQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWxzXG4gICAgICAgICAgICB9XG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIG1vZGVsIG9mIGEgZ2l2ZW4gYnJhbmRcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgYnJhbmRcblx0ICogQHJldHVybiB7UHJvbWlzZX0gICAgICBcblx0ICovXG5cdGdldENhbGliZXJzKGJyYW5kOnN0cmluZyk6IFByb21pc2U8W3N0cmluZ10+IHtcblxuXHRcdGJyYW5kID0gU3RyaW5nSGVscGVyLnJlcGxhY2VBbGwoYnJhbmQsIFwiIFwiLCBcIlwiKTtcblx0XHRicmFuZCA9IFN0cmluZ0hlbHBlci5yZXBsYWNlQWxsKGJyYW5kLCBcIiZcIiwgXCJcIik7XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYXNzZXRzVXJsICsgJy93YXRjaC1jYWxpYmVycy8nICsgYnJhbmQgKyBcIi5qc29uXCIpXG5cdFx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKVxuXHRcdFx0LnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRjYWxpYmVycyA9PiB7XG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnQ0FMSUJFUlMnLCAnR0VUJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGliZXJzXG4gICAgICAgICAgICB9XG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBwcmV2aW91c2x5IGNvbXB1dGVkIG9mZnNldFxuXHQgKiBAcmV0dXJuIHtudW1iZXJ9IFtkZXNjcmlwdGlvbl1cblx0ICovXG5cdGdldE9mZnNldFRpbWUoKTpudW1iZXJ7XG5cdFx0cmV0dXJuIFR3QVBJU2VydmljZS50aW1lLm9mZnNldDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXRyaWV2ZSBhdG9taWMgY2xvY2sgdGltZSBhZGp1c3RlZCBmb3IgbmV0d29yayBsYXRlbmN5XG5cdCAqIEBwYXJhbSAgeygpPT52b2lkfSBzdGF0dXNDYWxsYmFjayBDYWxsZWQgYXQgZWFjaCBwYXJ0aWFsIGNvbXBsZXRlXG5cdCAqIEBwYXJhbSAge251bWJlciA9IDB9IHByZWNpc29uIEhvdyBtYW55IGNhbGxzIHdlIHdhbnQgdG8gYXZlYWdlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8RGF0ZT59IFxuXHQgKi9cblx0YWNjdXJhdGVUaW1lKHN0YXR1c0NhbGxiYWNrPzooKT0+dm9pZCwgXG5cdFx0cHJlY2lzb246bnVtYmVyID0gMTApOiBQcm9taXNlPERhdGU+e1xuXG4gICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ1RJTUUnLCAnR0VUJyk7XG5cblxuXHRcdC8vSWYgd2UgYXJlbid0IGFscmVhZHkgc3luYydlZFxuXHRcdGlmKFR3QVBJU2VydmljZS50aW1lID09PSB1bmRlZmluZWQpe1xuXHRcdFx0Ly9TdG9yZXMgZWFjaCBQcm9taXNlIGluIGFycmF5XG5cdFx0XHRsZXQgcHJvbWlzZXM6UHJvbWlzZTxudW1iZXI+W10gPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcHJlY2lzb247ICsraSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKHRoaXMuZmV0Y2hUaW1lKHN0YXR1c0NhbGxiYWNrKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUHJvbWlzZS5hbGwoKSBpcyB0aGUgUHJvbWlzZSBlcXVpdmFsZW50IG9mIHRocmVhZC5qb2luKCkuXG5cdFx0XHQgKiBJdCdsbCB3YWl0IGZvciBhbGwgcHJvbWlzZXMgdG8gYmUgcmVjZWl2ZWQuIFxuXHRcdFx0ICpcblx0XHRcdCAqIFJldHVybnMgYSBkYXRlIGFkanVzdGVkIHcvIHRoZSBtZWRpYW4gb2Zmc2V0IGJldHdlZW4gXG5cdFx0XHQgKiBhdG9taWMgY2xvY2sgYW5kIGpzIHRpbWUuIFxuXHRcdFx0ICogVGhlIG9mZnNldCByZWNlaXZlZCBpbiBlYWNoIHByb21pc2UgYWxzbyBhY2NvdW50cyBmb3Jcblx0XHRcdCAqIHRoZSBuZXR3b3JrIHJvdW5kdHJpcCB0aW1lLlxuXHRcdFx0ICovXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKHJlc3VsdHM6YW55W10pID0+IHtcblx0XHRcdFx0cmVzdWx0cy5zb3J0KGZ1bmN0aW9uKGE6IGFueSwgYjogYW55KSB7IHJldHVybiBhIC0gYjsgfSk7XG5cblx0XHRcdFx0bGV0IGhhbGY6IG51bWJlciA9IE1hdGguZmxvb3IocmVzdWx0cy5sZW5ndGggLyAyKTtcblx0XHRcdFx0bGV0IG1lZGlhbk9mZnNldDtcblxuXHRcdFx0XHRpZiAocmVzdWx0cy5sZW5ndGggJSAyKSB7XG5cdFx0XHRcdFx0bWVkaWFuT2Zmc2V0ID0gcmVzdWx0c1toYWxmXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtZWRpYW5PZmZzZXQgPSAocmVzdWx0c1toYWxmIC0gMV0gKyByZXN1bHRzW2hhbGZdKSAvIDIuMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdFR3QVBJU2VydmljZS50aW1lID0ge1xuXHRcdFx0XHRcdHN5bmNEYXRlOiBuZXcgRGF0ZShEYXRlLm5vdygpIC0gbWVkaWFuT2Zmc2V0KSxcblx0XHRcdFx0XHRzeW5jQW5jaG9yOiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCksXG5cdFx0XHRcdFx0b2Zmc2V0Om1lZGlhbk9mZnNldFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHJldHVybiBUd0FQSVNlcnZpY2UudGltZS5zeW5jRGF0ZTtcblx0XHRcdH0pO1xuXHRcdC8vT25seSBjb21wdXRlIHRoZSBkaWZmZXJlbmNlIGZyb20gbGFzdCB0aW1lO1xuXHRcdH1lbHNle1xuXG5cdFx0XHRUd0FQSVNlcnZpY2UudGltZS5zeW5jRGF0ZSA9IG5ldyBEYXRlKFxuXHRcdFx0XHRUd0FQSVNlcnZpY2UudGltZS5zeW5jRGF0ZS5nZXRUaW1lKCkgK1xuXHRcdFx0XHR3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgLSBUd0FQSVNlcnZpY2UudGltZS5zeW5jQW5jaG9yXG5cdFx0XHQpO1xuXHRcdFx0XG5cdFx0XHRUd0FQSVNlcnZpY2UudGltZS5zeW5jQW5jaG9yID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2U8RGF0ZT4oXG5cdFx0XHRcdChyZXNvbHZlLCByZWplY3QpID0+IHsgXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coVHdBUElTZXJ2aWNlLnRpbWUpO1xuXHRcdFx0XHRcdHJlc29sdmUoVHdBUElTZXJ2aWNlLnRpbWUuc3luY0RhdGUpOyBcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRmV0Y2ggb2Zmc2V0IGJldHdlZW4gYXRvbWljIGNsb2NrIGFuZCBqcyB0aW1lXG5cdCAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gc3RhdHVzQ2FsbGJhY2tcblx0ICovXG5cdHB1YmxpYyBmZXRjaFRpbWUoc3RhdHVzQ2FsbGJhY2s/OiAoKSA9PiB2b2lkKVxuXHRcdDogUHJvbWlzZTxudW1iZXI+IHtcblxuXHRcdGxldCBiZWZvcmVUaW1lOiBudW1iZXIgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoVHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcInRpbWVcIiwgVHdBUElTZXJ2aWNlLm9wdGlvbnNHZXQpXG5cdFx0XHQudG9Qcm9taXNlKClcblx0XHRcdC50aGVuKFxuXHRcdFx0XHRyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0aWYgKHN0YXR1c0NhbGxiYWNrICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0XHRcdFx0c3RhdHVzQ2FsbGJhY2soKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsZXQgbm93OiBudW1iZXIgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG5cdFx0XHRcdFx0bGV0IHRpbWVEaWZmID0gKG5vdyAtIGJlZm9yZVRpbWUpIC8gMjtcblx0XHRcdFx0XHRsZXQgc2VydmVyVGltZSA9IHJlc3BvbnNlLmpzb24oKS50aW1lIC0gdGltZURpZmY7XG5cdFx0XHRcdFx0cmV0dXJuIERhdGUubm93KCkgLSBzZXJ2ZXJUaW1lO1xuXHRcdFx0XHR9LCBcblx0XHRcdFx0cmVqZWN0ID0+IGNvbnNvbGUuZXJyb3IocmVqZWN0KVxuXHRcdCkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlIGEgbWVhc3VyZSBhbmQgdGhlIHdhdGNoIGl0IGJlbG9uZ3MgdG9cblx0ICogQHBhcmFtICB7V2F0Y2h9ICAgICAgICAgIHdhdGNoICBcblx0ICogQHBhcmFtICB7TWVhc3VyZX0gICAgICAgIG1lYXN1cmVcblx0ICogQHJldHVybiB7UHJvbWlzZTxXYXRjaD59ICAgICAgICBcblx0ICovXG5cdHByaXZhdGUgdXBkYXRlTWVhc3VyZSh3YXRjaDogV2F0Y2gsIG1lYXN1cmU6IE1lYXN1cmUpOiBQcm9taXNlPFdhdGNoPiB7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wdXQoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwibWVhc3VyZXNcIixcblx0XHRcdEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0bWVhc3VyZUlkOiBtZWFzdXJlLmlkLFxuXHRcdFx0XHRyZWZlcmVuY2VUaW1lOiBtZWFzdXJlLmFjY3VyYWN5UmVmZXJlbmNlVGltZSxcblx0XHRcdFx0dXNlclRpbWU6IG1lYXN1cmUuYWNjdXJhY3lVc2VyVGltZVxuXHRcdFx0fSksXG5cdFx0XHRUd0FQSVNlcnZpY2Uub3B0aW9uc1xuXHRcdCkudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdNRUFTVVJFJywgJ1NFQ09ORCcpO1xuXHRcdFx0XHRsZXQganNvbiA9IHJlc3BvbnNlLmpzb24oKS5yZXN1bHQ7XG5cdFx0XHRcdG1lYXN1cmUuYWRkQWNjdXJhY3koanNvbi5hY2N1cmFjeSwganNvbi5hY2N1cmFjeUFnZSwganNvbi5wZXJjZW50aWxlKTtcblx0XHRcdFx0d2F0Y2gudXBzZXJ0TWVhc3VyZShtZWFzdXJlKTtcblx0XHRcdFx0d2F0Y2gubmV4dCA9IFdhdGNoQWN0aW9uLk1lYXN1cmU7XG5cdFx0XHRcdHJldHVybiB3YXRjaDtcblx0XHRcdH1cblx0XHQpLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluc2VydCBhIG1lYXN1cmUgYW5kIHRoZSB3YXRjaCBpdCBiZWxvbmdzIHRvXG5cdCAqIEBwYXJhbSAge1dhdGNofSAgICAgICAgICB3YXRjaCAgXG5cdCAqIEBwYXJhbSAge01lYXN1cmV9ICAgICAgICBtZWFzdXJlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8V2F0Y2g+fSAgICAgICAgXG5cdCAqL1xuXHRwcml2YXRlIGluc2VydE1lYXN1cmUod2F0Y2g6IFdhdGNoLCBtZWFzdXJlOiBNZWFzdXJlKTogUHJvbWlzZTxXYXRjaD4ge1xuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChcblx0XHRcdFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJtZWFzdXJlc1wiLFxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHR3YXRjaElkOiB3YXRjaC5pZCxcblx0XHRcdFx0cmVmZXJlbmNlVGltZTogbWVhc3VyZS5tZWFzdXJlUmVmZXJlbmNlVGltZSxcblx0XHRcdFx0dXNlclRpbWU6IG1lYXN1cmUubWVhc3VyZVVzZXJUaW1lXG5cdFx0XHR9KSxcblx0XHRcdFR3QVBJU2VydmljZS5vcHRpb25zXG5cdFx0KS50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ01FQVNVUkUnLCAnRklSU1QnKTtcblx0XHRcdFx0bWVhc3VyZS5pZCA9IHJlc3BvbnNlLmpzb24oKS5tZWFzdXJlSWQ7XG5cdFx0XHRcdHdhdGNoLm1lYXN1cmVzLnB1c2gobWVhc3VyZSk7XG5cdFx0XHRcdHdhdGNoLmhpc3RvcnlTaXplKys7XG5cdFx0XHRcdHJldHVybiB3YXRjaDtcblx0XHRcdH1cblx0XHQpLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluc2VydCBhIHdhdGNoXG5cdCAqIEBwYXJhbSAge1dhdGNofSAgICAgICAgICB3YXRjaFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFdhdGNoPn0gICAgICBcblx0ICovXG5cdHByaXZhdGUgaW5zZXJ0V2F0Y2god2F0Y2g6IFdhdGNoKTpQcm9taXNlPFdhdGNoPntcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwid2F0Y2hlc1wiLFxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRicmFuZDogd2F0Y2guYnJhbmQsXG5cdFx0XHRcdG5hbWU6IHdhdGNoLm5hbWUsXG5cdFx0XHRcdHllYXJPZkJ1eTogd2F0Y2gueWVhck9mQnV5LFxuXHRcdFx0XHRzZXJpYWw6IHdhdGNoLnNlcmlhbCxcblx0XHRcdFx0Y2FsaWJlcjogd2F0Y2guY2FsaWJlclxuXHRcdFx0fSksXG5cdFx0XHRUd0FQSVNlcnZpY2Uub3B0aW9uc1xuXHRcdClcblx0XHQubWFwKChyZXMpID0+IHsgXG5cdFx0XHRyZXR1cm4gTW9kZWxGYWN0b3J5LmJ1aWxkV2F0Y2goXG5cdFx0XHRcdHJlcy5qc29uKCkuaWQsXG5cdFx0XHRcdHdhdGNoLmJyYW5kLFxuXHRcdFx0XHR3YXRjaC5uYW1lLFxuXHRcdFx0XHR3YXRjaC55ZWFyT2ZCdXksXG5cdFx0XHRcdHdhdGNoLnNlcmlhbCxcblx0XHRcdFx0d2F0Y2guY2FsaWJlclxuXHRcdFx0KTsgXG5cdFx0fSlcblx0XHQudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlIGEgd2F0Y2hcblx0ICogQHBhcmFtICB7V2F0Y2h9ICAgICAgICAgIHdhdGNoXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8V2F0Y2g+fSAgICAgIFxuXHQgKi9cblx0cHJpdmF0ZSB1cGRhdGVXYXRjaCh3YXRjaDogV2F0Y2gpOiBQcm9taXNlPFdhdGNoPiB7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wdXQoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwid2F0Y2hlc1wiLFxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRpZDogd2F0Y2guaWQsXG5cdFx0XHRcdGJyYW5kOiB3YXRjaC5icmFuZCxcblx0XHRcdFx0bmFtZTogd2F0Y2gubmFtZSxcblx0XHRcdFx0eWVhck9mQnV5OiB3YXRjaC55ZWFyT2ZCdXksXG5cdFx0XHRcdHNlcmlhbDogd2F0Y2guc2VyaWFsLFxuXHRcdFx0XHRjYWxpYmVyOiB3YXRjaC5jYWxpYmVyXG5cdFx0XHR9KSxcblx0XHRcdFR3QVBJU2VydmljZS5vcHRpb25zXG5cdFx0KS50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ1dBVENIJywgJ1VQREFURScpO1xuXHRcdFx0XHRyZXR1cm4gd2F0Y2g7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIExvZyBlcnJvciB0byBjb25zb2xlXG5cdCAqIEBwYXJhbSB7YW55fSBlcnJvciBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHRwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcblx0XHRjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCcsIGVycm9yIHx8IFwicGxvcFwiKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuXHR9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy90d2FwaS5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW9vbi1waGFzZXMnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtb29uLXBoYXNlLWNvbnRhaW5lclwiPlxuXHQ8ZGl2IGNsYXNzPVwibW9vbi1tYXNrXCI+PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJtb29uLWRpc3F1ZVwiPjwvZGl2PlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIE1vb25QaGFzZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGFuZ2xlTW9vbjpudW1iZXI7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblxuICAgIGxldCB0b2RheTpEYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgbGFzdEZ1bGxNb29uID0gbmV3IERhdGUoMjAxNiwgMTAsIDE0LCAxMiwgMCwgMCwgMCk7XG4gICAgbGV0IGRpZmZEYXlzID0gTWF0aC5yb3VuZChNYXRoLmFicygodG9kYXkuZ2V0VGltZSgpIC0gbGFzdEZ1bGxNb29uLmdldFRpbWUoKSkvKDI0KjYwKjYwKjEwMDApKSk7XG5cblx0ICB0aGlzLmFuZ2xlTW9vbiA9IGRpZmZEYXlzICogNi4xMDE2OTQ5MTUyNTQ7ICAgXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gIFx0bGV0IGVsZW0gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubW9vbi1kaXNxdWUnKVxuICBcdGVsZW0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ3JvdGF0ZVooJyArIHRoaXMuYW5nbGVNb29uICsgJ2RlZyknO1xuICBcdGVsZW0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVooJyArIHRoaXMuYW5nbGVNb29uICsgJ2RlZyknO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXJlY3RpdmVzL2Nsb2NrL21vb24tcGhhc2VzL21vb24tcGhhc2VzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvblJlc3VsdCB7XG4gW2tleTpzdHJpbmddOmJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBHbG9iYWxWYWxpZGF0b3Ige1xuXG5cdHN0YXRpYyBtYWlsRm9ybWF0KGNvbnRyb2w6IEZvcm1Db250cm9sKTogVmFsaWRhdGlvblJlc3VsdCB7XG5cbiAgICAgICAgdmFyIEVNQUlMX1JFR0VYUCA9IC9eW2EtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykqJC9pO1xuXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlICE9IFwiXCIgJiYgKGNvbnRyb2wudmFsdWUubGVuZ3RoIDw9IDUgfHwgIUVNQUlMX1JFR0VYUC50ZXN0KGNvbnRyb2wudmFsdWUpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgXCJpbmNvcnJlY3RNYWlsRm9ybWF0XCI6IHRydWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYXRjaChncm91cDpGb3JtR3JvdXAsIGZyb206IHN0cmluZywgZGlzdGFudDogc3RyaW5nKTogVmFsaWRhdGlvblJlc3VsdCB7XG5cbiAgICBcdGNvbnNvbGUubG9nKGdyb3VwKTtcblxuICAgIFx0aWYgKGdyb3VwICYmIGdyb3VwLmNvbnRyb2xzW2Zyb21dLnZhbHVlICE9IGdyb3VwLmNvbnRyb2xzW2Zyb21dLnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4geyBcIm5vTWF0Y2hcIjogdHJ1ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXJlY3RpdmVzL2dsb2JhbC12YWxpZGF0b3IudHMiLCJleHBvcnQgY2xhc3MgQmxvZ1Bvc3R7XG5cdGlkOm51bWJlcjtcblx0dGl0bGU6c3RyaW5nO1xuXHRkYXRlOkRhdGU7XG5cdGV4Y2VycHQ6c3RyaW5nO1xuXHR1cmw6c3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHRpdGxlOiBzdHJpbmcsIGRhdGU6IERhdGUsIGV4Y2VycHQ6IHN0cmluZywgdXJsOiBzdHJpbmcpe1xuXG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMudGl0bGUgPSB0aGlzLmRlY29kZUhUTUxFbnRpdGllcyh0aXRsZSk7XG5cdFx0dGhpcy5kYXRlID0gZGF0ZTtcblx0XHR0aGlzLmV4Y2VycHQgPSB0aGlzLmRlY29kZUhUTUxFbnRpdGllcyhleGNlcnB0KTtcblx0XHRTdHJpbmcuZnJvbUNoYXJDb2RlXG5cdFx0dGhpcy51cmwgPSB1cmw7XG5cdH1cblxuXHRwdWJsaWMgdG9TdHJpbmcgPSAoKSA6IHN0cmluZyA9PiB7XG5cdFx0cmV0dXJuIGBCbG9nUG9zdCAoaWQ6ICR7dGhpcy5pZH0sXG5cdFx0XHRcdHRpdGxlOiAke3RoaXMudGl0bGV9LFxuXHRcdFx0XHRkYXRlOiAke3RoaXMuZGF0ZX0sXG5cdFx0XHRcdGV4Y2VycHQ6ICR7dGhpcy5leGNlcnB0fSxcblx0XHRcdFx0dXJsOiAke3RoaXMudXJsfSlgO1xuXHR9XG5cblx0cHJpdmF0ZSBkZWNvZGVIVE1MRW50aXRpZXMoc3RyOnN0cmluZykge1xuXG5cdFx0dmFyIHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcblx0XHRzdHIgPSBzdHIucmVwbGFjZSgvPHNjcmlwdFtePl0qPihbXFxTXFxzXSo/KTxcXC9zY3JpcHQ+L2dtaSwgJycpO1xuICAgICAgXHRzdHIgPSBzdHIucmVwbGFjZSgvPFxcLz9cXHcoPzpbXlwiJz5dfFwiW15cIl0qXCJ8J1teJ10qJykqPi9nbWksICcnKTtcbiAgICAgIFx0c3RyID0gc3RyLnJlcGxhY2UoJ1tSZWFkIG1vcmXigKZdJywgJycpO1xuXHQgICAgdHh0LmlubmVySFRNTCA9IHN0cjtcblxuXHQgICAgcmV0dXJuIHR4dC52YWx1ZTtcbiAgXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWxzL2Jsb2ctcG9zdC5tb2RlbC50cyIsImltcG9ydCB7IFdhdGNoIH0gZnJvbSAnLi93YXRjaC5tb2RlbCdcblxuZXhwb3J0IGNsYXNzIFVzZXJ7XG5cdGlkOm51bWJlcjtcblx0ZW1haWw6c3RyaW5nO1xuXHRuYW1lOnN0cmluZztcblx0bGFzdG5hbWU6c3RyaW5nO1xuXHRjb3VudHJ5OnN0cmluZztcblx0cmVnaXN0ZXJEYXRlOnN0cmluZztcblx0a2V5OnN0cmluZztcblx0d2F0Y2hlczpXYXRjaFtdID0gW107XG5cdGVtYWlsUHJlZmVyZW5jZXM6RW1haWxQcmVmZXJlbmNlcyA9IEVtYWlsUHJlZmVyZW5jZXMuTm9uZTtcblxuXHRjb25zdHJ1Y3RvcihpZDogbnVtYmVyLGVtYWlsOiBzdHJpbmcsbmFtZTogc3RyaW5nLFxuXHRcdGxhc3RuYW1lOiBzdHJpbmcsY291bnRyeTogc3RyaW5nLHJlZ2lzdGVyRGF0ZTogXG5cdFx0c3RyaW5nLGtleTogc3RyaW5nLHdhdGNoZXM6IFdhdGNoW10pe1xuXG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMuZW1haWwgPSBlbWFpbDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubGFzdG5hbWUgPSBsYXN0bmFtZTtcblx0XHR0aGlzLmNvdW50cnkgPSBjb3VudHJ5O1xuXHRcdHRoaXMucmVnaXN0ZXJEYXRlID0gcmVnaXN0ZXJEYXRlO1xuXHRcdHRoaXMua2V5ID0ga2V5O1xuXHRcdHRoaXMud2F0Y2hlcyA9IHdhdGNoZXM7XG5cdH1cblxuXHR1cHNlcnRXYXRjaCh3YXRjaDpXYXRjaCl7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLndhdGNoZXMubGVuZ3RoOyBpKyspIHtcblxuXHRcdFx0aWYodGhpcy53YXRjaGVzW2ldLmlkID09IHdhdGNoLmlkKXtcblx0XHRcdFx0dGhpcy53YXRjaGVzW2ldID0gd2F0Y2g7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLndhdGNoZXMucHVzaCh3YXRjaCk7XG5cdH1cblxuXHRwdWJsaWMgdG9TdHJpbmcgPSAoKSA6IHN0cmluZyA9PiB7XG5cblx0XHRyZXR1cm4gYFVzZXIgKFxuXHRcdFx0aWQ6ICR7dGhpcy5pZH0sIFxuXHRcdFx0ZW1haWw6ICR7dGhpcy5lbWFpbH0sIFxuXHRcdFx0bmFtZTogJHt0aGlzLm5hbWV9LCBcblx0XHRcdGxhc3RuYW1lOiAke3RoaXMubGFzdG5hbWV9LCBcblx0XHRcdGNvdW50cnk6ICR7dGhpcy5jb3VudHJ5fSwgXG5cdFx0XHRyZWdpc3RlckRhdGU6ICR7dGhpcy5yZWdpc3RlckRhdGV9LCBcblx0XHRcdGtleTogJHt0aGlzLmtleX0sIFxuXHRcdFx0d2F0Y2hlczogJHt0aGlzLndhdGNoZXN9KWA7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBlbnVtIEVtYWlsUHJlZmVyZW5jZXMge1xuXG5cdE5vbmUgPSAwLFxuXHRGaXJzdFdhdGNoID0gMSA8PCAxLFxuXHRGaXJzdE1lYXN1cmUgPSAxIDw8IDIsXG5cdERheUFjY3VyYWN5ID0gMSA8PCAzLFxuXHRXZWVrQWNjdXJhY3kgPSAxIDw8IDQsXG5cdFJlc3VsdCA9IDEgPDwgNSxcblx0TmV3TWVhc3VyZSA9IDEgPDwgNixcblx0U2Vjb25kV2F0Y2ggPSAxIDw8IDcsXG5cdENvbWViYWNrID0gMSA8PCA4LFxuXHRXYXRjaFN0b3JpZXMgPSAxIDw8IDlcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVscy91c2VyLm1vZGVsLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdhcmV0aG1ldGljU2lnbidcbn0pIFxuZXhwb3J0IGNsYXNzIEFyZXRobWV0aWNTaWduIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmKHZhbHVlID49IDApe1xuICAgICAgICByZXR1cm4gXCIrXCIgKyB2YWx1ZTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGlwZXMvYXJldGhtZXRpYy1zaWduLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2tGb3JtYXR0ZXInXHJcbn0pIFxyXG5leHBvcnQgY2xhc3MgS0Zvcm1hdHRlciBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAvL3dlIGV4cGVjdCBhIHNpZ25lZCBudW1iZXIgKGkuZSArMi43KVxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgXHRsZXQgc2lnbjpzdHJpbmcgPSB2YWx1ZS5jaGFyQXQoMCk7XHJcbiAgXHR2YWx1ZSA9IHZhbHVlLnN1YnN0cigxKTtcclxuICBcdGxldCBudW1iZXIgPSBOdW1iZXIodmFsdWUpO1xyXG5cclxuICBcdGlmKE1hdGguYWJzKG51bWJlcikgPiA5OTkpe1xyXG4gIFx0XHRyZXR1cm4gc2lnbiArIChudW1iZXIvMTAwMCkudG9GaXhlZCgwKSArICdrJztcclxuICBcdH1lbHNlIGlmKE1hdGguYWJzKG51bWJlcikgPiAxMDApe1xyXG4gIFx0XHRyZXR1cm4gc2lnbiArIG51bWJlci50b0ZpeGVkKDApO1xyXG4gIFx0fWVsc2V7XHJcbiAgXHRcdHJldHVybiBzaWduICsgbnVtYmVyLnRvRml4ZWQoMSk7XHJcbiAgXHR9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9waXBlcy9rLWZvcm1hdHRlci5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdsZWFkaW5nWmVybydcbn0pXG5leHBvcnQgY2xhc3MgTGVhZGluZ1plcm8gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHZhbHVlIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIFwiMFwiICsgdmFsdWU7XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BpcGVzL2xlYWRpbmctemVyby5waXBlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEzX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEFyZXRobWV0aWNTaWduIH0gZnJvbSAnLi9zcmMvcGlwZXMvYXJldGhtZXRpYy1zaWduLnBpcGUnO1xuaW1wb3J0IHsgTGVhZGluZ1plcm8gfSBmcm9tICcuL3NyYy9waXBlcy9sZWFkaW5nLXplcm8ucGlwZSc7XG5pbXBvcnQgeyBLRm9ybWF0dGVyIH0gZnJvbSAnLi9zcmMvcGlwZXMvay1mb3JtYXR0ZXIucGlwZSc7XG5pbXBvcnQgeyBNb29uUGhhc2VzQ29tcG9uZW50IH0gZnJvbSAnLi9zcmMvZGlyZWN0aXZlcy9jbG9jay9tb29uLXBoYXNlcy9tb29uLXBoYXNlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHdBUElTZXJ2aWNlIH0gZnJvbSAnLi9zcmMvc2VydmljZXMvdHdhcGkuc2VydmljZSc7XG5pbXBvcnQgeyBHQVNlcnZpY2UgfSBmcm9tICcuL3NyYy9zZXJ2aWNlcy9nYS5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlTG9hZGVyIH0gZnJvbSAnbmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlJztcblxuXG4vKipcbiAqIFNFUlZJQ0VTXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vc3JjL3NlcnZpY2VzL3R3YXBpLnNlcnZpY2UnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9zZXJ2aWNlcy9nYS5zZXJ2aWNlJ1xuLyoqXG4gKiBQSVBFU1xuICovXG5leHBvcnQgKiBmcm9tICcuL3NyYy9waXBlcy9hcmV0aG1ldGljLXNpZ24ucGlwZSdcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3BpcGVzL2xlYWRpbmctemVyby5waXBlJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvcGlwZXMvay1mb3JtYXR0ZXIucGlwZSdcbi8qKlxuICogTU9ERUxcbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvbW9kZWxzL3dhdGNoLm1vZGVsJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvbW9kZWxzL3VzZXIubW9kZWwnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9tb2RlbHMvbWVhc3VyZS5tb2RlbCdcbmV4cG9ydCAqIGZyb20gJy4vc3JjL21vZGVscy9ibG9nLXBvc3QubW9kZWwnXG4vKipcbiAqIERJUkVDVElWRVNcbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZGlyZWN0aXZlcy9jbG9jay9jbG9jay5jb21wb25lbnQnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kaXJlY3RpdmVzL2Nsb2NrL21vb24tcGhhc2VzL21vb24tcGhhc2VzLmNvbXBvbmVudCdcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RpcmVjdGl2ZXMvbG9naW4vbG9naW4uY29tcG9uZW50J1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZGlyZWN0aXZlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCdcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RpcmVjdGl2ZXMvd2F0Y2gvd2F0Y2guY29tcG9uZW50J1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXJldGhtZXRpY1NpZ24sXG4gICAgTGVhZGluZ1plcm8sXG4gICAgS0Zvcm1hdHRlcixcbiAgICBNb29uUGhhc2VzQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFR3QVBJU2VydmljZSxcbiAgICBHQVNlcnZpY2VcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFyZXRobWV0aWNTaWduLFxuICAgIExlYWRpbmdaZXJvLFxuICAgIEtGb3JtYXR0ZXIsXG4gICAgTW9vblBoYXNlc0NvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBIdHRwTW9kdWxlXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVHdDb3JlTW9kdWxlIHtcbn0gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXgudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQ2xvY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG1vbnRoOnN0cmluZztcbiAgZGF5OnN0cmluZztcbiAgZGF0ZTpEYXRlO1xuICBuZXh0TGVhcDpudW1iZXI7XG4gIG1vbnRoTmFtZXMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ107XG4gIGRheU5hbWVzID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cblx0dGhpcy5kYXRlID0gbmV3IERhdGUoKTtcblx0dGhpcy5tb250aCA9IHRoaXMubW9udGhOYW1lc1t0aGlzLmRhdGUuZ2V0TW9udGgoKV07XG5cdHRoaXMuZGF5ID0gdGhpcy5kYXlOYW1lc1t0aGlzLmRhdGUuZ2V0RGF5KCldICsgXCIgXCIgKyB0aGlzLmRhdGUuZ2V0RGF0ZSgpO1xuXG5cdHRoaXMubmV4dExlYXAgPSB0aGlzLmRhdGUuZ2V0RnVsbFllYXIoKTtcblxuXHRcdHdoaWxlKCF0aGlzLmlzTGVhcFllYXIodGhpcy5uZXh0TGVhcCkpe1xuXHRcdFx0dGhpcy5uZXh0TGVhcCsrO1xuXHRcdH1cbiAgfVxuXG4gIGlzTGVhcFllYXIoeWVhcjpudW1iZXIpe1xuXHRyZXR1cm4gKCh5ZWFyICUgNCA9PSAwKSAmJiAoeWVhciAlIDEwMCAhPSAwKSkgfHwgKHllYXIgJSA0MDAgPT0gMCk7XG4gIH1cblxuICBpbml0TG9jYWxDbG9ja3MoKSB7XG5cbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gdGhpcy5kYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuXHR2YXIgc2Vjb25kcyA9IHRoaXMuZGF0ZS5nZXRTZWNvbmRzKCk7XG5cdHZhciBtaW51dGVzID0gdGhpcy5kYXRlLmdldE1pbnV0ZXMoKTtcblx0dmFyIGhvdXJzID0gdGhpcy5kYXRlLmdldEhvdXJzKCk7XG5cblx0Ly8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIGVhY2ggaGFuZCBhbmQgaXQncyBhbmdsZSBpbiBkZWdyZWVzXG5cdHZhciBoYW5kcyA9IFtcblx0XHR7XG5cdFx0XHRoYW5kOiAnaG91cnMnLFxuXHRcdFx0YW5nbGU6IChob3VycyAqIDMwKSArIChtaW51dGVzIC8gMilcblx0XHR9LFxuXHRcdHtcblx0XHRcdGhhbmQ6ICdtaW51dGVzJyxcblx0XHRcdGFuZ2xlOiAobWludXRlcyAqIDYpICsgKHNlY29uZHMvNjApICogNlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aGFuZDogJ3NlY29uZHMnLFxuXHRcdFx0YW5nbGU6IChzZWNvbmRzICogNikgKyAobWlsbGlzZWNvbmRzLzEwMDApKjZcblx0XHR9XG5cdF07XG5cblx0Ly9Mb29wIHRocm91Z2ggZWFjaCBvZiB0aGVzZSBoYW5kcyB0byBzZXQgdGhlaXIgYW5nbGVcblx0Zm9yICh2YXIgaiA9IDA7IGogPCBoYW5kcy5sZW5ndGg7IGorKykge1xuXHRcdHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdCcuJyArIGhhbmRzW2pdLmhhbmRcblx0XHQpO1xuXG5cdFx0ZWxlbWVudC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAncm90YXRlWignICsgaGFuZHNbal0uYW5nbGUgKyAnZGVnKSc7XG5cdFx0ZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWignICsgaGFuZHNbal0uYW5nbGUgKyAnZGVnKSc7XG5cdH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpcmVjdGl2ZXMvY2xvY2svY2xvY2suY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJ25nMi10cmFuc2xhdGUvbmcyLXRyYW5zbGF0ZSc7XG5pbXBvcnQge1R3QVBJU2VydmljZX0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy90d2FwaS5zZXJ2aWNlJ1xuaW1wb3J0IHsgR2xvYmFsVmFsaWRhdG9yIH0gZnJvbSAnLi8uLi9nbG9iYWwtdmFsaWRhdG9yJztcbmltcG9ydCB7IEdBU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvZ2Euc2VydmljZSc7XG5cbmltcG9ydCB7ICAgXG4gIFZhbGlkYXRvcnMsICBcbiAgRm9ybUJ1aWxkZXIsICBcbiAgRm9ybUdyb3VwXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbiBcbi8qKlxuICogTG9naW4gY29tcG9uZW50LiBQcm92aWRlcyBhIGxvZ2luIGZvcm0gd2l0aCBjb250cm9sbGVkIGFuZFxuICogZW1pdHMgYSBVc2VyICgkZXZlbnQgdXNlckxvZ2dlZCkgb24gc3VjY2Vzc2Z1bCBsb2dpbi5cbiAqL1xuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBsb2dpbkZvcm0gICAgICAgICAgICAgIDogRm9ybUdyb3VwO1xuICBlcnJvcnMgICAgICAgICAgICAgICAgID0gW107XG4gIHN1Ym1pdEF0dGVtcHQ6ZmFsc2U7XG4gIHVzZXJMb2dnZWQgICA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgbG9naW5BdHRlbXB0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIHcvIHNlcnZpY2UgaW5qZWN0aW9uXG4gICAqIEBwYXJhbSB7VHJhbnNsYXRlU2VydmljZX0gcHJpdmF0ZSB0cmFuc2xhdGUgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0ge1R3QVBJU2VydmljZX0gICAgIHByaXZhdGUgdHdhcGkgICAgIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtIHtGb3JtQnVpbGRlcn0gICAgICBwcml2YXRlIGJ1aWxkZXIgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRlOiBhbnksIFxuICAgIHByb3RlY3RlZCB0d2FwaSAgOiBUd0FQSVNlcnZpY2UsIFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXIgIDogYW55XG4gICkgeyBcblxuICAgIC8vTGFuZyBkZWZpbml0aW9uXG5cdCAgdGhpcy50cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoJ2VuJyk7XG5cdCAgdGhpcy50cmFuc2xhdGUudXNlKCdlbicpO1xuXG4gICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVtYWlsICAgOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBHbG9iYWxWYWxpZGF0b3IubWFpbEZvcm1hdF0pXSxcbiAgICAgIHBhc3N3b3JkOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg1KV0pXVxuICAgIH0pO1xuXG4gIH1cblxuICAvKipcbiAgICogTG9naW4gYW4gRkIgdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmJVc2VyIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIG9uRmJTdWJtaXQoZmJVc2VyOntcbiAgICBlbWFpbDogc3RyaW5nLCBcbiAgICB0b2tlbjogc3RyaW5nLFxuICAgIGxhc3RuYW1lOiBzdHJpbmcsIFxuICAgIGZpcnN0bmFtZTogc3RyaW5nfVxuICApe1xuXG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcblxuICAgIHRoaXMubG9naW5BdHRlbXB0LmVtaXQodHJ1ZSk7XG5cbiAgICAvL1RyaWVzIHRvIGxvZ2luIGFuIHVzZXIgdXNpbmcgaGlzIGZiIGVtYWlsXG4gICAgdGhpcy50d2FwaS5zaWdudXBGYWNlYm9vayhmYlVzZXIuZW1haWwsIGZiVXNlci50b2tlbiwgZmJVc2VyLmxhc3RuYW1lLCBmYlVzZXIuZmlyc3RuYW1lKS50aGVuKFxuICAgICAgICAvL3N1Y2Nlc3MsIGF3YXkgd2UgZ29cbiAgICAgICAgcmVzID0+IHsgXG4gICAgICAgICAgdGhpcy51c2VyTG9nZ2VkLmVtaXQocmVzKTtcbiAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0NUQScsICdGQl9MT0dJTicsICdTVUNDRVNTJyk7XG4gICAgICAgIH0sIFxuICAgICAgICBlcnIgPT4ge1xuXG4gICAgICAgICAgLy9FcnJvciwgbW9zdCBsaWtlbHkgdGhlIHVzZXIgdHJpZXMgdG8gc2lnbmluXG4gICAgICAgICAgLy91c2luZyBmYWNlYm9vayB3aGlsZSBoZSBoYXMgYSByZWd1bGFyIFxuICAgICAgICAgIC8vYWNjb3VudCB3aXRoIHRoZSBzYW1lIGVtYWlsLlxuICAgICAgICAgIHRoaXMubG9naW5BdHRlbXB0LmVtaXQoZmFsc2UpO1xuICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQ1RBJywgJ0ZCX1NJR05VUCcsICdGQUlMJyk7XG4gICAgICAgICAgc3dpdGNoIChlcnIuc3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlIDQwMTpcbiAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnY3JlZGVudGlhbHMnKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdlcnJvcicpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5sb2dpbkF0dGVtcHQuZW1pdChmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogRm9ybSBzdWJtaXRcbiAgICogQHBhcmFtIHtzdHJpbmd9fSB1c2VyIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIG9uU3VibWl0KHVzZXI6e2VtYWlsOnN0cmluZywgcGFzc3dvcmQ6c3RyaW5nfSl7XG5cbiAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgIFxuICAgIC8vRm9ybSBjb25zdHJhaW50cyBhcmUgb2tcbiAgICBpZih0aGlzLmxvZ2luRm9ybS52YWxpZCl7XG5cbiAgICAgIHRoaXMubG9naW5BdHRlbXB0LmVtaXQodHJ1ZSk7XG5cbiAgICAgIHRoaXMudHdhcGkubG9naW4odXNlci5lbWFpbCwgdXNlci5wYXNzd29yZCkudGhlbihcbiAgICAgICAgcmVzID0+IHsgXG4gICAgICAgICAgdGhpcy51c2VyTG9nZ2VkLmVtaXQocmVzKTtcbiAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0NUQScsICdMT0dJTicsICdTVUNDRVNTJyk7XG4gICAgICAgIH0sIFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQ1RBJywgJ0xPR0lOJywgJ0ZBSUwnKTtcbiAgICAgICAgICBzd2l0Y2ggKGVyci5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgNDAxOlxuICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdjcmVkZW50aWFscycpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ2Vycm9yJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgdGhpcy5sb2dpbkF0dGVtcHQuZW1pdChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgb25QYXNzd29yZFJlc2V0U3VibWl0KGVtYWlsOnN0cmluZyl7XG4gICAgdGhpcy50d2FwaS5yZXNldFBhc3N3b3JkKGVtYWlsKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXJlY3RpdmVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICduZzItdHJhbnNsYXRlL25nMi10cmFuc2xhdGUnO1xuaW1wb3J0IHtUd0FQSVNlcnZpY2V9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvdHdhcGkuc2VydmljZSdcbmltcG9ydCB7IEdsb2JhbFZhbGlkYXRvciB9IGZyb20gJy4vLi4vZ2xvYmFsLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBHQVNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2dhLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyAgIFxuICBWYWxpZGF0b3JzLFxuICBGb3JtQnVpbGRlciwgIFxuICBGb3JtR3JvdXBcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbi8qKlxuICogU2lnbnVwIGZvcm0uIEVtaXRzIGEgdXNlckxvZ2dlZCBldmVudCBvbiBuZXcgdXNlciBzaWdudXBcbiAqL1xuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgc2lnbnVwRm9ybSAgIDogRm9ybUdyb3VwO1xuICBzdWJtaXRBdHRlbXB0OmJvb2xlYW4gPSBmYWxzZTtcbiAgZXJyb3JzICAgICAgID0gW107XG4gIGNvdW50cmllcyAgICA6W3N0cmluZ107XG4gIGZpbHRlcmVkTGlzdCA9IFtdO1xuICBxdWVyeSAgICAgICAgOiBzdHJpbmcgPSBcIlwiO1xuXG4gIEBPdXRwdXQoKSB1c2VyTG9nZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2lnbnVwQXR0ZW1wdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgLyoqXG4gICAqIENvbnN0cnVjdG9yIHcvIHNlcnZpY2UgaW5qZWN0aW9uXG4gICAqIEBwYXJhbSB7VHJhbnNsYXRlU2VydmljZX0gcHJpdmF0ZSB0cmFuc2xhdGUgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0ge1R3QVBJU2VydmljZX0gICAgIHByaXZhdGUgdHdhcGkgICAgIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtIHtGb3JtQnVpbGRlcn0gICAgICBwcml2YXRlIGJ1aWxkZXIgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZTogYW55LCBcbiAgICBwcml2YXRlIHR3YXBpOiBUd0FQSVNlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IGFueSkgeyBcblxuICAgIHRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZygnZW4nKTtcbiAgICB0cmFuc2xhdGUudXNlKCdlbicpO1xuXG4gICAgdHJhbnNsYXRlLmdldChcImNvdW50cmllc1wiKS5zdWJzY3JpYmUoKHJlc3VsdDogW3N0cmluZ10pID0+IHtcbiAgICAgIHRoaXMuY291bnRyaWVzID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgdGhpcy5zaWdudXBGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgIGVtYWlsICAgICAgICAgOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBHbG9iYWxWYWxpZGF0b3IubWFpbEZvcm1hdF0pXSxcbiAgICAgICAgZW1haWxSZXBlYXQgICA6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEdsb2JhbFZhbGlkYXRvci5tYWlsRm9ybWF0XSldLFxuXG4gICAgICAgIHBhc3N3b3JkICAgICAgOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KV0pXSxcbiAgICAgICAgcGFzc3dvcmRSZXBlYXQ6IFtcIlwiLCBcbiAgICAgICAgICBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgXG4gICAgICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIGxhc3ROYW1lICAgICAgOiBcIlwiLFxuICAgICAgICBmaXJzdE5hbWUgICAgIDogXCJcIixcbiAgICAgICAgY291bnRyeSAgICAgICA6IFwiXCJcbiAgICAgIH0pO1xuICB9XG5cblxuICAvKipcbiAgICogVHJpbXMgdGhlIGZpbHRlcmVkTGlzdCBhY2NvcmluZyB0byB0aGUgXG4gICAqIGNvdW50cnkgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGZpbHRlcihxdWVyeTpzdHJpbmcpIHtcbiAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IHRoaXMuY291bnRyaWVzLmZpbHRlcihmdW5jdGlvbihlbGVtZW50OnN0cmluZyl7XG4gICAgICByZXR1cm4gZWxlbWVudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NpZ24gdGhlIGNvdW50cnkgbGFiZWwgd2hlbiBzZWxlY3RlZCBcbiAgICogZnJvbSB0aGUgbGlzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaXRlbSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBzZWxlY3QoaXRlbTpzdHJpbmcpe1xuICAgIHRoaXMucXVlcnkgPSBpdGVtO1xuICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gW107XG4gIH1cblxuICAvKipcbiAgICogc3VibWl0IHRoZSBmb3JtXG4gICAqIEBwYXJhbSB7c3RyaW5nICAgIH19IHVzZXIgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgb25TdWJtaXQodXNlcjp7XG4gICAgICBlbWFpbDogc3RyaW5nLCBcbiAgICAgIHBhc3N3b3JkOiBzdHJpbmcsXG4gICAgICBlbWFpbFJlcGVhdDogc3RyaW5nLFxuICAgICAgcGFzc3dvcmRSZXBlYXQ6IHN0cmluZyxcbiAgICAgIGxhc3ROYW1lOiBzdHJpbmcsXG4gICAgICBmaXJzdE5hbWU6IHN0cmluZ1xuICAgIH0pIHtcblxuICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IHRydWU7XG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcblxuXG4gICAgaWYodGhpcy5zaWdudXBGb3JtLnZhbGlkICYmIFxuICAgICAgdXNlci5wYXNzd29yZCA9PSB1c2VyLnBhc3N3b3JkUmVwZWF0ICYmXG4gICAgICB1c2VyLmVtYWlsID09IHVzZXIuZW1haWxSZXBlYXQpe1xuXG4gICAgICB0aGlzLnNpZ251cEF0dGVtcHQuZW1pdCh0cnVlKTtcblxuICAgICAgdGhpcy50d2FwaS5zaWdudXAodXNlci5lbWFpbCxcbiAgICAgICB1c2VyLnBhc3N3b3JkLFxuICAgICAgIHVzZXIuZmlyc3ROYW1lLFxuICAgICAgIHVzZXIubGFzdE5hbWUsXG4gICAgICAgdGhpcy5xdWVyeSkudGhlbihcbiAgICAgICAgcmVzID0+IHsgXG4gICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnU0lHTlVQJywgJ1NVQ0NFU1MnKTtcbiAgICAgICAgICB0aGlzLnVzZXJMb2dnZWQuZW1pdChyZXMpIFxuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnU0lHTlVQJywgJ0ZBSUwnKTtcbiAgICAgICAgICBzd2l0Y2ggKGVycm9yLnN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSBUd0FQSVNlcnZpY2UuSFRUUF9VTkFVVEhPUklaRUQ6XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ2VtYWlsLXRha2VuJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnZXJyb3InKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgKVxuXG4gICAgICB0aGlzLnNpZ251cEF0dGVtcHQuZW1pdChmYWxzZSk7XG4gICAgfSBlbHNle1xuXG4gICAgICBpZih1c2VyLnBhc3N3b3JkICE9IHVzZXIucGFzc3dvcmRSZXBlYXQpe1xuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdwYXNzd29yZC1tYXRjaCcpO1xuICAgICAgfVxuXG4gICAgICBpZih1c2VyLmVtYWlsICE9IHVzZXIuZW1haWxSZXBlYXQpe1xuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdlbWFpbC1tYXRjaCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXJlY3RpdmVzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnbmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlJztcblxuaW1wb3J0IHsgV2F0Y2ggfSBmcm9tICcuLy4uLy4uL21vZGVscy93YXRjaC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi8uLi8uLi9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQge1R3QVBJU2VydmljZX0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy90d2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEdBU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvZ2Euc2VydmljZSc7XG5cbmltcG9ydCB7ICAgXG4gIEZvcm1CdWlsZGVyLCAgXG4gIEZvcm1Hcm91cCxcbiAgVmFsaWRhdG9yc1xufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogRnJvbSB0byBhZGQsIGRlbGV0ZSBhbmQgdXBkYXRlIHdhdGNoZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFdhdGNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICB1c2VyOiBVc2VyO1xuICBAT3V0cHV0KCkgd2F0Y2hTYXZlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgd2F0Y2hNb2RlbDogV2F0Y2ggPSBuZXcgV2F0Y2gobnVsbCwgXCJcIik7XG4gIHdhdGNoRm9ybSAgICAgICAgOiBGb3JtR3JvdXA7XG4gIGJyYW5kcyAgICAgICAgICAgOiB7IG5hbWU6IHN0cmluZywgaWNvbjogc3RyaW5nLCBtb2RlbHM6IHN0cmluZyB9W10gPSBbXTtcbiAgbW9kZWxzICAgICAgICAgICA6IHN0cmluZ1tdID0gW107XG4gIGNhbGliZXJzICAgICAgICAgOiBzdHJpbmdbXSA9IFtdO1xuICBmaWx0ZXJlZEJyYW5kTGlzdDogeyBuYW1lOiBzdHJpbmcsIGljb246IHN0cmluZywgbW9kZWxzOiBzdHJpbmcgfVtdID0gW107XG4gIGZpbHRlcmVkTW9kZWxMaXN0OiBzdHJpbmdbXSA9IFtdO1xuICBmaWx0ZXJlZENhbGliZXJMaXN0IDogc3RyaW5nW10gPSBbXTtcbiAgZXJyb3IgICAgICAgICAgICA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc3VibWl0QXR0ZW1wdCAgICA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgYnJhbmRTZWxlY3RlZCAgICA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbW9kZWxTZWxlY3RlZCAgICA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY2FsaWJlclNlbGVjdGVkICA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3Igd2l0aCBESVxuICAgKiBAcGFyYW0ge1RyYW5zbGF0ZVNlcnZpY2V9IHByaXZhdGUgdHJhbnNsYXRlIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtIHtUd0FQSVNlcnZpY2V9ICAgICBwcml2YXRlIHR3YXBpICAgICBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSB7Rm9ybUJ1aWxkZXJ9ICAgICAgcHJpdmF0ZSBidWlsZGVyICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0ZTogYW55LFxuICAgIHByaXZhdGUgdHdhcGkgICAgICA6IFR3QVBJU2VydmljZSwgXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlciAgICA6IGFueSxcbiAgKSB7XG5cbiAgICB0cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoJ2VuJyk7XG4gICAgdHJhbnNsYXRlLnVzZSgnZW4nKTtcbiAgICBcblxuICAgIHRoaXMud2F0Y2hGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBpZCAgICAgOiB0aGlzLndhdGNoTW9kZWwuaWQsXG4gICAgICBicmFuZCAgOiBbdGhpcy53YXRjaE1vZGVsLmJyYW5kLCAgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBuYW1lICAgOiBbdGhpcy53YXRjaE1vZGVsLm5hbWUsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgY2FsaWJlcjogdGhpcy53YXRjaE1vZGVsLmNhbGliZXIsXG4gICAgICB5ZWFyICAgOiBbdGhpcy53YXRjaE1vZGVsLnllYXJPZkJ1eSwgVmFsaWRhdG9ycy5jb21wb3NlKFxuICAgICAgICBbVmFsaWRhdG9ycy5taW5MZW5ndGgoNCksICBWYWxpZGF0b3JzLm1heExlbmd0aCg0KV1cbiAgICAgICldLFxuICAgICAgc2VyaWFsIDogdGhpcy53YXRjaE1vZGVsLnNlcmlhbFxuICAgIH0pO1xuXG5cbiAgICB0aGlzLnR3YXBpLmdldEJyYW5kcygpLnRoZW4oXG4gICAgICByZXMgPT4ge1xuICAgICAgICB0aGlzLmJyYW5kcyA9IHJlcztcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFtzZWxlY3RCcmFuZCBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtIHtzdHJpbmd9IGJyYW5kIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHNlbGVjdEJyYW5kKGJyYW5kOiB7IG5hbWU6IHN0cmluZywgaWNvbjogc3RyaW5nLCBtb2RlbHM6c3RyaW5nfSl7XG4gICAgdGhpcy5icmFuZFNlbGVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLnR3YXBpLmdldE1vZGVscyhicmFuZC5tb2RlbHMudG9Mb3dlckNhc2UoKSkudGhlbihcbiAgICAgIHJlcyAgID0+IHRoaXMubW9kZWxzID0gcmVzLFxuICAgICAgZXJyb3IgPT4gdGhpcy5tb2RlbHMgPSBbXVxuICAgICk7XG4gICAgXG4gICAgdGhpcy50d2FwaS5nZXRDYWxpYmVycyhicmFuZC5tb2RlbHMudG9Mb3dlckNhc2UoKSkudGhlbihcbiAgICAgIHJlcyAgID0+IHRoaXMuY2FsaWJlcnMgPSByZXMsXG4gICAgICBlcnJvciA9PiB0aGlzLmNhbGliZXJzID0gW11cbiAgICApO1xuXG4gICAgdGhpcy5maWx0ZXJlZEJyYW5kTGlzdCA9IFtdO1xuICAgIHRoaXMud2F0Y2hNb2RlbC5icmFuZCA9IGJyYW5kLm5hbWU7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IGEgbW9kZWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGVsIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHNlbGVjdE1vZGVsKG1vZGVsOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1vZGVsU2VsZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMuZmlsdGVyZWRNb2RlbExpc3QgPSBbXTtcbiAgICB0aGlzLndhdGNoTW9kZWwubmFtZSA9IG1vZGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhIGNhbGliZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhbGliZXIgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgc2VsZWN0Q2FsaWJlcihjYWxpYmVyOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhbGliZXJTZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy5maWx0ZXJlZENhbGliZXJMaXN0ID0gW107XG4gICAgdGhpcy53YXRjaE1vZGVsLmNhbGliZXIgPSBjYWxpYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlciBicmFuZHMgYWNjb3JkaW5nIHRoZSBicmFuZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYnJhbmQgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgZmlsdGVyQnJhbmQoYnJhbmQ6IHN0cmluZykge1xuXG4gICAgaWYodGhpcy5icmFuZFNlbGVjdGVkID09IGZhbHNlKXtcbiAgICAgIHRoaXMuZmlsdGVyZWRCcmFuZExpc3QgPSB0aGlzLmJyYW5kcy5maWx0ZXIoXG4gICAgICAgIGZ1bmN0aW9uKGVsZW1lbnQ6IHsgbmFtZTogc3RyaW5nLCBpY29uOiBzdHJpbmcsIG1vZGVsczogc3RyaW5nIH0pIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihicmFuZC50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICAgICAgfSk7XG4gICAgXG4gICAgfWVsc2V7XG4gICAgICBzZXRUaW1lb3V0KCgpPT4gdGhpcy5icmFuZFNlbGVjdGVkID0gZmFsc2UsIDUpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlcnMgbW9kZWxzIGFjY29yZGluZyB0byBtb2RlbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZWwgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgZmlsdGVyTW9kZWwobW9kZWw6c3RyaW5nKXtcblxuICAgIGlmKHRoaXMubW9kZWxTZWxlY3RlZCA9PSBmYWxzZSl7XG4gICAgICB0aGlzLmZpbHRlcmVkTW9kZWxMaXN0ID0gdGhpcy5tb2RlbHMuZmlsdGVyKGZ1bmN0aW9uKGVsZW1lbnQ6c3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihtb2RlbC50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICAgICAgfSk7XG4gICAgfWVsc2V7XG4gICAgICBzZXRUaW1lb3V0KCgpPT4gdGhpcy5tb2RlbFNlbGVjdGVkID0gZmFsc2UsIDUpO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIG91dCBjYWxpYmVycyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgaW5wdXRcbiAgICogQHBhcmFtIGNhbGliZXIgXG4gICAqL1xuICBmaWx0ZXJDYWxpYmVyKGNhbGliZXI6c3RyaW5nKXtcbiAgICBcbiAgICBpZih0aGlzLmNhbGliZXJTZWxlY3RlZCA9PSBmYWxzZSl7XG4gICAgICB0aGlzLmZpbHRlcmVkQ2FsaWJlckxpc3QgPSB0aGlzLmNhbGliZXJzLmZpbHRlcihmdW5jdGlvbihlbGVtZW50OnN0cmluZykge1xuICAgICAgICByZXR1cm4gZWxlbWVudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoY2FsaWJlci50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICAgICAgfSk7XG4gICAgfWVsc2V7XG4gICAgICBzZXRUaW1lb3V0KCgpPT4gdGhpcy5jYWxpYmVyU2VsZWN0ZWQgPSBmYWxzZSwgNSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICAvKipcbiAgICogU3VibWl0IGEgd2F0Y2hcbiAgICovXG4gIG9uU3VibWl0KCl7XG5cbiAgICB0aGlzLnN1Ym1pdEF0dGVtcHQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMud2F0Y2hGb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLmVycm9yID0gZmFsc2U7XG4gICAgXG4gICAgICB0aGlzLnR3YXBpLnVwc2VydFdhdGNoKHRoaXMud2F0Y2hNb2RlbCkudGhlbihcbiAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0NUQScsICdXQVRDSF9VUFNFUlQnLCAnU1VDQ0VTUycpO1xuICAgICAgICAgIHRoaXMudXNlci51cHNlcnRXYXRjaChyZXMpO1xuICAgICAgICAgIHRoaXMud2F0Y2hTYXZlZC5lbWl0KHRoaXMudXNlcik7XG4gICAgICAgICAgdGhpcy5zdWJtaXRBdHRlbXB0ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5lcnJvciA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnV0FUQ0hfVVBTRVJUJywgJ0ZBSUwnKTtcbiAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN1Ym1pdEF0dGVtcHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG9uRGVsZXRlKCl7XG4gICAgdGhpcy5zdWJtaXRBdHRlbXB0ID0gdHJ1ZTtcbiAgICB0aGlzLnR3YXBpLmRlbGV0ZVdhdGNoKHRoaXMudXNlciwgdGhpcy53YXRjaE1vZGVsKS50aGVuKFxuICAgICAgcmVzID0+IHtcbiAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnV0FUQ0hfREVMRVRFJywgJ1NVQ0NFU1MnKTtcbiAgICAgICAgdGhpcy53YXRjaFNhdmVkLmVtaXQocmVzKTtcbiAgICAgICAgdGhpcy5zdWJtaXRBdHRlbXB0ID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgZXJyb3IgPT4ge1xuICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0NUQScsICdXQVRDSF9ERUxFVEUnLCAnRkFJTCcpO1xuICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdWJtaXRBdHRlbXB0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpcmVjdGl2ZXMvd2F0Y2gvd2F0Y2guY29tcG9uZW50LnRzIiwiZXhwb3J0IGNsYXNzIFN0cmluZ0hlbHBlcntcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxldmVuc2h0ZWluKGE6c3RyaW5nLCBiOnN0cmluZyl7XHJcbiAgICAgICAgaWYoIWEgfHwgIWIpIHJldHVybiAoYSB8fCBiKS5sZW5ndGg7XHJcbiAgICAgICAgdmFyIG0gPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDw9IGIubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBtW2ldID0gW2ldO1xyXG4gICAgICAgICAgICBpZihpID09PSAwKSBjb250aW51ZTtcclxuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8PSBhLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIG1bMF1bal0gPSBqO1xyXG4gICAgICAgICAgICAgICAgaWYoaiA9PT0gMCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBtW2ldW2pdID0gYi5jaGFyQXQoaSAtIDEpID09IGEuY2hhckF0KGogLSAxKSA/IG1baSAtIDFdW2ogLSAxXSA6IE1hdGgubWluKFxyXG4gICAgICAgICAgICAgICAgICAgIG1baS0xXVtqLTFdICsgMSxcclxuICAgICAgICAgICAgICAgICAgICBtW2ldW2otMV0gKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG1baS0xXVtqXSArIDFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1bYi5sZW5ndGhdW2EubGVuZ3RoXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlcGxhY2VBbGwodGFyZ2V0OnN0cmluZywgc2VhcmNoOnN0cmluZywgcmVwbGFjZW1lbnQ6c3RyaW5nKTpzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldC5zcGxpdChzZWFyY2gpLmpvaW4ocmVwbGFjZW1lbnQpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvc3RyaW5nLmhlbHBlci50cyIsImltcG9ydCB7IFVzZXIsIH0gIGZyb20gJy4vdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBXYXRjaCB9ICBmcm9tICcuL3dhdGNoLm1vZGVsJztcbmltcG9ydCB7IEJsb2dQb3N0IH0gIGZyb20gJy4vYmxvZy1wb3N0Lm1vZGVsJztcbmltcG9ydCB7IE1lYXN1cmUgfSAgZnJvbSAnLi9tZWFzdXJlLm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIE1vZGVsRmFjdG9yeSB7XG5cblxuXHQvKipcblx0ICogQnVpbGRzIGFuIFVzZXIgZnJvbSBqc29uIHJlc3BvbnNlXG5cdCAqIEBwYXJhbSAge2FueX0gIGpzb25Vc2VyXG5cdCAqIEByZXR1cm4ge1VzZXJ9ICAgICAgICAgXG5cdCAqL1xuXHRzdGF0aWMgYnVpbGRVc2VyKGpzb25Vc2VyOiBhbnkpOiBVc2VyIHtcblxuXHRcdHJldHVybiBuZXcgVXNlcihcblx0XHRcdGpzb25Vc2VyLnVzZXJJZCxcblx0XHRcdGpzb25Vc2VyLmVtYWlsLFxuXHRcdFx0anNvblVzZXIuZmlyc3RuYW1lLFxuXHRcdFx0anNvblVzZXIubmFtZSxcblx0XHRcdGpzb25Vc2VyLmNvdW50cnksXG5cdFx0XHRqc29uVXNlci5yZWdpc3RlckRhdGUsXG5cdFx0XHRqc29uVXNlci5rZXksXG5cdFx0XHRNb2RlbEZhY3RvcnkuYnVpbGRXYXRjaGVzKGpzb25Vc2VyLndhdGNoZXMpXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBCdWlsZHMgYSB3YXRjaCBmcm9tIGpzb24gcmVzcG9uc2Vcblx0ICogQHBhcmFtICB7YW55fSAgICAganNvbldhdGNoZXNcblx0ICogQHJldHVybiB7V2F0Y2hbXX0gICAgICAgICAgICBcblx0ICovXG5cdHN0YXRpYyBidWlsZFdhdGNoZXMoanNvbldhdGNoZXM6IGFueSk6IFdhdGNoW10ge1xuXHRcdHJldHVybiBqc29uV2F0Y2hlcy5tYXAoZnVuY3Rpb24oanNvbldhdGNoOmFueSkge1xuXHRcdFx0cmV0dXJuIG5ldyBXYXRjaChcblx0XHRcdFx0anNvbldhdGNoLndhdGNoSWQsXG5cdFx0XHRcdGpzb25XYXRjaC5icmFuZCxcblx0XHRcdFx0anNvbldhdGNoLmhpc3RvcnlTaXplLFxuXHRcdFx0XHRqc29uV2F0Y2gubWVhc3VyZXMubWFwKGZ1bmN0aW9uKGpzb25NZWFzdXJlOmFueSkge1xuXHRcdFx0XHRcdHJldHVybiBuZXcgTWVhc3VyZShcblx0XHRcdFx0XHRcdGpzb25NZWFzdXJlLmlkLFxuXHRcdFx0XHRcdFx0anNvbk1lYXN1cmUubWVhc3VyZVVzZXJUaW1lLFxuXHRcdFx0XHRcdFx0anNvbk1lYXN1cmUubWVhc3VyZVJlZmVyZW5jZVRpbWUsXG5cdFx0XHRcdFx0XHRqc29uTWVhc3VyZS5zdGF0dXNJZCxcblx0XHRcdFx0XHRcdGpzb25NZWFzdXJlLmFjY3VyYWN5VXNlclRpbWUsXG5cdFx0XHRcdFx0XHRqc29uTWVhc3VyZS5hY2N1cmFjeVJlZmVyZW5jZVRpbWUsXG5cdFx0XHRcdFx0XHRqc29uTWVhc3VyZS5hY2N1cmFjeSxcblx0XHRcdFx0XHRcdGpzb25NZWFzdXJlLmFjY3VyYWN5QWdlLFxuXHRcdFx0XHRcdFx0anNvbk1lYXN1cmUucGVyY2VudGlsZSlcblx0XHRcdFx0fSksXG5cdFx0XHRcdGpzb25XYXRjaC5uYW1lLFxuXHRcdFx0XHRqc29uV2F0Y2gueWVhck9mQnV5LFxuXHRcdFx0XHRqc29uV2F0Y2guc2VyaWFsLFxuXHRcdFx0XHRqc29uV2F0Y2guY2FsaWJlclxuXHRcdFx0KVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJ1aWxkcyBKc29uIHBvc3QgZnJvbSBqc29uIHJlc3BvbnNlXG5cdCAqIEBwYXJhbSAge2FueX0gICAgICAgIGpzb25Qb3N0cyBbZGVzY3JpcHRpb25dXG5cdCAqIEByZXR1cm4ge0Jsb2dQb3N0W119ICAgICAgICAgICBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHRzdGF0aWMgYnVpbGRQb3N0cyhqc29uUG9zdHM6IGFueSk6IEJsb2dQb3N0W117XG5cdFx0cmV0dXJuIGpzb25Qb3N0cy5wb3N0cy5tYXAoZnVuY3Rpb24oanNvblBvc3Q6YW55KSB7XG5cblx0XHRcdHJldHVybiBuZXcgQmxvZ1Bvc3QoXG5cdFx0XHRcdGpzb25Qb3N0LmlkLCBcblx0XHRcdFx0anNvblBvc3QudGl0bGUsIFxuXHRcdFx0XHRuZXcgRGF0ZShqc29uUG9zdC5kYXRlKSwgXG5cdFx0XHRcdGpzb25Qb3N0LmV4Y2VycHQsXG5cdFx0XHRcdGpzb25Qb3N0LnVybFxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXG5cdHN0YXRpYyBidWlsZFdhdGNoKFxuXG5cdFx0aWQ6IG51bWJlcixcblx0XHRicmFuZDogc3RyaW5nLFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHR5ZWFyT2ZCdXk6IG51bWJlcixcblx0XHRzZXJpYWw6IHN0cmluZyxcblx0XHRjYWxpYmVyOiBzdHJpbmdcblxuXHQpOiBXYXRjaHtcblx0XHRyZXR1cm4gbmV3IFdhdGNoKGlkLCBicmFuZCwgMCwgW10sIG5hbWUsIHllYXJPZkJ1eSwgc2VyaWFsLCBjYWxpYmVyKTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbHMvbW9kZWwuZmFjdG9yeS50cyIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXgnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R3LWNvcmUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIlxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIzX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1J4XCJcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=