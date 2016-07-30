"use strict";
exports.AspectRegistry = {};
function resetRegistry() {
    exports.AspectRegistry = {};
}
exports.resetRegistry = resetRegistry;
var Aspect = (function () {
    function Aspect() {
        this.pointcuts = [];
    }
    Aspect.prototype.wove = function (target, woveMetadata) {
        this.pointcuts.forEach(function (p) {
            p.apply(target, woveMetadata);
        });
    };
    return Aspect;
}());
exports.Aspect = Aspect;
//# sourceMappingURL=aspect.js.map