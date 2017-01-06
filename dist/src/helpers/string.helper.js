export var StringHelper = (function () {
    function StringHelper() {
    }
    StringHelper.levenshtein = function (a, b) {
        if (!a || !b)
            return (a || b).length;
        var m = [];
        for (var i = 0; i <= b.length; i++) {
            m[i] = [i];
            if (i === 0)
                continue;
            for (var j = 0; j <= a.length; j++) {
                m[0][j] = j;
                if (j === 0)
                    continue;
                m[i][j] = b.charAt(i - 1) == a.charAt(j - 1) ? m[i - 1][j - 1] : Math.min(m[i - 1][j - 1] + 1, m[i][j - 1] + 1, m[i - 1][j] + 1);
            }
        }
        return m[b.length][a.length];
    };
    StringHelper.replaceAll = function (target, search, replacement) {
        return target.split(search).join(replacement);
    };
    return StringHelper;
}());
//# sourceMappingURL=/mnt/dev/1-NodeWorkspace/toolwatch/tw-core/src/src/helpers/string.helper.js.map