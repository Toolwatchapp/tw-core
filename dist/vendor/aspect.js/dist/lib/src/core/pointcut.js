"use strict";
var Pointcut = (function () {
    function Pointcut() {
    }
    Pointcut.prototype.apply = function (fn, woveMetadata) {
        var _this = this;
        this.jointPoints.forEach(function (jp) {
            var matches = jp.match(fn);
            jp.wove({ fn: fn, matches: matches, woveMetadata: woveMetadata }, _this.advice);
        });
    };
    return Pointcut;
}());
exports.Pointcut = Pointcut;
//# sourceMappingURL=pointcut.js.map