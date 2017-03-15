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
        this.twapi.getModels(brand.toLowerCase()).then(function (res) { return _this.models = res; }, function (error) { return _this.models = []; });
        this.twapi.getCalibers(brand.toLowerCase()).then(function (res) { return _this.calibers = res; }, function (error) { return _this.calibers = []; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiOTk2MzM0YTliYzczYmNjMjRiNyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2dhLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy93YXRjaC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL21lYXN1cmUubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3R3YXBpLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9jbG9jay9tb29uLXBoYXNlcy9tb29uLXBoYXNlcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvZ2xvYmFsLXZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2Jsb2ctcG9zdC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpcGVzL2FyZXRobWV0aWMtc2lnbi5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlcy9rLWZvcm1hdHRlci5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlcy9sZWFkaW5nLXplcm8ucGlwZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvY2xvY2svY2xvY2suY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy93YXRjaC93YXRjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvc3RyaW5nLmhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL21vZGVsLmZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vLi90dy1jb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EwQztBQUkxQztJQUFBO0lBa0VBLENBQUM7SUF4RGdCLGVBQUssR0FBcEI7UUFFSSxFQUFFLEVBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUM7WUFDdkIsSUFBSSxRQUFRLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNoQyxJQUFJ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QUMvQixNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBUyxRQUFZO1lBRS9DLE1BQU0sQ0FBQyxJQUFJLGtFQUFRLENBQ2xCLFFBQVEsQ0FBQyxFQUFFLEVBQ1gsUUFBUSxDQUFDLEtBQUssRUFDZCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQ3ZCLFFBQVEsQ0FBQyxPQUFPLEVBQ2hCLFFBQVEsQ0FBQyxHQUFHLENBQ1osQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNGLG1CQUFDO0FBQUQsQ0FBQzs7Ozs7OztBQzNFRCxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBd0IiLCJmaWxlIjoidHctY29yZS51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKSwgcmVxdWlyZShcInJ4anMvUnhcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQGFuZ3VsYXIvY29yZVwiLCBcIkBhbmd1bGFyL2Zvcm1zXCIsIFwiQGFuZ3VsYXIvaHR0cFwiLCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIiwgXCJyeGpzL1J4XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInR3LWNvcmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKSwgcmVxdWlyZShcInJ4anMvUnhcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInR3LWNvcmVcIl0gPSBmYWN0b3J5KHJvb3RbXCJAYW5ndWxhci9jb3JlXCJdLCByb290W1wiQGFuZ3VsYXIvZm9ybXNcIl0sIHJvb3RbXCJAYW5ndWxhci9odHRwXCJdLCByb290W1wiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiXSwgcm9vdFtcInJ4anMvUnhcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjk5NjMzNGE5YmM3M2JjYzI0YjciLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IGdhOmFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdBU2VydmljZSB7XG5cbiAgcHVibGljIHN0YXRpYyBhcHBOYW1lOnN0cmluZztcbiAgcHVibGljIHN0YXRpYyBhcHBWZXJzaW9uOnN0cmluZztcbiAgcHVibGljIHN0YXRpYyB1c2VyTmFtZTpzdHJpbmc7XG4gIHB1YmxpYyBzdGF0aWMgdXNlckVtYWlsOnN0cmluZztcbiAgcHJpdmF0ZSBzdGF0aWMgZ2FDcmVhdGVkOmJvb2xlYW4gPSBmYWxzZTtcblxuXG5cbiAgcHJpdmF0ZSBzdGF0aWMgc3Bhd24oKXtcblxuICAgICAgaWYoIUdBU2VydmljZS5nYUNyZWF0ZWQpe1xuICAgICAgICB2YXIgY3VycmRhdGUgOiBhbnkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgZ2FOZXdFbGVtIDogYW55ID0ge307XG4gICAgICAgIHZhciBnYUVsZW1zIDogYW55ID0ge307XG5cbiAgICAgICAgLyogdHNsaW50OmRpc2FibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgICAgICAgLyogdHNsaW50OmRpc2FibGU6c2VtaWNvbG9uICovXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLXVudXNlZC1leHByZXNzaW9uICovXG4gICAgICAgIC8vIFRoaXMgY29kZSBpcyBmcm9tIEdvb2dsZSwgc28gbGV0J3Mgbm90IG1vZGlmeSBpdCB0b28gbXVjaCwganVzdCBhZGQgZ2FOZXdFbGVtIGFuZCBnYUVsZW1zOlxuXG4gICAgICAgIChmdW5jdGlvbihpLHMsbyxnLHIsYSxtKXtpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXT1yO2lbcl09aVtyXXx8ZnVuY3Rpb24oKXtcbiAgICAgICAgKGlbcl0ucT1pW3JdLnF8fFtdKS5wdXNoKGFyZ3VtZW50cyl9LGlbcl0ubD0xKmN1cnJkYXRlO2E9cy5jcmVhdGVFbGVtZW50KG8pLFxuICAgICAgICBtPXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07YS5hc3luYz0xO2Euc3JjPWc7bS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLG0pXG4gICAgICAgIH0pKHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzJywnZ2EnLCBnYU5ld0VsZW0sIGdhRWxlbXMpO1xuICAgICAgICBcbiAgICAgICAgLyogdHNsaW50OmVuYWJsZTpuby11bnVzZWQtZXhwcmVzc2lvbiAqL1xuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlOnNlbWljb2xvbiAqL1xuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLXN0cmluZy1saXRlcmFsICovXG4gICAgICAgIGdhKCdjcmVhdGUnLCAnVUEtNTkxNDg4NzgtMScsICdhcHAudG9vbHdhdGNoLmlvJyk7XG4gICAgICAgIEdBU2VydmljZS5nYUNyZWF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBldmVudChldmVudENhdGVnb3J5OnN0cmluZywgZXZlbnRBY3Rpb246c3RyaW5nLCBldmVudExhYmVsOnN0cmluZz0nJywgZXZlbnRWYWx1ZTpudW1iZXI9MCl7XG4gICAgR0FTZXJ2aWNlLnNwYXduKCk7XG4gICAgZ2EoJ3NlbmQnLCAnZXZlbnQnLCBldmVudENhdGVnb3J5LCBldmVudEFjdGlvbiwgZXZlbnRMYWJlbCwgZXZlbnRWYWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNjcmVlbnZpZXcoc2NyZWVuTmFtZTpzdHJpbmcpe1xuXG4gICAgLy9hcHBWZXJzaW9uIGFuZCBhcHBOYW1lIGFyZSBoYW5kbGVkIGJ5IGlvbmljLW5hdGl2ZSBwcm9taXNlcyBvbiBtb2JpbGVcbiAgICAvL0luIGNhc2UgdGhlIHByb21pc2VzIGFyZSBzdGlsbCB3b3JraW5nLCB3ZSB0aW1lb3V0IHRoZSBjYWxsIGJ5IDFzLlxuICAgIGlmKEdBU2VydmljZS5hcHBOYW1lID09IHVuZGVmaW5lZCB8fCBHQVNlcnZpY2UuYXBwVmVyc2lvbiA9PSB1bmRlZmluZWQpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkdBU2VydmljZSBpc24ndCBjb25maWd1cmVkIHlldC4gUG9zdHBvbmluZyBjYWxsXCIsIEdBU2VydmljZS5hcHBOYW1lLCBHQVNlcnZpY2UuYXBwVmVyc2lvbik7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICBHQVNlcnZpY2Uuc2NyZWVudmlldyhzY3JlZW5OYW1lKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfWVsc2V7XG4gICAgICBHQVNlcnZpY2Uuc3Bhd24oKTtcbiAgICAgIGdhKCdzZW5kJywgJ3NjcmVlbnZpZXcnLCB7XG4gICAgICAgICdhcHBOYW1lJzogR0FTZXJ2aWNlLmFwcE5hbWUsXG4gICAgICAgICdhcHBWZXJzaW9uJzogR0FTZXJ2aWNlLmFwcFZlcnNpb24sXG4gICAgICAgICdzY3JlZW5OYW1lJzogc2NyZWVuTmFtZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBwYWdldmlldyhwYWdlOnN0cmluZyl7XG4gICAgR0FTZXJ2aWNlLnNwYXduKCk7XG4gICAgZ2EoJ3NldCcsICdwYWdlJywgcGFnZSk7XG4gICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnKVxuICB9XG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL2dhLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBNZWFzdXJlLCBNZWFzdXJlU3RhdHVzIH0gZnJvbSAnLi9tZWFzdXJlLm1vZGVsJ1xuXG5leHBvcnQgY2xhc3MgV2F0Y2h7XG5cdGlkOm51bWJlcjtcblx0YnJhbmQ6c3RyaW5nO1xuXHRoaXN0b3J5U2l6ZTpudW1iZXI7XG5cdG1lYXN1cmVzOk1lYXN1cmVbXTtcblx0bmFtZTpzdHJpbmc7XG5cdHllYXJPZkJ1eTpudW1iZXI7XG5cdHNlcmlhbDpzdHJpbmc7XG5cdGNhbGliZXI6c3RyaW5nO1xuXHRzdGF0dXM6IFdhdGNoU3RhdHVzO1xuXHRuZXh0OiBXYXRjaEFjdGlvbjtcblx0d2FpdGluZzpudW1iZXI7XG5cdGluaXRpYWxzOnN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBicmFuZDogc3RyaW5nLCBoaXN0b3J5U2l6ZTogbnVtYmVyID0gMCxcblx0XHRtZWFzdXJlczogTWVhc3VyZVtdID0gW10sIG5hbWU6IHN0cmluZyA9IFwiXCIsIHllYXJPZkJ1eTogbnVtYmVyID0gbnVsbCxcblx0XHRzZXJpYWw6IHN0cmluZyA9IFwiXCIsIGNhbGliZXI6IHN0cmluZyA9IFwiXCIpIHtcblxuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLmJyYW5kID0gYnJhbmQ7XG5cdFx0dGhpcy5oaXN0b3J5U2l6ZSA9IGhpc3RvcnlTaXplO1xuXHRcdHRoaXMubWVhc3VyZXMgPSBtZWFzdXJlcy5zb3J0KGZ1bmN0aW9uKGE6TWVhc3VyZSwgYjpNZWFzdXJlKXtcblx0XHRcdHJldHVybiBhLmlkIC0gYi5pZDtcblx0XHR9KTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdGlmKHllYXJPZkJ1eSAhPSAwKXtcblx0XHRcdHRoaXMueWVhck9mQnV5ID0geWVhck9mQnV5O1xuXHRcdH1cblx0XHR0aGlzLnNlcmlhbCA9IHNlcmlhbDtcblx0XHR0aGlzLmNhbGliZXIgPSBjYWxpYmVyO1xuXHRcdHRoaXMuaW5pdGlhbHMgPSAodGhpcy5icmFuZCAhPSBudWxsICYmIHRoaXMuYnJhbmQubGVuZ3RoID4gMCkgPyB0aGlzLmJyYW5kLmNoYXJBdCgwKSA6IFwiXCI7XG5cdFx0dGhpcy5pbml0aWFscyArPSAodGhpcy5uYW1lLmxlbmd0aCA+IDApID8gdGhpcy5uYW1lLmNoYXJBdCgwKSA6IFwiXCI7XG5cblx0XHRpZiAoaGlzdG9yeVNpemUgPT0gMCl7XG5cdFx0XHR0aGlzLnN0YXR1cyA9IFdhdGNoU3RhdHVzLk5ldmVyTWVhc3VyZWQ7XG5cdFx0XHR0aGlzLm5leHQgPSBXYXRjaEFjdGlvbi5NZWFzdXJlO1xuXHRcdH1lbHNlIGlmKGhpc3RvcnlTaXplID4gdGhpcy5tZWFzdXJlcy5sZW5ndGgpe1xuXHRcdFx0dGhpcy5zdGF0dXMgPSBXYXRjaFN0YXR1cy5IYXZlTW9yZU1lYXN1cmVzO1xuXHRcdH1cblxuXHRcdHRoaXMuY29tcHV0ZU5leHQoKTtcblx0fVxuXG5cdGNvbXB1dGVOZXh0KCl7XG5cdFx0bGV0IGxhc3RNZWFzdXJlID0gdGhpcy5jdXJyZW50TWVhc3VyZSgpO1xuXHRcdGlmIChsYXN0TWVhc3VyZSAhPT0gbnVsbCBcblx0XHRcdCYmIGxhc3RNZWFzdXJlLnN0YXR1cyAmIE1lYXN1cmVTdGF0dXMuQmFzZU1lYXN1cmUpe1xuXHRcdFx0XG5cdFx0XHRpZiAoTWF0aC5hYnMoKGxhc3RNZWFzdXJlLm1lYXN1cmVVc2VyVGltZSAtIERhdGUubm93KCkvMTAwMCkvMzYwMCkgPCAxMil7XG5cdFx0XHRcdHRoaXMubmV4dCA9IFdhdGNoQWN0aW9uLldhaXRpbmc7XG5cdFx0XHRcdHRoaXMud2FpdGluZyA9IE1hdGgucm91bmQoMTIgLSBNYXRoLmFicygobGFzdE1lYXN1cmUubWVhc3VyZVVzZXJUaW1lIC0gRGF0ZS5ub3coKS8xMDAwKS8zNjAwKSk7XG5cdFx0XHR9ZWxzZSBpZighKGxhc3RNZWFzdXJlLnN0YXR1cyAmIE1lYXN1cmVTdGF0dXMuQWNjdXJhY3lNZWFzdXJlKSkge1xuXHRcdFx0XHR0aGlzLm5leHQgPSBXYXRjaEFjdGlvbi5BY2N1cmFjeTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLm5leHQgPSBXYXRjaEFjdGlvbi5NZWFzdXJlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyB0b1N0cmluZyA9ICgpIDogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gYFdhdGNoIChpZDogJHt0aGlzLmlkfSxcblx0XHRcdFx0YnJhbmQ6ICR7dGhpcy5icmFuZH0sXG5cdFx0XHRcdGhpc3RvcnlTaXplOiAke3RoaXMuaGlzdG9yeVNpemV9LFxuXHRcdFx0XHRtZWFzdXJlczogJHt0aGlzLm1lYXN1cmVzfSxcblx0XHRcdFx0bmFtZTogJHt0aGlzLm5hbWV9LFxuXHRcdFx0XHR5ZWFyT2ZCdXk6ICR7dGhpcy55ZWFyT2ZCdXl9LFxuXHRcdFx0XHRzZXJpYWw6ICR7dGhpcy5zZXJpYWx9LFxuXHRcdFx0XHRjYWxpYmVyOiAke3RoaXMuY2FsaWJlcn0sXG5cdFx0XHRcdHN0YXR1czogJHt0aGlzLnN0YXR1c30sXG5cdFx0XHRcdG5leHQ6ICR7dGhpcy5uZXh0fSxcblx0XHRcdFx0d2FpdGluZzogJHt0aGlzLndhaXRpbmd9KWA7XG5cdH1cblxuXHRhdmVyYWdlKGFtb3VudDpudW1iZXIpe1xuXG5cdFx0bGV0IGFjdHVhbEFtb3VudDpudW1iZXIgPSAwO1xuXHRcdGxldCBhdmVyYWdlOm51bWJlciA9IDA7XG5cdFx0bGV0IGk6bnVtYmVyID0gdGhpcy5tZWFzdXJlcy5sZW5ndGggLSAxO1xuXG5cdFx0d2hpbGUoaT49IDAgJiYgYWN0dWFsQW1vdW50IDw9IGFtb3VudCl7XG5cdFx0XHRpZih0aGlzLm1lYXN1cmVzW2ldLnN0YXR1cyAmIE1lYXN1cmVTdGF0dXMuQWNjdXJhY3lNZWFzdXJlKXtcblx0XHRcdFx0YXZlcmFnZSA9IGF2ZXJhZ2UgKyBNYXRoLmFicyh0aGlzLm1lYXN1cmVzW2ldLmFjY3VyYWN5KTtcblx0XHRcdFx0YWN0dWFsQW1vdW50Kys7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGktLTtcblx0XHRcdFxuXHRcdH1cblx0XHRyZXR1cm4gKGF2ZXJhZ2UvYWN0dWFsQW1vdW50KS50b0ZpeGVkKDEpO1xuXHR9XG5cblx0bGFzdENvbXBsZXRlTWVhc3VyZSgpOk1lYXN1cmV7XG5cdFx0bGV0IGk6bnVtYmVyID0gdGhpcy5tZWFzdXJlcy5sZW5ndGggLSAxO1xuXG5cdFx0d2hpbGUoaSA+PSAwKXtcblx0XHRcdGlmKHRoaXMubWVhc3VyZXNbaV0uc3RhdHVzICYgTWVhc3VyZVN0YXR1cy5BY2N1cmFjeU1lYXN1cmUpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5tZWFzdXJlc1tpXTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aS0tO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y3VycmVudE1lYXN1cmUoKTpNZWFzdXJle1xuXHRcdGlmKHRoaXMubWVhc3VyZXMubGVuZ3RoICE9PSAwKXtcblx0XHRcdHJldHVybiB0aGlzLm1lYXN1cmVzW3RoaXMubWVhc3VyZXMubGVuZ3RoIC0gMV07XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHR1cHNlcnRNZWFzdXJlKG1lYXN1cmU6TWVhc3VyZSl7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWVhc3VyZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiaVwiLCBpKTtcblx0XHRcdGlmKHRoaXMubWVhc3VyZXNbaV0uaWQgPT0gbWVhc3VyZS5pZCl7XG5cdFx0XHRcdHRoaXMubWVhc3VyZXNbaV0gPSBtZWFzdXJlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuaGlzdG9yeVNpemUrKztcblx0XHR0aGlzLm1lYXN1cmVzLnB1c2gobWVhc3VyZSk7XG5cdH1cblxuXHRjbG9uZSgpOldhdGNoe1xuXHRcdHJldHVybiBuZXcgV2F0Y2goXG5cdFx0XHR0aGlzLmlkLFxuXHRcdFx0dGhpcy5icmFuZCxcblx0XHRcdHRoaXMuaGlzdG9yeVNpemUsXG5cdFx0XHR0aGlzLm1lYXN1cmVzLFxuXHRcdFx0dGhpcy5uYW1lLFxuXHRcdFx0dGhpcy55ZWFyT2ZCdXksXG5cdFx0XHR0aGlzLnNlcmlhbCxcblx0XHRcdHRoaXMuY2FsaWJlclxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGVudW0gV2F0Y2hBY3Rpb257XG5cdE1lYXN1cmUsIFdhaXRpbmcsIEFjY3VyYWN5XG59XG5cbmV4cG9ydCBlbnVtIFdhdGNoU3RhdHVze1xuXHROZXZlck1lYXN1cmVkLFxuXHRIYXZlTW9yZU1lYXN1cmVzXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVscy93YXRjaC5tb2RlbC50cyIsImV4cG9ydCBjbGFzcyBNZWFzdXJle1xuXG5cdGlkOm51bWJlcjtcblx0bWVhc3VyZVVzZXJUaW1lOm51bWJlcjtcblx0bWVhc3VyZVJlZmVyZW5jZVRpbWU6bnVtYmVyO1xuXHRhY2N1cmFjeVVzZXJUaW1lOm51bWJlcjtcblx0YWNjdXJhY3lSZWZlcmVuY2VUaW1lOm51bWJlcjtcblx0YWNjdXJhY3k6bnVtYmVyO1xuXHRhY2N1cmFjeUFnZTpudW1iZXI7XG5cdHBlcmNlbnRpbGU6bnVtYmVyO1xuXHRzdGF0dXM6IE1lYXN1cmVTdGF0dXMgPSBNZWFzdXJlU3RhdHVzLk5vbmU7XG5cdHNlcnZpY2VkOmJvb2xlYW4gPSBmYWxzZTtcblx0cmVuZXdlZDpib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoaWQ6IG51bWJlciwgbWVhc3VyZVVzZXJUaW1lOiBudW1iZXIsIG1lYXN1cmVSZWZlcmVuY2VUaW1lOiBudW1iZXIsIFxuXHRcdHN0YXR1cz86IG51bWJlciwgYWNjdXJhY3lVc2VyVGltZT86IG51bWJlciwgYWNjdXJhY3lSZWZlcmVuY2VUaW1lPzogbnVtYmVyLCBcblx0XHRhY2N1cmFjeT86IG51bWJlciwgYWNjdXJhY3lBZ2U/OiBudW1iZXIsIHBlcmNlbnRpbGU/OiBudW1iZXIpe1xuXG5cdFx0dGhpcy5pZCA9IGlkXG5cdFx0dGhpcy5tZWFzdXJlVXNlclRpbWUgPSBtZWFzdXJlVXNlclRpbWU7XG5cdFx0dGhpcy5tZWFzdXJlUmVmZXJlbmNlVGltZSA9IG1lYXN1cmVSZWZlcmVuY2VUaW1lO1xuXHRcdHRoaXMuYWNjdXJhY3lVc2VyVGltZSA9IGFjY3VyYWN5VXNlclRpbWU7XG5cdFx0dGhpcy5hY2N1cmFjeVJlZmVyZW5jZVRpbWUgPSBhY2N1cmFjeVJlZmVyZW5jZVRpbWU7XG5cdFx0dGhpcy5hY2N1cmFjeSA9IGFjY3VyYWN5O1xuXHRcdHRoaXMuYWNjdXJhY3lBZ2UgPSBhY2N1cmFjeUFnZTtcblx0XHR0aGlzLnBlcmNlbnRpbGUgPSBNYXRoLnJvdW5kKHBlcmNlbnRpbGUqMTApLzEwO1xuXG5cdFx0aWYoc3RhdHVzID49IDEpe1xuXHRcdFx0dGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5CYXNlTWVhc3VyZTtcblx0XHR9XG5cblx0XHRpZihzdGF0dXMgPj0gMil7XG5cdFx0XHR0aGlzLnN0YXR1cyB8PSBNZWFzdXJlU3RhdHVzLkFjY3VyYWN5TWVhc3VyZTtcblx0XHR9XG5cblx0XHRpZiAoc3RhdHVzID49IDMpIHtcblx0XHRcdHRoaXMuc3RhdHVzIHw9IE1lYXN1cmVTdGF0dXMuQXJjaGl2ZWRNZWFzdXJlO1xuXHRcdH1cblxuXHRcdGlmKGFjY3VyYWN5QWdlID4gMzApe1xuXHRcdFx0dGhpcy5yZW5ld2VkID0gdHJ1ZTtcblx0XHRcdHRoaXMuc3RhdHVzIHw9IE1lYXN1cmVTdGF0dXMuU2hvdWxkQmVSZW5ld2VkO1xuXHRcdH1cblxuXHRcdGlmKE1hdGguYWJzKGFjY3VyYWN5KSA+IDIwKXtcblx0XHRcdHRoaXMuc2VydmljZWQgPSB0cnVlO1xuXHRcdFx0dGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5TaG91bGRCZVNlcnZpY2VkO1xuXHRcdH1cblxuXHRcdHRoaXMuY29tcHV0ZVBvc3RBY2N1cmFjeVN0YXR1cyhhY2N1cmFjeSwgYWNjdXJhY3lBZ2UpO1xuXHR9XG5cblx0cHVibGljIHRvU3RyaW5nID0gKCkgOiBzdHJpbmcgPT4ge1xuXHRcdHJldHVybiBgTWVhc3VyZSAoaWQ6ICR7dGhpcy5pZH0sXG5cdFx0bWVhc3VyZVVzZXJUaW1lOiAke3RoaXMubWVhc3VyZVVzZXJUaW1lfSxcblx0XHRtZWFzdXJlUmVmZXJlbmNlVGltZTogJHt0aGlzLm1lYXN1cmVSZWZlcmVuY2VUaW1lfSxcblx0XHRhY2N1cmFjeVVzZXJUaW1lOiAke3RoaXMuYWNjdXJhY3lVc2VyVGltZX0sXG5cdFx0YWNjdXJhY3lSZWZlcmVuY2VUaW1lOiAke3RoaXMuYWNjdXJhY3lSZWZlcmVuY2VUaW1lfSxcblx0XHRhY2N1cmFjeTogJHt0aGlzLmFjY3VyYWN5fSxcblx0XHRhY2N1cmFjeUFnZTogJHt0aGlzLmFjY3VyYWN5QWdlfSxcblx0XHRwZXJjZW50aWxlOiAke3RoaXMucGVyY2VudGlsZX0sXG5cdFx0c3RhdHVzOiAke3RoaXMuc3RhdHVzfSlgO1xuXHR9XG5cblx0YWRkQmFzZU1lYXN1cmUocmVmZXJlbmNlVGltZTpudW1iZXIsIHVzZXJUaW1lOm51bWJlcil7XG5cdFx0dGhpcy5tZWFzdXJlUmVmZXJlbmNlVGltZSA9IHJlZmVyZW5jZVRpbWU7XG5cdFx0dGhpcy5tZWFzdXJlVXNlclRpbWUgPSB1c2VyVGltZTtcblx0XHR0aGlzLnN0YXR1cyB8PSBNZWFzdXJlU3RhdHVzLkJhc2VNZWFzdXJlO1xuXHR9XG5cblx0YWRkQWNjdXJhY3lNZWFzdXJlKHJlZmVyZW5jZVRpbWU6IG51bWJlciwgdXNlclRpbWU6IG51bWJlcikge1xuXHRcdHRoaXMuYWNjdXJhY3lSZWZlcmVuY2VUaW1lID0gcmVmZXJlbmNlVGltZTtcblx0XHR0aGlzLmFjY3VyYWN5VXNlclRpbWUgPSB1c2VyVGltZTtcblx0XHR0aGlzLnN0YXR1cyB8PSBNZWFzdXJlU3RhdHVzLkFjY3VyYWN5TWVhc3VyZTtcblx0fVxuXG5cdGFkZEFjY3VyYWN5KGFjY3VyYWN5Om51bWJlciwgYWNjdXJhY3lBZ2U6bnVtYmVyLCBwZXJjZW50aWxlOm51bWJlcil7XG5cdFx0Y29uc29sZS5sb2coXCJhZGRBY2N1cmFjeVwiLCBhY2N1cmFjeSxhY2N1cmFjeUFnZSxwZXJjZW50aWxlKTtcblx0XHR0aGlzLmFjY3VyYWN5ID0gYWNjdXJhY3k7XG5cdFx0dGhpcy5hY2N1cmFjeUFnZSA9IGFjY3VyYWN5QWdlO1xuXHRcdHRoaXMucGVyY2VudGlsZSA9IE1hdGgucm91bmQocGVyY2VudGlsZSoxMCkvMTA7XG5cdFx0dGhpcy5jb21wdXRlUG9zdEFjY3VyYWN5U3RhdHVzKGFjY3VyYWN5LCBhY2N1cmFjeUFnZSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbXB1dGVQb3N0QWNjdXJhY3lTdGF0dXMoYWNjdXJhY3k6bnVtYmVyLCBhY2N1cmFjeUFnZTpudW1iZXIpe1xuXHRcdGlmIChhY2N1cmFjeSAhPSBudWxsICYmIGFjY3VyYWN5QWdlICE9IG51bGwpIHtcblx0XHRcdGlmIChNYXRoLmFicyhhY2N1cmFjeSkgPiAyMCkge1xuXHRcdFx0XHR0aGlzLnN0YXR1cyB8PSBNZWFzdXJlU3RhdHVzLlNob3VsZEJlU2VydmljZWQ7XG5cdFx0XHRcdHRoaXMuc2VydmljZWQgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYWNjdXJhY3lBZ2UgPiAzMCkge1xuXHRcdFx0XHR0aGlzLnJlbmV3ZWQgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnN0YXR1cyB8PSBNZWFzdXJlU3RhdHVzLlNob3VsZEJlUmVuZXdlZDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGVudW0gTWVhc3VyZVN0YXR1c3tcblx0Tm9uZSA9IDAsXG5cdEJhc2VNZWFzdXJlID0gMSA8PCAwLFxuXHRBY2N1cmFjeU1lYXN1cmUgPSAxIDw8IDEsXG5cdEFyY2hpdmVkTWVhc3VyZSA9IDEgPDwgMixcblx0U2hvdWxkQmVSZW5ld2VkID0gMSA8PCAzLFxuXHRTaG91bGRCZVNlcnZpY2VkID0gMSA8PCA0XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVscy9tZWFzdXJlLm1vZGVsLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnMgfSAgZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cblxuaW1wb3J0IHsgVXNlciB9ICBmcm9tICcuLy4uL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCB7IFdhdGNoLCBXYXRjaEFjdGlvbiB9ICBmcm9tICcuLy4uL21vZGVscy93YXRjaC5tb2RlbCc7XG5pbXBvcnQgeyBNZWFzdXJlIH0gIGZyb20gJy4vLi4vbW9kZWxzL21lYXN1cmUubW9kZWwnO1xuaW1wb3J0IHsgTW9kZWxGYWN0b3J5IH0gIGZyb20gJy4vLi4vbW9kZWxzL21vZGVsLmZhY3RvcnknO1xuaW1wb3J0IHsgQmxvZ1Bvc3QgfSBmcm9tICcuLy4uL21vZGVscy9ibG9nLXBvc3QubW9kZWwnXG5pbXBvcnQgeyBHQVNlcnZpY2UgfSBmcm9tICcuL2dhLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RyaW5nSGVscGVyIH0gZnJvbSAnLi8uLi9oZWxwZXJzL3N0cmluZy5oZWxwZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuLyoqXG4gKiBFeHBvc2VzIHRoZSBUb29sd2F0Y2ggQVBJLlxuICogUmV0dXJucyBwcm9tZXNlcyBvbiBkb21haW4gb2JqZWN0c1xuICovXG5leHBvcnQgY2xhc3MgVHdBUElTZXJ2aWNlIHtcblxuXHQvKipcblx0ICogQWxsIHRoZSBIVFRQIGNvZGUgdXNlZCBieSB0aGUgdG9vbHdhdGNoIEFQSSBhcmUgZGVmaW5lZCBoZXJlLlxuXHQgKiBIdHRwIGNvZGVzIGNhbiBiZSB0byByZWZpbmUgdGhlIGVycm9yIHR5cGVzXG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIEhUVFBfQ09OVElOVUUgPSAxMDA7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1NXSVRDSElOR19QUk9UT0NPTFMgPSAxMDE7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1BST0NFU1NJTkcgPSAxMDI7ICAgICAgICAgICAgLy8gUkZDMjUxOFxuXG4gICAgLy8gU3VjY2Vzc1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlcXVlc3QgaGFzIHN1Y2NlZWRlZFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9PSyA9IDIwMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZXJ2ZXIgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYSBuZXcgcmVzb3VyY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfQ1JFQVRFRCA9IDIwMTtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfQUNDRVBURUQgPSAyMDI7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX05PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OID0gMjAzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcnZlciBzdWNjZXNzZnVsbHkgcHJvY2Vzc2VkIHRoZSByZXF1ZXN0LCB0aG91Z2ggbm8gY29udGVudCBpcyByZXR1cm5lZFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9OT19DT05URU5UID0gMjA0O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9SRVNFVF9DT05URU5UID0gMjA1O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9QQVJUSUFMX0NPTlRFTlQgPSAyMDY7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX01VTFRJX1NUQVRVUyA9IDIwNzsgICAgICAgICAgLy8gUkZDNDkxOFxuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9BTFJFQURZX1JFUE9SVEVEID0gMjA4OyAgICAgIC8vIFJGQzU4NDJcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfSU1fVVNFRCA9IDIyNjsgICAgICAgICAgICAgICAvLyBSRkMzMjI5XG5cbiAgICAvLyBSZWRpcmVjdGlvblxuXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX01VTFRJUExFX0NIT0lDRVMgPSAzMDA7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX01PVkVEX1BFUk1BTkVOVExZID0gMzAxO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9GT1VORCA9IDMwMjtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfU0VFX09USEVSID0gMzAzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIGhhcyBub3QgYmVlbiBtb2RpZmllZCBzaW5jZSB0aGUgbGFzdCByZXF1ZXN0XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX05PVF9NT0RJRklFRCA9IDMwNDtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfVVNFX1BST1hZID0gMzA1O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9SRVNFUlZFRCA9IDMwNjtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfVEVNUE9SQVJZX1JFRElSRUNUID0gMzA3O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9QRVJNQU5FTlRMWV9SRURJUkVDVCA9IDMwODsgIC8vIFJGQzcyMzhcblxuICAgIC8vIENsaWVudCBFcnJvclxuXG4gICAgLyoqXG4gICAgICogVGhlIHJlcXVlc3QgY2Fubm90IGJlIGZ1bGZpbGxlZCBkdWUgdG8gbXVsdGlwbGUgZXJyb3JzXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0JBRF9SRVFVRVNUID0gNDAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHVzZXIgaXMgdW5hdXRob3JpemVkIHRvIGFjY2VzcyB0aGUgcmVxdWVzdGVkIHJlc291cmNlXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1VOQVVUSE9SSVpFRCA9IDQwMTtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUEFZTUVOVF9SRVFVSVJFRCA9IDQwMjtcblxuICAgIC8qKlxuICAgICAqIFRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgaXMgdW5hdmFpbGFibGUgYXQgdGhpcyBwcmVzZW50IHRpbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfRk9SQklEREVOID0gNDAzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlcXVlc3RlZCByZXNvdXJjZSBjb3VsZCBub3QgYmUgZm91bmRcbiAgICAgKlxuICAgICAqIE5vdGU6IFRoaXMgaXMgc29tZXRpbWVzIHVzZWQgdG8gbWFzayBpZiB0aGVyZSB3YXMgYW4gVU5BVVRIT1JJWkVEICg0MDEpIG9yXG4gICAgICogRk9SQklEREVOICg0MDMpIGVycm9yLCBmb3Igc2VjdXJpdHkgcmVhc29uc1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9OT1RfRk9VTkQgPSA0MDQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmVxdWVzdCBtZXRob2QgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgZm9sbG93aW5nIHJlc291cmNlXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX01FVEhPRF9OT1RfQUxMT1dFRCA9IDQwNTtcblxuICAgIC8qKlxuICAgICAqIFRoZSByZXF1ZXN0IHdhcyBub3QgYWNjZXB0YWJsZVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9OT1RfQUNDRVBUQUJMRSA9IDQwNjtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUFJPWFlfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQgPSA0MDc7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1JFUVVFU1RfVElNRU9VVCA9IDQwODtcblxuICAgIC8qKlxuICAgICAqIFRoZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSBjb21wbGV0ZWQgZHVlIHRvIGEgY29uZmxpY3Qgd2l0aCB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAqIG9mIHRoZSByZXNvdXJjZVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9DT05GTElDVCA9IDQwOTtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfR09ORSA9IDQxMDtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTEVOR1RIX1JFUVVJUkVEID0gNDExO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9QUkVDT05ESVRJT05fRkFJTEVEID0gNDEyO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9SRVFVRVNUX0VOVElUWV9UT09fTEFSR0UgPSA0MTM7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1JFUVVFU1RfVVJJX1RPT19MT05HID0gNDE0O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9VTlNVUFBPUlRFRF9NRURJQV9UWVBFID0gNDE1O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9SRVFVRVNURURfUkFOR0VfTk9UX1NBVElTRklBQkxFID0gNDE2O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9FWFBFQ1RBVElPTl9GQUlMRUQgPSA0MTc7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0lfQU1fQV9URUFQT1QgPSA0MTg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkMyMzI0XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1VOUFJPQ0VTU0FCTEVfRU5USVRZID0gNDIyOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkM0OTE4XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0xPQ0tFRCA9IDQyMzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkM0OTE4XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0ZBSUxFRF9ERVBFTkRFTkNZID0gNDI0OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkM0OTE4XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1JFU0VSVkVEX0ZPUl9XRUJEQVZfQURWQU5DRURfQ09MTEVDVElPTlNfRVhQSVJFRF9QUk9QT1NBTCA9IDQyNTsgICAvLyBSRkMyODE3XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1VQR1JBREVfUkVRVUlSRUQgPSA0MjY7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkMyODE3XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1BSRUNPTkRJVElPTl9SRVFVSVJFRCA9IDQyODsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkM2NTg1XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1RPT19NQU5ZX1JFUVVFU1RTID0gNDI5OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkM2NTg1XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1JFUVVFU1RfSEVBREVSX0ZJRUxEU19UT09fTEFSR0UgPSA0MzE7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkM2NTg1XG5cbiAgICAvLyBTZXJ2ZXIgRXJyb3JcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZXJ2ZXIgZW5jb3VudGVyZWQgYW4gdW5leHBlY3RlZCBlcnJvclxuICAgICAqXG4gICAgICogTm90ZTogVGhpcyBpcyBhIGdlbmVyaWMgZXJyb3IgbWVzc2FnZSB3aGVuIG5vIHNwZWNpZmljIG1lc3NhZ2VcbiAgICAgKiBpcyBzdWl0YWJsZVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9JTlRFUk5BTF9TRVJWRVJfRVJST1IgPSA1MDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VydmVyIGRvZXMgbm90IHJlY29nbmlzZSB0aGUgcmVxdWVzdCBtZXRob2RcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTk9UX0lNUExFTUVOVEVEID0gNTAxO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9CQURfR0FURVdBWSA9IDUwMjtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfU0VSVklDRV9VTkFWQUlMQUJMRSA9IDUwMztcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfR0FURVdBWV9USU1FT1VUID0gNTA0O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURUQgPSA1MDU7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1ZBUklBTlRfQUxTT19ORUdPVElBVEVTX0VYUEVSSU1FTlRBTCA9IDUwNjsgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkMyMjk1XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0lOU1VGRklDSUVOVF9TVE9SQUdFID0gNTA3OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkM0OTE4XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0xPT1BfREVURUNURUQgPSA1MDg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkM1ODQyXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX05PVF9FWFRFTkRFRCA9IDUxMDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSRkMyNzc0XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX05FVFdPUktfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQgPSA1MTE7XG5cbiAgICBwdWJsaWMgc3RhdGljIHVzZXI6VXNlcjtcbiAgICBwcml2YXRlIHN0YXRpYyB0aW1lOntcbiAgICBcdHN5bmNEYXRlOkRhdGUsXG4gICAgXHRzeW5jQW5jaG9yOm51bWJlcixcbiAgICBcdG9mZnNldDpudW1iZXJcbiAgICB9XG5cblx0Ly9EZWZpbmVzIGhlYWRlcnMgYW5kIHJlcXVlc3Qgb3B0aW9uc1xuXHRwcml2YXRlIHN0YXRpYyBoZWFkZXJzOiBIZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuXHRwcml2YXRlIHN0YXRpYyBvcHRpb25zOiBSZXF1ZXN0T3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IFR3QVBJU2VydmljZS5oZWFkZXJzIH0pO1xuXHQvLyBSZWdyZXNzaW9uIFJDNS4gRG9lc24ndCBhY2NlcHQgZ2V0IHdpdGhvdXQgYm9keVxuXHRwcml2YXRlIHN0YXRpYyBvcHRpb25zR2V0OiBSZXF1ZXN0T3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IFR3QVBJU2VydmljZS5oZWFkZXJzLCBib2R5OlwiXCIgfSk7XG5cdFxuXHRwdWJsaWMgc3RhdGljIGJhc2VVcmw6c3RyaW5nID0gXCJodHRwczovL3Rvb2x3YXRjaC5pby9hcGkvXCI7XG5cdHB1YmxpYyBzdGF0aWMgYXNzZXRzVXJsID0gXCJhcHAvYXNzZXRzXCJcblx0cHJpdmF0ZSBzdGF0aWMgYXBpa2V5OnN0cmluZztcblxuXHQvKipcblx0ICogSW5qZWN0IGh0dHAgc2VydmljZVxuXHQgKiBAcGFyYW0ge0h0dHB9IHByaXZhdGUgaHR0cCBcblx0ICovXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7XG5cdFx0dGhpcy5hY2N1cmF0ZVRpbWUoKTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgcmVzZXRUaW1lKCl7XG5cdFx0VHdBUElTZXJ2aWNlLnRpbWUgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKipcblx0ICogTG9nIGEgdXNlciB1c2luZyBlbWFpbCBhbmQgcGFzc3dvcmRcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgZW1haWwgICBcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgcGFzc3dvcmRcblx0ICogQHJldHVybiB7UHJvbWlzZTxVc2VyPn0gICAgICAgICBcblx0ICovXG5cdGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+IHtcblxuXHRcdGxldCBjcmVkcyA9IHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQgfTtcblx0XHRyZXR1cm4gdGhpcy5odHRwLnB1dChcblx0XHRcdFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJ1c2Vyc1wiLCBcblx0XHRcdEpTT04uc3RyaW5naWZ5KGNyZWRzKSwgXG5cdFx0XHRUd0FQSVNlcnZpY2Uub3B0aW9uc1xuXHRcdClcblx0XHQubWFwKChyZXMpID0+IHsgcmV0dXJuIE1vZGVsRmFjdG9yeS5idWlsZFVzZXIocmVzLmpzb24oKSk7IH0pXG5cdFx0LnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRyZXMgPT4ge1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ0xPR0lOJyk7XG5cdFx0XHRcdFR3QVBJU2VydmljZS5hcGlrZXkgPSByZXMua2V5O1xuXHRcdFx0XHRUd0FQSVNlcnZpY2UuaGVhZGVycy5kZWxldGUoJ1gtQVBJLUtFWScpO1xuXHRcdFx0XHRUd0FQSVNlcnZpY2UuaGVhZGVycy5hcHBlbmQoJ1gtQVBJLUtFWScsIFR3QVBJU2VydmljZS5hcGlrZXkpO1xuXHRcdFx0XHRUd0FQSVNlcnZpY2UudXNlciA9IHJlcztcblx0XHRcdFx0cmV0dXJuIHJlcztcblx0XHRcdH0sXG5cdFx0XHRlcnIgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnIpXG5cdFx0KTtcblx0fSAgXG5cblxuICAgIC8qKlxuICAgICAqIEdldCBhbiB1c2VyIHVzaW5nIGhpcyBBUEkga2V5XG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAga2V5IFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFVzZXI+fSAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldFVzZXIoa2V5OnN0cmluZyk6UHJvbWlzZTxVc2VyPiB7XG5cbiAgICAgICAgXG4gICAgICAgIFR3QVBJU2VydmljZS5hcGlrZXkgPSBrZXk7XG4gICAgICAgIFR3QVBJU2VydmljZS5oZWFkZXJzLmRlbGV0ZSgnWC1BUEktS0VZJyk7XG4gICAgICAgIFR3QVBJU2VydmljZS5oZWFkZXJzLmFwcGVuZCgnWC1BUEktS0VZJywgVHdBUElTZXJ2aWNlLmFwaWtleSk7XG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgICAgICAgVHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcInVzZXJzXCIsIFxuICAgICAgICAgICAgVHdBUElTZXJ2aWNlLm9wdGlvbnNcbiAgICAgICAgKVxuICAgICAgICAubWFwKChyZXMpID0+IHsgcmV0dXJuIE1vZGVsRmFjdG9yeS5idWlsZFVzZXIocmVzLmpzb24oKSk7IH0pXG4gICAgICAgIC50b1Byb21pc2UoKS50aGVuKFxuICAgICAgICAgICAgcmVzID0+IHtcblxuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ0FVVE9MT0dJTicpO1xuICAgICAgICAgICAgICAgIFR3QVBJU2VydmljZS51c2VyID0gcmVzO1xuICAgICAgICAgICAgICAgIHJlcy5rZXkgPSBrZXk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnIpXG4gICAgICAgIClcblxuICAgIH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGEgbmV3IHVzZXJcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgZW1haWwgICBcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgcGFzc3dvcmRcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgbmFtZSAgICBcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgbGFzdG5hbWVcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgY291bnRyeSBcblx0ICogQHJldHVybiB7UHJvbWlzZTxVc2VyPn0gICAgICAgICBcblx0ICovXG5cdHNpZ251cChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCBsYXN0bmFtZT86IHN0cmluZywgY291bnRyeT86IHN0cmluZyk6IFByb21pc2U8VXNlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuXHRcdFx0VHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcInVzZXJzXCIsXG5cdFx0XHRKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdGVtYWlsOiBlbWFpbCwgXG5cdFx0XHRcdHBhc3N3b3JkOiBwYXNzd29yZCxcblx0XHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdFx0bGFzdG5hbWU6IGxhc3RuYW1lLFxuXHRcdFx0XHRjb3VudHJ5OmNvdW50cnlcblx0XHRcdH0pLFxuXHRcdFx0VHdBUElTZXJ2aWNlLm9wdGlvbnNcblx0XHQpXG5cdFx0Lm1hcCgocmVzKSA9PiB7IHJldHVybiBNb2RlbEZhY3RvcnkuYnVpbGRVc2VyKHJlcy5qc29uKCkpOyB9KVxuXHRcdC50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzID0+IHtcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdTSUdOVVAnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGEgbmV3IGZhY2Vib29rIHVzZXJcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgZW1haWwgICBcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgdG9rZW5cblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgbmFtZSAgICBcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgbGFzdG5hbWVcblx0ICogQHJldHVybiB7UHJvbWlzZTxVc2VyPn0gICAgIFxuXHQgKi9cblx0c2lnbnVwRmFjZWJvb2soZW1haWw6IHN0cmluZywgdG9rZW46IHN0cmluZywgbmFtZT86IHN0cmluZywgbGFzdG5hbWU/OiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+e1xuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChcblx0XHRcdFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJ1c2Vycy9mYWNlYm9va1wiLFxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRlbWFpbDogZW1haWwsIFxuXHRcdFx0XHR0b2tlbjogdG9rZW4sXG5cdFx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRcdGxhc3RuYW1lOiBsYXN0bmFtZVxuXHRcdFx0fSksXG5cdFx0XHRUd0FQSVNlcnZpY2Uub3B0aW9uc1xuXHRcdClcblx0XHQubWFwKChyZXMpID0+IHsgcmV0dXJuIE1vZGVsRmFjdG9yeS5idWlsZFVzZXIocmVzLmpzb24oKSk7IH0pXG5cdFx0LnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRyZXMgPT4ge1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ1NJR05VUCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBc2sgYSByZXNldCBwYXNzd29yZCBsaW5rXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59XG5cdCAqL1xuXHRyZXNldFBhc3N3b3JkKGVtYWlsOnN0cmluZyk6UHJvbWlzZTxib29sZWFuPntcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwidXNlcnMvcmVzZXRcIixcblx0XHRcdEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0ZW1haWw6IGVtYWlsXG5cdFx0XHR9KSxcblx0XHRcdFR3QVBJU2VydmljZS5vcHRpb25zXG5cdFx0KS50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ1JFU0VUX1BBU1NXT1JEJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cdFx0KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWxldGVzIHRoZSBhY2NvdW50IGN1cnJlbnRseSBsb2dnZWQgaW4uXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59XG5cdCAqL1xuXHRkZWxldGVBY2NvdW50KCk6UHJvbWlzZTxib29sZWFuPntcblxuXHRcdHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFxuXHRcdFx0VHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcInVzZXJzXCIsXG5cdFx0XHRUd0FQSVNlcnZpY2Uub3B0aW9uc1xuXHRcdCkudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdERUxFVEVfQUNDT1VOVCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXHRcdCkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG5cdH1cblxuXHRnZXRXYXRjaGVzKCk6IFByb21pc2U8V2F0Y2hbXT57XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwid2F0Y2hlc1wiLFxuXHRcdFx0VHdBUElTZXJ2aWNlLm9wdGlvbnNHZXQpXG5cdFx0Lm1hcCgocmVzKSA9PiB7IHJldHVybiBNb2RlbEZhY3RvcnkuYnVpbGRXYXRjaGVzKHJlcy5qc29uKCkpOyB9KVxuXHRcdC50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzID0+IHtcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdXQVRDSEVTJywgJ0dFVCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAgIH1cblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZSBvciBpbnNlcnQgYSB3YXRjaFxuXHQgKiBAcGFyYW0gIHtXYXRjaH0gICAgICAgICAgd2F0Y2hcblx0ICogQHJldHVybiB7UHJvbWlzZTxXYXRjaD59ICAgICAgXG5cdCAqL1xuXHR1cHNlcnRXYXRjaCh3YXRjaDogV2F0Y2gpOiBQcm9taXNlPFdhdGNoPiB7XG5cblx0XHRpZih3YXRjaC5pZCA9PSBudWxsKXtcblx0XHRcdHJldHVybiB0aGlzLmluc2VydFdhdGNoKHdhdGNoKTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiB0aGlzLnVwZGF0ZVdhdGNoKHdhdGNoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRGVsZXRlcyBhIHdhdGNoIGFuZCB1cGRhdGUgdGhlIHVzZXIgYWNjb3JkaW5nbHlcblx0ICogQHBhcmFtICB7VXNlcn0gICAgICAgICAgdXNlciAgXG5cdCAqIEBwYXJhbSAge1dhdGNofSAgICAgICAgIHdhdGNoIFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFVzZXI+fSAgICAgICBcblx0ICovXG5cdGRlbGV0ZVdhdGNoKHVzZXI6VXNlciwgd2F0Y2g6V2F0Y2gpOlByb21pc2U8VXNlcj57XG5cdFx0bGV0IGRlbGV0ZU9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBUd0FQSVNlcnZpY2UuaGVhZGVycyB9KTtcblx0XHRkZWxldGVPcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeSh7IHdhdGNoSWQ6IHdhdGNoLmlkIH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwid2F0Y2hlc1wiLFxuXHRcdFx0ZGVsZXRlT3B0aW9uc1xuXHRcdCkudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdHJlc3BvbnNlID0+IHtcblxuXHRcdFx0XHR1c2VyLndhdGNoZXMgPSB1c2VyLndhdGNoZXMuZmlsdGVyKFxuXHRcdFx0XHRcdGZ1bmN0aW9uKGZpbHRlcjogV2F0Y2gpIHtcblx0XHRcdFx0XHRcdHJldHVybiBmaWx0ZXIuaWQgIT0gd2F0Y2guaWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnV0FUQ0hFUycsICdERUxFVEUnKTtcblxuXHRcdFx0XHRyZXR1cm4gdXNlcjtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluc2VydCBvciB1cGRhdGUgYSBtZWFzdXJlIGFuZCB0aGUgcmVsYXRlZCB3YXRjaFxuXHQgKiBAcGFyYW0gIHtXYXRjaH0gICAgICAgICAgd2F0Y2ggIFxuXHQgKiBAcGFyYW0gIHtNZWFzdXJlfSAgICAgICAgbWVhc3VyZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFdhdGNoPn0gICAgICAgIFxuXHQgKi9cblx0dXBzZXJ0TWVhc3VyZSh3YXRjaDogV2F0Y2gsIG1lYXN1cmU6IE1lYXN1cmUpOiBQcm9taXNlPFdhdGNoPiB7XG5cdFx0aWYobWVhc3VyZS5pZCA9PSBudWxsKXtcblx0XHRcdHJldHVybiB0aGlzLmluc2VydE1lYXN1cmUod2F0Y2gsIG1lYXN1cmUpO1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIHRoaXMudXBkYXRlTWVhc3VyZSh3YXRjaCwgbWVhc3VyZSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIERlbGV0ZSBhIG1lYXN1cmUgYW5kIHRoZSB1cGRhdGUgdGhlIHJlbGF0ZWQgd2F0Y2hcblx0ICogQHBhcmFtICB7V2F0Y2h9ICAgICAgICAgIHdhdGNoICBcblx0ICogQHBhcmFtICB7TWVhc3VyZX0gICAgICAgIG1lYXN1cmVcblx0ICogQHJldHVybiB7UHJvbWlzZTxXYXRjaD59ICAgICAgICBcblx0ICovXG5cdGRlbGV0ZU1lYXN1cmUod2F0Y2g6IFdhdGNoLCBtZWFzdXJlOiBNZWFzdXJlKTogUHJvbWlzZTxXYXRjaD4ge1xuXG5cdFx0bGV0IGRlbGV0ZU9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBUd0FQSVNlcnZpY2UuaGVhZGVycyB9KTtcblx0XHRkZWxldGVPcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeSh7bWVhc3VyZUlkOm1lYXN1cmUuaWR9KTtcblxuXHRcdHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFxuXHRcdFx0VHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcIm1lYXN1cmVzXCIsXG5cdFx0XHRkZWxldGVPcHRpb25zXG5cdFx0KS50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzcG9uc2UgPT4ge1xuXG5cdFx0XHRcdHdhdGNoLm1lYXN1cmVzID0gd2F0Y2gubWVhc3VyZXMuZmlsdGVyKFxuXHRcdFx0XHRcdGZ1bmN0aW9uKGZpbHRlcjogTWVhc3VyZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZpbHRlci5pZCAhPSBtZWFzdXJlLmlkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblxuXHRcdFx0XHR3YXRjaC5jb21wdXRlTmV4dCgpO1xuXHRcdFx0XHR3YXRjaC5oaXN0b3J5U2l6ZS0tO1xuXG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnTUVBU1VSRScsICdERUxFVEUnKTtcblxuXHRcdFx0XHRyZXR1cm4gd2F0Y2g7XG5cdFx0XHR9XG5cdFx0KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblx0fVxuXG5cdGdldEJsb2dQb3N0cygpOiBQcm9taXNlPEJsb2dQb3N0W10+e1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuXHRcdFx0XCJodHRwczovL2Jsb2cudG9vbHdhdGNoLmlvLz9qc29uPTFcIlxuXHRcdClcblx0XHQubWFwKChyZXMpID0+IHsgcmV0dXJuIE1vZGVsRmFjdG9yeS5idWlsZFBvc3RzKHJlcy5qc29uKCkpOyB9KVxuXHRcdC50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzID0+IHtcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdCTE9HJywgJ0dFVCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAgIH1cblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdpdmVuIGEgYnJhbmQsIHJldHVybnMgbGlrZWx5IGJyYW5kcyBvcmRlcmVkIGJ5IGNvbmZpZGVuY2Vcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgYnJhbmQgW2Rlc2NyaXB0aW9uXVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgICBbe2JyYW5kOnN0cmluZywgY29uZmlkZW5jZTpudW1iZXJ9XVxuXHQgKi9cblx0Z2V0TGlrZWx5QnJhbmRzKHdhdGNoOldhdGNoKTogUHJvbWlzZTx7d2F0Y2g6V2F0Y2gsIHByb3Bvc2Fsczpbe2JyYW5kOnN0cmluZywgbG9nbzpzdHJpbmcsIGNvbmZpZGVuY2U6bnVtYmVyfV19PntcblxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuXHRcdFx0VHdBUElTZXJ2aWNlLmFzc2V0c1VybCArICcvd2F0Y2gtYnJhbmQuanNvbicpXG5cdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSlcblx0XHQudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdGJyYW5kcyA9PiB7XG5cblx0XHRcdFx0dmFyIGxpa2VseUJyYW5kcyA9IHt3YXRjaDogd2F0Y2gsIHByb3Bvc2FsczpbXX07XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IGJyYW5kcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXG5cblx0XHRcdFx0XHRsZXQgbGV2ZW5zaHRlaW5EaXN0YW5jZSA9IFN0cmluZ0hlbHBlci5sZXZlbnNodGVpbihicmFuZHNbaV0ubmFtZSwgd2F0Y2guYnJhbmQpO1xuXHRcdFx0XHRcdGxldCBjb25maWRlbmNlID0gbGV2ZW5zaHRlaW5EaXN0YW5jZSAvIE1hdGgubWF4KHdhdGNoLmJyYW5kLmxlbmd0aCwgYnJhbmRzW2ldLm5hbWUubGVuZ3RoKSAqMTAwO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGxpa2VseUJyYW5kcy5wcm9wb3NhbHMucHVzaChcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0YnJhbmQ6YnJhbmRzW2ldLm5hbWUsXG5cdFx0XHRcdFx0XHRcdGxvZ286IGJyYW5kc1tpXS5pY29uLFxuXHRcdFx0XHRcdFx0XHRjb25maWRlbmNlOiAxMDAgLSBjb25maWRlbmNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxpa2VseUJyYW5kcy5wcm9wb3NhbHMgPSBsaWtlbHlCcmFuZHMucHJvcG9zYWxzLnNvcnQoZnVuY3Rpb24gKFxuXHRcdFx0XHRcdGE6e2JyYW5kOnN0cmluZywgY29uZmlkZW5jZTpudW1iZXJ9LCBcblx0XHRcdFx0XHRiOnticmFuZDpzdHJpbmcsIGNvbmZpZGVuY2U6bnVtYmVyfSl7XG5cdFx0XHRcdFx0cmV0dXJuIGIuY29uZmlkZW5jZSAtIGEuY29uZmlkZW5jZTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIGxpa2VseUJyYW5kcztcbiAgICAgICAgICAgIH1cblx0XHQpO1xuXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGtub3duIGJyYW5kc1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlfSBcblx0ICovXG5cdGdldEJyYW5kcygpOiBQcm9taXNlPFt7IG5hbWU6IHN0cmluZywgaWNvbjogc3RyaW5nLCBtb2RlbHM6c3RyaW5nfV0+IHtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcblx0XHRcdFR3QVBJU2VydmljZS5hc3NldHNVcmwgKyAnL3dhdGNoLWJyYW5kLmpzb24nKVxuXHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG5cdFx0LnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRicmFuZHMgPT4ge1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ0JSQU5EUycsICdHRVQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnJhbmRzO1xuICAgICAgICAgICAgfVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBtb2RlbCBvZiBhIGdpdmVuIGJyYW5kXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gIGJyYW5kXG5cdCAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgXG5cdCAqL1xuXHRnZXRNb2RlbHMoYnJhbmQ6c3RyaW5nKTogUHJvbWlzZTxbc3RyaW5nXT4ge1xuXG5cdFx0YnJhbmQgPSBTdHJpbmdIZWxwZXIucmVwbGFjZUFsbChicmFuZCwgXCIgXCIsIFwiXCIpO1xuXHRcdGJyYW5kID0gU3RyaW5nSGVscGVyLnJlcGxhY2VBbGwoYnJhbmQsIFwiJlwiLCBcIlwiKTtcblx0XHRcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcblx0XHRcdFR3QVBJU2VydmljZS5hc3NldHNVcmwgKyAnL3dhdGNoLW1vZGVscy8nICsgYnJhbmQgKyBcIi5qc29uXCIpXG5cdFx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKVxuXHRcdFx0LnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRtb2RlbHMgPT4ge1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ01PREVMUycsICdHRVQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWxzXG4gICAgICAgICAgICB9XG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIG1vZGVsIG9mIGEgZ2l2ZW4gYnJhbmRcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgYnJhbmRcblx0ICogQHJldHVybiB7UHJvbWlzZX0gICAgICBcblx0ICovXG5cdGdldENhbGliZXJzKGJyYW5kOnN0cmluZyk6IFByb21pc2U8W3N0cmluZ10+IHtcblxuXHRcdGJyYW5kID0gU3RyaW5nSGVscGVyLnJlcGxhY2VBbGwoYnJhbmQsIFwiIFwiLCBcIlwiKTtcblx0XHRicmFuZCA9IFN0cmluZ0hlbHBlci5yZXBsYWNlQWxsKGJyYW5kLCBcIiZcIiwgXCJcIik7XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYXNzZXRzVXJsICsgJy93YXRjaC1jYWxpYmVycy8nICsgYnJhbmQgKyBcIi5qc29uXCIpXG5cdFx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKVxuXHRcdFx0LnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRjYWxpYmVycyA9PiB7XG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnQ0FMSUJFUlMnLCAnR0VUJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGliZXJzXG4gICAgICAgICAgICB9XG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBwcmV2aW91c2x5IGNvbXB1dGVkIG9mZnNldFxuXHQgKiBAcmV0dXJuIHtudW1iZXJ9IFtkZXNjcmlwdGlvbl1cblx0ICovXG5cdGdldE9mZnNldFRpbWUoKTpudW1iZXJ7XG5cdFx0cmV0dXJuIFR3QVBJU2VydmljZS50aW1lLm9mZnNldDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXRyaWV2ZSBhdG9taWMgY2xvY2sgdGltZSBhZGp1c3RlZCBmb3IgbmV0d29yayBsYXRlbmN5XG5cdCAqIEBwYXJhbSAgeygpPT52b2lkfSBzdGF0dXNDYWxsYmFjayBDYWxsZWQgYXQgZWFjaCBwYXJ0aWFsIGNvbXBsZXRlXG5cdCAqIEBwYXJhbSAge251bWJlciA9IDB9IHByZWNpc29uIEhvdyBtYW55IGNhbGxzIHdlIHdhbnQgdG8gYXZlYWdlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8RGF0ZT59IFxuXHQgKi9cblx0YWNjdXJhdGVUaW1lKHN0YXR1c0NhbGxiYWNrPzooKT0+dm9pZCwgXG5cdFx0cHJlY2lzb246bnVtYmVyID0gMTApOiBQcm9taXNlPERhdGU+e1xuXG4gICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ1RJTUUnLCAnR0VUJyk7XG5cblxuXHRcdC8vSWYgd2UgYXJlbid0IGFscmVhZHkgc3luYydlZFxuXHRcdGlmKFR3QVBJU2VydmljZS50aW1lID09PSB1bmRlZmluZWQpe1xuXHRcdFx0Ly9TdG9yZXMgZWFjaCBQcm9taXNlIGluIGFycmF5XG5cdFx0XHRsZXQgcHJvbWlzZXM6UHJvbWlzZTxudW1iZXI+W10gPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcHJlY2lzb247ICsraSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKHRoaXMuZmV0Y2hUaW1lKHN0YXR1c0NhbGxiYWNrKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUHJvbWlzZS5hbGwoKSBpcyB0aGUgUHJvbWlzZSBlcXVpdmFsZW50IG9mIHRocmVhZC5qb2luKCkuXG5cdFx0XHQgKiBJdCdsbCB3YWl0IGZvciBhbGwgcHJvbWlzZXMgdG8gYmUgcmVjZWl2ZWQuIFxuXHRcdFx0ICpcblx0XHRcdCAqIFJldHVybnMgYSBkYXRlIGFkanVzdGVkIHcvIHRoZSBtZWRpYW4gb2Zmc2V0IGJldHdlZW4gXG5cdFx0XHQgKiBhdG9taWMgY2xvY2sgYW5kIGpzIHRpbWUuIFxuXHRcdFx0ICogVGhlIG9mZnNldCByZWNlaXZlZCBpbiBlYWNoIHByb21pc2UgYWxzbyBhY2NvdW50cyBmb3Jcblx0XHRcdCAqIHRoZSBuZXR3b3JrIHJvdW5kdHJpcCB0aW1lLlxuXHRcdFx0ICovXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKHJlc3VsdHM6YW55W10pID0+IHtcblx0XHRcdFx0cmVzdWx0cy5zb3J0KGZ1bmN0aW9uKGE6IGFueSwgYjogYW55KSB7IHJldHVybiBhIC0gYjsgfSk7XG5cblx0XHRcdFx0bGV0IGhhbGY6IG51bWJlciA9IE1hdGguZmxvb3IocmVzdWx0cy5sZW5ndGggLyAyKTtcblx0XHRcdFx0bGV0IG1lZGlhbk9mZnNldDtcblxuXHRcdFx0XHRpZiAocmVzdWx0cy5sZW5ndGggJSAyKSB7XG5cdFx0XHRcdFx0bWVkaWFuT2Zmc2V0ID0gcmVzdWx0c1toYWxmXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtZWRpYW5PZmZzZXQgPSAocmVzdWx0c1toYWxmIC0gMV0gKyByZXN1bHRzW2hhbGZdKSAvIDIuMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdFR3QVBJU2VydmljZS50aW1lID0ge1xuXHRcdFx0XHRcdHN5bmNEYXRlOiBuZXcgRGF0ZShEYXRlLm5vdygpIC0gbWVkaWFuT2Zmc2V0KSxcblx0XHRcdFx0XHRzeW5jQW5jaG9yOiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCksXG5cdFx0XHRcdFx0b2Zmc2V0Om1lZGlhbk9mZnNldFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHJldHVybiBUd0FQSVNlcnZpY2UudGltZS5zeW5jRGF0ZTtcblx0XHRcdH0pO1xuXHRcdC8vT25seSBjb21wdXRlIHRoZSBkaWZmZXJlbmNlIGZyb20gbGFzdCB0aW1lO1xuXHRcdH1lbHNle1xuXG5cdFx0XHRUd0FQSVNlcnZpY2UudGltZS5zeW5jRGF0ZSA9IG5ldyBEYXRlKFxuXHRcdFx0XHRUd0FQSVNlcnZpY2UudGltZS5zeW5jRGF0ZS5nZXRUaW1lKCkgK1xuXHRcdFx0XHR3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgLSBUd0FQSVNlcnZpY2UudGltZS5zeW5jQW5jaG9yXG5cdFx0XHQpO1xuXHRcdFx0XG5cdFx0XHRUd0FQSVNlcnZpY2UudGltZS5zeW5jQW5jaG9yID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2U8RGF0ZT4oXG5cdFx0XHRcdChyZXNvbHZlLCByZWplY3QpID0+IHsgXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coVHdBUElTZXJ2aWNlLnRpbWUpO1xuXHRcdFx0XHRcdHJlc29sdmUoVHdBUElTZXJ2aWNlLnRpbWUuc3luY0RhdGUpOyBcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRmV0Y2ggb2Zmc2V0IGJldHdlZW4gYXRvbWljIGNsb2NrIGFuZCBqcyB0aW1lXG5cdCAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gc3RhdHVzQ2FsbGJhY2tcblx0ICovXG5cdHB1YmxpYyBmZXRjaFRpbWUoc3RhdHVzQ2FsbGJhY2s/OiAoKSA9PiB2b2lkKVxuXHRcdDogUHJvbWlzZTxudW1iZXI+IHtcblxuXHRcdGxldCBiZWZvcmVUaW1lOiBudW1iZXIgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoVHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcInRpbWVcIiwgVHdBUElTZXJ2aWNlLm9wdGlvbnNHZXQpXG5cdFx0XHQudG9Qcm9taXNlKClcblx0XHRcdC50aGVuKFxuXHRcdFx0XHRyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0aWYgKHN0YXR1c0NhbGxiYWNrICE9PSB1bmRlZmluZWQpe1xuXHRcdFx0XHRcdFx0c3RhdHVzQ2FsbGJhY2soKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsZXQgbm93OiBudW1iZXIgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG5cdFx0XHRcdFx0bGV0IHRpbWVEaWZmID0gKG5vdyAtIGJlZm9yZVRpbWUpIC8gMjtcblx0XHRcdFx0XHRsZXQgc2VydmVyVGltZSA9IHJlc3BvbnNlLmpzb24oKS50aW1lIC0gdGltZURpZmY7XG5cdFx0XHRcdFx0cmV0dXJuIERhdGUubm93KCkgLSBzZXJ2ZXJUaW1lO1xuXHRcdFx0XHR9LCBcblx0XHRcdFx0cmVqZWN0ID0+IGNvbnNvbGUuZXJyb3IocmVqZWN0KVxuXHRcdCkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlIGEgbWVhc3VyZSBhbmQgdGhlIHdhdGNoIGl0IGJlbG9uZ3MgdG9cblx0ICogQHBhcmFtICB7V2F0Y2h9ICAgICAgICAgIHdhdGNoICBcblx0ICogQHBhcmFtICB7TWVhc3VyZX0gICAgICAgIG1lYXN1cmVcblx0ICogQHJldHVybiB7UHJvbWlzZTxXYXRjaD59ICAgICAgICBcblx0ICovXG5cdHByaXZhdGUgdXBkYXRlTWVhc3VyZSh3YXRjaDogV2F0Y2gsIG1lYXN1cmU6IE1lYXN1cmUpOiBQcm9taXNlPFdhdGNoPiB7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wdXQoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwibWVhc3VyZXNcIixcblx0XHRcdEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0bWVhc3VyZUlkOiBtZWFzdXJlLmlkLFxuXHRcdFx0XHRyZWZlcmVuY2VUaW1lOiBtZWFzdXJlLmFjY3VyYWN5UmVmZXJlbmNlVGltZSxcblx0XHRcdFx0dXNlclRpbWU6IG1lYXN1cmUuYWNjdXJhY3lVc2VyVGltZVxuXHRcdFx0fSksXG5cdFx0XHRUd0FQSVNlcnZpY2Uub3B0aW9uc1xuXHRcdCkudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdNRUFTVVJFJywgJ1NFQ09ORCcpO1xuXHRcdFx0XHRsZXQganNvbiA9IHJlc3BvbnNlLmpzb24oKS5yZXN1bHQ7XG5cdFx0XHRcdG1lYXN1cmUuYWRkQWNjdXJhY3koanNvbi5hY2N1cmFjeSwganNvbi5hY2N1cmFjeUFnZSwganNvbi5wZXJjZW50aWxlKTtcblx0XHRcdFx0d2F0Y2gudXBzZXJ0TWVhc3VyZShtZWFzdXJlKTtcblx0XHRcdFx0d2F0Y2gubmV4dCA9IFdhdGNoQWN0aW9uLk1lYXN1cmU7XG5cdFx0XHRcdHJldHVybiB3YXRjaDtcblx0XHRcdH1cblx0XHQpLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluc2VydCBhIG1lYXN1cmUgYW5kIHRoZSB3YXRjaCBpdCBiZWxvbmdzIHRvXG5cdCAqIEBwYXJhbSAge1dhdGNofSAgICAgICAgICB3YXRjaCAgXG5cdCAqIEBwYXJhbSAge01lYXN1cmV9ICAgICAgICBtZWFzdXJlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8V2F0Y2g+fSAgICAgICAgXG5cdCAqL1xuXHRwcml2YXRlIGluc2VydE1lYXN1cmUod2F0Y2g6IFdhdGNoLCBtZWFzdXJlOiBNZWFzdXJlKTogUHJvbWlzZTxXYXRjaD4ge1xuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChcblx0XHRcdFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJtZWFzdXJlc1wiLFxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHR3YXRjaElkOiB3YXRjaC5pZCxcblx0XHRcdFx0cmVmZXJlbmNlVGltZTogbWVhc3VyZS5tZWFzdXJlUmVmZXJlbmNlVGltZSxcblx0XHRcdFx0dXNlclRpbWU6IG1lYXN1cmUubWVhc3VyZVVzZXJUaW1lXG5cdFx0XHR9KSxcblx0XHRcdFR3QVBJU2VydmljZS5vcHRpb25zXG5cdFx0KS50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ01FQVNVUkUnLCAnRklSU1QnKTtcblx0XHRcdFx0bWVhc3VyZS5pZCA9IHJlc3BvbnNlLmpzb24oKS5tZWFzdXJlSWQ7XG5cdFx0XHRcdHdhdGNoLm1lYXN1cmVzLnB1c2gobWVhc3VyZSk7XG5cdFx0XHRcdHdhdGNoLmhpc3RvcnlTaXplKys7XG5cdFx0XHRcdHJldHVybiB3YXRjaDtcblx0XHRcdH1cblx0XHQpLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluc2VydCBhIHdhdGNoXG5cdCAqIEBwYXJhbSAge1dhdGNofSAgICAgICAgICB3YXRjaFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFdhdGNoPn0gICAgICBcblx0ICovXG5cdHByaXZhdGUgaW5zZXJ0V2F0Y2god2F0Y2g6IFdhdGNoKTpQcm9taXNlPFdhdGNoPntcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwid2F0Y2hlc1wiLFxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRicmFuZDogd2F0Y2guYnJhbmQsXG5cdFx0XHRcdG5hbWU6d2F0Y2gubmFtZSxcblx0XHRcdFx0eWVhck9mQnV5OndhdGNoLnllYXJPZkJ1eSxcblx0XHRcdFx0c2VyaWFsOiB3YXRjaC5zZXJpYWwsXG5cdFx0XHRcdGNhbGliZXI6d2F0Y2guY2FsaWJlclxuXHRcdFx0fSksXG5cdFx0XHRUd0FQSVNlcnZpY2Uub3B0aW9uc1xuXHRcdCkudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdHJlc3BvbnNlID0+IHtcblx0XHRcdFx0d2F0Y2guaWQgPSByZXNwb25zZS5qc29uKCkuaWQ7XG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnV0FUQ0gnLCAnUFVUJyk7XG5cdFx0XHRcdHJldHVybiB3YXRjaDtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZSBhIHdhdGNoXG5cdCAqIEBwYXJhbSAge1dhdGNofSAgICAgICAgICB3YXRjaFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFdhdGNoPn0gICAgICBcblx0ICovXG5cdHByaXZhdGUgdXBkYXRlV2F0Y2god2F0Y2g6IFdhdGNoKTogUHJvbWlzZTxXYXRjaD4ge1xuXHRcdHJldHVybiB0aGlzLmh0dHAucHV0KFxuXHRcdFx0VHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcIndhdGNoZXNcIixcblx0XHRcdEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0aWQ6IHdhdGNoLmlkLFxuXHRcdFx0XHRicmFuZDogd2F0Y2guYnJhbmQsXG5cdFx0XHRcdG5hbWU6IHdhdGNoLm5hbWUsXG5cdFx0XHRcdHllYXJPZkJ1eTogd2F0Y2gueWVhck9mQnV5LFxuXHRcdFx0XHRzZXJpYWw6IHdhdGNoLnNlcmlhbCxcblx0XHRcdFx0Y2FsaWJlcjogd2F0Y2guY2FsaWJlclxuXHRcdFx0fSksXG5cdFx0XHRUd0FQSVNlcnZpY2Uub3B0aW9uc1xuXHRcdCkudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdXQVRDSCcsICdVUERBVEUnKTtcblx0XHRcdFx0cmV0dXJuIHdhdGNoO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBMb2cgZXJyb3IgdG8gY29uc29sZVxuXHQgKiBAcGFyYW0ge2FueX0gZXJyb3IgW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblx0cHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XG5cdFx0Y29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQnLCBlcnJvciB8fCBcInBsb3BcIik7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcblx0fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvdHdhcGkuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21vb24tcGhhc2VzJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibW9vbi1waGFzZS1jb250YWluZXJcIj5cblx0PGRpdiBjbGFzcz1cIm1vb24tbWFza1wiPjwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwibW9vbi1kaXNxdWVcIj48L2Rpdj5cbjwvZGl2PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBNb29uUGhhc2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBhbmdsZU1vb246bnVtYmVyO1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cbiAgICBsZXQgdG9kYXk6RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGxhc3RGdWxsTW9vbiA9IG5ldyBEYXRlKDIwMTYsIDEwLCAxNCwgMTIsIDAsIDAsIDApO1xuICAgIGxldCBkaWZmRGF5cyA9IE1hdGgucm91bmQoTWF0aC5hYnMoKHRvZGF5LmdldFRpbWUoKSAtIGxhc3RGdWxsTW9vbi5nZXRUaW1lKCkpLygyNCo2MCo2MCoxMDAwKSkpO1xuXG5cdCAgdGhpcy5hbmdsZU1vb24gPSBkaWZmRGF5cyAqIDYuMTAxNjk0OTE1MjU0OyAgIFxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICBcdGxldCBlbGVtID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1vb24tZGlzcXVlJylcbiAgXHRlbGVtLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdyb3RhdGVaKCcgKyB0aGlzLmFuZ2xlTW9vbiArICdkZWcpJztcbiAgXHRlbGVtLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVaKCcgKyB0aGlzLmFuZ2xlTW9vbiArICdkZWcpJztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlyZWN0aXZlcy9jbG9jay9tb29uLXBoYXNlcy9tb29uLXBoYXNlcy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRpb25SZXN1bHQge1xuIFtrZXk6c3RyaW5nXTpib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgR2xvYmFsVmFsaWRhdG9yIHtcblxuXHRzdGF0aWMgbWFpbEZvcm1hdChjb250cm9sOiBGb3JtQ29udHJvbCk6IFZhbGlkYXRpb25SZXN1bHQge1xuXG4gICAgICAgIHZhciBFTUFJTF9SRUdFWFAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQvaTtcblxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSAhPSBcIlwiICYmIChjb250cm9sLnZhbHVlLmxlbmd0aCA8PSA1IHx8ICFFTUFJTF9SRUdFWFAudGVzdChjb250cm9sLnZhbHVlKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IFwiaW5jb3JyZWN0TWFpbEZvcm1hdFwiOiB0cnVlIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWF0Y2goZ3JvdXA6Rm9ybUdyb3VwLCBmcm9tOiBzdHJpbmcsIGRpc3RhbnQ6IHN0cmluZyk6IFZhbGlkYXRpb25SZXN1bHQge1xuXG4gICAgXHRjb25zb2xlLmxvZyhncm91cCk7XG5cbiAgICBcdGlmIChncm91cCAmJiBncm91cC5jb250cm9sc1tmcm9tXS52YWx1ZSAhPSBncm91cC5jb250cm9sc1tmcm9tXS52YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgXCJub01hdGNoXCI6IHRydWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlyZWN0aXZlcy9nbG9iYWwtdmFsaWRhdG9yLnRzIiwiZXhwb3J0IGNsYXNzIEJsb2dQb3N0e1xuXHRpZDpudW1iZXI7XG5cdHRpdGxlOnN0cmluZztcblx0ZGF0ZTpEYXRlO1xuXHRleGNlcnB0OnN0cmluZztcblx0dXJsOnN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB0aXRsZTogc3RyaW5nLCBkYXRlOiBEYXRlLCBleGNlcnB0OiBzdHJpbmcsIHVybDogc3RyaW5nKXtcblxuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLnRpdGxlID0gdGhpcy5kZWNvZGVIVE1MRW50aXRpZXModGl0bGUpO1xuXHRcdHRoaXMuZGF0ZSA9IGRhdGU7XG5cdFx0dGhpcy5leGNlcnB0ID0gdGhpcy5kZWNvZGVIVE1MRW50aXRpZXMoZXhjZXJwdCk7XG5cdFx0U3RyaW5nLmZyb21DaGFyQ29kZVxuXHRcdHRoaXMudXJsID0gdXJsO1xuXHR9XG5cblx0cHVibGljIHRvU3RyaW5nID0gKCkgOiBzdHJpbmcgPT4ge1xuXHRcdHJldHVybiBgQmxvZ1Bvc3QgKGlkOiAke3RoaXMuaWR9LFxuXHRcdFx0XHR0aXRsZTogJHt0aGlzLnRpdGxlfSxcblx0XHRcdFx0ZGF0ZTogJHt0aGlzLmRhdGV9LFxuXHRcdFx0XHRleGNlcnB0OiAke3RoaXMuZXhjZXJwdH0sXG5cdFx0XHRcdHVybDogJHt0aGlzLnVybH0pYDtcblx0fVxuXG5cdHByaXZhdGUgZGVjb2RlSFRNTEVudGl0aWVzKHN0cjpzdHJpbmcpIHtcblxuXHRcdHZhciB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cdFx0c3RyID0gc3RyLnJlcGxhY2UoLzxzY3JpcHRbXj5dKj4oW1xcU1xcc10qPyk8XFwvc2NyaXB0Pi9nbWksICcnKTtcbiAgICAgIFx0c3RyID0gc3RyLnJlcGxhY2UoLzxcXC8/XFx3KD86W15cIic+XXxcIlteXCJdKlwifCdbXiddKicpKj4vZ21pLCAnJyk7XG4gICAgICBcdHN0ciA9IHN0ci5yZXBsYWNlKCdbUmVhZCBtb3Jl4oCmXScsICcnKTtcblx0ICAgIHR4dC5pbm5lckhUTUwgPSBzdHI7XG5cblx0ICAgIHJldHVybiB0eHQudmFsdWU7XG4gIFx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVscy9ibG9nLXBvc3QubW9kZWwudHMiLCJpbXBvcnQgeyBXYXRjaCB9IGZyb20gJy4vd2F0Y2gubW9kZWwnXG5cbmV4cG9ydCBjbGFzcyBVc2Vye1xuXHRpZDpudW1iZXI7XG5cdGVtYWlsOnN0cmluZztcblx0bmFtZTpzdHJpbmc7XG5cdGxhc3RuYW1lOnN0cmluZztcblx0Y291bnRyeTpzdHJpbmc7XG5cdHJlZ2lzdGVyRGF0ZTpzdHJpbmc7XG5cdGtleTpzdHJpbmc7XG5cdHdhdGNoZXM6V2F0Y2hbXSA9IFtdO1xuXHRlbWFpbFByZWZlcmVuY2VzOkVtYWlsUHJlZmVyZW5jZXMgPSBFbWFpbFByZWZlcmVuY2VzLk5vbmU7XG5cblx0Y29uc3RydWN0b3IoaWQ6IG51bWJlcixlbWFpbDogc3RyaW5nLG5hbWU6IHN0cmluZyxcblx0XHRsYXN0bmFtZTogc3RyaW5nLGNvdW50cnk6IHN0cmluZyxyZWdpc3RlckRhdGU6IFxuXHRcdHN0cmluZyxrZXk6IHN0cmluZyx3YXRjaGVzOiBXYXRjaFtdKXtcblxuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLmVtYWlsID0gZW1haWw7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmxhc3RuYW1lID0gbGFzdG5hbWU7XG5cdFx0dGhpcy5jb3VudHJ5ID0gY291bnRyeTtcblx0XHR0aGlzLnJlZ2lzdGVyRGF0ZSA9IHJlZ2lzdGVyRGF0ZTtcblx0XHR0aGlzLmtleSA9IGtleTtcblx0XHR0aGlzLndhdGNoZXMgPSB3YXRjaGVzO1xuXHR9XG5cblx0dXBzZXJ0V2F0Y2god2F0Y2g6V2F0Y2gpe1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy53YXRjaGVzLmxlbmd0aDsgaSsrKSB7XG5cblx0XHRcdGlmKHRoaXMud2F0Y2hlc1tpXS5pZCA9PSB3YXRjaC5pZCl7XG5cdFx0XHRcdHRoaXMud2F0Y2hlc1tpXSA9IHdhdGNoO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy53YXRjaGVzLnB1c2god2F0Y2gpO1xuXHR9XG5cblx0cHVibGljIHRvU3RyaW5nID0gKCkgOiBzdHJpbmcgPT4ge1xuXG5cdFx0cmV0dXJuIGBVc2VyIChcblx0XHRcdGlkOiAke3RoaXMuaWR9LCBcblx0XHRcdGVtYWlsOiAke3RoaXMuZW1haWx9LCBcblx0XHRcdG5hbWU6ICR7dGhpcy5uYW1lfSwgXG5cdFx0XHRsYXN0bmFtZTogJHt0aGlzLmxhc3RuYW1lfSwgXG5cdFx0XHRjb3VudHJ5OiAke3RoaXMuY291bnRyeX0sIFxuXHRcdFx0cmVnaXN0ZXJEYXRlOiAke3RoaXMucmVnaXN0ZXJEYXRlfSwgXG5cdFx0XHRrZXk6ICR7dGhpcy5rZXl9LCBcblx0XHRcdHdhdGNoZXM6ICR7dGhpcy53YXRjaGVzfSlgO1xuICAgIH1cblxufVxuXG5leHBvcnQgZW51bSBFbWFpbFByZWZlcmVuY2VzIHtcblxuXHROb25lID0gMCxcblx0Rmlyc3RXYXRjaCA9IDEgPDwgMSxcblx0Rmlyc3RNZWFzdXJlID0gMSA8PCAyLFxuXHREYXlBY2N1cmFjeSA9IDEgPDwgMyxcblx0V2Vla0FjY3VyYWN5ID0gMSA8PCA0LFxuXHRSZXN1bHQgPSAxIDw8IDUsXG5cdE5ld01lYXN1cmUgPSAxIDw8IDYsXG5cdFNlY29uZFdhdGNoID0gMSA8PCA3LFxuXHRDb21lYmFjayA9IDEgPDwgOCxcblx0V2F0Y2hTdG9yaWVzID0gMSA8PCA5XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbHMvdXNlci5tb2RlbC50cyIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnYXJldGhtZXRpY1NpZ24nXG59KSBcbmV4cG9ydCBjbGFzcyBBcmV0aG1ldGljU2lnbiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZih2YWx1ZSA+PSAwKXtcbiAgICAgICAgcmV0dXJuIFwiK1wiICsgdmFsdWU7XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BpcGVzL2FyZXRobWV0aWMtc2lnbi5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdrRm9ybWF0dGVyJ1xyXG59KSBcclxuZXhwb3J0IGNsYXNzIEtGb3JtYXR0ZXIgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgLy93ZSBleHBlY3QgYSBzaWduZWQgbnVtYmVyIChpLmUgKzIuNylcclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcblxyXG4gIFx0bGV0IHNpZ246c3RyaW5nID0gdmFsdWUuY2hhckF0KDApO1xyXG4gIFx0dmFsdWUgPSB2YWx1ZS5zdWJzdHIoMSk7XHJcbiAgXHRsZXQgbnVtYmVyID0gTnVtYmVyKHZhbHVlKTtcclxuXHJcbiAgXHRpZihNYXRoLmFicyhudW1iZXIpID4gOTk5KXtcclxuICBcdFx0cmV0dXJuIHNpZ24gKyAobnVtYmVyLzEwMDApLnRvRml4ZWQoMCkgKyAnayc7XHJcbiAgXHR9ZWxzZSBpZihNYXRoLmFicyhudW1iZXIpID4gMTAwKXtcclxuICBcdFx0cmV0dXJuIHNpZ24gKyBudW1iZXIudG9GaXhlZCgwKTtcclxuICBcdH1lbHNle1xyXG4gIFx0XHRyZXR1cm4gc2lnbiArIG51bWJlci50b0ZpeGVkKDEpO1xyXG4gIFx0fVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGlwZXMvay1mb3JtYXR0ZXIucGlwZS50cyIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbGVhZGluZ1plcm8nXG59KVxuZXhwb3J0IGNsYXNzIExlYWRpbmdaZXJvIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmICh2YWx1ZSA8IDEwKSB7XG4gICAgICAgIHJldHVybiBcIjBcIiArIHZhbHVlO1xuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9waXBlcy9sZWFkaW5nLXplcm8ucGlwZS50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBBcmV0aG1ldGljU2lnbiB9IGZyb20gJy4vc3JjL3BpcGVzL2FyZXRobWV0aWMtc2lnbi5waXBlJztcbmltcG9ydCB7IExlYWRpbmdaZXJvIH0gZnJvbSAnLi9zcmMvcGlwZXMvbGVhZGluZy16ZXJvLnBpcGUnO1xuaW1wb3J0IHsgS0Zvcm1hdHRlciB9IGZyb20gJy4vc3JjL3BpcGVzL2stZm9ybWF0dGVyLnBpcGUnO1xuaW1wb3J0IHsgTW9vblBoYXNlc0NvbXBvbmVudCB9IGZyb20gJy4vc3JjL2RpcmVjdGl2ZXMvY2xvY2svbW9vbi1waGFzZXMvbW9vbi1waGFzZXMuY29tcG9uZW50JztcbmltcG9ydCB7IFR3QVBJU2VydmljZSB9IGZyb20gJy4vc3JjL3NlcnZpY2VzL3R3YXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgR0FTZXJ2aWNlIH0gZnJvbSAnLi9zcmMvc2VydmljZXMvZ2Euc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZUxvYWRlciB9IGZyb20gJ25nMi10cmFuc2xhdGUvbmcyLXRyYW5zbGF0ZSc7XG5cblxuLyoqXG4gKiBTRVJWSUNFU1xuICovXG5leHBvcnQgKiBmcm9tICcuL3NyYy9zZXJ2aWNlcy90d2FwaS5zZXJ2aWNlJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvc2VydmljZXMvZ2Euc2VydmljZSdcbi8qKlxuICogUElQRVNcbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvcGlwZXMvYXJldGhtZXRpYy1zaWduLnBpcGUnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9waXBlcy9sZWFkaW5nLXplcm8ucGlwZSdcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3BpcGVzL2stZm9ybWF0dGVyLnBpcGUnXG4vKipcbiAqIE1PREVMXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vc3JjL21vZGVscy93YXRjaC5tb2RlbCdcbmV4cG9ydCAqIGZyb20gJy4vc3JjL21vZGVscy91c2VyLm1vZGVsJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvbW9kZWxzL21lYXN1cmUubW9kZWwnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9tb2RlbHMvYmxvZy1wb3N0Lm1vZGVsJ1xuLyoqXG4gKiBESVJFQ1RJVkVTXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RpcmVjdGl2ZXMvY2xvY2svY2xvY2suY29tcG9uZW50J1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZGlyZWN0aXZlcy9jbG9jay9tb29uLXBoYXNlcy9tb29uLXBoYXNlcy5jb21wb25lbnQnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kaXJlY3RpdmVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudCdcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RpcmVjdGl2ZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kaXJlY3RpdmVzL3dhdGNoL3dhdGNoLmNvbXBvbmVudCdcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFyZXRobWV0aWNTaWduLFxuICAgIExlYWRpbmdaZXJvLFxuICAgIEtGb3JtYXR0ZXIsXG4gICAgTW9vblBoYXNlc0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBUd0FQSVNlcnZpY2UsXG4gICAgR0FTZXJ2aWNlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBcmV0aG1ldGljU2lnbixcbiAgICBMZWFkaW5nWmVybyxcbiAgICBLRm9ybWF0dGVyLFxuICAgIE1vb25QaGFzZXNDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgSHR0cE1vZHVsZVxuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFR3Q29yZU1vZHVsZSB7XG59IFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIENsb2NrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBtb250aDpzdHJpbmc7XG4gIGRheTpzdHJpbmc7XG4gIGRhdGU6RGF0ZTtcbiAgbmV4dExlYXA6bnVtYmVyO1xuICBtb250aE5hbWVzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xuICBkYXlOYW1lcyA9IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J107XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXG5cdHRoaXMuZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdHRoaXMubW9udGggPSB0aGlzLm1vbnRoTmFtZXNbdGhpcy5kYXRlLmdldE1vbnRoKCldO1xuXHR0aGlzLmRheSA9IHRoaXMuZGF5TmFtZXNbdGhpcy5kYXRlLmdldERheSgpXSArIFwiIFwiICsgdGhpcy5kYXRlLmdldERhdGUoKTtcblxuXHR0aGlzLm5leHRMZWFwID0gdGhpcy5kYXRlLmdldEZ1bGxZZWFyKCk7XG5cblx0XHR3aGlsZSghdGhpcy5pc0xlYXBZZWFyKHRoaXMubmV4dExlYXApKXtcblx0XHRcdHRoaXMubmV4dExlYXArKztcblx0XHR9XG4gIH1cblxuICBpc0xlYXBZZWFyKHllYXI6bnVtYmVyKXtcblx0cmV0dXJuICgoeWVhciAlIDQgPT0gMCkgJiYgKHllYXIgJSAxMDAgIT0gMCkpIHx8ICh5ZWFyICUgNDAwID09IDApO1xuICB9XG5cbiAgaW5pdExvY2FsQ2xvY2tzKCkge1xuXG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IHRoaXMuZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcblx0dmFyIHNlY29uZHMgPSB0aGlzLmRhdGUuZ2V0U2Vjb25kcygpO1xuXHR2YXIgbWludXRlcyA9IHRoaXMuZGF0ZS5nZXRNaW51dGVzKCk7XG5cdHZhciBob3VycyA9IHRoaXMuZGF0ZS5nZXRIb3VycygpO1xuXG5cdC8vIENyZWF0ZSBhbiBvYmplY3Qgd2l0aCBlYWNoIGhhbmQgYW5kIGl0J3MgYW5nbGUgaW4gZGVncmVlc1xuXHR2YXIgaGFuZHMgPSBbXG5cdFx0e1xuXHRcdFx0aGFuZDogJ2hvdXJzJyxcblx0XHRcdGFuZ2xlOiAoaG91cnMgKiAzMCkgKyAobWludXRlcyAvIDIpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRoYW5kOiAnbWludXRlcycsXG5cdFx0XHRhbmdsZTogKG1pbnV0ZXMgKiA2KSArIChzZWNvbmRzLzYwKSAqIDZcblx0XHR9LFxuXHRcdHtcblx0XHRcdGhhbmQ6ICdzZWNvbmRzJyxcblx0XHRcdGFuZ2xlOiAoc2Vjb25kcyAqIDYpICsgKG1pbGxpc2Vjb25kcy8xMDAwKSo2XG5cdFx0fVxuXHRdO1xuXG5cdC8vTG9vcCB0aHJvdWdoIGVhY2ggb2YgdGhlc2UgaGFuZHMgdG8gc2V0IHRoZWlyIGFuZ2xlXG5cdGZvciAodmFyIGogPSAwOyBqIDwgaGFuZHMubGVuZ3RoOyBqKyspIHtcblx0XHR2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnLicgKyBoYW5kc1tqXS5oYW5kXG5cdFx0KTtcblxuXHRcdGVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ3JvdGF0ZVooJyArIGhhbmRzW2pdLmFuZ2xlICsgJ2RlZyknO1xuXHRcdGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVooJyArIGhhbmRzW2pdLmFuZ2xlICsgJ2RlZyknO1xuXHR9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXJlY3RpdmVzL2Nsb2NrL2Nsb2NrLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICduZzItdHJhbnNsYXRlL25nMi10cmFuc2xhdGUnO1xuaW1wb3J0IHtUd0FQSVNlcnZpY2V9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvdHdhcGkuc2VydmljZSdcbmltcG9ydCB7IEdsb2JhbFZhbGlkYXRvciB9IGZyb20gJy4vLi4vZ2xvYmFsLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBHQVNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2dhLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyAgIFxuICBWYWxpZGF0b3JzLCAgXG4gIEZvcm1CdWlsZGVyLCAgXG4gIEZvcm1Hcm91cFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4gXG4vKipcbiAqIExvZ2luIGNvbXBvbmVudC4gUHJvdmlkZXMgYSBsb2dpbiBmb3JtIHdpdGggY29udHJvbGxlZCBhbmRcbiAqIGVtaXRzIGEgVXNlciAoJGV2ZW50IHVzZXJMb2dnZWQpIG9uIHN1Y2Nlc3NmdWwgbG9naW4uXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbG9naW5Gb3JtICAgICAgICAgICAgICA6IEZvcm1Hcm91cDtcbiAgZXJyb3JzICAgICAgICAgICAgICAgICA9IFtdO1xuICBzdWJtaXRBdHRlbXB0OmZhbHNlO1xuICB1c2VyTG9nZ2VkICAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGxvZ2luQXR0ZW1wdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciB3LyBzZXJ2aWNlIGluamVjdGlvblxuICAgKiBAcGFyYW0ge1RyYW5zbGF0ZVNlcnZpY2V9IHByaXZhdGUgdHJhbnNsYXRlIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtIHtUd0FQSVNlcnZpY2V9ICAgICBwcml2YXRlIHR3YXBpICAgICBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSB7Rm9ybUJ1aWxkZXJ9ICAgICAgcHJpdmF0ZSBidWlsZGVyICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0ZTogYW55LCBcbiAgICBwcm90ZWN0ZWQgdHdhcGkgIDogVHdBUElTZXJ2aWNlLCBcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyICA6IGFueVxuICApIHsgXG5cbiAgICAvL0xhbmcgZGVmaW5pdGlvblxuXHQgIHRoaXMudHJhbnNsYXRlLnNldERlZmF1bHRMYW5nKCdlbicpO1xuXHQgIHRoaXMudHJhbnNsYXRlLnVzZSgnZW4nKTtcblxuICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBlbWFpbCAgIDogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgR2xvYmFsVmFsaWRhdG9yLm1haWxGb3JtYXRdKV0sXG4gICAgICBwYXNzd29yZDogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNSldKV1cbiAgICB9KTtcblxuICB9XG5cbiAgLyoqXG4gICAqIExvZ2luIGFuIEZCIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZiVXNlciBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBvbkZiU3VibWl0KGZiVXNlcjp7XG4gICAgZW1haWw6IHN0cmluZywgXG4gICAgdG9rZW46IHN0cmluZyxcbiAgICBsYXN0bmFtZTogc3RyaW5nLCBcbiAgICBmaXJzdG5hbWU6IHN0cmluZ31cbiAgKXtcblxuICAgIHRoaXMuZXJyb3JzID0gW107XG5cbiAgICB0aGlzLmxvZ2luQXR0ZW1wdC5lbWl0KHRydWUpO1xuXG4gICAgLy9UcmllcyB0byBsb2dpbiBhbiB1c2VyIHVzaW5nIGhpcyBmYiBlbWFpbFxuICAgIHRoaXMudHdhcGkuc2lnbnVwRmFjZWJvb2soZmJVc2VyLmVtYWlsLCBmYlVzZXIudG9rZW4sIGZiVXNlci5sYXN0bmFtZSwgZmJVc2VyLmZpcnN0bmFtZSkudGhlbihcbiAgICAgICAgLy9zdWNjZXNzLCBhd2F5IHdlIGdvXG4gICAgICAgIHJlcyA9PiB7IFxuICAgICAgICAgIHRoaXMudXNlckxvZ2dlZC5lbWl0KHJlcyk7XG4gICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnRkJfTE9HSU4nLCAnU1VDQ0VTUycpO1xuICAgICAgICB9LCBcbiAgICAgICAgZXJyID0+IHtcblxuICAgICAgICAgIC8vRXJyb3IsIG1vc3QgbGlrZWx5IHRoZSB1c2VyIHRyaWVzIHRvIHNpZ25pblxuICAgICAgICAgIC8vdXNpbmcgZmFjZWJvb2sgd2hpbGUgaGUgaGFzIGEgcmVndWxhciBcbiAgICAgICAgICAvL2FjY291bnQgd2l0aCB0aGUgc2FtZSBlbWFpbC5cbiAgICAgICAgICB0aGlzLmxvZ2luQXR0ZW1wdC5lbWl0KGZhbHNlKTtcbiAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0NUQScsICdGQl9TSUdOVVAnLCAnRkFJTCcpO1xuICAgICAgICAgIHN3aXRjaCAoZXJyLnN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSA0MDE6XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ2NyZWRlbnRpYWxzJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnZXJyb3InKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMubG9naW5BdHRlbXB0LmVtaXQoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm0gc3VibWl0XG4gICAqIEBwYXJhbSB7c3RyaW5nfX0gdXNlciBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBvblN1Ym1pdCh1c2VyOntlbWFpbDpzdHJpbmcsIHBhc3N3b3JkOnN0cmluZ30pe1xuXG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICBcbiAgICAvL0Zvcm0gY29uc3RyYWludHMgYXJlIG9rXG4gICAgaWYodGhpcy5sb2dpbkZvcm0udmFsaWQpe1xuXG4gICAgICB0aGlzLmxvZ2luQXR0ZW1wdC5lbWl0KHRydWUpO1xuXG4gICAgICB0aGlzLnR3YXBpLmxvZ2luKHVzZXIuZW1haWwsIHVzZXIucGFzc3dvcmQpLnRoZW4oXG4gICAgICAgIHJlcyA9PiB7IFxuICAgICAgICAgIHRoaXMudXNlckxvZ2dlZC5lbWl0KHJlcyk7XG4gICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnTE9HSU4nLCAnU1VDQ0VTUycpO1xuICAgICAgICB9LCBcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0NUQScsICdMT0dJTicsICdGQUlMJyk7XG4gICAgICAgICAgc3dpdGNoIChlcnIuc3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlIDQwMTpcbiAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnY3JlZGVudGlhbHMnKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdlcnJvcicpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHRoaXMubG9naW5BdHRlbXB0LmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIG9uUGFzc3dvcmRSZXNldFN1Ym1pdChlbWFpbDpzdHJpbmcpe1xuICAgIHRoaXMudHdhcGkucmVzZXRQYXNzd29yZChlbWFpbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlyZWN0aXZlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnbmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlJztcbmltcG9ydCB7VHdBUElTZXJ2aWNlfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3R3YXBpLnNlcnZpY2UnXG5pbXBvcnQgeyBHbG9iYWxWYWxpZGF0b3IgfSBmcm9tICcuLy4uL2dsb2JhbC12YWxpZGF0b3InO1xuaW1wb3J0IHsgR0FTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9nYS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgICBcbiAgVmFsaWRhdG9ycyxcbiAgRm9ybUJ1aWxkZXIsICBcbiAgRm9ybUdyb3VwXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG4vKipcbiAqIFNpZ251cCBmb3JtLiBFbWl0cyBhIHVzZXJMb2dnZWQgZXZlbnQgb24gbmV3IHVzZXIgc2lnbnVwXG4gKi9cbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHNpZ251cEZvcm0gICA6IEZvcm1Hcm91cDtcbiAgc3VibWl0QXR0ZW1wdDpib29sZWFuID0gZmFsc2U7XG4gIGVycm9ycyAgICAgICA9IFtdO1xuICBjb3VudHJpZXMgICAgOltzdHJpbmddO1xuICBmaWx0ZXJlZExpc3QgPSBbXTtcbiAgcXVlcnkgICAgICAgIDogc3RyaW5nID0gXCJcIjtcblxuICBAT3V0cHV0KCkgdXNlckxvZ2dlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNpZ251cEF0dGVtcHQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIC8qKlxuICAgKiBDb25zdHJ1Y3RvciB3LyBzZXJ2aWNlIGluamVjdGlvblxuICAgKiBAcGFyYW0ge1RyYW5zbGF0ZVNlcnZpY2V9IHByaXZhdGUgdHJhbnNsYXRlIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtIHtUd0FQSVNlcnZpY2V9ICAgICBwcml2YXRlIHR3YXBpICAgICBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSB7Rm9ybUJ1aWxkZXJ9ICAgICAgcHJpdmF0ZSBidWlsZGVyICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGU6IGFueSwgXG4gICAgcHJpdmF0ZSB0d2FwaTogVHdBUElTZXJ2aWNlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBhbnkpIHsgXG5cbiAgICB0cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoJ2VuJyk7XG4gICAgdHJhbnNsYXRlLnVzZSgnZW4nKTtcblxuICAgIHRyYW5zbGF0ZS5nZXQoXCJjb3VudHJpZXNcIikuc3Vic2NyaWJlKChyZXN1bHQ6IFtzdHJpbmddKSA9PiB7XG4gICAgICB0aGlzLmNvdW50cmllcyA9IHJlc3VsdDtcbiAgICB9KTtcblxuICAgIHRoaXMuc2lnbnVwRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICBlbWFpbCAgICAgICAgIDogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgR2xvYmFsVmFsaWRhdG9yLm1haWxGb3JtYXRdKV0sXG4gICAgICAgIGVtYWlsUmVwZWF0ICAgOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBHbG9iYWxWYWxpZGF0b3IubWFpbEZvcm1hdF0pXSxcblxuICAgICAgICBwYXNzd29yZCAgICAgIDogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoOCldKV0sXG4gICAgICAgIHBhc3N3b3JkUmVwZWF0OiBbXCJcIiwgXG4gICAgICAgICAgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIFxuICAgICAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoOClcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICBsYXN0TmFtZSAgICAgIDogXCJcIixcbiAgICAgICAgZmlyc3ROYW1lICAgICA6IFwiXCIsXG4gICAgICAgIGNvdW50cnkgICAgICAgOiBcIlwiXG4gICAgICB9KTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFRyaW1zIHRoZSBmaWx0ZXJlZExpc3QgYWNjb3JpbmcgdG8gdGhlIFxuICAgKiBjb3VudHJ5IGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBmaWx0ZXIocXVlcnk6c3RyaW5nKSB7XG4gICAgdGhpcy5maWx0ZXJlZExpc3QgPSB0aGlzLmNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24oZWxlbWVudDpzdHJpbmcpe1xuICAgICAgcmV0dXJuIGVsZW1lbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQXNzaWduIHRoZSBjb3VudHJ5IGxhYmVsIHdoZW4gc2VsZWN0ZWQgXG4gICAqIGZyb20gdGhlIGxpc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IGl0ZW0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgc2VsZWN0KGl0ZW06c3RyaW5nKXtcbiAgICB0aGlzLnF1ZXJ5ID0gaXRlbTtcbiAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIHN1Ym1pdCB0aGUgZm9ybVxuICAgKiBAcGFyYW0ge3N0cmluZyAgICB9fSB1c2VyIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIG9uU3VibWl0KHVzZXI6e1xuICAgICAgZW1haWw6IHN0cmluZywgXG4gICAgICBwYXNzd29yZDogc3RyaW5nLFxuICAgICAgZW1haWxSZXBlYXQ6IHN0cmluZyxcbiAgICAgIHBhc3N3b3JkUmVwZWF0OiBzdHJpbmcsXG4gICAgICBsYXN0TmFtZTogc3RyaW5nLFxuICAgICAgZmlyc3ROYW1lOiBzdHJpbmdcbiAgICB9KSB7XG5cbiAgICB0aGlzLnN1Ym1pdEF0dGVtcHQgPSB0cnVlO1xuICAgIHRoaXMuZXJyb3JzID0gW107XG5cblxuICAgIGlmKHRoaXMuc2lnbnVwRm9ybS52YWxpZCAmJiBcbiAgICAgIHVzZXIucGFzc3dvcmQgPT0gdXNlci5wYXNzd29yZFJlcGVhdCAmJlxuICAgICAgdXNlci5lbWFpbCA9PSB1c2VyLmVtYWlsUmVwZWF0KXtcblxuICAgICAgdGhpcy5zaWdudXBBdHRlbXB0LmVtaXQodHJ1ZSk7XG5cbiAgICAgIHRoaXMudHdhcGkuc2lnbnVwKHVzZXIuZW1haWwsXG4gICAgICAgdXNlci5wYXNzd29yZCxcbiAgICAgICB1c2VyLmZpcnN0TmFtZSxcbiAgICAgICB1c2VyLmxhc3ROYW1lLFxuICAgICAgIHRoaXMucXVlcnkpLnRoZW4oXG4gICAgICAgIHJlcyA9PiB7IFxuICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQ1RBJywgJ1NJR05VUCcsICdTVUNDRVNTJyk7XG4gICAgICAgICAgdGhpcy51c2VyTG9nZ2VkLmVtaXQocmVzKSBcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQ1RBJywgJ1NJR05VUCcsICdGQUlMJyk7XG4gICAgICAgICAgc3dpdGNoIChlcnJvci5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgVHdBUElTZXJ2aWNlLkhUVFBfVU5BVVRIT1JJWkVEOlxuICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdlbWFpbC10YWtlbicpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ2Vycm9yJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIClcblxuICAgICAgdGhpcy5zaWdudXBBdHRlbXB0LmVtaXQoZmFsc2UpO1xuICAgIH0gZWxzZXtcblxuICAgICAgaWYodXNlci5wYXNzd29yZCAhPSB1c2VyLnBhc3N3b3JkUmVwZWF0KXtcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgncGFzc3dvcmQtbWF0Y2gnKTtcbiAgICAgIH1cblxuICAgICAgaWYodXNlci5lbWFpbCAhPSB1c2VyLmVtYWlsUmVwZWF0KXtcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnZW1haWwtbWF0Y2gnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlyZWN0aXZlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJ25nMi10cmFuc2xhdGUvbmcyLXRyYW5zbGF0ZSc7XG5cbmltcG9ydCB7IFdhdGNoIH0gZnJvbSAnLi8uLi8uLi9tb2RlbHMvd2F0Y2gubW9kZWwnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vLi4vLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0IHtUd0FQSVNlcnZpY2V9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvdHdhcGkuc2VydmljZSc7XG5pbXBvcnQgeyBHQVNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2dhLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyAgIFxuICBGb3JtQnVpbGRlciwgIFxuICBGb3JtR3JvdXAsXG4gIFZhbGlkYXRvcnNcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEZyb20gdG8gYWRkLCBkZWxldGUgYW5kIHVwZGF0ZSB3YXRjaGVzXG4gKi9cbmV4cG9ydCBjbGFzcyBXYXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdXNlcjogVXNlcjtcbiAgQE91dHB1dCgpIHdhdGNoU2F2ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHdhdGNoTW9kZWw6IFdhdGNoID0gbmV3IFdhdGNoKG51bGwsIFwiXCIpO1xuICB3YXRjaEZvcm0gICAgICAgIDogRm9ybUdyb3VwO1xuICBicmFuZHMgICAgICAgICAgIDogeyBuYW1lOiBzdHJpbmcsIGljb246IHN0cmluZywgbW9kZWxzOiBzdHJpbmcgfVtdID0gW107XG4gIG1vZGVscyAgICAgICAgICAgOiBzdHJpbmdbXSA9IFtdO1xuICBjYWxpYmVycyAgICAgICAgIDogc3RyaW5nW10gPSBbXTtcbiAgZmlsdGVyZWRCcmFuZExpc3Q6IHsgbmFtZTogc3RyaW5nLCBpY29uOiBzdHJpbmcsIG1vZGVsczogc3RyaW5nIH1bXSA9IFtdO1xuICBmaWx0ZXJlZE1vZGVsTGlzdDogc3RyaW5nW10gPSBbXTtcbiAgZmlsdGVyZWRDYWxpYmVyTGlzdCA6IHN0cmluZ1tdID0gW107XG4gIGVycm9yICAgICAgICAgICAgOiBib29sZWFuID0gZmFsc2U7XG4gIHN1Ym1pdEF0dGVtcHQgICAgOiBib29sZWFuID0gZmFsc2U7XG4gIGJyYW5kU2VsZWN0ZWQgICAgOiBib29sZWFuID0gZmFsc2U7XG4gIG1vZGVsU2VsZWN0ZWQgICAgOiBib29sZWFuID0gZmFsc2U7XG4gIGNhbGliZXJTZWxlY3RlZCAgOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIHdpdGggRElcbiAgICogQHBhcmFtIHtUcmFuc2xhdGVTZXJ2aWNlfSBwcml2YXRlIHRyYW5zbGF0ZSBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSB7VHdBUElTZXJ2aWNlfSAgICAgcHJpdmF0ZSB0d2FwaSAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0ge0Zvcm1CdWlsZGVyfSAgICAgIHByaXZhdGUgYnVpbGRlciAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGU6IGFueSxcbiAgICBwcml2YXRlIHR3YXBpICAgICAgOiBUd0FQSVNlcnZpY2UsIFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXIgICAgOiBhbnksXG4gICkge1xuXG4gICAgdHJhbnNsYXRlLnNldERlZmF1bHRMYW5nKCdlbicpO1xuICAgIHRyYW5zbGF0ZS51c2UoJ2VuJyk7XG4gICAgXG5cbiAgICB0aGlzLndhdGNoRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgaWQgICAgIDogdGhpcy53YXRjaE1vZGVsLmlkLFxuICAgICAgYnJhbmQgIDogW3RoaXMud2F0Y2hNb2RlbC5icmFuZCwgIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbmFtZSAgIDogW3RoaXMud2F0Y2hNb2RlbC5uYW1lLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNhbGliZXI6IHRoaXMud2F0Y2hNb2RlbC5jYWxpYmVyLFxuICAgICAgeWVhciAgIDogW3RoaXMud2F0Y2hNb2RlbC55ZWFyT2ZCdXksIFZhbGlkYXRvcnMuY29tcG9zZShcbiAgICAgICAgW1ZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLCAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoNCldXG4gICAgICApXSxcbiAgICAgIHNlcmlhbCA6IHRoaXMud2F0Y2hNb2RlbC5zZXJpYWxcbiAgICB9KTtcblxuXG4gICAgdGhpcy50d2FwaS5nZXRCcmFuZHMoKS50aGVuKFxuICAgICAgcmVzID0+IHtcbiAgICAgICAgdGhpcy5icmFuZHMgPSByZXM7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBbc2VsZWN0QnJhbmQgZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBicmFuZCBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBzZWxlY3RCcmFuZChicmFuZDogc3RyaW5nKXtcbiAgICB0aGlzLmJyYW5kU2VsZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMudHdhcGkuZ2V0TW9kZWxzKGJyYW5kLnRvTG93ZXJDYXNlKCkpLnRoZW4oXG4gICAgICByZXMgICA9PiB0aGlzLm1vZGVscyA9IHJlcyxcbiAgICAgIGVycm9yID0+IHRoaXMubW9kZWxzID0gW11cbiAgICApO1xuICAgIFxuICAgIHRoaXMudHdhcGkuZ2V0Q2FsaWJlcnMoYnJhbmQudG9Mb3dlckNhc2UoKSkudGhlbihcbiAgICAgIHJlcyAgID0+IHRoaXMuY2FsaWJlcnMgPSByZXMsXG4gICAgICBlcnJvciA9PiB0aGlzLmNhbGliZXJzID0gW11cbiAgICApO1xuXG4gICAgdGhpcy5maWx0ZXJlZEJyYW5kTGlzdCA9IFtdO1xuICAgIHRoaXMud2F0Y2hNb2RlbC5icmFuZCA9IGJyYW5kO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhIG1vZGVsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlbCBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBzZWxlY3RNb2RlbChtb2RlbDogc3RyaW5nKSB7XG4gICAgdGhpcy5tb2RlbFNlbGVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmZpbHRlcmVkTW9kZWxMaXN0ID0gW107XG4gICAgdGhpcy53YXRjaE1vZGVsLm5hbWUgPSBtb2RlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3QgYSBjYWxpYmVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYWxpYmVyIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHNlbGVjdENhbGliZXIoY2FsaWJlcjogc3RyaW5nKSB7XG4gICAgdGhpcy5jYWxpYmVyU2VsZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMuZmlsdGVyZWRDYWxpYmVyTGlzdCA9IFtdO1xuICAgIHRoaXMud2F0Y2hNb2RlbC5jYWxpYmVyID0gY2FsaWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXIgYnJhbmRzIGFjY29yZGluZyB0aGUgYnJhbmRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJyYW5kIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGZpbHRlckJyYW5kKGJyYW5kOiBzdHJpbmcpIHtcblxuICAgIGlmKHRoaXMuYnJhbmRTZWxlY3RlZCA9PSBmYWxzZSl7XG4gICAgICB0aGlzLmZpbHRlcmVkQnJhbmRMaXN0ID0gdGhpcy5icmFuZHMuZmlsdGVyKFxuICAgICAgICBmdW5jdGlvbihlbGVtZW50OiB7IG5hbWU6IHN0cmluZywgaWNvbjogc3RyaW5nLCBtb2RlbHM6IHN0cmluZyB9KSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoYnJhbmQudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgICAgIH0pO1xuICAgIFxuICAgIH1lbHNle1xuICAgICAgc2V0VGltZW91dCgoKT0+IHRoaXMuYnJhbmRTZWxlY3RlZCA9IGZhbHNlLCA1KTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIG1vZGVscyBhY2NvcmRpbmcgdG8gbW9kZWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGVsIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGZpbHRlck1vZGVsKG1vZGVsOnN0cmluZyl7XG5cbiAgICBpZih0aGlzLm1vZGVsU2VsZWN0ZWQgPT0gZmFsc2Upe1xuICAgICAgdGhpcy5maWx0ZXJlZE1vZGVsTGlzdCA9IHRoaXMubW9kZWxzLmZpbHRlcihmdW5jdGlvbihlbGVtZW50OnN0cmluZykge1xuICAgICAgICByZXR1cm4gZWxlbWVudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobW9kZWwudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgICAgIH0pO1xuICAgIH1lbHNle1xuICAgICAgc2V0VGltZW91dCgoKT0+IHRoaXMubW9kZWxTZWxlY3RlZCA9IGZhbHNlLCA1KTtcbiAgICB9XG4gICAgXG4gIH1cblxuICAvKipcbiAgICogRmlsdGVycyBvdXQgY2FsaWJlcnMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IGlucHV0XG4gICAqIEBwYXJhbSBjYWxpYmVyIFxuICAgKi9cbiAgZmlsdGVyQ2FsaWJlcihjYWxpYmVyOnN0cmluZyl7XG4gICAgXG4gICAgaWYodGhpcy5jYWxpYmVyU2VsZWN0ZWQgPT0gZmFsc2Upe1xuICAgICAgdGhpcy5maWx0ZXJlZENhbGliZXJMaXN0ID0gdGhpcy5jYWxpYmVycy5maWx0ZXIoZnVuY3Rpb24oZWxlbWVudDpzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGNhbGliZXIudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgICAgIH0pO1xuICAgIH1lbHNle1xuICAgICAgc2V0VGltZW91dCgoKT0+IHRoaXMuY2FsaWJlclNlbGVjdGVkID0gZmFsc2UsIDUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFN1Ym1pdCBhIHdhdGNoXG4gICAqL1xuICBvblN1Ym1pdCgpe1xuXG4gICAgdGhpcy5zdWJtaXRBdHRlbXB0ID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLndhdGNoRm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5lcnJvciA9IGZhbHNlO1xuICAgIFxuICAgICAgdGhpcy50d2FwaS51cHNlcnRXYXRjaCh0aGlzLndhdGNoTW9kZWwpLnRoZW4oXG4gICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnV0FUQ0hfVVBTRVJUJywgJ1NVQ0NFU1MnKTtcbiAgICAgICAgICB0aGlzLnVzZXIudXBzZXJ0V2F0Y2gocmVzKTtcbiAgICAgICAgICB0aGlzLndhdGNoU2F2ZWQuZW1pdCh0aGlzLnVzZXIpO1xuICAgICAgICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQ1RBJywgJ1dBVENIX1VQU0VSVCcsICdGQUlMJyk7XG4gICAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zdWJtaXRBdHRlbXB0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBvbkRlbGV0ZSgpe1xuICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IHRydWU7XG4gICAgdGhpcy50d2FwaS5kZWxldGVXYXRjaCh0aGlzLnVzZXIsIHRoaXMud2F0Y2hNb2RlbCkudGhlbihcbiAgICAgIHJlcyA9PiB7XG4gICAgICAgIEdBU2VydmljZS5ldmVudCgnQ1RBJywgJ1dBVENIX0RFTEVURScsICdTVUNDRVNTJyk7XG4gICAgICAgIHRoaXMud2F0Y2hTYXZlZC5lbWl0KHJlcyk7XG4gICAgICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIGVycm9yID0+IHtcbiAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnV0FUQ0hfREVMRVRFJywgJ0ZBSUwnKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IGZhbHNlO1xuICAgICAgfVxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXJlY3RpdmVzL3dhdGNoL3dhdGNoLmNvbXBvbmVudC50cyIsImV4cG9ydCBjbGFzcyBTdHJpbmdIZWxwZXJ7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsZXZlbnNodGVpbihhOnN0cmluZywgYjpzdHJpbmcpe1xyXG4gICAgICAgIGlmKCFhIHx8ICFiKSByZXR1cm4gKGEgfHwgYikubGVuZ3RoO1xyXG4gICAgICAgIHZhciBtID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8PSBiLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbVtpXSA9IFtpXTtcclxuICAgICAgICAgICAgaWYoaSA9PT0gMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPD0gYS5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBtWzBdW2pdID0gajtcclxuICAgICAgICAgICAgICAgIGlmKGogPT09IDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgbVtpXVtqXSA9IGIuY2hhckF0KGkgLSAxKSA9PSBhLmNoYXJBdChqIC0gMSkgPyBtW2kgLSAxXVtqIC0gMV0gOiBNYXRoLm1pbihcclxuICAgICAgICAgICAgICAgICAgICBtW2ktMV1bai0xXSArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgbVtpXVtqLTFdICsgMSxcclxuICAgICAgICAgICAgICAgICAgICBtW2ktMV1bal0gKyAxXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtW2IubGVuZ3RoXVthLmxlbmd0aF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZXBsYWNlQWxsKHRhcmdldDpzdHJpbmcsIHNlYXJjaDpzdHJpbmcsIHJlcGxhY2VtZW50OnN0cmluZyk6c3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQuc3BsaXQoc2VhcmNoKS5qb2luKHJlcGxhY2VtZW50KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL3N0cmluZy5oZWxwZXIudHMiLCJpbXBvcnQgeyBVc2VyLCB9ICBmcm9tICcuL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgV2F0Y2ggfSAgZnJvbSAnLi93YXRjaC5tb2RlbCc7XG5pbXBvcnQgeyBCbG9nUG9zdCB9ICBmcm9tICcuL2Jsb2ctcG9zdC5tb2RlbCc7XG5pbXBvcnQgeyBNZWFzdXJlIH0gIGZyb20gJy4vbWVhc3VyZS5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBNb2RlbEZhY3Rvcnkge1xuXG5cblx0LyoqXG5cdCAqIEJ1aWxkcyBhbiBVc2VyIGZyb20ganNvbiByZXNwb25zZVxuXHQgKiBAcGFyYW0gIHthbnl9ICBqc29uVXNlclxuXHQgKiBAcmV0dXJuIHtVc2VyfSAgICAgICAgIFxuXHQgKi9cblx0c3RhdGljIGJ1aWxkVXNlcihqc29uVXNlcjogYW55KTogVXNlciB7XG5cblx0XHRyZXR1cm4gbmV3IFVzZXIoXG5cdFx0XHRqc29uVXNlci51c2VySWQsXG5cdFx0XHRqc29uVXNlci5lbWFpbCxcblx0XHRcdGpzb25Vc2VyLmZpcnN0bmFtZSxcblx0XHRcdGpzb25Vc2VyLm5hbWUsXG5cdFx0XHRqc29uVXNlci5jb3VudHJ5LFxuXHRcdFx0anNvblVzZXIucmVnaXN0ZXJEYXRlLFxuXHRcdFx0anNvblVzZXIua2V5LFxuXHRcdFx0TW9kZWxGYWN0b3J5LmJ1aWxkV2F0Y2hlcyhqc29uVXNlci53YXRjaGVzKVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogQnVpbGRzIGEgd2F0Y2ggZnJvbSBqc29uIHJlc3BvbnNlXG5cdCAqIEBwYXJhbSAge2FueX0gICAgIGpzb25XYXRjaGVzXG5cdCAqIEByZXR1cm4ge1dhdGNoW119ICAgICAgICAgICAgXG5cdCAqL1xuXHRzdGF0aWMgYnVpbGRXYXRjaGVzKGpzb25XYXRjaGVzOiBhbnkpOiBXYXRjaFtdIHtcblx0XHRyZXR1cm4ganNvbldhdGNoZXMubWFwKGZ1bmN0aW9uKGpzb25XYXRjaDphbnkpIHtcblx0XHRcdHJldHVybiBuZXcgV2F0Y2goXG5cdFx0XHRcdGpzb25XYXRjaC53YXRjaElkLFxuXHRcdFx0XHRqc29uV2F0Y2guYnJhbmQsXG5cdFx0XHRcdGpzb25XYXRjaC5oaXN0b3J5U2l6ZSxcblx0XHRcdFx0anNvbldhdGNoLm1lYXN1cmVzLm1hcChmdW5jdGlvbihqc29uTWVhc3VyZTphbnkpIHtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IE1lYXN1cmUoXG5cdFx0XHRcdFx0XHRqc29uTWVhc3VyZS5pZCxcblx0XHRcdFx0XHRcdGpzb25NZWFzdXJlLm1lYXN1cmVVc2VyVGltZSxcblx0XHRcdFx0XHRcdGpzb25NZWFzdXJlLm1lYXN1cmVSZWZlcmVuY2VUaW1lLFxuXHRcdFx0XHRcdFx0anNvbk1lYXN1cmUuc3RhdHVzSWQsXG5cdFx0XHRcdFx0XHRqc29uTWVhc3VyZS5hY2N1cmFjeVVzZXJUaW1lLFxuXHRcdFx0XHRcdFx0anNvbk1lYXN1cmUuYWNjdXJhY3lSZWZlcmVuY2VUaW1lLFxuXHRcdFx0XHRcdFx0anNvbk1lYXN1cmUuYWNjdXJhY3ksXG5cdFx0XHRcdFx0XHRqc29uTWVhc3VyZS5hY2N1cmFjeUFnZSxcblx0XHRcdFx0XHRcdGpzb25NZWFzdXJlLnBlcmNlbnRpbGUpXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRqc29uV2F0Y2gubmFtZSxcblx0XHRcdFx0anNvbldhdGNoLnllYXJPZkJ1eSxcblx0XHRcdFx0anNvbldhdGNoLnNlcmlhbCxcblx0XHRcdFx0anNvbldhdGNoLmNhbGliZXJcblx0XHRcdClcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBCdWlsZHMgSnNvbiBwb3N0IGZyb20ganNvbiByZXNwb25zZVxuXHQgKiBAcGFyYW0gIHthbnl9ICAgICAgICBqc29uUG9zdHMgW2Rlc2NyaXB0aW9uXVxuXHQgKiBAcmV0dXJuIHtCbG9nUG9zdFtdfSAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblx0c3RhdGljIGJ1aWxkUG9zdHMoanNvblBvc3RzOiBhbnkpOiBCbG9nUG9zdFtde1xuXHRcdHJldHVybiBqc29uUG9zdHMucG9zdHMubWFwKGZ1bmN0aW9uKGpzb25Qb3N0OmFueSkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEJsb2dQb3N0KFxuXHRcdFx0XHRqc29uUG9zdC5pZCwgXG5cdFx0XHRcdGpzb25Qb3N0LnRpdGxlLCBcblx0XHRcdFx0bmV3IERhdGUoanNvblBvc3QuZGF0ZSksIFxuXHRcdFx0XHRqc29uUG9zdC5leGNlcnB0LFxuXHRcdFx0XHRqc29uUG9zdC51cmxcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWxzL21vZGVsLmZhY3RvcnkudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIyX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1J4XCJcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXgnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R3LWNvcmUudHMiXSwic291cmNlUm9vdCI6IiJ9