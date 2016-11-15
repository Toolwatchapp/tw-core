"use strict";
var core_1 = require('@angular/core');
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
    LeadingZero.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'leadingZero'
                },] },
    ];
    /** @nocollapse */
    LeadingZero.ctorParameters = [];
    return LeadingZero;
}());
exports.LeadingZero = LeadingZero;
//# sourceMappingURL=leading-zero.pipe.js.map