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
var styles_1 = require("./styles");
var BaseControl_1 = require("../../../Common/BaseControl/BaseControl");
var Input = (function (_super) {
    __extends(Input, _super);
    function Input(p, c) {
        return _super.call(this, p, c) || this;
    }
    Input.prototype.onChange = function (event) {
        return event.target.value;
    };
    Input.prototype.renderControl = function () {
        return (React.createElement(styles_1.InputStyled, { type: "text", onChange: this.handleChangeEvent }, this.props.children));
    };
    return Input;
}(BaseControl_1.BaseControl));
Input.defaultProps = {};
exports.default = Input;
//# sourceMappingURL=index.js.map