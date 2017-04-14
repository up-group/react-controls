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
var BaseControl_1 = require("../BaseControl/BaseControl");
var TypeStringControl_1 = require("../Validation/TypeStringControl");
var Email = (function (_super) {
    __extends(Email, _super);
    function Email(p, c) {
        var _this = _super.call(this, p, c) || this;
        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var patternErrorMessage = "Doit être un courriel";
        _this._validationManager.addControl(new TypeStringControl_1.default(pattern, patternErrorMessage));
        return _this;
    }
    Email.prototype.onChange = function (event) {
        return event.target.value;
    };
    Email.prototype.renderControl = function () {
        return (React.createElement(styles_1.InputStyled, { hasError: this.hasError(), onChange: this.handleChangeEvent }));
    };
    return Email;
}(BaseControl_1.BaseControl));
Email.defaultProps = {};
exports.default = Email;
//# sourceMappingURL=Email.js.map