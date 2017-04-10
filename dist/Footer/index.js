"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
function Footer({ color, children, }) {
    const colorProp = color || '#0a0a0a';
    return (React.createElement(styles_1.FooterComponent, { color: colorProp }, children));
}
exports.default = Footer;
;
//# sourceMappingURL=index.js.map