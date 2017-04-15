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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var UpTooltip = (function (_super) {
    __extends(UpTooltip, _super);
    function UpTooltip(props) {
        return _super.call(this, props) || this;
    }
    UpTooltip.prototype.componentWillUnmount = function () {
    };
    UpTooltip.prototype.componentDidMount = function () {
    };
    UpTooltip.prototype.render = function () {
        var wrapperClass = this.props.wrapperClass || '';
        return (React.createElement("div", { ref: "tooltip", className: wrapperClass }, this.props.children));
    };
    return UpTooltip;
}(react_1.Component));
UpTooltip.defaultProps = {
    title: '',
    wrapperClass: 'up-tooltip',
    placement: 'bottom'
};
exports.default = UpTooltip;
//# sourceMappingURL=UpTooltip.js.map