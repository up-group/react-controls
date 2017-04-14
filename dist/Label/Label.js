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
require("@blueprintjs/core/dist/blueprint.css");
var styles_1 = require("./styles");
var Label = (function (_super) {
    __extends(Label, _super);
    function Label(props) {
        return _super.call(this, props) || this;
    }
    Label.prototype.componentWillUnmount = function () {
    };
    Label.prototype.componentDidMount = function () {
    };
    Label.prototype.render = function () {
        return React.createElement(styles_1.LabelStyled, __assign({}, this.props));
    };
    return Label;
}(React.Component));
Label.defaultProps = {
    text: '',
    disabled: false
};
exports.default = Label;
//# sourceMappingURL=Label.js.map