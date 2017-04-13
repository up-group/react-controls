"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("../Input/styles");
class UpDateStyle extends React.Component {
    render() {
        const { value, innerRef } = this.props;
        return (React.createElement("div", { style: { position: "relative", marginBottom: "3px" } },
            React.createElement(styles_1.TextInputComponent, { value: value, innerRef: innerRef }),
            React.createElement("span", { className: "input-group-addon" },
                React.createElement("span", { className: "glyphicon glyphicon-calendar" }))));
    }
}
UpDateStyle.defaultProps = {
    value: null
};
exports.default = UpDateStyle;
//# sourceMappingURL=styles.js.map