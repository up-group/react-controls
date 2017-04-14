"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Box_1 = require("../Box");
var styles_1 = require("./styles");
var Toast = (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        var _this = _super.call(this) || this;
        _this.handleClose = _this.handleClose.bind(_this);
        _this.state = {
            isVisible: true,
            isUnmounting: false,
        };
        return _this;
    }
    Toast.prototype.componentDidMount = function () {
        var _this = this;
        setTimeout(function () {
            _this.handleClose();
        }, 5000);
    };
    Toast.prototype.handleClose = function () {
        var _this = this;
        this.setState({
            isUnmounting: true,
        });
        setTimeout(function () {
            if (_this.props.onClose) {
                _this.props.onClose();
            }
            _this.setState({
                isUnmounting: false,
                isVisible: false,
            });
        }, 1000);
    };
    Toast.prototype.render = function () {
        var isVisible = this.state.isVisible;
        var _a = this.props, message = _a.message, children = _a.children, status = _a.status;
        if (!isVisible) {
            return null;
        }
        return (React.createElement(styles_1.default, __assign({ status: status }, this.state),
            React.createElement(Box_1.default, { alignItems: "center", justifyContent: "center", flexDirection: "row", boxSize: 60, pad: "medium", style: { width: '100vw' } },
                React.createElement(Box_1.default, { style: { flexGrow: 2 } },
                    message && message,
                    children && children),
                React.createElement(Box_1.default, { alignItems: "center", justifyContent: "center" },
                    React.createElement(styles_1.Button, { onClick: this.handleClose }, "\u2715")))));
    };
    return Toast;
}(React.Component));
Toast.defaultProps = {
    status: 'none',
};
exports.default = Toast;
//# sourceMappingURL=index.js.map