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
const styled_components_1 = require("styled-components");
const BaseFileComponent = (props) => {
    const { className } = props;
    return React.createElement("input", { className: className, type: "file", accept: props.fileExtension, onChange: props.onChange });
};
const base = props => styled_components_1.css `
`;
const error = props => styled_components_1.css `
  border : 1px solid red;
`;
exports.BaseFileStyle = styled_components_1.default(BaseFileComponent) `
${(props) => base(props)}
${(props) => props.hasError ? error(props) : styled_components_1.css ``}
`;
class UpFileStyle extends React.Component {
    render() {
        const _a = this.props, { children } = _a, rest = __rest(_a, ["children"]);
        return (React.createElement(exports.BaseFileStyle, Object.assign({}, rest), children));
    }
}
UpFileStyle.defaultProps = {
    hasError: false,
    fileExtension: "*",
    onChange: (value) => { }
};
exports.default = UpFileStyle;
//# sourceMappingURL=styles.js.map