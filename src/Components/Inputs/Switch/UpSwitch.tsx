import * as React from "react"

import { UpSwitchProps, UpSwitchState } from './'

import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'

export default class UpSwitch extends BaseControlComponent<UpSwitchProps, boolean> {
    constructor(p, c) {
        super(p, c);
    }

    renderControl() {

        var maxWidth = this.props.isNullable ? "50%" : "75%";

        var btnBool: React.CSSProperties = {
            display: "inline-block",
            cursor: "pointer",
            borderRadius: "4px",
            width: "100%"
        }


        if (this.props.isNullable === true) {
            return <span style={btnBool} >
                <UpSwitchBtn displayFalse={this.props.displayFalse} displayNull={this.props.displayNull} displayTrue={this.props.displayTrue} SelectedValue={this.state.value} value={false} isNullable={this.props.isNullable} onclick={this.onBoolClick} />
                <UpSwitchBtn displayFalse={this.props.displayFalse} displayNull={this.props.displayNull} displayTrue={this.props.displayTrue} SelectedValue={this.state.value} value={null} isNullable={this.props.isNullable} onclick={this.onBoolClick} />
                <UpSwitchBtn displayFalse={this.props.displayFalse} displayNull={this.props.displayNull} displayTrue={this.props.displayTrue} SelectedValue={this.state.value} value={true} isNullable={this.props.isNullable} onclick={this.onBoolClick} />

            </span>
        } else {
            return <span style={btnBool} >
                <UpSwitchBtn displayFalse={this.props.displayFalse} displayNull={this.props.displayNull} displayTrue={this.props.displayTrue} SelectedValue={this.state.value} value={false} isNullable={this.props.isNullable} onclick={this.onBoolClick} />
                <UpSwitchBtn displayFalse={this.props.displayFalse} displayNull={this.props.displayNull} displayTrue={this.props.displayTrue} SelectedValue={this.state.value} value={true} isNullable={this.props.isNullable} onclick={this.onBoolClick} />
            </span>
        }
    }

    onBoolClick = (a?: boolean) => {
        this.handleChangeEvent(a);
    }

    getValue(event: any) {
        return event;
    }
}



export interface UpSwitchBtnProps {
    isNullable: boolean;
    value?: boolean;
    SelectedValue?: boolean;
    onclick: (data?: boolean) => void;

    displayFalse: string;
    displayTrue: string;
    displayNull: string;
}


export class UpSwitchBtn extends React.Component<UpSwitchBtnProps, {}>{

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {

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
            backgroundColor: this.props.SelectedValue === false ? "#FF1A1A" : "#eba8a6",
            width: this.props.SelectedValue === false ? maxWidth : "25%"
        }

        var btnTrue: React.CSSProperties = {
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
            float: "right",
            backgroundColor: this.props.SelectedValue === true ? "#009b00" : "#afd5af",
            width: this.props.SelectedValue === true ? maxWidth : "25%"
        }

        var btnNull: React.CSSProperties = {
            backgroundColor: "#b2b2b2",
            float: "left",
            width: this.props.SelectedValue === null ? maxWidth : "25%"
        }

        var btnStyle = this.props.value == null ? btnNull : this.props.value === true ? btnTrue : btnFalse;

        var btnStr = "";
        switch (this.props.value) {
            case null:
                btnStr = this.props.displayNull != null ? this.props.displayNull : "Indiférent";
                break;
            case true:
                btnStr = this.props.displayTrue != null ? this.props.displayTrue : "Oui";
                break;
            case false:
                btnStr = this.props.displayFalse != null ? this.props.displayFalse : "Non";
                break;
            default:
                btnStr = "err";
        }

        return <span style={{ ...btnBoolSpan, ...btnStyle }} onClick={this.onClick} >{btnStr}</span>
    }

    onClick = () => {

        this.props.onclick(this.props.value);
    }
}

