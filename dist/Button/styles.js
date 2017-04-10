"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const utils_1 = require("../utils");
const maps_1 = require("./maps");
const theming_1 = require("../theming");
const SvgIcon_1 = require("../SvgIcon");
const ReactButtonComponent = (props) => {
    const { children, className } = props;
    const icon = React.createElement(SvgIcon_1.default, { iconName: props.iconName, width: props.iconSize, height: props.iconSize, color: props.color });
    return React.createElement("button", { className: className },
        props.iconName &&
            icon,
        children);
};
const shadow = props => styled_components_1.css `
  box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1) ;
`;
const base = props => styled_components_1.css `
  text-align: center;
  font-size: ${(props) => utils_1.default(maps_1.sizeMap[props.fontSize])};
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ;
  border-radius: ${(props) => props.theme.borderRadius || '3px'};
  padding: 0 10px;
  vertical-align: middle;
  min-width: ${(props) => props.theme.minButtonSize || '30px'};
  min-height: ${(props) => props.theme.minButtonSize || '30px'};
  line-height: ${(props) => props.theme.minButtonSize || '30px'};
  > svg {
    margin:4px 4px 4px 0px;
    display:inline-block;
    float:left;
  }
`;
const disabled = props => styled_components_1.css `
background: ${(props) => theming_1.default.disabledBg};
color: ${(props) => theming_1.default.disabledFg};
cursor: not-allowed;
`;
const active = props => styled_components_1.css `
background: ${props => props.backgroundColor || 'green'};
color: ${(props) => props.color};
&:hover {
  background: ${props => props.color || 'green'};
  color: ${(props) => props.backgroundColor};
}
`;
exports.BaseButton = styled_components_1.default(ReactButtonComponent) `
${(props) => base(props)}
${(props) => props.shadow ? shadow(props) : styled_components_1.css ``}
${(props) => props.disabled ? disabled(props) : active(props)}
`;
exports.HeroButton = styled_components_1.default(ReactButtonComponent) `
${(props) => base(props)}
${(props) => props.disabled ? disabled(props) : active(props)}
`;
//# sourceMappingURL=styles.js.map