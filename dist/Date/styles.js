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
var styles_1 = require("../Input/styles");
var UpDateStyle = (function (_super) {
    __extends(UpDateStyle, _super);
    function UpDateStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpDateStyle.prototype.render = function () {
        var innerRef = this.props.innerRef;
        return (React.createElement("div", { style: { position: "relative", marginBottom: "3px" } },
            React.createElement(styles_1.TextInputComponent, { innerRef: innerRef }),
            React.createElement("span", { className: "input-group-addon" },
                React.createElement("span", { className: "glyphicon glyphicon-calendar" }))));
    };
    return UpDateStyle;
}(React.Component));
UpDateStyle.defaultProps = {};
exports.default = UpDateStyle;
//# sourceMappingURL=styles.js.map