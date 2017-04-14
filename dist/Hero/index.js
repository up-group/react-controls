"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("./styles");
function Hero(_a) {
    var children = _a.children, backgroundColor = _a.backgroundColor;
    var colorProp = backgroundColor || '#2d2d2d';
    return (React.createElement(styles_1.default, { backgroundColor: colorProp }, children));
}
exports.default = Hero;
;
//# sourceMappingURL=index.js.map