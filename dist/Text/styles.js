"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var styled_components_1 = require("styled-components");
var react_textarea_autosize_1 = require("react-textarea-autosize");
var BaseTextArea = function (props) {
    var className = props.className, value = props.value, onChange = props.onChange;
    return React.createElement(react_textarea_autosize_1.default, { value: value, className: className, onChange: onChange });
};
var base = function (props) {
    return (_a = ["\n"], _a.raw = ["\n"], styled_components_1.css(_a));
    var _a;
};
var error = function (props) {
    return (_a = ["\n  border : 1px solid red;\n"], _a.raw = ["\n  border : 1px solid red;\n"], styled_components_1.css(_a));
    var _a;
};
exports.BaseTextStyle = (_a = ["\n", "\n", "\n"], _a.raw = ["\n", "\n", "\n"], styled_components_1.default(BaseTextArea)(_a, function (props) { return base(props); }, function (props) {
    return props.hasError ? error(props) : (_a = [""], _a.raw = [""], styled_components_1.css(_a));
    var _a;
}));
var TextStyle = (function (_super) {
    __extends(TextStyle, _super);
    function TextStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextStyle.prototype.render = function () {
        var _a = this.props, children = _a.children, rest = __rest(_a, ["children"]);
        return (React.createElement("div", null,
            React.createElement(exports.BaseTextStyle, __assign({}, rest)),
            children));
    };
    return TextStyle;
}(React.Component));
TextStyle.defaultProps = {
    hasError: false,
    onChange: function (event) { },
    value: ""
};
exports.default = TextStyle;
var _a;
//# sourceMappingURL=styles.js.map