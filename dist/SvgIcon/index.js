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
const themedComponents_1 = require("../theming/themedComponents");
const _getIcons_1 = require("./_getIcons");
const SvgIconWrapper = themedComponents_1.default.div `
    float: left;
    display: inline;
    width: ${props => props.width}px ;
    height:${props => props.height}px ;
    margin: 4px;
`;
function SvgIcon(_a) {
    var { children, viewBox, iconName } = _a, rest = __rest(_a, ["children", "viewBox", "iconName"]);
    const height = rest.height || 24;
    const width = rest.height || 24;
    if (iconName) {
        return (React.createElement(SvgIconWrapper, { height: height, width: width, dangerouslySetInnerHTML: { __html: _getIcons_1.default[iconName] } }));
    }
    else {
        const defaultViewBox = `0 0 ${width} ${height}`;
        const viewBoxProps = viewBox || defaultViewBox;
        return (React.createElement("svg", { viewBox: viewBoxProps }, children));
    }
}
exports.default = SvgIcon;
//# sourceMappingURL=index.js.map