import * as React from "react";
import { style } from "typestyle"

import { getFontClassName, isNullOrUndef, numberIsNullOrUndef, arrayIsNullOrEmpty } from "../../../Common/utils/helpers";


export interface RadioProps {
    Text: string;
    Check: boolean;
    Disable?: boolean;
    onChange?: (check: boolean) => void;
    onKeyDown?: (event) => void;
}

export interface RadioState {
    Check: boolean;
    Focus: boolean;
}

export default class Radio extends React.Component<RadioProps, RadioState> {
    private ref: any;

    constructor(p, c) {
        super(p, c);
        this.state = {
            Check: this.props.Check,
            Focus: false,
        };
    }

    private onKeyDown = (event) => {
        if (this.props.Disable) {
            return ;
        }
        // espace 
        if (event.keyCode === 32) { 
            this.onClick();
            event.preventDefault();
        }
        if ( ! isNullOrUndef(this.props.onKeyDown)) {
            this.props.onKeyDown(event);
        }
    }
    private onClick = () => {
        if (this.props.Disable) {
            return ;
        }
        if (this.state.Check) {
            return ;
        }
        this.setState({ Check: true, }, () => {
            if ( ! isNullOrUndef(this.props.onChange)) {
                this.props.onChange(this.state.Check);
            }
        });
    }
    private onFocus = (event) => {
        this.setState({ Focus: true, });
    }
    private onBlur = (event) => {
        this.setState({ Focus: false, });
    }

    // utilisé pour la gestion du focus dans RadioGroup
    public focus = () => {
        if (!this.props.Disable) {
            this.ref.focus();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.Check !== this.props.Check && nextProps.Check !== this.state.Check) {
            this.setState({ Check: nextProps.Check, });
        }
    }

    render() {
        var epaisseurCercle: string = this.state.Check ? "5" : "2";
        var couleurCercle: string = this.state.Check && !this.props.Disable ? "f59100" : "d7d7d7";
           
        var styleG = getFontClassName({ fontSize: "14px", color: "#4e5b59", }) + " " + style({
            cursor: this.props.Disable ? "auto" : "pointer",
            opacity: this.props.Disable ? 0.5 : 1,
            $nest: {
                "& > span": {
                    verticalAlign: "middle",
                },
                "&:focus": {
                    outline: "none",
                },
            },
        });
        var styleSousligner = style({
            textDecoration: this.state.Focus && !this.props.Disable ? "underline #f59100" : "none",
        });
        var styleCercle = style({
            borderRadius: "50%",
            height: "16px",
            width: "16px",
            border: epaisseurCercle + "px solid #" + couleurCercle,
            display: "inline-block",
            boxSizing: "border-box",
        });

        return <span className={styleG} onClick={this.onClick} onKeyDown={this.onKeyDown} 
                onFocus={this.onFocus} onBlur={this.onBlur} tabIndex={this.props.Disable ? null : 0} ref={(c) => { this.ref = c; }} >
            <span className={styleCercle} />
            <span className={styleSousligner} > {this.props.Text}</span> {/* /!\ l'espace au début du span est important */}
        </span>;
    }
}