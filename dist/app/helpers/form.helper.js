"use strict";
var FormHelper = (function () {
    function FormHelper() {
    }
    /**
     * RC4 Regression. Input takes the form group as
     * default value...
     *
     * @param  {FormBuilder} builder
     * @param  {any}         controlsConfig
     * @return {FormGroup}
     */
    FormHelper.group = function (builder, controlsConfig) {
        var form = builder.group(controlsConfig);
        for (var i in form.controls) {
            form.controls[i].updateValue('', { onlySelf: true });
        }
        return form;
    };
    FormHelper.updateValue = function (form, index, value) {
        form.controls[index].updateValue(value);
    };
    return FormHelper;
}());
exports.FormHelper = FormHelper;
//# sourceMappingURL=form.helper.js.map