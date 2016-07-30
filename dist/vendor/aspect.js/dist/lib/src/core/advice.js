"use strict";
var Advice = (function () {
    function Advice(context, advice) {
        this.context = context;
        this.advice = advice;
    }
    Advice.prototype.invoke = function (target, metadata) {
        if (target.__woven__) {
            return (metadata.method.result = target.bind(this.context, metadata).apply(null, metadata.method.args));
        }
        else {
            if (metadata.method.proceed) {
                return (metadata.method.result = target.apply(metadata.method.context, metadata.method.args));
            }
            else {
                return metadata.method.result;
            }
        }
    };
    return Advice;
}());
exports.Advice = Advice;
//# sourceMappingURL=advice.js.map