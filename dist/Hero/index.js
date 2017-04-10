"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
function Hero({ children, backgroundColor, }) {
    const colorProp = backgroundColor || '#2d2d2d';
    return (React.createElement(styles_1.default, { backgroundColor: colorProp }, children));
}
exports.default = Hero;
;
//# sourceMappingURL=index.js.map