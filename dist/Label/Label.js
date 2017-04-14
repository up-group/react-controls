"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("@blueprintjs/core/dist/blueprint.css");
const styled_components_1 = require("styled-components");
const WrapperControl = styled_components_1.default.div ``;
class Label extends React.Component {
    constructor(props) {
        super(props);
        this.setInput = this.setInput.bind(this);
    }
    setInput(input) {
        this.wrappedInput = input;
    }
    componentWillUnmount() {
    }
    componentDidMount() {
        console.log(this.wrappedInput);
    }
    render() {
        const position = this.props.position;
        if (position === 'right') {
            return (React.createElement("label", { className: "pt-label" },
                this.props.children,
                React.createElement("span", { className: "pt-label" }, this.props.text)));
        }
        else {
            return (React.createElement("label", { className: "pt-label" },
                React.createElement("span", { className: "pt-label-text" }, this.props.text),
                React.createElement(WrapperControl, { innerRef: this.setInput }, this.props.children)));
        }
    }
}
Label.defaultProps = {
    text: '',
    position: 'left',
    disabled: false
};
exports.default = Label;
//# sourceMappingURL=Label.js.map