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
        this.onChange = this.onChange.bind(this);
    }
    render() {
        const { hasError, className, value } = this.props;
        return (React.createElement(styles_1.default, { onChange: this.onChange, hasError: hasError, className: className, value: value }));
    }
}
exports.default = UpText;
//# sourceMappingURL=UpText.js.map