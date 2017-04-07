import { Pipe } from '@angular/core';
export var ArethmeticSign = (function () {
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
        { type: Pipe, args: [{
                    name: 'arethmeticSign'
                },] },
    ];
    /** @nocollapse */
    ArethmeticSign.ctorParameters = function () { return []; };
    return ArethmeticSign;
}());
//# sourceMappingURL=arethmetic-sign.pipe.js.map