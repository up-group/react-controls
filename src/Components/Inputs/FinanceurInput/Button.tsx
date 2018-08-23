import * as React from "react";
import { style } from "typestyle";

import { getFontClassName, isNullOrUndef, numberIsNullOrUndef } from "../../../Common/utils/helpers";


export interface ButtonProps {
    Text: string;
    Disable?: boolean;
    Secondary?: boolean;
    TwoLines?: boolean;
    RoundAngle?: boolean;
    TabIndex?: number;
    onClick?: () => void;
}

export interface ButtonState {
}

export default class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(p, c) {
        super(p, c);
    }

    onKeyDown = (event) => {
        if(event.keyCode === 13 && !isNullOrUndef(this.props.onClick)) {
            this.props.onClick();
        }
    }

    render() {
        var orange = "#f59100";
        var color = this.props.Disable ? "#ffffff" : this.props.Secondary ? orange : "#ffffff";
        var backColor = this.props.Disable ? "#d7d7d7" : this.props.Secondary ? "" : orange;
        var borderColor = this.props.Disable ? backColor : orange;
        var height = this.props.TwoLines ? "60px" : "40px";

        var styleG = getFontClassName({ fontSize: "14px", color: color, lineHeight: height, }) + " " + style({
            borderRadius: this.props.RoundAngle ? "30px" : "3px",
            border: "1px solid " + borderColor,
            backgroundColor: backColor,
            textAlign: "center",
            display: "inline-block",
            minWidth: "180px",
            height: height,
            cursor: this.props.Disable || isNullOrUndef(this.props.onClick) ? "auto" : "pointer",
            padding: "0 8px",
            $nest: {                
                "&:focus": {
                    outline: "none",
                    fontWeight: "bold",
                },
            },
        });

        var tabIndex: number = numberIsNullOrUndef(this.props.TabIndex) ? 0 : this.props.TabIndex;

        return <span className={styleG} tabIndex={tabIndex} 
                onClick={this.props.Disable ? null : this.props.onClick} 
                onKeyDown={this.props.Disable ? null : this.onKeyDown} >
            {this.props.Text}
        </span>;
    }
}