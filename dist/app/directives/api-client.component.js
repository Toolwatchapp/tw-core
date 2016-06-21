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
var twapi_service_1 = require('./../services/twapi.service');
var http_1 = require('@angular/http');
var user_model_1 = require('./../models/user.model');
var watch_model_1 = require('./../models/watch.model');
var measure_model_1 = require('./../models/measure.model');
var ApiClientAppComponent = (function () {
    function ApiClientAppComponent(twapi) {
        this.twapi = twapi;
        this.title = 'api-client works!';
        this.tests = [];
        var tLogin = new Test('Test Login', function () {
            twapi.login('mathieu.nayrolles@gmail.com', 'qwerty').then(function (response) {
                if (response.id != null && response.watches.length === 4) {
                    tLogin.stop(true);
                }
                else {
                    tLogin.stop(false);
                }
            });
        });
        this.tests.push(tLogin);
        var tFailLogin = new Test('Test Login Fail', function () {
            twapi.login('mathieu.nayrolles@gmail.com', 'awdawd').then(function (response) {
                if (typeof response != "User") {
                    tFailLogin.stop(true);
                }
                else {
                    tFailLogin.stop(false);
                }
            });
        });
        this.tests.push(tFailLogin);
        var tEmailTaken = new Test('Test signup fail', function () {
            twapi.signup('mathieu.nayrolles@gmail.com', 'awdawd').then(function (response) {
                if (typeof response != "User") {
                    tEmailTaken.stop(true);
                }
                else {
                    tEmailTaken.stop(false);
                }
            });
        });
        this.tests.push(tEmailTaken);
        //Success
        var tSignup = new Test('Test signup', function () {
            twapi.signup('mathieu.nayrolles@viacesi.fr', 'awdawd').then(function (response) {
                if (response.email != undefined) {
                    tSignup.stop(true);
                }
                else {
                    tSignup.stop(false);
                }
            });
        });
        this.tests.push(tSignup);
        //Success
        var tLoginNewAccount = new Test('Test login in new account', function () {
            twapi.login('mathieu.nayrolles@viacesi.fr', 'awdawd').then(function (response) {
                if (response.email != undefined) {
                    tLoginNewAccount.stop(true);
                }
                else {
                    tLoginNewAccount.stop(false);
                }
            });
        });
        this.tests.push(tLoginNewAccount);
        var tAddWatch = new Test("Add a Watch", function () {
            twapi.upsertWatch(new watch_model_1.Watch(null, "JLC")).then(function (response) {
                if (response.id != null) {
                    tAddWatch.stop(true, response);
                }
                else {
                    tAddWatch.stop(false);
                }
            });
        });
        this.tests.push(tAddWatch);
        var tUpdateWatch = new Test("Update Watch", function (data) {
            console.log("outside", data);
            if (data != null) {
                twapi.upsertWatch(data).then(function (response) {
                    if (response.id != null) {
                        tUpdateWatch.stop(true, response);
                    }
                    else {
                        tUpdateWatch.stop(false);
                    }
                });
            }
            else {
                tUpdateWatch.stop(false);
            }
        });
        this.tests.push(tUpdateWatch);
        var tAddBaseMeasure = new Test('Add Base Measure', function (watch) {
            if (watch != null) {
                twapi.upsertMeasure(watch, new measure_model_1.Measure(null, Date.now() + 10, Date.now() + 2)).then(function (response) {
                    if (response != null && response.measures.length == 1) {
                        tAddBaseMeasure.stop(true, response);
                    }
                    else {
                        tAddBaseMeasure.stop(false);
                    }
                });
            }
            else {
                tAddBaseMeasure.stop(false);
            }
        });
        this.tests.push(tAddBaseMeasure);
        var tAddAccuracyMeasure = new Test('Add accuracy measure', function (watch) {
            if (watch != null) {
                watch.measures[watch.measures.length - 1].addAccuracyMeasure(Date.now() + 20, Date.now() + 5);
                twapi.upsertMeasure(watch, watch.measures[watch.measures.length - 1]).then(function (response) {
                    if (response != null && response.measures.length == 1) {
                        tAddAccuracyMeasure.stop(true, response);
                    }
                    else {
                        tAddAccuracyMeasure.stop(false);
                    }
                });
            }
            else {
                tAddAccuracyMeasure.stop(false);
            }
        });
        this.tests.push(tAddAccuracyMeasure);
        var tDeleteMeasure = new Test('Delete measure', function (watch) {
            if (watch != null) {
                twapi.deleteMeasure(watch, watch.measures[watch.measures.length - 1]).then(function (response) {
                    if (response != null && response.measures.length == 0) {
                        tDeleteMeasure.stop(true, response);
                    }
                    else {
                        tDeleteMeasure.stop(false);
                    }
                });
            }
            else {
                tDeleteMeasure.stop(false);
            }
        });
        this.tests.push(tDeleteMeasure);
        var tDeleteWatch = new Test('Delete Watch', function (watch) {
            if (watch != null) {
                var user = new user_model_1.User(1, '', '', '', '', '', '', [watch]);
                twapi.deleteWatch(user, watch).then(function (response) {
                    if (response != null && response.watches.length == 0) {
                        tDeleteWatch.stop(true, response);
                    }
                    else {
                        tDeleteWatch.stop(false);
                    }
                });
            }
            else {
                tDeleteWatch.stop(false);
            }
        });
        this.tests.push(tDeleteWatch);
        var tTime = new Test('Get Time', function () {
            var x = 0;
            twapi.accurateTime(function () {
                x++;
                console.log(x / 10 * 100, "%");
            }).then(function (response) {
                if (x == 10) {
                    tTime.stop(true);
                }
                else {
                    tTime.stop(false);
                }
            });
        });
        this.tests.push(tTime);
        var tDeleteAccountTest = new Test('Delete Account', function () {
            twapi.deleteAccount().then(function (response) {
                if (response === true) {
                    tDeleteAccountTest.stop(true);
                }
                else {
                    tDeleteAccountTest.stop(false);
                }
            });
        });
        this.tests.push(tDeleteAccountTest);
        tLogin.next = tFailLogin;
        tFailLogin.next = tEmailTaken;
        tEmailTaken.next = tSignup;
        tSignup.next = tLoginNewAccount;
        tLoginNewAccount.next = tAddWatch;
        tAddWatch.next = tUpdateWatch;
        tUpdateWatch.next = tAddBaseMeasure;
        tAddBaseMeasure.next = tAddAccuracyMeasure;
        tAddAccuracyMeasure.next = tDeleteMeasure;
        tDeleteMeasure.next = tDeleteWatch;
        tDeleteWatch.next = tTime;
        tTime.next = tDeleteAccountTest;
        tLogin.test(null);
    }
    ApiClientAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'api-client-app',
            templateUrl: 'api-client.component.html',
            styleUrls: ['api-client.component.css'],
            providers: [twapi_service_1.TwAPIService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [twapi_service_1.TwAPIService])
    ], ApiClientAppComponent);
    return ApiClientAppComponent;
}());
exports.ApiClientAppComponent = ApiClientAppComponent;
var Test = (function () {
    function Test(title, test) {
        this.running = true;
        this.status = false;
        this.title = title;
        this.test = function (data) {
            this.startTime = Date.now();
            test(data);
        };
    }
    Test.prototype.stop = function (success, toNextTest) {
        if (toNextTest === void 0) { toNextTest = null; }
        this.status = success;
        this.running = false;
        this.ellapsedTime = Date.now() - this.startTime;
        if (this.next != null) {
            this.next.test(toNextTest);
        }
    };
    return Test;
}());
exports.Test = Test;
//# sourceMappingURL=api-client.component.js.map