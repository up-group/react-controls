"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
class UpText extends React.Component {
    constructor(p, c) {
        super(p, c);
        this.onChange = (event) => {
            this.props.onChange(event.target.value);
        };
    }
    render() {
        return (React.createElement(styles_1.default, { hasError: this.props.hasError, className: this.props.className, onChange: this.onChange }));
    }
}
exports.default = UpText;
//# sourceMappingURL=UpText.js.map