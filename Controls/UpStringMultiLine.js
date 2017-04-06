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
var UpStringMultiLine = (function (_super) {
    __extends(UpStringMultiLine, _super);
    function UpStringMultiLine(p, c) {
        var _this = _super.call(this, p, c) || this;
        _this.onchange = function (event) {
            _this.props.onChange(event.target.value);
        };
        return _this;
    }
    UpStringMultiLine.prototype.render = function () {
        return React.createElement("textarea", { style: this.props.hasError === true ? { borderColor: "red" } : null, type: "text", className: "form-control", onChange: this.onchange });
    };
    return UpStringMultiLine;
}(React.Component));
exports.UpStringMultiLine = UpStringMultiLine;
//# sourceMappingURL=UpStringMultiLine.js.map