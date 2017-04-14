"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const datetime_1 = require("@blueprintjs/datetime");
class UpLocaleUtils {
    formatDay(day, locale) {
        return "jour";
    }
    formatMonthTitle(month, locale) {
        return "";
    }
    formatWeekdayShort(weekday, locale) {
        return "";
    }
    formatWeekdayLong(weekday, locale) {
        return "";
    }
    getFirstDayOfWeek(locale) {
        return 1;
    }
    getMonths() {
        return ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet",
            "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    }
}
const locale = new UpLocaleUtils();
const BaseDate = (props) => {
    const { value, className, format, onChange } = props;
    const picker = (React.createElement("span", { className: "pt-icon pt-icon-calendar" }));
    return (React.createElement(datetime_1.DateInput, { className: className, locale: "fr", invalidDateMessage: "", localeUtils: locale, rightElement: picker, value: value, onChange: onChange, format: format }));
};
exports.NormalDate = styled_components_1.default(BaseDate) `
`;
class UpDateStyle extends React.Component {
    render() {
        const { value, format, onChange } = this.props;
        return (React.createElement(exports.NormalDate, { value: value, format: format, onChange: onChange }));
    }
}
UpDateStyle.defaultProps = {
    value: null
};
exports.default = UpDateStyle;
//# sourceMappingURL=styles.js.map