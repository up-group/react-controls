"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("./styles");
function Footer(_a) {
    var color = _a.color, children = _a.children;
    var colorProp = color || '#0a0a0a';
    return (React.createElement(styles_1.FooterComponent, { color: colorProp }, children));
}
exports.default = Footer;
;
//# sourceMappingURL=index.js.map