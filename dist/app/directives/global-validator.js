"use strict";
var GlobalValidator = (function () {
    function GlobalValidator() {
    }
    GlobalValidator.mailFormat = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    };
    GlobalValidator.match = function (from, to, returnValue) {
        return function (group) {
            var fromGroup = group.controls[from];
            var toGroup = group.controls[to];
            if (fromGroup.value !== toGroup.value) {
                return returnValue;
            }
        };
    };
    return GlobalValidator;
}());
exports.GlobalValidator = GlobalValidator;
//# sourceMappingURL=global-validator.js.map