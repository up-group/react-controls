"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("@blueprintjs/core/dist/blueprint.css");
const styles_1 = require("./styles");
class Label extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillUnmount() {
    }
    componentDidMount() {
    }
    render() {
        return React.createElement(styles_1.LabelStyled, Object.assign({}, this.props));
    }
}
Label.defaultProps = {
    text: '',
    disabled: false
};
exports.default = Label;
//# sourceMappingURL=Label.js.map