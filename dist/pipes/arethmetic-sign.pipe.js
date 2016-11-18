"use strict";
var core_1 = require('@angular/core');
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
    ArethmeticSign.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'arethmeticSign'
                },] },
    ];
    /** @nocollapse */
    ArethmeticSign.ctorParameters = [];
    return ArethmeticSign;
}());
exports.ArethmeticSign = ArethmeticSign;
//# sourceMappingURL=arethmetic-sign.pipe.js.map