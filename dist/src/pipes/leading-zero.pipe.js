import { Pipe } from '@angular/core';
export var LeadingZero = (function () {
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
        { type: Pipe, args: [{
                    name: 'leadingZero'
                },] },
    ];
    /** @nocollapse */
    LeadingZero.ctorParameters = [];
    return LeadingZero;
}());
//# sourceMappingURL=/mnt/dev/1-NodeWorkspace/toolwatch/tw-core/src/src/pipes/leading-zero.pipe.js.map