"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class ErrorDisplay extends React.Component {
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return React.createElement("div", null,
            this.props.children,
            React.createElement("span", { style: { color: "red" } }, this.props.error));
    }
}
exports.default = ErrorDisplay;
//# sourceMappingURL=ErrorDisplay.js.map