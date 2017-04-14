"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var plainStyle = function (plain) {
    if (plain) {
        return (_a = ["\n      cursor: pointer;\n      line-height: inherit;\n      text-decoration: inherit;\n    "], _a.raw = ["\n      cursor: pointer;\n      line-height: inherit;\n      text-decoration: inherit;\n    "], styled_components_1.css(_a));
    }
    return (_b = ["\n    text-decoration: underline;\n    line-height: inherit;\n    cursor: pointer;\n  "], _b.raw = ["\n    text-decoration: underline;\n    line-height: inherit;\n    cursor: pointer;\n  "], styled_components_1.css(_b));
    var _a, _b;
};
var colorStyle = function (color) {
    if (color) {
        return (_a = ["\n      color: ", ";\n    "], _a.raw = ["\n      color: ", ";\n    "], styled_components_1.css(_a, color));
    }
    return null;
    var _a;
};
exports.default = (_a = ["\n  font-size: 1.1875rem;\n  line-height: 24px;\n  font-weight: 400;\n  ", "\n  ", "\n"], _a.raw = ["\n  font-size: 1.1875rem;\n  line-height: 24px;\n  font-weight: 400;\n  ", "\n  ", "\n"], styled_components_1.default.a(_a, function (props) { return colorStyle(props.color); }, function (props) { return plainStyle(props.plain || false); }));
var _a;
//# sourceMappingURL=styles.js.map