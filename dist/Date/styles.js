"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class UpDateStyle extends React.Component {
    render() {
        const { value, innerRef } = this.props;
        return (React.createElement("div", { className: 'input-group date', style: { marginBottom: "3px" } },
            React.createElement("input", { value: value, ref: innerRef, type: 'text', className: "form-control" }),
            React.createElement("span", { className: "input-group-addon" },
                React.createElement("span", { className: "glyphicon glyphicon-calendar" }))));
    }
}
UpDateStyle.defaultProps = {
    value: null
};
exports.default = UpDateStyle;
//# sourceMappingURL=styles.js.map