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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1YTNjM2Y3Y2EzN2EyYmFiMzAxMyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2dhLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy93YXRjaC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL21lYXN1cmUubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3R3YXBpLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9jbG9jay9tb29uLXBoYXNlcy9tb29uLXBoYXNlcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvZ2xvYmFsLXZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2Jsb2ctcG9zdC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpcGVzL2FyZXRobWV0aWMtc2lnbi5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlcy9rLWZvcm1hdHRlci5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlcy9sZWFkaW5nLXplcm8ucGlwZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvY2xvY2svY2xvY2suY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy93YXRjaC93YXRjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvc3RyaW5nLmhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL21vZGVsLmZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vLi90dy1jb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EwQztBQUkxQztJQUFBO0lBa0VBLENBQUM7SUF4RGdCLGVBQUssR0FBcEI7UUFFSSxFQUFFLEVBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUM7WUFDdkIsSUFBSSxRQUFRLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNoQyxJQUFJ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QUFDLFdBQVcsRUFDckIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBUyxXQUFlO2dCQUM5QyxNQUFNLENBQUMsSUFBSSwrREFBTyxDQUNqQixXQUFXLENBQUMsRUFBRSxFQUNkLFdBQVcsQ0FBQyxlQUFlLEVBQzNCLFdBQVcsQ0FBQyxvQkFBb0IsRUFDaEMsV0FBVyxDQUFDLFFBQVEsRUFDcEIsV0FBVyxDQUFDLGdCQUFnQixFQUM1QixXQUFXLENBQUMscUJBQXFCLEVBQ2pDLFdBQVcsQ0FBQyxRQUFRLEVBQ3BCLFdBQVcsQ0FBQyxXQUFXLEVBQ3ZCLFdBQVcsQ0FBQyxVQUFVLENBQUM7WUFDekIsQ0FBQyxDQUFDLEVBQ0YsU0FBUyxDQUFDLElBQUksRUFDZCxTQUFTLENBQUMsU0FBUyxFQUNuQixTQUFTLENBQUMsTUFBTSxFQUNoQixTQUFTLENBQUMsT0FBTyxDQUNqQjtRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx1QkFBVSxHQUFqQixVQUFrQixTQUFjO1FBQy9CLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFTLFFBQVk7WUFFL0MsTUFBTSxDQUFDLElBQUksa0VBQVEsQ0FDbEIsUUFBUSxDQUFDLEVBQUUsRUFDWCxRQUFRLENBQUMsS0FBSyxFQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFDdkIsUUFBUSxDQUFDLE9BQU8sRUFDaEIsUUFBUSxDQUFDLEdBQUcsQ0FDWixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0YsbUJBQUM7QUFBRCxDQUFDOzs7Ozs7O0FDM0VELGdEOzs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3QiIsImZpbGUiOiJ0dy1jb3JlLnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpLCByZXF1aXJlKFwicnhqcy9SeFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYW5ndWxhci9jb3JlXCIsIFwiQGFuZ3VsYXIvZm9ybXNcIiwgXCJAYW5ndWxhci9odHRwXCIsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiLCBcInJ4anMvUnhcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widHctY29yZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpLCByZXF1aXJlKFwicnhqcy9SeFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1widHctY29yZVwiXSA9IGZhY3Rvcnkocm9vdFtcIkBhbmd1bGFyL2NvcmVcIl0sIHJvb3RbXCJAYW5ndWxhci9mb3Jtc1wiXSwgcm9vdFtcIkBhbmd1bGFyL2h0dHBcIl0sIHJvb3RbXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCJdLCByb290W1wicnhqcy9SeFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIyX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1YTNjM2Y3Y2EzN2EyYmFiMzAxMyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgZ2E6YW55O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR0FTZXJ2aWNlIHtcblxuICBwdWJsaWMgc3RhdGljIGFwcE5hbWU6c3RyaW5nO1xuICBwdWJsaWMgc3RhdGljIGFwcFZlcnNpb246c3RyaW5nO1xuICBwdWJsaWMgc3RhdGljIHVzZXJOYW1lOnN0cmluZztcbiAgcHVibGljIHN0YXRpYyB1c2VyRW1haWw6c3RyaW5nO1xuICBwcml2YXRlIHN0YXRpYyBnYUNyZWF0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuXG5cblxuICBwcml2YXRlIHN0YXRpYyBzcGF3bigpe1xuXG4gICAgICBpZighR0FTZXJ2aWNlLmdhQ3JlYXRlZCl7XG4gICAgICAgIHZhciBjdXJyZGF0ZSA6IGFueSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBnYU5ld0VsZW0gOiBhbnkgPSB7fTtcbiAgICAgICAgdmFyIGdhRWxlbXMgOiBhbnkgPSB7fTtcblxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTpzZW1pY29sb24gKi9cbiAgICAgICAgLyogdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLWV4cHJlc3Npb24gKi9cbiAgICAgICAgLy8gVGhpcyBjb2RlIGlzIGZyb20gR29vZ2xlLCBzbyBsZXQncyBub3QgbW9kaWZ5IGl0IHRvbyBtdWNoLCBqdXN0IGFkZCBnYU5ld0VsZW0gYW5kIGdhRWxlbXM6XG5cbiAgICAgICAgKGZ1bmN0aW9uKGkscyxvLGcscixhLG0pe2lbJ0dvb2dsZUFuYWx5dGljc09iamVjdCddPXI7aVtyXT1pW3JdfHxmdW5jdGlvbigpe1xuICAgICAgICAoaVtyXS5xPWlbcl0ucXx8W10pLnB1c2goYXJndW1lbnRzKX0saVtyXS5sPTEqY3VycmRhdGU7YT1zLmNyZWF0ZUVsZW1lbnQobyksXG4gICAgICAgIG09cy5nZXRFbGVtZW50c0J5VGFnTmFtZShvKVswXTthLmFzeW5jPTE7YS5zcmM9ZzttLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsbSlcbiAgICAgICAgfSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCdnYScsIGdhTmV3RWxlbSwgZ2FFbGVtcyk7XG4gICAgICAgIFxuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLXVudXNlZC1leHByZXNzaW9uICovXG4gICAgICAgIC8qIHRzbGludDplbmFibGU6c2VtaWNvbG9uICovXG4gICAgICAgIC8qIHRzbGludDplbmFibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgICAgICAgZ2EoJ2NyZWF0ZScsICdVQS01OTE0ODg3OC0xJywgJ2FwcC50b29sd2F0Y2guaW8nKTtcbiAgICAgICAgR0FTZXJ2aWNlLmdhQ3JlYXRlZCA9IHRydWU7XG4gICAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGV2ZW50KGV2ZW50Q2F0ZWdvcnk6c3RyaW5nLCBldmVudEFjdGlvbjpzdHJpbmcsIGV2ZW50TGFiZWw6c3RyaW5nPScnLCBldmVudFZhbHVlOm51bWJlcj0wKXtcbiAgICBHQVNlcnZpY2Uuc3Bhd24oKTtcbiAgICBnYSgnc2VuZCcsICdldmVudCcsIGV2ZW50Q2F0ZWdvcnksIGV2ZW50QWN0aW9uLCBldmVudExhYmVsLCBldmVudFZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2NyZWVudmlldyhzY3JlZW5OYW1lOnN0cmluZyl7XG5cbiAgICAvL2FwcFZlcnNpb24gYW5kIGFwcE5hbWUgYXJlIGhhbmRsZWQgYnkgaW9uaWMtbmF0aXZlIHByb21pc2VzIG9uIG1vYmlsZVxuICAgIC8vSW4gY2FzZSB0aGUgcHJvbWlzZXMgYXJlIHN0aWxsIHdvcmtpbmcsIHdlIHRpbWVvdXQgdGhlIGNhbGwgYnkgMXMuXG4gICAgaWYoR0FTZXJ2aWNlLmFwcE5hbWUgPT0gdW5kZWZpbmVkIHx8IEdBU2VydmljZS5hcHBWZXJzaW9uID09IHVuZGVmaW5lZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR0FTZXJ2aWNlIGlzbid0IGNvbmZpZ3VyZWQgeWV0LiBQb3N0cG9uaW5nIGNhbGxcIiwgR0FTZXJ2aWNlLmFwcE5hbWUsIEdBU2VydmljZS5hcHBWZXJzaW9uKTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIEdBU2VydmljZS5zY3JlZW52aWV3KHNjcmVlbk5hbWUpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9ZWxzZXtcbiAgICAgIEdBU2VydmljZS5zcGF3bigpO1xuICAgICAgZ2EoJ3NlbmQnLCAnc2NyZWVudmlldycsIHtcbiAgICAgICAgJ2FwcE5hbWUnOiBHQVNlcnZpY2UuYXBwTmFtZSxcbiAgICAgICAgJ2FwcFZlcnNpb24nOiBHQVNlcnZpY2UuYXBwVmVyc2lvbixcbiAgICAgICAgJ3NjcmVlbk5hbWUnOiBzY3JlZW5OYW1lXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHBhZ2V2aWV3KHBhZ2U6c3RyaW5nKXtcbiAgICBHQVNlcnZpY2Uuc3Bhd24oKTtcbiAgICBnYSgnc2V0JywgJ3BhZ2UnLCBwYWdlKTtcbiAgICBnYSgnc2VuZCcsICdwYWdldmlldycpXG4gIH1cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvZ2Euc2VydmljZS50cyIsImltcG9ydCB7IE1lYXN1cmUsIE1lYXN1cmVTdGF0dXMgfSBmcm9tICcuL21lYXN1cmUubW9kZWwnXG5cbmV4cG9ydCBjbGFzcyBXYXRjaHtcblx0aWQ6bnVtYmVyO1xuXHRicmFuZDpzdHJpbmc7XG5cdGhpc3RvcnlTaXplOm51bWJlcjtcblx0bWVhc3VyZXM6TWVhc3VyZVtdO1xuXHRuYW1lOnN0cmluZztcblx0eWVhck9mQnV5Om51bWJlcjtcblx0c2VyaWFsOnN0cmluZztcblx0Y2FsaWJlcjpzdHJpbmc7XG5cdHN0YXR1czogV2F0Y2hTdGF0dXM7XG5cdG5leHQ6IFdhdGNoQWN0aW9uO1xuXHR3YWl0aW5nOm51bWJlcjtcblx0aW5pdGlhbHM6c3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIGJyYW5kOiBzdHJpbmcsIGhpc3RvcnlTaXplOiBudW1iZXIgPSAwLFxuXHRcdG1lYXN1cmVzOiBNZWFzdXJlW10gPSBbXSwgbmFtZTogc3RyaW5nID0gXCJcIiwgeWVhck9mQnV5OiBudW1iZXIgPSBudWxsLFxuXHRcdHNlcmlhbDogc3RyaW5nID0gXCJcIiwgY2FsaWJlcjogc3RyaW5nID0gXCJcIikge1xuXG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMuYnJhbmQgPSBicmFuZDtcblx0XHR0aGlzLmhpc3RvcnlTaXplID0gaGlzdG9yeVNpemU7XG5cdFx0dGhpcy5tZWFzdXJlcyA9IG1lYXN1cmVzLnNvcnQoZnVuY3Rpb24oYTpNZWFzdXJlLCBiOk1lYXN1cmUpe1xuXHRcdFx0cmV0dXJuIGEuaWQgLSBiLmlkO1xuXHRcdH0pO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0aWYoeWVhck9mQnV5ICE9IDApe1xuXHRcdFx0dGhpcy55ZWFyT2ZCdXkgPSB5ZWFyT2ZCdXk7XG5cdFx0fVxuXHRcdHRoaXMuc2VyaWFsID0gc2VyaWFsO1xuXHRcdHRoaXMuY2FsaWJlciA9IGNhbGliZXI7XG5cdFx0dGhpcy5pbml0aWFscyA9ICh0aGlzLmJyYW5kICE9IG51bGwgJiYgdGhpcy5icmFuZC5sZW5ndGggPiAwKSA/IHRoaXMuYnJhbmQuY2hhckF0KDApIDogXCJcIjtcblx0XHR0aGlzLmluaXRpYWxzICs9ICh0aGlzLm5hbWUubGVuZ3RoID4gMCkgPyB0aGlzLm5hbWUuY2hhckF0KDApIDogXCJcIjtcblxuXHRcdGlmIChoaXN0b3J5U2l6ZSA9PSAwKXtcblx0XHRcdHRoaXMuc3RhdHVzID0gV2F0Y2hTdGF0dXMuTmV2ZXJNZWFzdXJlZDtcblx0XHRcdHRoaXMubmV4dCA9IFdhdGNoQWN0aW9uLk1lYXN1cmU7XG5cdFx0fWVsc2UgaWYoaGlzdG9yeVNpemUgPiB0aGlzLm1lYXN1cmVzLmxlbmd0aCl7XG5cdFx0XHR0aGlzLnN0YXR1cyA9IFdhdGNoU3RhdHVzLkhhdmVNb3JlTWVhc3VyZXM7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb21wdXRlTmV4dCgpO1xuXHR9XG5cblx0Y29tcHV0ZU5leHQoKXtcblx0XHRsZXQgbGFzdE1lYXN1cmUgPSB0aGlzLmN1cnJlbnRNZWFzdXJlKCk7XG5cdFx0aWYgKGxhc3RNZWFzdXJlICE9PSBudWxsIFxuXHRcdFx0JiYgbGFzdE1lYXN1cmUuc3RhdHVzICYgTWVhc3VyZVN0YXR1cy5CYXNlTWVhc3VyZSl7XG5cdFx0XHRcblx0XHRcdGlmIChNYXRoLmFicygobGFzdE1lYXN1cmUubWVhc3VyZVVzZXJUaW1lIC0gRGF0ZS5ub3coKS8xMDAwKS8zNjAwKSA8IDEyKXtcblx0XHRcdFx0dGhpcy5uZXh0ID0gV2F0Y2hBY3Rpb24uV2FpdGluZztcblx0XHRcdFx0dGhpcy53YWl0aW5nID0gTWF0aC5yb3VuZCgxMiAtIE1hdGguYWJzKChsYXN0TWVhc3VyZS5tZWFzdXJlVXNlclRpbWUgLSBEYXRlLm5vdygpLzEwMDApLzM2MDApKTtcblx0XHRcdH1lbHNlIGlmKCEobGFzdE1lYXN1cmUuc3RhdHVzICYgTWVhc3VyZVN0YXR1cy5BY2N1cmFjeU1lYXN1cmUpKSB7XG5cdFx0XHRcdHRoaXMubmV4dCA9IFdhdGNoQWN0aW9uLkFjY3VyYWN5O1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMubmV4dCA9IFdhdGNoQWN0aW9uLk1lYXN1cmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHRvU3RyaW5nID0gKCkgOiBzdHJpbmcgPT4ge1xuXHRcdHJldHVybiBgV2F0Y2ggKGlkOiAke3RoaXMuaWR9LFxuXHRcdFx0XHRicmFuZDogJHt0aGlzLmJyYW5kfSxcblx0XHRcdFx0aGlzdG9yeVNpemU6ICR7dGhpcy5oaXN0b3J5U2l6ZX0sXG5cdFx0XHRcdG1lYXN1cmVzOiAke3RoaXMubWVhc3VyZXN9LFxuXHRcdFx0XHRuYW1lOiAke3RoaXMubmFtZX0sXG5cdFx0XHRcdHllYXJPZkJ1eTogJHt0aGlzLnllYXJPZkJ1eX0sXG5cdFx0XHRcdHNlcmlhbDogJHt0aGlzLnNlcmlhbH0sXG5cdFx0XHRcdGNhbGliZXI6ICR7dGhpcy5jYWxpYmVyfSxcblx0XHRcdFx0c3RhdHVzOiAke3RoaXMuc3RhdHVzfSxcblx0XHRcdFx0bmV4dDogJHt0aGlzLm5leHR9LFxuXHRcdFx0XHR3YWl0aW5nOiAke3RoaXMud2FpdGluZ30pYDtcblx0fVxuXG5cdGF2ZXJhZ2UoYW1vdW50Om51bWJlcil7XG5cblx0XHRsZXQgYWN0dWFsQW1vdW50Om51bWJlciA9IDA7XG5cdFx0bGV0IGF2ZXJhZ2U6bnVtYmVyID0gMDtcblx0XHRsZXQgaTpudW1iZXIgPSB0aGlzLm1lYXN1cmVzLmxlbmd0aCAtIDE7XG5cblx0XHR3aGlsZShpPj0gMCAmJiBhY3R1YWxBbW91bnQgPD0gYW1vdW50KXtcblx0XHRcdGlmKHRoaXMubWVhc3VyZXNbaV0uc3RhdHVzICYgTWVhc3VyZVN0YXR1cy5BY2N1cmFjeU1lYXN1cmUpe1xuXHRcdFx0XHRhdmVyYWdlID0gYXZlcmFnZSArIE1hdGguYWJzKHRoaXMubWVhc3VyZXNbaV0uYWNjdXJhY3kpO1xuXHRcdFx0XHRhY3R1YWxBbW91bnQrKztcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aS0tO1xuXHRcdFx0XG5cdFx0fVxuXHRcdHJldHVybiAoYXZlcmFnZS9hY3R1YWxBbW91bnQpLnRvRml4ZWQoMSk7XG5cdH1cblxuXHRsYXN0Q29tcGxldGVNZWFzdXJlKCk6TWVhc3VyZXtcblx0XHRsZXQgaTpudW1iZXIgPSB0aGlzLm1lYXN1cmVzLmxlbmd0aCAtIDE7XG5cblx0XHR3aGlsZShpID49IDApe1xuXHRcdFx0aWYodGhpcy5tZWFzdXJlc1tpXS5zdGF0dXMgJiBNZWFzdXJlU3RhdHVzLkFjY3VyYWN5TWVhc3VyZSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLm1lYXN1cmVzW2ldO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpLS07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjdXJyZW50TWVhc3VyZSgpOk1lYXN1cmV7XG5cdFx0aWYodGhpcy5tZWFzdXJlcy5sZW5ndGggIT09IDApe1xuXHRcdFx0cmV0dXJuIHRoaXMubWVhc3VyZXNbdGhpcy5tZWFzdXJlcy5sZW5ndGggLSAxXTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHVwc2VydE1lYXN1cmUobWVhc3VyZTpNZWFzdXJlKXtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tZWFzdXJlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJpXCIsIGkpO1xuXHRcdFx0aWYodGhpcy5tZWFzdXJlc1tpXS5pZCA9PSBtZWFzdXJlLmlkKXtcblx0XHRcdFx0dGhpcy5tZWFzdXJlc1tpXSA9IG1lYXN1cmU7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5oaXN0b3J5U2l6ZSsrO1xuXHRcdHRoaXMubWVhc3VyZXMucHVzaChtZWFzdXJlKTtcblx0fVxuXG5cdGNsb25lKCk6V2F0Y2h7XG5cdFx0cmV0dXJuIG5ldyBXYXRjaChcblx0XHRcdHRoaXMuaWQsXG5cdFx0XHR0aGlzLmJyYW5kLFxuXHRcdFx0dGhpcy5oaXN0b3J5U2l6ZSxcblx0XHRcdHRoaXMubWVhc3VyZXMsXG5cdFx0XHR0aGlzLm5hbWUsXG5cdFx0XHR0aGlzLnllYXJPZkJ1eSxcblx0XHRcdHRoaXMuc2VyaWFsLFxuXHRcdFx0dGhpcy5jYWxpYmVyXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZW51bSBXYXRjaEFjdGlvbntcblx0TWVhc3VyZSwgV2FpdGluZywgQWNjdXJhY3lcbn1cblxuZXhwb3J0IGVudW0gV2F0Y2hTdGF0dXN7XG5cdE5ldmVyTWVhc3VyZWQsXG5cdEhhdmVNb3JlTWVhc3VyZXNcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWxzL3dhdGNoLm1vZGVsLnRzIiwiZXhwb3J0IGNsYXNzIE1lYXN1cmV7XG5cblx0aWQ6bnVtYmVyO1xuXHRtZWFzdXJlVXNlclRpbWU6bnVtYmVyO1xuXHRtZWFzdXJlUmVmZXJlbmNlVGltZTpudW1iZXI7XG5cdGFjY3VyYWN5VXNlclRpbWU6bnVtYmVyO1xuXHRhY2N1cmFjeVJlZmVyZW5jZVRpbWU6bnVtYmVyO1xuXHRhY2N1cmFjeTpudW1iZXI7XG5cdGFjY3VyYWN5QWdlOm51bWJlcjtcblx0cGVyY2VudGlsZTpudW1iZXI7XG5cdHN0YXR1czogTWVhc3VyZVN0YXR1cyA9IE1lYXN1cmVTdGF0dXMuTm9uZTtcblx0c2VydmljZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuXHRyZW5ld2VkOmJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBtZWFzdXJlVXNlclRpbWU6IG51bWJlciwgbWVhc3VyZVJlZmVyZW5jZVRpbWU6IG51bWJlciwgXG5cdFx0c3RhdHVzPzogbnVtYmVyLCBhY2N1cmFjeVVzZXJUaW1lPzogbnVtYmVyLCBhY2N1cmFjeVJlZmVyZW5jZVRpbWU/OiBudW1iZXIsIFxuXHRcdGFjY3VyYWN5PzogbnVtYmVyLCBhY2N1cmFjeUFnZT86IG51bWJlciwgcGVyY2VudGlsZT86IG51bWJlcil7XG5cblx0XHR0aGlzLmlkID0gaWRcblx0XHR0aGlzLm1lYXN1cmVVc2VyVGltZSA9IG1lYXN1cmVVc2VyVGltZTtcblx0XHR0aGlzLm1lYXN1cmVSZWZlcmVuY2VUaW1lID0gbWVhc3VyZVJlZmVyZW5jZVRpbWU7XG5cdFx0dGhpcy5hY2N1cmFjeVVzZXJUaW1lID0gYWNjdXJhY3lVc2VyVGltZTtcblx0XHR0aGlzLmFjY3VyYWN5UmVmZXJlbmNlVGltZSA9IGFjY3VyYWN5UmVmZXJlbmNlVGltZTtcblx0XHR0aGlzLmFjY3VyYWN5ID0gYWNjdXJhY3k7XG5cdFx0dGhpcy5hY2N1cmFjeUFnZSA9IGFjY3VyYWN5QWdlO1xuXHRcdHRoaXMucGVyY2VudGlsZSA9IE1hdGgucm91bmQocGVyY2VudGlsZSoxMCkvMTA7XG5cblx0XHRpZihzdGF0dXMgPj0gMSl7XG5cdFx0XHR0aGlzLnN0YXR1cyB8PSBNZWFzdXJlU3RhdHVzLkJhc2VNZWFzdXJlO1xuXHRcdH1cblxuXHRcdGlmKHN0YXR1cyA+PSAyKXtcblx0XHRcdHRoaXMuc3RhdHVzIHw9IE1lYXN1cmVTdGF0dXMuQWNjdXJhY3lNZWFzdXJlO1xuXHRcdH1cblxuXHRcdGlmIChzdGF0dXMgPj0gMykge1xuXHRcdFx0dGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5BcmNoaXZlZE1lYXN1cmU7XG5cdFx0fVxuXG5cdFx0aWYoYWNjdXJhY3lBZ2UgPiAzMCl7XG5cdFx0XHR0aGlzLnJlbmV3ZWQgPSB0cnVlO1xuXHRcdFx0dGhpcy5zdGF0dXMgfD0gTWVhc3VyZVN0YXR1cy5TaG91bGRCZVJlbmV3ZWQ7XG5cdFx0fVxuXG5cdFx0aWYoTWF0aC5hYnMoYWNjdXJhY3kpID4gMjApe1xuXHRcdFx0dGhpcy5zZXJ2aWNlZCA9IHRydWU7XG5cdFx0XHR0aGlzLnN0YXR1cyB8PSBNZWFzdXJlU3RhdHVzLlNob3VsZEJlU2VydmljZWQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb21wdXRlUG9zdEFjY3VyYWN5U3RhdHVzKGFjY3VyYWN5LCBhY2N1cmFjeUFnZSk7XG5cdH1cblxuXHRwdWJsaWMgdG9TdHJpbmcgPSAoKSA6IHN0cmluZyA9PiB7XG5cdFx0cmV0dXJuIGBNZWFzdXJlIChpZDogJHt0aGlzLmlkfSxcblx0XHRtZWFzdXJlVXNlclRpbWU6ICR7dGhpcy5tZWFzdXJlVXNlclRpbWV9LFxuXHRcdG1lYXN1cmVSZWZlcmVuY2VUaW1lOiAke3RoaXMubWVhc3VyZVJlZmVyZW5jZVRpbWV9LFxuXHRcdGFjY3VyYWN5VXNlclRpbWU6ICR7dGhpcy5hY2N1cmFjeVVzZXJUaW1lfSxcblx0XHRhY2N1cmFjeVJlZmVyZW5jZVRpbWU6ICR7dGhpcy5hY2N1cmFjeVJlZmVyZW5jZVRpbWV9LFxuXHRcdGFjY3VyYWN5OiAke3RoaXMuYWNjdXJhY3l9LFxuXHRcdGFjY3VyYWN5QWdlOiAke3RoaXMuYWNjdXJhY3lBZ2V9LFxuXHRcdHBlcmNlbnRpbGU6ICR7dGhpcy5wZXJjZW50aWxlfSxcblx0XHRzdGF0dXM6ICR7dGhpcy5zdGF0dXN9KWA7XG5cdH1cblxuXHRhZGRCYXNlTWVhc3VyZShyZWZlcmVuY2VUaW1lOm51bWJlciwgdXNlclRpbWU6bnVtYmVyKXtcblx0XHR0aGlzLm1lYXN1cmVSZWZlcmVuY2VUaW1lID0gcmVmZXJlbmNlVGltZTtcblx0XHR0aGlzLm1lYXN1cmVVc2VyVGltZSA9IHVzZXJUaW1lO1xuXHRcdHRoaXMuc3RhdHVzIHw9IE1lYXN1cmVTdGF0dXMuQmFzZU1lYXN1cmU7XG5cdH1cblxuXHRhZGRBY2N1cmFjeU1lYXN1cmUocmVmZXJlbmNlVGltZTogbnVtYmVyLCB1c2VyVGltZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5hY2N1cmFjeVJlZmVyZW5jZVRpbWUgPSByZWZlcmVuY2VUaW1lO1xuXHRcdHRoaXMuYWNjdXJhY3lVc2VyVGltZSA9IHVzZXJUaW1lO1xuXHRcdHRoaXMuc3RhdHVzIHw9IE1lYXN1cmVTdGF0dXMuQWNjdXJhY3lNZWFzdXJlO1xuXHR9XG5cblx0YWRkQWNjdXJhY3koYWNjdXJhY3k6bnVtYmVyLCBhY2N1cmFjeUFnZTpudW1iZXIsIHBlcmNlbnRpbGU6bnVtYmVyKXtcblx0XHRjb25zb2xlLmxvZyhcImFkZEFjY3VyYWN5XCIsIGFjY3VyYWN5LGFjY3VyYWN5QWdlLHBlcmNlbnRpbGUpO1xuXHRcdHRoaXMuYWNjdXJhY3kgPSBhY2N1cmFjeTtcblx0XHR0aGlzLmFjY3VyYWN5QWdlID0gYWNjdXJhY3lBZ2U7XG5cdFx0dGhpcy5wZXJjZW50aWxlID0gTWF0aC5yb3VuZChwZXJjZW50aWxlKjEwKS8xMDtcblx0XHR0aGlzLmNvbXB1dGVQb3N0QWNjdXJhY3lTdGF0dXMoYWNjdXJhY3ksIGFjY3VyYWN5QWdlKTtcblx0fVxuXG5cdHByaXZhdGUgY29tcHV0ZVBvc3RBY2N1cmFjeVN0YXR1cyhhY2N1cmFjeTpudW1iZXIsIGFjY3VyYWN5QWdlOm51bWJlcil7XG5cdFx0aWYgKGFjY3VyYWN5ICE9IG51bGwgJiYgYWNjdXJhY3lBZ2UgIT0gbnVsbCkge1xuXHRcdFx0aWYgKE1hdGguYWJzKGFjY3VyYWN5KSA+IDIwKSB7XG5cdFx0XHRcdHRoaXMuc3RhdHVzIHw9IE1lYXN1cmVTdGF0dXMuU2hvdWxkQmVTZXJ2aWNlZDtcblx0XHRcdFx0dGhpcy5zZXJ2aWNlZCA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChhY2N1cmFjeUFnZSA+IDMwKSB7XG5cdFx0XHRcdHRoaXMucmVuZXdlZCA9IHRydWU7XG5cdFx0XHRcdHRoaXMuc3RhdHVzIHw9IE1lYXN1cmVTdGF0dXMuU2hvdWxkQmVSZW5ld2VkO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZW51bSBNZWFzdXJlU3RhdHVze1xuXHROb25lID0gMCxcblx0QmFzZU1lYXN1cmUgPSAxIDw8IDAsXG5cdEFjY3VyYWN5TWVhc3VyZSA9IDEgPDwgMSxcblx0QXJjaGl2ZWRNZWFzdXJlID0gMSA8PCAyLFxuXHRTaG91bGRCZVJlbmV3ZWQgPSAxIDw8IDMsXG5cdFNob3VsZEJlU2VydmljZWQgPSAxIDw8IDRcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWxzL21lYXN1cmUubW9kZWwudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXF1ZXN0T3B0aW9ucywgSGVhZGVycyB9ICBmcm9tICdAYW5ndWxhci9odHRwJztcblxuXG5pbXBvcnQgeyBVc2VyIH0gIGZyb20gJy4vLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgV2F0Y2gsIFdhdGNoQWN0aW9uIH0gIGZyb20gJy4vLi4vbW9kZWxzL3dhdGNoLm1vZGVsJztcbmltcG9ydCB7IE1lYXN1cmUgfSAgZnJvbSAnLi8uLi9tb2RlbHMvbWVhc3VyZS5tb2RlbCc7XG5pbXBvcnQgeyBNb2RlbEZhY3RvcnkgfSAgZnJvbSAnLi8uLi9tb2RlbHMvbW9kZWwuZmFjdG9yeSc7XG5pbXBvcnQgeyBCbG9nUG9zdCB9IGZyb20gJy4vLi4vbW9kZWxzL2Jsb2ctcG9zdC5tb2RlbCdcbmltcG9ydCB7IEdBU2VydmljZSB9IGZyb20gJy4vZ2Euc2VydmljZSc7XG5pbXBvcnQgeyBTdHJpbmdIZWxwZXIgfSBmcm9tICcuLy4uL2hlbHBlcnMvc3RyaW5nLmhlbHBlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG4vKipcbiAqIEV4cG9zZXMgdGhlIFRvb2x3YXRjaCBBUEkuXG4gKiBSZXR1cm5zIHByb21lc2VzIG9uIGRvbWFpbiBvYmplY3RzXG4gKi9cbmV4cG9ydCBjbGFzcyBUd0FQSVNlcnZpY2Uge1xuXG5cdC8qKlxuXHQgKiBBbGwgdGhlIEhUVFAgY29kZSB1c2VkIGJ5IHRoZSB0b29sd2F0Y2ggQVBJIGFyZSBkZWZpbmVkIGhlcmUuXG5cdCAqIEh0dHAgY29kZXMgY2FuIGJlIHRvIHJlZmluZSB0aGUgZXJyb3IgdHlwZXNcblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgSFRUUF9DT05USU5VRSA9IDEwMDtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfU1dJVENISU5HX1BST1RPQ09MUyA9IDEwMTtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUFJPQ0VTU0lORyA9IDEwMjsgICAgICAgICAgICAvLyBSRkMyNTE4XG5cbiAgICAvLyBTdWNjZXNzXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmVxdWVzdCBoYXMgc3VjY2VlZGVkXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX09LID0gMjAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcnZlciBzdWNjZXNzZnVsbHkgY3JlYXRlZCBhIG5ldyByZXNvdXJjZVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9DUkVBVEVEID0gMjAxO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9BQ0NFUFRFRCA9IDIwMjtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTk9OX0FVVEhPUklUQVRJVkVfSU5GT1JNQVRJT04gPSAyMDM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VydmVyIHN1Y2Nlc3NmdWxseSBwcm9jZXNzZWQgdGhlIHJlcXVlc3QsIHRob3VnaCBubyBjb250ZW50IGlzIHJldHVybmVkXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX05PX0NPTlRFTlQgPSAyMDQ7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1JFU0VUX0NPTlRFTlQgPSAyMDU7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1BBUlRJQUxfQ09OVEVOVCA9IDIwNjtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTVVMVElfU1RBVFVTID0gMjA3OyAgICAgICAgICAvLyBSRkM0OTE4XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0FMUkVBRFlfUkVQT1JURUQgPSAyMDg7ICAgICAgLy8gUkZDNTg0MlxuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9JTV9VU0VEID0gMjI2OyAgICAgICAgICAgICAgIC8vIFJGQzMyMjlcblxuICAgIC8vIFJlZGlyZWN0aW9uXG5cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTVVMVElQTEVfQ0hPSUNFUyA9IDMwMDtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTU9WRURfUEVSTUFORU5UTFkgPSAzMDE7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0ZPVU5EID0gMzAyO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9TRUVfT1RIRVIgPSAzMDM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgaGFzIG5vdCBiZWVuIG1vZGlmaWVkIHNpbmNlIHRoZSBsYXN0IHJlcXVlc3RcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTk9UX01PRElGSUVEID0gMzA0O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9VU0VfUFJPWFkgPSAzMDU7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1JFU0VSVkVEID0gMzA2O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9URU1QT1JBUllfUkVESVJFQ1QgPSAzMDc7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1BFUk1BTkVOVExZX1JFRElSRUNUID0gMzA4OyAgLy8gUkZDNzIzOFxuXG4gICAgLy8gQ2xpZW50IEVycm9yXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmVxdWVzdCBjYW5ub3QgYmUgZnVsZmlsbGVkIGR1ZSB0byBtdWx0aXBsZSBlcnJvcnNcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfQkFEX1JFUVVFU1QgPSA0MDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXNlciBpcyB1bmF1dGhvcml6ZWQgdG8gYWNjZXNzIHRoZSByZXF1ZXN0ZWQgcmVzb3VyY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfVU5BVVRIT1JJWkVEID0gNDAxO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9QQVlNRU5UX1JFUVVJUkVEID0gNDAyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlcXVlc3RlZCByZXNvdXJjZSBpcyB1bmF2YWlsYWJsZSBhdCB0aGlzIHByZXNlbnQgdGltZVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9GT1JCSURERU4gPSA0MDM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmVxdWVzdGVkIHJlc291cmNlIGNvdWxkIG5vdCBiZSBmb3VuZFxuICAgICAqXG4gICAgICogTm90ZTogVGhpcyBpcyBzb21ldGltZXMgdXNlZCB0byBtYXNrIGlmIHRoZXJlIHdhcyBhbiBVTkFVVEhPUklaRUQgKDQwMSkgb3JcbiAgICAgKiBGT1JCSURERU4gKDQwMykgZXJyb3IsIGZvciBzZWN1cml0eSByZWFzb25zXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX05PVF9GT1VORCA9IDQwNDtcblxuICAgIC8qKlxuICAgICAqIFRoZSByZXF1ZXN0IG1ldGhvZCBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBmb2xsb3dpbmcgcmVzb3VyY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTUVUSE9EX05PVF9BTExPV0VEID0gNDA1O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlcXVlc3Qgd2FzIG5vdCBhY2NlcHRhYmxlXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX05PVF9BQ0NFUFRBQkxFID0gNDA2O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9QUk9YWV9BVVRIRU5USUNBVElPTl9SRVFVSVJFRCA9IDQwNztcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUkVRVUVTVF9USU1FT1VUID0gNDA4O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlcXVlc3QgY291bGQgbm90IGJlIGNvbXBsZXRlZCBkdWUgdG8gYSBjb25mbGljdCB3aXRoIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICogb2YgdGhlIHJlc291cmNlXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0NPTkZMSUNUID0gNDA5O1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9HT05FID0gNDEwO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9MRU5HVEhfUkVRVUlSRUQgPSA0MTE7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1BSRUNPTkRJVElPTl9GQUlMRUQgPSA0MTI7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1JFUVVFU1RfRU5USVRZX1RPT19MQVJHRSA9IDQxMztcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUkVRVUVTVF9VUklfVE9PX0xPTkcgPSA0MTQ7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1VOU1VQUE9SVEVEX01FRElBX1RZUEUgPSA0MTU7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1JFUVVFU1RFRF9SQU5HRV9OT1RfU0FUSVNGSUFCTEUgPSA0MTY7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0VYUEVDVEFUSU9OX0ZBSUxFRCA9IDQxNztcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfSV9BTV9BX1RFQVBPVCA9IDQxODsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzIzMjRcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfVU5QUk9DRVNTQUJMRV9FTlRJVFkgPSA0MjI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzQ5MThcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTE9DS0VEID0gNDIzOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzQ5MThcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfRkFJTEVEX0RFUEVOREVOQ1kgPSA0MjQ7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzQ5MThcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUkVTRVJWRURfRk9SX1dFQkRBVl9BRFZBTkNFRF9DT0xMRUNUSU9OU19FWFBJUkVEX1BST1BPU0FMID0gNDI1OyAgIC8vIFJGQzI4MTdcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfVVBHUkFERV9SRVFVSVJFRCA9IDQyNjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzI4MTdcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUFJFQ09ORElUSU9OX1JFUVVJUkVEID0gNDI4OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzY1ODVcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfVE9PX01BTllfUkVRVUVTVFMgPSA0Mjk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzY1ODVcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfUkVRVUVTVF9IRUFERVJfRklFTERTX1RPT19MQVJHRSA9IDQzMTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzY1ODVcblxuICAgIC8vIFNlcnZlciBFcnJvclxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcnZlciBlbmNvdW50ZXJlZCBhbiB1bmV4cGVjdGVkIGVycm9yXG4gICAgICpcbiAgICAgKiBOb3RlOiBUaGlzIGlzIGEgZ2VuZXJpYyBlcnJvciBtZXNzYWdlIHdoZW4gbm8gc3BlY2lmaWMgbWVzc2FnZVxuICAgICAqIGlzIHN1aXRhYmxlXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0lOVEVSTkFMX1NFUlZFUl9FUlJPUiA9IDUwMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZXJ2ZXIgZG9lcyBub3QgcmVjb2duaXNlIHRoZSByZXF1ZXN0IG1ldGhvZFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9OT1RfSU1QTEVNRU5URUQgPSA1MDE7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX0JBRF9HQVRFV0FZID0gNTAyO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9TRVJWSUNFX1VOQVZBSUxBQkxFID0gNTAzO1xuICAgIHB1YmxpYyBzdGF0aWMgSFRUUF9HQVRFV0FZX1RJTUVPVVQgPSA1MDQ7XG4gICAgcHVibGljIHN0YXRpYyBIVFRQX1ZFUlNJT05fTk9UX1NVUFBPUlRFRCA9IDUwNTtcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfVkFSSUFOVF9BTFNPX05FR09USUFURVNfRVhQRVJJTUVOVEFMID0gNTA2OyAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzIyOTVcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfSU5TVUZGSUNJRU5UX1NUT1JBR0UgPSA1MDc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzQ5MThcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTE9PUF9ERVRFQ1RFRCA9IDUwODsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzU4NDJcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTk9UX0VYVEVOREVEID0gNTEwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJGQzI3NzRcbiAgICBwdWJsaWMgc3RhdGljIEhUVFBfTkVUV09SS19BVVRIRU5USUNBVElPTl9SRVFVSVJFRCA9IDUxMTtcblxuICAgIHB1YmxpYyBzdGF0aWMgdXNlcjpVc2VyO1xuICAgIHByaXZhdGUgc3RhdGljIHRpbWU6e1xuICAgIFx0c3luY0RhdGU6RGF0ZSxcbiAgICBcdHN5bmNBbmNob3I6bnVtYmVyLFxuICAgIFx0b2Zmc2V0Om51bWJlclxuICAgIH1cblxuXHQvL0RlZmluZXMgaGVhZGVycyBhbmQgcmVxdWVzdCBvcHRpb25zXG5cdHByaXZhdGUgc3RhdGljIGhlYWRlcnM6IEhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG5cdHByaXZhdGUgc3RhdGljIG9wdGlvbnM6IFJlcXVlc3RPcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogVHdBUElTZXJ2aWNlLmhlYWRlcnMgfSk7XG5cdC8vIFJlZ3Jlc3Npb24gUkM1LiBEb2Vzbid0IGFjY2VwdCBnZXQgd2l0aG91dCBib2R5XG5cdHByaXZhdGUgc3RhdGljIG9wdGlvbnNHZXQ6IFJlcXVlc3RPcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogVHdBUElTZXJ2aWNlLmhlYWRlcnMsIGJvZHk6XCJcIiB9KTtcblx0XG5cdHB1YmxpYyBzdGF0aWMgYmFzZVVybDpzdHJpbmcgPSBcImh0dHBzOi8vdG9vbHdhdGNoLmlvL2FwaS9cIjtcblx0cHVibGljIHN0YXRpYyBhc3NldHNVcmwgPSBcImFwcC9hc3NldHNcIlxuXHRwcml2YXRlIHN0YXRpYyBhcGlrZXk6c3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBJbmplY3QgaHR0cCBzZXJ2aWNlXG5cdCAqIEBwYXJhbSB7SHR0cH0gcHJpdmF0ZSBodHRwIFxuXHQgKi9cblx0Y29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHApIHtcblx0XHR0aGlzLmFjY3VyYXRlVGltZSgpO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyByZXNldFRpbWUoKXtcblx0XHRUd0FQSVNlcnZpY2UudGltZSA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBMb2cgYSB1c2VyIHVzaW5nIGVtYWlsIGFuZCBwYXNzd29yZFxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICBlbWFpbCAgIFxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICBwYXNzd29yZFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFVzZXI+fSAgICAgICAgIFxuXHQgKi9cblx0bG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8VXNlcj4ge1xuXG5cdFx0bGV0IGNyZWRzID0geyBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCB9O1xuXHRcdHJldHVybiB0aGlzLmh0dHAucHV0KFxuXHRcdFx0VHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcInVzZXJzXCIsIFxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoY3JlZHMpLCBcblx0XHRcdFR3QVBJU2VydmljZS5vcHRpb25zXG5cdFx0KVxuXHRcdC5tYXAoKHJlcykgPT4geyByZXR1cm4gTW9kZWxGYWN0b3J5LmJ1aWxkVXNlcihyZXMuanNvbigpKTsgfSlcblx0XHQudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnTE9HSU4nKTtcblx0XHRcdFx0VHdBUElTZXJ2aWNlLmFwaWtleSA9IHJlcy5rZXk7XG5cdFx0XHRcdFR3QVBJU2VydmljZS5oZWFkZXJzLmRlbGV0ZSgnWC1BUEktS0VZJyk7XG5cdFx0XHRcdFR3QVBJU2VydmljZS5oZWFkZXJzLmFwcGVuZCgnWC1BUEktS0VZJywgVHdBUElTZXJ2aWNlLmFwaWtleSk7XG5cdFx0XHRcdFR3QVBJU2VydmljZS51c2VyID0gcmVzO1xuXHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0fSxcblx0XHRcdGVyciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycilcblx0XHQpO1xuXHR9ICBcblxuXG4gICAgLyoqXG4gICAgICogR2V0IGFuIHVzZXIgdXNpbmcgaGlzIEFQSSBrZXlcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICBrZXkgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8VXNlcj59ICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0VXNlcihrZXk6c3RyaW5nKTpQcm9taXNlPFVzZXI+IHtcblxuICAgICAgICBcbiAgICAgICAgVHdBUElTZXJ2aWNlLmFwaWtleSA9IGtleTtcbiAgICAgICAgVHdBUElTZXJ2aWNlLmhlYWRlcnMuZGVsZXRlKCdYLUFQSS1LRVknKTtcbiAgICAgICAgVHdBUElTZXJ2aWNlLmhlYWRlcnMuYXBwZW5kKCdYLUFQSS1LRVknLCBUd0FQSVNlcnZpY2UuYXBpa2V5KTtcbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXG4gICAgICAgICAgICBUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwidXNlcnNcIiwgXG4gICAgICAgICAgICBUd0FQSVNlcnZpY2Uub3B0aW9uc1xuICAgICAgICApXG4gICAgICAgIC5tYXAoKHJlcykgPT4geyByZXR1cm4gTW9kZWxGYWN0b3J5LmJ1aWxkVXNlcihyZXMuanNvbigpKTsgfSlcbiAgICAgICAgLnRvUHJvbWlzZSgpLnRoZW4oXG4gICAgICAgICAgICByZXMgPT4ge1xuXG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnQVVUT0xPR0lOJyk7XG4gICAgICAgICAgICAgICAgVHdBUElTZXJ2aWNlLnVzZXIgPSByZXM7XG4gICAgICAgICAgICAgICAgcmVzLmtleSA9IGtleTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycilcbiAgICAgICAgKVxuXG4gICAgfVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlcnMgYSBuZXcgdXNlclxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICBlbWFpbCAgIFxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICBwYXNzd29yZFxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICBuYW1lICAgIFxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICBsYXN0bmFtZVxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICBjb3VudHJ5IFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFVzZXI+fSAgICAgICAgIFxuXHQgKi9cblx0c2lnbnVwKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIGxhc3RuYW1lPzogc3RyaW5nLCBjb3VudHJ5Pzogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiB7XG5cblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwidXNlcnNcIixcblx0XHRcdEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0ZW1haWw6IGVtYWlsLCBcblx0XHRcdFx0cGFzc3dvcmQ6IHBhc3N3b3JkLFxuXHRcdFx0XHRuYW1lOiBuYW1lLFxuXHRcdFx0XHRsYXN0bmFtZTogbGFzdG5hbWUsXG5cdFx0XHRcdGNvdW50cnk6Y291bnRyeVxuXHRcdFx0fSksXG5cdFx0XHRUd0FQSVNlcnZpY2Uub3B0aW9uc1xuXHRcdClcblx0XHQubWFwKChyZXMpID0+IHsgcmV0dXJuIE1vZGVsRmFjdG9yeS5idWlsZFVzZXIocmVzLmpzb24oKSk7IH0pXG5cdFx0LnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRyZXMgPT4ge1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ1NJR05VUCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlcnMgYSBuZXcgZmFjZWJvb2sgdXNlclxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICBlbWFpbCAgIFxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICB0b2tlblxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICBuYW1lICAgIFxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICBsYXN0bmFtZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFVzZXI+fSAgICAgXG5cdCAqL1xuXHRzaWdudXBGYWNlYm9vayhlbWFpbDogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCBsYXN0bmFtZT86IHN0cmluZyk6IFByb21pc2U8VXNlcj57XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuXHRcdFx0VHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcInVzZXJzL2ZhY2Vib29rXCIsXG5cdFx0XHRKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdGVtYWlsOiBlbWFpbCwgXG5cdFx0XHRcdHRva2VuOiB0b2tlbixcblx0XHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdFx0bGFzdG5hbWU6IGxhc3RuYW1lXG5cdFx0XHR9KSxcblx0XHRcdFR3QVBJU2VydmljZS5vcHRpb25zXG5cdFx0KVxuXHRcdC5tYXAoKHJlcykgPT4geyByZXR1cm4gTW9kZWxGYWN0b3J5LmJ1aWxkVXNlcihyZXMuanNvbigpKTsgfSlcblx0XHQudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnU0lHTlVQJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH1cblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFzayBhIHJlc2V0IHBhc3N3b3JkIGxpbmtcblx0ICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn1cblx0ICovXG5cdHJlc2V0UGFzc3dvcmQoZW1haWw6c3RyaW5nKTpQcm9taXNlPGJvb2xlYW4+e1xuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChcblx0XHRcdFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJ1c2Vycy9yZXNldFwiLFxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRlbWFpbDogZW1haWxcblx0XHRcdH0pLFxuXHRcdFx0VHdBUElTZXJ2aWNlLm9wdGlvbnNcblx0XHQpLnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnUkVTRVRfUEFTU1dPUkQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblx0XHQpLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuXHR9XG5cblx0LyoqXG5cdCAqIERlbGV0ZXMgdGhlIGFjY291bnQgY3VycmVudGx5IGxvZ2dlZCBpbi5cblx0ICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn1cblx0ICovXG5cdGRlbGV0ZUFjY291bnQoKTpQcm9taXNlPGJvb2xlYW4+e1xuXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwidXNlcnNcIixcblx0XHRcdFR3QVBJU2VydmljZS5vcHRpb25zXG5cdFx0KS50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ0RFTEVURV9BQ0NPVU5UJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cdFx0KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblx0fVxuXG5cdGdldFdhdGNoZXMoKTogUHJvbWlzZTxXYXRjaFtdPntcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcblx0XHRcdFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJ3YXRjaGVzXCIsXG5cdFx0XHRUd0FQSVNlcnZpY2Uub3B0aW9uc0dldClcblx0XHQubWFwKChyZXMpID0+IHsgcmV0dXJuIE1vZGVsRmFjdG9yeS5idWlsZFdhdGNoZXMocmVzLmpzb24oKSk7IH0pXG5cdFx0LnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRyZXMgPT4ge1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ1dBVENIRVMnLCAnR0VUJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgICAgfVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlIG9yIGluc2VydCBhIHdhdGNoXG5cdCAqIEBwYXJhbSAge1dhdGNofSAgICAgICAgICB3YXRjaFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFdhdGNoPn0gICAgICBcblx0ICovXG5cdHVwc2VydFdhdGNoKHdhdGNoOiBXYXRjaCk6IFByb21pc2U8V2F0Y2g+IHtcblxuXHRcdGlmKHdhdGNoLmlkID09IG51bGwpe1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5zZXJ0V2F0Y2god2F0Y2gpO1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIHRoaXMudXBkYXRlV2F0Y2god2F0Y2gpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBEZWxldGVzIGEgd2F0Y2ggYW5kIHVwZGF0ZSB0aGUgdXNlciBhY2NvcmRpbmdseVxuXHQgKiBAcGFyYW0gIHtVc2VyfSAgICAgICAgICB1c2VyICBcblx0ICogQHBhcmFtICB7V2F0Y2h9ICAgICAgICAgd2F0Y2ggXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8VXNlcj59ICAgICAgIFxuXHQgKi9cblx0ZGVsZXRlV2F0Y2godXNlcjpVc2VyLCB3YXRjaDpXYXRjaCk6UHJvbWlzZTxVc2VyPntcblx0XHRsZXQgZGVsZXRlT3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IFR3QVBJU2VydmljZS5oZWFkZXJzIH0pO1xuXHRcdGRlbGV0ZU9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHsgd2F0Y2hJZDogd2F0Y2guaWQgfSk7XG5cblx0XHRyZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShcblx0XHRcdFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJ3YXRjaGVzXCIsXG5cdFx0XHRkZWxldGVPcHRpb25zXG5cdFx0KS50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzcG9uc2UgPT4ge1xuXG5cdFx0XHRcdHVzZXIud2F0Y2hlcyA9IHVzZXIud2F0Y2hlcy5maWx0ZXIoXG5cdFx0XHRcdFx0ZnVuY3Rpb24oZmlsdGVyOiBXYXRjaCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZpbHRlci5pZCAhPSB3YXRjaC5pZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdXQVRDSEVTJywgJ0RFTEVURScpO1xuXG5cdFx0XHRcdHJldHVybiB1c2VyO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogSW5zZXJ0IG9yIHVwZGF0ZSBhIG1lYXN1cmUgYW5kIHRoZSByZWxhdGVkIHdhdGNoXG5cdCAqIEBwYXJhbSAge1dhdGNofSAgICAgICAgICB3YXRjaCAgXG5cdCAqIEBwYXJhbSAge01lYXN1cmV9ICAgICAgICBtZWFzdXJlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8V2F0Y2g+fSAgICAgICAgXG5cdCAqL1xuXHR1cHNlcnRNZWFzdXJlKHdhdGNoOiBXYXRjaCwgbWVhc3VyZTogTWVhc3VyZSk6IFByb21pc2U8V2F0Y2g+IHtcblx0XHRpZihtZWFzdXJlLmlkID09IG51bGwpe1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5zZXJ0TWVhc3VyZSh3YXRjaCwgbWVhc3VyZSk7XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gdGhpcy51cGRhdGVNZWFzdXJlKHdhdGNoLCBtZWFzdXJlKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRGVsZXRlIGEgbWVhc3VyZSBhbmQgdGhlIHVwZGF0ZSB0aGUgcmVsYXRlZCB3YXRjaFxuXHQgKiBAcGFyYW0gIHtXYXRjaH0gICAgICAgICAgd2F0Y2ggIFxuXHQgKiBAcGFyYW0gIHtNZWFzdXJlfSAgICAgICAgbWVhc3VyZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFdhdGNoPn0gICAgICAgIFxuXHQgKi9cblx0ZGVsZXRlTWVhc3VyZSh3YXRjaDogV2F0Y2gsIG1lYXN1cmU6IE1lYXN1cmUpOiBQcm9taXNlPFdhdGNoPiB7XG5cblx0XHRsZXQgZGVsZXRlT3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IFR3QVBJU2VydmljZS5oZWFkZXJzIH0pO1xuXHRcdGRlbGV0ZU9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHttZWFzdXJlSWQ6bWVhc3VyZS5pZH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwibWVhc3VyZXNcIixcblx0XHRcdGRlbGV0ZU9wdGlvbnNcblx0XHQpLnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRyZXNwb25zZSA9PiB7XG5cblx0XHRcdFx0d2F0Y2gubWVhc3VyZXMgPSB3YXRjaC5tZWFzdXJlcy5maWx0ZXIoXG5cdFx0XHRcdFx0ZnVuY3Rpb24oZmlsdGVyOiBNZWFzdXJlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmlsdGVyLmlkICE9IG1lYXN1cmUuaWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHdhdGNoLmNvbXB1dGVOZXh0KCk7XG5cdFx0XHRcdHdhdGNoLmhpc3RvcnlTaXplLS07XG5cbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdNRUFTVVJFJywgJ0RFTEVURScpO1xuXG5cdFx0XHRcdHJldHVybiB3YXRjaDtcblx0XHRcdH1cblx0XHQpLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuXHR9XG5cblx0Z2V0QmxvZ1Bvc3RzKCk6IFByb21pc2U8QmxvZ1Bvc3RbXT57XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXG5cdFx0XHRcImh0dHBzOi8vYmxvZy50b29sd2F0Y2guaW8vP2pzb249MVwiXG5cdFx0KVxuXHRcdC5tYXAoKHJlcykgPT4geyByZXR1cm4gTW9kZWxGYWN0b3J5LmJ1aWxkUG9zdHMocmVzLmpzb24oKSk7IH0pXG5cdFx0LnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRyZXMgPT4ge1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ0JMT0cnLCAnR0VUJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgICAgfVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogR2l2ZW4gYSBicmFuZCwgcmV0dXJucyBsaWtlbHkgYnJhbmRzIG9yZGVyZWQgYnkgY29uZmlkZW5jZVxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9ICBicmFuZCBbZGVzY3JpcHRpb25dXG5cdCAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgIFt7YnJhbmQ6c3RyaW5nLCBjb25maWRlbmNlOm51bWJlcn1dXG5cdCAqL1xuXHRnZXRMaWtlbHlCcmFuZHMod2F0Y2g6V2F0Y2gpOiBQcm9taXNlPHt3YXRjaDpXYXRjaCwgcHJvcG9zYWxzOlt7YnJhbmQ6c3RyaW5nLCBsb2dvOnN0cmluZywgY29uZmlkZW5jZTpudW1iZXJ9XX0+e1xuXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYXNzZXRzVXJsICsgJy93YXRjaC1icmFuZC5qc29uJylcblx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKVxuXHRcdC50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0YnJhbmRzID0+IHtcblxuXHRcdFx0XHR2YXIgbGlrZWx5QnJhbmRzID0ge3dhdGNoOiB3YXRjaCwgcHJvcG9zYWxzOltdfTtcblxuXHRcdFx0XHRmb3IgKHZhciBpID0gYnJhbmRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cblxuXHRcdFx0XHRcdGxldCBsZXZlbnNodGVpbkRpc3RhbmNlID0gU3RyaW5nSGVscGVyLmxldmVuc2h0ZWluKGJyYW5kc1tpXS5uYW1lLCB3YXRjaC5icmFuZCk7XG5cdFx0XHRcdFx0bGV0IGNvbmZpZGVuY2UgPSBsZXZlbnNodGVpbkRpc3RhbmNlIC8gTWF0aC5tYXgod2F0Y2guYnJhbmQubGVuZ3RoLCBicmFuZHNbaV0ubmFtZS5sZW5ndGgpICoxMDA7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0bGlrZWx5QnJhbmRzLnByb3Bvc2Fscy5wdXNoKFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRicmFuZDpicmFuZHNbaV0ubmFtZSxcblx0XHRcdFx0XHRcdFx0bG9nbzogYnJhbmRzW2ldLmljb24sXG5cdFx0XHRcdFx0XHRcdGNvbmZpZGVuY2U6IDEwMCAtIGNvbmZpZGVuY2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGlrZWx5QnJhbmRzLnByb3Bvc2FscyA9IGxpa2VseUJyYW5kcy5wcm9wb3NhbHMuc29ydChmdW5jdGlvbiAoXG5cdFx0XHRcdFx0YTp7YnJhbmQ6c3RyaW5nLCBjb25maWRlbmNlOm51bWJlcn0sIFxuXHRcdFx0XHRcdGI6e2JyYW5kOnN0cmluZywgY29uZmlkZW5jZTpudW1iZXJ9KXtcblx0XHRcdFx0XHRyZXR1cm4gYi5jb25maWRlbmNlIC0gYS5jb25maWRlbmNlO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXR1cm4gbGlrZWx5QnJhbmRzO1xuICAgICAgICAgICAgfVxuXHRcdCk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4ga25vd24gYnJhbmRzXG5cdCAqIEByZXR1cm4ge1Byb21pc2V9IFxuXHQgKi9cblx0Z2V0QnJhbmRzKCk6IFByb21pc2U8W3sgbmFtZTogc3RyaW5nLCBpY29uOiBzdHJpbmcsIG1vZGVsczpzdHJpbmd9XT4ge1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuXHRcdFx0VHdBUElTZXJ2aWNlLmFzc2V0c1VybCArICcvd2F0Y2gtYnJhbmQuanNvbicpXG5cdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSlcblx0XHQudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdGJyYW5kcyA9PiB7XG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnQlJBTkRTJywgJ0dFVCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBicmFuZHM7XG4gICAgICAgICAgICB9XG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIG1vZGVsIG9mIGEgZ2l2ZW4gYnJhbmRcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgYnJhbmRcblx0ICogQHJldHVybiB7UHJvbWlzZX0gICAgICBcblx0ICovXG5cdGdldE1vZGVscyhicmFuZDpzdHJpbmcpOiBQcm9taXNlPFtzdHJpbmddPiB7XG5cblx0XHRicmFuZCA9IFN0cmluZ0hlbHBlci5yZXBsYWNlQWxsKGJyYW5kLCBcIiBcIiwgXCJcIik7XG5cdFx0YnJhbmQgPSBTdHJpbmdIZWxwZXIucmVwbGFjZUFsbChicmFuZCwgXCImXCIsIFwiXCIpO1xuXHRcdFxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuXHRcdFx0VHdBUElTZXJ2aWNlLmFzc2V0c1VybCArICcvd2F0Y2gtbW9kZWxzLycgKyBicmFuZCArIFwiLmpzb25cIilcblx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG5cdFx0XHQudG9Qcm9taXNlKCkudGhlbihcblx0XHRcdG1vZGVscyA9PiB7XG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnTU9ERUxTJywgJ0dFVCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbHNcbiAgICAgICAgICAgIH1cblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIHByZXZpb3VzbHkgY29tcHV0ZWQgb2Zmc2V0XG5cdCAqIEByZXR1cm4ge251bWJlcn0gW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblx0Z2V0T2Zmc2V0VGltZSgpOm51bWJlcntcblx0XHRyZXR1cm4gVHdBUElTZXJ2aWNlLnRpbWUub2Zmc2V0O1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHJpZXZlIGF0b21pYyBjbG9jayB0aW1lIGFkanVzdGVkIGZvciBuZXR3b3JrIGxhdGVuY3lcblx0ICogQHBhcmFtICB7KCk9PnZvaWR9IHN0YXR1c0NhbGxiYWNrIENhbGxlZCBhdCBlYWNoIHBhcnRpYWwgY29tcGxldGVcblx0ICogQHBhcmFtICB7bnVtYmVyID0gMH0gcHJlY2lzb24gSG93IG1hbnkgY2FsbHMgd2Ugd2FudCB0byBhdmVhZ2Vcblx0ICogQHJldHVybiB7UHJvbWlzZTxEYXRlPn0gXG5cdCAqL1xuXHRhY2N1cmF0ZVRpbWUoc3RhdHVzQ2FsbGJhY2s/OigpPT52b2lkLCBcblx0XHRwcmVjaXNvbjpudW1iZXIgPSAxMCk6IFByb21pc2U8RGF0ZT57XG5cbiAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnVElNRScsICdHRVQnKTtcblxuXG5cdFx0Ly9JZiB3ZSBhcmVuJ3QgYWxyZWFkeSBzeW5jJ2VkXG5cdFx0aWYoVHdBUElTZXJ2aWNlLnRpbWUgPT09IHVuZGVmaW5lZCl7XG5cdFx0XHQvL1N0b3JlcyBlYWNoIFByb21pc2UgaW4gYXJyYXlcblx0XHRcdGxldCBwcm9taXNlczpQcm9taXNlPG51bWJlcj5bXSA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwcmVjaXNvbjsgKytpKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2godGhpcy5mZXRjaFRpbWUoc3RhdHVzQ2FsbGJhY2spKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBQcm9taXNlLmFsbCgpIGlzIHRoZSBQcm9taXNlIGVxdWl2YWxlbnQgb2YgdGhyZWFkLmpvaW4oKS5cblx0XHRcdCAqIEl0J2xsIHdhaXQgZm9yIGFsbCBwcm9taXNlcyB0byBiZSByZWNlaXZlZC4gXG5cdFx0XHQgKlxuXHRcdFx0ICogUmV0dXJucyBhIGRhdGUgYWRqdXN0ZWQgdy8gdGhlIG1lZGlhbiBvZmZzZXQgYmV0d2VlbiBcblx0XHRcdCAqIGF0b21pYyBjbG9jayBhbmQganMgdGltZS4gXG5cdFx0XHQgKiBUaGUgb2Zmc2V0IHJlY2VpdmVkIGluIGVhY2ggcHJvbWlzZSBhbHNvIGFjY291bnRzIGZvclxuXHRcdFx0ICogdGhlIG5ldHdvcmsgcm91bmR0cmlwIHRpbWUuXG5cdFx0XHQgKi9cblx0XHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigocmVzdWx0czphbnlbXSkgPT4ge1xuXHRcdFx0XHRyZXN1bHRzLnNvcnQoZnVuY3Rpb24oYTogYW55LCBiOiBhbnkpIHsgcmV0dXJuIGEgLSBiOyB9KTtcblxuXHRcdFx0XHRsZXQgaGFsZjogbnVtYmVyID0gTWF0aC5mbG9vcihyZXN1bHRzLmxlbmd0aCAvIDIpO1xuXHRcdFx0XHRsZXQgbWVkaWFuT2Zmc2V0O1xuXG5cdFx0XHRcdGlmIChyZXN1bHRzLmxlbmd0aCAlIDIpIHtcblx0XHRcdFx0XHRtZWRpYW5PZmZzZXQgPSByZXN1bHRzW2hhbGZdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1lZGlhbk9mZnNldCA9IChyZXN1bHRzW2hhbGYgLSAxXSArIHJlc3VsdHNbaGFsZl0pIC8gMi4wO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0VHdBUElTZXJ2aWNlLnRpbWUgPSB7XG5cdFx0XHRcdFx0c3luY0RhdGU6IG5ldyBEYXRlKERhdGUubm93KCkgLSBtZWRpYW5PZmZzZXQpLFxuXHRcdFx0XHRcdHN5bmNBbmNob3I6IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSxcblx0XHRcdFx0XHRvZmZzZXQ6bWVkaWFuT2Zmc2V0XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0cmV0dXJuIFR3QVBJU2VydmljZS50aW1lLnN5bmNEYXRlO1xuXHRcdFx0fSk7XG5cdFx0Ly9Pbmx5IGNvbXB1dGUgdGhlIGRpZmZlcmVuY2UgZnJvbSBsYXN0IHRpbWU7XG5cdFx0fWVsc2V7XG5cblx0XHRcdFR3QVBJU2VydmljZS50aW1lLnN5bmNEYXRlID0gbmV3IERhdGUoXG5cdFx0XHRcdFR3QVBJU2VydmljZS50aW1lLnN5bmNEYXRlLmdldFRpbWUoKSArXG5cdFx0XHRcdHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSAtIFR3QVBJU2VydmljZS50aW1lLnN5bmNBbmNob3Jcblx0XHRcdCk7XG5cdFx0XHRcblx0XHRcdFR3QVBJU2VydmljZS50aW1lLnN5bmNBbmNob3IgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZTxEYXRlPihcblx0XHRcdFx0KHJlc29sdmUsIHJlamVjdCkgPT4geyBcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhUd0FQSVNlcnZpY2UudGltZSk7XG5cdFx0XHRcdFx0cmVzb2x2ZShUd0FQSVNlcnZpY2UudGltZS5zeW5jRGF0ZSk7IFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBGZXRjaCBvZmZzZXQgYmV0d2VlbiBhdG9taWMgY2xvY2sgYW5kIGpzIHRpbWVcblx0ICogQHBhcmFtIHsoKSA9PiB2b2lkfSBzdGF0dXNDYWxsYmFja1xuXHQgKi9cblx0cHVibGljIGZldGNoVGltZShzdGF0dXNDYWxsYmFjaz86ICgpID0+IHZvaWQpXG5cdFx0OiBQcm9taXNlPG51bWJlcj4ge1xuXG5cdFx0bGV0IGJlZm9yZVRpbWU6IG51bWJlciA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwidGltZVwiLCBUd0FQSVNlcnZpY2Uub3B0aW9uc0dldClcblx0XHRcdC50b1Byb21pc2UoKVxuXHRcdFx0LnRoZW4oXG5cdFx0XHRcdHJlc3BvbnNlID0+IHtcblx0XHRcdFx0XHRpZiAoc3RhdHVzQ2FsbGJhY2sgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRcdFx0XHRzdGF0dXNDYWxsYmFjaygpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGxldCBub3c6IG51bWJlciA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcblx0XHRcdFx0XHRsZXQgdGltZURpZmYgPSAobm93IC0gYmVmb3JlVGltZSkgLyAyO1xuXHRcdFx0XHRcdGxldCBzZXJ2ZXJUaW1lID0gcmVzcG9uc2UuanNvbigpLnRpbWUgLSB0aW1lRGlmZjtcblx0XHRcdFx0XHRyZXR1cm4gRGF0ZS5ub3coKSAtIHNlcnZlclRpbWU7XG5cdFx0XHRcdH0sIFxuXHRcdFx0XHRyZWplY3QgPT4gY29uc29sZS5lcnJvcihyZWplY3QpXG5cdFx0KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGUgYSBtZWFzdXJlIGFuZCB0aGUgd2F0Y2ggaXQgYmVsb25ncyB0b1xuXHQgKiBAcGFyYW0gIHtXYXRjaH0gICAgICAgICAgd2F0Y2ggIFxuXHQgKiBAcGFyYW0gIHtNZWFzdXJlfSAgICAgICAgbWVhc3VyZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFdhdGNoPn0gICAgICAgIFxuXHQgKi9cblx0cHJpdmF0ZSB1cGRhdGVNZWFzdXJlKHdhdGNoOiBXYXRjaCwgbWVhc3VyZTogTWVhc3VyZSk6IFByb21pc2U8V2F0Y2g+IHtcblx0XHRyZXR1cm4gdGhpcy5odHRwLnB1dChcblx0XHRcdFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJtZWFzdXJlc1wiLFxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRtZWFzdXJlSWQ6IG1lYXN1cmUuaWQsXG5cdFx0XHRcdHJlZmVyZW5jZVRpbWU6IG1lYXN1cmUuYWNjdXJhY3lSZWZlcmVuY2VUaW1lLFxuXHRcdFx0XHR1c2VyVGltZTogbWVhc3VyZS5hY2N1cmFjeVVzZXJUaW1lXG5cdFx0XHR9KSxcblx0XHRcdFR3QVBJU2VydmljZS5vcHRpb25zXG5cdFx0KS50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ01FQVNVUkUnLCAnU0VDT05EJyk7XG5cdFx0XHRcdGxldCBqc29uID0gcmVzcG9uc2UuanNvbigpLnJlc3VsdDtcblx0XHRcdFx0bWVhc3VyZS5hZGRBY2N1cmFjeShqc29uLmFjY3VyYWN5LCBqc29uLmFjY3VyYWN5QWdlLCBqc29uLnBlcmNlbnRpbGUpO1xuXHRcdFx0XHR3YXRjaC51cHNlcnRNZWFzdXJlKG1lYXN1cmUpO1xuXHRcdFx0XHR3YXRjaC5uZXh0ID0gV2F0Y2hBY3Rpb24uTWVhc3VyZTtcblx0XHRcdFx0cmV0dXJuIHdhdGNoO1xuXHRcdFx0fVxuXHRcdCkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG5cdH1cblxuXHQvKipcblx0ICogSW5zZXJ0IGEgbWVhc3VyZSBhbmQgdGhlIHdhdGNoIGl0IGJlbG9uZ3MgdG9cblx0ICogQHBhcmFtICB7V2F0Y2h9ICAgICAgICAgIHdhdGNoICBcblx0ICogQHBhcmFtICB7TWVhc3VyZX0gICAgICAgIG1lYXN1cmVcblx0ICogQHJldHVybiB7UHJvbWlzZTxXYXRjaD59ICAgICAgICBcblx0ICovXG5cdHByaXZhdGUgaW5zZXJ0TWVhc3VyZSh3YXRjaDogV2F0Y2gsIG1lYXN1cmU6IE1lYXN1cmUpOiBQcm9taXNlPFdhdGNoPiB7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuXHRcdFx0VHdBUElTZXJ2aWNlLmJhc2VVcmwgKyBcIm1lYXN1cmVzXCIsXG5cdFx0XHRKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdHdhdGNoSWQ6IHdhdGNoLmlkLFxuXHRcdFx0XHRyZWZlcmVuY2VUaW1lOiBtZWFzdXJlLm1lYXN1cmVSZWZlcmVuY2VUaW1lLFxuXHRcdFx0XHR1c2VyVGltZTogbWVhc3VyZS5tZWFzdXJlVXNlclRpbWVcblx0XHRcdH0pLFxuXHRcdFx0VHdBUElTZXJ2aWNlLm9wdGlvbnNcblx0XHQpLnRvUHJvbWlzZSgpLnRoZW4oXG5cdFx0XHRyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdBUEknLCAnTUVBU1VSRScsICdGSVJTVCcpO1xuXHRcdFx0XHRtZWFzdXJlLmlkID0gcmVzcG9uc2UuanNvbigpLm1lYXN1cmVJZDtcblx0XHRcdFx0d2F0Y2gubWVhc3VyZXMucHVzaChtZWFzdXJlKTtcblx0XHRcdFx0d2F0Y2guaGlzdG9yeVNpemUrKztcblx0XHRcdFx0cmV0dXJuIHdhdGNoO1xuXHRcdFx0fVxuXHRcdCkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG5cdH1cblxuXHQvKipcblx0ICogSW5zZXJ0IGEgd2F0Y2hcblx0ICogQHBhcmFtICB7V2F0Y2h9ICAgICAgICAgIHdhdGNoXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8V2F0Y2g+fSAgICAgIFxuXHQgKi9cblx0cHJpdmF0ZSBpbnNlcnRXYXRjaCh3YXRjaDogV2F0Y2gpOlByb21pc2U8V2F0Y2g+e1xuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChcblx0XHRcdFR3QVBJU2VydmljZS5iYXNlVXJsICsgXCJ3YXRjaGVzXCIsXG5cdFx0XHRKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdGJyYW5kOiB3YXRjaC5icmFuZCxcblx0XHRcdFx0bmFtZTp3YXRjaC5uYW1lLFxuXHRcdFx0XHR5ZWFyT2ZCdXk6d2F0Y2gueWVhck9mQnV5LFxuXHRcdFx0XHRzZXJpYWw6IHdhdGNoLnNlcmlhbCxcblx0XHRcdFx0Y2FsaWJlcjp3YXRjaC5jYWxpYmVyXG5cdFx0XHR9KSxcblx0XHRcdFR3QVBJU2VydmljZS5vcHRpb25zXG5cdFx0KS50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzcG9uc2UgPT4ge1xuXHRcdFx0XHR3YXRjaC5pZCA9IHJlc3BvbnNlLmpzb24oKS5pZDtcbiAgICAgICAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0FQSScsICdXQVRDSCcsICdQVVQnKTtcblx0XHRcdFx0cmV0dXJuIHdhdGNoO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlIGEgd2F0Y2hcblx0ICogQHBhcmFtICB7V2F0Y2h9ICAgICAgICAgIHdhdGNoXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8V2F0Y2g+fSAgICAgIFxuXHQgKi9cblx0cHJpdmF0ZSB1cGRhdGVXYXRjaCh3YXRjaDogV2F0Y2gpOiBQcm9taXNlPFdhdGNoPiB7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wdXQoXG5cdFx0XHRUd0FQSVNlcnZpY2UuYmFzZVVybCArIFwid2F0Y2hlc1wiLFxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRpZDogd2F0Y2guaWQsXG5cdFx0XHRcdGJyYW5kOiB3YXRjaC5icmFuZCxcblx0XHRcdFx0bmFtZTogd2F0Y2gubmFtZSxcblx0XHRcdFx0eWVhck9mQnV5OiB3YXRjaC55ZWFyT2ZCdXksXG5cdFx0XHRcdHNlcmlhbDogd2F0Y2guc2VyaWFsLFxuXHRcdFx0XHRjYWxpYmVyOiB3YXRjaC5jYWxpYmVyXG5cdFx0XHR9KSxcblx0XHRcdFR3QVBJU2VydmljZS5vcHRpb25zXG5cdFx0KS50b1Byb21pc2UoKS50aGVuKFxuXHRcdFx0cmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQVBJJywgJ1dBVENIJywgJ1VQREFURScpO1xuXHRcdFx0XHRyZXR1cm4gd2F0Y2g7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIExvZyBlcnJvciB0byBjb25zb2xlXG5cdCAqIEBwYXJhbSB7YW55fSBlcnJvciBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHRwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcblx0XHRjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCcsIGVycm9yIHx8IFwicGxvcFwiKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuXHR9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy90d2FwaS5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW9vbi1waGFzZXMnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtb29uLXBoYXNlLWNvbnRhaW5lclwiPlxuXHQ8ZGl2IGNsYXNzPVwibW9vbi1tYXNrXCI+PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJtb29uLWRpc3F1ZVwiPjwvZGl2PlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIE1vb25QaGFzZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGFuZ2xlTW9vbjpudW1iZXI7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblxuICAgIGxldCB0b2RheTpEYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgbGFzdEZ1bGxNb29uID0gbmV3IERhdGUoMjAxNiwgMTAsIDE0LCAxMiwgMCwgMCwgMCk7XG4gICAgbGV0IGRpZmZEYXlzID0gTWF0aC5yb3VuZChNYXRoLmFicygodG9kYXkuZ2V0VGltZSgpIC0gbGFzdEZ1bGxNb29uLmdldFRpbWUoKSkvKDI0KjYwKjYwKjEwMDApKSk7XG5cblx0ICB0aGlzLmFuZ2xlTW9vbiA9IGRpZmZEYXlzICogNi4xMDE2OTQ5MTUyNTQ7ICAgXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gIFx0bGV0IGVsZW0gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubW9vbi1kaXNxdWUnKVxuICBcdGVsZW0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ3JvdGF0ZVooJyArIHRoaXMuYW5nbGVNb29uICsgJ2RlZyknO1xuICBcdGVsZW0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVooJyArIHRoaXMuYW5nbGVNb29uICsgJ2RlZyknO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXJlY3RpdmVzL2Nsb2NrL21vb24tcGhhc2VzL21vb24tcGhhc2VzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvblJlc3VsdCB7XG4gW2tleTpzdHJpbmddOmJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBHbG9iYWxWYWxpZGF0b3Ige1xuXG5cdHN0YXRpYyBtYWlsRm9ybWF0KGNvbnRyb2w6IEZvcm1Db250cm9sKTogVmFsaWRhdGlvblJlc3VsdCB7XG5cbiAgICAgICAgdmFyIEVNQUlMX1JFR0VYUCA9IC9eW2EtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykqJC9pO1xuXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlICE9IFwiXCIgJiYgKGNvbnRyb2wudmFsdWUubGVuZ3RoIDw9IDUgfHwgIUVNQUlMX1JFR0VYUC50ZXN0KGNvbnRyb2wudmFsdWUpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgXCJpbmNvcnJlY3RNYWlsRm9ybWF0XCI6IHRydWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYXRjaChncm91cDpGb3JtR3JvdXAsIGZyb206IHN0cmluZywgZGlzdGFudDogc3RyaW5nKTogVmFsaWRhdGlvblJlc3VsdCB7XG5cbiAgICBcdGNvbnNvbGUubG9nKGdyb3VwKTtcblxuICAgIFx0aWYgKGdyb3VwICYmIGdyb3VwLmNvbnRyb2xzW2Zyb21dLnZhbHVlICE9IGdyb3VwLmNvbnRyb2xzW2Zyb21dLnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4geyBcIm5vTWF0Y2hcIjogdHJ1ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXJlY3RpdmVzL2dsb2JhbC12YWxpZGF0b3IudHMiLCJleHBvcnQgY2xhc3MgQmxvZ1Bvc3R7XG5cdGlkOm51bWJlcjtcblx0dGl0bGU6c3RyaW5nO1xuXHRkYXRlOkRhdGU7XG5cdGV4Y2VycHQ6c3RyaW5nO1xuXHR1cmw6c3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHRpdGxlOiBzdHJpbmcsIGRhdGU6IERhdGUsIGV4Y2VycHQ6IHN0cmluZywgdXJsOiBzdHJpbmcpe1xuXG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMudGl0bGUgPSB0aGlzLmRlY29kZUhUTUxFbnRpdGllcyh0aXRsZSk7XG5cdFx0dGhpcy5kYXRlID0gZGF0ZTtcblx0XHR0aGlzLmV4Y2VycHQgPSB0aGlzLmRlY29kZUhUTUxFbnRpdGllcyhleGNlcnB0KTtcblx0XHRTdHJpbmcuZnJvbUNoYXJDb2RlXG5cdFx0dGhpcy51cmwgPSB1cmw7XG5cdH1cblxuXHRwdWJsaWMgdG9TdHJpbmcgPSAoKSA6IHN0cmluZyA9PiB7XG5cdFx0cmV0dXJuIGBCbG9nUG9zdCAoaWQ6ICR7dGhpcy5pZH0sXG5cdFx0XHRcdHRpdGxlOiAke3RoaXMudGl0bGV9LFxuXHRcdFx0XHRkYXRlOiAke3RoaXMuZGF0ZX0sXG5cdFx0XHRcdGV4Y2VycHQ6ICR7dGhpcy5leGNlcnB0fSxcblx0XHRcdFx0dXJsOiAke3RoaXMudXJsfSlgO1xuXHR9XG5cblx0cHJpdmF0ZSBkZWNvZGVIVE1MRW50aXRpZXMoc3RyOnN0cmluZykge1xuXG5cdFx0dmFyIHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcblx0XHRzdHIgPSBzdHIucmVwbGFjZSgvPHNjcmlwdFtePl0qPihbXFxTXFxzXSo/KTxcXC9zY3JpcHQ+L2dtaSwgJycpO1xuICAgICAgXHRzdHIgPSBzdHIucmVwbGFjZSgvPFxcLz9cXHcoPzpbXlwiJz5dfFwiW15cIl0qXCJ8J1teJ10qJykqPi9nbWksICcnKTtcbiAgICAgIFx0c3RyID0gc3RyLnJlcGxhY2UoJ1tSZWFkIG1vcmXigKZdJywgJycpO1xuXHQgICAgdHh0LmlubmVySFRNTCA9IHN0cjtcblxuXHQgICAgcmV0dXJuIHR4dC52YWx1ZTtcbiAgXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWxzL2Jsb2ctcG9zdC5tb2RlbC50cyIsImltcG9ydCB7IFdhdGNoIH0gZnJvbSAnLi93YXRjaC5tb2RlbCdcblxuZXhwb3J0IGNsYXNzIFVzZXJ7XG5cdGlkOm51bWJlcjtcblx0ZW1haWw6c3RyaW5nO1xuXHRuYW1lOnN0cmluZztcblx0bGFzdG5hbWU6c3RyaW5nO1xuXHRjb3VudHJ5OnN0cmluZztcblx0cmVnaXN0ZXJEYXRlOnN0cmluZztcblx0a2V5OnN0cmluZztcblx0d2F0Y2hlczpXYXRjaFtdID0gW107XG5cdGVtYWlsUHJlZmVyZW5jZXM6RW1haWxQcmVmZXJlbmNlcyA9IEVtYWlsUHJlZmVyZW5jZXMuTm9uZTtcblxuXHRjb25zdHJ1Y3RvcihpZDogbnVtYmVyLGVtYWlsOiBzdHJpbmcsbmFtZTogc3RyaW5nLFxuXHRcdGxhc3RuYW1lOiBzdHJpbmcsY291bnRyeTogc3RyaW5nLHJlZ2lzdGVyRGF0ZTogXG5cdFx0c3RyaW5nLGtleTogc3RyaW5nLHdhdGNoZXM6IFdhdGNoW10pe1xuXG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMuZW1haWwgPSBlbWFpbDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubGFzdG5hbWUgPSBsYXN0bmFtZTtcblx0XHR0aGlzLmNvdW50cnkgPSBjb3VudHJ5O1xuXHRcdHRoaXMucmVnaXN0ZXJEYXRlID0gcmVnaXN0ZXJEYXRlO1xuXHRcdHRoaXMua2V5ID0ga2V5O1xuXHRcdHRoaXMud2F0Y2hlcyA9IHdhdGNoZXM7XG5cdH1cblxuXHR1cHNlcnRXYXRjaCh3YXRjaDpXYXRjaCl7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLndhdGNoZXMubGVuZ3RoOyBpKyspIHtcblxuXHRcdFx0aWYodGhpcy53YXRjaGVzW2ldLmlkID09IHdhdGNoLmlkKXtcblx0XHRcdFx0dGhpcy53YXRjaGVzW2ldID0gd2F0Y2g7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLndhdGNoZXMucHVzaCh3YXRjaCk7XG5cdH1cblxuXHRwdWJsaWMgdG9TdHJpbmcgPSAoKSA6IHN0cmluZyA9PiB7XG5cblx0XHRyZXR1cm4gYFVzZXIgKFxuXHRcdFx0aWQ6ICR7dGhpcy5pZH0sIFxuXHRcdFx0ZW1haWw6ICR7dGhpcy5lbWFpbH0sIFxuXHRcdFx0bmFtZTogJHt0aGlzLm5hbWV9LCBcblx0XHRcdGxhc3RuYW1lOiAke3RoaXMubGFzdG5hbWV9LCBcblx0XHRcdGNvdW50cnk6ICR7dGhpcy5jb3VudHJ5fSwgXG5cdFx0XHRyZWdpc3RlckRhdGU6ICR7dGhpcy5yZWdpc3RlckRhdGV9LCBcblx0XHRcdGtleTogJHt0aGlzLmtleX0sIFxuXHRcdFx0d2F0Y2hlczogJHt0aGlzLndhdGNoZXN9KWA7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBlbnVtIEVtYWlsUHJlZmVyZW5jZXMge1xuXG5cdE5vbmUgPSAwLFxuXHRGaXJzdFdhdGNoID0gMSA8PCAxLFxuXHRGaXJzdE1lYXN1cmUgPSAxIDw8IDIsXG5cdERheUFjY3VyYWN5ID0gMSA8PCAzLFxuXHRXZWVrQWNjdXJhY3kgPSAxIDw8IDQsXG5cdFJlc3VsdCA9IDEgPDwgNSxcblx0TmV3TWVhc3VyZSA9IDEgPDwgNixcblx0U2Vjb25kV2F0Y2ggPSAxIDw8IDcsXG5cdENvbWViYWNrID0gMSA8PCA4LFxuXHRXYXRjaFN0b3JpZXMgPSAxIDw8IDlcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVscy91c2VyLm1vZGVsLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdhcmV0aG1ldGljU2lnbidcbn0pIFxuZXhwb3J0IGNsYXNzIEFyZXRobWV0aWNTaWduIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmKHZhbHVlID49IDApe1xuICAgICAgICByZXR1cm4gXCIrXCIgKyB2YWx1ZTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGlwZXMvYXJldGhtZXRpYy1zaWduLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2tGb3JtYXR0ZXInXHJcbn0pIFxyXG5leHBvcnQgY2xhc3MgS0Zvcm1hdHRlciBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAvL3dlIGV4cGVjdCBhIHNpZ25lZCBudW1iZXIgKGkuZSArMi43KVxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgXHRsZXQgc2lnbjpzdHJpbmcgPSB2YWx1ZS5jaGFyQXQoMCk7XHJcbiAgXHR2YWx1ZSA9IHZhbHVlLnN1YnN0cigxKTtcclxuICBcdGxldCBudW1iZXIgPSBOdW1iZXIodmFsdWUpO1xyXG5cclxuICBcdGlmKE1hdGguYWJzKG51bWJlcikgPiA5OTkpe1xyXG4gIFx0XHRyZXR1cm4gc2lnbiArIChudW1iZXIvMTAwMCkudG9GaXhlZCgwKSArICdrJztcclxuICBcdH1lbHNlIGlmKE1hdGguYWJzKG51bWJlcikgPiAxMDApe1xyXG4gIFx0XHRyZXR1cm4gc2lnbiArIG51bWJlci50b0ZpeGVkKDApO1xyXG4gIFx0fWVsc2V7XHJcbiAgXHRcdHJldHVybiBzaWduICsgbnVtYmVyLnRvRml4ZWQoMSk7XHJcbiAgXHR9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9waXBlcy9rLWZvcm1hdHRlci5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdsZWFkaW5nWmVybydcbn0pXG5leHBvcnQgY2xhc3MgTGVhZGluZ1plcm8gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHZhbHVlIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIFwiMFwiICsgdmFsdWU7XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BpcGVzL2xlYWRpbmctemVyby5waXBlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEzX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEFyZXRobWV0aWNTaWduIH0gZnJvbSAnLi9zcmMvcGlwZXMvYXJldGhtZXRpYy1zaWduLnBpcGUnO1xuaW1wb3J0IHsgTGVhZGluZ1plcm8gfSBmcm9tICcuL3NyYy9waXBlcy9sZWFkaW5nLXplcm8ucGlwZSc7XG5pbXBvcnQgeyBLRm9ybWF0dGVyIH0gZnJvbSAnLi9zcmMvcGlwZXMvay1mb3JtYXR0ZXIucGlwZSc7XG5pbXBvcnQgeyBNb29uUGhhc2VzQ29tcG9uZW50IH0gZnJvbSAnLi9zcmMvZGlyZWN0aXZlcy9jbG9jay9tb29uLXBoYXNlcy9tb29uLXBoYXNlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHdBUElTZXJ2aWNlIH0gZnJvbSAnLi9zcmMvc2VydmljZXMvdHdhcGkuc2VydmljZSc7XG5pbXBvcnQgeyBHQVNlcnZpY2UgfSBmcm9tICcuL3NyYy9zZXJ2aWNlcy9nYS5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlTG9hZGVyIH0gZnJvbSAnbmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlJztcblxuXG4vKipcbiAqIFNFUlZJQ0VTXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vc3JjL3NlcnZpY2VzL3R3YXBpLnNlcnZpY2UnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9zZXJ2aWNlcy9nYS5zZXJ2aWNlJ1xuLyoqXG4gKiBQSVBFU1xuICovXG5leHBvcnQgKiBmcm9tICcuL3NyYy9waXBlcy9hcmV0aG1ldGljLXNpZ24ucGlwZSdcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3BpcGVzL2xlYWRpbmctemVyby5waXBlJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvcGlwZXMvay1mb3JtYXR0ZXIucGlwZSdcbi8qKlxuICogTU9ERUxcbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvbW9kZWxzL3dhdGNoLm1vZGVsJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvbW9kZWxzL3VzZXIubW9kZWwnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9tb2RlbHMvbWVhc3VyZS5tb2RlbCdcbmV4cG9ydCAqIGZyb20gJy4vc3JjL21vZGVscy9ibG9nLXBvc3QubW9kZWwnXG4vKipcbiAqIERJUkVDVElWRVNcbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZGlyZWN0aXZlcy9jbG9jay9jbG9jay5jb21wb25lbnQnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kaXJlY3RpdmVzL2Nsb2NrL21vb24tcGhhc2VzL21vb24tcGhhc2VzLmNvbXBvbmVudCdcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RpcmVjdGl2ZXMvbG9naW4vbG9naW4uY29tcG9uZW50J1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZGlyZWN0aXZlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCdcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RpcmVjdGl2ZXMvd2F0Y2gvd2F0Y2guY29tcG9uZW50J1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXJldGhtZXRpY1NpZ24sXG4gICAgTGVhZGluZ1plcm8sXG4gICAgS0Zvcm1hdHRlcixcbiAgICBNb29uUGhhc2VzQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFR3QVBJU2VydmljZSxcbiAgICBHQVNlcnZpY2VcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFyZXRobWV0aWNTaWduLFxuICAgIExlYWRpbmdaZXJvLFxuICAgIEtGb3JtYXR0ZXIsXG4gICAgTW9vblBoYXNlc0NvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBIdHRwTW9kdWxlXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVHdDb3JlTW9kdWxlIHtcbn0gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXgudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQ2xvY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG1vbnRoOnN0cmluZztcbiAgZGF5OnN0cmluZztcbiAgZGF0ZTpEYXRlO1xuICBuZXh0TGVhcDpudW1iZXI7XG4gIG1vbnRoTmFtZXMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ107XG4gIGRheU5hbWVzID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cblx0dGhpcy5kYXRlID0gbmV3IERhdGUoKTtcblx0dGhpcy5tb250aCA9IHRoaXMubW9udGhOYW1lc1t0aGlzLmRhdGUuZ2V0TW9udGgoKV07XG5cdHRoaXMuZGF5ID0gdGhpcy5kYXlOYW1lc1t0aGlzLmRhdGUuZ2V0RGF5KCldICsgXCIgXCIgKyB0aGlzLmRhdGUuZ2V0RGF0ZSgpO1xuXG5cdHRoaXMubmV4dExlYXAgPSB0aGlzLmRhdGUuZ2V0RnVsbFllYXIoKTtcblxuXHRcdHdoaWxlKCF0aGlzLmlzTGVhcFllYXIodGhpcy5uZXh0TGVhcCkpe1xuXHRcdFx0dGhpcy5uZXh0TGVhcCsrO1xuXHRcdH1cbiAgfVxuXG4gIGlzTGVhcFllYXIoeWVhcjpudW1iZXIpe1xuXHRyZXR1cm4gKCh5ZWFyICUgNCA9PSAwKSAmJiAoeWVhciAlIDEwMCAhPSAwKSkgfHwgKHllYXIgJSA0MDAgPT0gMCk7XG4gIH1cblxuICBpbml0TG9jYWxDbG9ja3MoKSB7XG5cbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gdGhpcy5kYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuXHR2YXIgc2Vjb25kcyA9IHRoaXMuZGF0ZS5nZXRTZWNvbmRzKCk7XG5cdHZhciBtaW51dGVzID0gdGhpcy5kYXRlLmdldE1pbnV0ZXMoKTtcblx0dmFyIGhvdXJzID0gdGhpcy5kYXRlLmdldEhvdXJzKCk7XG5cblx0Ly8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIGVhY2ggaGFuZCBhbmQgaXQncyBhbmdsZSBpbiBkZWdyZWVzXG5cdHZhciBoYW5kcyA9IFtcblx0XHR7XG5cdFx0XHRoYW5kOiAnaG91cnMnLFxuXHRcdFx0YW5nbGU6IChob3VycyAqIDMwKSArIChtaW51dGVzIC8gMilcblx0XHR9LFxuXHRcdHtcblx0XHRcdGhhbmQ6ICdtaW51dGVzJyxcblx0XHRcdGFuZ2xlOiAobWludXRlcyAqIDYpICsgKHNlY29uZHMvNjApICogNlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aGFuZDogJ3NlY29uZHMnLFxuXHRcdFx0YW5nbGU6IChzZWNvbmRzICogNikgKyAobWlsbGlzZWNvbmRzLzEwMDApKjZcblx0XHR9XG5cdF07XG5cblx0Ly9Mb29wIHRocm91Z2ggZWFjaCBvZiB0aGVzZSBoYW5kcyB0byBzZXQgdGhlaXIgYW5nbGVcblx0Zm9yICh2YXIgaiA9IDA7IGogPCBoYW5kcy5sZW5ndGg7IGorKykge1xuXHRcdHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdCcuJyArIGhhbmRzW2pdLmhhbmRcblx0XHQpO1xuXG5cdFx0ZWxlbWVudC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAncm90YXRlWignICsgaGFuZHNbal0uYW5nbGUgKyAnZGVnKSc7XG5cdFx0ZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWignICsgaGFuZHNbal0uYW5nbGUgKyAnZGVnKSc7XG5cdH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpcmVjdGl2ZXMvY2xvY2svY2xvY2suY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJ25nMi10cmFuc2xhdGUvbmcyLXRyYW5zbGF0ZSc7XG5pbXBvcnQge1R3QVBJU2VydmljZX0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy90d2FwaS5zZXJ2aWNlJ1xuaW1wb3J0IHsgR2xvYmFsVmFsaWRhdG9yIH0gZnJvbSAnLi8uLi9nbG9iYWwtdmFsaWRhdG9yJztcbmltcG9ydCB7IEdBU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvZ2Euc2VydmljZSc7XG5cbmltcG9ydCB7ICAgXG4gIFZhbGlkYXRvcnMsICBcbiAgRm9ybUJ1aWxkZXIsICBcbiAgRm9ybUdyb3VwXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbiBcbi8qKlxuICogTG9naW4gY29tcG9uZW50LiBQcm92aWRlcyBhIGxvZ2luIGZvcm0gd2l0aCBjb250cm9sbGVkIGFuZFxuICogZW1pdHMgYSBVc2VyICgkZXZlbnQgdXNlckxvZ2dlZCkgb24gc3VjY2Vzc2Z1bCBsb2dpbi5cbiAqL1xuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBsb2dpbkZvcm0gICAgICAgICAgICAgIDogRm9ybUdyb3VwO1xuICBlcnJvcnMgICAgICAgICAgICAgICAgID0gW107XG4gIHN1Ym1pdEF0dGVtcHQ6ZmFsc2U7XG4gIHVzZXJMb2dnZWQgICA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgbG9naW5BdHRlbXB0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIHcvIHNlcnZpY2UgaW5qZWN0aW9uXG4gICAqIEBwYXJhbSB7VHJhbnNsYXRlU2VydmljZX0gcHJpdmF0ZSB0cmFuc2xhdGUgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0ge1R3QVBJU2VydmljZX0gICAgIHByaXZhdGUgdHdhcGkgICAgIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtIHtGb3JtQnVpbGRlcn0gICAgICBwcml2YXRlIGJ1aWxkZXIgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRlOiBhbnksIFxuICAgIHByb3RlY3RlZCB0d2FwaSAgOiBUd0FQSVNlcnZpY2UsIFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXIgIDogYW55XG4gICkgeyBcblxuICAgIC8vTGFuZyBkZWZpbml0aW9uXG5cdCAgdGhpcy50cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoJ2VuJyk7XG5cdCAgdGhpcy50cmFuc2xhdGUudXNlKCdlbicpO1xuXG4gICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVtYWlsICAgOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBHbG9iYWxWYWxpZGF0b3IubWFpbEZvcm1hdF0pXSxcbiAgICAgIHBhc3N3b3JkOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg1KV0pXVxuICAgIH0pO1xuXG4gIH1cblxuICAvKipcbiAgICogTG9naW4gYW4gRkIgdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmJVc2VyIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIG9uRmJTdWJtaXQoZmJVc2VyOntcbiAgICBlbWFpbDogc3RyaW5nLCBcbiAgICB0b2tlbjogc3RyaW5nLFxuICAgIGxhc3RuYW1lOiBzdHJpbmcsIFxuICAgIGZpcnN0bmFtZTogc3RyaW5nfVxuICApe1xuXG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcblxuICAgIHRoaXMubG9naW5BdHRlbXB0LmVtaXQodHJ1ZSk7XG5cbiAgICAvL1RyaWVzIHRvIGxvZ2luIGFuIHVzZXIgdXNpbmcgaGlzIGZiIGVtYWlsXG4gICAgdGhpcy50d2FwaS5zaWdudXBGYWNlYm9vayhmYlVzZXIuZW1haWwsIGZiVXNlci50b2tlbiwgZmJVc2VyLmxhc3RuYW1lLCBmYlVzZXIuZmlyc3RuYW1lKS50aGVuKFxuICAgICAgICAvL3N1Y2Nlc3MsIGF3YXkgd2UgZ29cbiAgICAgICAgcmVzID0+IHsgXG4gICAgICAgICAgdGhpcy51c2VyTG9nZ2VkLmVtaXQocmVzKTtcbiAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0NUQScsICdGQl9MT0dJTicsICdTVUNDRVNTJyk7XG4gICAgICAgIH0sIFxuICAgICAgICBlcnIgPT4ge1xuXG4gICAgICAgICAgLy9FcnJvciwgbW9zdCBsaWtlbHkgdGhlIHVzZXIgdHJpZXMgdG8gc2lnbmluXG4gICAgICAgICAgLy91c2luZyBmYWNlYm9vayB3aGlsZSBoZSBoYXMgYSByZWd1bGFyIFxuICAgICAgICAgIC8vYWNjb3VudCB3aXRoIHRoZSBzYW1lIGVtYWlsLlxuICAgICAgICAgIHRoaXMubG9naW5BdHRlbXB0LmVtaXQoZmFsc2UpO1xuICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQ1RBJywgJ0ZCX1NJR05VUCcsICdGQUlMJyk7XG4gICAgICAgICAgc3dpdGNoIChlcnIuc3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlIDQwMTpcbiAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnY3JlZGVudGlhbHMnKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdlcnJvcicpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5sb2dpbkF0dGVtcHQuZW1pdChmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogRm9ybSBzdWJtaXRcbiAgICogQHBhcmFtIHtzdHJpbmd9fSB1c2VyIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIG9uU3VibWl0KHVzZXI6e2VtYWlsOnN0cmluZywgcGFzc3dvcmQ6c3RyaW5nfSl7XG5cbiAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgIFxuICAgIC8vRm9ybSBjb25zdHJhaW50cyBhcmUgb2tcbiAgICBpZih0aGlzLmxvZ2luRm9ybS52YWxpZCl7XG5cbiAgICAgIHRoaXMubG9naW5BdHRlbXB0LmVtaXQodHJ1ZSk7XG5cbiAgICAgIHRoaXMudHdhcGkubG9naW4odXNlci5lbWFpbCwgdXNlci5wYXNzd29yZCkudGhlbihcbiAgICAgICAgcmVzID0+IHsgXG4gICAgICAgICAgdGhpcy51c2VyTG9nZ2VkLmVtaXQocmVzKTtcbiAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0NUQScsICdMT0dJTicsICdTVUNDRVNTJyk7XG4gICAgICAgIH0sIFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQ1RBJywgJ0xPR0lOJywgJ0ZBSUwnKTtcbiAgICAgICAgICBzd2l0Y2ggKGVyci5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgNDAxOlxuICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdjcmVkZW50aWFscycpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ2Vycm9yJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgdGhpcy5sb2dpbkF0dGVtcHQuZW1pdChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgb25QYXNzd29yZFJlc2V0U3VibWl0KGVtYWlsOnN0cmluZyl7XG4gICAgdGhpcy50d2FwaS5yZXNldFBhc3N3b3JkKGVtYWlsKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXJlY3RpdmVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICduZzItdHJhbnNsYXRlL25nMi10cmFuc2xhdGUnO1xuaW1wb3J0IHtUd0FQSVNlcnZpY2V9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvdHdhcGkuc2VydmljZSdcbmltcG9ydCB7IEdsb2JhbFZhbGlkYXRvciB9IGZyb20gJy4vLi4vZ2xvYmFsLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBHQVNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2dhLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyAgIFxuICBWYWxpZGF0b3JzLFxuICBGb3JtQnVpbGRlciwgIFxuICBGb3JtR3JvdXBcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbi8qKlxuICogU2lnbnVwIGZvcm0uIEVtaXRzIGEgdXNlckxvZ2dlZCBldmVudCBvbiBuZXcgdXNlciBzaWdudXBcbiAqL1xuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgc2lnbnVwRm9ybSAgIDogRm9ybUdyb3VwO1xuICBzdWJtaXRBdHRlbXB0OmJvb2xlYW4gPSBmYWxzZTtcbiAgZXJyb3JzICAgICAgID0gW107XG4gIGNvdW50cmllcyAgICA6W3N0cmluZ107XG4gIGZpbHRlcmVkTGlzdCA9IFtdO1xuICBxdWVyeSAgICAgICAgOiBzdHJpbmcgPSBcIlwiO1xuXG4gIEBPdXRwdXQoKSB1c2VyTG9nZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2lnbnVwQXR0ZW1wdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgLyoqXG4gICAqIENvbnN0cnVjdG9yIHcvIHNlcnZpY2UgaW5qZWN0aW9uXG4gICAqIEBwYXJhbSB7VHJhbnNsYXRlU2VydmljZX0gcHJpdmF0ZSB0cmFuc2xhdGUgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0ge1R3QVBJU2VydmljZX0gICAgIHByaXZhdGUgdHdhcGkgICAgIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtIHtGb3JtQnVpbGRlcn0gICAgICBwcml2YXRlIGJ1aWxkZXIgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZTogYW55LCBcbiAgICBwcml2YXRlIHR3YXBpOiBUd0FQSVNlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IGFueSkgeyBcblxuICAgIHRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZygnZW4nKTtcbiAgICB0cmFuc2xhdGUudXNlKCdlbicpO1xuXG4gICAgdHJhbnNsYXRlLmdldChcImNvdW50cmllc1wiKS5zdWJzY3JpYmUoKHJlc3VsdDogW3N0cmluZ10pID0+IHtcbiAgICAgIHRoaXMuY291bnRyaWVzID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgdGhpcy5zaWdudXBGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgIGVtYWlsICAgICAgICAgOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBHbG9iYWxWYWxpZGF0b3IubWFpbEZvcm1hdF0pXSxcbiAgICAgICAgZW1haWxSZXBlYXQgICA6IFtcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEdsb2JhbFZhbGlkYXRvci5tYWlsRm9ybWF0XSldLFxuXG4gICAgICAgIHBhc3N3b3JkICAgICAgOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KV0pXSxcbiAgICAgICAgcGFzc3dvcmRSZXBlYXQ6IFtcIlwiLCBcbiAgICAgICAgICBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgXG4gICAgICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIGxhc3ROYW1lICAgICAgOiBcIlwiLFxuICAgICAgICBmaXJzdE5hbWUgICAgIDogXCJcIixcbiAgICAgICAgY291bnRyeSAgICAgICA6IFwiXCJcbiAgICAgIH0pO1xuICB9XG5cblxuICAvKipcbiAgICogVHJpbXMgdGhlIGZpbHRlcmVkTGlzdCBhY2NvcmluZyB0byB0aGUgXG4gICAqIGNvdW50cnkgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGZpbHRlcihxdWVyeTpzdHJpbmcpIHtcbiAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IHRoaXMuY291bnRyaWVzLmZpbHRlcihmdW5jdGlvbihlbGVtZW50OnN0cmluZyl7XG4gICAgICByZXR1cm4gZWxlbWVudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NpZ24gdGhlIGNvdW50cnkgbGFiZWwgd2hlbiBzZWxlY3RlZCBcbiAgICogZnJvbSB0aGUgbGlzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaXRlbSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBzZWxlY3QoaXRlbTpzdHJpbmcpe1xuICAgIHRoaXMucXVlcnkgPSBpdGVtO1xuICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gW107XG4gIH1cblxuICAvKipcbiAgICogc3VibWl0IHRoZSBmb3JtXG4gICAqIEBwYXJhbSB7c3RyaW5nICAgIH19IHVzZXIgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgb25TdWJtaXQodXNlcjp7XG4gICAgICBlbWFpbDogc3RyaW5nLCBcbiAgICAgIHBhc3N3b3JkOiBzdHJpbmcsXG4gICAgICBlbWFpbFJlcGVhdDogc3RyaW5nLFxuICAgICAgcGFzc3dvcmRSZXBlYXQ6IHN0cmluZyxcbiAgICAgIGxhc3ROYW1lOiBzdHJpbmcsXG4gICAgICBmaXJzdE5hbWU6IHN0cmluZ1xuICAgIH0pIHtcblxuICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IHRydWU7XG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcblxuXG4gICAgaWYodGhpcy5zaWdudXBGb3JtLnZhbGlkICYmIFxuICAgICAgdXNlci5wYXNzd29yZCA9PSB1c2VyLnBhc3N3b3JkUmVwZWF0ICYmXG4gICAgICB1c2VyLmVtYWlsID09IHVzZXIuZW1haWxSZXBlYXQpe1xuXG4gICAgICB0aGlzLnNpZ251cEF0dGVtcHQuZW1pdCh0cnVlKTtcblxuICAgICAgdGhpcy50d2FwaS5zaWdudXAodXNlci5lbWFpbCxcbiAgICAgICB1c2VyLnBhc3N3b3JkLFxuICAgICAgIHVzZXIuZmlyc3ROYW1lLFxuICAgICAgIHVzZXIubGFzdE5hbWUsXG4gICAgICAgdGhpcy5xdWVyeSkudGhlbihcbiAgICAgICAgcmVzID0+IHsgXG4gICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnU0lHTlVQJywgJ1NVQ0NFU1MnKTtcbiAgICAgICAgICB0aGlzLnVzZXJMb2dnZWQuZW1pdChyZXMpIFxuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgR0FTZXJ2aWNlLmV2ZW50KCdDVEEnLCAnU0lHTlVQJywgJ0ZBSUwnKTtcbiAgICAgICAgICBzd2l0Y2ggKGVycm9yLnN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSBUd0FQSVNlcnZpY2UuSFRUUF9VTkFVVEhPUklaRUQ6XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ2VtYWlsLXRha2VuJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnZXJyb3InKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgKVxuXG4gICAgICB0aGlzLnNpZ251cEF0dGVtcHQuZW1pdChmYWxzZSk7XG4gICAgfSBlbHNle1xuXG4gICAgICBpZih1c2VyLnBhc3N3b3JkICE9IHVzZXIucGFzc3dvcmRSZXBlYXQpe1xuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdwYXNzd29yZC1tYXRjaCcpO1xuICAgICAgfVxuXG4gICAgICBpZih1c2VyLmVtYWlsICE9IHVzZXIuZW1haWxSZXBlYXQpe1xuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdlbWFpbC1tYXRjaCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXJlY3RpdmVzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnbmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlJztcblxuaW1wb3J0IHsgV2F0Y2ggfSBmcm9tICcuLy4uLy4uL21vZGVscy93YXRjaC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi8uLi8uLi9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQge1R3QVBJU2VydmljZX0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy90d2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEdBU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvZ2Euc2VydmljZSc7XG5cbmltcG9ydCB7ICAgXG4gIEZvcm1CdWlsZGVyLCAgXG4gIEZvcm1Hcm91cCxcbiAgVmFsaWRhdG9yc1xufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogRnJvbSB0byBhZGQsIGRlbGV0ZSBhbmQgdXBkYXRlIHdhdGNoZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFdhdGNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICB1c2VyOiBVc2VyO1xuICBAT3V0cHV0KCkgd2F0Y2hTYXZlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgd2F0Y2hNb2RlbDogV2F0Y2ggPSBuZXcgV2F0Y2gobnVsbCwgXCJcIik7XG4gIHdhdGNoRm9ybSAgICAgICAgOiBGb3JtR3JvdXA7XG4gIGJyYW5kcyAgICAgICAgICAgOiB7IG5hbWU6IHN0cmluZywgaWNvbjogc3RyaW5nLCBtb2RlbHM6IHN0cmluZyB9W10gPSBbXTtcbiAgbW9kZWxzICAgICAgICAgICA6IHN0cmluZ1tdID0gW107XG4gIGZpbHRlcmVkQnJhbmRMaXN0OiB7IG5hbWU6IHN0cmluZywgaWNvbjogc3RyaW5nLCBtb2RlbHM6IHN0cmluZyB9W10gPSBbXTtcbiAgZmlsdGVyZWRNb2RlbExpc3Q6IHN0cmluZ1tdID0gW107XG4gIGVycm9yICAgICAgICAgICAgOiBib29sZWFuID0gZmFsc2U7XG4gIHN1Ym1pdEF0dGVtcHQgICAgOiBib29sZWFuID0gZmFsc2U7XG4gIGJyYW5kU2VsZWN0ZWQgICAgOiBib29sZWFuID0gZmFsc2U7XG4gIG1vZGVsU2VsZWN0ZWQgICAgOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIHdpdGggRElcbiAgICogQHBhcmFtIHtUcmFuc2xhdGVTZXJ2aWNlfSBwcml2YXRlIHRyYW5zbGF0ZSBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSB7VHdBUElTZXJ2aWNlfSAgICAgcHJpdmF0ZSB0d2FwaSAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0ge0Zvcm1CdWlsZGVyfSAgICAgIHByaXZhdGUgYnVpbGRlciAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGU6IGFueSxcbiAgICBwcml2YXRlIHR3YXBpICAgICAgOiBUd0FQSVNlcnZpY2UsIFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXIgICAgOiBhbnksXG4gICkge1xuXG4gICAgdHJhbnNsYXRlLnNldERlZmF1bHRMYW5nKCdlbicpO1xuICAgIHRyYW5zbGF0ZS51c2UoJ2VuJyk7XG4gICAgXG5cbiAgICB0aGlzLndhdGNoRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgaWQgICAgIDogdGhpcy53YXRjaE1vZGVsLmlkLFxuICAgICAgYnJhbmQgIDogW3RoaXMud2F0Y2hNb2RlbC5icmFuZCwgIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbmFtZSAgIDogW3RoaXMud2F0Y2hNb2RlbC5uYW1lLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNhbGliZXI6IHRoaXMud2F0Y2hNb2RlbC5jYWxpYmVyLFxuICAgICAgeWVhciAgIDogW3RoaXMud2F0Y2hNb2RlbC55ZWFyT2ZCdXksIFZhbGlkYXRvcnMuY29tcG9zZShcbiAgICAgICAgW1ZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLCAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoNCldXG4gICAgICApXSxcbiAgICAgIHNlcmlhbCA6IHRoaXMud2F0Y2hNb2RlbC5zZXJpYWxcbiAgICB9KTtcblxuXG4gICAgdGhpcy50d2FwaS5nZXRCcmFuZHMoKS50aGVuKFxuICAgICAgcmVzID0+IHtcbiAgICAgICAgdGhpcy5icmFuZHMgPSByZXM7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBbc2VsZWN0QnJhbmQgZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBicmFuZCBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBzZWxlY3RCcmFuZChicmFuZDogc3RyaW5nKXtcbiAgICB0aGlzLmJyYW5kU2VsZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMudHdhcGkuZ2V0TW9kZWxzKGJyYW5kLnRvTG93ZXJDYXNlKCkpLnRoZW4oXG4gICAgICByZXMgICA9PiB0aGlzLm1vZGVscyA9IHJlcyxcbiAgICAgIGVycm9yID0+IHRoaXMubW9kZWxzID0gW11cbiAgICApO1xuXG4gICAgdGhpcy5maWx0ZXJlZEJyYW5kTGlzdCA9IFtdO1xuICAgIHRoaXMud2F0Y2hNb2RlbC5icmFuZCA9IGJyYW5kO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhIG1vZGVsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlbCBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBzZWxlY3RNb2RlbChtb2RlbDogc3RyaW5nKSB7XG4gICAgdGhpcy5tb2RlbFNlbGVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmZpbHRlcmVkTW9kZWxMaXN0ID0gW107XG4gICAgdGhpcy53YXRjaE1vZGVsLm5hbWUgPSBtb2RlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXIgYnJhbmRzIGFjY29yZGluZyB0aGUgYnJhbmRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJyYW5kIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGZpbHRlckJyYW5kKGJyYW5kOiBzdHJpbmcpIHtcblxuICAgIGlmKHRoaXMuYnJhbmRTZWxlY3RlZCA9PSBmYWxzZSl7XG4gICAgICB0aGlzLmZpbHRlcmVkQnJhbmRMaXN0ID0gdGhpcy5icmFuZHMuZmlsdGVyKFxuICAgICAgICBmdW5jdGlvbihlbGVtZW50OiB7IG5hbWU6IHN0cmluZywgaWNvbjogc3RyaW5nLCBtb2RlbHM6IHN0cmluZyB9KSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoYnJhbmQudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgICAgIH0pO1xuICAgIFxuICAgIH1lbHNle1xuICAgICAgc2V0VGltZW91dCgoKT0+IHRoaXMuYnJhbmRTZWxlY3RlZCA9IGZhbHNlLCA1KTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIG1vZGVscyBhY2NvcmRpbmcgdG8gbW9kZWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGVsIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGZpbHRlck1vZGVsKG1vZGVsOnN0cmluZyl7XG5cbiAgICBpZih0aGlzLm1vZGVsU2VsZWN0ZWQgPT0gZmFsc2Upe1xuICAgICAgdGhpcy5maWx0ZXJlZE1vZGVsTGlzdCA9IHRoaXMubW9kZWxzLmZpbHRlcihmdW5jdGlvbihlbGVtZW50OnN0cmluZykge1xuICAgICAgICByZXR1cm4gZWxlbWVudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobW9kZWwudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgICAgIH0pO1xuICAgIH1lbHNle1xuICAgICAgc2V0VGltZW91dCgoKT0+IHRoaXMubW9kZWxTZWxlY3RlZCA9IGZhbHNlLCA1KTtcbiAgICB9XG4gICAgXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJtaXQgYSB3YXRjaFxuICAgKi9cbiAgb25TdWJtaXQoKXtcblxuICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy53YXRjaEZvcm0udmFsaWQpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICBcbiAgICAgIHRoaXMudHdhcGkudXBzZXJ0V2F0Y2godGhpcy53YXRjaE1vZGVsKS50aGVuKFxuICAgICAgICByZXMgPT4ge1xuICAgICAgICAgIEdBU2VydmljZS5ldmVudCgnQ1RBJywgJ1dBVENIX1VQU0VSVCcsICdTVUNDRVNTJyk7XG4gICAgICAgICAgdGhpcy51c2VyLnVwc2VydFdhdGNoKHJlcyk7XG4gICAgICAgICAgdGhpcy53YXRjaFNhdmVkLmVtaXQodGhpcy51c2VyKTtcbiAgICAgICAgICB0aGlzLnN1Ym1pdEF0dGVtcHQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmVycm9yID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0NUQScsICdXQVRDSF9VUFNFUlQnLCAnRkFJTCcpO1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc3VibWl0QXR0ZW1wdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5lcnJvciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgb25EZWxldGUoKXtcbiAgICB0aGlzLnN1Ym1pdEF0dGVtcHQgPSB0cnVlO1xuICAgIHRoaXMudHdhcGkuZGVsZXRlV2F0Y2godGhpcy51c2VyLCB0aGlzLndhdGNoTW9kZWwpLnRoZW4oXG4gICAgICByZXMgPT4ge1xuICAgICAgICBHQVNlcnZpY2UuZXZlbnQoJ0NUQScsICdXQVRDSF9ERUxFVEUnLCAnU1VDQ0VTUycpO1xuICAgICAgICB0aGlzLndhdGNoU2F2ZWQuZW1pdChyZXMpO1xuICAgICAgICB0aGlzLnN1Ym1pdEF0dGVtcHQgPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgIEdBU2VydmljZS5ldmVudCgnQ1RBJywgJ1dBVENIX0RFTEVURScsICdGQUlMJyk7XG4gICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLnN1Ym1pdEF0dGVtcHQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlyZWN0aXZlcy93YXRjaC93YXRjaC5jb21wb25lbnQudHMiLCJleHBvcnQgY2xhc3MgU3RyaW5nSGVscGVye1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbGV2ZW5zaHRlaW4oYTpzdHJpbmcsIGI6c3RyaW5nKXtcclxuICAgICAgICBpZighYSB8fCAhYikgcmV0dXJuIChhIHx8IGIpLmxlbmd0aDtcclxuICAgICAgICB2YXIgbSA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPD0gYi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIG1baV0gPSBbaV07XHJcbiAgICAgICAgICAgIGlmKGkgPT09IDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDw9IGEubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgbVswXVtqXSA9IGo7XHJcbiAgICAgICAgICAgICAgICBpZihqID09PSAwKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIG1baV1bal0gPSBiLmNoYXJBdChpIC0gMSkgPT0gYS5jaGFyQXQoaiAtIDEpID8gbVtpIC0gMV1baiAtIDFdIDogTWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgICAgICAgbVtpLTFdW2otMV0gKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG1baV1bai0xXSArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgbVtpLTFdW2pdICsgMVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbVtiLmxlbmd0aF1bYS5sZW5ndGhdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVwbGFjZUFsbCh0YXJnZXQ6c3RyaW5nLCBzZWFyY2g6c3RyaW5nLCByZXBsYWNlbWVudDpzdHJpbmcpOnN0cmluZ3tcclxuICAgICAgICByZXR1cm4gdGFyZ2V0LnNwbGl0KHNlYXJjaCkuam9pbihyZXBsYWNlbWVudCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9zdHJpbmcuaGVscGVyLnRzIiwiaW1wb3J0IHsgVXNlciwgfSAgZnJvbSAnLi91c2VyLm1vZGVsJztcbmltcG9ydCB7IFdhdGNoIH0gIGZyb20gJy4vd2F0Y2gubW9kZWwnO1xuaW1wb3J0IHsgQmxvZ1Bvc3QgfSAgZnJvbSAnLi9ibG9nLXBvc3QubW9kZWwnO1xuaW1wb3J0IHsgTWVhc3VyZSB9ICBmcm9tICcuL21lYXN1cmUubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgTW9kZWxGYWN0b3J5IHtcblxuXG5cdC8qKlxuXHQgKiBCdWlsZHMgYW4gVXNlciBmcm9tIGpzb24gcmVzcG9uc2Vcblx0ICogQHBhcmFtICB7YW55fSAganNvblVzZXJcblx0ICogQHJldHVybiB7VXNlcn0gICAgICAgICBcblx0ICovXG5cdHN0YXRpYyBidWlsZFVzZXIoanNvblVzZXI6IGFueSk6IFVzZXIge1xuXG5cdFx0cmV0dXJuIG5ldyBVc2VyKFxuXHRcdFx0anNvblVzZXIudXNlcklkLFxuXHRcdFx0anNvblVzZXIuZW1haWwsXG5cdFx0XHRqc29uVXNlci5maXJzdG5hbWUsXG5cdFx0XHRqc29uVXNlci5uYW1lLFxuXHRcdFx0anNvblVzZXIuY291bnRyeSxcblx0XHRcdGpzb25Vc2VyLnJlZ2lzdGVyRGF0ZSxcblx0XHRcdGpzb25Vc2VyLmtleSxcblx0XHRcdE1vZGVsRmFjdG9yeS5idWlsZFdhdGNoZXMoanNvblVzZXIud2F0Y2hlcylcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJ1aWxkcyBhIHdhdGNoIGZyb20ganNvbiByZXNwb25zZVxuXHQgKiBAcGFyYW0gIHthbnl9ICAgICBqc29uV2F0Y2hlc1xuXHQgKiBAcmV0dXJuIHtXYXRjaFtdfSAgICAgICAgICAgIFxuXHQgKi9cblx0c3RhdGljIGJ1aWxkV2F0Y2hlcyhqc29uV2F0Y2hlczogYW55KTogV2F0Y2hbXSB7XG5cdFx0cmV0dXJuIGpzb25XYXRjaGVzLm1hcChmdW5jdGlvbihqc29uV2F0Y2g6YW55KSB7XG5cdFx0XHRyZXR1cm4gbmV3IFdhdGNoKFxuXHRcdFx0XHRqc29uV2F0Y2gud2F0Y2hJZCxcblx0XHRcdFx0anNvbldhdGNoLmJyYW5kLFxuXHRcdFx0XHRqc29uV2F0Y2guaGlzdG9yeVNpemUsXG5cdFx0XHRcdGpzb25XYXRjaC5tZWFzdXJlcy5tYXAoZnVuY3Rpb24oanNvbk1lYXN1cmU6YW55KSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBNZWFzdXJlKFxuXHRcdFx0XHRcdFx0anNvbk1lYXN1cmUuaWQsXG5cdFx0XHRcdFx0XHRqc29uTWVhc3VyZS5tZWFzdXJlVXNlclRpbWUsXG5cdFx0XHRcdFx0XHRqc29uTWVhc3VyZS5tZWFzdXJlUmVmZXJlbmNlVGltZSxcblx0XHRcdFx0XHRcdGpzb25NZWFzdXJlLnN0YXR1c0lkLFxuXHRcdFx0XHRcdFx0anNvbk1lYXN1cmUuYWNjdXJhY3lVc2VyVGltZSxcblx0XHRcdFx0XHRcdGpzb25NZWFzdXJlLmFjY3VyYWN5UmVmZXJlbmNlVGltZSxcblx0XHRcdFx0XHRcdGpzb25NZWFzdXJlLmFjY3VyYWN5LFxuXHRcdFx0XHRcdFx0anNvbk1lYXN1cmUuYWNjdXJhY3lBZ2UsXG5cdFx0XHRcdFx0XHRqc29uTWVhc3VyZS5wZXJjZW50aWxlKVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0anNvbldhdGNoLm5hbWUsXG5cdFx0XHRcdGpzb25XYXRjaC55ZWFyT2ZCdXksXG5cdFx0XHRcdGpzb25XYXRjaC5zZXJpYWwsXG5cdFx0XHRcdGpzb25XYXRjaC5jYWxpYmVyXG5cdFx0XHQpXG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQnVpbGRzIEpzb24gcG9zdCBmcm9tIGpzb24gcmVzcG9uc2Vcblx0ICogQHBhcmFtICB7YW55fSAgICAgICAganNvblBvc3RzIFtkZXNjcmlwdGlvbl1cblx0ICogQHJldHVybiB7QmxvZ1Bvc3RbXX0gICAgICAgICAgIFtkZXNjcmlwdGlvbl1cblx0ICovXG5cdHN0YXRpYyBidWlsZFBvc3RzKGpzb25Qb3N0czogYW55KTogQmxvZ1Bvc3RbXXtcblx0XHRyZXR1cm4ganNvblBvc3RzLnBvc3RzLm1hcChmdW5jdGlvbihqc29uUG9zdDphbnkpIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBCbG9nUG9zdChcblx0XHRcdFx0anNvblBvc3QuaWQsIFxuXHRcdFx0XHRqc29uUG9zdC50aXRsZSwgXG5cdFx0XHRcdG5ldyBEYXRlKGpzb25Qb3N0LmRhdGUpLCBcblx0XHRcdFx0anNvblBvc3QuZXhjZXJwdCxcblx0XHRcdFx0anNvblBvc3QudXJsXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVscy9tb2RlbC5mYWN0b3J5LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIxX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9SeFwiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgKiBmcm9tICcuL2luZGV4JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90dy1jb3JlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==