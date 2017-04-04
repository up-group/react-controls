import * as React from "react";
import * as ReactDOM from "react-dom";

interface UpTimePickerProps {
    hasError: boolean;
    onChange: (value: string) => void;
}

interface UpTimePickerState {
    hour?: number;
    minute?: number;
}

export default class UpTimePicker extends React.Component<UpTimePickerProps, UpTimePickerState> {
    inputElement: HTMLInputElement;    constructor(p, c) {        super(p, c);
        this.state = {
            hour: 0,
            minute: 0
        };
    }    render() {
        return <span className="form-control"
            style={{
                "borderColor": this.props.hasError === true ? { borderColor: "red" } : null,
                "width": "5em",
                "padding": "4px"
            }}
            >
            <input
                type="text"
                value={this.state.hour.toString()}
                onKeyDown={this.onKeyDownHour}
                onChange={this.onchangeHour}
                style={{
                    "border": "none",
                    "width": "2em",
                    "textAlign": "center"
                }}
                />
            :
            <input
                type="text"
                value={this.state.minute.toString()}
                onKeyDown={this.onKeyDownMin}
                onChange={this.onchangeMin}
                style={{
                    "border": "none",
                    "width": "2em",
                    "textAlign": "center"
                }}
                />
        </span>
    }

    onchangeHourEvent = (e) => { this.onchangeHour(e.target.value); }
    onchangeHour = (value) => {
        var hour = Number(value)
        if (isNaN(hour)) {
            hour = 0;
        } else if (hour < 0) {
            hour = 23;
        } else if (hour > 23) {
            hour = 0;
        }
        this.setState({ hour: hour }, this.sendChange);
    }
    onKeyDownHour = (e) => {
        if (e.keyCode == 38) { // up
            this.onchangeHour(Number(e.target.value) + 1);
        } else if (e.keyCode == 40) { // down
            this.onchangeHour(Number(e.target.value) - 1);
        }
    }


    onchangeMinEvent = (e) => { this.onchangeMin(e.target.value); }
    onchangeMin = (value) => {
        var minute = Number(value)
        if (isNaN(minute)) {
            minute = 0;
        } else if (minute < 0) {
            minute = 59;
        } else if (minute > 59) {
            minute = 0;
        }
        this.setState({ minute: minute }, this.sendChange);
    }
    onKeyDownMin = (e) => {
        if (e.keyCode == 38) { // up
            this.onchangeMin(Number(e.target.value) + 1);
        } else if (e.keyCode == 40) { // down
            this.onchangeMin(Number(e.target.value) - 1);
        }
    }

    sendChange = () => {
        this.props.onChange(this.state.hour + ":" + this.state.minute);
    }
}