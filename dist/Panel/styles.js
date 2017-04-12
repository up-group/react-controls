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
const theming_1 = require("../theming");
const SvgIcon_1 = require("../SvgIcon");
const DefaultPanel = (props) => {
    const { children } = props;
    const icon = React.createElement(SvgIcon_1.default, { iconName: props.iconName, width: props.iconSize, height: props.iconSize, color: props.color });
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
const shadow = props => themedComponents_1.css `
  box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1) ;
`;
const base = props => themedComponents_1.css `
  text-align: left;
  border: none;
  display: block;
  border-radius: ${props => props.theme.borederRadius || '4px'};
  vertical-align: top;   
  border: 1px solid transparent;
  width:100%;
  margin-bottom:10px;
  .up-panel-header {
    width:100%;
    padding: 8px;
    color: ${props => (props.theme.colorMap) ? props.theme.colorMap.white1 : theming_1.default.white1};
    font-weight:"700"
  }
  .up-panel-body {
    background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ; 
    background-color: #fff;
    padding: 10px;
  }
  .up-panel-footer {
    background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ; 
    background-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.lightGray5 : theming_1.default.lightGray5};
    border-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.lightGray1 : theming_1.default.lightGray1};
    border-top-width:1px;
    border-top-style:solid;
    padding: 6px;
  }
  svg {
    margin:4px 4px 4px 0px;
    display:inline-block;
    float:left;
  }
`;
exports.PrimaryDefaultPanel = themedComponents_1.default(DefaultPanel) `
${(props) => base(props)}
${(props) => shadow(props)}
border-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.primary : theming_1.default.primary};
 .up-panel-header {
   background-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.primary : theming_1.default.primary};
 }
`;
exports.WarningDefaultPanel = themedComponents_1.default(DefaultPanel) `
${(props) => base(props)}
${(props) => shadow(props)}
border-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.warning : theming_1.default.warning};
 .up-panel-header {
   background-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.warning : theming_1.default.warning};
 }
`;
exports.SuccessDefaultPanel = themedComponents_1.default(DefaultPanel) `
${(props) => base(props)}
${(props) => shadow(props)}
border-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.ok : theming_1.default.ok};
 .up-panel-header {
   background-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.ok : theming_1.default.ok};
 }
`;
exports.InfoDefaultPanel = themedComponents_1.default(DefaultPanel) `
${(props) => base(props)}
${(props) => shadow(props)}
border-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.secondary : theming_1.default.secondary};
 .up-panel-header {
   background-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.secondary : theming_1.default.secondary};
 }
`;
exports.DangerDefaultPanel = themedComponents_1.default(DefaultPanel) `
${(props) => base(props)}
${(props) => shadow(props)}
border-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.error : theming_1.default.error};
.up-panel-header {
   background-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.error : theming_1.default.error};
 }
`;
exports.PanelStyled = (props) => {
    const { children } = props, rest = __rest(props, ["children"]);
    switch (props.type) {
        case "primary":
            return React.createElement(exports.PrimaryDefaultPanel, Object.assign({}, rest), children);
        case "info":
            return React.createElement(exports.InfoDefaultPanel, Object.assign({}, rest), children);
        case "warning":
            return React.createElement(exports.WarningDefaultPanel, Object.assign({}, rest), children);
        case "danger":
            return React.createElement(exports.DangerDefaultPanel, Object.assign({}, rest), children);
        case "success":
            return React.createElement(exports.SuccessDefaultPanel, Object.assign({}, rest), children);
    }
    return React.createElement(exports.PrimaryDefaultPanel, Object.assign({}, rest), children);
};
//# sourceMappingURL=styles.js.map