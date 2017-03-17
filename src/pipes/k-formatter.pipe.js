import { Pipe } from '@angular/core';
export var KFormatter = (function () {
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
    KFormatter.decorators = [
        { type: Pipe, args: [{
                    name: 'kFormatter'
                },] },
    ];
    /** @nocollapse */
    KFormatter.ctorParameters = function () { return []; };
    return KFormatter;
}());
//# sourceMappingURL=k-formatter.pipe.js.map