"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var utils_1 = require("../utils");
var maps_1 = require("./maps");
var theming_1 = require("../theming");
var SvgIcon_1 = require("../SvgIcon");
var ReactButtonComponent = function (props) {
    var children = props.children, className = props.className;
    var icon = React.createElement(SvgIcon_1.default, { iconName: props.iconName, width: props.iconSize, height: props.iconSize, color: props.color });
    return React.createElement("button", { className: className },
        props.iconName &&
            icon,
        children);
};
var shadow = function (props) {
    return (_a = ["\n  box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1) ;\n"], _a.raw = ["\n  box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1) ;\n"], styled_components_1.css(_a));
    var _a;
};
var base = function (props) {
    return (_a = ["\n  text-align: center;\n  font-size: ", ";\n  border: none;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  cursor: pointer;\n  background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ;\n  border-radius: ", ";\n  padding: 0 10px;\n  vertical-align: middle;\n  min-width: ", ";\n  min-height: ", ";\n  line-height: ", ";\n  svg {\n    margin:4px 4px 4px 0px;\n    display:inline-block;\n    float:left;\n  }\n"], _a.raw = ["\n  text-align: center;\n  font-size: ", ";\n  border: none;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  cursor: pointer;\n  background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ;\n  border-radius: ", ";\n  padding: 0 10px;\n  vertical-align: middle;\n  min-width: ", ";\n  min-height: ", ";\n  line-height: ", ";\n  svg {\n    margin:4px 4px 4px 0px;\n    display:inline-block;\n    float:left;\n  }\n"], styled_components_1.css(_a, function (props) { return utils_1.default(maps_1.sizeMap[props.fontSize]); }, function (props) { return props.theme.borderRadius || '3px'; }, function (props) { return props.theme.minButtonSize || '30px'; }, function (props) { return props.theme.minButtonSize || '30px'; }, function (props) { return props.theme.minButtonSize || '30px'; }));
    var _a;
};
var disabled = function (props) {
    return (_a = ["\nbackground: ", ";\ncolor: ", ";\ncursor: not-allowed;\n"], _a.raw = ["\nbackground: ", ";\ncolor: ", ";\ncursor: not-allowed;\n"], styled_components_1.css(_a, function (props) { return theming_1.default.disabledBg; }, function (props) { return theming_1.default.disabledFg; }));
    var _a;
};
var active = function (props) {
    return (_a = ["\nbackground: ", ";\ncolor: ", ";\n&:hover {\n  background: ", ";\n  color: ", ";\n  svg {\n    fill: ", "\n  }\n}\nsvg {\n    fill: ", "\n}\n"], _a.raw = ["\nbackground: ", ";\ncolor: ", ";\n&:hover {\n  background: ", ";\n  color: ", ";\n  svg {\n    fill: ", "\n  }\n}\nsvg {\n    fill: ", "\n}\n"], styled_components_1.css(_a, function (props) { return props.backgroundColor || 'green'; }, function (props) { return props.color; }, function (props) { return props.color || 'green'; }, function (props) { return props.backgroundColor; }, function (props) { return props.backgroundColor; }, function (props) { return props.color; }));
    var _a;
};
exports.BaseButton = (_a = ["\n", "\n", "\n", "\n"], _a.raw = ["\n", "\n", "\n", "\n"], styled_components_1.default(ReactButtonComponent)(_a, function (props) { return base(props); }, function (props) {
    return props.shadow ? shadow(props) : (_a = [""], _a.raw = [""], styled_components_1.css(_a));
    var _a;
}, function (props) { return props.disabled ? disabled(props) : active(props); }));
exports.HeroButton = (_b = ["\n", "\n", "\n"], _b.raw = ["\n", "\n", "\n"], styled_components_1.default(ReactButtonComponent)(_b, function (props) { return base(props); }, function (props) { return props.disabled ? disabled(props) : active(props); }));
var _a, _b;
//# sourceMappingURL=styles.js.map