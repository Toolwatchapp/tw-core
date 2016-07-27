"use strict";
var testing_1 = require('@angular/core/testing');
var arethmetic_sign_pipe_1 = require('./arethmetic-sign.pipe');
testing_1.describe('ArethmeticSign Pipe', function () {
    testing_1.beforeEachProviders(function () { return [arethmetic_sign_pipe_1.ArethmeticSign]; });
    testing_1.it('should transform the input', testing_1.inject([arethmetic_sign_pipe_1.ArethmeticSign], function (pipe) {
        testing_1.expect(pipe.transform(3)).toBe("+3");
        testing_1.expect(pipe.transform(-2)).toBe("-2");
    }));
});
//# sourceMappingURL=arethmetic-sign.pipe.spec.js.map