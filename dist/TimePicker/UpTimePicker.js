"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class UpTimePicker extends React.Component {
    constructor(p, c) {
        super(p, c);
        this.onchangeHourEvent = (e) => { this.onchangeHour(e.target.value); };
        this.onchangeHour = (value) => {
            var hour = Number(value);
            if (isNaN(hour)) {
                hour = 0;
            }
            else if (hour < 0) {
                hour = 23;
            }
            else if (hour > 23) {
                hour = 0;
            }
            this.setState({ hour: hour }, this.sendChange);
        };
        this.onKeyDownHour = (e) => {
            if (e.keyCode == 38) {
                this.onchangeHour(Number(e.target.value) + 1);
            }
            else if (e.keyCode == 40) {
                this.onchangeHour(Number(e.target.value) - 1);
            }
        };
        this.onchangeMinEvent = (e) => { this.onchangeMin(e.target.value); };
        this.onchangeMin = (value) => {
            var minute = Number(value);
            if (isNaN(minute)) {
                minute = 0;
            }
            else if (minute < 0) {
                minute = 59;
            }
            else if (minute > 59) {
                minute = 0;
            }
            this.setState({ minute: minute }, this.sendChange);
        };
        this.onKeyDownMin = (e) => {
            if (e.keyCode == 38) {
                this.onchangeMin(Number(e.target.value) + 1);
            }
            else if (e.keyCode == 40) {
                this.onchangeMin(Number(e.target.value) - 1);
            }
        };
        this.sendChange = () => {
            this.props.onChange(this.state.hour + ":" + this.state.minute);
        };
        this.state = {
            hour: 0,
            minute: 0
        };
    }
    render() {
        return React.createElement("span", { className: "form-control", style: {
                "borderColor": this.props.hasError === true ? { borderColor: "red" } : null,
                "width": "5em",
                "padding": "4px"
            } },
            React.createElement("input", { type: "text", value: this.state.hour.toString(), onKeyDown: this.onKeyDownHour, onChange: this.onchangeHour, style: {
                    "border": "none",
                    "width": "2em",
                    "textAlign": "center"
                } }),
            ":",
            React.createElement("input", { type: "text", value: this.state.minute.toString(), onKeyDown: this.onKeyDownMin, onChange: this.onchangeMin, style: {
                    "border": "none",
                    "width": "2em",
                    "textAlign": "center"
                } }));
    }
}
exports.default = UpTimePicker;
//# sourceMappingURL=UpTimePicker.js.map