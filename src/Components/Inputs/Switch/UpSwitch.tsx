import * as React from "react"

import { UpSwitchProps, UpSwitchState } from './'

import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'

export default class UpSwitch extends BaseControlComponent<UpSwitchProps, boolean> {
    constructor(p, c) {
        super(p, c);
        //this.state = { value: false };
    }

    renderControl() {

        var maxWidth = this.props.isNullable ? "50%" : "75%";

        var btnBool: React.CSSProperties = {
            display: "inline-block",
            cursor: "pointer",
            borderRadius: "4px",
            width: "100%"
        }

        var btnBoolSpan: React.CSSProperties = {
            textAlign: "center",
            color: "#e5e5e5",
            width: "25%",
            fontSize: "17px",
            padding: "2px"
        }

        var btnFalse: React.CSSProperties = {
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
            float: "left",
            backgroundColor: this.state.value === false ? "#FF1A1A" : "#eba8a6",
            width: this.state.value === false ? maxWidth : "25%"
        }

        var btnTrue: React.CSSProperties = {
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
            float: "right",
            backgroundColor: this.state.value === true ? "#009b00" : "#afd5af",
            width: this.state.value === true ? maxWidth : "25%"
        }

        var btnNull: React.CSSProperties = {
            backgroundColor: "#b2b2b2",
            float: "left",
            width: this.state.value === null ? maxWidth : "25%"
        }


        if (this.props.isNullable === true) {
            return <span style={btnBool} >
                <span style={{ ...btnBoolSpan, ...btnFalse }} value={false.toString()} onClick={this.onBoolClick}>Non</span>
                <span style={{ ...btnBoolSpan, ...btnNull }} value={null} onClick={this.onBoolClick}>Null</span>
                <span style={{ ...btnBoolSpan, ...btnTrue }} value={true.toString()} onClick={this.onBoolClick}>Oui</span>
            </span>
        } else {
            return <span style={btnBool} >
                <span style={{ ...btnBoolSpan, ...btnFalse }} value={false.toString()} onClick={this.onBoolClick}>Non</span>
                <span style={{ ...btnBoolSpan, ...btnTrue }} value={true.toString()} onClick={this.onBoolClick}>Oui</span>
            </span>
        }
    }

    onBoolClick = (a) => {
        var data = a.target.getAttribute("value");
        var value = null;
        switch (data) {
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
        this.handleChangeEvent(value);
        //this.setState({ value: value }, this.dispatchOnChange)
    }

    //dispatchOnChange = () => {
    //    this.props.onChange(this.state.value);
    //}

    getValue(event: any) {
        return event;
    }
}
