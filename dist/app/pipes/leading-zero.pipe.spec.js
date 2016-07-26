"use strict";
var testing_1 = require('@angular/core/testing');
var leading_zero_pipe_1 = require('./leading-zero.pipe');
testing_1.describe('LeadingZero Pipe', function () {
    testing_1.beforeEachProviders(function () { return [leading_zero_pipe_1.LeadingZero]; });
    testing_1.it('should transform the input', testing_1.inject([leading_zero_pipe_1.LeadingZero], function (pipe) {
        testing_1.expect(pipe.transform(0)).toBe(null);
    }));
});
//# sourceMappingURL=leading-zero.pipe.spec.js.map