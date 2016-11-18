"use strict";
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
exports.Measure = Measure;
(function (MeasureStatus) {
    MeasureStatus[MeasureStatus["None"] = 0] = "None";
    MeasureStatus[MeasureStatus["BaseMeasure"] = 1] = "BaseMeasure";
    MeasureStatus[MeasureStatus["AccuracyMeasure"] = 2] = "AccuracyMeasure";
    MeasureStatus[MeasureStatus["ArchivedMeasure"] = 4] = "ArchivedMeasure";
    MeasureStatus[MeasureStatus["ShouldBeRenewed"] = 8] = "ShouldBeRenewed";
    MeasureStatus[MeasureStatus["ShouldBeServiced"] = 16] = "ShouldBeServiced";
})(exports.MeasureStatus || (exports.MeasureStatus = {}));
var MeasureStatus = exports.MeasureStatus;
//# sourceMappingURL=measure.model.js.map