"use strict";
var aspect_1 = require('./aspect');
function Wove(config) {
    return function (target) {
        if (target.__woven__) {
            return;
        }
        var keys = Object.getOwnPropertyNames(aspect_1.AspectRegistry);
        keys.forEach(function (key) {
            aspect_1.AspectRegistry[key].wove(target, config);
        });
        target.__woven__ = true;
        return target;
    };
}
exports.Wove = Wove;
//# sourceMappingURL=wove.js.map