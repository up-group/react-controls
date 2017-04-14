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
var UpText = (function (_super) {
    __extends(UpText, _super);
    function UpText(p, c) {
        var _this = _super.call(this, p, c) || this;
        _this.onChange = function (event) {
            _this.props.onChange(event.target.value);
        };
        return _this;
    }
    UpText.prototype.render = function () {
        return (React.createElement(styles_1.default, { hasError: this.props.hasError, className: this.props.className, onChange: this.onChange }));
    };
    return UpText;
}(React.Component));
exports.default = UpText;
//# sourceMappingURL=UpText.js.map