"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class UpSwitch extends React.Component {
    constructor(p, c) {
        super(p, c);
        this.onBoolClick = (a) => {
            var data = a.target.getAttribute("value");
            var value = null;
            switch (data) {
                case "true":
                    value = true;
                    break;
                case "false":
                    value = false;
                    break;
                case "null":
                    value = null;
                    break;
                default:
                    value = null;
            }
            this.setState({ value: value }, this.dispatchOnChange);
        };
        this.dispatchOnChange = () => {
            this.props.onChange(this.state.value);
        };
        this.state = { value: this.props.default };
    }
    componentDidMount() {
    }
    render() {
        if (this.props.isNullable === true) {
            return React.createElement("span", { className: "btnBool" },
                React.createElement("span", { className: "btnFalse " + (this.state.value === false ? "selected Null" : ""), value: false.toString(), onClick: this.onBoolClick }, "Non"),
                React.createElement("span", { className: "btnNull " + (this.state.value === null ? "selected Null" : ""), value: null, onClick: this.onBoolClick }, "Null"),
                React.createElement("span", { className: "btnTrue " + (this.state.value === true ? "selected Null" : ""), value: true.toString(), onClick: this.onBoolClick }, "Oui"));
        }
        else {
            return React.createElement("span", { className: "btnBool" },
                React.createElement("span", { className: " " + (this.state.value === false ? "btnFalse selected" : "btnFalse"), value: false.toString(), onClick: this.onBoolClick }, "Non"),
                React.createElement("span", { className: " " + (this.state.value === true ? "btnTrue selected" : "btnTrue"), value: true.toString(), onClick: this.onBoolClick }, "Oui"));
        }
    }
}
exports.default = UpSwitch;
//# sourceMappingURL=UpSwitch.js.map