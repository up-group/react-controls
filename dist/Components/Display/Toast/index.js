"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Box_1 = require("../../Containers/Box");
const styles_1 = require("./styles");
class Toast extends React.Component {
    constructor() {
        super();
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            isVisible: true,
            isUnmounting: false,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.handleClose();
        }, 5000);
    }
    handleClose() {
        this.setState({
            isUnmounting: true,
        });
        setTimeout(() => {
            if (this.props.onClose) {
                this.props.onClose();
            }
            this.setState({
                isUnmounting: false,
                isVisible: false,
            });
        }, 1000);
    }
    render() {
        const { isVisible } = this.state;
        const { message, children, status } = this.props;
        if (!isVisible) {
            return null;
        }
        return (React.createElement(styles_1.default, Object.assign({ status: status }, this.state),
            React.createElement(Box_1.default, { alignItems: "center", justifyContent: "center", flexDirection: "row", boxSize: 60, pad: "medium", style: { width: '100vw' } },
                React.createElement(Box_1.default, { style: { flexGrow: 2 } },
                    message && message,
                    children && children),
                React.createElement(Box_1.default, { alignItems: "center", justifyContent: "center" },
                    React.createElement(styles_1.Button, { onClick: this.handleClose }, "\u2715")))));
    }
}
Toast.defaultProps = {
    status: 'none',
};
exports.default = Toast;
//# sourceMappingURL=index.js.map