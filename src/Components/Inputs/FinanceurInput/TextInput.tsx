import * as React from "react"
import { style } from "typestyle/lib"
import { isNullOrUndef, stringIsNullOrEmpty, getFontClassName } from "../../../Common/utils/helpers";
import { IconInformations, IconInfos, IconSuccess, IconError } from "../../Display/Icons/Icons";


export enum PosIconEnum {
    Gauche = 0,
    Droite = 1,
}

export interface ColorSet {
    Value: string;
    Placeholder: string;
    Border: string;
    BorderFocus: string;
    Label: string;
}

export interface TextInputProps {
    Value?: string;
    Placeholder?: string;
    Disable?: boolean;
    Label?: string;
    Icon?: JSX.Element;
    IconPos?: PosIconEnum;
    Password?: boolean;
    InformationText?: string;
    SuccessText?: string;
    ErrorText?: string;
    Width?: string;
    Validate?: (value: string) => boolean;
    onChange?: (value: string) => void;

    onFocus?: (event) => void;
    onBlur?: (event) => void;
    onKeyDown?: (event) => void;
}

export interface TextInputState {
    Success?: boolean;
    Value: string;
}

export default class TextInput extends React.Component<TextInputProps, TextInputState> {
    constructor(p, c) {
        super(p, c);
        this.state = {
            Success: null,
            Value: this.props.Value,
        };
    }

    private getColors = (): ColorSet => {
        var value: string = "#354052";
        var border: string = "#979797";
        var borderFocus: string = "#f59100";
        var placeholder: string = "#4e5b59";
        var label: string = "#7f8fa4";

        if (this.props.Disable) {
            value = "#b3b3b3";
            border = "#dcdcdc";
            borderFocus = border;
        } else if (this.state.Success != null) {
            if (this.state.Success) {
                border = "#05c591";
            } else {
                value = "#c50e1f";
                border = value;
                placeholder = value;
            }
        }

        return { Value: value, Placeholder: placeholder, Border: border, BorderFocus: borderFocus, Label: label, };
    }

    private processValidation = (value: string): boolean => {
        if (isNullOrUndef(this.props.Validate)) {
            return null;
        }
        return this.props.Validate(value);
    }

    private onBlur = (event) => {
        var success: boolean = this.processValidation(event.target.value);     
        this.setState({ Success: success, });

        if ( ! isNullOrUndef(this.props.onBlur)) {
            this.props.onBlur(event);
        }
    }
    private onChange = (event) => {
        var success: boolean = this.processValidation(event.target.value); 
        if (this.state.Success !== success) {
            this.setState({ Success: success, Value: event.target.value, });
        } else {
            this.setState({ Value: event.target.value, });
        }

        if ( ! isNullOrUndef(this.props.onChange)) {
            this.props.onChange(event.target.value);
        }
    }

    render() {
        var iconAGauche: boolean = isNullOrUndef(this.props.IconPos) || this.props.IconPos === PosIconEnum.Gauche;

        var styleG = style({
            width: isNullOrUndef(this.props.Width) ? "250px" : this.props.Width,
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
        });
        var styleLabel = getFontClassName({ color: this.getColors().Label, fontSize: "14px", });
        var styleFontInput = getFontClassName({ color: this.getColors().Value, fontSize: "14px", lineHeight: 1.36, });
        var styleInputContainer = style({
            position: "relative",
            width: "100%",
        });
        var styleInput = style({
            width: "100%",
            border: "none",
            borderBottom: "1px solid " + this.getColors().Border,
            paddingBottom: "6px",
            boxSizing: "border-box",
            paddingLeft: iconAGauche && isNullOrUndef(this.props.Icon) === false ? "20px" : "",
            paddingRight: iconAGauche ? "8px" : "28px",
            $nest: {
                "&:hover": {
                    borderBottomColor: this.getColors().BorderFocus,
                },
                "&:focus": {
                    borderBottomColor: this.getColors().BorderFocus,
                    outline: "none",
                },
                "&:disabled": {
                    backgroundColor: "initial",
                },
                "&::placeholder": {
                    color: this.getColors().Placeholder,
                }
            },
        });
        var styleIcon = style({
            position: "absolute",
            top: 0,
            left: iconAGauche ? "0px" : "",
            right: iconAGauche ? "" : "8px",
        });
        var styleFontInfos = getFontClassName({ color: this.getColors().Value, fontSize: "12px", lineHeight: 1.58, }) + " " + style({
            opacity: 0.5,
        });
        var styleFontInfosSuc = getFontClassName({ color: this.getColors().Border, fontSize: "12px", lineHeight: 1.58, });
        var styleSousLabel = style({
            display: "inline-block",
            width: "100%",
        });

        var type = this.props.Password ? "password" : "";
        
        var texteSup: JSX.Element = null;
        if (this.state.Success === null) {
            if ( ! stringIsNullOrEmpty(this.props.InformationText)) {
                texteSup = <IconInfos><span className={styleFontInfos + " " + styleSousLabel} > {this.props.InformationText}</span></IconInfos>
            }
        } else if (this.state.Success) {
            if ( ! stringIsNullOrEmpty(this.props.SuccessText)) {
                texteSup = <IconSuccess><span className={styleFontInfosSuc + " " + styleSousLabel} > {this.props.SuccessText}</span></IconSuccess>
            }
        } else {
            if ( ! stringIsNullOrEmpty(this.props.ErrorText)) {
                texteSup = <IconError><span className={styleFontInfosSuc + " " + styleSousLabel} > {this.props.ErrorText}</span></IconError>
            }
        }

        return <span className={styleG} >
            { stringIsNullOrEmpty(this.props.Label) ? null :
                <span className={styleLabel} >
                    {this.props.Label}
                    <br />
                </span>
            }
            
            <span className={styleFontInput + " " + styleInputContainer} >
                { isNullOrUndef(this.props.Icon) ? null : 
                    <span className={styleIcon} >{this.props.Icon}</span>
                }

                <input className={styleFontInput + " " + styleInput} onBlur={this.onBlur} onChange={this.onChange} 
                    value={this.state.Value} placeholder={this.props.Placeholder} disabled={this.props.Disable} type={type}
                    onFocus={this.props.onFocus} onKeyDown={this.props.onKeyDown} />

                {texteSup}
            </span>
        </span>;
    }
}