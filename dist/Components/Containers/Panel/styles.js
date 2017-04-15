"use strict";
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
var theming_1 = require("../../../Common/theming");
var themedComponents_1 = require("../../../Common/theming/themedComponents");
var index_1 = require("../../Display/SvgIcon/index");
var DefaultPanel = function (props) {
    var children = props.children;
    var icon = React.createElement(index_1.default, { iconName: props.iconName, width: props.iconSize, height: props.iconSize, color: props.color });
    return (React.createElement("div", { className: props.className },
        React.createElement("div", { className: "up-panel" },
            props.title &&
                React.createElement("div", { className: "up-panel-header" }, props.title),
            React.createElement("div", { className: "up-panel-body" },
                props.iconName &&
                    icon,
                children),
            props.footer &&
                React.createElement("div", { className: "up-panel-footer" }, props.footer))));
};
var shadow = function (props) {
    return (_a = ["\n  box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1) ;\n"], _a.raw = ["\n  box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1) ;\n"], themedComponents_1.css(_a));
    var _a;
};
var base = function (props) {
    return (_a = ["\n  text-align: left;\n  border: none;\n  display: block;\n  border-radius: ", ";\n  vertical-align: top;   \n  border: 1px solid transparent;\n  width:100%;\n  margin-bottom:10px;\n  .up-panel-header {\n    width:100%;\n    padding: 8px;\n    color: ", ";\n    font-weight:\"700\"\n  }\n  .up-panel-body {\n    background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ; \n    background-color: #fff;\n    padding: 10px;\n  }\n  .up-panel-footer {\n    background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ; \n    background-color: ", ";\n    border-color: ", ";\n    border-top-width:1px;\n    border-top-style:solid;\n    padding: 6px;\n  }\n  svg {\n    margin:4px 4px 4px 0px;\n    display:inline-block;\n    float:left;\n  }\n"], _a.raw = ["\n  text-align: left;\n  border: none;\n  display: block;\n  border-radius: ", ";\n  vertical-align: top;   \n  border: 1px solid transparent;\n  width:100%;\n  margin-bottom:10px;\n  .up-panel-header {\n    width:100%;\n    padding: 8px;\n    color: ", ";\n    font-weight:\"700\"\n  }\n  .up-panel-body {\n    background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ; \n    background-color: #fff;\n    padding: 10px;\n  }\n  .up-panel-footer {\n    background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ; \n    background-color: ", ";\n    border-color: ", ";\n    border-top-width:1px;\n    border-top-style:solid;\n    padding: 6px;\n  }\n  svg {\n    margin:4px 4px 4px 0px;\n    display:inline-block;\n    float:left;\n  }\n"], themedComponents_1.css(_a, function (props) { return props.theme.borederRadius || '4px'; }, function (props) { return (props.theme.colorMap) ? props.theme.colorMap.white1 : theming_1.default.white1; }, function (props) { return (props.theme.colorMap) ? props.theme.colorMap.lightGray5 : theming_1.default.lightGray5; }, function (props) { return (props.theme.colorMap) ? props.theme.colorMap.lightGray1 : theming_1.default.lightGray1; }));
    var _a;
};
exports.PrimaryDefaultPanel = (_a = ["\n", "\n", "\nborder-color: ", ";\n .up-panel-header {\n   background-color: ", ";\n }\n"], _a.raw = ["\n", "\n", "\nborder-color: ", ";\n .up-panel-header {\n   background-color: ", ";\n }\n"], themedComponents_1.default(DefaultPanel)(_a, function (props) { return base(props); }, function (props) { return shadow(props); }, function (props) { return (props.theme.colorMap) ? props.theme.colorMap.primary : theming_1.default.primary; }, function (props) { return (props.theme.colorMap) ? props.theme.colorMap.primary : theming_1.default.primary; }));
exports.WarningDefaultPanel = (_b = ["\n", "\n", "\nborder-color: ", ";\n .up-panel-header {\n   background-color: ", ";\n }\n"], _b.raw = ["\n", "\n", "\nborder-color: ", ";\n .up-panel-header {\n   background-color: ", ";\n }\n"], themedComponents_1.default(DefaultPanel)(_b, function (props) { return base(props); }, function (props) { return shadow(props); }, function (props) { return (props.theme.colorMap) ? props.theme.colorMap.warning : theming_1.default.warning; }, function (props) { return (props.theme.colorMap) ? props.theme.colorMap.warning : theming_1.default.warning; }));
exports.SuccessDefaultPanel = (_c = ["\n", "\n", "\nborder-color: ", ";\n .up-panel-header {\n   background-color: ", ";\n }\n"], _c.raw = ["\n", "\n", "\nborder-color: ", ";\n .up-panel-header {\n   background-color: ", ";\n }\n"], themedComponents_1.default(DefaultPanel)(_c, function (props) { return base(props); }, function (props) { return shadow(props); }, function (props) { return (props.theme.colorMap) ? props.theme.colorMap.ok : theming_1.default.ok; }, function (props) { return (props.theme.colorMap) ? props.theme.colorMap.ok : theming_1.default.ok; }));
exports.InfoDefaultPanel = (_d = ["\n", "\n", "\nborder-color: ", ";\n .up-panel-header {\n   background-color: ", ";\n }\n"], _d.raw = ["\n", "\n", "\nborder-color: ", ";\n .up-panel-header {\n   background-color: ", ";\n }\n"], themedComponents_1.default(DefaultPanel)(_d, function (props) { return base(props); }, function (props) { return shadow(props); }, function (props) { return (props.theme.colorMap) ? props.theme.colorMap.secondary : theming_1.default.secondary; }, function (props) { return (props.theme.colorMap) ? props.theme.colorMap.secondary : theming_1.default.secondary; }));
exports.DangerDefaultPanel = (_e = ["\n", "\n", "\nborder-color: ", ";\n.up-panel-header {\n   background-color: ", ";\n }\n"], _e.raw = ["\n", "\n", "\nborder-color: ", ";\n.up-panel-header {\n   background-color: ", ";\n }\n"], themedComponents_1.default(DefaultPanel)(_e, function (props) { return base(props); }, function (props) { return shadow(props); }, function (props) { return (props.theme.colorMap) ? props.theme.colorMap.error : theming_1.default.error; }, function (props) { return (props.theme.colorMap) ? props.theme.colorMap.error : theming_1.default.error; }));
exports.PanelStyled = function (props) {
    var children = props.children, rest = __rest(props, ["children"]);
    switch (props.type) {
        case "primary":
            return React.createElement(exports.PrimaryDefaultPanel, __assign({}, rest), children);
        case "info":
            return React.createElement(exports.InfoDefaultPanel, __assign({}, rest), children);
        case "warning":
            return React.createElement(exports.WarningDefaultPanel, __assign({}, rest), children);
        case "danger":
            return React.createElement(exports.DangerDefaultPanel, __assign({}, rest), children);
        case "success":
            return React.createElement(exports.SuccessDefaultPanel, __assign({}, rest), children);
    }
    return React.createElement(exports.PrimaryDefaultPanel, __assign({}, rest), children);
};
var _a, _b, _c, _d, _e;
//# sourceMappingURL=styles.js.map