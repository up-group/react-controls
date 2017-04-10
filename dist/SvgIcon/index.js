"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const _getIcons_1 = require("./_getIcons");
function SvgIcon(_a) {
    var { children, viewBox, iconName } = _a, rest = __rest(_a, ["children", "viewBox", "iconName"]);
    const viewBoxProps = viewBox || '0 0 24 24';
    if (iconName) {
        return (React.createElement("svg", { dangerouslySetInnerHTML: { __html: _getIcons_1.default[iconName] }, viewBox: viewBoxProps }));
    }
    else {
        return (React.createElement("svg", { viewBox: viewBoxProps }, children));
    }
}
exports.default = SvgIcon;
//# sourceMappingURL=index.js.map