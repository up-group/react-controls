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
var React = require("react");
var themedComponents_1 = require("../../../Common/theming/themedComponents");
var _getIcons_1 = require("./_getIcons");
var SvgIconWrapper = (_a = ["\n    float: left;\n    display: inline;\n    width: ", "px ;\n    height:", "px ;\n    margin: 4px;\n"], _a.raw = ["\n    float: left;\n    display: inline;\n    width: ", "px ;\n    height:", "px ;\n    margin: 4px;\n"], themedComponents_1.default.div(_a, function (props) { return props.width; }, function (props) { return props.height; }));
function SvgIcon(_a) {
    var children = _a.children, viewBox = _a.viewBox, iconName = _a.iconName, rest = __rest(_a, ["children", "viewBox", "iconName"]);
    var height = rest.height || 24;
    var width = rest.height || 24;
    if (iconName) {
        return (React.createElement(SvgIconWrapper, { height: height, width: width, dangerouslySetInnerHTML: { __html: _getIcons_1.default[iconName] } }));
    }
    else {
        var defaultViewBox = "0 0 " + width + " " + height;
        var viewBoxProps = viewBox || defaultViewBox;
        return (React.createElement("svg", { viewBox: viewBoxProps }, children));
    }
}
exports.default = SvgIcon;
var _a;
//# sourceMappingURL=index.js.map