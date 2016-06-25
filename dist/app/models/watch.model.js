"use strict";
var measure_model_1 = require('./measure.model');
var Watch = (function () {
    function Watch(id, brand, historySize, measures, name, yearOfBuy, serial, caliber) {
        if (historySize === void 0) { historySize = 0; }
        if (measures === void 0) { measures = []; }
        if (name === void 0) { name = ""; }
        if (yearOfBuy === void 0) { yearOfBuy = 0; }
        if (serial === void 0) { serial = ""; }
        if (caliber === void 0) { caliber = ""; }
        this.status = WatchStatus.None;
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
            && lastMeasure.status == measure_model_1.MeasureStatus.BaseMeasure) {
            if ((lastMeasure.measureUserTime - Date.now() / 3600) < 12) {
                this.next = WatchAction.Waiting;
                this.waiting = Math.round(12 - (lastMeasure.measureUserTime - Date.now()) / 3600);
            }
            else {
                this.next = WatchAction.Accuracy;
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