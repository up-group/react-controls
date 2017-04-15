"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var index_1 = require("../../../Display/SvgIcon/index");
var sharedStyle_1 = require("./sharedStyle");
exports.default = ;
var BaseInput = function (props) {
    var className = props.className, type = props.type, iconName = props.iconName, placeholder = props.placeholder, disabled = props.disabled, readOnly = props.readOnly, onChange = props.onChange;
    var icon = null;
    if (iconName) {
        icon = React.createElement("div", { className: "up-icon" },
            React.createElement(index_1.default, { iconName: iconName, width: 20, height: 20, color: props.color }));
    }
    return (React.createElement("div", { className: className },
        React.createElement("div", { className: "up-input-group" },
            React.createElement("input", { onChange: onChange, className: "up-input", type: "text", placeholder: placeholder, dir: "auto", disabled: disabled, readOnly: readOnly }),
            icon)));
};
var error = (_a = ["\n.up-input {\n  border-color:", ";\n  border-width: 1px;\n  border-style: solid;\n}\n"], _a.raw = ["\n.up-input {\n  border-color:", ";\n  border-width: 1px;\n  border-style: solid;\n}\n"], styled_components_1.css(_a, function (props) { return props.theme.error; }));
exports.InputStyled = (_b = ["\n  ", "\n  ", "\n  color: ", ";\n  .up-input {\n    width: ", ";\n    ", "\n  }\n"], _b.raw = ["\n  ", "\n  ", "\n  color: ", ";\n  .up-input {\n    width: ", ";\n    ", "\n  }\n"], styled_components_1.default(BaseInput)(_b, sharedStyle_1.inputStyles, function (props) {
    return props.hasError ? error : (_a = [""], _a.raw = [""], styled_components_1.css(_a));
    var _a;
}, function (props) { return props.color; }, function (props) { return sizeMap[props.width]; }, function (props) {
    return (props.height == "large" ? sharedStyle_1.HeightLarge : (_a = [""], _a.raw = [""], styled_components_1.css(_a)));
    var _a;
}));
var _a, _b;
//# sourceMappingURL=BaseInput.js.map