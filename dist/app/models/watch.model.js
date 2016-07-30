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
var measure_model_1 = require('./measure.model');
var aspect_1 = require('aspect.js/dist/lib/aspect');
var logger_aspect_1 = require('./../aspects/logger.aspect');
var Watch = (function () {
    function Watch(id, brand, historySize, measures, name, yearOfBuy, serial, caliber) {
        var _this = this;
        if (historySize === void 0) { historySize = 0; }
        if (measures === void 0) { measures = []; }
        if (name === void 0) { name = ""; }
        if (yearOfBuy === void 0) { yearOfBuy = null; }
        if (serial === void 0) { serial = ""; }
        if (caliber === void 0) { caliber = ""; }
        this.status = WatchStatus.None;
        this.toString = function () {
            return "Watch (id: " + _this.id + ",\n\t\t\t\tbrand: " + _this.brand + ",\n\t\t\t\thistorySize: " + _this.historySize + ",\n\t\t\t\tmeasures: " + _this.measures + ",\n\t\t\t\tname: " + _this.name + ",\n\t\t\t\tyearOfBuy: " + _this.yearOfBuy + ",\n\t\t\t\tserial: " + _this.serial + ",\n\t\t\t\tcaliber: " + _this.caliber + ",\n\t\t\t\tstatus: " + _this.status + ",\n\t\t\t\tnext: " + _this.next + ",\n\t\t\t\twaiting: " + _this.waiting + ")";
        };
        this.id = id;
        this.brand = brand;
        this.historySize = historySize;
        this.measures = measures;
        this.name = name;
        this.yearOfBuy = yearOfBuy;
        this.serial = serial;
        this.caliber = caliber;
        if (historySize == 0) {
            this.status |= WatchStatus.NeverMeasured;
            this.next = WatchAction.Measure;
        }
        else if (historySize > this.measures.length) {
            this.status |= WatchStatus.HaveMoreMeasures;
        }
        var lastMeasure = this.currentMeasure();
        if (lastMeasure !== null
            && lastMeasure.status & measure_model_1.MeasureStatus.BaseMeasure) {
            console.log(lastMeasure.measureUserTime, Date.now());
            console.log(lastMeasure.measureUserTime - Date.now() / 1000);
            console.log((lastMeasure.measureUserTime - Date.now() / 1000) / 3600);
            console.log(Math.abs((lastMeasure.measureUserTime - Date.now() / 1000) / 3600));
            if (Math.abs((lastMeasure.measureUserTime - Date.now() / 1000) / 3600) < 12) {
                this.next = WatchAction.Waiting;
                this.waiting = Math.round(12 - Math.abs((lastMeasure.measureUserTime - Date.now() / 1000) / 3600));
            }
            else if (!(lastMeasure.status & measure_model_1.MeasureStatus.AccuracyMeasure)) {
                this.next = WatchAction.Accuracy;
            }
            else {
                this.next = WatchAction.Measure;
            }
        }
    }
    Watch.prototype.currentMeasure = function () {
        if (this.measures.length !== 0) {
            return this.measures[this.measures.length - 1];
        }
        else {
            return null;
        }
    };
    Watch.prototype.upsertMeasure = function (measure) {
        console.log("this", this);
        console.log("measure", measure);
        for (var i = 0; i < this.measures.length; i++) {
            console.log("i", i);
            if (this.measures[i].id == measure.id) {
                this.measures[i] = measure;
                console.log("return", this, this.measures[i], measure);
                return;
            }
        }
        this.measures.push(measure);
        console.log("this2", this);
    };
    Watch = __decorate([
        aspect_1.Wove(logger_aspect_1.LoggerAspect), 
        __metadata('design:paramtypes', [Number, String, Number, Array, String, Number, String, String])
    ], Watch);
    return Watch;
}());
exports.Watch = Watch;
(function (WatchAction) {
    WatchAction[WatchAction["Measure"] = 0] = "Measure";
    WatchAction[WatchAction["Waiting"] = 1] = "Waiting";
    WatchAction[WatchAction["Accuracy"] = 2] = "Accuracy";
})(exports.WatchAction || (exports.WatchAction = {}));
var WatchAction = exports.WatchAction;
(function (WatchStatus) {
    WatchStatus[WatchStatus["None"] = 0] = "None";
    WatchStatus[WatchStatus["NeverMeasured"] = 2] = "NeverMeasured";
    WatchStatus[WatchStatus["HaveMoreMeasures"] = 4] = "HaveMoreMeasures";
})(exports.WatchStatus || (exports.WatchStatus = {}));
var WatchStatus = exports.WatchStatus;
//# sourceMappingURL=watch.model.js.map