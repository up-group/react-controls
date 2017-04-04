import * as React from "react";
import * as ReactDOM from "react-dom";

interface UpSwitchProps {
    // hasError: boolean;
    onChange: (value?: boolean) => void;
    isNuallble: boolean;
    default?: boolean;
}

interface UpSwitchState {
    value?: boolean;
}

export default class UpSwitch extends React.Component<UpSwitchProps, UpSwitchState> {
    constructor(p, c) {        super(p, c);
        this.state = { value: this.props.default };
    }    componentDidMount() {    }    render() {
        if (this.props.isNuallble === true) {
            return <span className="btnBool">
                <span className={"btnFalse " + (this.state.value === false ? "selected Null" : "")} value={false.toString()} onClick={this.onBoolClick}>Non</span>
                <span className={"btnNull " + (this.state.value === null ? "selected Null" : "")} value={null} onClick={this.onBoolClick}>Null</span>
                <span className={"btnTrue " + (this.state.value === true ? "selected Null" : "")} value={true.toString()} onClick={this.onBoolClick}>Oui</span>
            </span>
        } else {
            return <span className="btnBool">
                <span className={" " + (this.state.value === false ? "btnFalse selected" : "btnFalse")} value={false.toString()} onClick={this.onBoolClick}>Non</span>
                <span className={" " + (this.state.value === true ? "btnTrue selected" : "btnTrue")} value={true.toString()} onClick={this.onBoolClick}>Oui</span>
            </span>
        }
    }

    onBoolClick = (a) => {        var data = a.target.getAttribute("value");        var value = null;        switch (data) {
            case "true":
                value = true;
                break;
            case "false":
                value = false;
                break;
            case "null":
                value = null;
                break;
            default:
                value = null;
        }
        this.setState({ value: value }, this.dispatchOnChange)
    }    dispatchOnChange = () => {        this.props.onChange(this.state.value);
    }
}