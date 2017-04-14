"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
class FormGroup extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillUnmount() {
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(styles_1.FormGroupStyled, null, this.props.children));
    }
}
FormGroup.defaultProps = {};
exports.default = FormGroup;
//# sourceMappingURL=index.js.map