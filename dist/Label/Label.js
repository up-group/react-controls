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
require("@blueprintjs/core/dist/blueprint.css");
var styled_components_1 = require("styled-components");
var WrapperControl = (_a = [""], _a.raw = [""], styled_components_1.default.div(_a));
var Label = (function (_super) {
    __extends(Label, _super);
    function Label(props) {
        var _this = _super.call(this, props) || this;
        _this.setInput = _this.setInput.bind(_this);
        return _this;
    }
    Label.prototype.setInput = function (input) {
        this.wrappedInput = input;
    };
    Label.prototype.componentWillUnmount = function () {
    };
    Label.prototype.componentDidMount = function () {
        console.log(this.wrappedInput);
    };
    Label.prototype.render = function () {
        var position = this.props.position;
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
    };
    return Label;
}(React.Component));
Label.defaultProps = {
    text: '',
    position: 'left',
    disabled: false
};
exports.default = Label;
var _a;
//# sourceMappingURL=Label.js.map