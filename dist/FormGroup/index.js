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
var FormGroup = (function (_super) {
    __extends(FormGroup, _super);
    function FormGroup(props) {
        return _super.call(this, props) || this;
    }
    FormGroup.prototype.componentWillUnmount = function () {
    };
    FormGroup.prototype.componentDidMount = function () {
    };
    FormGroup.prototype.render = function () {
        return (React.createElement(styles_1.FormGroupStyled, null, this.props.children));
    };
    return FormGroup;
}(React.Component));
FormGroup.defaultProps = {};
exports.default = FormGroup;
//# sourceMappingURL=index.js.map