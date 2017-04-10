"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
class Input extends React.Component {
    render() {
        if (this.props.isEmail) {
            return (React.createElement(styles_1.EmailInputComponent, { type: "email", style: this.props.style, borderColor: this.props.borderColor, onClick: this.props.onClick, color: this.props.color, backgroundColor: this.props.backgroundColor, fontSize: this.props.fontSize }, this.props.children));
        }
        return (React.createElement(styles_1.TextInputComponent, { type: "text", onClick: this.props.onClick, color: this.props.color, backgroundColor: this.props.backgroundColor, fontSize: this.props.fontSize }, this.props.children));
    }
}
Input.defaultProps = {
    color: '#fefefe',
    backgroundColor: '#c05b4d',
    borderColor: '#732419',
    fontSize: 'medium',
    isEmail: false
};
exports.default = Input;
//# sourceMappingURL=index.js.map