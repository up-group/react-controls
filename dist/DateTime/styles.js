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
var styled_components_1 = require("styled-components");
var datetime_1 = require("@blueprintjs/datetime");
var UpLocaleUtils = (function () {
    function UpLocaleUtils() {
    }
    UpLocaleUtils.prototype.formatDay = function (day, locale) {
        return "jour";
    };
    UpLocaleUtils.prototype.formatMonthTitle = function (month, locale) {
        return "";
    };
    UpLocaleUtils.prototype.formatWeekdayShort = function (weekday, locale) {
        return "";
    };
    UpLocaleUtils.prototype.formatWeekdayLong = function (weekday, locale) {
        return "";
    };
    UpLocaleUtils.prototype.getFirstDayOfWeek = function (locale) {
        return 1;
    };
    UpLocaleUtils.prototype.getMonths = function () {
        return ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet",
            "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    };
    return UpLocaleUtils;
}());
var locale = new UpLocaleUtils();
var BaseDate = function (props) {
    var value = props.value, className = props.className, format = props.format, onChange = props.onChange;
    var picker = (React.createElement("span", { className: "pt-icon pt-icon-calendar" }));
    return (React.createElement("div", null,
        React.createElement(datetime_1.DateInput, { className: className, locale: "fr", invalidDateMessage: "", localeUtils: locale, rightElement: picker, value: value, onChange: onChange, format: format }),
        React.createElement(datetime_1.TimePicker, null)));
};
exports.NormalDate = (_a = ["\n"], _a.raw = ["\n"], styled_components_1.default(BaseDate)(_a));
var UpDateStyle = (function (_super) {
    __extends(UpDateStyle, _super);
    function UpDateStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpDateStyle.prototype.render = function () {
        var _a = this.props, value = _a.value, format = _a.format, onChange = _a.onChange;
        return (React.createElement(exports.NormalDate, { value: value, format: format, onChange: onChange }));
    };
    return UpDateStyle;
}(React.Component));
UpDateStyle.defaultProps = {
    value: null
};
exports.default = UpDateStyle;
var _a;
//# sourceMappingURL=styles.js.map