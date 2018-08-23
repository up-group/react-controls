import * as React from "react";
import { style } from "typestyle"

import { getFontClassName, isNullOrUndef } from "../../../Common/utils/helpers";
import { IconCheckBox_Check, IconCheckBox_Empty } from "../../Display/Icons/Icons";


export interface CheckboxProps {
    Text: string;
    Check: boolean;
    Disable?: boolean;
    onChange?: (check: boolean) => void;
    onKeyDown?: (event) => void;
}

export interface CheckboxState {
    Check: boolean;
    Focus: boolean;
}

export default class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
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
            this.onClick(!this.state.Check);
            event.preventDefault();
        }
        if ( ! isNullOrUndef(this.props.onKeyDown)) {
            this.props.onKeyDown(event);
        }
    }
    private onClick = (event) => {
        if (this.props.Disable) {
            return ;
        }
        this.setState({ Check: !this.state.Check, }, () => {
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

    // utilisé pour la gestion du focus dans CheckboxGroup
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
        var couleurCheck: string = this.state.Check && !this.props.Disable ? "#f59100" : "#d7d7d7";

        var styleG = getFontClassName({ fontSize: "14px", color: "#4e5b59", }) + " " + style({
            cursor: this.props.Disable ? "auto" : "pointer",
            opacity: this.props.Disable ? 0.5 : 1,
            textDecoration: this.state.Focus && !this.props.Disable ? "underline #f59100" : "none",
            $nest: {
                "& > span": {
                    verticalAlign: "middle",
                },
            },
        });
        var styleFocus = style({
            $nest: {
                "&:focus": {
                    outline: "none",
                },
            },
        });

        var result: JSX.Element = <span className={styleG} > {this.props.Text}</span>; // /!\ l'espace au début du span est important

        if (this.state.Check) {
            result = <IconCheckBox_Check Color={couleurCheck} IconSize="16px" onClick={this.onClick} >
                {result}
            </IconCheckBox_Check>;
        } else {
            result = <IconCheckBox_Empty Color={couleurCheck} IconSize="16px" onClick={this.onClick} >
                {result}
            </IconCheckBox_Empty>;
        }

        return <span className={styleFocus} tabIndex={this.props.Disable ? null : 0} 
                onFocus={this.onFocus} onBlur={this.onBlur} onKeyDown={this.onKeyDown} ref={(c) => { this.ref = c; }} >
            {result}
        </span>;
    }
}