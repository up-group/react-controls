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
var ErrorDisplay = (function (_super) {
    __extends(ErrorDisplay, _super);
    function ErrorDisplay(p, c) {
        return _super.call(this, p, c) || this;
    }
    ErrorDisplay.prototype.render = function () {
        return React.createElement("div", null,
            this.props.children,
            React.createElement("span", { style: { color: "red" } }, this.props.error));
    };
    return ErrorDisplay;
}(React.Component));
exports.default = ErrorDisplay;
//# sourceMappingURL=ErrorDisplay.js.map