import * as React from "react";
import { style } from "typestyle";

import { getFontClassName, isNullOrUndef } from "../../../Common/utils/helpers";


export interface ButtonProps {
    Text: string;
    Disable?: boolean;
    Secondary?: boolean;
    TwoLines?: boolean;
    RoundAngle?: boolean;
    onClick?: () => void;
}

export interface ButtonState {
}

export default class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(p, c) {
        super(p, c);
    }

    render() {
        var orange = "#f59100";
        var color = this.props.Disable ? "#ffffff" : this.props.Secondary ? orange : "#ffffff";
        var backColor = this.props.Disable ? "#d7d7d7" : this.props.Secondary ? "" : orange;
        var borderColor = this.props.Disable ? backColor : orange;
        var fontWeight = this.props.RoundAngle ? "bold" : "normal";
        var height = this.props.TwoLines ? "60px" : "40px";

        var styleG = getFontClassName({ fontSize: "14px", color: color, fontWeight: fontWeight, lineHeight: height, }) + " " + style({
            borderRadius: this.props.RoundAngle ? "30px" : "3px",
            border: "1px solid " + borderColor,
            backgroundColor: backColor,
            textAlign: "center",
            display: "inline-block",
            minWidth: "180px",
            height: height,
            cursor: this.props.Disable || isNullOrUndef(this.props.onClick) ? "auto" : "pointer",
            padding: "0 8px",
        });

        return <span className={styleG} onClick={this.props.Disable ? null : this.props.onClick} >
            {this.props.Text}
        </span>;
    }
}