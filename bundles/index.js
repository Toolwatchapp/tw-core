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
        this.yearOfBuy = yearOfBuy;
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
        return this.http.get(TwAPIService.assetsUrl + '/watch-brand.json')
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
        return this.http.get(TwAPIService.assetsUrl + '/watch-models/' + brand + ".json")
            .map(function (res) { return res.json(); })
            .toPromise().then(function (models) {
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'MODELS', 'GET');
            return models;
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
        }), TwAPIService.options).toPromise().then(function (response) {
            watch.id = response.json().id;
            __WEBPACK_IMPORTED_MODULE_4__ga_service__["a" /* GAService */].event('API', 'WATCH', 'PUT');
            return watch;
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
    TwAPIService.assetsUrl = "app/assets";
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
        this.filteredBrandList = [];
        this.filteredModelList = [];
        this.error = false;
        this.submitAttempt = false;
        this.brandSelected = false;
        this.modelSelected = false;
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
        this.twapi.getModels(brand.toLowerCase()).then(function (res) { return _this.models = res; }, function (error) { return _this.models = []; });
        this.filteredBrandList = [];
        this.watchModel.brand = brand;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmOTZhYTA3YmMzMWE2ZTFjOTRmOCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2dhLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy93YXRjaC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL21lYXN1cmUubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3R3YXBpLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9jbG9jay9tb29uLXBoYXNlcy9tb29uLXBoYXNlcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvZ2xvYmFsLXZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2Jsb2ctcG9zdC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpcGVzL2FyZXRobWV0aWMtc2lnbi5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlcy9rLWZvcm1hdHRlci5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlcy9sZWFkaW5nLXplcm8ucGlwZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvY2xvY2svY2xvY2suY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy93YXRjaC93YXRjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvc3RyaW5nLmhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL21vZGVsLmZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vLi90dy1jb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EwQztBQUkxQztJQUFBO0lBa0VBLENBQUM7SUF4RGdCLGVBQUssR0FBcEI7UUFFSSxFQUFFLEVBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUM7WUFDdkIsSUFBSSxRQUFRLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNoQyxJQUFJLFNBQVMsR0FBUyxFQUFFLENBQUM7WUFDekIsSUFBSSxPQUFPLEdBQVMsRUFBRSxDQUFDO1lBRXZCLHNDQUFzQztZQUN0Qyw4QkFBOEI7WUFDOUIseUNBQXlDO1lBQ3pDLDZGQUE2RjtZQUU3RixDQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxDQUFDLENBQUMsdUJBQXVCLENBQUMsR0FBQyxDQUFDLENBQUM7Z0JBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRTtvQkFDakUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFBQSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsUUFBUSxDQUFDO2dCQUFBLENBQUMsR0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztvQkFDM0UsQ0FBQyxHQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBQSxDQUFDLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQztnQkFBQSxDQUFDLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQztnQkFBQSxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQy9FLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLCtDQUErQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFdEcsd0NBQXdDO1lBQ3hDLDZCQUE2QjtZQUM3QixxQ0FBcUM7WUFDckMsRUFBRSxDQUFDLFFBQVEsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUNsRCxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUM3QixDQUFDO0lBQ0wsQ0FBQztJQUVhLGVBQUssR0FBbkIsVUFBb0IsYUFBb0IsRUFBRSxXQUFrQixFQUFFLFVBQW9CLEVBQUUsVUFBbUI7UUFBekMsMEJBQW9CLEdBQXBCLGVBQW9CO1FBQUUsMEJBQW1CLEdBQW5CLGNBQW1CO1FBQ3JHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRWEsb0JBQVUsR0FBeEIsVUFBeUIsVUFBaUI7UUFFeEMsdUVBQXVFO1FBQ3ZFLG9FQUFvRTtRQUNwRSxFQUFFLEVBQUMsU0FBUyxDQUFDLE9BQU8sSUFBSSxTQUFTLElBQUksU0FBUyxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsRUFBQztZQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxFQUFFLFNBQVMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3hHLFVBQVUsQ0FBQztnQkFDVCxTQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25DLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNiLENBQUM7UUFBQSxJQUFJLEVBQUM7WUFDSixTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbEIsRUFBRSxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUU7Z0JBQ3ZCLFNBQVMsRUFBRSxTQUFTLENBQUMsT0FBTztnQkFDNUIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxVQUFVO2dCQUNsQyxZQUFZLEVBQUUsVUFBVTthQUN6QixDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVhLGtCQUFRLEdBQXRCLFVBQXVCLElBQVc7UUFDaEMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDO0lBQ3hCLENBQUM7SUF6RGMsbUJBQVMsR0FBVyxLQUFLLENBQUM7SUFQM0M7UUFBQyxnRkFBVSxFQUFFOztpQkFBQTtJQW1FYixnQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7OztBQ3RFdUQ7QUFFeEQ7SUFjQyxlQUFZLEVBQVUsRUFBRSxLQUFhLEVBQUUsV0FBdUIsRUFDN0QsUUFBd0IsRUFBRSxJQUFpQixFQUFFLFNBQXdCLEVBQ3JFLE1BQW1CLEVBQUUsT0FBb0I7UUFoQjNDLGlCQXdJQztRQTFIdUMsMkJBQXVCLEdBQXZCLGVBQXVCO1FBQzdELHdCQUF3QixHQUF4QixhQUF3QjtRQUFFLG9CQUFpQixHQUFqQixTQUFpQjtRQUFFLHlCQUF3QixHQUF4QixnQkFBd0I7UUFDckUsc0JBQW1CLEdBQW5CLFdBQW1CO1FBQUUsdUJBQW9CLEdBQXBCLFlBQW9CO1FBeUNuQyxhQUFRLEdBQUc7WUFDakIsTUFBTSxDQUFDLGdCQUFjLEtBQUksQ0FBQyxFQUFFLDBCQUNqQixLQUFJLENBQUMsS0FBSyxnQ0FDSixLQUFJLENBQUMsV0FBVyw2QkFDbkIsS0FBSSxDQUFDLFFBQVEseUJBQ2pCLEtBQUksQ0FBQyxJQUFJLDhCQUNKLEtBQUksQ0FBQyxTQUFTLDJCQUNqQixLQUFJLENBQUMsTUFBTSw0QkFDVixLQUFJLENBQUMsT0FBTywyQkFDYixLQUFJLENBQUMsTUFBTSx5QkFDYixLQUFJLENBQUMsSUFBSSw0QkFDTixLQUFJLENBQUMsT0FBTyxNQUFHLENBQUM7UUFDOUIsQ0FBQztRQW5EQSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFTLENBQVMsRUFBRSxDQUFTO1lBQzFELE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzFGLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFbkUsRUFBRSxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxFQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQztZQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFDakMsQ0FBQztRQUFBLElBQUksQ0FBQyxFQUFFLEVBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUM7WUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFDNUMsQ0FBQztRQUVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsMkJBQVcsR0FBWDtRQUNDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBQyxXQUFXLEtBQUssSUFBSTtlQUNwQixXQUFXLENBQUMsTUFBTSxHQUFHLHFFQUFhLENBQUMsV0FBVyxDQUFDLEVBQUM7WUFFbkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFDLElBQUksQ0FBQyxHQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFDO2dCQUN4RSxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFDLElBQUksQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEcsQ0FBQztZQUFBLElBQUksQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcscUVBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUNsQyxDQUFDO1lBQUEsSUFBSSxFQUFDO2dCQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztZQUNqQyxDQUFDO1FBQ0YsQ0FBQztJQUNGLENBQUM7SUFnQkQsdUJBQU8sR0FBUCxVQUFRLE1BQWE7UUFFcEIsSUFBSSxZQUFZLEdBQVUsQ0FBQyxDQUFDO1FBQzVCLElBQUksT0FBTyxHQUFVLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBVSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFeEMsT0FBTSxDQUFDLElBQUcsQ0FBQyxJQUFJLFlBQVksSUFBSSxNQUFNLEVBQUMsQ0FBQztZQUN0QyxFQUFFLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcscUVBQWEsQ0FBQyxlQUFlLENBQUMsRUFBQztnQkFDM0QsT0FBTyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hELFlBQVksRUFBRSxDQUFDO1lBQ2hCLENBQUM7WUFFRCxDQUFDLEVBQUUsQ0FBQztRQUVMLENBQUM7UUFDRCxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxtQ0FBbUIsR0FBbkI7UUFDQyxJQUFJLENBQUMsR0FBVSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFeEMsT0FBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7WUFDYixFQUFFLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcscUVBQWEsQ0FBQyxlQUFlLENBQUMsRUFBQztnQkFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsQ0FBQztZQUVELENBQUMsRUFBRSxDQUFDO1FBQ0wsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQsOEJBQWMsR0FBZDtRQUNDLEVBQUUsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBQztZQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBQUEsSUFBSSxFQUFDO1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNiLENBQUM7SUFDRixDQUFDO0lBRUQsNkJBQWEsR0FBYixVQUFjLE9BQWU7UUFFNUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEVBQUUsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUM7Z0JBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO2dCQUMzQixNQUFNLENBQUM7WUFDUixDQUFDO1FBQ0YsQ0FBQztRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQscUJBQUssR0FBTDtRQUNDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FDZixJQUFJLENBQUMsRUFBRSxFQUNQLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFFBQVEsRUFDYixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsT0FBTyxDQUNaLENBQUM7SUFDSCxDQUFDO0lBQ0YsWUFBQztBQUFELENBQUM7QUFFRCxJQUFZLFdBRVg7QUFGRCxXQUFZLFdBQVc7SUFDdEIsbURBQU87SUFBRSxtREFBTztJQUFFLHFEQUFRO0FBQzNCLENBQUMsRUFGVyxXQUFXLEtBQVgsV0FBVyxRQUV0QjtBQUVELElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUN0QiwrREFBYTtJQUNiLHFFQUFnQjtBQUNqQixDQUFDLEVBSFcsV0FBVyxLQUFYLFdBQVcsUUFHdEI7Ozs7Ozs7Ozs7QUNuSkQ7SUFjQyxpQkFBWSxFQUFVLEVBQUUsZUFBdUIsRUFBRSxvQkFBNEIsRUFDNUUsTUFBZSxFQUFFLGdCQUF5QixFQUFFLHFCQUE4QixFQUMxRSxRQUFpQixFQUFFLFdBQW9CLEVBQUUsVUFBbUI7UUFoQjlELGlCQWlHQztRQXZGQSxXQUFNLEdBQWtCLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDM0MsYUFBUSxHQUFXLEtBQUssQ0FBQztRQUN6QixZQUFPLEdBQVcsS0FBSyxDQUFDO1FBd0NqQixhQUFRLEdBQUc7WUFDakIsTUFBTSxDQUFDLGtCQUFnQixLQUFJLENBQUMsRUFBRSxnQ0FDWCxLQUFJLENBQUMsZUFBZSxxQ0FDZixLQUFJLENBQUMsb0JBQW9CLGlDQUM3QixLQUFJLENBQUMsZ0JBQWdCLHNDQUNoQixLQUFJLENBQUMscUJBQXFCLHlCQUN2QyxLQUFJLENBQUMsUUFBUSw0QkFDVixLQUFJLENBQUMsV0FBVywyQkFDakIsS0FBSSxDQUFDLFVBQVUsdUJBQ25CLEtBQUksQ0FBQyxNQUFNLE1BQUcsQ0FBQztRQUMxQixDQUFDO1FBNUNBLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRTtRQUNaLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUMsRUFBRSxDQUFDLEdBQUMsRUFBRSxDQUFDO1FBRS9DLEVBQUUsRUFBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUM7WUFDZixJQUFJLENBQUMsTUFBTSxJQUFJLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDMUMsQ0FBQztRQUVELEVBQUUsRUFBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUM7WUFDZixJQUFJLENBQUMsTUFBTSxJQUFJLGFBQWEsQ0FBQyxlQUFlLENBQUM7UUFDOUMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxNQUFNLElBQUksYUFBYSxDQUFDLGVBQWUsQ0FBQztRQUM5QyxDQUFDO1FBRUQsRUFBRSxFQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsRUFBQztZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxJQUFJLGFBQWEsQ0FBQyxlQUFlLENBQUM7UUFDOUMsQ0FBQztRQUVELEVBQUUsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLElBQUksYUFBYSxDQUFDLGdCQUFnQixDQUFDO1FBQy9DLENBQUM7UUFFRCxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFjRCxnQ0FBYyxHQUFkLFVBQWUsYUFBb0IsRUFBRSxRQUFlO1FBQ25ELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxhQUFhLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sSUFBSSxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQzFDLENBQUM7SUFFRCxvQ0FBa0IsR0FBbEIsVUFBbUIsYUFBcUIsRUFBRSxRQUFnQjtRQUN6RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sSUFBSSxhQUFhLENBQUMsZUFBZSxDQUFDO0lBQzlDLENBQUM7SUFFRCw2QkFBVyxHQUFYLFVBQVksUUFBZSxFQUFFLFdBQWtCLEVBQUUsVUFBaUI7UUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLFdBQVcsRUFBQyxVQUFVLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFDLEVBQUUsQ0FBQyxHQUFDLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTywyQ0FBeUIsR0FBakMsVUFBa0MsUUFBZSxFQUFFLFdBQWtCO1FBQ3BFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsTUFBTSxJQUFJLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDdEIsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE1BQU0sSUFBSSxhQUFhLENBQUMsZUFBZSxDQUFDO1lBQzlDLENBQUM7UUFDRixDQUFDO0lBQ0YsQ0FBQztJQUNGLGNBQUM7QUFBRCxDQUFDO0FBRUQsSUFBWSxhQU9YO0FBUEQsV0FBWSxhQUFhO0lBQ3hCLGlEQUFRO0lBQ1IsK0RBQW9CO0lBQ3BCLHVFQUF3QjtJQUN4Qix1RUFBd0I7SUFDeEIsdUVBQXdCO0lBQ3hCLDBFQUF5QjtBQUMxQixDQUFDLEVBUFcsYUFBYSxLQUFiLGFBQWEsUUFPeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxR3lDO0FBQ29CO0FBSUQ7QUFFSjtBQUVqQjtBQUNpQjtBQUV6QztBQU9oQjtJQXdKQzs7O09BR0c7SUFDSCxzQkFBbUIsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDNUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFYSxzQkFBUyxHQUF2QjtRQUNDLFlBQVksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDRCQUFLLEdBQUwsVUFBTSxLQUFhLEVBQUUsUUFBZ0I7UUFBckMsaUJBb0JDO1FBbEJBLElBQUksS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNuQixZQUFZLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFDckIsWUFBWSxDQUFDLE9BQU8sQ0FDcEI7YUFDQSxHQUFHLENBQUMsVUFBQyxHQUFHLElBQU8sTUFBTSxDQUFDLDJFQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzVELFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDaEIsYUFBRztZQUNVLDhEQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM1QyxZQUFZLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDOUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5RCxZQUFZLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ1osQ0FBQyxFQUNELGFBQUcsSUFBSSxZQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUdFOzs7O09BSUc7SUFDSCw4QkFBTyxHQUFQLFVBQVEsR0FBVTtRQUFsQixpQkF3QkM7UUFyQkcsWUFBWSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDMUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUc5RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLFlBQVksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUM5QixZQUFZLENBQUMsT0FBTyxDQUN2QjthQUNBLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBTyxNQUFNLENBQUMsMkVBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUQsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUNiLGFBQUc7WUFFQyw4REFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDcEMsWUFBWSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDeEIsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDZCxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQyxFQUNELGFBQUcsSUFBSSxZQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUMvQjtJQUVMLENBQUM7SUFFSjs7Ozs7Ozs7T0FRRztJQUNILDZCQUFNLEdBQU4sVUFBTyxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxJQUFhLEVBQUUsUUFBaUIsRUFBRSxPQUFnQjtRQUV6RixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3BCLFlBQVksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2QsS0FBSyxFQUFFLEtBQUs7WUFDWixRQUFRLEVBQUUsUUFBUTtZQUNsQixJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE9BQU8sRUFBQyxPQUFPO1NBQ2YsQ0FBQyxFQUNGLFlBQVksQ0FBQyxPQUFPLENBQ3BCO2FBQ0EsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFPLE1BQU0sQ0FBQywyRUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1RCxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQ2hCLGFBQUc7WUFDVSw4REFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUMsQ0FDVixDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxxQ0FBYyxHQUFkLFVBQWUsS0FBYSxFQUFFLEtBQWEsRUFBRSxJQUFhLEVBQUUsUUFBaUI7UUFDNUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNwQixZQUFZLENBQUMsT0FBTyxHQUFHLGdCQUFnQixFQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2QsS0FBSyxFQUFFLEtBQUs7WUFDWixLQUFLLEVBQUUsS0FBSztZQUNaLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLFFBQVE7U0FDbEIsQ0FBQyxFQUNGLFlBQVksQ0FBQyxPQUFPLENBQ3BCO2FBQ0EsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFPLE1BQU0sQ0FBQywyRUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1RCxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQ2hCLGFBQUc7WUFDVSw4REFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUMsQ0FDVixDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILG9DQUFhLEdBQWIsVUFBYyxLQUFZO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDcEIsWUFBWSxDQUFDLE9BQU8sR0FBRyxhQUFhLEVBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDZCxLQUFLLEVBQUUsS0FBSztTQUNaLENBQUMsRUFDRixZQUFZLENBQUMsT0FBTyxDQUNwQixDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDakIsa0JBQVE7WUFDSyw4REFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FDVixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILG9DQUFhLEdBQWI7UUFFQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQ3RCLFlBQVksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUM5QixZQUFZLENBQUMsT0FBTyxDQUNwQixDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDakIsa0JBQVE7WUFDSyw4REFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FDVixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGlDQUFVLEdBQVY7UUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ25CLFlBQVksQ0FBQyxPQUFPLEdBQUcsU0FBUyxFQUNoQyxZQUFZLENBQUMsVUFBVSxDQUFDO2FBQ3hCLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBTyxNQUFNLENBQUMsMkVBQVksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0QsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUNoQixhQUFHO1lBQ1UsOERBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN6QyxNQUFNLENBQUMsR0FBRztRQUNkLENBQUMsQ0FDVixDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxrQ0FBVyxHQUFYLFVBQVksS0FBWTtRQUV2QixFQUFFLEVBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBQztZQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQUEsSUFBSSxFQUFDO1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNGLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGtDQUFXLEdBQVgsVUFBWSxJQUFTLEVBQUUsS0FBVztRQUNqQyxJQUFJLGFBQWEsR0FBRyxJQUFJLDZEQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDMUUsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FDdEIsWUFBWSxDQUFDLE9BQU8sR0FBRyxTQUFTLEVBQ2hDLGFBQWEsQ0FDYixDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDakIsa0JBQVE7WUFFUCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUNqQyxVQUFTLE1BQWE7Z0JBQ3JCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDOUIsQ0FBQyxDQUNELENBQUM7WUFFVSw4REFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRXhELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDYixDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILG9DQUFhLEdBQWIsVUFBYyxLQUFZLEVBQUUsT0FBZ0I7UUFDM0MsRUFBRSxFQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUM7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFBQSxJQUFJLEVBQUM7WUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNGLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILG9DQUFhLEdBQWIsVUFBYyxLQUFZLEVBQUUsT0FBZ0I7UUFFM0MsSUFBSSxhQUFhLEdBQUcsSUFBSSw2REFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxPQUFPLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUU1RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQ3RCLFlBQVksQ0FBQyxPQUFPLEdBQUcsVUFBVSxFQUNqQyxhQUFhLENBQ2IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQ2pCLGtCQUFRO1lBRVAsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDckMsVUFBUyxNQUFlO2dCQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ2hDLENBQUMsQ0FDRCxDQUFDO1lBRUYsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3BCLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUVSLDhEQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFeEQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNkLENBQUMsQ0FDRCxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELG1DQUFZLEdBQVo7UUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ25CLG1DQUFtQyxDQUNuQzthQUNBLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBTyxNQUFNLENBQUMsMkVBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0QsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUNoQixhQUFHO1lBQ1UsOERBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsR0FBRztRQUNkLENBQUMsQ0FDVixDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxzQ0FBZSxHQUFmLFVBQWdCLEtBQVc7UUFFMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNuQixZQUFZLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO2FBQzdDLEdBQUcsQ0FBQyxhQUFHLElBQUksVUFBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQ2hCLGdCQUFNO1lBRUwsSUFBSSxZQUFZLEdBQUcsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxFQUFFLEVBQUMsQ0FBQztZQUVoRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBRzdDLElBQUksbUJBQW1CLEdBQUcsNEVBQVksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hGLElBQUksVUFBVSxHQUFHLG1CQUFtQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRSxHQUFHLENBQUM7Z0JBRWhHLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUMxQjtvQkFDQyxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQ3BCLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtvQkFDcEIsVUFBVSxFQUFFLEdBQUcsR0FBRyxVQUFVO2lCQUM1QixDQUNELENBQUM7WUFDSCxDQUFDO1lBRUQsWUFBWSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUNwRCxDQUFtQyxFQUNuQyxDQUFtQztnQkFDbkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDWixDQUFDLENBQ1YsQ0FBQztJQUVILENBQUM7SUFFRDs7O09BR0c7SUFDSCxnQ0FBUyxHQUFUO1FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNuQixZQUFZLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO2FBQzdDLEdBQUcsQ0FBQyxhQUFHLElBQUksVUFBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQ2hCLGdCQUFNO1lBQ08sOERBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FDVixDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxnQ0FBUyxHQUFULFVBQVUsS0FBWTtRQUVyQixLQUFLLEdBQUcsNEVBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoRCxLQUFLLEdBQUcsNEVBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVoRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ25CLFlBQVksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQzthQUMzRCxHQUFHLENBQUMsYUFBRyxJQUFJLFVBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUNqQixnQkFBTTtZQUNPLDhEQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDLE1BQU07UUFDakIsQ0FBQyxDQUNWLENBQUM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsb0NBQWEsR0FBYjtRQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxtQ0FBWSxHQUFaLFVBQWEsY0FBd0IsRUFDcEMsUUFBb0I7UUFBcEIsd0JBQW9CLEdBQXBCLGFBQW9CO1FBRWQsOERBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUc1Qyw4QkFBOEI7UUFDOUIsRUFBRSxFQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLEVBQUM7WUFDbkMsOEJBQThCO1lBQzlCLElBQUksUUFBUSxHQUFxQixFQUFFLENBQUM7WUFDcEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsQ0FBQztZQUVEOzs7Ozs7OztlQVFHO1lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBYTtnQkFDL0MsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFTLENBQU0sRUFBRSxDQUFNLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFekQsSUFBSSxJQUFJLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLFlBQVksQ0FBQztnQkFFakIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4QixZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNQLFlBQVksR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUMxRCxDQUFDO2dCQUVELFlBQVksQ0FBQyxJQUFJLEdBQUc7b0JBQ25CLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsWUFBWSxDQUFDO29CQUM3QyxVQUFVLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7b0JBQ3BDLE1BQU0sRUFBQyxZQUFZO2lCQUNuQixDQUFDO2dCQUVGLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztRQUVKLENBQUM7UUFBQSxJQUFJLEVBQUM7WUFFTCxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FDcEMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO2dCQUNwQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUN2RCxDQUFDO1lBRUYsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUV4RCxNQUFNLENBQUMsSUFBSSxPQUFPLENBQ2pCLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FDRCxDQUFDO1FBQ0gsQ0FBQztJQUNGLENBQUM7SUFFRDs7O09BR0c7SUFDSSxnQ0FBUyxHQUFoQixVQUFpQixjQUEyQjtRQUczQyxJQUFJLFVBQVUsR0FBVyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLE1BQU0sRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDO2FBQzFFLFNBQVMsRUFBRTthQUNYLElBQUksQ0FDSixrQkFBUTtZQUNQLEVBQUUsQ0FBQyxDQUFDLGNBQWMsS0FBSyxTQUFTLENBQUMsRUFBQztnQkFDakMsY0FBYyxFQUFFLENBQUM7WUFDbEIsQ0FBQztZQUVELElBQUksR0FBRyxHQUFXLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDM0MsSUFBSSxRQUFRLEdBQUcsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLENBQUMsRUFDRCxnQkFBTSxJQUFJLGNBQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQXJCLENBQXFCLENBQ2hDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxvQ0FBYSxHQUFyQixVQUFzQixLQUFZLEVBQUUsT0FBZ0I7UUFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNuQixZQUFZLENBQUMsT0FBTyxHQUFHLFVBQVUsRUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNkLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUNyQixhQUFhLEVBQUUsT0FBTyxDQUFDLHFCQUFxQjtZQUM1QyxRQUFRLEVBQUUsT0FBTyxDQUFDLGdCQUFnQjtTQUNsQyxDQUFDLEVBQ0YsWUFBWSxDQUFDLE9BQU8sQ0FDcEIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQ2pCLGtCQUFRO1lBQ0ssOERBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN4RCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0RSxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLEtBQUssQ0FBQyxJQUFJLEdBQUcsd0VBQVcsQ0FBQyxPQUFPLENBQUM7WUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNkLENBQUMsQ0FDRCxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssb0NBQWEsR0FBckIsVUFBc0IsS0FBWSxFQUFFLE9BQWdCO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDcEIsWUFBWSxDQUFDLE9BQU8sR0FBRyxVQUFVLEVBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDZCxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDakIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxvQkFBb0I7WUFDM0MsUUFBUSxFQUFFLE9BQU8sQ0FBQyxlQUFlO1NBQ2pDLENBQUMsRUFDRixZQUFZLENBQUMsT0FBTyxDQUNwQixDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDakIsa0JBQVE7WUFDSyw4REFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZELE9BQU8sQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUN2QyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNkLENBQUMsQ0FDRCxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxrQ0FBVyxHQUFuQixVQUFvQixLQUFZO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDcEIsWUFBWSxDQUFDLE9BQU8sR0FBRyxTQUFTLEVBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDZCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsSUFBSSxFQUFDLEtBQUssQ0FBQyxJQUFJO1lBQ2YsU0FBUyxFQUFDLEtBQUssQ0FBQyxTQUFTO1lBQ3pCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixPQUFPLEVBQUMsS0FBSyxDQUFDLE9BQU87U0FDckIsQ0FBQyxFQUNGLFlBQVksQ0FBQyxPQUFPLENBQ3BCLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUNqQixrQkFBUTtZQUNQLEtBQUssQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNsQiw4REFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ25ELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZCxDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssa0NBQVcsR0FBbkIsVUFBb0IsS0FBWTtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ25CLFlBQVksQ0FBQyxPQUFPLEdBQUcsU0FBUyxFQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2QsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ1osS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztTQUN0QixDQUFDLEVBQ0YsWUFBWSxDQUFDLE9BQU8sQ0FDcEIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQ2pCLGtCQUFRO1lBQ0ssOERBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN0RCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2QsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0ssa0NBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLEtBQUssSUFBSSxNQUFNLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFwdEJEOzs7T0FHRztJQUNXLDBCQUFhLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLHFDQUF3QixHQUFHLEdBQUcsQ0FBQztJQUMvQiw0QkFBZSxHQUFHLEdBQUcsQ0FBQyxDQUFZLFVBQVU7SUFFMUQsVUFBVTtJQUVWOztPQUVHO0lBQ1csb0JBQU8sR0FBRyxHQUFHLENBQUM7SUFFNUI7O09BRUc7SUFDVyx5QkFBWSxHQUFHLEdBQUcsQ0FBQztJQUNuQiwwQkFBYSxHQUFHLEdBQUcsQ0FBQztJQUNwQiwrQ0FBa0MsR0FBRyxHQUFHLENBQUM7SUFFdkQ7O09BRUc7SUFDVyw0QkFBZSxHQUFHLEdBQUcsQ0FBQztJQUN0QiwrQkFBa0IsR0FBRyxHQUFHLENBQUM7SUFDekIsaUNBQW9CLEdBQUcsR0FBRyxDQUFDO0lBQzNCLDhCQUFpQixHQUFHLEdBQUcsQ0FBQyxDQUFVLFVBQVU7SUFDNUMsa0NBQXFCLEdBQUcsR0FBRyxDQUFDLENBQU0sVUFBVTtJQUM1Qyx5QkFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFlLFVBQVU7SUFFMUQsY0FBYztJQUVBLGtDQUFxQixHQUFHLEdBQUcsQ0FBQztJQUM1QixtQ0FBc0IsR0FBRyxHQUFHLENBQUM7SUFDN0IsdUJBQVUsR0FBRyxHQUFHLENBQUM7SUFDakIsMkJBQWMsR0FBRyxHQUFHLENBQUM7SUFFbkM7O09BRUc7SUFDVyw4QkFBaUIsR0FBRyxHQUFHLENBQUM7SUFDeEIsMkJBQWMsR0FBRyxHQUFHLENBQUM7SUFDckIsMEJBQWEsR0FBRyxHQUFHLENBQUM7SUFDcEIsb0NBQXVCLEdBQUcsR0FBRyxDQUFDO0lBQzlCLHNDQUF5QixHQUFHLEdBQUcsQ0FBQyxDQUFFLFVBQVU7SUFFMUQsZUFBZTtJQUVmOztPQUVHO0lBQ1csNkJBQWdCLEdBQUcsR0FBRyxDQUFDO0lBRXJDOztPQUVHO0lBQ1csOEJBQWlCLEdBQUcsR0FBRyxDQUFDO0lBQ3hCLGtDQUFxQixHQUFHLEdBQUcsQ0FBQztJQUUxQzs7T0FFRztJQUNXLDJCQUFjLEdBQUcsR0FBRyxDQUFDO0lBRW5DOzs7OztPQUtHO0lBQ1csMkJBQWMsR0FBRyxHQUFHLENBQUM7SUFFbkM7O09BRUc7SUFDVyxvQ0FBdUIsR0FBRyxHQUFHLENBQUM7SUFFNUM7O09BRUc7SUFDVyxnQ0FBbUIsR0FBRyxHQUFHLENBQUM7SUFDMUIsK0NBQWtDLEdBQUcsR0FBRyxDQUFDO0lBQ3pDLGlDQUFvQixHQUFHLEdBQUcsQ0FBQztJQUV6Qzs7O09BR0c7SUFDVywwQkFBYSxHQUFHLEdBQUcsQ0FBQztJQUNwQixzQkFBUyxHQUFHLEdBQUcsQ0FBQztJQUNoQixpQ0FBb0IsR0FBRyxHQUFHLENBQUM7SUFDM0IscUNBQXdCLEdBQUcsR0FBRyxDQUFDO0lBQy9CLDBDQUE2QixHQUFHLEdBQUcsQ0FBQztJQUNwQyxzQ0FBeUIsR0FBRyxHQUFHLENBQUM7SUFDaEMsd0NBQTJCLEdBQUcsR0FBRyxDQUFDO0lBQ2xDLGlEQUFvQyxHQUFHLEdBQUcsQ0FBQztJQUMzQyxvQ0FBdUIsR0FBRyxHQUFHLENBQUM7SUFDOUIsK0JBQWtCLEdBQUcsR0FBRyxDQUFDLENBQStDLFVBQVU7SUFDbEYsc0NBQXlCLEdBQUcsR0FBRyxDQUFDLENBQXdDLFVBQVU7SUFDbEYsd0JBQVcsR0FBRyxHQUFHLENBQUMsQ0FBc0QsVUFBVTtJQUNsRixtQ0FBc0IsR0FBRyxHQUFHLENBQUMsQ0FBMkMsVUFBVTtJQUNsRiwyRUFBOEQsR0FBRyxHQUFHLENBQUMsQ0FBRyxVQUFVO0lBQ2xGLGtDQUFxQixHQUFHLEdBQUcsQ0FBQyxDQUE0QyxVQUFVO0lBQ2xGLHVDQUEwQixHQUFHLEdBQUcsQ0FBQyxDQUF1QyxVQUFVO0lBQ2xGLG1DQUFzQixHQUFHLEdBQUcsQ0FBQyxDQUEyQyxVQUFVO0lBQ2xGLGlEQUFvQyxHQUFHLEdBQUcsQ0FBQyxDQUE2QixVQUFVO0lBRWhHLGVBQWU7SUFFZjs7Ozs7T0FLRztJQUNXLHVDQUEwQixHQUFHLEdBQUcsQ0FBQztJQUUvQzs7T0FFRztJQUNXLGlDQUFvQixHQUFHLEdBQUcsQ0FBQztJQUMzQiw2QkFBZ0IsR0FBRyxHQUFHLENBQUM7SUFDdkIscUNBQXdCLEdBQUcsR0FBRyxDQUFDO0lBQy9CLGlDQUFvQixHQUFHLEdBQUcsQ0FBQztJQUMzQix1Q0FBMEIsR0FBRyxHQUFHLENBQUM7SUFDakMsc0RBQXlDLEdBQUcsR0FBRyxDQUFDLENBQXdCLFVBQVU7SUFDbEYsc0NBQXlCLEdBQUcsR0FBRyxDQUFDLENBQXdDLFVBQVU7SUFDbEYsK0JBQWtCLEdBQUcsR0FBRyxDQUFDLENBQStDLFVBQVU7SUFDbEYsOEJBQWlCLEdBQUcsR0FBRyxDQUFDLENBQWdELFVBQVU7SUFDbEYsaURBQW9DLEdBQUcsR0FBRyxDQUFDO0lBUzVELHFDQUFxQztJQUN0QixvQkFBTyxHQUFZLElBQUksc0RBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7SUFDdkUsb0JBQU8sR0FBbUIsSUFBSSw2REFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQy9GLGtEQUFrRDtJQUNuQyx1QkFBVSxHQUFtQixJQUFJLDZEQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUU3RixvQkFBTyxHQUFVLDJCQUEyQixDQUFDO0lBQzdDLHNCQUFTLEdBQUcsWUFBWTtJQTFKdkM7UUFBQyxnRkFBVSxFQUFFOztvQkFBQTtJQTZ0QmIsbUJBQUM7QUFBRCxDQUFDOzs7Ozs7O0FDM3VCRCwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E2RDtBQVU3RDtJQUlFLDZCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRXhDLElBQUksS0FBSyxHQUFRLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxZQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFDLENBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpHLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLGNBQWMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsNkNBQWUsR0FBZjtRQUNDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDdEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztJQUM3RCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtJQUNBLENBQUM7SUE1Qkg7UUFBQywrRUFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLHdIQUlYO1NBQ0EsQ0FBQzs7MkJBQUE7SUFzQkYsMEJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7QUN6QkQ7SUFBQTtJQXVCQSxDQUFDO0lBckJPLDBCQUFVLEdBQWpCLFVBQWtCLE9BQW9CO1FBRS9CLElBQUksWUFBWSxHQUFHLG1HQUFtRyxDQUFDO1FBRXZILEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUYsTUFBTSxDQUFDLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDM0MsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHFCQUFLLEdBQVosVUFBYSxLQUFlLEVBQUUsSUFBWSxFQUFFLE9BQWU7UUFFMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuQixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUMvQixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7QUM3QkQ7SUFPQyxrQkFBWSxFQUFVLEVBQUUsS0FBYSxFQUFFLElBQVUsRUFBRSxPQUFlLEVBQUUsR0FBVztRQVBoRixpQkFvQ0M7UUFuQk8sYUFBUSxHQUFHO1lBQ2pCLE1BQU0sQ0FBQyxtQkFBaUIsS0FBSSxDQUFDLEVBQUUsMEJBQ3BCLEtBQUksQ0FBQyxLQUFLLHlCQUNYLEtBQUksQ0FBQyxJQUFJLDRCQUNOLEtBQUksQ0FBQyxPQUFPLHdCQUNoQixLQUFJLENBQUMsR0FBRyxNQUFHLENBQUM7UUFDdEIsQ0FBQztRQWRBLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLFlBQVk7UUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDaEIsQ0FBQztJQVVPLHFDQUFrQixHQUExQixVQUEyQixHQUFVO1FBRXBDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0MsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsc0NBQXNDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsdUNBQXVDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDL0QsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBRXBCLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFSixlQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7OztBQ2xDRDtJQVdDLGNBQVksRUFBVSxFQUFDLEtBQWEsRUFBQyxJQUFZLEVBQ2hELFFBQWdCLEVBQUMsT0FBZSxFQUFDLFlBQzNCLEVBQUMsR0FBVyxFQUFDLE9BQWdCO1FBYnJDLGlCQWtEQztRQTFDQSxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLHFCQUFnQixHQUFvQixnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7UUE0Qm5ELGFBQVEsR0FBRztZQUVqQixNQUFNLENBQUMsdUJBQ0EsS0FBSSxDQUFDLEVBQUUseUJBQ0osS0FBSSxDQUFDLEtBQUssd0JBQ1gsS0FBSSxDQUFDLElBQUksNEJBQ0wsS0FBSSxDQUFDLFFBQVEsMkJBQ2QsS0FBSSxDQUFDLE9BQU8sZ0NBQ1AsS0FBSSxDQUFDLFlBQVksdUJBQzFCLEtBQUksQ0FBQyxHQUFHLDJCQUNKLEtBQUksQ0FBQyxPQUFPLE1BQUcsQ0FBQztRQUMxQixDQUFDO1FBakNILElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsMEJBQVcsR0FBWCxVQUFZLEtBQVc7UUFDdEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRTlDLEVBQUUsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUM7Z0JBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixNQUFNLENBQUM7WUFDUixDQUFDO1FBQ0YsQ0FBQztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFlRixXQUFDO0FBQUQsQ0FBQztBQUVELElBQVksZ0JBWVg7QUFaRCxXQUFZLGdCQUFnQjtJQUUzQix1REFBUTtJQUNSLG1FQUFtQjtJQUNuQix1RUFBcUI7SUFDckIscUVBQW9CO0lBQ3BCLHdFQUFxQjtJQUNyQiw0REFBZTtJQUNmLG9FQUFtQjtJQUNuQix1RUFBb0I7SUFDcEIsaUVBQWlCO0lBQ2pCLHlFQUFxQjtBQUN0QixDQUFDLEVBWlcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQVkzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRWtEO0FBS25EO0lBQUE7SUFTQSxDQUFDO0lBUEMsa0NBQVMsR0FBVCxVQUFVLEtBQWE7UUFDckIsRUFBRSxFQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBQztZQUNYLE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7UUFBQSxJQUFJLEVBQUM7WUFDRixNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBWEg7UUFBQywwRUFBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLGdCQUFnQjtTQUN2QixDQUFDOztzQkFBQTtJQVVGLHFCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNka0Q7QUFLbkQ7SUFBQTtJQWlCQSxDQUFDO0lBZkMsc0NBQXNDO0lBQ3RDLDhCQUFTLEdBQVQsVUFBVSxLQUFhO1FBRXRCLElBQUksSUFBSSxHQUFVLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNCLEVBQUUsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFDO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM5QyxDQUFDO1FBQUEsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFDO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBQUEsSUFBSSxFQUFDO1lBQ0wsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7SUFDRixDQUFDO0lBbkJIO1FBQUMsMEVBQUksQ0FBQztZQUNKLElBQUksRUFBRSxZQUFZO1NBQ25CLENBQUM7O2tCQUFBO0lBa0JGLGlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QmtEO0FBS25EO0lBQUE7SUFTQSxDQUFDO0lBUEMsK0JBQVMsR0FBVCxVQUFVLEtBQWE7UUFDckIsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDO1FBQUEsSUFBSSxFQUFDO1lBQ0YsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQVhIO1FBQUMsMEVBQUksQ0FBQztZQUNKLElBQUksRUFBRSxhQUFhO1NBQ3BCLENBQUM7O21CQUFBO0lBVUYsa0JBQUM7QUFBRCxDQUFDOzs7Ozs7O0FDZEQsZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDZ0U7QUFDUDtBQUNmO0FBQ3VCO0FBQ047QUFDRjtBQUNxQztBQUNuQztBQUNOO0FBSXJEOztHQUVHO0FBQ3lDO0FBQ0g7QUFDekM7O0dBRUc7QUFDNkM7QUFDSDtBQUNEO0FBQzVDOztHQUVHO0FBQ3FDO0FBQ0Q7QUFDRztBQUNFO0FBQzVDOztHQUVHO0FBQ21EO0FBQ2tCO0FBQ2xCO0FBQ0U7QUFDRjtBQTZCdEQ7SUFBQTtJQUNBLENBQUM7SUExQkQ7UUFBQyw4RUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLHVGQUFjO2dCQUNkLGlGQUFXO2dCQUNYLCtFQUFVO2dCQUNWLG9IQUFtQjthQUNwQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxpRkFBWTtnQkFDWiwyRUFBUzthQUNWO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHVGQUFjO2dCQUNkLGlGQUFXO2dCQUNYLCtFQUFVO2dCQUNWLG9IQUFtQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDUCx3RUFBYTtnQkFDYix5REFBVTthQUNYO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHFFQUFzQjthQUN2QjtTQUNGLENBQUM7O29CQUFBO0lBRUYsbUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7QUNsRUQ7SUFRRSx3QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUYxQyxlQUFVLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xHLGFBQVEsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRzlELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFekUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXZDLE9BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixDQUFDO0lBQ0QsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxJQUFXO1FBQ3ZCLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFFRSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ2xELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNyQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWpDLDREQUE0RDtRQUM1RCxJQUFJLEtBQUssR0FBRztZQUNYO2dCQUNDLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7YUFDbkM7WUFDRDtnQkFDQyxJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQzthQUN2QztZQUNEO2dCQUNDLElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDO2FBQzVDO1NBQ0QsQ0FBQztRQUVGLHFEQUFxRDtRQUNyRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN2QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQ3hELEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNuQixDQUFDO1lBRUYsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ3JFLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNoRSxDQUFDO0lBQ0EsQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMvRHNFO0FBR2hCO0FBQ0E7QUFNaEM7QUFFdkI7OztHQUdHO0FBQ0g7SUFTRTs7Ozs7T0FLRztJQUNILHdCQUNZLFNBQWMsRUFDZCxLQUFxQixFQUN2QixXQUFrQjtRQUZoQixjQUFTLEdBQVQsU0FBUyxDQUFLO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDdkIsZ0JBQVcsR0FBWCxXQUFXLENBQU87UUFmNUIsV0FBTSxHQUFtQixFQUFFLENBQUM7UUFFNUIsZUFBVSxHQUFLLElBQUksMkRBQVksRUFBRSxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsSUFBSSwyREFBWSxFQUFFLENBQUM7UUFlaEMsaUJBQWlCO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDdEMsS0FBSyxFQUFLLENBQUMsRUFBRSxFQUFFLDBEQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsMERBQVUsQ0FBQyxRQUFRLEVBQUUsMEVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3JGLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSwwREFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDBEQUFVLENBQUMsUUFBUSxFQUFFLDBEQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuRixDQUFDLENBQUM7SUFFTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsbUNBQVUsR0FBVixVQUFXLE1BSVM7UUFKcEIsaUJBcUNDO1FBOUJDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWpCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdCLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSTtRQUN6RixxQkFBcUI7UUFDckIsYUFBRztZQUNELEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLHVFQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxFQUNELGFBQUc7WUFFRCw2Q0FBNkM7WUFDN0Msd0NBQXdDO1lBQ3hDLDhCQUE4QjtZQUM5QixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5Qix1RUFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixLQUFLLEdBQUc7b0JBQ04sS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ2hDLEtBQUssQ0FBQztnQkFDUjtvQkFDRSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDMUIsS0FBSyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUMsQ0FDSixDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7T0FHRztJQUNILGlDQUFRLEdBQVIsVUFBUyxJQUFvQztRQUE3QyxpQkE2QkM7UUEzQkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFakIseUJBQXlCO1FBQ3pCLEVBQUUsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFDO1lBRXZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTdCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDOUMsYUFBRztnQkFDRCxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUIsdUVBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM3QyxDQUFDLEVBQ0QsYUFBRztnQkFDRCx1RUFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDbkIsS0FBSyxHQUFHO3dCQUNOLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUNoQyxLQUFLLENBQUM7b0JBQ1I7d0JBQ0UsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzFCLEtBQUssQ0FBQztnQkFDVixDQUFDO1lBQ0gsQ0FBQyxDQUNGLENBQUM7WUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQztJQUVELDhDQUFxQixHQUFyQixVQUFzQixLQUFZO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVILHFCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RJc0U7QUFFWjtBQUNKO0FBQ0E7QUFNaEM7QUFHdkI7O0dBRUc7QUFDSDtJQVlHOzs7OztNQUtFO0lBQ0gseUJBQW9CLFNBQWMsRUFDeEIsS0FBbUIsRUFBVSxXQUFnQjtRQW5CekQsaUJBZ0lDO1FBOUdxQixjQUFTLEdBQVQsU0FBUyxDQUFLO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWM7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBSztRQWhCdkQsa0JBQWEsR0FBVyxLQUFLLENBQUM7UUFDOUIsV0FBTSxHQUFTLEVBQUUsQ0FBQztRQUVsQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixVQUFLLEdBQW1CLEVBQUUsQ0FBQztRQUVqQixlQUFVLEdBQUcsSUFBSSwyREFBWSxFQUFFLENBQUM7UUFDaEMsa0JBQWEsR0FBRyxJQUFJLDJEQUFZLEVBQUUsQ0FBQztRQVczQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFnQjtZQUNwRCxLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDckMsS0FBSyxFQUFXLENBQUMsRUFBRSxFQUFFLDBEQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsMERBQVUsQ0FBQyxRQUFRLEVBQUUsMEVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzNGLFdBQVcsRUFBSyxDQUFDLEVBQUUsRUFBRSwwREFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDBEQUFVLENBQUMsUUFBUSxFQUFFLDBFQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUUzRixRQUFRLEVBQVEsQ0FBQyxFQUFFLEVBQUUsMERBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQywwREFBVSxDQUFDLFFBQVEsRUFBRSwwREFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEYsY0FBYyxFQUFFLENBQUMsRUFBRTtnQkFDakIsMERBQVUsQ0FBQyxPQUFPLENBQUM7b0JBQ2pCLDBEQUFVLENBQUMsUUFBUTtvQkFDbkIsMERBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2lCQUN4QixDQUFDO2FBQ0g7WUFDRCxRQUFRLEVBQVEsRUFBRTtZQUNsQixTQUFTLEVBQU8sRUFBRTtZQUNsQixPQUFPLEVBQVMsRUFBRTtTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBR0Q7Ozs7T0FJRztJQUNILGdDQUFNLEdBQU4sVUFBTyxLQUFZO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBUyxPQUFjO1lBQy9ELE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxnQ0FBTSxHQUFOLFVBQU8sSUFBVztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsa0NBQVEsR0FBUixVQUFTLElBT047UUFQSCxpQkFvREM7UUEzQ0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFHakIsRUFBRSxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSztZQUN0QixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQ3BDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDO1lBRWhDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTlCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQzNCLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQ2YsYUFBRztnQkFDRCx1RUFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUM1QyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDM0IsQ0FBQyxFQUNELGVBQUs7Z0JBQ0gsdUVBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDekMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLEtBQUssNkVBQVksQ0FBQyxpQkFBaUI7d0JBQ2pDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUNoQyxLQUFLLENBQUM7b0JBQ1I7d0JBQ0UsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzFCLEtBQUssQ0FBQztnQkFDVixDQUFDO1lBQ0gsQ0FBQyxDQUNEO1lBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUFDLElBQUksRUFBQztZQUVMLEVBQUUsRUFBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBQztnQkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNyQyxDQUFDO1lBRUQsRUFBRSxFQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDO2dCQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsQyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQXJIRDtRQUFDLDRFQUFNLEVBQUU7O3VEQUFBO0lBQ1Q7UUFBQyw0RUFBTSxFQUFFOzswREFBQTtJQXNIWCxzQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hKc0U7QUFJckI7QUFHSztBQU1oQztBQUV2Qjs7R0FFRztBQUNIO0lBZUU7Ozs7O09BS0c7SUFDSCx3QkFDWSxTQUFjLEVBQ2hCLEtBQXlCLEVBQ3pCLFdBQW9CO1FBeEJoQyxpQkE0SkM7UUF0SWEsY0FBUyxHQUFULFNBQVMsQ0FBSztRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixnQkFBVyxHQUFYLFdBQVcsQ0FBUztRQXJCcEIsZUFBVSxHQUFHLElBQUksMkRBQVksRUFBRSxDQUFDO1FBQzFDLGVBQVUsR0FBVSxJQUFJLGtFQUFLLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXhDLFdBQU0sR0FBZ0UsRUFBRSxDQUFDO1FBQ3pFLFdBQU0sR0FBd0IsRUFBRSxDQUFDO1FBQ2pDLHNCQUFpQixHQUFxRCxFQUFFLENBQUM7UUFDekUsc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBQ2pDLFVBQUssR0FBd0IsS0FBSyxDQUFDO1FBQ25DLGtCQUFhLEdBQWdCLEtBQUssQ0FBQztRQUNuQyxrQkFBYSxHQUFnQixLQUFLLENBQUM7UUFDbkMsa0JBQWEsR0FBZ0IsS0FBSyxDQUFDO1FBY2pDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUdwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3RDLEVBQUUsRUFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDM0IsS0FBSyxFQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUcsMERBQVUsQ0FBQyxRQUFRLENBQUM7WUFDdEQsSUFBSSxFQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsMERBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEQsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTztZQUNoQyxJQUFJLEVBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSwwREFBVSxDQUFDLE9BQU8sQ0FDckQsQ0FBQywwREFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRywwREFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNwRCxDQUFDO1lBQ0YsTUFBTSxFQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTTtTQUNoQyxDQUFDLENBQUM7UUFHSCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDekIsYUFBRztZQUNELEtBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNILG9DQUFXLEdBQVgsVUFBWSxLQUFhO1FBQXpCLGlCQVNDO1FBUkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUM1QyxhQUFHLElBQU0sWUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQWpCLENBQWlCLEVBQzFCLGVBQUssSUFBSSxZQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FDMUIsQ0FBQztRQUVGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxvQ0FBVyxHQUFYLFVBQVksS0FBYTtRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsb0NBQVcsR0FBWCxVQUFZLEtBQWE7UUFBekIsaUJBWUM7UUFWQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxLQUFLLENBQUMsRUFBQztZQUM5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ3pDLFVBQVMsT0FBdUQ7Z0JBQzlELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4RSxDQUFDLENBQUMsQ0FBQztRQUVMLENBQUM7UUFBQSxJQUFJLEVBQUM7WUFDSixVQUFVLENBQUMsY0FBSyxZQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssRUFBMUIsQ0FBMEIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRCxDQUFDO0lBRUgsQ0FBQztJQUVEOzs7T0FHRztJQUNILG9DQUFXLEdBQVgsVUFBWSxLQUFZO1FBQXhCLGlCQVVDO1FBUkMsRUFBRSxFQUFDLElBQUksQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLEVBQUM7WUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVMsT0FBYztnQkFDakUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQUEsSUFBSSxFQUFDO1lBQ0osVUFBVSxDQUFDLGNBQUssWUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLEVBQTFCLENBQTBCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakQsQ0FBQztJQUVILENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUNBQVEsR0FBUjtRQUFBLGlCQXdCQztRQXRCQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUUxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFFbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FDMUMsYUFBRztnQkFDRCx1RUFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNsRCxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFDM0IsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDckIsQ0FBQyxFQUNELGVBQUs7Z0JBQ0gsdUVBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDL0MsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzdCLENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQztRQUFBLElBQUksRUFBQztZQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUM7SUFDSCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUNyRCxhQUFHO1lBQ0QsdUVBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNsRCxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLEVBQ0QsZUFBSztZQUNILHVFQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDL0MsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBeEpEO1FBQUMsNEVBQU0sRUFBRTs7c0RBQUE7SUF5SlgscUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7QUM5S0Q7SUFBQTtJQXdCQSxDQUFDO0lBdEJpQix3QkFBVyxHQUF6QixVQUEwQixDQUFRLEVBQUUsQ0FBUTtRQUN4QyxFQUFFLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLEVBQUUsRUFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUFDLFFBQVEsQ0FBQztZQUNyQixHQUFHLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBQy9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ1osRUFBRSxFQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQUMsUUFBUSxDQUFDO2dCQUNyQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FDckUsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUNmLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUNiLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNoQixDQUFDO1lBQ04sQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVhLHVCQUFVLEdBQXhCLFVBQXlCLE1BQWEsRUFBRSxNQUFhLEVBQUUsV0FBa0I7UUFDckUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDTCxtQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7QUN4Qm9DO0FBQ0M7QUFDTztBQUNIO0FBRTFDO0lBQUE7SUFzRUEsQ0FBQztJQW5FQTs7OztPQUlHO0lBQ0ksc0JBQVMsR0FBaEIsVUFBaUIsUUFBYTtRQUU3QixNQUFNLENBQUMsSUFBSSx5REFBSSxDQUNkLFFBQVEsQ0FBQyxNQUFNLEVBQ2YsUUFBUSxDQUFDLEtBQUssRUFDZCxRQUFRLENBQUMsU0FBUyxFQUNsQixRQUFRLENBQUMsSUFBSSxFQUNiLFFBQVEsQ0FBQyxPQUFPLEVBQ2hCLFFBQVEsQ0FBQyxZQUFZLEVBQ3JCLFFBQVEsQ0FBQyxHQUFHLEVBQ1osWUFBWSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQzNDLENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHlCQUFZLEdBQW5CLFVBQW9CLFdBQWdCO1FBQ25DLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVMsU0FBYTtZQUM1QyxNQUFNLENBQUMsSUFBSSwyREFBSyxDQUNmLFNBQVMsQ0FBQyxPQUFPLEVBQ2pCLFNBQVMsQ0FBQyxLQUFLLEVBQ2YsU0FBUyxDQUFDLFdBQVcsRUFDckIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBUyxXQUFlO2dCQUM5QyxNQUFNLENBQUMsSUFBSSwrREFBTyxDQUNqQixXQUFXLENBQUMsRUFBRSxFQUNkLFdBQVcsQ0FBQyxlQUFlLEVBQzNCLFdBQVcsQ0FBQyxvQkFBb0IsRUFDaEMsV0FBVyxDQUFDLFFBQVEsRUFDcEIsV0FBVyxDQUFDLGdCQUFnQixFQUM1QixXQUFXLENBQUMscUJBQXFCLEVBQ2pDLFdBQVcsQ0FBQyxRQUFRLEVBQ3BCLFdBQVcsQ0FBQyxXQUFXLEVBQ3ZCLFdBQVcsQ0FBQyxVQUFVLENBQUM7WUFDekIsQ0FBQyxDQUFDLEVBQ0YsU0FBUyxDQUFDLElBQUksRUFDZCxTQUFTLENBQUMsU0FBUyxFQUNuQixTQUFTLENBQUMsTUFBTSxFQUNoQixTQUFTLENBQUMsT0FBTyxDQUNqQjtRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx1QkFBVSxHQUFqQixVQUFrQixTQUFjO1FBQy9CLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFTLFFBQVk7WUFFL0MsTUFBTSxDQUFDLElBQUksa0VBQVEsQ0FDbEIsUUFBUSxDQUFDLEVBQUUsRUFDWCxRQUFRLENBQUMsS0FBSyxFQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFDdkIsUUFBUSxDQUFDLE9BQU8sRUFDaEIsUUFBUSxDQUFDLEdBQUcsQ0FDWixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0YsbUJBQUM7QUFBRCxDQUFDOzs7Ozs7O0FDM0VELGdEOzs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3QiIsImZpbGUiOiJ0dy1jb3JlLnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpLCByZXF1aXJlKFwicnhqcy9SeFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYW5ndWxhci9jb3JlXCIsIFwiQGFuZ3VsYXIvZm9ybXNcIiwgXCJAYW5ndWxhci9odHRwXCIsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiLCBcInJ4anMvUnhcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widHctY29yZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpLCByZXF1aXJlKFwicnhqcy9SeFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1widHctY29yZVwiXSA9IGZhY3Rvcnkocm9vdFtcIkBhbmd1bGFyL2NvcmVcIl0sIHJvb3RbXCJAYW5ndWxhci9mb3Jtc1wiXSwgcm9vdFtcIkBhbmd1bGFyL2h0dHBcIl0sIHJvb3RbXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCJdLCByb290W1wicnhqcy9SeFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIyX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmOTZhYTA3YmMzMWE2ZTFjOTRmOCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgZ2E6YW55O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR0FTZXJ2aWNlIHtcblxuICBwdWJsaWMgc3RhdGljIGFwcE5hbWU6c3RyaW5nO1xuICBwdWJsaWMgc3RhdGljIGFwcFZlcnNpb246c3RyaW5nO1xuICBwdWJsaWMgc3RhdGljIHVzZXJOYW1lOnN0cmluZztcbiAgcHVibGljIHN0YXRpYyB1c2VyRW1haWw6c3RyaW5nO1xuICBwcml2YXRlIHN0YXRpYyBnYUNyZWF0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuXG5cblxuICBwcml2YXRlIHN0YXRpYyBzcGF3bigpe1xuXG4gICAgICBpZighR0FTZXJ2aWNlLmdhQ3JlYXRlZCl7XG4gICAgICAgIHZhciBjdXJyZGF0ZSA6IGFueSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBnYU5ld0VsZW0gOiBhbnkgPSB7fTtcbiAgICAgICAgdmFyIGdhRWxlbXMgOiBhbnkgPSB7fTtcblxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTpzZW1pY29sb24gKi9cbiAgICAgICAgLyogdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLWV4cHJlc3Npb24gKi9cbiAgICAgICAgLy8gVGhpcyBjb2RlIGlzIGZyb20gR29vZ2xlLCBzbyBsZXQncyBub3QgbW9kaWZ5IGl0IHRvbyBtdWNoLCBqdXN0IGFkZCBnYU5ld0VsZW0gYW5kIGdhRWxlbXM6XG5cbiAgICAgICAgKGZ1bmN0aW9uKGkscyxvLGcscixhLG0pe2lbJ0dvb2dsZUFuYWx5dGljc09iamVjdCddPXI7aVtyXT1pW3JdfHxmdW5jdGlvbigpe1xuICAgICAgICAoaVtyXS5xPWlbcl0ucXx8W10pLnB1c2goYXJndW1lbnRzKX0saVtyXS5sPTEqY3VycmRhdGU7YT1zLmNyZWF0ZUVsZW1lbnQobyksXG4gICAgICAgIG09cy5nZXRFbGVtZW50c0J5VGFnTmFtZShvKVswXTthLmFzeW5jPTE7YS5zcmM9ZzttLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsbSlcbiAgICAgICAgfSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCdnYScsIGdhTmV3RWxlbSwgZ2FFbGVtcyk7XG4gICAgICAgIFxuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLXVudXNlZC1leHByZXNzaW9uICovXG4gICAgICAgIC8qIHRzbGludDplbmFibGU6c2VtaWNvbG9uICovXG4gICAgICAgIC8qIHRzbGludDplbmFibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgICAgICAgZ2EoJ2NyZWF0ZScsICdVQS01OTE0ODg3OC0xJywgJ2FwcC50b29sd2F0Y2guaW8nKTtcbiAgICAgICAgR0FTZXJ2aWNlLmdhQ3JlYXRlZCA9IHRydWU7XG4gICAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGV2ZW50KGV2ZW50Q2F0ZWdvcnk6c3RyaW5nLCBldmVudEFjdGlvbjpzdHJpbmcsIGV2ZW50TGFiZWw6c3RyaW5nPScnLCBldmVudFZhbHVlOm51bWJlcj0wKXtcbiAgICBHQVNlcnZpY2Uuc3Bhd24oKTtcbiAgICBnYSgnc2VuZCcsICdldmVudCcsIGV2ZW50Q2F0ZWdvcnksIGV2ZW50QWN0aW9uLCBldmVudExhYmVsLCBldmVudFZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2NyZWVudmlldyhzY3JlZW5OYW1lOnN0cmluZyl7XG5cbiAgICAvL2FwcFZlcnNpb24gYW5kIGFwcE5hbWUgYXJlIGhhbmRsZWQgYnkgaW9uaWMtbmF0aXZlIHByb21pc2VzIG9uIG1vYmlsZVxuICAgIC8vSW4gY2FzZSB0aGUgcHJvbWlzZXMgYXJlIHN0aWxsIHdvcmtpbmcsIHdlIHRpbWVvdXQgdGhlIGNhbGwgYnkgMXMuXG4gICAgaWYoR0FTZXJ2aWNlLmFwcE5hbWUgPT0gdW5kZWZpbmVkIHx8IEdBU2VydmljZS5hcHBWZXJzaW9uID09IHVuZGVmaW5lZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR0FTZXJ2aWNlIGlzbid0IGNvbmZpZ3VyZWQgeWV0LiBQb3N0cG9uaW5nIGNhbGxcIiwgR0FTZXJ2aWNlLmFwcE5hbWUsIEdBU2VydmljZS5hcHBWZXJzaW9uKTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIEdBU2VydmljZS5zY3JlZW52aWV3KHNjcmVlbk5hbWUpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9ZWxzZXtcbiAgICAgIEdBU2VydmljZS5zcGF3bigpO1xuICAgICAgZ2EoJ3NlbmQnLCAnc2NyZWVudmlldycsIHtcbiAgICAgICAgJ2FwcE5hbWUnOiBHQVNlcnZpY2UuYXBwTmFtZSxcbiAgICAgICAgJ2FwcFZlcnNpb24nOiBHQVNlcnZpY2UuYXBwVmVyc2lvbixcbiAgICAgICAgJ3NjcmVlbk5hbWUnOiBzY3JlZW5OYW1lXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHBhZ2V2aWV3KHBhZ2U6c3RyaW5nKXtcbiAgICBHQVNlcnZpY2Uuc3Bhd24oKTtcbiAgICBnYSgnc2V0JywgJ3BhZ2UnLCBwYWdlKTtcbiAgICBnYSgnc2VuZCcsICdwYWdldmlldycpXG4gIH1cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvZ2Euc2VydmljZS50cyIsImltcG9ydCB7IE1lYXN1cmUsIE1lYXN1cmVTdGF0dXMgfSBmcm9tICcuL21lYXN1cmUubW9kZWwnXG5cbmV4cG9ydCBjbGFzcyBXYXRjaHtcblx0aWQ6bnVtYmVyO1xuXHRicmFuZDpzdHJpbmc7XG5cdGhpc3RvcnlTaXplOm51bWJlcjtcblx0bWVhc3VyZXM6TWVhc3VyZVtdO1xuXHRuYW1lOnN0cmluZztcblx0eWVhck9mQnV5Om51bWJlcjtcblx0c2VyaWFsOnN0cmluZztcblx0Y2FsaWJlcjpzdHJpbmc7XG5cdHN0YXR1czogV2F0Y2hTdGF0dXM7XG5cdG5leHQ6IFdhdGNoQWN0aW9uO1xuXHR3YWl0aW5nOm51bWJlcjtcblx0aW5pdGlhbHM6c3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIGJyYW5kOiBzdHJpbmcsIGhpc3RvcnlTaXplOiBudW1iZXIgPSAwLFxuXHRcdG1lYXN1cmVzOiBNZWFzdXJlW10gPSBbXSwgbmFtZTogc3RyaW5nID0gXCJcIiwgeWVhck9mQnV5OiBudW1iZXIgPSBudWxsLFxuXHRcdHNlcmlhbDogc3RyaW5nID0gXCJcIiwgY2FsaWJlcjogc3RyaW5nID0gXCJcIikge1xuXG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMuYnJhbmQgPSBicmFuZDtcblx0XHR0aGlzLmhpc3RvcnlTaXplID0gaGlzdG9yeVNpemU7XG5cdFx0dGhpcy5tZWFzdXJlcyA9IG1lYXN1cmVzLnNvcnQoZnVuY3Rpb24oYTpNZWFzdXJlLCBiOk1lYXN1cmUpe1xuXHRcdFx0cmV0dXJuIGEuaWQgLSBiLmlkO1xuXHRcdH0pO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy55ZWFyT2ZCdXkgPSB5ZWFyT2ZCdXk7XG5cdFx0dGhpcy5zZXJpYWwgPSBzZXJpYWw7XG5cdFx0dGhpcy5jYWxpYmVyID0gY2FsaWJlcjtcblx0XHR0aGlzLmluaXRpYWxzID0gKHRoaXMuYnJhbmQgIT0gbnVsbCAmJiB0aGlzLmJyYW5kLmxlbmd0aCA+IDApID8gdGhpcy5icmFuZC5jaGFyQXQoMCkgOiBcIlwiO1xuXHRcdHRoaXMuaW5pdGlhbHMgKz0gKHRoaXMubmFtZS5sZW5ndGggPiAwKSA/IHRoaXMubmFtZS5jaGFyQXQoMCkgOiBcIlwiO1xuXG5cdFx0aWYgKGhpc3RvcnlTaXplID09IDApe1xuXHRcdFx0dGhpcy5zdGF0dXMgPSBXYXRjaFN0YXR1cy5OZXZlck1lYXN1cmVkO1xuXHRcdFx0dGhpcy5uZXh0ID0gV2F0Y2hBY3Rpb24uTWVhc3VyZTtcblx0XHR9ZWxzZSBpZihoaXN0b3J5U2l6ZSA+IHRoaXMubWVhc3VyZXMubGVuZ3RoKXtcblx0XHRcdHRoaXMuc3RhdHVzID0gV2F0Y2hTdGF0dXMuSGF2ZU1vcmVNZWFzdXJlcztcblx0XHR9XG5cblx0XHR0aGlzLmNvbXB1dGVOZXh0KCk7XG5cdH1cblxuXHRjb21wdXRlTmV4dCgpe1xuXHRcdGxldCBsYXN0TWVhc3VyZSA9IHRoaXMuY3VycmVudE1lYXN1cmUoKTtcblx0XHRpZiAobGFzdE1lYXN1cmUgIT09IG51bGwgXG5cdFx0XHQmJiBsYXN0TWVhc3VyZS5zdGF0dXMgJiBNZWFzdXJlU3RhdHVzLkJhc2VNZWFzdXJlKXtcblx0XHRcdFxuXHRcdFx0aWYgKE1hdGguYWJzKChsYXN0TWVhc3VyZS5tZWFzdXJlVXNlclRpbWUgLSBEYXRlLm5vdygpLzEwMDApLzM2MDApIDwgMTIpe1xuXHRcdFx0XHR0aGlzLm5leHQgPSBXYXRjaEFjdGlvbi5XYWl0aW5nO1xuXHRcdFx0XHR0aGlzLndhaXRpbmcgPSBNYXRoLnJvdW5kKDEyIC0gTWF0aC5hYnMoKGxhc3RNZWFzdXJlLm1lYXN1cmVVc2VyVGltZSAtIERhdGUubm93KCkvMTAwMCkvMzYwMCkpO1xuXHRcdFx0fWVsc2UgaWYoIShsYXN0TWVhc3VyZS5zdGF0dXMgJiBNZWFzdXJlU3RhdHVzLkFjY3VyYWN5TWVhc3VyZSkpIHtcblx0XHRcdFx0dGhpcy5uZXh0ID0gV2F0Y2hBY3Rpb24uQWNjdXJhY3k7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5uZXh0ID0gV2F0Y2hBY3Rpb24uTWVhc3VyZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgdG9TdHJpbmcgPSAoKSA6IHN0cmluZyA9PiB7XG5cdFx0cmV0dXJuIGBXYXRjaCAoaWQ6ICR7dGhpcy5pZH0sXG5cdFx0XHRcdGJyYW5kOiAke3RoaXMuYnJhbmR9LFxuXHRcdFx0XHRoaXN0b3J5U2l6ZTogJHt0aGlzLmhpc3RvcnlTaXplfSxcblx0XHRcdFx0bWVhc3VyZXM6ICR7dGhpcy5tZWFzdXJlc30sXG5cdFx0XHRcdG5hbWU6ICR7dGhpcy5uYW1lfSxcblx0XHRcdFx0eWVhck9mQnV5OiAke3RoaXMueWVhck9mQnV5fSxcblx0XHRcdFx0c2VyaWFsOiAke3RoaXMuc2VyaWFsfSxcblx0XHRcdFx0Y2FsaWJlcjogJHt0aGlzLmNhbGliZXJ9LFxuXHRcdFx0XHRzdGF0dXM6ICR7dGhpcy5zdGF0dXN9LFxuXHRcdFx0XHRuZXh0OiAke3RoaXMubmV4dH0sXG5cdFx0XHRcdHdhaXRpbmc6ICR7dGhpcy53YWl0aW5nfSlgO1xuXHR9XG5cblx0YXZlcmFnZShhbW91bnQ6bnVtYmVyKXtcblxuXHRcdGxldCBhY3R1YWxBbW91bnQ6bnVtYmVyID0gMDtcblx0XHRsZXQgYXZlcmFnZTpudW1iZXIgPSAwO1xuXHRcdGxldCBpOm51bWJlciA9IHRoaXMubWVhc3VyZXMubGVuZ3RoIC0gMTtcblxuXHRcdHdoaWxlKGk+PSAwICYmIGFjdHVhbEFtb3VudCA8PSBhbW91bnQpe1xuXHRcdFx0aWYodGhpcy5tZWFzdXJlc1tpXS5zdGF0dXMgJiBNZWFzdXJlU3RhdHVzLkFjY3VyYWN5TWVhc3VyZSl7XG5cdFx0XHRcdGF2ZXJhZ2UgPSBhdmVyYWdlICsgTWF0aC5hYnModGhpcy5tZWFzdXJlc1tpXS5hY2N1cmFjeSk7XG5cdFx0XHRcdGFjdHVhbEFtb3VudCsrO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpLS07XG5cdFx0XHRcblx0XHR9XG5cdFx0cmV0dXJuIChhdmVyYWdlL2FjdHVhbEFtb3VudCkudG9GaXhlZCgxKTtcblx0fVxuXG5cdGxhc3RDb21wbGV0ZU1lYXN1cmUoKTpNZWFzdXJle1xuXHRcdGxldCBpOm51bWJlciA9IHRoaXMubWVhc3VyZXMubGVuZ3RoIC0gMTtcblxuXHRcdHdoaWxlKGkgPj0gMCl7XG5cdFx0XHRpZih0aGlzLm1lYXN1cmVzW2ldLnN0YXR1cyAmIE1lYXN1cmVTdGF0dXMuQWNjdXJhY3lNZWFzdXJlKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMubWVhc3VyZXNbaV07XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGktLTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGN1cnJlbnRNZWFzdXJlKCk6TWVhc3VyZXtcblx0XHRpZih0aGlzLm1lYXN1cmVzLmxlbmd0aCAhPT0gMCl7XG5cdFx0XHRyZXR1cm4gdGhpcy5tZWFzdXJlc1t0aGlzLm1lYXN1cmVzLmxlbmd0aCAtIDFdO1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0dXBzZXJ0TWVhc3VyZShtZWFzdXJlOk1lYXN1cmUpe1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1lYXN1cmVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcImlcIiwgaSk7XG5cdFx0XHRpZih0aGlzLm1lYXN1cmVzW2ldLmlkID09IG1lYXN1cmUuaWQpe1xuXHRcdFx0XHR0aGlzLm1lYXN1cmVzW2ldID0gbWVhc3VyZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLmhpc3RvcnlTaXplKys7XG5cdFx0dGhpcy5tZWFzdXJlcy5wdXNoKG1lYXN1cmUpO1xuXHR9XG5cblx0Y2xvbmUoKTpXYXRjaHtcblx0XHRyZXR1cm4gbmV3IFdhdGNoKFxuXHRcdFx0dGhpcy5pZCxcblx0XHRcdHRoaXMuYnJhbmQsXG5cdFx0XHR0aGlzLmhpc3RvcnlTaXplLFxuXHRcdFx0dGhpcy5tZWFzdXJlcyxcblx0XHRcdHRoaXMubmFtZSxcblx0XHRcdHRoaXMueWVhck9mQnV5LFxuXHRcdFx0dGhpcy5zZXJpYWwsXG5cdFx0XHR0aGlzLmNhbGliZXJcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBlbnVtIFdhdGNoQWN0aW9ue1xuXHRNZWFzdXJlLCBXYWl0aW5nLCBBY2N1cmFjeVxufVxuXG5leHBvcnQgZW51bSBXYXRjaFN0YXR1c3tcblx0TmV2ZXJNZWFzdXJlZCxcblx0SGF2ZU1vcmVNZWFzdXJlc1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbHMvd2F0Y2gubW9kZWwudHMiLCJleHBvcnQgY2xhc3MgTWVhc3VyZXtcblxuXHRpZDpudW1iZXI7XG5cdG1lYXN1cmVVc2VyVGltZTpudW1iZXI7XG5cdG1lYXN1cmVSZWZlcmVuY2VUaW1lOm51bWJlcjtcblx0YWNjdXJhY3lVc2VyVGltZTpudW1iZXI7XG5cdGFjY3VyYWN5UmVmZXJlbmNlVGltZTpudW1iZXI7XG5cdGFjY3VyYWN5Om51bWJlcjtcblx0YWNjdXJhY3lBZ2U6bnVtYmVyO1xuXHRwZXJjZW50aWxlOm51bWJlcjtcblx0c3RhdHVzOiBNZWFzdXJlU3RhdHVzID0gTWVhc3VyZVN0YXR1cy5Ob25lO1xuXHRzZXJ2aWNlZDpib29sZWFuID0gZmFsc2U7XG5cdHJlbmV3ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG1lYXN1cmVVc2VyVGltZTogbnVtYmVyLCBtZWFzdXJlUmVmZXJlbmNlVGltZTogbnVtYmVyLCBcblx0XHRzdGF0dXM/OiBudW1iZXIsIGFjY3VyYWN5VXNlclRpbWU/OiBudW1iZXIsIGFjY3VyYWN5UmVmZXJlbmNlVGltZT86IG51bWJlciwgXG5cdFx0YWNjdXJhY3k/OiBudW1iZXIsIGFjY3VyYWN5QWdlPzogbnVtYmVyLCBwZXJjZW50aWxlPzogbnVtYmVyKXtcblxuXHRcdHRoaXMuaWQgPSBpZFxuXHRcdHRoaXMubWVhc3VyZVVzZXJUaW1lID0gbWVhc3VyZVVzZXJUaW1lO1xuXHRcdHRoaXMubWVhc3VyZVJlZmVyZW5jZVRpbWUgPSBtZWFzdXJlUmVmZXJlbmNlVGltZTtcblx0XHR0aGlzLmFjY3VyYWN5VXNlclRpbWUgPSBhY2N1cmFjeVVzZXJUaW1lO1xuXHRcdHRoaXMuYWNjdXJhY3lSZWZlcmVuY2VUaW1lID0gYWNjdXJhY3lSZWZlcmVuY2VUaW1lO1xuXHRcdHRoaXMuYWNjdXJhY3kgPSBhY2N1cmFjeTtcblx0XHR0aGlzLmFjY3VyYWN5QWdlID0gYWNjdXJhY3lBZ2U7XG5cdFx0dGhpcy5wZXJjZW50aWxlID0gTWF0aC5yb3VuZChwZXJjZW50aWxlKjEwKS8xMDtcblxuXHRcdGlmKHN0YXR1cyA+PSAxKXtcblx0XHRcdHRoaXMuc3RhdHVzIHw9IE1lYXN1cmVTdGF0dXMuQmFzZU1lYXN1cmU7XG5cdFx0fVxuXG5cdFx0aWYoc3RhdHVzID49IDIpe1xuXHRcdFx0dGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5BY2N1cmFjeU1lYXN1cmU7XG5cdFx0fVxuXG5cdFx0aWYgKHN0YXR1cyA+PSAzKSB7XG5cdFx0XHR0aGlzLnN0YXR1cyB8PSBNZWFzdXJlU3RhdHVzLkFyY2hpdmVkTWVhc3VyZTtcblx0XHR9XG5cblx0XHRpZihhY2N1cmFjeUFnZSA+IDMwKXtcblx0XHRcdHRoaXMucmVuZXdlZCA9IHRydWU7XG5cdFx0XHR0aGlzLnN0YXR1cyB8PSBNZWFzdXJlU3RhdHVzLlNob3VsZEJlUmVuZXdlZDtcblx0XHR9XG5cblx0XHRpZihNYXRoLmFicyhhY2N1cmFjeSkgPiAyMCl7XG5cdFx0XHR0aGlzLnNlcnZpY2VkID0gdHJ1ZTtcblx0XHRcdHRoaXMuc3RhdHVzIHw9IE1lYXN1cmVTdGF0dXMuU2hvdWxkQmVTZXJ2aWNlZDtcblx0XHR9XG5cblx0XHR0aGlzLmNvbXB1dGVQb3N0QWNjdXJhY3lTdGF0dXMoYWNjdXJhY3ksIGFjY3VyYWN5QWdlKTtcblx0fVxuXG5cdHB1YmxpYyB0b1N0cmluZyA9ICgpIDogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gYE1lYXN1cmUgKGlkOiAke3RoaXMuaWR9LFxuXHRcdG1lYXN1cmVVc2VyVGltZTogJHt0aGlzLm1lYXN1cmVVc2VyVGltZX0sXG5cdFx0bWVhc3VyZVJlZmVyZW5jZVRpbWU6ICR7dGhpcy5tZWFzdXJlUmVmZXJlbmNlVGltZX0sXG5cdFx0YWNjdXJhY3lVc2VyVGltZTogJHt0aGlzLmFjY3VyYWN5VXNlclRpbWV9LFxuXHRcdGFjY3VyYWN5UmVmZXJlbmNlVGltZTogJHt0aGlzLmFjY3VyYWN5UmVmZXJlbmNlVGltZX0sXG5cdFx0YWNjdXJhY3k6ICR7dGhpcy5hY2N1cmFjeX0sXG5cdFx0YWNjdXJhY3lBZ2U6ICR7dGhpcy5hY2N1cmFjeUFnZX0sXG5cdFx0cGVyY2VudGlsZTogJHt0aGlzLnBlcmNlbnRpbGV9LFxuXHRcdHN0YXR1czogJHt0aGlzLnN0YXR1c30pYDtcblx0fVxuXG5cdGFkZEJhc2VNZWFzdXJlKHJlZmVyZW5jZVRpbWU6bnVtYmVyLCB1c2VyVGltZTpudW1iZXIpe1xuXHRcdHRoaXMubWVhc3VyZVJlZmVyZW5jZVRpbWUgPSByZWZlcmVuY2VUaW1lO1xuXHRcdHRoaXMubWVhc3VyZVVzZXJUaW1lID0gdXNlclRpbWU7XG5cdFx0dGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5CYXNlTWVhc3VyZTtcblx0fVxuXG5cdGFkZEFjY3VyYWN5TWVhc3VyZShyZWZlcmVuY2VUaW1lOiBudW1iZXIsIHVzZXJUaW1lOiBudW1iZXIpIHtcblx0XHR0aGlzLmFjY3VyYWN5UmVmZXJlbmNlVGltZSA9IHJlZmVyZW5jZVRpbWU7XG5cdFx0dGhpcy5hY2N1cmFjeVVzZXJUaW1lID0gdXNlclRpbWU7XG5cdFx0dGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5BY2N1cmFjeU1lYXN1cmU7XG5cdH1cblxuXHRhZGRBY2N1cmFjeShhY2N1cmFjeTpudW1iZXIsIGFjY3VyYWN5QWdlOm51bWJlciwgcGVyY2VudGlsZTpudW1iZXIpe1xuXHRcdGNvbnNvbGUubG9nKFwiYWRkQWNjdXJhY3lcIiwgYWNjdXJhY3ksYWNjdXJhY3lBZ2UscGVyY2VudGlsZSk7XG5cdFx0dGhpcy5hY2N1cmFjeSA9IGFjY3VyYWN5O1xuXHRcdHRoaXMuYWNjdXJhY3lBZ2UgPSBhY2N1cmFjeUFnZTtcblx0XHR0aGlzLnBlcmNlbnRpbGUgPSBNYXRoLnJvdW5kKHBlcmNlbnRpbGUqMTApLzEwO1xuXHRcdHRoaXMuY29tcHV0ZVBvc3RBY2N1cmFjeVN0YXR1cyhhY2N1cmFjeSwgYWNjdXJhY3lBZ2UpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb21wdXRlUG9zdEFjY3VyYWN5U3RhdHVzKGFjY3VyYWN5Om51bWJlciwgYWNjdXJhY3lBZ2U6bnVtYmVyKXtcblx0XHRpZiAoYWNjdXJhY3kgIT0gbnVsbCAmJiBhY2N1cmFjeUFnZSAhPSBudWxsKSB7XG5cdFx0XHRpZiAoTWF0aC5hYnMoYWNjdXJhY3kpID4gMjApIHtcblx0XHRcdFx0dGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5TaG91bGRCZVNlcnZpY2VkO1xuXHRcdFx0XHR0aGlzLnNlcnZpY2VkID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGFjY3VyYWN5QWdlID4gMzApIHtcblx0XHRcdFx0dGhpcy5yZW5ld2VkID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5TaG91bGRCZVJlbmV3ZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBlbnVtIE1lYXN1cmVTdGF0dXN7XG5cdE5vbmUgPSAwLFxuXHRCYXNlTWVhc3VyZSA9IDEgPDwgMCxcblx0QWNjdXJhY3lNZWFzdXJlID0gMSA8PCAxLFxuXHRBcmNoaXZlZE1lYXN1cmUgPSAxIDw8IDIsXG5cdFNob3VsZEJlUmVuZXdlZCA9IDEgPDwgMyxcblx0U2hvdWxkQmVTZXJ2aWNlZCA9IDEgPDwgNFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbHMvbWVhc3VyZS5tb2RlbC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlcXVlc3RPcHRpb25zLCBIZWFkZXJzIH0gIGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5cbmltcG9ydCB7IFVzZXIgfSAgZnJvbSAnLi8uLi9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBXYXRjaCwgV2F0Y2hBY3Rpb24gfSAgZnJvbSAnLi8uLi9tb2RlbHMvd2F0Y2gubW9kZWwnO1xuaW1wb3J0IHsgTWVhc3VyZSB9ICBmcm9tICcuLy4uL21vZGVscy9tZWFzdXJlLm1vZGVsJztcbmltcG9ydCB7IE1vZGVsRmFjdG9yeSB9ICBmcm9tICcuLy4uL21vZGVscy9tb2RlbC5mYWN0b3J5JztcbmltcG9ydCB7IEJsb2dQb3N0IH0gZnJvbSAnLi8uLi9tb2RlbHMvYmxvZy1wb3N0Lm1vZGVsJ1xuaW1wb3J0IHsgR0FTZXJ2aWNlIH0gZnJvbSAnLi9nYS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cmluZ0hlbHBlciB9IGZyb20gJy4vLi4vaGVscGVycy9zdHJpbmcuaGVscGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbi8qKlxuICogRXhwb3NlcyB0aGUgVG9vbHdhdGNoIEFQSS5cbiAqIFJldHVybnMgcHJvbWVzZXMgb24gZG9tYWluIG9iamVjdHNcbiAqL1xuZXhwb3J0IGNsYXNzIFR3QVBJU2VydmljZSB7XG5cblx0LyoqXG5cdCAqIEFsbCB0aGUgSFRUUCBjb2RlIHVzZWQgYnkgdGhlIHRvb2x3YXRjaCBBUEkgYXJlIGRlZmluZWQgaGVyZS5cblx0ICogSHR0cCBjb2RlcyBjYW4gYmUgdG8gcmVmaW5lIHRoZSBlcnJvciB0eXBlc1xuXHQgKi9cblx0cHVibGljIHN0YXRpYyBIVFRQX0NPTlRJTlVFID0gMTAwO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9TV0lUQ0hJTkdfUFJPVE9DT0xTID0gMTAxO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9QUk9DRVNTSU5HID0gMTAyOyAgICAgICAgICAgIC8vIFJGQzI1MThcblxuICAgIC8vIFN1Y2Nlc3NcblxuICAgIC8qKlxuICAgICAqIFRoZSByZXF1ZXN0IGhhcyBzdWNjZWVkZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfT0sgPSAyMDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VydmVyIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIGEgbmV3IHJlc291cmNlXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0NSRUFURUQgPSAyMDE7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0FDQ0VQVEVEID0gMjAyO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9OT05fQVVUSE9SSVRBVElWRV9JTkZPUk1BVElPTiA9IDIwMztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZXJ2ZXIgc3VjY2Vzc2Z1bGx5IHByb2Nlc3NlZCB0aGUgcmVxdWVzdCwgdGhvdWdoIG5vIGNvbnRlbnQgaXMgcmV0dXJuZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTk9fQ09OVEVOVCA9IDIwNDtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUkVTRVRfQ09OVEVOVCA9IDIwNTtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUEFSVElBTF9DT05URU5UID0gMjA2O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9NVUxUSV9TVEFUVVMgPSAyMDc7ICAgICAgICAgIC8vIFJGQzQ5MThcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfQUxSRUFEWV9SRVBPUlRFRCA9IDIwODsgICAgICAvLyBSRkM1ODQyXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0lNX1VTRUQgPSAyMjY7ICAgICAgICAgICAgICAgLy8gUkZDMzIyOVxuXG4gICAgLy8gUmVkaXJlY3Rpb25cblxuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9NVUxUSVBMRV9DSE9JQ0VTID0gMzAwO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9NT1ZFRF9QRVJNQU5FTlRMWSA9IDMwMTtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfRk9VTkQgPSAzMDI7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1NFRV9PVEhFUiA9IDMwMztcblxuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSBoYXMgbm90IGJlZW4gbW9kaWZpZWQgc2luY2UgdGhlIGxhc3QgcmVxdWVzdFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9OT1RfTU9ESUZJRUQgPSAzMDQ7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1VTRV9QUk9YWSA9IDMwNTtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUkVTRVJWRUQgPSAzMDY7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1RFTVBPUkFSWV9SRURJUkVDVCA9IDMwNztcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUEVSTUFORU5UTFlfUkVESVJFQ1QgPSAzMDg7ICAvLyBSRkM3MjM4XG5cbiAgICAvLyBDbGllbnQgRXJyb3JcblxuICAgIC8qKlxuICAgICAqIFRoZSByZXF1ZXN0IGNhbm5vdCBiZSBmdWxmaWxsZWQgZHVlIHRvIG11bHRpcGxlIGVycm9yc1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9CQURfUkVRVUVTVCA9IDQwMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1c2VyIGlzIHVuYXV0aG9yaXplZCB0byBhY2Nlc3MgdGhlIHJlcXVlc3RlZCByZXNvdXJjZVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9VTkFVVEhPUklaRUQgPSA0MDE7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1BBWU1FTlRfUkVRVUlSRUQgPSA0MDI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmVxdWVzdGVkIHJlc291cmNlIGlzIHVuYXZhaWxhYmxlIGF0IHRoaXMgcHJlc2VudCB0aW1lXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0ZPUkJJRERFTiA9IDQwMztcblxuICAgIC8qKlxuICAgICAqIFRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgY291bGQgbm90IGJlIGZvdW5kXG4gICAgICpcbiAgICAgKiBOb3RlOiBUaGlzIGlzIHNvbWV0aW1lcyB1c2VkIHRvIG1hc2sgaWYgdGhlcmUgd2FzIGFuIFVOQVVUSE9SSVpFRCAoNDAxKSBvclxuICAgICAqIEZPUkJJRERFTiAoNDAzKSBlcnJvciwgZm9yIHNlY3VyaXR5IHJlYXNvbnNcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTk9UX0ZPVU5EID0gNDA0O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlcXVlc3QgbWV0aG9kIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGZvbGxvd2luZyByZXNvdXJjZVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9NRVRIT0RfTk9UX0FMTE9XRUQgPSA0MDU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmVxdWVzdCB3YXMgbm90IGFjY2VwdGFibGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTk9UX0FDQ0VQVEFCTEUgPSA0MDY7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1BST1hZX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEID0gNDA3O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9SRVFVRVNUX1RJTUVPVVQgPSA0MDg7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmVxdWVzdCBjb3VsZCBub3QgYmUgY29tcGxldGVkIGR1ZSB0byBhIGNvbmZsaWN0IHdpdGggdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgKiBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfQ09ORkxJQ1QgPSA0MDk7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0dPTkUgPSA0MTA7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0xFTkdUSF9SRVFVSVJFRCA9IDQxMTtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUFJFQ09ORElUSU9OX0ZBSUxFRCA9IDQxMjtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUkVRVUVTVF9FTlRJVFlfVE9PX0xBUkdFID0gNDEzO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9SRVFVRVNUX1VSSV9UT09fTE9ORyA9IDQxNDtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfVU5TVVBQT1JURURfTUVESUFfVFlQRSA9IDQxNTtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUkVRVUVTVEVEX1JBTkdFX05PVF9TQVRJU0ZJQUJMRSA9IDQxNjtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfRVhQRUNUQVRJT05fRkFJTEVEID0gNDE3O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9JX0FNX0FfVEVBUE9UID0gNDE4OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUkZDMjMyNFxuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9VTlBST0NFU1NBQkxFX0VOVElUWSA9IDQyMjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUkZDNDkxOFxuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9MT0NLRUQgPSA0MjM7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUkZDNDkxOFxuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9GQUlMRURfREVQRU5ERU5DWSA9IDQyNDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUkZDNDkxOFxuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9SRVNFUlZFRF9GT1JfV0VCREFWX0FEVkFOQ0VEX0NPTExFQ1RJT05TX0VYUElSRURfUFJPUE9TQUwgPSA0MjU7ICAgLy8gUkZDMjgxN1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9VUEdSQURFX1JFUVVJUkVEID0gNDI2OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUkZDMjgxN1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9QUkVDT05ESVRJT05fUkVRVUlSRUQgPSA0Mjg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUkZDNjU4NVxuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9UT09fTUFOWV9SRVFVRVNUUyA9IDQyOTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUkZDNjU4NVxuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9SRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFID0gNDMxOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUkZDNjU4NVxuXG4gICAgLy8gU2VydmVyIEVycm9yXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VydmVyIGVuY291bnRlcmVkIGFuIHVuZXhwZWN0ZWQgZXJyb3JcbiAgICAgKlxuICAgICAqIE5vdGU6IFRoaXMgaXMgYSBnZW5lcmljIGVycm9yIG1lc3NhZ2Ugd2hlbiBubyBzcGVjaWZpYyBtZXNzYWdlXG4gICAgICogaXMgc3VpdGFibGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfSU5URVJOQUxfU0VSVkVSX0VSUk9SID0gNTAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcnZlciBkb2VzIG5vdCByZWNvZ25pc2UgdGhlIHJlcXVlc3QgbWV0aG9kXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX05PVF9JTVBMRU1FTlRFRCA9IDUwMTtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfQkFEX0dBVEVXQVkgPSA1MDI7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1NFUlZJQ0VfVU5BVkFJTEFCTEUgPSA1MDM7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0dBVEVXQVlfVElNRU9VVCA9IDUwNDtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfVkVSU0lPTl9OT1RfU1VQUE9SVEVEID0gNTA1O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9WQVJJQU5UX0FMU09fTkVHT1RJQVRFU19FWFBFUklNRU5UQUwgPSA1MDY7ICAgICAgICAgICAgICAgICAgICAgICAgLy8gUkZDMjI5NVxuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9JTlNVRkZJQ0lFTlRfU1RPUkFHRSA9IDUwNzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUkZDNDkxOFxuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9MT09QX0RFVEVDVEVEID0gNTA4OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUkZDNTg0MlxuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9OT1RfRVhURU5ERUQgPSA1MTA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUkZDMjc3NFxuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9ORVRXT1JLX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEID0gNTExO1xuXG4gICAgcHVibGljIHN0YXRpYyB1c2VyOlVzZXI7XG4gICAgcHJpdmF0ZSBzdGF0aWMgdGltZTp7XG4gICAgXHRzeW5jRGF0ZTpEYXRlLFxuICAgIFx0c3luY0FuY2hvcjpudW1iZXIsXG4gICAgXHRvZmZzZXQ6bnVtYmVyXG4gICAgfVxuXG5cdC8vRGVmaW5lcyBoZWFkZXJzIGFuZCByZXF1ZXN0IG9wdGlvbnNcblx0cHJpdmF0ZSBzdGF0aWMgaGVhZGVyczogSGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcblx0cHJpdmF0ZSBzdGF0aWMgb3B0aW9uczogUmVxdWVzdE9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBUd0FQSVNlcnZpY2UuaGVhZGVycyB9KTtcblx0Ly8gUmVncmVzc2lvbiBSQzUuIERvZXNuJ3QgYWNjZXB0IGdldCB3aXRob3V0IGJvZHlcblx0cHJpdmF0ZSBzdGF0aWMgb3B0aW9uc0dldDogUmVxdWVzdE9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBUd0FQSVNlcnZpY2UuaGVhZGVycywgYm9keTpcIlwiIH0pO1xuXHRcblx0cHVibGljIHN0YXRpYyBiYXNlVXJsOnN0cmluZyA9IFwiaHR0cHM6Ly90b29sd2F0Y2guaW8vYXBpL1wiO1xuXHRwdWJsaWMgc3RhdGljIGFzc2V0c1VybCA9IFwiYXBwL2Fzc2V0c1wiXG5cdHByaXZhdGUgc3RhdGljIGFwaWtleTpzdHJpbmc7XG5cblx0LyoqXG5cdCAqIEluamVjdCBodHRwIHNlcnZpY2Vcblx0ICogQHBhcmFtIHtIdHRwfSBwcml2YXRlIGh0dHAgXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge1xuXHRcdHRoaXMuYWNjdXJhdGVUaW1lKCk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIHJlc2V0VGltZSgpe1xuXHRcdFR3QVBJU2VydmljZS50aW1lID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIExvZyBhIHVzZXIgdXNpbmcgZW1haWwgYW5kIHBhc3N3b3JkXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIGVtYWlsICAgXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIHBhc3N3b3JkXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8VXNlcj59ICAgICAgICAgXG5cdCAqL1xuXHRsb2dpbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiB7XG5cblx0XHRsZXQgY3JlZHMgPSB7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wdXQoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwidXNlcnNcIiwgXG5cdFx0XHRKU09OLnN0cmluZ2lmeShjcmVkcyksIFxuXHRcdFx0VHdBUElTZXJ2aWNlLm9wdGlvbnNcblx0XHQpXG5cdFx0Lm1hcCgocmVzKSA9PiB7IHJldHVybiBNb2RlbEZhY3RvcnkuYnVpbGRVc2VyKHJlcy5qc29uKCkpOyB9KVxuXHRcdC50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzID0+IHtcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdMT0dJTicpO1xuXHRcdFx0XHRUd0FQSVNlcnZpY2UuYXBpa2V5ID0gcmVzLmtleTtcblx0XHRcdFx0VHdBUElTZXJ2aWNlLmhlYWRlcnMuZGVsZXRlKCdYLUFQSS1LRVknKTtcblx0XHRcdFx0VHdBUElTZXJ2aWNlLmhlYWRlcnMuYXBwZW5kKCdYLUFQSS1LRVknLCBUd0FQSVNlcnZpY2UuYXBpa2V5KTtcblx0XHRcdFx0VHdBUElTZXJ2aWNlLnVzZXIgPSByZXM7XG5cdFx0XHRcdHJldHVybiByZXM7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyKVxuXHRcdCk7XG5cdH0gIFxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgYW4gdXNlciB1c2luZyBoaXMgQVBJIGtleVxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIGtleSBbZGVzY3JpcHRpb25dXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxVc2VyPn0gICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRVc2VyKGtleTpzdHJpbmcpOlByb21pc2U8VXNlcj4ge1xuXG4gICAgICAgIFxuICAgICAgICBUd0FQSVNlcnZpY2UuYXBpa2V5ID0ga2V5O1xuICAgICAgICBUd0FQSVNlcnZpY2UuaGVhZGVycy5kZWxldGUoJ1gtQVBJLUtFWScpO1xuICAgICAgICBUd0FQSVNlcnZpY2UuaGVhZGVycy5hcHBlbmQoJ1gtQVBJLUtFWScsIFR3QVBJU2VydmljZS5hcGlrZXkpO1xuICAgICAgICBcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgICAgICAgIFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJ1c2Vyc1wiLCBcbiAgICAgICAgICAgIFR3QVBJU2VydmljZS5vcHRpb25zXG4gICAgICAgIClcbiAgICAgICAgLm1hcCgocmVzKSA9PiB7IHJldHVybiBNb2RlbEZhY3RvcnkuYnVpbGRVc2VyKHJlcy5qc29uKCkpOyB9KVxuICAgICAgICAudG9Qcm9taXNlKCkudGhlbihcbiAgICAgICAgICAgIHJlcyA9PiB7XG5cbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdBVVRPTE9HSU4nKTtcbiAgICAgICAgICAgICAgICBUd0FQSVNlcnZpY2UudXNlciA9IHJlcztcbiAgICAgICAgICAgICAgICByZXMua2V5ID0ga2V5O1xuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyKVxuICAgICAgICApXG5cbiAgICB9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhIG5ldyB1c2VyXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIGVtYWlsICAgXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIHBhc3N3b3JkXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIG5hbWUgICAgXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIGxhc3RuYW1lXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIGNvdW50cnkgXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8VXNlcj59ICAgICAgICAgXG5cdCAqL1xuXHRzaWdudXAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbmFtZT86IHN0cmluZywgbGFzdG5hbWU/OiBzdHJpbmcsIGNvdW50cnk/OiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChcblx0XHRcdFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJ1c2Vyc1wiLFxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRlbWFpbDogZW1haWwsIFxuXHRcdFx0XHRwYXNzd29yZDogcGFzc3dvcmQsXG5cdFx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRcdGxhc3RuYW1lOiBsYXN0bmFtZSxcblx0XHRcdFx0Y291bnRyeTpjb3VudHJ5XG5cdFx0XHR9KSxcblx0XHRcdFR3QVBJU2VydmljZS5vcHRpb25zXG5cdFx0KVxuXHRcdC5tYXAoKHJlcykgPT4geyByZXR1cm4gTW9kZWxGYWN0b3J5LmJ1aWxkVXNlcihyZXMuanNvbigpKTsgfSlcblx0XHQudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnU0lHTlVQJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH1cblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhIG5ldyBmYWNlYm9vayB1c2VyXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIGVtYWlsICAgXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIHRva2VuXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIG5hbWUgICAgXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIGxhc3RuYW1lXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8VXNlcj59ICAgICBcblx0ICovXG5cdHNpZ251cEZhY2Vib29rKGVtYWlsOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIGxhc3RuYW1lPzogc3RyaW5nKTogUHJvbWlzZTxVc2VyPntcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwidXNlcnMvZmFjZWJvb2tcIixcblx0XHRcdEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0ZW1haWw6IGVtYWlsLCBcblx0XHRcdFx0dG9rZW46IHRva2VuLFxuXHRcdFx0XHRuYW1lOiBuYW1lLFxuXHRcdFx0XHRsYXN0bmFtZTogbGFzdG5hbWVcblx0XHRcdH0pLFxuXHRcdFx0VHdBUElTZXJ2aWNlLm9wdGlvbnNcblx0XHQpXG5cdFx0Lm1hcCgocmVzKSA9PiB7IHJldHVybiBNb2RlbEZhY3RvcnkuYnVpbGRVc2VyKHJlcy5qc29uKCkpOyB9KVxuXHRcdC50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzID0+IHtcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdTSUdOVVAnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogQXNrIGEgcmVzZXQgcGFzc3dvcmQgbGlua1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fVxuXHQgKi9cblx0cmVzZXRQYXNzd29yZChlbWFpbDpzdHJpbmcpOlByb21pc2U8Ym9vbGVhbj57XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuXHRcdFx0VHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcInVzZXJzL3Jlc2V0XCIsXG5cdFx0XHRKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdGVtYWlsOiBlbWFpbFxuXHRcdFx0fSksXG5cdFx0XHRUd0FQSVNlcnZpY2Uub3B0aW9uc1xuXHRcdCkudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdSRVNFVF9QQVNTV09SRCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXHRcdCkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG5cdH1cblxuXHQvKipcblx0ICogRGVsZXRlcyB0aGUgYWNjb3VudCBjdXJyZW50bHkgbG9nZ2VkIGluLlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fVxuXHQgKi9cblx0ZGVsZXRlQWNjb3VudCgpOlByb21pc2U8Ym9vbGVhbj57XG5cblx0XHRyZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShcblx0XHRcdFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJ1c2Vyc1wiLFxuXHRcdFx0VHdBUElTZXJ2aWNlLm9wdGlvbnNcblx0XHQpLnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnREVMRVRFX0FDQ09VTlQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblx0XHQpLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuXHR9XG5cblx0Z2V0V2F0Y2hlcygpOiBQcm9taXNlPFdhdGNoW10+e1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuXHRcdFx0VHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcIndhdGNoZXNcIixcblx0XHRcdFR3QVBJU2VydmljZS5vcHRpb25zR2V0KVxuXHRcdC5tYXAoKHJlcykgPT4geyByZXR1cm4gTW9kZWxGYWN0b3J5LmJ1aWxkV2F0Y2hlcyhyZXMuanNvbigpKTsgfSlcblx0XHQudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnV0FUQ0hFUycsICdHRVQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICB9XG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGUgb3IgaW5zZXJ0IGEgd2F0Y2hcblx0ICogQHBhcmFtICB7V2F0Y2h9ICAgICAgICAgIHdhdGNoXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8V2F0Y2g+fSAgICAgIFxuXHQgKi9cblx0dXBzZXJ0V2F0Y2god2F0Y2g6IFdhdGNoKTogUHJvbWlzZTxXYXRjaD4ge1xuXG5cdFx0aWYod2F0Y2guaWQgPT0gbnVsbCl7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbnNlcnRXYXRjaCh3YXRjaCk7XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gdGhpcy51cGRhdGVXYXRjaCh3YXRjaCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIERlbGV0ZXMgYSB3YXRjaCBhbmQgdXBkYXRlIHRoZSB1c2VyIGFjY29yZGluZ2x5XG5cdCAqIEBwYXJhbSAge1VzZXJ9ICAgICAgICAgIHVzZXIgIFxuXHQgKiBAcGFyYW0gIHtXYXRjaH0gICAgICAgICB3YXRjaCBcblx0ICogQHJldHVybiB7UHJvbWlzZTxVc2VyPn0gICAgICAgXG5cdCAqL1xuXHRkZWxldGVXYXRjaCh1c2VyOlVzZXIsIHdhdGNoOldhdGNoKTpQcm9taXNlPFVzZXI+e1xuXHRcdGxldCBkZWxldGVPcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogVHdBUElTZXJ2aWNlLmhlYWRlcnMgfSk7XG5cdFx0ZGVsZXRlT3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyB3YXRjaElkOiB3YXRjaC5pZCB9KTtcblxuXHRcdHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFxuXHRcdFx0VHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcIndhdGNoZXNcIixcblx0XHRcdGRlbGV0ZU9wdGlvbnNcblx0XHQpLnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRyZXNwb25zZSA9PiB7XG5cblx0XHRcdFx0dXNlci53YXRjaGVzID0gdXNlci53YXRjaGVzLmZpbHRlcihcblx0XHRcdFx0XHRmdW5jdGlvbihmaWx0ZXI6IFdhdGNoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmlsdGVyLmlkICE9IHdhdGNoLmlkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblxuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ1dBVENIRVMnLCAnREVMRVRFJyk7XG5cblx0XHRcdFx0cmV0dXJuIHVzZXI7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbnNlcnQgb3IgdXBkYXRlIGEgbWVhc3VyZSBhbmQgdGhlIHJlbGF0ZWQgd2F0Y2hcblx0ICogQHBhcmFtICB7V2F0Y2h9ICAgICAgICAgIHdhdGNoICBcblx0ICogQHBhcmFtICB7TWVhc3VyZX0gICAgICAgIG1lYXN1cmVcblx0ICogQHJldHVybiB7UHJvbWlzZTxXYXRjaD59ICAgICAgICBcblx0ICovXG5cdHVwc2VydE1lYXN1cmUod2F0Y2g6IFdhdGNoLCBtZWFzdXJlOiBNZWFzdXJlKTogUHJvbWlzZTxXYXRjaD4ge1xuXHRcdGlmKG1lYXN1cmUuaWQgPT0gbnVsbCl7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbnNlcnRNZWFzdXJlKHdhdGNoLCBtZWFzdXJlKTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiB0aGlzLnVwZGF0ZU1lYXN1cmUod2F0Y2gsIG1lYXN1cmUpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBEZWxldGUgYSBtZWFzdXJlIGFuZCB0aGUgdXBkYXRlIHRoZSByZWxhdGVkIHdhdGNoXG5cdCAqIEBwYXJhbSAge1dhdGNofSAgICAgICAgICB3YXRjaCAgXG5cdCAqIEBwYXJhbSAge01lYXN1cmV9ICAgICAgICBtZWFzdXJlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8V2F0Y2g+fSAgICAgICAgXG5cdCAqL1xuXHRkZWxldGVNZWFzdXJlKHdhdGNoOiBXYXRjaCwgbWVhc3VyZTogTWVhc3VyZSk6IFByb21pc2U8V2F0Y2g+IHtcblxuXHRcdGxldCBkZWxldGVPcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogVHdBUElTZXJ2aWNlLmhlYWRlcnMgfSk7XG5cdFx0ZGVsZXRlT3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoe21lYXN1cmVJZDptZWFzdXJlLmlkfSk7XG5cblx0XHRyZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShcblx0XHRcdFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJtZWFzdXJlc1wiLFxuXHRcdFx0ZGVsZXRlT3B0aW9uc1xuXHRcdCkudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdHJlc3BvbnNlID0+IHtcblxuXHRcdFx0XHR3YXRjaC5tZWFzdXJlcyA9IHdhdGNoLm1lYXN1cmVzLmZpbHRlcihcblx0XHRcdFx0XHRmdW5jdGlvbihmaWx0ZXI6IE1lYXN1cmUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBmaWx0ZXIuaWQgIT0gbWVhc3VyZS5pZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0d2F0Y2guY29tcHV0ZU5leHQoKTtcblx0XHRcdFx0d2F0Y2guaGlzdG9yeVNpemUtLTtcblxuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ01FQVNVUkUnLCAnREVMRVRFJyk7XG5cblx0XHRcdFx0cmV0dXJuIHdhdGNoO1xuXHRcdFx0fVxuXHRcdCkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG5cdH1cblxuXHRnZXRCbG9nUG9zdHMoKTogUHJvbWlzZTxCbG9nUG9zdFtdPntcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcblx0XHRcdFwiaHR0cHM6Ly9ibG9nLnRvb2x3YXRjaC5pby8/anNvbj0xXCJcblx0XHQpXG5cdFx0Lm1hcCgocmVzKSA9PiB7IHJldHVybiBNb2RlbEZhY3RvcnkuYnVpbGRQb3N0cyhyZXMuanNvbigpKTsgfSlcblx0XHQudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnQkxPRycsICdHRVQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICB9XG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHaXZlbiBhIGJyYW5kLCByZXR1cm5zIGxpa2VseSBicmFuZHMgb3JkZXJlZCBieSBjb25maWRlbmNlXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gIGJyYW5kIFtkZXNjcmlwdGlvbl1cblx0ICogQHJldHVybiB7UHJvbWlzZX0gICAgICAgW3ticmFuZDpzdHJpbmcsIGNvbmZpZGVuY2U6bnVtYmVyfV1cblx0ICovXG5cdGdldExpa2VseUJyYW5kcyh3YXRjaDpXYXRjaCk6IFByb21pc2U8e3dhdGNoOldhdGNoLCBwcm9wb3NhbHM6W3ticmFuZDpzdHJpbmcsIGxvZ286c3RyaW5nLCBjb25maWRlbmNlOm51bWJlcn1dfT57XG5cblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcblx0XHRcdFR3QVBJU2VydmljZS5hc3NldHNVcmwgKyAnL3dhdGNoLWJyYW5kLmpzb24nKVxuXHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG5cdFx0LnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRicmFuZHMgPT4ge1xuXG5cdFx0XHRcdHZhciBsaWtlbHlCcmFuZHMgPSB7d2F0Y2g6IHdhdGNoLCBwcm9wb3NhbHM6W119O1xuXG5cdFx0XHRcdGZvciAodmFyIGkgPSBicmFuZHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblxuXG5cdFx0XHRcdFx0bGV0IGxldmVuc2h0ZWluRGlzdGFuY2UgPSBTdHJpbmdIZWxwZXIubGV2ZW5zaHRlaW4oYnJhbmRzW2ldLm5hbWUsIHdhdGNoLmJyYW5kKTtcblx0XHRcdFx0XHRsZXQgY29uZmlkZW5jZSA9IGxldmVuc2h0ZWluRGlzdGFuY2UgLyBNYXRoLm1heCh3YXRjaC5icmFuZC5sZW5ndGgsIGJyYW5kc1tpXS5uYW1lLmxlbmd0aCkgKjEwMDtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRsaWtlbHlCcmFuZHMucHJvcG9zYWxzLnB1c2goXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGJyYW5kOmJyYW5kc1tpXS5uYW1lLFxuXHRcdFx0XHRcdFx0XHRsb2dvOiBicmFuZHNbaV0uaWNvbixcblx0XHRcdFx0XHRcdFx0Y29uZmlkZW5jZTogMTAwIC0gY29uZmlkZW5jZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsaWtlbHlCcmFuZHMucHJvcG9zYWxzID0gbGlrZWx5QnJhbmRzLnByb3Bvc2Fscy5zb3J0KGZ1bmN0aW9uIChcblx0XHRcdFx0XHRhOnticmFuZDpzdHJpbmcsIGNvbmZpZGVuY2U6bnVtYmVyfSwgXG5cdFx0XHRcdFx0Yjp7YnJhbmQ6c3RyaW5nLCBjb25maWRlbmNlOm51bWJlcn0pe1xuXHRcdFx0XHRcdHJldHVybiBiLmNvbmZpZGVuY2UgLSBhLmNvbmZpZGVuY2U7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiBsaWtlbHlCcmFuZHM7XG4gICAgICAgICAgICB9XG5cdFx0KTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBrbm93biBicmFuZHNcblx0ICogQHJldHVybiB7UHJvbWlzZX0gXG5cdCAqL1xuXHRnZXRCcmFuZHMoKTogUHJvbWlzZTxbeyBuYW1lOiBzdHJpbmcsIGljb246IHN0cmluZywgbW9kZWxzOnN0cmluZ31dPiB7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYXNzZXRzVXJsICsgJy93YXRjaC1icmFuZC5qc29uJylcblx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKVxuXHRcdC50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0YnJhbmRzID0+IHtcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdCUkFORFMnLCAnR0VUJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJyYW5kcztcbiAgICAgICAgICAgIH1cblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgbW9kZWwgb2YgYSBnaXZlbiBicmFuZFxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9ICBicmFuZFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgIFxuXHQgKi9cblx0Z2V0TW9kZWxzKGJyYW5kOnN0cmluZyk6IFByb21pc2U8W3N0cmluZ10+IHtcblxuXHRcdGJyYW5kID0gU3RyaW5nSGVscGVyLnJlcGxhY2VBbGwoYnJhbmQsIFwiIFwiLCBcIlwiKTtcblx0XHRicmFuZCA9IFN0cmluZ0hlbHBlci5yZXBsYWNlQWxsKGJyYW5kLCBcIiZcIiwgXCJcIik7XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYXNzZXRzVXJsICsgJy93YXRjaC1tb2RlbHMvJyArIGJyYW5kICsgXCIuanNvblwiKVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSlcblx0XHRcdC50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0bW9kZWxzID0+IHtcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdNT0RFTFMnLCAnR0VUJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsc1xuICAgICAgICAgICAgfVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyB0aGUgcHJldmlvdXNseSBjb21wdXRlZCBvZmZzZXRcblx0ICogQHJldHVybiB7bnVtYmVyfSBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHRnZXRPZmZzZXRUaW1lKCk6bnVtYmVye1xuXHRcdHJldHVybiBUd0FQSVNlcnZpY2UudGltZS5vZmZzZXQ7XG5cdH1cblxuXHQvKipcblx0ICogUmV0cmlldmUgYXRvbWljIGNsb2NrIHRpbWUgYWRqdXN0ZWQgZm9yIG5ldHdvcmsgbGF0ZW5jeVxuXHQgKiBAcGFyYW0gIHsoKT0+dm9pZH0gc3RhdHVzQ2FsbGJhY2sgQ2FsbGVkIGF0IGVhY2ggcGFydGlhbCBjb21wbGV0ZVxuXHQgKiBAcGFyYW0gIHtudW1iZXIgPSAwfSBwcmVjaXNvbiBIb3cgbWFueSBjYWxscyB3ZSB3YW50IHRvIGF2ZWFnZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPERhdGU+fSBcblx0ICovXG5cdGFjY3VyYXRlVGltZShzdGF0dXNDYWxsYmFjaz86KCk9PnZvaWQsIFxuXHRcdHByZWNpc29uOm51bWJlciA9IDEwKTogUHJvbWlzZTxEYXRlPntcblxuICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdUSU1FJywgJ0dFVCcpO1xuXG5cblx0XHQvL0lmIHdlIGFyZW4ndCBhbHJlYWR5IHN5bmMnZWRcblx0XHRpZihUd0FQSVNlcnZpY2UudGltZSA9PT0gdW5kZWZpbmVkKXtcblx0XHRcdC8vU3RvcmVzIGVhY2ggUHJvbWlzZSBpbiBhcnJheVxuXHRcdFx0bGV0IHByb21pc2VzOlByb21pc2U8bnVtYmVyPltdID0gW107XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHByZWNpc29uOyArK2kpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaCh0aGlzLmZldGNoVGltZShzdGF0dXNDYWxsYmFjaykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFByb21pc2UuYWxsKCkgaXMgdGhlIFByb21pc2UgZXF1aXZhbGVudCBvZiB0aHJlYWQuam9pbigpLlxuXHRcdFx0ICogSXQnbGwgd2FpdCBmb3IgYWxsIHByb21pc2VzIHRvIGJlIHJlY2VpdmVkLiBcblx0XHRcdCAqXG5cdFx0XHQgKiBSZXR1cm5zIGEgZGF0ZSBhZGp1c3RlZCB3LyB0aGUgbWVkaWFuIG9mZnNldCBiZXR3ZWVuIFxuXHRcdFx0ICogYXRvbWljIGNsb2NrIGFuZCBqcyB0aW1lLiBcblx0XHRcdCAqIFRoZSBvZmZzZXQgcmVjZWl2ZWQgaW4gZWFjaCBwcm9taXNlIGFsc28gYWNjb3VudHMgZm9yXG5cdFx0XHQgKiB0aGUgbmV0d29yayByb3VuZHRyaXAgdGltZS5cblx0XHRcdCAqL1xuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKChyZXN1bHRzOmFueVtdKSA9PiB7XG5cdFx0XHRcdHJlc3VsdHMuc29ydChmdW5jdGlvbihhOiBhbnksIGI6IGFueSkgeyByZXR1cm4gYSAtIGI7IH0pO1xuXG5cdFx0XHRcdGxldCBoYWxmOiBudW1iZXIgPSBNYXRoLmZsb29yKHJlc3VsdHMubGVuZ3RoIC8gMik7XG5cdFx0XHRcdGxldCBtZWRpYW5PZmZzZXQ7XG5cblx0XHRcdFx0aWYgKHJlc3VsdHMubGVuZ3RoICUgMikge1xuXHRcdFx0XHRcdG1lZGlhbk9mZnNldCA9IHJlc3VsdHNbaGFsZl07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWVkaWFuT2Zmc2V0ID0gKHJlc3VsdHNbaGFsZiAtIDFdICsgcmVzdWx0c1toYWxmXSkgLyAyLjA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRUd0FQSVNlcnZpY2UudGltZSA9IHtcblx0XHRcdFx0XHRzeW5jRGF0ZTogbmV3IERhdGUoRGF0ZS5ub3coKSAtIG1lZGlhbk9mZnNldCksXG5cdFx0XHRcdFx0c3luY0FuY2hvcjogd2luZG93LnBlcmZvcm1hbmNlLm5vdygpLFxuXHRcdFx0XHRcdG9mZnNldDptZWRpYW5PZmZzZXRcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRyZXR1cm4gVHdBUElTZXJ2aWNlLnRpbWUuc3luY0RhdGU7XG5cdFx0XHR9KTtcblx0XHQvL09ubHkgY29tcHV0ZSB0aGUgZGlmZmVyZW5jZSBmcm9tIGxhc3QgdGltZTtcblx0XHR9ZWxzZXtcblxuXHRcdFx0VHdBUElTZXJ2aWNlLnRpbWUuc3luY0RhdGUgPSBuZXcgRGF0ZShcblx0XHRcdFx0VHdBUElTZXJ2aWNlLnRpbWUuc3luY0RhdGUuZ2V0VGltZSgpICtcblx0XHRcdFx0d2luZG93LnBlcmZvcm1hbmNlLm5vdygpIC0gVHdBUElTZXJ2aWNlLnRpbWUuc3luY0FuY2hvclxuXHRcdFx0KTtcblx0XHRcdFxuXHRcdFx0VHdBUElTZXJ2aWNlLnRpbWUuc3luY0FuY2hvciA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcblxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlPERhdGU+KFxuXHRcdFx0XHQocmVzb2x2ZSwgcmVqZWN0KSA9PiB7IFxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFR3QVBJU2VydmljZS50aW1lKTtcblx0XHRcdFx0XHRyZXNvbHZlKFR3QVBJU2VydmljZS50aW1lLnN5bmNEYXRlKTsgXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEZldGNoIG9mZnNldCBiZXR3ZWVuIGF0b21pYyBjbG9jayBhbmQganMgdGltZVxuXHQgKiBAcGFyYW0geygpID0+IHZvaWR9IHN0YXR1c0NhbGxiYWNrXG5cdCAqL1xuXHRwdWJsaWMgZmV0Y2hUaW1lKHN0YXR1c0NhbGxiYWNrPzogKCkgPT4gdm9pZClcblx0XHQ6IFByb21pc2U8bnVtYmVyPiB7XG5cblx0XHRsZXQgYmVmb3JlVGltZTogbnVtYmVyID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJ0aW1lXCIsIFR3QVBJU2VydmljZS5vcHRpb25zR2V0KVxuXHRcdFx0LnRvUHJvbWlzZSgpXG5cdFx0XHQudGhlbihcblx0XHRcdFx0cmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRcdGlmIChzdGF0dXNDYWxsYmFjayAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdFx0XHRcdHN0YXR1c0NhbGxiYWNrKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGV0IG5vdzogbnVtYmVyID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuXHRcdFx0XHRcdGxldCB0aW1lRGlmZiA9IChub3cgLSBiZWZvcmVUaW1lKSAvIDI7XG5cdFx0XHRcdFx0bGV0IHNlcnZlclRpbWUgPSByZXNwb25zZS5qc29uKCkudGltZSAtIHRpbWVEaWZmO1xuXHRcdFx0XHRcdHJldHVybiBEYXRlLm5vdygpIC0gc2VydmVyVGltZTtcblx0XHRcdFx0fSwgXG5cdFx0XHRcdHJlamVjdCA9PiBjb25zb2xlLmVycm9yKHJlamVjdClcblx0XHQpLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZSBhIG1lYXN1cmUgYW5kIHRoZSB3YXRjaCBpdCBiZWxvbmdzIHRvXG5cdCAqIEBwYXJhbSAge1dhdGNofSAgICAgICAgICB3YXRjaCAgXG5cdCAqIEBwYXJhbSAge01lYXN1cmV9ICAgICAgICBtZWFzdXJlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8V2F0Y2g+fSAgICAgICAgXG5cdCAqL1xuXHRwcml2YXRlIHVwZGF0ZU1lYXN1cmUod2F0Y2g6IFdhdGNoLCBtZWFzdXJlOiBNZWFzdXJlKTogUHJvbWlzZTxXYXRjaD4ge1xuXHRcdHJldHVybiB0aGlzLmh0dHAucHV0KFxuXHRcdFx0VHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcIm1lYXN1cmVzXCIsXG5cdFx0XHRKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdG1lYXN1cmVJZDogbWVhc3VyZS5pZCxcblx0XHRcdFx0cmVmZXJlbmNlVGltZTogbWVhc3VyZS5hY2N1cmFjeVJlZmVyZW5jZVRpbWUsXG5cdFx0XHRcdHVzZXJUaW1lOiBtZWFzdXJlLmFjY3VyYWN5VXNlclRpbWVcblx0XHRcdH0pLFxuXHRcdFx0VHdBUElTZXJ2aWNlLm9wdGlvbnNcblx0XHQpLnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnTUVBU1VSRScsICdTRUNPTkQnKTtcblx0XHRcdFx0bGV0IGpzb24gPSByZXNwb25zZS5qc29uKCkucmVzdWx0O1xuXHRcdFx0XHRtZWFzdXJlLmFkZEFjY3VyYWN5KGpzb24uYWNjdXJhY3ksIGpzb24uYWNjdXJhY3lBZ2UsIGpzb24ucGVyY2VudGlsZSk7XG5cdFx0XHRcdHdhdGNoLnVwc2VydE1lYXN1cmUobWVhc3VyZSk7XG5cdFx0XHRcdHdhdGNoLm5leHQgPSBXYXRjaEFjdGlvbi5NZWFzdXJlO1xuXHRcdFx0XHRyZXR1cm4gd2F0Y2g7XG5cdFx0XHR9XG5cdFx0KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbnNlcnQgYSBtZWFzdXJlIGFuZCB0aGUgd2F0Y2ggaXQgYmVsb25ncyB0b1xuXHQgKiBAcGFyYW0gIHtXYXRjaH0gICAgICAgICAgd2F0Y2ggIFxuXHQgKiBAcGFyYW0gIHtNZWFzdXJlfSAgICAgICAgbWVhc3VyZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFdhdGNoPn0gICAgICAgIFxuXHQgKi9cblx0cHJpdmF0ZSBpbnNlcnRNZWFzdXJlKHdhdGNoOiBXYXRjaCwgbWVhc3VyZTogTWVhc3VyZSk6IFByb21pc2U8V2F0Y2g+IHtcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwibWVhc3VyZXNcIixcblx0XHRcdEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0d2F0Y2hJZDogd2F0Y2guaWQsXG5cdFx0XHRcdHJlZmVyZW5jZVRpbWU6IG1lYXN1cmUubWVhc3VyZVJlZmVyZW5jZVRpbWUsXG5cdFx0XHRcdHVzZXJUaW1lOiBtZWFzdXJlLm1lYXN1cmVVc2VyVGltZVxuXHRcdFx0fSksXG5cdFx0XHRUd0FQSVNlcnZpY2Uub3B0aW9uc1xuXHRcdCkudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdNRUFTVVJFJywgJ0ZJUlNUJyk7XG5cdFx0XHRcdG1lYXN1cmUuaWQgPSByZXNwb25zZS5qc29uKCkubWVhc3VyZUlkO1xuXHRcdFx0XHR3YXRjaC5tZWFzdXJlcy5wdXNoKG1lYXN1cmUpO1xuXHRcdFx0XHR3YXRjaC5oaXN0b3J5U2l6ZSsrO1xuXHRcdFx0XHRyZXR1cm4gd2F0Y2g7XG5cdFx0XHR9XG5cdFx0KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbnNlcnQgYSB3YXRjaFxuXHQgKiBAcGFyYW0gIHtXYXRjaH0gICAgICAgICAgd2F0Y2hcblx0ICogQHJldHVybiB7UHJvbWlzZTxXYXRjaD59ICAgICAgXG5cdCAqL1xuXHRwcml2YXRlIGluc2VydFdhdGNoKHdhdGNoOiBXYXRjaCk6UHJvbWlzZTxXYXRjaD57XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuXHRcdFx0VHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcIndhdGNoZXNcIixcblx0XHRcdEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0YnJhbmQ6IHdhdGNoLmJyYW5kLFxuXHRcdFx0XHRuYW1lOndhdGNoLm5hbWUsXG5cdFx0XHRcdHllYXJPZkJ1eTp3YXRjaC55ZWFyT2ZCdXksXG5cdFx0XHRcdHNlcmlhbDogd2F0Y2guc2VyaWFsLFxuXHRcdFx0XHRjYWxpYmVyOndhdGNoLmNhbGliZXJcblx0XHRcdH0pLFxuXHRcdFx0VHdBUElTZXJ2aWNlLm9wdGlvbnNcblx0XHQpLnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHdhdGNoLmlkID0gcmVzcG9uc2UuanNvbigpLmlkO1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ1dBVENIJywgJ1BVVCcpO1xuXHRcdFx0XHRyZXR1cm4gd2F0Y2g7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGUgYSB3YXRjaFxuXHQgKiBAcGFyYW0gIHtXYXRjaH0gICAgICAgICAgd2F0Y2hcblx0ICogQHJldHVybiB7UHJvbWlzZTxXYXRjaD59ICAgICAgXG5cdCAqL1xuXHRwcml2YXRlIHVwZGF0ZVdhdGNoKHdhdGNoOiBXYXRjaCk6IFByb21pc2U8V2F0Y2g+IHtcblx0XHRyZXR1cm4gdGhpcy5odHRwLnB1dChcblx0XHRcdFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJ3YXRjaGVzXCIsXG5cdFx0XHRKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdGlkOiB3YXRjaC5pZCxcblx0XHRcdFx0YnJhbmQ6IHdhdGNoLmJyYW5kLFxuXHRcdFx0XHRuYW1lOiB3YXRjaC5uYW1lLFxuXHRcdFx0XHR5ZWFyT2ZCdXk6IHdhdGNoLnllYXJPZkJ1eSxcblx0XHRcdFx0c2VyaWFsOiB3YXRjaC5zZXJpYWwsXG5cdFx0XHRcdGNhbGliZXI6IHdhdGNoLmNhbGliZXJcblx0XHRcdH0pLFxuXHRcdFx0VHdBUElTZXJ2aWNlLm9wdGlvbnNcblx0XHQpLnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnV0FUQ0gnLCAnVVBEQVRFJyk7XG5cdFx0XHRcdHJldHVybiB3YXRjaDtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblxuXHQvKipcblx0ICogTG9nIGVycm9yIHRvIGNvbnNvbGVcblx0ICogQHBhcmFtIHthbnl9IGVycm9yIFtkZXNjcmlwdGlvbl1cblx0ICovXG5cdHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkJywgZXJyb3IgfHwgXCJwbG9wXCIpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG5cdH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3R3YXBpLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtb29uLXBoYXNlcycsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm1vb24tcGhhc2UtY29udGFpbmVyXCI+XG5cdDxkaXYgY2xhc3M9XCJtb29uLW1hc2tcIj48L2Rpdj5cblx0PGRpdiBjbGFzcz1cIm1vb24tZGlzcXVlXCI+PC9kaXY+XG48L2Rpdj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgTW9vblBoYXNlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgYW5nbGVNb29uOm51bWJlcjtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXG4gICAgbGV0IHRvZGF5OkRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBsYXN0RnVsbE1vb24gPSBuZXcgRGF0ZSgyMDE2LCAxMCwgMTQsIDEyLCAwLCAwLCAwKTtcbiAgICBsZXQgZGlmZkRheXMgPSBNYXRoLnJvdW5kKE1hdGguYWJzKCh0b2RheS5nZXRUaW1lKCkgLSBsYXN0RnVsbE1vb24uZ2V0VGltZSgpKS8oMjQqNjAqNjAqMTAwMCkpKTtcblxuXHQgIHRoaXMuYW5nbGVNb29uID0gZGlmZkRheXMgKiA2LjEwMTY5NDkxNTI1NDsgICBcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgXHRsZXQgZWxlbSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29uLWRpc3F1ZScpXG4gIFx0ZWxlbS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAncm90YXRlWignICsgdGhpcy5hbmdsZU1vb24gKyAnZGVnKSc7XG4gIFx0ZWxlbS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWignICsgdGhpcy5hbmdsZU1vb24gKyAnZGVnKSc7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpcmVjdGl2ZXMvY2xvY2svbW9vbi1waGFzZXMvbW9vbi1waGFzZXMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0aW9uUmVzdWx0IHtcbiBba2V5OnN0cmluZ106Ym9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEdsb2JhbFZhbGlkYXRvciB7XG5cblx0c3RhdGljIG1haWxGb3JtYXQoY29udHJvbDogRm9ybUNvbnRyb2wpOiBWYWxpZGF0aW9uUmVzdWx0IHtcblxuICAgICAgICB2YXIgRU1BSUxfUkVHRVhQID0gL15bYS16MC05ISMkJSYnKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokL2k7XG5cbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUgIT0gXCJcIiAmJiAoY29udHJvbC52YWx1ZS5sZW5ndGggPD0gNSB8fCAhRU1BSUxfUkVHRVhQLnRlc3QoY29udHJvbC52YWx1ZSkpKSB7XG4gICAgICAgICAgICByZXR1cm4geyBcImluY29ycmVjdE1haWxGb3JtYXRcIjogdHJ1ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc3RhdGljIG1hdGNoKGdyb3VwOkZvcm1Hcm91cCwgZnJvbTogc3RyaW5nLCBkaXN0YW50OiBzdHJpbmcpOiBWYWxpZGF0aW9uUmVzdWx0IHtcblxuICAgIFx0Y29uc29sZS5sb2coZ3JvdXApO1xuXG4gICAgXHRpZiAoZ3JvdXAgJiYgZ3JvdXAuY29udHJvbHNbZnJvbV0udmFsdWUgIT0gZ3JvdXAuY29udHJvbHNbZnJvbV0udmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IFwibm9NYXRjaFwiOiB0cnVlIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpcmVjdGl2ZXMvZ2xvYmFsLXZhbGlkYXRvci50cyIsImV4cG9ydCBjbGFzcyBCbG9nUG9zdHtcblx0aWQ6bnVtYmVyO1xuXHR0aXRsZTpzdHJpbmc7XG5cdGRhdGU6RGF0ZTtcblx0ZXhjZXJwdDpzdHJpbmc7XG5cdHVybDpzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoaWQ6IG51bWJlciwgdGl0bGU6IHN0cmluZywgZGF0ZTogRGF0ZSwgZXhjZXJwdDogc3RyaW5nLCB1cmw6IHN0cmluZyl7XG5cblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy50aXRsZSA9IHRoaXMuZGVjb2RlSFRNTEVudGl0aWVzKHRpdGxlKTtcblx0XHR0aGlzLmRhdGUgPSBkYXRlO1xuXHRcdHRoaXMuZXhjZXJwdCA9IHRoaXMuZGVjb2RlSFRNTEVudGl0aWVzKGV4Y2VycHQpO1xuXHRcdFN0cmluZy5mcm9tQ2hhckNvZGVcblx0XHR0aGlzLnVybCA9IHVybDtcblx0fVxuXG5cdHB1YmxpYyB0b1N0cmluZyA9ICgpIDogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gYEJsb2dQb3N0IChpZDogJHt0aGlzLmlkfSxcblx0XHRcdFx0dGl0bGU6ICR7dGhpcy50aXRsZX0sXG5cdFx0XHRcdGRhdGU6ICR7dGhpcy5kYXRlfSxcblx0XHRcdFx0ZXhjZXJwdDogJHt0aGlzLmV4Y2VycHR9LFxuXHRcdFx0XHR1cmw6ICR7dGhpcy51cmx9KWA7XG5cdH1cblxuXHRwcml2YXRlIGRlY29kZUhUTUxFbnRpdGllcyhzdHI6c3RyaW5nKSB7XG5cblx0XHR2YXIgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXHRcdHN0ciA9IHN0ci5yZXBsYWNlKC88c2NyaXB0W14+XSo+KFtcXFNcXHNdKj8pPFxcL3NjcmlwdD4vZ21pLCAnJyk7XG4gICAgICBcdHN0ciA9IHN0ci5yZXBsYWNlKC88XFwvP1xcdyg/OlteXCInPl18XCJbXlwiXSpcInwnW14nXSonKSo+L2dtaSwgJycpO1xuICAgICAgXHRzdHIgPSBzdHIucmVwbGFjZSgnW1JlYWQgbW9yZeKApl0nLCAnJyk7XG5cdCAgICB0eHQuaW5uZXJIVE1MID0gc3RyO1xuXG5cdCAgICByZXR1cm4gdHh0LnZhbHVlO1xuICBcdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbHMvYmxvZy1wb3N0Lm1vZGVsLnRzIiwiaW1wb3J0IHsgV2F0Y2ggfSBmcm9tICcuL3dhdGNoLm1vZGVsJ1xuXG5leHBvcnQgY2xhc3MgVXNlcntcblx0aWQ6bnVtYmVyO1xuXHRlbWFpbDpzdHJpbmc7XG5cdG5hbWU6c3RyaW5nO1xuXHRsYXN0bmFtZTpzdHJpbmc7XG5cdGNvdW50cnk6c3RyaW5nO1xuXHRyZWdpc3RlckRhdGU6c3RyaW5nO1xuXHRrZXk6c3RyaW5nO1xuXHR3YXRjaGVzOldhdGNoW10gPSBbXTtcblx0ZW1haWxQcmVmZXJlbmNlczpFbWFpbFByZWZlcmVuY2VzID0gRW1haWxQcmVmZXJlbmNlcy5Ob25lO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsZW1haWw6IHN0cmluZyxuYW1lOiBzdHJpbmcsXG5cdFx0bGFzdG5hbWU6IHN0cmluZyxjb3VudHJ5OiBzdHJpbmcscmVnaXN0ZXJEYXRlOiBcblx0XHRzdHJpbmcsa2V5OiBzdHJpbmcsd2F0Y2hlczogV2F0Y2hbXSl7XG5cblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5lbWFpbCA9IGVtYWlsO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5sYXN0bmFtZSA9IGxhc3RuYW1lO1xuXHRcdHRoaXMuY291bnRyeSA9IGNvdW50cnk7XG5cdFx0dGhpcy5yZWdpc3RlckRhdGUgPSByZWdpc3RlckRhdGU7XG5cdFx0dGhpcy5rZXkgPSBrZXk7XG5cdFx0dGhpcy53YXRjaGVzID0gd2F0Y2hlcztcblx0fVxuXG5cdHVwc2VydFdhdGNoKHdhdGNoOldhdGNoKXtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMud2F0Y2hlcy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRpZih0aGlzLndhdGNoZXNbaV0uaWQgPT0gd2F0Y2guaWQpe1xuXHRcdFx0XHR0aGlzLndhdGNoZXNbaV0gPSB3YXRjaDtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMud2F0Y2hlcy5wdXNoKHdhdGNoKTtcblx0fVxuXG5cdHB1YmxpYyB0b1N0cmluZyA9ICgpIDogc3RyaW5nID0+IHtcblxuXHRcdHJldHVybiBgVXNlciAoXG5cdFx0XHRpZDogJHt0aGlzLmlkfSwgXG5cdFx0XHRlbWFpbDogJHt0aGlzLmVtYWlsfSwgXG5cdFx0XHRuYW1lOiAke3RoaXMubmFtZX0sIFxuXHRcdFx0bGFzdG5hbWU6ICR7dGhpcy5sYXN0bmFtZX0sIFxuXHRcdFx0Y291bnRyeTogJHt0aGlzLmNvdW50cnl9LCBcblx0XHRcdHJlZ2lzdGVyRGF0ZTogJHt0aGlzLnJlZ2lzdGVyRGF0ZX0sIFxuXHRcdFx0a2V5OiAke3RoaXMua2V5fSwgXG5cdFx0XHR3YXRjaGVzOiAke3RoaXMud2F0Y2hlc30pYDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGVudW0gRW1haWxQcmVmZXJlbmNlcyB7XG5cblx0Tm9uZSA9IDAsXG5cdEZpcnN0V2F0Y2ggPSAxIDw8IDEsXG5cdEZpcnN0TWVhc3VyZSA9IDEgPDwgMixcblx0RGF5QWNjdXJhY3kgPSAxIDw8IDMsXG5cdFdlZWtBY2N1cmFjeSA9IDEgPDwgNCxcblx0UmVzdWx0ID0gMSA8PCA1LFxuXHROZXdNZWFzdXJlID0gMSA8PCA2LFxuXHRTZWNvbmRXYXRjaCA9IDEgPDwgNyxcblx0Q29tZWJhY2sgPSAxIDw8IDgsXG5cdFdhdGNoU3RvcmllcyA9IDEgPDwgOVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2FyZXRobWV0aWNTaWduJ1xufSkgXG5leHBvcnQgY2xhc3MgQXJldGhtZXRpY1NpZ24gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYodmFsdWUgPj0gMCl7XG4gICAgICAgIHJldHVybiBcIitcIiArIHZhbHVlO1xuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9waXBlcy9hcmV0aG1ldGljLXNpZ24ucGlwZS50cyIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAna0Zvcm1hdHRlcidcclxufSkgXHJcbmV4cG9ydCBjbGFzcyBLRm9ybWF0dGVyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIC8vd2UgZXhwZWN0IGEgc2lnbmVkIG51bWJlciAoaS5lICsyLjcpXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cclxuICBcdGxldCBzaWduOnN0cmluZyA9IHZhbHVlLmNoYXJBdCgwKTtcclxuICBcdHZhbHVlID0gdmFsdWUuc3Vic3RyKDEpO1xyXG4gIFx0bGV0IG51bWJlciA9IE51bWJlcih2YWx1ZSk7XHJcblxyXG4gIFx0aWYoTWF0aC5hYnMobnVtYmVyKSA+IDk5OSl7XHJcbiAgXHRcdHJldHVybiBzaWduICsgKG51bWJlci8xMDAwKS50b0ZpeGVkKDApICsgJ2snO1xyXG4gIFx0fWVsc2UgaWYoTWF0aC5hYnMobnVtYmVyKSA+IDEwMCl7XHJcbiAgXHRcdHJldHVybiBzaWduICsgbnVtYmVyLnRvRml4ZWQoMCk7XHJcbiAgXHR9ZWxzZXtcclxuICBcdFx0cmV0dXJuIHNpZ24gKyBudW1iZXIudG9GaXhlZCgxKTtcclxuICBcdH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BpcGVzL2stZm9ybWF0dGVyLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2xlYWRpbmdaZXJvJ1xufSlcbmV4cG9ydCBjbGFzcyBMZWFkaW5nWmVybyBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAodmFsdWUgPCAxMCkge1xuICAgICAgICByZXR1cm4gXCIwXCIgKyB2YWx1ZTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGlwZXMvbGVhZGluZy16ZXJvLnBpcGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5pbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQXJldGhtZXRpY1NpZ24gfSBmcm9tICcuL3NyYy9waXBlcy9hcmV0aG1ldGljLXNpZ24ucGlwZSc7XG5pbXBvcnQgeyBMZWFkaW5nWmVybyB9IGZyb20gJy4vc3JjL3BpcGVzL2xlYWRpbmctemVyby5waXBlJztcbmltcG9ydCB7IEtGb3JtYXR0ZXIgfSBmcm9tICcuL3NyYy9waXBlcy9rLWZvcm1hdHRlci5waXBlJztcbmltcG9ydCB7IE1vb25QaGFzZXNDb21wb25lbnQgfSBmcm9tICcuL3NyYy9kaXJlY3RpdmVzL2Nsb2NrL21vb24tcGhhc2VzL21vb24tcGhhc2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUd0FQSVNlcnZpY2UgfSBmcm9tICcuL3NyYy9zZXJ2aWNlcy90d2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEdBU2VydmljZSB9IGZyb20gJy4vc3JjL3NlcnZpY2VzL2dhLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVMb2FkZXIgfSBmcm9tICduZzItdHJhbnNsYXRlL25nMi10cmFuc2xhdGUnO1xuXG5cbi8qKlxuICogU0VSVklDRVNcbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvc2VydmljZXMvdHdhcGkuc2VydmljZSdcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3NlcnZpY2VzL2dhLnNlcnZpY2UnXG4vKipcbiAqIFBJUEVTXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vc3JjL3BpcGVzL2FyZXRobWV0aWMtc2lnbi5waXBlJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvcGlwZXMvbGVhZGluZy16ZXJvLnBpcGUnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9waXBlcy9rLWZvcm1hdHRlci5waXBlJ1xuLyoqXG4gKiBNT0RFTFxuICovXG5leHBvcnQgKiBmcm9tICcuL3NyYy9tb2RlbHMvd2F0Y2gubW9kZWwnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9tb2RlbHMvdXNlci5tb2RlbCdcbmV4cG9ydCAqIGZyb20gJy4vc3JjL21vZGVscy9tZWFzdXJlLm1vZGVsJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvbW9kZWxzL2Jsb2ctcG9zdC5tb2RlbCdcbi8qKlxuICogRElSRUNUSVZFU1xuICovXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kaXJlY3RpdmVzL2Nsb2NrL2Nsb2NrLmNvbXBvbmVudCdcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RpcmVjdGl2ZXMvY2xvY2svbW9vbi1waGFzZXMvbW9vbi1waGFzZXMuY29tcG9uZW50J1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZGlyZWN0aXZlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kaXJlY3RpdmVzL3NpZ251cC9zaWdudXAuY29tcG9uZW50J1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZGlyZWN0aXZlcy93YXRjaC93YXRjaC5jb21wb25lbnQnXG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcmV0aG1ldGljU2lnbixcbiAgICBMZWFkaW5nWmVybyxcbiAgICBLRm9ybWF0dGVyLFxuICAgIE1vb25QaGFzZXNDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgVHdBUElTZXJ2aWNlLFxuICAgIEdBU2VydmljZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQXJldGhtZXRpY1NpZ24sXG4gICAgTGVhZGluZ1plcm8sXG4gICAgS0Zvcm1hdHRlcixcbiAgICBNb29uUGhhc2VzQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEh0dHBNb2R1bGVcbiAgXSxcbiAgc2NoZW1hczogW1xuICAgIENVU1RPTV9FTEVNRU5UU19TQ0hFTUFcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUd0NvcmVNb2R1bGUge1xufSBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBDbG9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbW9udGg6c3RyaW5nO1xuICBkYXk6c3RyaW5nO1xuICBkYXRlOkRhdGU7XG4gIG5leHRMZWFwOm51bWJlcjtcbiAgbW9udGhOYW1lcyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcbiAgZGF5TmFtZXMgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblxuXHR0aGlzLmRhdGUgPSBuZXcgRGF0ZSgpO1xuXHR0aGlzLm1vbnRoID0gdGhpcy5tb250aE5hbWVzW3RoaXMuZGF0ZS5nZXRNb250aCgpXTtcblx0dGhpcy5kYXkgPSB0aGlzLmRheU5hbWVzW3RoaXMuZGF0ZS5nZXREYXkoKV0gKyBcIiBcIiArIHRoaXMuZGF0ZS5nZXREYXRlKCk7XG5cblx0dGhpcy5uZXh0TGVhcCA9IHRoaXMuZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG5cdFx0d2hpbGUoIXRoaXMuaXNMZWFwWWVhcih0aGlzLm5leHRMZWFwKSl7XG5cdFx0XHR0aGlzLm5leHRMZWFwKys7XG5cdFx0fVxuICB9XG5cbiAgaXNMZWFwWWVhcih5ZWFyOm51bWJlcil7XG5cdHJldHVybiAoKHllYXIgJSA0ID09IDApICYmICh5ZWFyICUgMTAwICE9IDApKSB8fCAoeWVhciAlIDQwMCA9PSAwKTtcbiAgfVxuXG4gIGluaXRMb2NhbENsb2NrcygpIHtcblxuICAgIHZhciBtaWxsaXNlY29uZHMgPSB0aGlzLmRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cdHZhciBzZWNvbmRzID0gdGhpcy5kYXRlLmdldFNlY29uZHMoKTtcblx0dmFyIG1pbnV0ZXMgPSB0aGlzLmRhdGUuZ2V0TWludXRlcygpO1xuXHR2YXIgaG91cnMgPSB0aGlzLmRhdGUuZ2V0SG91cnMoKTtcblxuXHQvLyBDcmVhdGUgYW4gb2JqZWN0IHdpdGggZWFjaCBoYW5kIGFuZCBpdCdzIGFuZ2xlIGluIGRlZ3JlZXNcblx0dmFyIGhhbmRzID0gW1xuXHRcdHtcblx0XHRcdGhhbmQ6ICdob3VycycsXG5cdFx0XHRhbmdsZTogKGhvdXJzICogMzApICsgKG1pbnV0ZXMgLyAyKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aGFuZDogJ21pbnV0ZXMnLFxuXHRcdFx0YW5nbGU6IChtaW51dGVzICogNikgKyAoc2Vjb25kcy82MCkgKiA2XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRoYW5kOiAnc2Vjb25kcycsXG5cdFx0XHRhbmdsZTogKHNlY29uZHMgKiA2KSArIChtaWxsaXNlY29uZHMvMTAwMCkqNlxuXHRcdH1cblx0XTtcblxuXHQvL0xvb3AgdGhyb3VnaCBlYWNoIG9mIHRoZXNlIGhhbmRzIHRvIHNldCB0aGVpciBhbmdsZVxuXHRmb3IgKHZhciBqID0gMDsgaiA8IGhhbmRzLmxlbmd0aDsgaisrKSB7XG5cdFx0dmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0Jy4nICsgaGFuZHNbal0uaGFuZFxuXHRcdCk7XG5cblx0XHRlbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdyb3RhdGVaKCcgKyBoYW5kc1tqXS5hbmdsZSArICdkZWcpJztcblx0XHRlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVaKCcgKyBoYW5kc1tqXS5hbmdsZSArICdkZWcpJztcblx0fVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlyZWN0aXZlcy9jbG9jay9jbG9jay5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnbmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlJztcbmltcG9ydCB7VHdBUElTZXJ2aWNlfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3R3YXBpLnNlcnZpY2UnXG5pbXBvcnQgeyBHbG9iYWxWYWxpZGF0b3IgfSBmcm9tICcuLy4uL2dsb2JhbC12YWxpZGF0b3InO1xuaW1wb3J0IHsgR0FTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9nYS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgICBcbiAgVmFsaWRhdG9ycywgIFxuICBGb3JtQnVpbGRlciwgIFxuICBGb3JtR3JvdXBcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuIFxuLyoqXG4gKiBMb2dpbiBjb21wb25lbnQuIFByb3ZpZGVzIGEgbG9naW4gZm9ybSB3aXRoIGNvbnRyb2xsZWQgYW5kXG4gKiBlbWl0cyBhIFVzZXIgKCRldmVudCB1c2VyTG9nZ2VkKSBvbiBzdWNjZXNzZnVsIGxvZ2luLlxuICovXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGxvZ2luRm9ybSAgICAgICAgICAgICAgOiBGb3JtR3JvdXA7XG4gIGVycm9ycyAgICAgICAgICAgICAgICAgPSBbXTtcbiAgc3VibWl0QXR0ZW1wdDpmYWxzZTtcbiAgdXNlckxvZ2dlZCAgID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBsb2dpbkF0dGVtcHQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuICAvKipcbiAgICogQ29uc3RydWN0b3Igdy8gc2VydmljZSBpbmplY3Rpb25cbiAgICogQHBhcmFtIHtUcmFuc2xhdGVTZXJ2aWNlfSBwcml2YXRlIHRyYW5zbGF0ZSBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSB7VHdBUElTZXJ2aWNlfSAgICAgcHJpdmF0ZSB0d2FwaSAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0ge0Zvcm1CdWlsZGVyfSAgICAgIHByaXZhdGUgYnVpbGRlciAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGU6IGFueSwgXG4gICAgcHJvdGVjdGVkIHR3YXBpICA6IFR3QVBJU2VydmljZSwgXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlciAgOiBhbnlcbiAgKSB7IFxuXG4gICAgLy9MYW5nIGRlZmluaXRpb25cblx0ICB0aGlzLnRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZygnZW4nKTtcblx0ICB0aGlzLnRyYW5zbGF0ZS51c2UoJ2VuJyk7XG5cbiAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZW1haWwgICA6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEdsb2JhbFZhbGlkYXRvci5tYWlsRm9ybWF0XSldLFxuICAgICAgcGFzc3dvcmQ6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDUpXSldXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dpbiBhbiBGQiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmYlVzZXIgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgb25GYlN1Ym1pdChmYlVzZXI6e1xuICAgIGVtYWlsOiBzdHJpbmcsIFxuICAgIHRva2VuOiBzdHJpbmcsXG4gICAgbGFzdG5hbWU6IHN0cmluZywgXG4gICAgZmlyc3RuYW1lOiBzdHJpbmd9XG4gICl7XG5cbiAgICB0aGlzLmVycm9ycyA9IFtdO1xuXG4gICAgdGhpcy5sb2dpbkF0dGVtcHQuZW1pdCh0cnVlKTtcblxuICAgIC8vVHJpZXMgdG8gbG9naW4gYW4gdXNlciB1c2luZyBoaXMgZmIgZW1haWxcbiAgICB0aGlzLnR3YXBpLnNpZ251cEZhY2Vib29rKGZiVXNlci5lbWFpbCwgZmJVc2VyLnRva2VuLCBmYlVzZXIubGFzdG5hbWUsIGZiVXNlci5maXJzdG5hbWUpLnRoZW4oXG4gICAgICAgIC8vc3VjY2VzcywgYXdheSB3ZSBnb1xuICAgICAgICByZXMgPT4geyBcbiAgICAgICAgICB0aGlzLnVzZXJMb2dnZWQuZW1pdChyZXMpO1xuICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQ1RBJywgJ0ZCX0xPR0lOJywgJ1NVQ0NFU1MnKTtcbiAgICAgICAgfSwgXG4gICAgICAgIGVyciA9PiB7XG5cbiAgICAgICAgICAvL0Vycm9yLCBtb3N0IGxpa2VseSB0aGUgdXNlciB0cmllcyB0byBzaWduaW5cbiAgICAgICAgICAvL3VzaW5nIGZhY2Vib29rIHdoaWxlIGhlIGhhcyBhIHJlZ3VsYXIgXG4gICAgICAgICAgLy9hY2NvdW50IHdpdGggdGhlIHNhbWUgZW1haWwuXG4gICAgICAgICAgdGhpcy5sb2dpbkF0dGVtcHQuZW1pdChmYWxzZSk7XG4gICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnRkJfU0lHTlVQJywgJ0ZBSUwnKTtcbiAgICAgICAgICBzd2l0Y2ggKGVyci5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgNDAxOlxuICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdjcmVkZW50aWFscycpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ2Vycm9yJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG5cbiAgICB0aGlzLmxvZ2luQXR0ZW1wdC5lbWl0KGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtIHN1Ym1pdFxuICAgKiBAcGFyYW0ge3N0cmluZ319IHVzZXIgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgb25TdWJtaXQodXNlcjp7ZW1haWw6c3RyaW5nLCBwYXNzd29yZDpzdHJpbmd9KXtcblxuICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgXG4gICAgLy9Gb3JtIGNvbnN0cmFpbnRzIGFyZSBva1xuICAgIGlmKHRoaXMubG9naW5Gb3JtLnZhbGlkKXtcblxuICAgICAgdGhpcy5sb2dpbkF0dGVtcHQuZW1pdCh0cnVlKTtcblxuICAgICAgdGhpcy50d2FwaS5sb2dpbih1c2VyLmVtYWlsLCB1c2VyLnBhc3N3b3JkKS50aGVuKFxuICAgICAgICByZXMgPT4geyBcbiAgICAgICAgICB0aGlzLnVzZXJMb2dnZWQuZW1pdChyZXMpO1xuICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQ1RBJywgJ0xPR0lOJywgJ1NVQ0NFU1MnKTtcbiAgICAgICAgfSwgXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnTE9HSU4nLCAnRkFJTCcpO1xuICAgICAgICAgIHN3aXRjaCAoZXJyLnN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSA0MDE6XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ2NyZWRlbnRpYWxzJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnZXJyb3InKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLmxvZ2luQXR0ZW1wdC5lbWl0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBvblBhc3N3b3JkUmVzZXRTdWJtaXQoZW1haWw6c3RyaW5nKXtcbiAgICB0aGlzLnR3YXBpLnJlc2V0UGFzc3dvcmQoZW1haWwpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpcmVjdGl2ZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJ25nMi10cmFuc2xhdGUvbmcyLXRyYW5zbGF0ZSc7XG5pbXBvcnQge1R3QVBJU2VydmljZX0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy90d2FwaS5zZXJ2aWNlJ1xuaW1wb3J0IHsgR2xvYmFsVmFsaWRhdG9yIH0gZnJvbSAnLi8uLi9nbG9iYWwtdmFsaWRhdG9yJztcbmltcG9ydCB7IEdBU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvZ2Euc2VydmljZSc7XG5cbmltcG9ydCB7ICAgXG4gIFZhbGlkYXRvcnMsXG4gIEZvcm1CdWlsZGVyLCAgXG4gIEZvcm1Hcm91cFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuLyoqXG4gKiBTaWdudXAgZm9ybS4gRW1pdHMgYSB1c2VyTG9nZ2VkIGV2ZW50IG9uIG5ldyB1c2VyIHNpZ251cFxuICovXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBzaWdudXBGb3JtICAgOiBGb3JtR3JvdXA7XG4gIHN1Ym1pdEF0dGVtcHQ6Ym9vbGVhbiA9IGZhbHNlO1xuICBlcnJvcnMgICAgICAgPSBbXTtcbiAgY291bnRyaWVzICAgIDpbc3RyaW5nXTtcbiAgZmlsdGVyZWRMaXN0ID0gW107XG4gIHF1ZXJ5ICAgICAgICA6IHN0cmluZyA9IFwiXCI7XG5cbiAgQE91dHB1dCgpIHVzZXJMb2dnZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzaWdudXBBdHRlbXB0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAvKipcbiAgICogQ29uc3RydWN0b3Igdy8gc2VydmljZSBpbmplY3Rpb25cbiAgICogQHBhcmFtIHtUcmFuc2xhdGVTZXJ2aWNlfSBwcml2YXRlIHRyYW5zbGF0ZSBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSB7VHdBUElTZXJ2aWNlfSAgICAgcHJpdmF0ZSB0d2FwaSAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0ge0Zvcm1CdWlsZGVyfSAgICAgIHByaXZhdGUgYnVpbGRlciAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlOiBhbnksIFxuICAgIHByaXZhdGUgdHdhcGk6IFR3QVBJU2VydmljZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogYW55KSB7IFxuXG4gICAgdHJhbnNsYXRlLnNldERlZmF1bHRMYW5nKCdlbicpO1xuICAgIHRyYW5zbGF0ZS51c2UoJ2VuJyk7XG5cbiAgICB0cmFuc2xhdGUuZ2V0KFwiY291bnRyaWVzXCIpLnN1YnNjcmliZSgocmVzdWx0OiBbc3RyaW5nXSkgPT4ge1xuICAgICAgdGhpcy5jb3VudHJpZXMgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNpZ251cEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgZW1haWwgICAgICAgICA6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEdsb2JhbFZhbGlkYXRvci5tYWlsRm9ybWF0XSldLFxuICAgICAgICBlbWFpbFJlcGVhdCAgIDogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgR2xvYmFsVmFsaWRhdG9yLm1haWxGb3JtYXRdKV0sXG5cbiAgICAgICAgcGFzc3dvcmQgICAgICA6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpXSldLFxuICAgICAgICBwYXNzd29yZFJlcGVhdDogW1wiXCIsIFxuICAgICAgICAgIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBcbiAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgbGFzdE5hbWUgICAgICA6IFwiXCIsXG4gICAgICAgIGZpcnN0TmFtZSAgICAgOiBcIlwiLFxuICAgICAgICBjb3VudHJ5ICAgICAgIDogXCJcIlxuICAgICAgfSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBUcmltcyB0aGUgZmlsdGVyZWRMaXN0IGFjY29yaW5nIHRvIHRoZSBcbiAgICogY291bnRyeSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgZmlsdGVyKHF1ZXJ5OnN0cmluZykge1xuICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gdGhpcy5jb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uKGVsZW1lbnQ6c3RyaW5nKXtcbiAgICAgIHJldHVybiBlbGVtZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2lnbiB0aGUgY291bnRyeSBsYWJlbCB3aGVuIHNlbGVjdGVkIFxuICAgKiBmcm9tIHRoZSBsaXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpdGVtIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHNlbGVjdChpdGVtOnN0cmluZyl7XG4gICAgdGhpcy5xdWVyeSA9IGl0ZW07XG4gICAgdGhpcy5maWx0ZXJlZExpc3QgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzdWJtaXQgdGhlIGZvcm1cbiAgICogQHBhcmFtIHtzdHJpbmcgICAgfX0gdXNlciBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBvblN1Ym1pdCh1c2VyOntcbiAgICAgIGVtYWlsOiBzdHJpbmcsIFxuICAgICAgcGFzc3dvcmQ6IHN0cmluZyxcbiAgICAgIGVtYWlsUmVwZWF0OiBzdHJpbmcsXG4gICAgICBwYXNzd29yZFJlcGVhdDogc3RyaW5nLFxuICAgICAgbGFzdE5hbWU6IHN0cmluZyxcbiAgICAgIGZpcnN0TmFtZTogc3RyaW5nXG4gICAgfSkge1xuXG4gICAgdGhpcy5zdWJtaXRBdHRlbXB0ID0gdHJ1ZTtcbiAgICB0aGlzLmVycm9ycyA9IFtdO1xuXG5cbiAgICBpZih0aGlzLnNpZ251cEZvcm0udmFsaWQgJiYgXG4gICAgICB1c2VyLnBhc3N3b3JkID09IHVzZXIucGFzc3dvcmRSZXBlYXQgJiZcbiAgICAgIHVzZXIuZW1haWwgPT0gdXNlci5lbWFpbFJlcGVhdCl7XG5cbiAgICAgIHRoaXMuc2lnbnVwQXR0ZW1wdC5lbWl0KHRydWUpO1xuXG4gICAgICB0aGlzLnR3YXBpLnNpZ251cCh1c2VyLmVtYWlsLFxuICAgICAgIHVzZXIucGFzc3dvcmQsXG4gICAgICAgdXNlci5maXJzdE5hbWUsXG4gICAgICAgdXNlci5sYXN0TmFtZSxcbiAgICAgICB0aGlzLnF1ZXJ5KS50aGVuKFxuICAgICAgICByZXMgPT4geyBcbiAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0NUQScsICdTSUdOVVAnLCAnU1VDQ0VTUycpO1xuICAgICAgICAgIHRoaXMudXNlckxvZ2dlZC5lbWl0KHJlcykgXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0NUQScsICdTSUdOVVAnLCAnRkFJTCcpO1xuICAgICAgICAgIHN3aXRjaCAoZXJyb3Iuc3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlIFR3QVBJU2VydmljZS5IVFRQX1VOQVVUSE9SSVpFRDpcbiAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnZW1haWwtdGFrZW4nKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdlcnJvcicpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICApXG5cbiAgICAgIHRoaXMuc2lnbnVwQXR0ZW1wdC5lbWl0KGZhbHNlKTtcbiAgICB9IGVsc2V7XG5cbiAgICAgIGlmKHVzZXIucGFzc3dvcmQgIT0gdXNlci5wYXNzd29yZFJlcGVhdCl7XG4gICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ3Bhc3N3b3JkLW1hdGNoJyk7XG4gICAgICB9XG5cbiAgICAgIGlmKHVzZXIuZW1haWwgIT0gdXNlci5lbWFpbFJlcGVhdCl7XG4gICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ2VtYWlsLW1hdGNoJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpcmVjdGl2ZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICduZzItdHJhbnNsYXRlL25nMi10cmFuc2xhdGUnO1xuXG5pbXBvcnQgeyBXYXRjaCB9IGZyb20gJy4vLi4vLi4vbW9kZWxzL3dhdGNoLm1vZGVsJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLy4uLy4uL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCB7VHdBUElTZXJ2aWNlfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3R3YXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgR0FTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9nYS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgICBcbiAgRm9ybUJ1aWxkZXIsICBcbiAgRm9ybUdyb3VwLFxuICBWYWxpZGF0b3JzXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBGcm9tIHRvIGFkZCwgZGVsZXRlIGFuZCB1cGRhdGUgd2F0Y2hlc1xuICovXG5leHBvcnQgY2xhc3MgV2F0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHVzZXI6IFVzZXI7XG4gIEBPdXRwdXQoKSB3YXRjaFNhdmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICB3YXRjaE1vZGVsOiBXYXRjaCA9IG5ldyBXYXRjaChudWxsLCBcIlwiKTtcbiAgd2F0Y2hGb3JtICAgICAgICA6IEZvcm1Hcm91cDtcbiAgYnJhbmRzICAgICAgICAgICA6IHsgbmFtZTogc3RyaW5nLCBpY29uOiBzdHJpbmcsIG1vZGVsczogc3RyaW5nIH1bXSA9IFtdO1xuICBtb2RlbHMgICAgICAgICAgIDogc3RyaW5nW10gPSBbXTtcbiAgZmlsdGVyZWRCcmFuZExpc3Q6IHsgbmFtZTogc3RyaW5nLCBpY29uOiBzdHJpbmcsIG1vZGVsczogc3RyaW5nIH1bXSA9IFtdO1xuICBmaWx0ZXJlZE1vZGVsTGlzdDogc3RyaW5nW10gPSBbXTtcbiAgZXJyb3IgICAgICAgICAgICA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc3VibWl0QXR0ZW1wdCAgICA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgYnJhbmRTZWxlY3RlZCAgICA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbW9kZWxTZWxlY3RlZCAgICA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3Igd2l0aCBESVxuICAgKiBAcGFyYW0ge1RyYW5zbGF0ZVNlcnZpY2V9IHByaXZhdGUgdHJhbnNsYXRlIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtIHtUd0FQSVNlcnZpY2V9ICAgICBwcml2YXRlIHR3YXBpICAgICBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSB7Rm9ybUJ1aWxkZXJ9ICAgICAgcHJpdmF0ZSBidWlsZGVyICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0ZTogYW55LFxuICAgIHByaXZhdGUgdHdhcGkgICAgICA6IFR3QVBJU2VydmljZSwgXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlciAgICA6IGFueSxcbiAgKSB7XG5cbiAgICB0cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoJ2VuJyk7XG4gICAgdHJhbnNsYXRlLnVzZSgnZW4nKTtcbiAgICBcblxuICAgIHRoaXMud2F0Y2hGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBpZCAgICAgOiB0aGlzLndhdGNoTW9kZWwuaWQsXG4gICAgICBicmFuZCAgOiBbdGhpcy53YXRjaE1vZGVsLmJyYW5kLCAgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBuYW1lICAgOiBbdGhpcy53YXRjaE1vZGVsLm5hbWUsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgY2FsaWJlcjogdGhpcy53YXRjaE1vZGVsLmNhbGliZXIsXG4gICAgICB5ZWFyICAgOiBbdGhpcy53YXRjaE1vZGVsLnllYXJPZkJ1eSwgVmFsaWRhdG9ycy5jb21wb3NlKFxuICAgICAgICBbVmFsaWRhdG9ycy5taW5MZW5ndGgoNCksICBWYWxpZGF0b3JzLm1heExlbmd0aCg0KV1cbiAgICAgICldLFxuICAgICAgc2VyaWFsIDogdGhpcy53YXRjaE1vZGVsLnNlcmlhbFxuICAgIH0pO1xuXG5cbiAgICB0aGlzLnR3YXBpLmdldEJyYW5kcygpLnRoZW4oXG4gICAgICByZXMgPT4ge1xuICAgICAgICB0aGlzLmJyYW5kcyA9IHJlcztcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFtzZWxlY3RCcmFuZCBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtIHtzdHJpbmd9IGJyYW5kIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHNlbGVjdEJyYW5kKGJyYW5kOiBzdHJpbmcpe1xuICAgIHRoaXMuYnJhbmRTZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy50d2FwaS5nZXRNb2RlbHMoYnJhbmQudG9Mb3dlckNhc2UoKSkudGhlbihcbiAgICAgIHJlcyAgID0+IHRoaXMubW9kZWxzID0gcmVzLFxuICAgICAgZXJyb3IgPT4gdGhpcy5tb2RlbHMgPSBbXVxuICAgICk7XG5cbiAgICB0aGlzLmZpbHRlcmVkQnJhbmRMaXN0ID0gW107XG4gICAgdGhpcy53YXRjaE1vZGVsLmJyYW5kID0gYnJhbmQ7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IGEgbW9kZWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGVsIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHNlbGVjdE1vZGVsKG1vZGVsOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1vZGVsU2VsZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMuZmlsdGVyZWRNb2RlbExpc3QgPSBbXTtcbiAgICB0aGlzLndhdGNoTW9kZWwubmFtZSA9IG1vZGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlciBicmFuZHMgYWNjb3JkaW5nIHRoZSBicmFuZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYnJhbmQgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgZmlsdGVyQnJhbmQoYnJhbmQ6IHN0cmluZykge1xuXG4gICAgaWYodGhpcy5icmFuZFNlbGVjdGVkID09IGZhbHNlKXtcbiAgICAgIHRoaXMuZmlsdGVyZWRCcmFuZExpc3QgPSB0aGlzLmJyYW5kcy5maWx0ZXIoXG4gICAgICAgIGZ1bmN0aW9uKGVsZW1lbnQ6IHsgbmFtZTogc3RyaW5nLCBpY29uOiBzdHJpbmcsIG1vZGVsczogc3RyaW5nIH0pIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihicmFuZC50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICAgICAgfSk7XG4gICAgXG4gICAgfWVsc2V7XG4gICAgICBzZXRUaW1lb3V0KCgpPT4gdGhpcy5icmFuZFNlbGVjdGVkID0gZmFsc2UsIDUpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlcnMgbW9kZWxzIGFjY29yZGluZyB0byBtb2RlbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZWwgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgZmlsdGVyTW9kZWwobW9kZWw6c3RyaW5nKXtcblxuICAgIGlmKHRoaXMubW9kZWxTZWxlY3RlZCA9PSBmYWxzZSl7XG4gICAgICB0aGlzLmZpbHRlcmVkTW9kZWxMaXN0ID0gdGhpcy5tb2RlbHMuZmlsdGVyKGZ1bmN0aW9uKGVsZW1lbnQ6c3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihtb2RlbC50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICAgICAgfSk7XG4gICAgfWVsc2V7XG4gICAgICBzZXRUaW1lb3V0KCgpPT4gdGhpcy5tb2RlbFNlbGVjdGVkID0gZmFsc2UsIDUpO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFN1Ym1pdCBhIHdhdGNoXG4gICAqL1xuICBvblN1Ym1pdCgpe1xuXG4gICAgdGhpcy5zdWJtaXRBdHRlbXB0ID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLndhdGNoRm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5lcnJvciA9IGZhbHNlO1xuICAgIFxuICAgICAgdGhpcy50d2FwaS51cHNlcnRXYXRjaCh0aGlzLndhdGNoTW9kZWwpLnRoZW4oXG4gICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnV0FUQ0hfVVBTRVJUJywgJ1NVQ0NFU1MnKTtcbiAgICAgICAgICB0aGlzLnVzZXIudXBzZXJ0V2F0Y2gocmVzKTtcbiAgICAgICAgICB0aGlzLndhdGNoU2F2ZWQuZW1pdCh0aGlzLnVzZXIpO1xuICAgICAgICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQ1RBJywgJ1dBVENIX1VQU0VSVCcsICdGQUlMJyk7XG4gICAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zdWJtaXRBdHRlbXB0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBvbkRlbGV0ZSgpe1xuICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IHRydWU7XG4gICAgdGhpcy50d2FwaS5kZWxldGVXYXRjaCh0aGlzLnVzZXIsIHRoaXMud2F0Y2hNb2RlbCkudGhlbihcbiAgICAgIHJlcyA9PiB7XG4gICAgICAgIEdBU2VydmljZS5ldmVudCgnQ1RBJywgJ1dBVENIX0RFTEVURScsICdTVUNDRVNTJyk7XG4gICAgICAgIHRoaXMud2F0Y2hTYXZlZC5lbWl0KHJlcyk7XG4gICAgICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIGVycm9yID0+IHtcbiAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnV0FUQ0hfREVMRVRFJywgJ0ZBSUwnKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IGZhbHNlO1xuICAgICAgfVxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXJlY3RpdmVzL3dhdGNoL3dhdGNoLmNvbXBvbmVudC50cyIsImV4cG9ydCBjbGFzcyBTdHJpbmdIZWxwZXJ7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsZXZlbnNodGVpbihhOnN0cmluZywgYjpzdHJpbmcpe1xyXG4gICAgICAgIGlmKCFhIHx8ICFiKSByZXR1cm4gKGEgfHwgYikubGVuZ3RoO1xyXG4gICAgICAgIHZhciBtID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8PSBiLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbVtpXSA9IFtpXTtcclxuICAgICAgICAgICAgaWYoaSA9PT0gMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPD0gYS5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBtWzBdW2pdID0gajtcclxuICAgICAgICAgICAgICAgIGlmKGogPT09IDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgbVtpXVtqXSA9IGIuY2hhckF0KGkgLSAxKSA9PSBhLmNoYXJBdChqIC0gMSkgPyBtW2kgLSAxXVtqIC0gMV0gOiBNYXRoLm1pbihcclxuICAgICAgICAgICAgICAgICAgICBtW2ktMV1bai0xXSArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgbVtpXVtqLTFdICsgMSxcclxuICAgICAgICAgICAgICAgICAgICBtW2ktMV1bal0gKyAxXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtW2IubGVuZ3RoXVthLmxlbmd0aF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZXBsYWNlQWxsKHRhcmdldDpzdHJpbmcsIHNlYXJjaDpzdHJpbmcsIHJlcGxhY2VtZW50OnN0cmluZyk6c3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQuc3BsaXQoc2VhcmNoKS5qb2luKHJlcGxhY2VtZW50KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL3N0cmluZy5oZWxwZXIudHMiLCJpbXBvcnQgeyBVc2VyLCB9ICBmcm9tICcuL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgV2F0Y2ggfSAgZnJvbSAnLi93YXRjaC5tb2RlbCc7XG5pbXBvcnQgeyBCbG9nUG9zdCB9ICBmcm9tICcuL2Jsb2ctcG9zdC5tb2RlbCc7XG5pbXBvcnQgeyBNZWFzdXJlIH0gIGZyb20gJy4vbWVhc3VyZS5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBNb2RlbEZhY3Rvcnkge1xuXG5cblx0LyoqXG5cdCAqIEJ1aWxkcyBhbiBVc2VyIGZyb20ganNvbiByZXNwb25zZVxuXHQgKiBAcGFyYW0gIHthbnl9ICBqc29uVXNlclxuXHQgKiBAcmV0dXJuIHtVc2VyfSAgICAgICAgIFxuXHQgKi9cblx0c3RhdGljIGJ1aWxkVXNlcihqc29uVXNlcjogYW55KTogVXNlciB7XG5cblx0XHRyZXR1cm4gbmV3IFVzZXIoXG5cdFx0XHRqc29uVXNlci51c2VySWQsXG5cdFx0XHRqc29uVXNlci5lbWFpbCxcblx0XHRcdGpzb25Vc2VyLmZpcnN0bmFtZSxcblx0XHRcdGpzb25Vc2VyLm5hbWUsXG5cdFx0XHRqc29uVXNlci5jb3VudHJ5LFxuXHRcdFx0anNvblVzZXIucmVnaXN0ZXJEYXRlLFxuXHRcdFx0anNvblVzZXIua2V5LFxuXHRcdFx0TW9kZWxGYWN0b3J5LmJ1aWxkV2F0Y2hlcyhqc29uVXNlci53YXRjaGVzKVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogQnVpbGRzIGEgd2F0Y2ggZnJvbSBqc29uIHJlc3BvbnNlXG5cdCAqIEBwYXJhbSAge2FueX0gICAgIGpzb25XYXRjaGVzXG5cdCAqIEByZXR1cm4ge1dhdGNoW119ICAgICAgICAgICAgXG5cdCAqL1xuXHRzdGF0aWMgYnVpbGRXYXRjaGVzKGpzb25XYXRjaGVzOiBhbnkpOiBXYXRjaFtdIHtcblx0XHRyZXR1cm4ganNvbldhdGNoZXMubWFwKGZ1bmN0aW9uKGpzb25XYXRjaDphbnkpIHtcblx0XHRcdHJldHVybiBuZXcgV2F0Y2goXG5cdFx0XHRcdGpzb25XYXRjaC53YXRjaElkLFxuXHRcdFx0XHRqc29uV2F0Y2guYnJhbmQsXG5cdFx0XHRcdGpzb25XYXRjaC5oaXN0b3J5U2l6ZSxcblx0XHRcdFx0anNvbldhdGNoLm1lYXN1cmVzLm1hcChmdW5jdGlvbihqc29uTWVhc3VyZTphbnkpIHtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IE1lYXN1cmUoXG5cdFx0XHRcdFx0XHRqc29uTWVhc3VyZS5pZCxcblx0XHRcdFx0XHRcdGpzb25NZWFzdXJlLm1lYXN1cmVVc2VyVGltZSxcblx0XHRcdFx0XHRcdGpzb25NZWFzdXJlLm1lYXN1cmVSZWZlcmVuY2VUaW1lLFxuXHRcdFx0XHRcdFx0anNvbk1lYXN1cmUuc3RhdHVzSWQsXG5cdFx0XHRcdFx0XHRqc29uTWVhc3VyZS5hY2N1cmFjeVVzZXJUaW1lLFxuXHRcdFx0XHRcdFx0anNvbk1lYXN1cmUuYWNjdXJhY3lSZWZlcmVuY2VUaW1lLFxuXHRcdFx0XHRcdFx0anNvbk1lYXN1cmUuYWNjdXJhY3ksXG5cdFx0XHRcdFx0XHRqc29uTWVhc3VyZS5hY2N1cmFjeUFnZSxcblx0XHRcdFx0XHRcdGpzb25NZWFzdXJlLnBlcmNlbnRpbGUpXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRqc29uV2F0Y2gubmFtZSxcblx0XHRcdFx0anNvbldhdGNoLnllYXJPZkJ1eSxcblx0XHRcdFx0anNvbldhdGNoLnNlcmlhbCxcblx0XHRcdFx0anNvbldhdGNoLmNhbGliZXJcblx0XHRcdClcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBCdWlsZHMgSnNvbiBwb3N0IGZyb20ganNvbiByZXNwb25zZVxuXHQgKiBAcGFyYW0gIHthbnl9ICAgICAgICBqc29uUG9zdHMgW2Rlc2NyaXB0aW9uXVxuXHQgKiBAcmV0dXJuIHtCbG9nUG9zdFtdfSAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblx0c3RhdGljIGJ1aWxkUG9zdHMoanNvblBvc3RzOiBhbnkpOiBCbG9nUG9zdFtde1xuXHRcdHJldHVybiBqc29uUG9zdHMucG9zdHMubWFwKGZ1bmN0aW9uKGpzb25Qb3N0OmFueSkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEJsb2dQb3N0KFxuXHRcdFx0XHRqc29uUG9zdC5pZCwgXG5cdFx0XHRcdGpzb25Qb3N0LnRpdGxlLCBcblx0XHRcdFx0bmV3IERhdGUoanNvblBvc3QuZGF0ZSksIFxuXHRcdFx0XHRqc29uUG9zdC5leGNlcnB0LFxuXHRcdFx0XHRqc29uUG9zdC51cmxcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWxzL21vZGVsLmZhY3RvcnkudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIyX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1J4XCJcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXgnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R3LWNvcmUudHMiXSwic291cmNlUm9vdCI6IiJ9