"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
class UpTooltip extends react_1.Component {
    constructor(props) {
        super(props);
    }
    componentWillUnmount() {
    }
    componentDidMount() {
    }
    render() {
        const wrapperClass = this.props.wrapperClass || '';
        return (React.createElement("div", { ref: "tooltip", className: wrapperClass }, this.props.children));
    }
}
UpTooltip.defaultProps = {
    title: '',
    wrapperClass: 'up-tooltip',
    placement: 'bottom'
};
exports.default = UpTooltip;
//# sourceMappingURL=UpTooltip.js.map