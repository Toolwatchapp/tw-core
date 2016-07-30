"use strict";
var metadata_1 = require('./metadata');
var JointPoint = (function () {
    function JointPoint(precondition) {
        this.precondition = precondition;
    }
    JointPoint.prototype.wove = function (_a, advice) {
        var _this = this;
        var fn = _a.fn, matches = _a.matches, woveMetadata = _a.woveMetadata;
        var target = this.getTarget(fn);
        matches.forEach(function (match) {
            _this.woveTarget(target, match, advice, woveMetadata);
        });
    };
    JointPoint.prototype.getMetadata = function (className, key, args, context, woveMetadata) {
        var invocation = {
            name: key,
            proceed: true,
            context: context,
            result: undefined,
            exception: undefined,
            args: undefined
        };
        var metadata = new metadata_1.Metadata();
        metadata.method = invocation;
        metadata.className = className;
        metadata.woveMetadata = woveMetadata;
        if (args[0] && args[0].__advice_metadata__) {
            var previousMetadata = args[0];
            metadata.method.result = previousMetadata.method.result;
            metadata.method.proceed = previousMetadata.method.proceed;
            metadata.method.args = previousMetadata.method.args;
            metadata.method.context = previousMetadata.method.context;
        }
        else {
            metadata.method.args = Array.prototype.slice.call(args);
        }
        return metadata;
    };
    return JointPoint;
}());
exports.JointPoint = JointPoint;
//# sourceMappingURL=joint_point.js.map