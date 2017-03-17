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
     * Returns model of a given brand
     * @param  {string}  brand
     * @return {Promise}
     */
    TwAPIService.prototype.getCalibers = function (brand) {
        brand = __WEBPACK_IMPORTED_MODULE_5__helpers_string_helper__["a" /* StringHelper */].replaceAll(brand, " ", "");
        brand = __WEBPACK_IMPORTED_MODULE_5__helpers_string_helper__["a" /* StringHelper */].replaceAll(brand, "&", "");
        return this.http.get(TwAPIService.assetsUrl + '/watch-calibers/' + brand + ".json")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0ZGYzMTVjNzBiMGY0Y2Q0ODYwYSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2dhLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy93YXRjaC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL21lYXN1cmUubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3R3YXBpLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9jbG9jay9tb29uLXBoYXNlcy9tb29uLXBoYXNlcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvZ2xvYmFsLXZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2Jsb2ctcG9zdC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpcGVzL2FyZXRobWV0aWMtc2lnbi5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlcy9rLWZvcm1hdHRlci5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlcy9sZWFkaW5nLXplcm8ucGlwZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvY2xvY2svY2xvY2suY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy93YXRjaC93YXRjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvc3RyaW5nLmhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL21vZGVsLmZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vLi90dy1jb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSwrQzs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0Q0FBNEM7Ozs7Ozs7Ozs7QUN4QzdDO0FBQUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7O0FDNUJEO0FBQUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7QUNuQ0Q7QUFBQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7QUM1QkQsZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMyQztBQUNuQjtBQUNIO0FBQ0k7QUFDSDtBQUNEO0FBQ1M7QUFDUDtBQUNIO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpLCByZXF1aXJlKFwicnhqcy9SeFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYW5ndWxhci9jb3JlXCIsIFwiQGFuZ3VsYXIvZm9ybXNcIiwgXCJAYW5ndWxhci9odHRwXCIsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiLCBcInJ4anMvUnhcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widHctY29yZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpLCByZXF1aXJlKFwicnhqcy9SeFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1widHctY29yZVwiXSA9IGZhY3Rvcnkocm9vdFtcIkBhbmd1bGFyL2NvcmVcIl0sIHJvb3RbXCJAYW5ndWxhci9mb3Jtc1wiXSwgcm9vdFtcIkBhbmd1bGFyL2h0dHBcIl0sIHJvb3RbXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCJdLCByb290W1wicnhqcy9SeFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIyX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0ZGYzMTVjNzBiMGY0Y2Q0ODYwYSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuZXhwb3J0IHZhciBHQVNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR0FTZXJ2aWNlKCkge1xyXG4gICAgfVxyXG4gICAgR0FTZXJ2aWNlLnNwYXduID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghR0FTZXJ2aWNlLmdhQ3JlYXRlZCkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICB2YXIgZ2FOZXdFbGVtID0ge307XHJcbiAgICAgICAgICAgIHZhciBnYUVsZW1zID0ge307XHJcbiAgICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLXN0cmluZy1saXRlcmFsICovXHJcbiAgICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlOnNlbWljb2xvbiAqL1xyXG4gICAgICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby11bnVzZWQtZXhwcmVzc2lvbiAqL1xyXG4gICAgICAgICAgICAvLyBUaGlzIGNvZGUgaXMgZnJvbSBHb29nbGUsIHNvIGxldCdzIG5vdCBtb2RpZnkgaXQgdG9vIG11Y2gsIGp1c3QgYWRkIGdhTmV3RWxlbSBhbmQgZ2FFbGVtczpcclxuICAgICAgICAgICAgKGZ1bmN0aW9uIChpLCBzLCBvLCBnLCByLCBhLCBtKSB7XHJcbiAgICAgICAgICAgICAgICBpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXSA9IHI7XHJcbiAgICAgICAgICAgICAgICBpW3JdID0gaVtyXSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKGlbcl0ucSA9IGlbcl0ucSB8fCBbXSkucHVzaChhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfSwgaVtyXS5sID0gMSAqIGN1cnJkYXRlO1xyXG4gICAgICAgICAgICAgICAgYSA9IHMuY3JlYXRlRWxlbWVudChvKSxcclxuICAgICAgICAgICAgICAgICAgICBtID0gcy5nZXRFbGVtZW50c0J5VGFnTmFtZShvKVswXTtcclxuICAgICAgICAgICAgICAgIGEuYXN5bmMgPSAxO1xyXG4gICAgICAgICAgICAgICAgYS5zcmMgPSBnO1xyXG4gICAgICAgICAgICAgICAgbS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBtKTtcclxuICAgICAgICAgICAgfSkod2luZG93LCBkb2N1bWVudCwgJ3NjcmlwdCcsICdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCAnZ2EnLCBnYU5ld0VsZW0sIGdhRWxlbXMpO1xyXG4gICAgICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLXVudXNlZC1leHByZXNzaW9uICovXHJcbiAgICAgICAgICAgIC8qIHRzbGludDplbmFibGU6c2VtaWNvbG9uICovXHJcbiAgICAgICAgICAgIC8qIHRzbGludDplbmFibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cclxuICAgICAgICAgICAgZ2EoJ2NyZWF0ZScsICdVQS01OTE0ODg3OC0xJywgJ2FwcC50b29sd2F0Y2guaW8nKTtcclxuICAgICAgICAgICAgR0FTZXJ2aWNlLmdhQ3JlYXRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEdBU2VydmljZS5ldmVudCA9IGZ1bmN0aW9uIChldmVudENhdGVnb3J5LCBldmVudEFjdGlvbiwgZXZlbnRMYWJlbCwgZXZlbnRWYWx1ZSkge1xyXG4gICAgICAgIGlmIChldmVudExhYmVsID09PSB2b2lkIDApIHsgZXZlbnRMYWJlbCA9ICcnOyB9XHJcbiAgICAgICAgaWYgKGV2ZW50VmFsdWUgPT09IHZvaWQgMCkgeyBldmVudFZhbHVlID0gMDsgfVxyXG4gICAgICAgIEdBU2VydmljZS5zcGF3bigpO1xyXG4gICAgICAgIGdhKCdzZW5kJywgJ2V2ZW50JywgZXZlbnRDYXRlZ29yeSwgZXZlbnRBY3Rpb24sIGV2ZW50TGFiZWwsIGV2ZW50VmFsdWUpO1xyXG4gICAgfTtcclxuICAgIEdBU2VydmljZS5zY3JlZW52aWV3ID0gZnVuY3Rpb24gKHNjcmVlbk5hbWUpIHtcclxuICAgICAgICAvL2FwcFZlcnNpb24gYW5kIGFwcE5hbWUgYXJlIGhhbmRsZWQgYnkgaW9uaWMtbmF0aXZlIHByb21pc2VzIG9uIG1vYmlsZVxyXG4gICAgICAgIC8vSW4gY2FzZSB0aGUgcHJvbWlzZXMgYXJlIHN0aWxsIHdvcmtpbmcsIHdlIHRpbWVvdXQgdGhlIGNhbGwgYnkgMXMuXHJcbiAgICAgICAgaWYgKEdBU2VydmljZS5hcHBOYW1lID09IHVuZGVmaW5lZCB8fCBHQVNlcnZpY2UuYXBwVmVyc2lvbiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJHQVNlcnZpY2UgaXNuJ3QgY29uZmlndXJlZCB5ZXQuIFBvc3Rwb25pbmcgY2FsbFwiLCBHQVNlcnZpY2UuYXBwTmFtZSwgR0FTZXJ2aWNlLmFwcFZlcnNpb24pO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIEdBU2VydmljZS5zY3JlZW52aWV3KHNjcmVlbk5hbWUpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIEdBU2VydmljZS5zcGF3bigpO1xyXG4gICAgICAgICAgICBnYSgnc2VuZCcsICdzY3JlZW52aWV3Jywge1xyXG4gICAgICAgICAgICAgICAgJ2FwcE5hbWUnOiBHQVNlcnZpY2UuYXBwTmFtZSxcclxuICAgICAgICAgICAgICAgICdhcHBWZXJzaW9uJzogR0FTZXJ2aWNlLmFwcFZlcnNpb24sXHJcbiAgICAgICAgICAgICAgICAnc2NyZWVuTmFtZSc6IHNjcmVlbk5hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEdBU2VydmljZS5wYWdldmlldyA9IGZ1bmN0aW9uIChwYWdlKSB7XHJcbiAgICAgICAgR0FTZXJ2aWNlLnNwYXduKCk7XHJcbiAgICAgICAgZ2EoJ3NldCcsICdwYWdlJywgcGFnZSk7XHJcbiAgICAgICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcclxuICAgIH07XHJcbiAgICBHQVNlcnZpY2UuZ2FDcmVhdGVkID0gZmFsc2U7XHJcbiAgICBHQVNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBJbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBHQVNlcnZpY2UpO1xyXG4gICAgcmV0dXJuIEdBU2VydmljZTtcclxufSgpKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VydmljZXMvZ2Euc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBNZWFzdXJlU3RhdHVzIH0gZnJvbSAnLi9tZWFzdXJlLm1vZGVsJztcclxuZXhwb3J0IHZhciBXYXRjaCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXYXRjaChpZCwgYnJhbmQsIGhpc3RvcnlTaXplLCBtZWFzdXJlcywgbmFtZSwgeWVhck9mQnV5LCBzZXJpYWwsIGNhbGliZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChoaXN0b3J5U2l6ZSA9PT0gdm9pZCAwKSB7IGhpc3RvcnlTaXplID0gMDsgfVxyXG4gICAgICAgIGlmIChtZWFzdXJlcyA9PT0gdm9pZCAwKSB7IG1lYXN1cmVzID0gW107IH1cclxuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIlwiOyB9XHJcbiAgICAgICAgaWYgKHllYXJPZkJ1eSA9PT0gdm9pZCAwKSB7IHllYXJPZkJ1eSA9IG51bGw7IH1cclxuICAgICAgICBpZiAoc2VyaWFsID09PSB2b2lkIDApIHsgc2VyaWFsID0gXCJcIjsgfVxyXG4gICAgICAgIGlmIChjYWxpYmVyID09PSB2b2lkIDApIHsgY2FsaWJlciA9IFwiXCI7IH1cclxuICAgICAgICB0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJXYXRjaCAoaWQ6IFwiICsgX3RoaXMuaWQgKyBcIixcXG5cXHRcXHRcXHRcXHRicmFuZDogXCIgKyBfdGhpcy5icmFuZCArIFwiLFxcblxcdFxcdFxcdFxcdGhpc3RvcnlTaXplOiBcIiArIF90aGlzLmhpc3RvcnlTaXplICsgXCIsXFxuXFx0XFx0XFx0XFx0bWVhc3VyZXM6IFwiICsgX3RoaXMubWVhc3VyZXMgKyBcIixcXG5cXHRcXHRcXHRcXHRuYW1lOiBcIiArIF90aGlzLm5hbWUgKyBcIixcXG5cXHRcXHRcXHRcXHR5ZWFyT2ZCdXk6IFwiICsgX3RoaXMueWVhck9mQnV5ICsgXCIsXFxuXFx0XFx0XFx0XFx0c2VyaWFsOiBcIiArIF90aGlzLnNlcmlhbCArIFwiLFxcblxcdFxcdFxcdFxcdGNhbGliZXI6IFwiICsgX3RoaXMuY2FsaWJlciArIFwiLFxcblxcdFxcdFxcdFxcdHN0YXR1czogXCIgKyBfdGhpcy5zdGF0dXMgKyBcIixcXG5cXHRcXHRcXHRcXHRuZXh0OiBcIiArIF90aGlzLm5leHQgKyBcIixcXG5cXHRcXHRcXHRcXHR3YWl0aW5nOiBcIiArIF90aGlzLndhaXRpbmcgKyBcIilcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmJyYW5kID0gYnJhbmQ7XHJcbiAgICAgICAgdGhpcy5oaXN0b3J5U2l6ZSA9IGhpc3RvcnlTaXplO1xyXG4gICAgICAgIHRoaXMubWVhc3VyZXMgPSBtZWFzdXJlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmlkIC0gYi5pZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIGlmICh5ZWFyT2ZCdXkgIT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnllYXJPZkJ1eSA9IHllYXJPZkJ1eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXJpYWwgPSBzZXJpYWw7XHJcbiAgICAgICAgdGhpcy5jYWxpYmVyID0gY2FsaWJlcjtcclxuICAgICAgICB0aGlzLmluaXRpYWxzID0gKHRoaXMuYnJhbmQgIT0gbnVsbCAmJiB0aGlzLmJyYW5kLmxlbmd0aCA+IDApID8gdGhpcy5icmFuZC5jaGFyQXQoMCkgOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbHMgKz0gKHRoaXMubmFtZS5sZW5ndGggPiAwKSA/IHRoaXMubmFtZS5jaGFyQXQoMCkgOiBcIlwiO1xyXG4gICAgICAgIGlmIChoaXN0b3J5U2l6ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gV2F0Y2hTdGF0dXMuTmV2ZXJNZWFzdXJlZDtcclxuICAgICAgICAgICAgdGhpcy5uZXh0ID0gV2F0Y2hBY3Rpb24uTWVhc3VyZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaGlzdG9yeVNpemUgPiB0aGlzLm1lYXN1cmVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFdhdGNoU3RhdHVzLkhhdmVNb3JlTWVhc3VyZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29tcHV0ZU5leHQoKTtcclxuICAgIH1cclxuICAgIFdhdGNoLnByb3RvdHlwZS5jb21wdXRlTmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbGFzdE1lYXN1cmUgPSB0aGlzLmN1cnJlbnRNZWFzdXJlKCk7XHJcbiAgICAgICAgaWYgKGxhc3RNZWFzdXJlICE9PSBudWxsXHJcbiAgICAgICAgICAgICYmIGxhc3RNZWFzdXJlLnN0YXR1cyAmIE1lYXN1cmVTdGF0dXMuQmFzZU1lYXN1cmUpIHtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKChsYXN0TWVhc3VyZS5tZWFzdXJlVXNlclRpbWUgLSBEYXRlLm5vdygpIC8gMTAwMCkgLyAzNjAwKSA8IDEyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQgPSBXYXRjaEFjdGlvbi5XYWl0aW5nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YWl0aW5nID0gTWF0aC5yb3VuZCgxMiAtIE1hdGguYWJzKChsYXN0TWVhc3VyZS5tZWFzdXJlVXNlclRpbWUgLSBEYXRlLm5vdygpIC8gMTAwMCkgLyAzNjAwKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIShsYXN0TWVhc3VyZS5zdGF0dXMgJiBNZWFzdXJlU3RhdHVzLkFjY3VyYWN5TWVhc3VyZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCA9IFdhdGNoQWN0aW9uLkFjY3VyYWN5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0ID0gV2F0Y2hBY3Rpb24uTWVhc3VyZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBXYXRjaC5wcm90b3R5cGUuYXZlcmFnZSA9IGZ1bmN0aW9uIChhbW91bnQpIHtcclxuICAgICAgICB2YXIgYWN0dWFsQW1vdW50ID0gMDtcclxuICAgICAgICB2YXIgYXZlcmFnZSA9IDA7XHJcbiAgICAgICAgdmFyIGkgPSB0aGlzLm1lYXN1cmVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgd2hpbGUgKGkgPj0gMCAmJiBhY3R1YWxBbW91bnQgPD0gYW1vdW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1lYXN1cmVzW2ldLnN0YXR1cyAmIE1lYXN1cmVTdGF0dXMuQWNjdXJhY3lNZWFzdXJlKSB7XHJcbiAgICAgICAgICAgICAgICBhdmVyYWdlID0gYXZlcmFnZSArIE1hdGguYWJzKHRoaXMubWVhc3VyZXNbaV0uYWNjdXJhY3kpO1xyXG4gICAgICAgICAgICAgICAgYWN0dWFsQW1vdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGF2ZXJhZ2UgLyBhY3R1YWxBbW91bnQpLnRvRml4ZWQoMSk7XHJcbiAgICB9O1xyXG4gICAgV2F0Y2gucHJvdG90eXBlLmxhc3RDb21wbGV0ZU1lYXN1cmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGkgPSB0aGlzLm1lYXN1cmVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgd2hpbGUgKGkgPj0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tZWFzdXJlc1tpXS5zdGF0dXMgJiBNZWFzdXJlU3RhdHVzLkFjY3VyYWN5TWVhc3VyZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVhc3VyZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICBXYXRjaC5wcm90b3R5cGUuY3VycmVudE1lYXN1cmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWVhc3VyZXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1lYXN1cmVzW3RoaXMubWVhc3VyZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgV2F0Y2gucHJvdG90eXBlLnVwc2VydE1lYXN1cmUgPSBmdW5jdGlvbiAobWVhc3VyZSkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tZWFzdXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImlcIiwgaSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1lYXN1cmVzW2ldLmlkID09IG1lYXN1cmUuaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVhc3VyZXNbaV0gPSBtZWFzdXJlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGlzdG9yeVNpemUrKztcclxuICAgICAgICB0aGlzLm1lYXN1cmVzLnB1c2gobWVhc3VyZSk7XHJcbiAgICB9O1xyXG4gICAgV2F0Y2gucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgV2F0Y2godGhpcy5pZCwgdGhpcy5icmFuZCwgdGhpcy5oaXN0b3J5U2l6ZSwgdGhpcy5tZWFzdXJlcywgdGhpcy5uYW1lLCB0aGlzLnllYXJPZkJ1eSwgdGhpcy5zZXJpYWwsIHRoaXMuY2FsaWJlcik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFdhdGNoO1xyXG59KCkpO1xyXG5leHBvcnQgdmFyIFdhdGNoQWN0aW9uO1xyXG4oZnVuY3Rpb24gKFdhdGNoQWN0aW9uKSB7XHJcbiAgICBXYXRjaEFjdGlvbltXYXRjaEFjdGlvbltcIk1lYXN1cmVcIl0gPSAwXSA9IFwiTWVhc3VyZVwiO1xyXG4gICAgV2F0Y2hBY3Rpb25bV2F0Y2hBY3Rpb25bXCJXYWl0aW5nXCJdID0gMV0gPSBcIldhaXRpbmdcIjtcclxuICAgIFdhdGNoQWN0aW9uW1dhdGNoQWN0aW9uW1wiQWNjdXJhY3lcIl0gPSAyXSA9IFwiQWNjdXJhY3lcIjtcclxufSkoV2F0Y2hBY3Rpb24gfHwgKFdhdGNoQWN0aW9uID0ge30pKTtcclxuZXhwb3J0IHZhciBXYXRjaFN0YXR1cztcclxuKGZ1bmN0aW9uIChXYXRjaFN0YXR1cykge1xyXG4gICAgV2F0Y2hTdGF0dXNbV2F0Y2hTdGF0dXNbXCJOZXZlck1lYXN1cmVkXCJdID0gMF0gPSBcIk5ldmVyTWVhc3VyZWRcIjtcclxuICAgIFdhdGNoU3RhdHVzW1dhdGNoU3RhdHVzW1wiSGF2ZU1vcmVNZWFzdXJlc1wiXSA9IDFdID0gXCJIYXZlTW9yZU1lYXN1cmVzXCI7XHJcbn0pKFdhdGNoU3RhdHVzIHx8IChXYXRjaFN0YXR1cyA9IHt9KSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZGVscy93YXRjaC5tb2RlbC50c1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgdmFyIE1lYXN1cmUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWVhc3VyZShpZCwgbWVhc3VyZVVzZXJUaW1lLCBtZWFzdXJlUmVmZXJlbmNlVGltZSwgc3RhdHVzLCBhY2N1cmFjeVVzZXJUaW1lLCBhY2N1cmFjeVJlZmVyZW5jZVRpbWUsIGFjY3VyYWN5LCBhY2N1cmFjeUFnZSwgcGVyY2VudGlsZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBNZWFzdXJlU3RhdHVzLk5vbmU7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVuZXdlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIk1lYXN1cmUgKGlkOiBcIiArIF90aGlzLmlkICsgXCIsXFxuXFx0XFx0bWVhc3VyZVVzZXJUaW1lOiBcIiArIF90aGlzLm1lYXN1cmVVc2VyVGltZSArIFwiLFxcblxcdFxcdG1lYXN1cmVSZWZlcmVuY2VUaW1lOiBcIiArIF90aGlzLm1lYXN1cmVSZWZlcmVuY2VUaW1lICsgXCIsXFxuXFx0XFx0YWNjdXJhY3lVc2VyVGltZTogXCIgKyBfdGhpcy5hY2N1cmFjeVVzZXJUaW1lICsgXCIsXFxuXFx0XFx0YWNjdXJhY3lSZWZlcmVuY2VUaW1lOiBcIiArIF90aGlzLmFjY3VyYWN5UmVmZXJlbmNlVGltZSArIFwiLFxcblxcdFxcdGFjY3VyYWN5OiBcIiArIF90aGlzLmFjY3VyYWN5ICsgXCIsXFxuXFx0XFx0YWNjdXJhY3lBZ2U6IFwiICsgX3RoaXMuYWNjdXJhY3lBZ2UgKyBcIixcXG5cXHRcXHRwZXJjZW50aWxlOiBcIiArIF90aGlzLnBlcmNlbnRpbGUgKyBcIixcXG5cXHRcXHRzdGF0dXM6IFwiICsgX3RoaXMuc3RhdHVzICsgXCIpXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5tZWFzdXJlVXNlclRpbWUgPSBtZWFzdXJlVXNlclRpbWU7XHJcbiAgICAgICAgdGhpcy5tZWFzdXJlUmVmZXJlbmNlVGltZSA9IG1lYXN1cmVSZWZlcmVuY2VUaW1lO1xyXG4gICAgICAgIHRoaXMuYWNjdXJhY3lVc2VyVGltZSA9IGFjY3VyYWN5VXNlclRpbWU7XHJcbiAgICAgICAgdGhpcy5hY2N1cmFjeVJlZmVyZW5jZVRpbWUgPSBhY2N1cmFjeVJlZmVyZW5jZVRpbWU7XHJcbiAgICAgICAgdGhpcy5hY2N1cmFjeSA9IGFjY3VyYWN5O1xyXG4gICAgICAgIHRoaXMuYWNjdXJhY3lBZ2UgPSBhY2N1cmFjeUFnZTtcclxuICAgICAgICB0aGlzLnBlcmNlbnRpbGUgPSBNYXRoLnJvdW5kKHBlcmNlbnRpbGUgKiAxMCkgLyAxMDtcclxuICAgICAgICBpZiAoc3RhdHVzID49IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5CYXNlTWVhc3VyZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0YXR1cyA+PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzIHw9IE1lYXN1cmVTdGF0dXMuQWNjdXJhY3lNZWFzdXJlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RhdHVzID49IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5BcmNoaXZlZE1lYXN1cmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhY2N1cmFjeUFnZSA+IDMwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZXdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzIHw9IE1lYXN1cmVTdGF0dXMuU2hvdWxkQmVSZW5ld2VkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTWF0aC5hYnMoYWNjdXJhY3kpID4gMjApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzIHw9IE1lYXN1cmVTdGF0dXMuU2hvdWxkQmVTZXJ2aWNlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb21wdXRlUG9zdEFjY3VyYWN5U3RhdHVzKGFjY3VyYWN5LCBhY2N1cmFjeUFnZSk7XHJcbiAgICB9XHJcbiAgICBNZWFzdXJlLnByb3RvdHlwZS5hZGRCYXNlTWVhc3VyZSA9IGZ1bmN0aW9uIChyZWZlcmVuY2VUaW1lLCB1c2VyVGltZSkge1xyXG4gICAgICAgIHRoaXMubWVhc3VyZVJlZmVyZW5jZVRpbWUgPSByZWZlcmVuY2VUaW1lO1xyXG4gICAgICAgIHRoaXMubWVhc3VyZVVzZXJUaW1lID0gdXNlclRpbWU7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5CYXNlTWVhc3VyZTtcclxuICAgIH07XHJcbiAgICBNZWFzdXJlLnByb3RvdHlwZS5hZGRBY2N1cmFjeU1lYXN1cmUgPSBmdW5jdGlvbiAocmVmZXJlbmNlVGltZSwgdXNlclRpbWUpIHtcclxuICAgICAgICB0aGlzLmFjY3VyYWN5UmVmZXJlbmNlVGltZSA9IHJlZmVyZW5jZVRpbWU7XHJcbiAgICAgICAgdGhpcy5hY2N1cmFjeVVzZXJUaW1lID0gdXNlclRpbWU7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5BY2N1cmFjeU1lYXN1cmU7XHJcbiAgICB9O1xyXG4gICAgTWVhc3VyZS5wcm90b3R5cGUuYWRkQWNjdXJhY3kgPSBmdW5jdGlvbiAoYWNjdXJhY3ksIGFjY3VyYWN5QWdlLCBwZXJjZW50aWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGRBY2N1cmFjeVwiLCBhY2N1cmFjeSwgYWNjdXJhY3lBZ2UsIHBlcmNlbnRpbGUpO1xyXG4gICAgICAgIHRoaXMuYWNjdXJhY3kgPSBhY2N1cmFjeTtcclxuICAgICAgICB0aGlzLmFjY3VyYWN5QWdlID0gYWNjdXJhY3lBZ2U7XHJcbiAgICAgICAgdGhpcy5wZXJjZW50aWxlID0gTWF0aC5yb3VuZChwZXJjZW50aWxlICogMTApIC8gMTA7XHJcbiAgICAgICAgdGhpcy5jb21wdXRlUG9zdEFjY3VyYWN5U3RhdHVzKGFjY3VyYWN5LCBhY2N1cmFjeUFnZSk7XHJcbiAgICB9O1xyXG4gICAgTWVhc3VyZS5wcm90b3R5cGUuY29tcHV0ZVBvc3RBY2N1cmFjeVN0YXR1cyA9IGZ1bmN0aW9uIChhY2N1cmFjeSwgYWNjdXJhY3lBZ2UpIHtcclxuICAgICAgICBpZiAoYWNjdXJhY3kgIT0gbnVsbCAmJiBhY2N1cmFjeUFnZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhY2N1cmFjeSkgPiAyMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5TaG91bGRCZVNlcnZpY2VkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFjY3VyYWN5QWdlID4gMzApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZXdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyB8PSBNZWFzdXJlU3RhdHVzLlNob3VsZEJlUmVuZXdlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gTWVhc3VyZTtcclxufSgpKTtcclxuZXhwb3J0IHZhciBNZWFzdXJlU3RhdHVzO1xyXG4oZnVuY3Rpb24gKE1lYXN1cmVTdGF0dXMpIHtcclxuICAgIE1lYXN1cmVTdGF0dXNbTWVhc3VyZVN0YXR1c1tcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xyXG4gICAgTWVhc3VyZVN0YXR1c1tNZWFzdXJlU3RhdHVzW1wiQmFzZU1lYXN1cmVcIl0gPSAxXSA9IFwiQmFzZU1lYXN1cmVcIjtcclxuICAgIE1lYXN1cmVTdGF0dXNbTWVhc3VyZVN0YXR1c1tcIkFjY3VyYWN5TWVhc3VyZVwiXSA9IDJdID0gXCJBY2N1cmFjeU1lYXN1cmVcIjtcclxuICAgIE1lYXN1cmVTdGF0dXNbTWVhc3VyZVN0YXR1c1tcIkFyY2hpdmVkTWVhc3VyZVwiXSA9IDRdID0gXCJBcmNoaXZlZE1lYXN1cmVcIjtcclxuICAgIE1lYXN1cmVTdGF0dXNbTWVhc3VyZVN0YXR1c1tcIlNob3VsZEJlUmVuZXdlZFwiXSA9IDhdID0gXCJTaG91bGRCZVJlbmV3ZWRcIjtcclxuICAgIE1lYXN1cmVTdGF0dXNbTWVhc3VyZVN0YXR1c1tcIlNob3VsZEJlU2VydmljZWRcIl0gPSAxNl0gPSBcIlNob3VsZEJlU2VydmljZWRcIjtcclxufSkoTWVhc3VyZVN0YXR1cyB8fCAoTWVhc3VyZVN0YXR1cyA9IHt9KSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZGVscy9tZWFzdXJlLm1vZGVsLnRzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlcXVlc3RPcHRpb25zLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IFdhdGNoQWN0aW9uIH0gZnJvbSAnLi8uLi9tb2RlbHMvd2F0Y2gubW9kZWwnO1xyXG5pbXBvcnQgeyBNb2RlbEZhY3RvcnkgfSBmcm9tICcuLy4uL21vZGVscy9tb2RlbC5mYWN0b3J5JztcclxuaW1wb3J0IHsgR0FTZXJ2aWNlIH0gZnJvbSAnLi9nYS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RyaW5nSGVscGVyIH0gZnJvbSAnLi8uLi9oZWxwZXJzL3N0cmluZy5oZWxwZXInO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5leHBvcnQgdmFyIFR3QVBJU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEluamVjdCBodHRwIHNlcnZpY2VcclxuICAgICAqIEBwYXJhbSB7SHR0cH0gcHJpdmF0ZSBodHRwXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFR3QVBJU2VydmljZShodHRwKSB7XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgICAgICB0aGlzLmFjY3VyYXRlVGltZSgpO1xyXG4gICAgfVxyXG4gICAgVHdBUElTZXJ2aWNlLnJlc2V0VGltZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBUd0FQSVNlcnZpY2UudGltZSA9IHVuZGVmaW5lZDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIExvZyBhIHVzZXIgdXNpbmcgZW1haWwgYW5kIHBhc3N3b3JkXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICBlbWFpbFxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgcGFzc3dvcmRcclxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8VXNlcj59XHJcbiAgICAgKi9cclxuICAgIFR3QVBJU2VydmljZS5wcm90b3R5cGUubG9naW4gPSBmdW5jdGlvbiAoZW1haWwsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgY3JlZHMgPSB7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoVHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcInVzZXJzXCIsIEpTT04uc3RyaW5naWZ5KGNyZWRzKSwgVHdBUElTZXJ2aWNlLm9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gTW9kZWxGYWN0b3J5LmJ1aWxkVXNlcihyZXMuanNvbigpKTsgfSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdMT0dJTicpO1xyXG4gICAgICAgICAgICBUd0FQSVNlcnZpY2UuYXBpa2V5ID0gcmVzLmtleTtcclxuICAgICAgICAgICAgVHdBUElTZXJ2aWNlLmhlYWRlcnMuZGVsZXRlKCdYLUFQSS1LRVknKTtcclxuICAgICAgICAgICAgVHdBUElTZXJ2aWNlLmhlYWRlcnMuYXBwZW5kKCdYLUFQSS1LRVknLCBUd0FQSVNlcnZpY2UuYXBpa2V5KTtcclxuICAgICAgICAgICAgVHdBUElTZXJ2aWNlLnVzZXIgPSByZXM7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gX3RoaXMuaGFuZGxlRXJyb3IoZXJyKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYW4gdXNlciB1c2luZyBoaXMgQVBJIGtleVxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAga2V5IFtkZXNjcmlwdGlvbl1cclxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8VXNlcj59ICAgICBbZGVzY3JpcHRpb25dXHJcbiAgICAgKi9cclxuICAgIFR3QVBJU2VydmljZS5wcm90b3R5cGUuZ2V0VXNlciA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIFR3QVBJU2VydmljZS5hcGlrZXkgPSBrZXk7XHJcbiAgICAgICAgVHdBUElTZXJ2aWNlLmhlYWRlcnMuZGVsZXRlKCdYLUFQSS1LRVknKTtcclxuICAgICAgICBUd0FQSVNlcnZpY2UuaGVhZGVycy5hcHBlbmQoJ1gtQVBJLUtFWScsIFR3QVBJU2VydmljZS5hcGlrZXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJ1c2Vyc1wiLCBUd0FQSVNlcnZpY2Uub3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiBNb2RlbEZhY3RvcnkuYnVpbGRVc2VyKHJlcy5qc29uKCkpOyB9KVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ0FVVE9MT0dJTicpO1xyXG4gICAgICAgICAgICBUd0FQSVNlcnZpY2UudXNlciA9IHJlcztcclxuICAgICAgICAgICAgcmVzLmtleSA9IGtleTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBfdGhpcy5oYW5kbGVFcnJvcihlcnIpOyB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyBhIG5ldyB1c2VyXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICBlbWFpbFxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgcGFzc3dvcmRcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIG5hbWVcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIGxhc3RuYW1lXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICBjb3VudHJ5XHJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFVzZXI+fVxyXG4gICAgICovXHJcbiAgICBUd0FQSVNlcnZpY2UucHJvdG90eXBlLnNpZ251cCA9IGZ1bmN0aW9uIChlbWFpbCwgcGFzc3dvcmQsIG5hbWUsIGxhc3RuYW1lLCBjb3VudHJ5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJ1c2Vyc1wiLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBsYXN0bmFtZTogbGFzdG5hbWUsXHJcbiAgICAgICAgICAgIGNvdW50cnk6IGNvdW50cnlcclxuICAgICAgICB9KSwgVHdBUElTZXJ2aWNlLm9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gTW9kZWxGYWN0b3J5LmJ1aWxkVXNlcihyZXMuanNvbigpKTsgfSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdTSUdOVVAnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyBhIG5ldyBmYWNlYm9vayB1c2VyXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICBlbWFpbFxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgdG9rZW5cclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIG5hbWVcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgIGxhc3RuYW1lXHJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFVzZXI+fVxyXG4gICAgICovXHJcbiAgICBUd0FQSVNlcnZpY2UucHJvdG90eXBlLnNpZ251cEZhY2Vib29rID0gZnVuY3Rpb24gKGVtYWlsLCB0b2tlbiwgbmFtZSwgbGFzdG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoVHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcInVzZXJzL2ZhY2Vib29rXCIsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICB0b2tlbjogdG9rZW4sXHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIGxhc3RuYW1lOiBsYXN0bmFtZVxyXG4gICAgICAgIH0pLCBUd0FQSVNlcnZpY2Uub3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiBNb2RlbEZhY3RvcnkuYnVpbGRVc2VyKHJlcy5qc29uKCkpOyB9KVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ1NJR05VUCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQXNrIGEgcmVzZXQgcGFzc3dvcmQgbGlua1xyXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn1cclxuICAgICAqL1xyXG4gICAgVHdBUElTZXJ2aWNlLnByb3RvdHlwZS5yZXNldFBhc3N3b3JkID0gZnVuY3Rpb24gKGVtYWlsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJ1c2Vycy9yZXNldFwiLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbFxyXG4gICAgICAgIH0pLCBUd0FQSVNlcnZpY2Uub3B0aW9ucykudG9Qcm9taXNlKCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnUkVTRVRfUEFTU1dPUkQnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGVzIHRoZSBhY2NvdW50IGN1cnJlbnRseSBsb2dnZWQgaW4uXHJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fVxyXG4gICAgICovXHJcbiAgICBUd0FQSVNlcnZpY2UucHJvdG90eXBlLmRlbGV0ZUFjY291bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoVHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcInVzZXJzXCIsIFR3QVBJU2VydmljZS5vcHRpb25zKS50b1Byb21pc2UoKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdERUxFVEVfQUNDT1VOVCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH07XHJcbiAgICBUd0FQSVNlcnZpY2UucHJvdG90eXBlLmdldFdhdGNoZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoVHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcIndhdGNoZXNcIiwgVHdBUElTZXJ2aWNlLm9wdGlvbnNHZXQpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gTW9kZWxGYWN0b3J5LmJ1aWxkV2F0Y2hlcyhyZXMuanNvbigpKTsgfSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdXQVRDSEVTJywgJ0dFVCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIG9yIGluc2VydCBhIHdhdGNoXHJcbiAgICAgKiBAcGFyYW0gIHtXYXRjaH0gICAgICAgICAgd2F0Y2hcclxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8V2F0Y2g+fVxyXG4gICAgICovXHJcbiAgICBUd0FQSVNlcnZpY2UucHJvdG90eXBlLnVwc2VydFdhdGNoID0gZnVuY3Rpb24gKHdhdGNoKSB7XHJcbiAgICAgICAgaWYgKHdhdGNoLmlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0V2F0Y2god2F0Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlV2F0Y2god2F0Y2gpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZXMgYSB3YXRjaCBhbmQgdXBkYXRlIHRoZSB1c2VyIGFjY29yZGluZ2x5XHJcbiAgICAgKiBAcGFyYW0gIHtVc2VyfSAgICAgICAgICB1c2VyXHJcbiAgICAgKiBAcGFyYW0gIHtXYXRjaH0gICAgICAgICB3YXRjaFxyXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxVc2VyPn1cclxuICAgICAqL1xyXG4gICAgVHdBUElTZXJ2aWNlLnByb3RvdHlwZS5kZWxldGVXYXRjaCA9IGZ1bmN0aW9uICh1c2VyLCB3YXRjaCkge1xyXG4gICAgICAgIHZhciBkZWxldGVPcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogVHdBUElTZXJ2aWNlLmhlYWRlcnMgfSk7XHJcbiAgICAgICAgZGVsZXRlT3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyB3YXRjaElkOiB3YXRjaC5pZCB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwid2F0Y2hlc1wiLCBkZWxldGVPcHRpb25zKS50b1Byb21pc2UoKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICB1c2VyLndhdGNoZXMgPSB1c2VyLndhdGNoZXMuZmlsdGVyKGZ1bmN0aW9uIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXIuaWQgIT0gd2F0Y2guaWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdXQVRDSEVTJywgJ0RFTEVURScpO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEluc2VydCBvciB1cGRhdGUgYSBtZWFzdXJlIGFuZCB0aGUgcmVsYXRlZCB3YXRjaFxyXG4gICAgICogQHBhcmFtICB7V2F0Y2h9ICAgICAgICAgIHdhdGNoXHJcbiAgICAgKiBAcGFyYW0gIHtNZWFzdXJlfSAgICAgICAgbWVhc3VyZVxyXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxXYXRjaD59XHJcbiAgICAgKi9cclxuICAgIFR3QVBJU2VydmljZS5wcm90b3R5cGUudXBzZXJ0TWVhc3VyZSA9IGZ1bmN0aW9uICh3YXRjaCwgbWVhc3VyZSkge1xyXG4gICAgICAgIGlmIChtZWFzdXJlLmlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0TWVhc3VyZSh3YXRjaCwgbWVhc3VyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVNZWFzdXJlKHdhdGNoLCBtZWFzdXJlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgYSBtZWFzdXJlIGFuZCB0aGUgdXBkYXRlIHRoZSByZWxhdGVkIHdhdGNoXHJcbiAgICAgKiBAcGFyYW0gIHtXYXRjaH0gICAgICAgICAgd2F0Y2hcclxuICAgICAqIEBwYXJhbSAge01lYXN1cmV9ICAgICAgICBtZWFzdXJlXHJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFdhdGNoPn1cclxuICAgICAqL1xyXG4gICAgVHdBUElTZXJ2aWNlLnByb3RvdHlwZS5kZWxldGVNZWFzdXJlID0gZnVuY3Rpb24gKHdhdGNoLCBtZWFzdXJlKSB7XHJcbiAgICAgICAgdmFyIGRlbGV0ZU9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBUd0FQSVNlcnZpY2UuaGVhZGVycyB9KTtcclxuICAgICAgICBkZWxldGVPcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeSh7IG1lYXN1cmVJZDogbWVhc3VyZS5pZCB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwibWVhc3VyZXNcIiwgZGVsZXRlT3B0aW9ucykudG9Qcm9taXNlKCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgd2F0Y2gubWVhc3VyZXMgPSB3YXRjaC5tZWFzdXJlcy5maWx0ZXIoZnVuY3Rpb24gKGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlci5pZCAhPSBtZWFzdXJlLmlkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgd2F0Y2guY29tcHV0ZU5leHQoKTtcclxuICAgICAgICAgICAgd2F0Y2guaGlzdG9yeVNpemUtLTtcclxuICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnTUVBU1VSRScsICdERUxFVEUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHdhdGNoO1xyXG4gICAgICAgIH0pLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfTtcclxuICAgIFR3QVBJU2VydmljZS5wcm90b3R5cGUuZ2V0QmxvZ1Bvc3RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cHM6Ly9ibG9nLnRvb2x3YXRjaC5pby8/anNvbj0xXCIpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gTW9kZWxGYWN0b3J5LmJ1aWxkUG9zdHMocmVzLmpzb24oKSk7IH0pXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnQkxPRycsICdHRVQnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdpdmVuIGEgYnJhbmQsIHJldHVybnMgbGlrZWx5IGJyYW5kcyBvcmRlcmVkIGJ5IGNvbmZpZGVuY2VcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gIGJyYW5kIFtkZXNjcmlwdGlvbl1cclxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgIFt7YnJhbmQ6c3RyaW5nLCBjb25maWRlbmNlOm51bWJlcn1dXHJcbiAgICAgKi9cclxuICAgIFR3QVBJU2VydmljZS5wcm90b3R5cGUuZ2V0TGlrZWx5QnJhbmRzID0gZnVuY3Rpb24gKHdhdGNoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoVHdBUElTZXJ2aWNlLmFzc2V0c1VybCArICcvd2F0Y2gtYnJhbmQuanNvbicpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKGJyYW5kcykge1xyXG4gICAgICAgICAgICB2YXIgbGlrZWx5QnJhbmRzID0geyB3YXRjaDogd2F0Y2gsIHByb3Bvc2FsczogW10gfTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGJyYW5kcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxldmVuc2h0ZWluRGlzdGFuY2UgPSBTdHJpbmdIZWxwZXIubGV2ZW5zaHRlaW4oYnJhbmRzW2ldLm5hbWUsIHdhdGNoLmJyYW5kKTtcclxuICAgICAgICAgICAgICAgIHZhciBjb25maWRlbmNlID0gbGV2ZW5zaHRlaW5EaXN0YW5jZSAvIE1hdGgubWF4KHdhdGNoLmJyYW5kLmxlbmd0aCwgYnJhbmRzW2ldLm5hbWUubGVuZ3RoKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgIGxpa2VseUJyYW5kcy5wcm9wb3NhbHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJhbmQ6IGJyYW5kc1tpXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ286IGJyYW5kc1tpXS5pY29uLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZGVuY2U6IDEwMCAtIGNvbmZpZGVuY2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpa2VseUJyYW5kcy5wcm9wb3NhbHMgPSBsaWtlbHlCcmFuZHMucHJvcG9zYWxzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiLmNvbmZpZGVuY2UgLSBhLmNvbmZpZGVuY2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gbGlrZWx5QnJhbmRzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGtub3duIGJyYW5kc1xyXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgVHdBUElTZXJ2aWNlLnByb3RvdHlwZS5nZXRCcmFuZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoVHdBUElTZXJ2aWNlLmFzc2V0c1VybCArICcvd2F0Y2gtYnJhbmQuanNvbicpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKGJyYW5kcykge1xyXG4gICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdCUkFORFMnLCAnR0VUJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBicmFuZHM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIG1vZGVsIG9mIGEgZ2l2ZW4gYnJhbmRcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gIGJyYW5kXHJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBUd0FQSVNlcnZpY2UucHJvdG90eXBlLmdldE1vZGVscyA9IGZ1bmN0aW9uIChicmFuZCkge1xyXG4gICAgICAgIGJyYW5kID0gU3RyaW5nSGVscGVyLnJlcGxhY2VBbGwoYnJhbmQsIFwiIFwiLCBcIlwiKTtcclxuICAgICAgICBicmFuZCA9IFN0cmluZ0hlbHBlci5yZXBsYWNlQWxsKGJyYW5kLCBcIiZcIiwgXCJcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoVHdBUElTZXJ2aWNlLmFzc2V0c1VybCArICcvd2F0Y2gtbW9kZWxzLycgKyBicmFuZCArIFwiLmpzb25cIilcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCkudGhlbihmdW5jdGlvbiAobW9kZWxzKSB7XHJcbiAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ01PREVMUycsICdHRVQnKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGVscztcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgbW9kZWwgb2YgYSBnaXZlbiBicmFuZFxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgYnJhbmRcclxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIFR3QVBJU2VydmljZS5wcm90b3R5cGUuZ2V0Q2FsaWJlcnMgPSBmdW5jdGlvbiAoYnJhbmQpIHtcclxuICAgICAgICBicmFuZCA9IFN0cmluZ0hlbHBlci5yZXBsYWNlQWxsKGJyYW5kLCBcIiBcIiwgXCJcIik7XHJcbiAgICAgICAgYnJhbmQgPSBTdHJpbmdIZWxwZXIucmVwbGFjZUFsbChicmFuZCwgXCImXCIsIFwiXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFR3QVBJU2VydmljZS5hc3NldHNVcmwgKyAnL3dhdGNoLWNhbGliZXJzLycgKyBicmFuZCArIFwiLmpzb25cIilcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCkudGhlbihmdW5jdGlvbiAoY2FsaWJlcnMpIHtcclxuICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnQ0FMSUJFUlMnLCAnR0VUJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxpYmVycztcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHByZXZpb3VzbHkgY29tcHV0ZWQgb2Zmc2V0XHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFtkZXNjcmlwdGlvbl1cclxuICAgICAqL1xyXG4gICAgVHdBUElTZXJ2aWNlLnByb3RvdHlwZS5nZXRPZmZzZXRUaW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBUd0FQSVNlcnZpY2UudGltZS5vZmZzZXQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZSBhdG9taWMgY2xvY2sgdGltZSBhZGp1c3RlZCBmb3IgbmV0d29yayBsYXRlbmN5XHJcbiAgICAgKiBAcGFyYW0gIHsoKT0+dm9pZH0gc3RhdHVzQ2FsbGJhY2sgQ2FsbGVkIGF0IGVhY2ggcGFydGlhbCBjb21wbGV0ZVxyXG4gICAgICogQHBhcmFtICB7bnVtYmVyID0gMH0gcHJlY2lzb24gSG93IG1hbnkgY2FsbHMgd2Ugd2FudCB0byBhdmVhZ2VcclxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8RGF0ZT59XHJcbiAgICAgKi9cclxuICAgIFR3QVBJU2VydmljZS5wcm90b3R5cGUuYWNjdXJhdGVUaW1lID0gZnVuY3Rpb24gKHN0YXR1c0NhbGxiYWNrLCBwcmVjaXNvbikge1xyXG4gICAgICAgIGlmIChwcmVjaXNvbiA9PT0gdm9pZCAwKSB7IHByZWNpc29uID0gMTA7IH1cclxuICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdUSU1FJywgJ0dFVCcpO1xyXG4gICAgICAgIC8vSWYgd2UgYXJlbid0IGFscmVhZHkgc3luYydlZFxyXG4gICAgICAgIGlmIChUd0FQSVNlcnZpY2UudGltZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vU3RvcmVzIGVhY2ggUHJvbWlzZSBpbiBhcnJheVxyXG4gICAgICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVjaXNvbjsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuZmV0Y2hUaW1lKHN0YXR1c0NhbGxiYWNrKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFByb21pc2UuYWxsKCkgaXMgdGhlIFByb21pc2UgZXF1aXZhbGVudCBvZiB0aHJlYWQuam9pbigpLlxyXG4gICAgICAgICAgICAgKiBJdCdsbCB3YWl0IGZvciBhbGwgcHJvbWlzZXMgdG8gYmUgcmVjZWl2ZWQuXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIFJldHVybnMgYSBkYXRlIGFkanVzdGVkIHcvIHRoZSBtZWRpYW4gb2Zmc2V0IGJldHdlZW5cclxuICAgICAgICAgICAgICogYXRvbWljIGNsb2NrIGFuZCBqcyB0aW1lLlxyXG4gICAgICAgICAgICAgKiBUaGUgb2Zmc2V0IHJlY2VpdmVkIGluIGVhY2ggcHJvbWlzZSBhbHNvIGFjY291bnRzIGZvclxyXG4gICAgICAgICAgICAgKiB0aGUgbmV0d29yayByb3VuZHRyaXAgdGltZS5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhIC0gYjsgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFsZiA9IE1hdGguZmxvb3IocmVzdWx0cy5sZW5ndGggLyAyKTtcclxuICAgICAgICAgICAgICAgIHZhciBtZWRpYW5PZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggJSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVkaWFuT2Zmc2V0ID0gcmVzdWx0c1toYWxmXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lZGlhbk9mZnNldCA9IChyZXN1bHRzW2hhbGYgLSAxXSArIHJlc3VsdHNbaGFsZl0pIC8gMi4wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgVHdBUElTZXJ2aWNlLnRpbWUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3luY0RhdGU6IG5ldyBEYXRlKERhdGUubm93KCkgLSBtZWRpYW5PZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNBbmNob3I6IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IG1lZGlhbk9mZnNldFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBUd0FQSVNlcnZpY2UudGltZS5zeW5jRGF0ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBUd0FQSVNlcnZpY2UudGltZS5zeW5jRGF0ZSA9IG5ldyBEYXRlKFR3QVBJU2VydmljZS50aW1lLnN5bmNEYXRlLmdldFRpbWUoKSArXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgLSBUd0FQSVNlcnZpY2UudGltZS5zeW5jQW5jaG9yKTtcclxuICAgICAgICAgICAgVHdBUElTZXJ2aWNlLnRpbWUuc3luY0FuY2hvciA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFR3QVBJU2VydmljZS50aW1lKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoVHdBUElTZXJ2aWNlLnRpbWUuc3luY0RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBGZXRjaCBvZmZzZXQgYmV0d2VlbiBhdG9taWMgY2xvY2sgYW5kIGpzIHRpbWVcclxuICAgICAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gc3RhdHVzQ2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgVHdBUElTZXJ2aWNlLnByb3RvdHlwZS5mZXRjaFRpbWUgPSBmdW5jdGlvbiAoc3RhdHVzQ2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgYmVmb3JlVGltZSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwidGltZVwiLCBUd0FQSVNlcnZpY2Uub3B0aW9uc0dldClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzQ2FsbGJhY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgbm93ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICB2YXIgdGltZURpZmYgPSAobm93IC0gYmVmb3JlVGltZSkgLyAyO1xyXG4gICAgICAgICAgICB2YXIgc2VydmVyVGltZSA9IHJlc3BvbnNlLmpzb24oKS50aW1lIC0gdGltZURpZmY7XHJcbiAgICAgICAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gc2VydmVyVGltZTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAocmVqZWN0KSB7IHJldHVybiBjb25zb2xlLmVycm9yKHJlamVjdCk7IH0pLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIGEgbWVhc3VyZSBhbmQgdGhlIHdhdGNoIGl0IGJlbG9uZ3MgdG9cclxuICAgICAqIEBwYXJhbSAge1dhdGNofSAgICAgICAgICB3YXRjaFxyXG4gICAgICogQHBhcmFtICB7TWVhc3VyZX0gICAgICAgIG1lYXN1cmVcclxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8V2F0Y2g+fVxyXG4gICAgICovXHJcbiAgICBUd0FQSVNlcnZpY2UucHJvdG90eXBlLnVwZGF0ZU1lYXN1cmUgPSBmdW5jdGlvbiAod2F0Y2gsIG1lYXN1cmUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwibWVhc3VyZXNcIiwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBtZWFzdXJlSWQ6IG1lYXN1cmUuaWQsXHJcbiAgICAgICAgICAgIHJlZmVyZW5jZVRpbWU6IG1lYXN1cmUuYWNjdXJhY3lSZWZlcmVuY2VUaW1lLFxyXG4gICAgICAgICAgICB1c2VyVGltZTogbWVhc3VyZS5hY2N1cmFjeVVzZXJUaW1lXHJcbiAgICAgICAgfSksIFR3QVBJU2VydmljZS5vcHRpb25zKS50b1Byb21pc2UoKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdNRUFTVVJFJywgJ1NFQ09ORCcpO1xyXG4gICAgICAgICAgICB2YXIganNvbiA9IHJlc3BvbnNlLmpzb24oKS5yZXN1bHQ7XHJcbiAgICAgICAgICAgIG1lYXN1cmUuYWRkQWNjdXJhY3koanNvbi5hY2N1cmFjeSwganNvbi5hY2N1cmFjeUFnZSwganNvbi5wZXJjZW50aWxlKTtcclxuICAgICAgICAgICAgd2F0Y2gudXBzZXJ0TWVhc3VyZShtZWFzdXJlKTtcclxuICAgICAgICAgICAgd2F0Y2gubmV4dCA9IFdhdGNoQWN0aW9uLk1lYXN1cmU7XHJcbiAgICAgICAgICAgIHJldHVybiB3YXRjaDtcclxuICAgICAgICB9KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEluc2VydCBhIG1lYXN1cmUgYW5kIHRoZSB3YXRjaCBpdCBiZWxvbmdzIHRvXHJcbiAgICAgKiBAcGFyYW0gIHtXYXRjaH0gICAgICAgICAgd2F0Y2hcclxuICAgICAqIEBwYXJhbSAge01lYXN1cmV9ICAgICAgICBtZWFzdXJlXHJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFdhdGNoPn1cclxuICAgICAqL1xyXG4gICAgVHdBUElTZXJ2aWNlLnByb3RvdHlwZS5pbnNlcnRNZWFzdXJlID0gZnVuY3Rpb24gKHdhdGNoLCBtZWFzdXJlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJtZWFzdXJlc1wiLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHdhdGNoSWQ6IHdhdGNoLmlkLFxyXG4gICAgICAgICAgICByZWZlcmVuY2VUaW1lOiBtZWFzdXJlLm1lYXN1cmVSZWZlcmVuY2VUaW1lLFxyXG4gICAgICAgICAgICB1c2VyVGltZTogbWVhc3VyZS5tZWFzdXJlVXNlclRpbWVcclxuICAgICAgICB9KSwgVHdBUElTZXJ2aWNlLm9wdGlvbnMpLnRvUHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ01FQVNVUkUnLCAnRklSU1QnKTtcclxuICAgICAgICAgICAgbWVhc3VyZS5pZCA9IHJlc3BvbnNlLmpzb24oKS5tZWFzdXJlSWQ7XHJcbiAgICAgICAgICAgIHdhdGNoLm1lYXN1cmVzLnB1c2gobWVhc3VyZSk7XHJcbiAgICAgICAgICAgIHdhdGNoLmhpc3RvcnlTaXplKys7XHJcbiAgICAgICAgICAgIHJldHVybiB3YXRjaDtcclxuICAgICAgICB9KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEluc2VydCBhIHdhdGNoXHJcbiAgICAgKiBAcGFyYW0gIHtXYXRjaH0gICAgICAgICAgd2F0Y2hcclxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8V2F0Y2g+fVxyXG4gICAgICovXHJcbiAgICBUd0FQSVNlcnZpY2UucHJvdG90eXBlLmluc2VydFdhdGNoID0gZnVuY3Rpb24gKHdhdGNoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJ3YXRjaGVzXCIsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgYnJhbmQ6IHdhdGNoLmJyYW5kLFxyXG4gICAgICAgICAgICBuYW1lOiB3YXRjaC5uYW1lLFxyXG4gICAgICAgICAgICB5ZWFyT2ZCdXk6IHdhdGNoLnllYXJPZkJ1eSxcclxuICAgICAgICAgICAgc2VyaWFsOiB3YXRjaC5zZXJpYWwsXHJcbiAgICAgICAgICAgIGNhbGliZXI6IHdhdGNoLmNhbGliZXJcclxuICAgICAgICB9KSwgVHdBUElTZXJ2aWNlLm9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gTW9kZWxGYWN0b3J5LmJ1aWxkV2F0Y2gocmVzLmpzb24oKS5pZCwgd2F0Y2guYnJhbmQsIHdhdGNoLm5hbWUsIHdhdGNoLnllYXJPZkJ1eSwgd2F0Y2guc2VyaWFsLCB3YXRjaC5jYWxpYmVyKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIGEgd2F0Y2hcclxuICAgICAqIEBwYXJhbSAge1dhdGNofSAgICAgICAgICB3YXRjaFxyXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxXYXRjaD59XHJcbiAgICAgKi9cclxuICAgIFR3QVBJU2VydmljZS5wcm90b3R5cGUudXBkYXRlV2F0Y2ggPSBmdW5jdGlvbiAod2F0Y2gpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwid2F0Y2hlc1wiLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGlkOiB3YXRjaC5pZCxcclxuICAgICAgICAgICAgYnJhbmQ6IHdhdGNoLmJyYW5kLFxyXG4gICAgICAgICAgICBuYW1lOiB3YXRjaC5uYW1lLFxyXG4gICAgICAgICAgICB5ZWFyT2ZCdXk6IHdhdGNoLnllYXJPZkJ1eSxcclxuICAgICAgICAgICAgc2VyaWFsOiB3YXRjaC5zZXJpYWwsXHJcbiAgICAgICAgICAgIGNhbGliZXI6IHdhdGNoLmNhbGliZXJcclxuICAgICAgICB9KSwgVHdBUElTZXJ2aWNlLm9wdGlvbnMpLnRvUHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ1dBVENIJywgJ1VQREFURScpO1xyXG4gICAgICAgICAgICByZXR1cm4gd2F0Y2g7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBMb2cgZXJyb3IgdG8gY29uc29sZVxyXG4gICAgICogQHBhcmFtIHthbnl9IGVycm9yIFtkZXNjcmlwdGlvbl1cclxuICAgICAqL1xyXG4gICAgVHdBUElTZXJ2aWNlLnByb3RvdHlwZS5oYW5kbGVFcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkJywgZXJyb3IgfHwgXCJwbG9wXCIpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEFsbCB0aGUgSFRUUCBjb2RlIHVzZWQgYnkgdGhlIHRvb2x3YXRjaCBBUEkgYXJlIGRlZmluZWQgaGVyZS5cclxuICAgICAqIEh0dHAgY29kZXMgY2FuIGJlIHRvIHJlZmluZSB0aGUgZXJyb3IgdHlwZXNcclxuICAgICAqL1xyXG4gICAgVHdBUElTZXJ2aWNlLkhUVFBfQ09OVElOVUUgPSAxMDA7XHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9TV0lUQ0hJTkdfUFJPVE9DT0xTID0gMTAxO1xyXG4gICAgVHdBUElTZXJ2aWNlLkhUVFBfUFJPQ0VTU0lORyA9IDEwMjsgLy8gUkZDMjUxOFxyXG4gICAgLy8gU3VjY2Vzc1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmVxdWVzdCBoYXMgc3VjY2VlZGVkXHJcbiAgICAgKi9cclxuICAgIFR3QVBJU2VydmljZS5IVFRQX09LID0gMjAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2VydmVyIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIGEgbmV3IHJlc291cmNlXHJcbiAgICAgKi9cclxuICAgIFR3QVBJU2VydmljZS5IVFRQX0NSRUFURUQgPSAyMDE7XHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9BQ0NFUFRFRCA9IDIwMjtcclxuICAgIFR3QVBJU2VydmljZS5IVFRQX05PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OID0gMjAzO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2VydmVyIHN1Y2Nlc3NmdWxseSBwcm9jZXNzZWQgdGhlIHJlcXVlc3QsIHRob3VnaCBubyBjb250ZW50IGlzIHJldHVybmVkXHJcbiAgICAgKi9cclxuICAgIFR3QVBJU2VydmljZS5IVFRQX05PX0NPTlRFTlQgPSAyMDQ7XHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9SRVNFVF9DT05URU5UID0gMjA1O1xyXG4gICAgVHdBUElTZXJ2aWNlLkhUVFBfUEFSVElBTF9DT05URU5UID0gMjA2O1xyXG4gICAgVHdBUElTZXJ2aWNlLkhUVFBfTVVMVElfU1RBVFVTID0gMjA3OyAvLyBSRkM0OTE4XHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9BTFJFQURZX1JFUE9SVEVEID0gMjA4OyAvLyBSRkM1ODQyXHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9JTV9VU0VEID0gMjI2OyAvLyBSRkMzMjI5XHJcbiAgICAvLyBSZWRpcmVjdGlvblxyXG4gICAgVHdBUElTZXJ2aWNlLkhUVFBfTVVMVElQTEVfQ0hPSUNFUyA9IDMwMDtcclxuICAgIFR3QVBJU2VydmljZS5IVFRQX01PVkVEX1BFUk1BTkVOVExZID0gMzAxO1xyXG4gICAgVHdBUElTZXJ2aWNlLkhUVFBfRk9VTkQgPSAzMDI7XHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9TRUVfT1RIRVIgPSAzMDM7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSByZXNvdXJjZSBoYXMgbm90IGJlZW4gbW9kaWZpZWQgc2luY2UgdGhlIGxhc3QgcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9OT1RfTU9ESUZJRUQgPSAzMDQ7XHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9VU0VfUFJPWFkgPSAzMDU7XHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9SRVNFUlZFRCA9IDMwNjtcclxuICAgIFR3QVBJU2VydmljZS5IVFRQX1RFTVBPUkFSWV9SRURJUkVDVCA9IDMwNztcclxuICAgIFR3QVBJU2VydmljZS5IVFRQX1BFUk1BTkVOVExZX1JFRElSRUNUID0gMzA4OyAvLyBSRkM3MjM4XHJcbiAgICAvLyBDbGllbnQgRXJyb3JcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJlcXVlc3QgY2Fubm90IGJlIGZ1bGZpbGxlZCBkdWUgdG8gbXVsdGlwbGUgZXJyb3JzXHJcbiAgICAgKi9cclxuICAgIFR3QVBJU2VydmljZS5IVFRQX0JBRF9SRVFVRVNUID0gNDAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdXNlciBpcyB1bmF1dGhvcml6ZWQgdG8gYWNjZXNzIHRoZSByZXF1ZXN0ZWQgcmVzb3VyY2VcclxuICAgICAqL1xyXG4gICAgVHdBUElTZXJ2aWNlLkhUVFBfVU5BVVRIT1JJWkVEID0gNDAxO1xyXG4gICAgVHdBUElTZXJ2aWNlLkhUVFBfUEFZTUVOVF9SRVFVSVJFRCA9IDQwMjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJlcXVlc3RlZCByZXNvdXJjZSBpcyB1bmF2YWlsYWJsZSBhdCB0aGlzIHByZXNlbnQgdGltZVxyXG4gICAgICovXHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9GT1JCSURERU4gPSA0MDM7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgY291bGQgbm90IGJlIGZvdW5kXHJcbiAgICAgKlxyXG4gICAgICogTm90ZTogVGhpcyBpcyBzb21ldGltZXMgdXNlZCB0byBtYXNrIGlmIHRoZXJlIHdhcyBhbiBVTkFVVEhPUklaRUQgKDQwMSkgb3JcclxuICAgICAqIEZPUkJJRERFTiAoNDAzKSBlcnJvciwgZm9yIHNlY3VyaXR5IHJlYXNvbnNcclxuICAgICAqL1xyXG4gICAgVHdBUElTZXJ2aWNlLkhUVFBfTk9UX0ZPVU5EID0gNDA0O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmVxdWVzdCBtZXRob2QgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgZm9sbG93aW5nIHJlc291cmNlXHJcbiAgICAgKi9cclxuICAgIFR3QVBJU2VydmljZS5IVFRQX01FVEhPRF9OT1RfQUxMT1dFRCA9IDQwNTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJlcXVlc3Qgd2FzIG5vdCBhY2NlcHRhYmxlXHJcbiAgICAgKi9cclxuICAgIFR3QVBJU2VydmljZS5IVFRQX05PVF9BQ0NFUFRBQkxFID0gNDA2O1xyXG4gICAgVHdBUElTZXJ2aWNlLkhUVFBfUFJPWFlfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQgPSA0MDc7XHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9SRVFVRVNUX1RJTUVPVVQgPSA0MDg7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSBjb21wbGV0ZWQgZHVlIHRvIGEgY29uZmxpY3Qgd2l0aCB0aGUgY3VycmVudCBzdGF0ZVxyXG4gICAgICogb2YgdGhlIHJlc291cmNlXHJcbiAgICAgKi9cclxuICAgIFR3QVBJU2VydmljZS5IVFRQX0NPTkZMSUNUID0gNDA5O1xyXG4gICAgVHdBUElTZXJ2aWNlLkhUVFBfR09ORSA9IDQxMDtcclxuICAgIFR3QVBJU2VydmljZS5IVFRQX0xFTkdUSF9SRVFVSVJFRCA9IDQxMTtcclxuICAgIFR3QVBJU2VydmljZS5IVFRQX1BSRUNPTkRJVElPTl9GQUlMRUQgPSA0MTI7XHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9SRVFVRVNUX0VOVElUWV9UT09fTEFSR0UgPSA0MTM7XHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9SRVFVRVNUX1VSSV9UT09fTE9ORyA9IDQxNDtcclxuICAgIFR3QVBJU2VydmljZS5IVFRQX1VOU1VQUE9SVEVEX01FRElBX1RZUEUgPSA0MTU7XHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9SRVFVRVNURURfUkFOR0VfTk9UX1NBVElTRklBQkxFID0gNDE2O1xyXG4gICAgVHdBUElTZXJ2aWNlLkhUVFBfRVhQRUNUQVRJT05fRkFJTEVEID0gNDE3O1xyXG4gICAgVHdBUElTZXJ2aWNlLkhUVFBfSV9BTV9BX1RFQVBPVCA9IDQxODsgLy8gUkZDMjMyNFxyXG4gICAgVHdBUElTZXJ2aWNlLkhUVFBfVU5QUk9DRVNTQUJMRV9FTlRJVFkgPSA0MjI7IC8vIFJGQzQ5MThcclxuICAgIFR3QVBJU2VydmljZS5IVFRQX0xPQ0tFRCA9IDQyMzsgLy8gUkZDNDkxOFxyXG4gICAgVHdBUElTZXJ2aWNlLkhUVFBfRkFJTEVEX0RFUEVOREVOQ1kgPSA0MjQ7IC8vIFJGQzQ5MThcclxuICAgIFR3QVBJU2VydmljZS5IVFRQX1JFU0VSVkVEX0ZPUl9XRUJEQVZfQURWQU5DRURfQ09MTEVDVElPTlNfRVhQSVJFRF9QUk9QT1NBTCA9IDQyNTsgLy8gUkZDMjgxN1xyXG4gICAgVHdBUElTZXJ2aWNlLkhUVFBfVVBHUkFERV9SRVFVSVJFRCA9IDQyNjsgLy8gUkZDMjgxN1xyXG4gICAgVHdBUElTZXJ2aWNlLkhUVFBfUFJFQ09ORElUSU9OX1JFUVVJUkVEID0gNDI4OyAvLyBSRkM2NTg1XHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9UT09fTUFOWV9SRVFVRVNUUyA9IDQyOTsgLy8gUkZDNjU4NVxyXG4gICAgVHdBUElTZXJ2aWNlLkhUVFBfUkVRVUVTVF9IRUFERVJfRklFTERTX1RPT19MQVJHRSA9IDQzMTsgLy8gUkZDNjU4NVxyXG4gICAgLy8gU2VydmVyIEVycm9yXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzZXJ2ZXIgZW5jb3VudGVyZWQgYW4gdW5leHBlY3RlZCBlcnJvclxyXG4gICAgICpcclxuICAgICAqIE5vdGU6IFRoaXMgaXMgYSBnZW5lcmljIGVycm9yIG1lc3NhZ2Ugd2hlbiBubyBzcGVjaWZpYyBtZXNzYWdlXHJcbiAgICAgKiBpcyBzdWl0YWJsZVxyXG4gICAgICovXHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9JTlRFUk5BTF9TRVJWRVJfRVJST1IgPSA1MDA7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzZXJ2ZXIgZG9lcyBub3QgcmVjb2duaXNlIHRoZSByZXF1ZXN0IG1ldGhvZFxyXG4gICAgICovXHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9OT1RfSU1QTEVNRU5URUQgPSA1MDE7XHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9CQURfR0FURVdBWSA9IDUwMjtcclxuICAgIFR3QVBJU2VydmljZS5IVFRQX1NFUlZJQ0VfVU5BVkFJTEFCTEUgPSA1MDM7XHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9HQVRFV0FZX1RJTUVPVVQgPSA1MDQ7XHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURUQgPSA1MDU7XHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9WQVJJQU5UX0FMU09fTkVHT1RJQVRFU19FWFBFUklNRU5UQUwgPSA1MDY7IC8vIFJGQzIyOTVcclxuICAgIFR3QVBJU2VydmljZS5IVFRQX0lOU1VGRklDSUVOVF9TVE9SQUdFID0gNTA3OyAvLyBSRkM0OTE4XHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9MT09QX0RFVEVDVEVEID0gNTA4OyAvLyBSRkM1ODQyXHJcbiAgICBUd0FQSVNlcnZpY2UuSFRUUF9OT1RfRVhURU5ERUQgPSA1MTA7IC8vIFJGQzI3NzRcclxuICAgIFR3QVBJU2VydmljZS5IVFRQX05FVFdPUktfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQgPSA1MTE7XHJcbiAgICAvL0RlZmluZXMgaGVhZGVycyBhbmQgcmVxdWVzdCBvcHRpb25zXHJcbiAgICBUd0FQSVNlcnZpY2UuaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgIFR3QVBJU2VydmljZS5vcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogVHdBUElTZXJ2aWNlLmhlYWRlcnMgfSk7XHJcbiAgICAvLyBSZWdyZXNzaW9uIFJDNS4gRG9lc24ndCBhY2NlcHQgZ2V0IHdpdGhvdXQgYm9keVxyXG4gICAgVHdBUElTZXJ2aWNlLm9wdGlvbnNHZXQgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBUd0FQSVNlcnZpY2UuaGVhZGVycywgYm9keTogXCJcIiB9KTtcclxuICAgIFR3QVBJU2VydmljZS5iYXNlVXJsID0gXCJodHRwczovL3Rvb2x3YXRjaC5pby9hcGkvXCI7XHJcbiAgICBUd0FQSVNlcnZpY2UuYXNzZXRzVXJsID0gXCJhcHAvYXNzZXRzXCI7XHJcbiAgICBUd0FQSVNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBJbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW0h0dHBdKVxyXG4gICAgXSwgVHdBUElTZXJ2aWNlKTtcclxuICAgIHJldHVybiBUd0FQSVNlcnZpY2U7XHJcbn0oKSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NlcnZpY2VzL3R3YXBpLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5leHBvcnQgdmFyIE1vb25QaGFzZXNDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTW9vblBoYXNlc0NvbXBvbmVudChlbGVtZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcclxuICAgICAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBsYXN0RnVsbE1vb24gPSBuZXcgRGF0ZSgyMDE2LCAxMCwgMTQsIDEyLCAwLCAwLCAwKTtcclxuICAgICAgICB2YXIgZGlmZkRheXMgPSBNYXRoLnJvdW5kKE1hdGguYWJzKCh0b2RheS5nZXRUaW1lKCkgLSBsYXN0RnVsbE1vb24uZ2V0VGltZSgpKSAvICgyNCAqIDYwICogNjAgKiAxMDAwKSkpO1xyXG4gICAgICAgIHRoaXMuYW5nbGVNb29uID0gZGlmZkRheXMgKiA2LjEwMTY5NDkxNTI1NDtcclxuICAgIH1cclxuICAgIE1vb25QaGFzZXNDb21wb25lbnQucHJvdG90eXBlLm5nQWZ0ZXJWaWV3SW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWxlbSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29uLWRpc3F1ZScpO1xyXG4gICAgICAgIGVsZW0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ3JvdGF0ZVooJyArIHRoaXMuYW5nbGVNb29uICsgJ2RlZyknO1xyXG4gICAgICAgIGVsZW0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVooJyArIHRoaXMuYW5nbGVNb29uICsgJ2RlZyknO1xyXG4gICAgfTtcclxuICAgIE1vb25QaGFzZXNDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIE1vb25QaGFzZXNDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBDb21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ21vb24tcGhhc2VzJyxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IFwiPGRpdiBjbGFzcz1cXFwibW9vbi1waGFzZS1jb250YWluZXJcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcIm1vb24tbWFza1xcXCI+PC9kaXY+XFxuXFx0PGRpdiBjbGFzcz1cXFwibW9vbi1kaXNxdWVcXFwiPjwvZGl2PlxcbjwvZGl2PlxcblwiXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW0VsZW1lbnRSZWZdKVxyXG4gICAgXSwgTW9vblBoYXNlc0NvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gTW9vblBoYXNlc0NvbXBvbmVudDtcclxufSgpKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGlyZWN0aXZlcy9jbG9jay9tb29uLXBoYXNlcy9tb29uLXBoYXNlcy5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHZhciBHbG9iYWxWYWxpZGF0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2xvYmFsVmFsaWRhdG9yKCkge1xyXG4gICAgfVxyXG4gICAgR2xvYmFsVmFsaWRhdG9yLm1haWxGb3JtYXQgPSBmdW5jdGlvbiAoY29udHJvbCkge1xyXG4gICAgICAgIHZhciBFTUFJTF9SRUdFWFAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQvaTtcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSAhPSBcIlwiICYmIChjb250cm9sLnZhbHVlLmxlbmd0aCA8PSA1IHx8ICFFTUFJTF9SRUdFWFAudGVzdChjb250cm9sLnZhbHVlKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgXCJpbmNvcnJlY3RNYWlsRm9ybWF0XCI6IHRydWUgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgR2xvYmFsVmFsaWRhdG9yLm1hdGNoID0gZnVuY3Rpb24gKGdyb3VwLCBmcm9tLCBkaXN0YW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZ3JvdXApO1xyXG4gICAgICAgIGlmIChncm91cCAmJiBncm91cC5jb250cm9sc1tmcm9tXS52YWx1ZSAhPSBncm91cC5jb250cm9sc1tmcm9tXS52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBcIm5vTWF0Y2hcIjogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2xvYmFsVmFsaWRhdG9yO1xyXG59KCkpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kaXJlY3RpdmVzL2dsb2JhbC12YWxpZGF0b3IudHNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHZhciBCbG9nUG9zdCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCbG9nUG9zdChpZCwgdGl0bGUsIGRhdGUsIGV4Y2VycHQsIHVybCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQmxvZ1Bvc3QgKGlkOiBcIiArIF90aGlzLmlkICsgXCIsXFxuXFx0XFx0XFx0XFx0dGl0bGU6IFwiICsgX3RoaXMudGl0bGUgKyBcIixcXG5cXHRcXHRcXHRcXHRkYXRlOiBcIiArIF90aGlzLmRhdGUgKyBcIixcXG5cXHRcXHRcXHRcXHRleGNlcnB0OiBcIiArIF90aGlzLmV4Y2VycHQgKyBcIixcXG5cXHRcXHRcXHRcXHR1cmw6IFwiICsgX3RoaXMudXJsICsgXCIpXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMuZGVjb2RlSFRNTEVudGl0aWVzKHRpdGxlKTtcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMuZXhjZXJwdCA9IHRoaXMuZGVjb2RlSFRNTEVudGl0aWVzKGV4Y2VycHQpO1xyXG4gICAgICAgIFN0cmluZy5mcm9tQ2hhckNvZGU7XHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB9XHJcbiAgICBCbG9nUG9zdC5wcm90b3R5cGUuZGVjb2RlSFRNTEVudGl0aWVzID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgICAgIHZhciB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLzxzY3JpcHRbXj5dKj4oW1xcU1xcc10qPyk8XFwvc2NyaXB0Pi9nbWksICcnKTtcclxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgvPFxcLz9cXHcoPzpbXlwiJz5dfFwiW15cIl0qXCJ8J1teJ10qJykqPi9nbWksICcnKTtcclxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgnW1JlYWQgbW9yZeKApl0nLCAnJyk7XHJcbiAgICAgICAgdHh0LmlubmVySFRNTCA9IHN0cjtcclxuICAgICAgICByZXR1cm4gdHh0LnZhbHVlO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCbG9nUG9zdDtcclxufSgpKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kZWxzL2Jsb2ctcG9zdC5tb2RlbC50c1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgdmFyIFVzZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVXNlcihpZCwgZW1haWwsIG5hbWUsIGxhc3RuYW1lLCBjb3VudHJ5LCByZWdpc3RlckRhdGUsIGtleSwgd2F0Y2hlcykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy53YXRjaGVzID0gW107XHJcbiAgICAgICAgdGhpcy5lbWFpbFByZWZlcmVuY2VzID0gRW1haWxQcmVmZXJlbmNlcy5Ob25lO1xyXG4gICAgICAgIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlVzZXIgKFxcblxcdFxcdFxcdGlkOiBcIiArIF90aGlzLmlkICsgXCIsIFxcblxcdFxcdFxcdGVtYWlsOiBcIiArIF90aGlzLmVtYWlsICsgXCIsIFxcblxcdFxcdFxcdG5hbWU6IFwiICsgX3RoaXMubmFtZSArIFwiLCBcXG5cXHRcXHRcXHRsYXN0bmFtZTogXCIgKyBfdGhpcy5sYXN0bmFtZSArIFwiLCBcXG5cXHRcXHRcXHRjb3VudHJ5OiBcIiArIF90aGlzLmNvdW50cnkgKyBcIiwgXFxuXFx0XFx0XFx0cmVnaXN0ZXJEYXRlOiBcIiArIF90aGlzLnJlZ2lzdGVyRGF0ZSArIFwiLCBcXG5cXHRcXHRcXHRrZXk6IFwiICsgX3RoaXMua2V5ICsgXCIsIFxcblxcdFxcdFxcdHdhdGNoZXM6IFwiICsgX3RoaXMud2F0Y2hlcyArIFwiKVwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBlbWFpbDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubGFzdG5hbWUgPSBsYXN0bmFtZTtcclxuICAgICAgICB0aGlzLmNvdW50cnkgPSBjb3VudHJ5O1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJEYXRlID0gcmVnaXN0ZXJEYXRlO1xyXG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xyXG4gICAgICAgIHRoaXMud2F0Y2hlcyA9IHdhdGNoZXM7XHJcbiAgICB9XHJcbiAgICBVc2VyLnByb3RvdHlwZS51cHNlcnRXYXRjaCA9IGZ1bmN0aW9uICh3YXRjaCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy53YXRjaGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndhdGNoZXNbaV0uaWQgPT0gd2F0Y2guaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2F0Y2hlc1tpXSA9IHdhdGNoO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2F0Y2hlcy5wdXNoKHdhdGNoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVXNlcjtcclxufSgpKTtcclxuZXhwb3J0IHZhciBFbWFpbFByZWZlcmVuY2VzO1xyXG4oZnVuY3Rpb24gKEVtYWlsUHJlZmVyZW5jZXMpIHtcclxuICAgIEVtYWlsUHJlZmVyZW5jZXNbRW1haWxQcmVmZXJlbmNlc1tcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xyXG4gICAgRW1haWxQcmVmZXJlbmNlc1tFbWFpbFByZWZlcmVuY2VzW1wiRmlyc3RXYXRjaFwiXSA9IDJdID0gXCJGaXJzdFdhdGNoXCI7XHJcbiAgICBFbWFpbFByZWZlcmVuY2VzW0VtYWlsUHJlZmVyZW5jZXNbXCJGaXJzdE1lYXN1cmVcIl0gPSA0XSA9IFwiRmlyc3RNZWFzdXJlXCI7XHJcbiAgICBFbWFpbFByZWZlcmVuY2VzW0VtYWlsUHJlZmVyZW5jZXNbXCJEYXlBY2N1cmFjeVwiXSA9IDhdID0gXCJEYXlBY2N1cmFjeVwiO1xyXG4gICAgRW1haWxQcmVmZXJlbmNlc1tFbWFpbFByZWZlcmVuY2VzW1wiV2Vla0FjY3VyYWN5XCJdID0gMTZdID0gXCJXZWVrQWNjdXJhY3lcIjtcclxuICAgIEVtYWlsUHJlZmVyZW5jZXNbRW1haWxQcmVmZXJlbmNlc1tcIlJlc3VsdFwiXSA9IDMyXSA9IFwiUmVzdWx0XCI7XHJcbiAgICBFbWFpbFByZWZlcmVuY2VzW0VtYWlsUHJlZmVyZW5jZXNbXCJOZXdNZWFzdXJlXCJdID0gNjRdID0gXCJOZXdNZWFzdXJlXCI7XHJcbiAgICBFbWFpbFByZWZlcmVuY2VzW0VtYWlsUHJlZmVyZW5jZXNbXCJTZWNvbmRXYXRjaFwiXSA9IDEyOF0gPSBcIlNlY29uZFdhdGNoXCI7XHJcbiAgICBFbWFpbFByZWZlcmVuY2VzW0VtYWlsUHJlZmVyZW5jZXNbXCJDb21lYmFja1wiXSA9IDI1Nl0gPSBcIkNvbWViYWNrXCI7XHJcbiAgICBFbWFpbFByZWZlcmVuY2VzW0VtYWlsUHJlZmVyZW5jZXNbXCJXYXRjaFN0b3JpZXNcIl0gPSA1MTJdID0gXCJXYXRjaFN0b3JpZXNcIjtcclxufSkoRW1haWxQcmVmZXJlbmNlcyB8fCAoRW1haWxQcmVmZXJlbmNlcyA9IHt9KSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZGVscy91c2VyLm1vZGVsLnRzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5pbXBvcnQgeyBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmV4cG9ydCB2YXIgQXJldGhtZXRpY1NpZ24gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXJldGhtZXRpY1NpZ24oKSB7XHJcbiAgICB9XHJcbiAgICBBcmV0aG1ldGljU2lnbi5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiK1wiICsgdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQXJldGhtZXRpY1NpZ24gPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBQaXBlKHtcclxuICAgICAgICAgICAgbmFtZTogJ2FyZXRobWV0aWNTaWduJ1xyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxyXG4gICAgXSwgQXJldGhtZXRpY1NpZ24pO1xyXG4gICAgcmV0dXJuIEFyZXRobWV0aWNTaWduO1xyXG59KCkpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9waXBlcy9hcmV0aG1ldGljLXNpZ24ucGlwZS50c1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbmltcG9ydCB7IFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuZXhwb3J0IHZhciBLRm9ybWF0dGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEtGb3JtYXR0ZXIoKSB7XHJcbiAgICB9XHJcbiAgICAvL3dlIGV4cGVjdCBhIHNpZ25lZCBudW1iZXIgKGkuZSArMi43KVxyXG4gICAgS0Zvcm1hdHRlci5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHNpZ24gPSB2YWx1ZS5jaGFyQXQoMCk7XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMSk7XHJcbiAgICAgICAgdmFyIG51bWJlciA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKG51bWJlcikgPiA5OTkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNpZ24gKyAobnVtYmVyIC8gMTAwMCkudG9GaXhlZCgwKSArICdrJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMobnVtYmVyKSA+IDEwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2lnbiArIG51bWJlci50b0ZpeGVkKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNpZ24gKyBudW1iZXIudG9GaXhlZCgxKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgS0Zvcm1hdHRlciA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIFBpcGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAna0Zvcm1hdHRlcidcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIEtGb3JtYXR0ZXIpO1xyXG4gICAgcmV0dXJuIEtGb3JtYXR0ZXI7XHJcbn0oKSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3BpcGVzL2stZm9ybWF0dGVyLnBpcGUudHNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5pbXBvcnQgeyBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmV4cG9ydCB2YXIgTGVhZGluZ1plcm8gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTGVhZGluZ1plcm8oKSB7XHJcbiAgICB9XHJcbiAgICBMZWFkaW5nWmVyby5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMTApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiMFwiICsgdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTGVhZGluZ1plcm8gPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBQaXBlKHtcclxuICAgICAgICAgICAgbmFtZTogJ2xlYWRpbmdaZXJvJ1xyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxyXG4gICAgXSwgTGVhZGluZ1plcm8pO1xyXG4gICAgcmV0dXJuIExlYWRpbmdaZXJvO1xyXG59KCkpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9waXBlcy9sZWFkaW5nLXplcm8ucGlwZS50c1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEzX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQXJldGhtZXRpY1NpZ24gfSBmcm9tICcuL3NyYy9waXBlcy9hcmV0aG1ldGljLXNpZ24ucGlwZSc7XHJcbmltcG9ydCB7IExlYWRpbmdaZXJvIH0gZnJvbSAnLi9zcmMvcGlwZXMvbGVhZGluZy16ZXJvLnBpcGUnO1xyXG5pbXBvcnQgeyBLRm9ybWF0dGVyIH0gZnJvbSAnLi9zcmMvcGlwZXMvay1mb3JtYXR0ZXIucGlwZSc7XHJcbmltcG9ydCB7IE1vb25QaGFzZXNDb21wb25lbnQgfSBmcm9tICcuL3NyYy9kaXJlY3RpdmVzL2Nsb2NrL21vb24tcGhhc2VzL21vb24tcGhhc2VzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFR3QVBJU2VydmljZSB9IGZyb20gJy4vc3JjL3NlcnZpY2VzL3R3YXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHQVNlcnZpY2UgfSBmcm9tICcuL3NyYy9zZXJ2aWNlcy9nYS5zZXJ2aWNlJztcclxuLyoqXHJcbiAqIFNFUlZJQ0VTXHJcbiAqL1xyXG5leHBvcnQgKiBmcm9tICcuL3NyYy9zZXJ2aWNlcy90d2FwaS5zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9zcmMvc2VydmljZXMvZ2Euc2VydmljZSc7XHJcbi8qKlxyXG4gKiBQSVBFU1xyXG4gKi9cclxuZXhwb3J0ICogZnJvbSAnLi9zcmMvcGlwZXMvYXJldGhtZXRpYy1zaWduLnBpcGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NyYy9waXBlcy9sZWFkaW5nLXplcm8ucGlwZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3BpcGVzL2stZm9ybWF0dGVyLnBpcGUnO1xyXG4vKipcclxuICogTU9ERUxcclxuICovXHJcbmV4cG9ydCAqIGZyb20gJy4vc3JjL21vZGVscy93YXRjaC5tb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3JjL21vZGVscy91c2VyLm1vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi9zcmMvbW9kZWxzL21lYXN1cmUubW9kZWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NyYy9tb2RlbHMvYmxvZy1wb3N0Lm1vZGVsJztcclxuLyoqXHJcbiAqIERJUkVDVElWRVNcclxuICovXHJcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RpcmVjdGl2ZXMvY2xvY2svY2xvY2suY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9zcmMvZGlyZWN0aXZlcy9jbG9jay9tb29uLXBoYXNlcy9tb29uLXBoYXNlcy5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kaXJlY3RpdmVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RpcmVjdGl2ZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kaXJlY3RpdmVzL3dhdGNoL3dhdGNoLmNvbXBvbmVudCc7XHJcbmV4cG9ydCB2YXIgVHdDb3JlTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFR3Q29yZU1vZHVsZSgpIHtcclxuICAgIH1cclxuICAgIFR3Q29yZU1vZHVsZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIE5nTW9kdWxlKHtcclxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICBBcmV0aG1ldGljU2lnbixcclxuICAgICAgICAgICAgICAgIExlYWRpbmdaZXJvLFxyXG4gICAgICAgICAgICAgICAgS0Zvcm1hdHRlcixcclxuICAgICAgICAgICAgICAgIE1vb25QaGFzZXNDb21wb25lbnRcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICBUd0FQSVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2VcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZXhwb3J0czogW1xyXG4gICAgICAgICAgICAgICAgQXJldGhtZXRpY1NpZ24sXHJcbiAgICAgICAgICAgICAgICBMZWFkaW5nWmVybyxcclxuICAgICAgICAgICAgICAgIEtGb3JtYXR0ZXIsXHJcbiAgICAgICAgICAgICAgICBNb29uUGhhc2VzQ29tcG9uZW50XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAgICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBIdHRwTW9kdWxlXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHNjaGVtYXM6IFtcclxuICAgICAgICAgICAgICAgIENVU1RPTV9FTEVNRU5UU19TQ0hFTUFcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxyXG4gICAgXSwgVHdDb3JlTW9kdWxlKTtcclxuICAgIHJldHVybiBUd0NvcmVNb2R1bGU7XHJcbn0oKSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB2YXIgQ2xvY2tDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2xvY2tDb21wb25lbnQoZWxlbWVudFJlZikge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnRSZWY7XHJcbiAgICAgICAgdGhpcy5tb250aE5hbWVzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xyXG4gICAgICAgIHRoaXMuZGF5TmFtZXMgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddO1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGhpcy5tb250aCA9IHRoaXMubW9udGhOYW1lc1t0aGlzLmRhdGUuZ2V0TW9udGgoKV07XHJcbiAgICAgICAgdGhpcy5kYXkgPSB0aGlzLmRheU5hbWVzW3RoaXMuZGF0ZS5nZXREYXkoKV0gKyBcIiBcIiArIHRoaXMuZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgdGhpcy5uZXh0TGVhcCA9IHRoaXMuZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHdoaWxlICghdGhpcy5pc0xlYXBZZWFyKHRoaXMubmV4dExlYXApKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dExlYXArKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBDbG9ja0NvbXBvbmVudC5wcm90b3R5cGUuaXNMZWFwWWVhciA9IGZ1bmN0aW9uICh5ZWFyKSB7XHJcbiAgICAgICAgcmV0dXJuICgoeWVhciAlIDQgPT0gMCkgJiYgKHllYXIgJSAxMDAgIT0gMCkpIHx8ICh5ZWFyICUgNDAwID09IDApO1xyXG4gICAgfTtcclxuICAgIENsb2NrQ29tcG9uZW50LnByb3RvdHlwZS5pbml0TG9jYWxDbG9ja3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1pbGxpc2Vjb25kcyA9IHRoaXMuZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcclxuICAgICAgICB2YXIgc2Vjb25kcyA9IHRoaXMuZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSB0aGlzLmRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIHZhciBob3VycyA9IHRoaXMuZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICAgIC8vIENyZWF0ZSBhbiBvYmplY3Qgd2l0aCBlYWNoIGhhbmQgYW5kIGl0J3MgYW5nbGUgaW4gZGVncmVlc1xyXG4gICAgICAgIHZhciBoYW5kcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGFuZDogJ2hvdXJzJyxcclxuICAgICAgICAgICAgICAgIGFuZ2xlOiAoaG91cnMgKiAzMCkgKyAobWludXRlcyAvIDIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhhbmQ6ICdtaW51dGVzJyxcclxuICAgICAgICAgICAgICAgIGFuZ2xlOiAobWludXRlcyAqIDYpICsgKHNlY29uZHMgLyA2MCkgKiA2XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhhbmQ6ICdzZWNvbmRzJyxcclxuICAgICAgICAgICAgICAgIGFuZ2xlOiAoc2Vjb25kcyAqIDYpICsgKG1pbGxpc2Vjb25kcyAvIDEwMDApICogNlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICAvL0xvb3AgdGhyb3VnaCBlYWNoIG9mIHRoZXNlIGhhbmRzIHRvIHNldCB0aGVpciBhbmdsZVxyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaGFuZHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGhhbmRzW2pdLmhhbmQpO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdyb3RhdGVaKCcgKyBoYW5kc1tqXS5hbmdsZSArICdkZWcpJztcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWignICsgaGFuZHNbal0uYW5nbGUgKyAnZGVnKSc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIENsb2NrQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2xvY2tDb21wb25lbnQ7XHJcbn0oKSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RpcmVjdGl2ZXMvY2xvY2svY2xvY2suY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2xvYmFsVmFsaWRhdG9yIH0gZnJvbSAnLi8uLi9nbG9iYWwtdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgR0FTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9nYS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuLyoqXHJcbiAqIExvZ2luIGNvbXBvbmVudC4gUHJvdmlkZXMgYSBsb2dpbiBmb3JtIHdpdGggY29udHJvbGxlZCBhbmRcclxuICogZW1pdHMgYSBVc2VyICgkZXZlbnQgdXNlckxvZ2dlZCkgb24gc3VjY2Vzc2Z1bCBsb2dpbi5cclxuICovXHJcbmV4cG9ydCB2YXIgTG9naW5Db21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RvciB3LyBzZXJ2aWNlIGluamVjdGlvblxyXG4gICAgICogQHBhcmFtIHtUcmFuc2xhdGVTZXJ2aWNlfSBwcml2YXRlIHRyYW5zbGF0ZSBbZGVzY3JpcHRpb25dXHJcbiAgICAgKiBAcGFyYW0ge1R3QVBJU2VydmljZX0gICAgIHByaXZhdGUgdHdhcGkgICAgIFtkZXNjcmlwdGlvbl1cclxuICAgICAqIEBwYXJhbSB7Rm9ybUJ1aWxkZXJ9ICAgICAgcHJpdmF0ZSBidWlsZGVyICAgW2Rlc2NyaXB0aW9uXVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBMb2dpbkNvbXBvbmVudCh0cmFuc2xhdGUsIHR3YXBpLCBmb3JtQnVpbGRlcikge1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gdHJhbnNsYXRlO1xyXG4gICAgICAgIHRoaXMudHdhcGkgPSB0d2FwaTtcclxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXI7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnVzZXJMb2dnZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5sb2dpbkF0dGVtcHQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgLy9MYW5nIGRlZmluaXRpb25cclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZygnZW4nKTtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZS51c2UoJ2VuJyk7XHJcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgZW1haWw6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEdsb2JhbFZhbGlkYXRvci5tYWlsRm9ybWF0XSldLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNSldKV1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogTG9naW4gYW4gRkIgdXNlclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZiVXNlciBbZGVzY3JpcHRpb25dXHJcbiAgICAgKi9cclxuICAgIExvZ2luQ29tcG9uZW50LnByb3RvdHlwZS5vbkZiU3VibWl0ID0gZnVuY3Rpb24gKGZiVXNlcikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmxvZ2luQXR0ZW1wdC5lbWl0KHRydWUpO1xyXG4gICAgICAgIC8vVHJpZXMgdG8gbG9naW4gYW4gdXNlciB1c2luZyBoaXMgZmIgZW1haWxcclxuICAgICAgICB0aGlzLnR3YXBpLnNpZ251cEZhY2Vib29rKGZiVXNlci5lbWFpbCwgZmJVc2VyLnRva2VuLCBmYlVzZXIubGFzdG5hbWUsIGZiVXNlci5maXJzdG5hbWUpLnRoZW4oXHJcbiAgICAgICAgLy9zdWNjZXNzLCBhd2F5IHdlIGdvXHJcbiAgICAgICAgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy51c2VyTG9nZ2VkLmVtaXQocmVzKTtcclxuICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnRkJfTE9HSU4nLCAnU1VDQ0VTUycpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgLy9FcnJvciwgbW9zdCBsaWtlbHkgdGhlIHVzZXIgdHJpZXMgdG8gc2lnbmluXHJcbiAgICAgICAgICAgIC8vdXNpbmcgZmFjZWJvb2sgd2hpbGUgaGUgaGFzIGEgcmVndWxhciBcclxuICAgICAgICAgICAgLy9hY2NvdW50IHdpdGggdGhlIHNhbWUgZW1haWwuXHJcbiAgICAgICAgICAgIF90aGlzLmxvZ2luQXR0ZW1wdC5lbWl0KGZhbHNlKTtcclxuICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnRkJfU0lHTlVQJywgJ0ZBSUwnKTtcclxuICAgICAgICAgICAgc3dpdGNoIChlcnIuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMTpcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lcnJvcnMucHVzaCgnY3JlZGVudGlhbHMnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZXJyb3JzLnB1c2goJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmxvZ2luQXR0ZW1wdC5lbWl0KGZhbHNlKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEZvcm0gc3VibWl0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ319IHVzZXIgW2Rlc2NyaXB0aW9uXVxyXG4gICAgICovXHJcbiAgICBMb2dpbkNvbXBvbmVudC5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcclxuICAgICAgICAvL0Zvcm0gY29uc3RyYWludHMgYXJlIG9rXHJcbiAgICAgICAgaWYgKHRoaXMubG9naW5Gb3JtLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5BdHRlbXB0LmVtaXQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudHdhcGkubG9naW4odXNlci5lbWFpbCwgdXNlci5wYXNzd29yZCkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51c2VyTG9nZ2VkLmVtaXQocmVzKTtcclxuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQ1RBJywgJ0xPR0lOJywgJ1NVQ0NFU1MnKTtcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnTE9HSU4nLCAnRkFJTCcpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChlcnIuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0MDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVycm9ycy5wdXNoKCdjcmVkZW50aWFscycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lcnJvcnMucHVzaCgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luQXR0ZW1wdC5lbWl0KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTG9naW5Db21wb25lbnQucHJvdG90eXBlLm9uUGFzc3dvcmRSZXNldFN1Ym1pdCA9IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4gICAgICAgIHRoaXMudHdhcGkucmVzZXRQYXNzd29yZChlbWFpbCk7XHJcbiAgICB9O1xyXG4gICAgTG9naW5Db21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMb2dpbkNvbXBvbmVudDtcclxufSgpKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGlyZWN0aXZlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5pbXBvcnQgeyBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUd0FQSVNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3R3YXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHbG9iYWxWYWxpZGF0b3IgfSBmcm9tICcuLy4uL2dsb2JhbC12YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBHQVNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2dhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG4vKipcclxuICogU2lnbnVwIGZvcm0uIEVtaXRzIGEgdXNlckxvZ2dlZCBldmVudCBvbiBuZXcgdXNlciBzaWdudXBcclxuICovXHJcbmV4cG9ydCB2YXIgU2lnbnVwQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgKiBDb25zdHJ1Y3RvciB3LyBzZXJ2aWNlIGluamVjdGlvblxyXG4gICAgKiBAcGFyYW0ge1RyYW5zbGF0ZVNlcnZpY2V9IHByaXZhdGUgdHJhbnNsYXRlIFtkZXNjcmlwdGlvbl1cclxuICAgICogQHBhcmFtIHtUd0FQSVNlcnZpY2V9ICAgICBwcml2YXRlIHR3YXBpICAgICBbZGVzY3JpcHRpb25dXHJcbiAgICAqIEBwYXJhbSB7Rm9ybUJ1aWxkZXJ9ICAgICAgcHJpdmF0ZSBidWlsZGVyICAgW2Rlc2NyaXB0aW9uXVxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIFNpZ251cENvbXBvbmVudCh0cmFuc2xhdGUsIHR3YXBpLCBmb3JtQnVpbGRlcikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGUgPSB0cmFuc2xhdGU7XHJcbiAgICAgICAgdGhpcy50d2FwaSA9IHR3YXBpO1xyXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIgPSBmb3JtQnVpbGRlcjtcclxuICAgICAgICB0aGlzLnN1Ym1pdEF0dGVtcHQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5xdWVyeSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy51c2VyTG9nZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMuc2lnbnVwQXR0ZW1wdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICB0cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoJ2VuJyk7XHJcbiAgICAgICAgdHJhbnNsYXRlLnVzZSgnZW4nKTtcclxuICAgICAgICB0cmFuc2xhdGUuZ2V0KFwiY291bnRyaWVzXCIpLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIF90aGlzLmNvdW50cmllcyA9IHJlc3VsdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNpZ251cEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgZW1haWw6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEdsb2JhbFZhbGlkYXRvci5tYWlsRm9ybWF0XSldLFxyXG4gICAgICAgICAgICBlbWFpbFJlcGVhdDogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgR2xvYmFsVmFsaWRhdG9yLm1haWxGb3JtYXRdKV0sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KV0pXSxcclxuICAgICAgICAgICAgcGFzc3dvcmRSZXBlYXQ6IFtcIlwiLFxyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpXHJcbiAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogXCJcIixcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBjb3VudHJ5OiBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRyaW1zIHRoZSBmaWx0ZXJlZExpc3QgYWNjb3JpbmcgdG8gdGhlXHJcbiAgICAgKiBjb3VudHJ5IGZpZWxkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgW2Rlc2NyaXB0aW9uXVxyXG4gICAgICovXHJcbiAgICBTaWdudXBDb21wb25lbnQucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gdGhpcy5jb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQXNzaWduIHRoZSBjb3VudHJ5IGxhYmVsIHdoZW4gc2VsZWN0ZWRcclxuICAgICAqIGZyb20gdGhlIGxpc3RcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpdGVtIFtkZXNjcmlwdGlvbl1cclxuICAgICAqL1xyXG4gICAgU2lnbnVwQ29tcG9uZW50LnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHRoaXMucXVlcnkgPSBpdGVtO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gW107XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBzdWJtaXQgdGhlIGZvcm1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nICAgIH19IHVzZXIgW2Rlc2NyaXB0aW9uXVxyXG4gICAgICovXHJcbiAgICBTaWdudXBDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5zaWdudXBGb3JtLnZhbGlkICYmXHJcbiAgICAgICAgICAgIHVzZXIucGFzc3dvcmQgPT0gdXNlci5wYXNzd29yZFJlcGVhdCAmJlxyXG4gICAgICAgICAgICB1c2VyLmVtYWlsID09IHVzZXIuZW1haWxSZXBlYXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaWdudXBBdHRlbXB0LmVtaXQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudHdhcGkuc2lnbnVwKHVzZXIuZW1haWwsIHVzZXIucGFzc3dvcmQsIHVzZXIuZmlyc3ROYW1lLCB1c2VyLmxhc3ROYW1lLCB0aGlzLnF1ZXJ5KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQ1RBJywgJ1NJR05VUCcsICdTVUNDRVNTJyk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51c2VyTG9nZ2VkLmVtaXQocmVzKTtcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0NUQScsICdTSUdOVVAnLCAnRkFJTCcpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChlcnJvci5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFR3QVBJU2VydmljZS5IVFRQX1VOQVVUSE9SSVpFRDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZXJyb3JzLnB1c2goJ2VtYWlsLXRha2VuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVycm9ycy5wdXNoKCdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2lnbnVwQXR0ZW1wdC5lbWl0KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyLnBhc3N3b3JkICE9IHVzZXIucGFzc3dvcmRSZXBlYXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ3Bhc3N3b3JkLW1hdGNoJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHVzZXIuZW1haWwgIT0gdXNlci5lbWFpbFJlcGVhdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnZW1haWwtbWF0Y2gnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTaWdudXBDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIE91dHB1dCgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIE9iamVjdClcclxuICAgIF0sIFNpZ251cENvbXBvbmVudC5wcm90b3R5cGUsIFwidXNlckxvZ2dlZFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgT3V0cHV0KCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgT2JqZWN0KVxyXG4gICAgXSwgU2lnbnVwQ29tcG9uZW50LnByb3RvdHlwZSwgXCJzaWdudXBBdHRlbXB0XCIsIHZvaWQgMCk7XHJcbiAgICByZXR1cm4gU2lnbnVwQ29tcG9uZW50O1xyXG59KCkpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kaXJlY3RpdmVzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnRzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2F0Y2ggfSBmcm9tICcuLy4uLy4uL21vZGVscy93YXRjaC5tb2RlbCc7XHJcbmltcG9ydCB7IEdBU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvZ2Euc2VydmljZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbi8qKlxyXG4gKiBGcm9tIHRvIGFkZCwgZGVsZXRlIGFuZCB1cGRhdGUgd2F0Y2hlc1xyXG4gKi9cclxuZXhwb3J0IHZhciBXYXRjaENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yIHdpdGggRElcclxuICAgICAqIEBwYXJhbSB7VHJhbnNsYXRlU2VydmljZX0gcHJpdmF0ZSB0cmFuc2xhdGUgW2Rlc2NyaXB0aW9uXVxyXG4gICAgICogQHBhcmFtIHtUd0FQSVNlcnZpY2V9ICAgICBwcml2YXRlIHR3YXBpICAgICBbZGVzY3JpcHRpb25dXHJcbiAgICAgKiBAcGFyYW0ge0Zvcm1CdWlsZGVyfSAgICAgIHByaXZhdGUgYnVpbGRlciAgIFtkZXNjcmlwdGlvbl1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gV2F0Y2hDb21wb25lbnQodHJhbnNsYXRlLCB0d2FwaSwgZm9ybUJ1aWxkZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gdHJhbnNsYXRlO1xyXG4gICAgICAgIHRoaXMudHdhcGkgPSB0d2FwaTtcclxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXI7XHJcbiAgICAgICAgdGhpcy53YXRjaFNhdmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMud2F0Y2hNb2RlbCA9IG5ldyBXYXRjaChudWxsLCBcIlwiKTtcclxuICAgICAgICB0aGlzLmJyYW5kcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubW9kZWxzID0gW107XHJcbiAgICAgICAgdGhpcy5jYWxpYmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRCcmFuZExpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkTW9kZWxMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZENhbGliZXJMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5lcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnJhbmRTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubW9kZWxTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FsaWJlclNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdHJhbnNsYXRlLnNldERlZmF1bHRMYW5nKCdlbicpO1xyXG4gICAgICAgIHRyYW5zbGF0ZS51c2UoJ2VuJyk7XHJcbiAgICAgICAgdGhpcy53YXRjaEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMud2F0Y2hNb2RlbC5pZCxcclxuICAgICAgICAgICAgYnJhbmQ6IFt0aGlzLndhdGNoTW9kZWwuYnJhbmQsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBuYW1lOiBbdGhpcy53YXRjaE1vZGVsLm5hbWUsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBjYWxpYmVyOiB0aGlzLndhdGNoTW9kZWwuY2FsaWJlcixcclxuICAgICAgICAgICAgeWVhcjogW3RoaXMud2F0Y2hNb2RlbC55ZWFyT2ZCdXksIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5taW5MZW5ndGgoNCksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDQpXSldLFxyXG4gICAgICAgICAgICBzZXJpYWw6IHRoaXMud2F0Y2hNb2RlbC5zZXJpYWxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnR3YXBpLmdldEJyYW5kcygpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5icmFuZHMgPSByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFtzZWxlY3RCcmFuZCBkZXNjcmlwdGlvbl1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBicmFuZCBbZGVzY3JpcHRpb25dXHJcbiAgICAgKi9cclxuICAgIFdhdGNoQ29tcG9uZW50LnByb3RvdHlwZS5zZWxlY3RCcmFuZCA9IGZ1bmN0aW9uIChicmFuZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5icmFuZFNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnR3YXBpLmdldE1vZGVscyhicmFuZC5tb2RlbHMudG9Mb3dlckNhc2UoKSkudGhlbihmdW5jdGlvbiAocmVzKSB7IHJldHVybiBfdGhpcy5tb2RlbHMgPSByZXM7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gX3RoaXMubW9kZWxzID0gW107IH0pO1xyXG4gICAgICAgIHRoaXMudHdhcGkuZ2V0Q2FsaWJlcnMoYnJhbmQubW9kZWxzLnRvTG93ZXJDYXNlKCkpLnRoZW4oZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gX3RoaXMuY2FsaWJlcnMgPSByZXM7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gX3RoaXMuY2FsaWJlcnMgPSBbXTsgfSk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZEJyYW5kTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMud2F0Y2hNb2RlbC5icmFuZCA9IGJyYW5kLm5hbWU7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZWxlY3QgYSBtb2RlbFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGVsIFtkZXNjcmlwdGlvbl1cclxuICAgICAqL1xyXG4gICAgV2F0Y2hDb21wb25lbnQucHJvdG90eXBlLnNlbGVjdE1vZGVsID0gZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbFNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkTW9kZWxMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy53YXRjaE1vZGVsLm5hbWUgPSBtb2RlbDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNlbGVjdCBhIGNhbGliZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYWxpYmVyIFtkZXNjcmlwdGlvbl1cclxuICAgICAqL1xyXG4gICAgV2F0Y2hDb21wb25lbnQucHJvdG90eXBlLnNlbGVjdENhbGliZXIgPSBmdW5jdGlvbiAoY2FsaWJlcikge1xyXG4gICAgICAgIHRoaXMuY2FsaWJlclNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkQ2FsaWJlckxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLndhdGNoTW9kZWwuY2FsaWJlciA9IGNhbGliZXI7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBGaWx0ZXIgYnJhbmRzIGFjY29yZGluZyB0aGUgYnJhbmRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBicmFuZCBbZGVzY3JpcHRpb25dXHJcbiAgICAgKi9cclxuICAgIFdhdGNoQ29tcG9uZW50LnByb3RvdHlwZS5maWx0ZXJCcmFuZCA9IGZ1bmN0aW9uIChicmFuZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuYnJhbmRTZWxlY3RlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkQnJhbmRMaXN0ID0gdGhpcy5icmFuZHMuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihicmFuZC50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYnJhbmRTZWxlY3RlZCA9IGZhbHNlOyB9LCA1KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBGaWx0ZXJzIG1vZGVscyBhY2NvcmRpbmcgdG8gbW9kZWxcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlbCBbZGVzY3JpcHRpb25dXHJcbiAgICAgKi9cclxuICAgIFdhdGNoQ29tcG9uZW50LnByb3RvdHlwZS5maWx0ZXJNb2RlbCA9IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWxTZWxlY3RlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkTW9kZWxMaXN0ID0gdGhpcy5tb2RlbHMuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobW9kZWwudG9Mb3dlckNhc2UoKSkgPiAtMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm1vZGVsU2VsZWN0ZWQgPSBmYWxzZTsgfSwgNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogRmlsdGVycyBvdXQgY2FsaWJlcnMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IGlucHV0XHJcbiAgICAgKiBAcGFyYW0gY2FsaWJlclxyXG4gICAgICovXHJcbiAgICBXYXRjaENvbXBvbmVudC5wcm90b3R5cGUuZmlsdGVyQ2FsaWJlciA9IGZ1bmN0aW9uIChjYWxpYmVyKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5jYWxpYmVyU2VsZWN0ZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZENhbGliZXJMaXN0ID0gdGhpcy5jYWxpYmVycy5maWx0ZXIoZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihjYWxpYmVyLnRvTG93ZXJDYXNlKCkpID4gLTE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5jYWxpYmVyU2VsZWN0ZWQgPSBmYWxzZTsgfSwgNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFdhdGNoQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFN1Ym1pdCBhIHdhdGNoXHJcbiAgICAgKi9cclxuICAgIFdhdGNoQ29tcG9uZW50LnByb3RvdHlwZS5vblN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hGb3JtLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy50d2FwaS51cHNlcnRXYXRjaCh0aGlzLndhdGNoTW9kZWwpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnV0FUQ0hfVVBTRVJUJywgJ1NVQ0NFU1MnKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnVzZXIudXBzZXJ0V2F0Y2gocmVzKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLndhdGNoU2F2ZWQuZW1pdChfdGhpcy51c2VyKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnN1Ym1pdEF0dGVtcHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnV0FUQ0hfVVBTRVJUJywgJ0ZBSUwnKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnN1Ym1pdEF0dGVtcHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgV2F0Y2hDb21wb25lbnQucHJvdG90eXBlLm9uRGVsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRBdHRlbXB0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnR3YXBpLmRlbGV0ZVdhdGNoKHRoaXMudXNlciwgdGhpcy53YXRjaE1vZGVsKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnV0FUQ0hfREVMRVRFJywgJ1NVQ0NFU1MnKTtcclxuICAgICAgICAgICAgX3RoaXMud2F0Y2hTYXZlZC5lbWl0KHJlcyk7XHJcbiAgICAgICAgICAgIF90aGlzLnN1Ym1pdEF0dGVtcHQgPSBmYWxzZTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnV0FUQ0hfREVMRVRFJywgJ0ZBSUwnKTtcclxuICAgICAgICAgICAgX3RoaXMuZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICBfdGhpcy5zdWJtaXRBdHRlbXB0ID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgT3V0cHV0KCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgT2JqZWN0KVxyXG4gICAgXSwgV2F0Y2hDb21wb25lbnQucHJvdG90eXBlLCBcIndhdGNoU2F2ZWRcIiwgdm9pZCAwKTtcclxuICAgIHJldHVybiBXYXRjaENvbXBvbmVudDtcclxufSgpKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGlyZWN0aXZlcy93YXRjaC93YXRjaC5jb21wb25lbnQudHNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB2YXIgU3RyaW5nSGVscGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFN0cmluZ0hlbHBlcigpIHtcclxuICAgIH1cclxuICAgIFN0cmluZ0hlbHBlci5sZXZlbnNodGVpbiA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgaWYgKCFhIHx8ICFiKVxyXG4gICAgICAgICAgICByZXR1cm4gKGEgfHwgYikubGVuZ3RoO1xyXG4gICAgICAgIHZhciBtID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gYi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBtW2ldID0gW2ldO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMClcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8PSBhLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBtWzBdW2pdID0gajtcclxuICAgICAgICAgICAgICAgIGlmIChqID09PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgbVtpXVtqXSA9IGIuY2hhckF0KGkgLSAxKSA9PSBhLmNoYXJBdChqIC0gMSkgPyBtW2kgLSAxXVtqIC0gMV0gOiBNYXRoLm1pbihtW2kgLSAxXVtqIC0gMV0gKyAxLCBtW2ldW2ogLSAxXSArIDEsIG1baSAtIDFdW2pdICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1bYi5sZW5ndGhdW2EubGVuZ3RoXTtcclxuICAgIH07XHJcbiAgICBTdHJpbmdIZWxwZXIucmVwbGFjZUFsbCA9IGZ1bmN0aW9uICh0YXJnZXQsIHNlYXJjaCwgcmVwbGFjZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0LnNwbGl0KHNlYXJjaCkuam9pbihyZXBsYWNlbWVudCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFN0cmluZ0hlbHBlcjtcclxufSgpKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGVscGVycy9zdHJpbmcuaGVscGVyLnRzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgV2F0Y2ggfSBmcm9tICcuL3dhdGNoLm1vZGVsJztcclxuaW1wb3J0IHsgQmxvZ1Bvc3QgfSBmcm9tICcuL2Jsb2ctcG9zdC5tb2RlbCc7XHJcbmltcG9ydCB7IE1lYXN1cmUgfSBmcm9tICcuL21lYXN1cmUubW9kZWwnO1xyXG5leHBvcnQgdmFyIE1vZGVsRmFjdG9yeSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNb2RlbEZhY3RvcnkoKSB7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBhbiBVc2VyIGZyb20ganNvbiByZXNwb25zZVxyXG4gICAgICogQHBhcmFtICB7YW55fSAganNvblVzZXJcclxuICAgICAqIEByZXR1cm4ge1VzZXJ9XHJcbiAgICAgKi9cclxuICAgIE1vZGVsRmFjdG9yeS5idWlsZFVzZXIgPSBmdW5jdGlvbiAoanNvblVzZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFVzZXIoanNvblVzZXIudXNlcklkLCBqc29uVXNlci5lbWFpbCwganNvblVzZXIuZmlyc3RuYW1lLCBqc29uVXNlci5uYW1lLCBqc29uVXNlci5jb3VudHJ5LCBqc29uVXNlci5yZWdpc3RlckRhdGUsIGpzb25Vc2VyLmtleSwgTW9kZWxGYWN0b3J5LmJ1aWxkV2F0Y2hlcyhqc29uVXNlci53YXRjaGVzKSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgYSB3YXRjaCBmcm9tIGpzb24gcmVzcG9uc2VcclxuICAgICAqIEBwYXJhbSAge2FueX0gICAgIGpzb25XYXRjaGVzXHJcbiAgICAgKiBAcmV0dXJuIHtXYXRjaFtdfVxyXG4gICAgICovXHJcbiAgICBNb2RlbEZhY3RvcnkuYnVpbGRXYXRjaGVzID0gZnVuY3Rpb24gKGpzb25XYXRjaGVzKSB7XHJcbiAgICAgICAgcmV0dXJuIGpzb25XYXRjaGVzLm1hcChmdW5jdGlvbiAoanNvbldhdGNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgV2F0Y2goanNvbldhdGNoLndhdGNoSWQsIGpzb25XYXRjaC5icmFuZCwganNvbldhdGNoLmhpc3RvcnlTaXplLCBqc29uV2F0Y2gubWVhc3VyZXMubWFwKGZ1bmN0aW9uIChqc29uTWVhc3VyZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBNZWFzdXJlKGpzb25NZWFzdXJlLmlkLCBqc29uTWVhc3VyZS5tZWFzdXJlVXNlclRpbWUsIGpzb25NZWFzdXJlLm1lYXN1cmVSZWZlcmVuY2VUaW1lLCBqc29uTWVhc3VyZS5zdGF0dXNJZCwganNvbk1lYXN1cmUuYWNjdXJhY3lVc2VyVGltZSwganNvbk1lYXN1cmUuYWNjdXJhY3lSZWZlcmVuY2VUaW1lLCBqc29uTWVhc3VyZS5hY2N1cmFjeSwganNvbk1lYXN1cmUuYWNjdXJhY3lBZ2UsIGpzb25NZWFzdXJlLnBlcmNlbnRpbGUpO1xyXG4gICAgICAgICAgICB9KSwganNvbldhdGNoLm5hbWUsIGpzb25XYXRjaC55ZWFyT2ZCdXksIGpzb25XYXRjaC5zZXJpYWwsIGpzb25XYXRjaC5jYWxpYmVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBKc29uIHBvc3QgZnJvbSBqc29uIHJlc3BvbnNlXHJcbiAgICAgKiBAcGFyYW0gIHthbnl9ICAgICAgICBqc29uUG9zdHMgW2Rlc2NyaXB0aW9uXVxyXG4gICAgICogQHJldHVybiB7QmxvZ1Bvc3RbXX0gICAgICAgICAgIFtkZXNjcmlwdGlvbl1cclxuICAgICAqL1xyXG4gICAgTW9kZWxGYWN0b3J5LmJ1aWxkUG9zdHMgPSBmdW5jdGlvbiAoanNvblBvc3RzKSB7XHJcbiAgICAgICAgcmV0dXJuIGpzb25Qb3N0cy5wb3N0cy5tYXAoZnVuY3Rpb24gKGpzb25Qb3N0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmxvZ1Bvc3QoanNvblBvc3QuaWQsIGpzb25Qb3N0LnRpdGxlLCBuZXcgRGF0ZShqc29uUG9zdC5kYXRlKSwganNvblBvc3QuZXhjZXJwdCwganNvblBvc3QudXJsKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBNb2RlbEZhY3RvcnkuYnVpbGRXYXRjaCA9IGZ1bmN0aW9uIChpZCwgYnJhbmQsIG5hbWUsIHllYXJPZkJ1eSwgc2VyaWFsLCBjYWxpYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBXYXRjaChpZCwgYnJhbmQsIDAsIFtdLCBuYW1lLCB5ZWFyT2ZCdXksIHNlcmlhbCwgY2FsaWJlcik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1vZGVsRmFjdG9yeTtcclxufSgpKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kZWxzL21vZGVsLmZhY3RvcnkudHNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvUnhcIlxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0ICogZnJvbSAnLi9pbmRleCc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdHctY29yZS50c1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==