"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var _1 = require("../");
var styles_1 = require("./styles");
function LoadingIndicator(_a) {
    var isLoading = _a.isLoading;
    if (!isLoading) {
        return null;
    }
    return (React.createElement(_1.Box, { boxSize: { horizontal: 'small' }, pad: "medium", alignItems: "center", justifyContent: "center" },
        React.createElement(styles_1.default, { viewBox: "0 0 48 48" },
            React.createElement(styles_1.Circle, { cx: "24", cy: "24", r: "21", stroke: "#007acc", strokeWidth: "6", fill: "none" }))));
}
exports.default = LoadingIndicator;
;
//# sourceMappingURL=index.js.map