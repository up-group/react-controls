import * as React from "react";
import { style } from "typestyle";

import { getFontClassName, isNullOrUndef, stringIsNullOrEmpty } from "../../../Common/utils/helpers";

import { GetFinanceurColors, ColorSet } from "./TextInput";
import { IconInfos, IconSuccess, IconError } from "../../Display/Icons/Icons";


export interface TextAreaProps {
    Value?: string;
    Placeholder?: string;
    Disable?: boolean;
    Label?: string;
    InformationText?: string;
    SuccessText?: string;
    ErrorText?: string;
    Require?: boolean;
    ReadOnly?: boolean;
    Width?: string;
    Height?: string;
    Validate?: (value: string) => boolean;
    onChange?: (value: string) => void;
    onFocus?: (event) => void;
    onBlur?: (event) => void;
    onKeyDown?: (event) => void;
}

export interface TextAreaState {
    Success: boolean;
    Text: string;
}

export default class TextArea extends React.Component<TextAreaProps, TextAreaState> {
    constructor(p, c) {
        super(p, c);
        this.state = {
            Success: null,
            Text: this.props.Value,
        };
    }

    private processValidation = (value: string): boolean => {
        if (isNullOrUndef(this.props.Validate)) {
            return null;
        }
        return this.props.Validate(value);
    }

    private onChange = (event) => {
        var success: boolean = this.processValidation(event.target.value); 
        if (this.state.Success !== success) {
            this.setState({ Success: success, Text: event.target.value, });
        } else {
            this.setState({ Text: event.target.value, });
        }

        if ( ! isNullOrUndef(this.props.onChange)) {
            this.props.onChange(event.target.value);
        }
    }
    private onBlur = (event) => {
        var success: boolean = this.processValidation(event.target.value);    
        if (this.state.Success !== success) { 
            this.setState({ Success: success, });
        }

        if ( ! isNullOrUndef(this.props.onBlur)) {
            this.props.onBlur(event);
        }
    }

    render() {
        var couleurs: ColorSet = GetFinanceurColors(this.props.Disable, this.state.Success);

        var styleG = style({
            width: isNullOrUndef(this.props.Width) ? "250px" : this.props.Width,
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
        });
        var styleLabel = getFontClassName({ color: couleurs.Label, fontSize: "14px", });
        var styleRequire = getFontClassName({ color: "red", fontSize: "14px", lineHeight: 1.36, }) + " " + style({
            position: "absolute",
            top: "2px",
            left: "4px",
        });
        var styleContainer = style({
            position: "relative",
            width: "100%",
            display: "inline-block",
        });
        var styleArea = getFontClassName({ fontSize: "14px", lineHeight: 1.36, color: couleurs.Value, }) + " " + style({
            border: "1px solid " + couleurs.Border,
            background: this.props.Disable ? "#f2f2f2" : "#ffffff",
            padding: "8px",
            boxSizing: "border-box",
            width: isNullOrUndef(this.props.Width) ? "250px" : this.props.Width,
            height: isNullOrUndef(this.props.Height) ? "95px" : this.props.Height, // par defaut : 5 lignes
            $nest: {
                "&::placeholder": {
                    color: couleurs.Placeholder,
                    opacity: this.props.Disable ? 0.25 : 0.5,
                },
                "&:focus": {
                    outline: "none",
                    borderColor: couleurs.BorderFocus,
                },
                "&:hover": {
                    borderColor: couleurs.BorderFocus,
                },
            },
        });
        var styleIconInfos = style({
            opacity: 0.5,
        });
        var styleFontInfos = getFontClassName({ color: couleurs.Value, fontSize: "12px", lineHeight: 1.58, }) + " " + style({
            opacity: 0.5,
        });
        var styleFontInfosSuc = getFontClassName({ color: couleurs.Border, fontSize: "12px", lineHeight: 1.58, });
        var styleSousLabel = style({
            width: "100%",
        });
        
        var texteSup: JSX.Element = null;
        if (this.state.Success === null) {
            if ( ! stringIsNullOrEmpty(this.props.InformationText)) {
                texteSup = <IconInfos Color={couleurs.Value} BackgroundColor="" IconSize="16px" className={styleIconInfos} >
                    <span className={styleFontInfos + " " + styleSousLabel} > {this.props.InformationText}</span>
                </IconInfos>
            }
        } else if (this.state.Success) {
            if ( ! stringIsNullOrEmpty(this.props.SuccessText)) {
                texteSup = <IconSuccess Color={couleurs.Border} BackgroundColor="" IconSize="16px" >
                    <span className={styleFontInfosSuc + " " + styleSousLabel} > {this.props.SuccessText}</span>
                </IconSuccess>
            }
        } else {
            if ( ! stringIsNullOrEmpty(this.props.ErrorText)) {
                texteSup = <IconError Color={couleurs.Border} BackgroundColor="" IconSize="16px" >
                    <span className={styleFontInfosSuc + " " + styleSousLabel} > {this.props.ErrorText}</span>
                </IconError>
            }
        }

        return <span className={styleG} >
            { stringIsNullOrEmpty(this.props.Label) ? null :
                <span className={styleLabel} >
                    {this.props.Label}
                    <br />
                </span>
            }

            <span className={styleContainer} >
                { this.props.Require ? <span className={styleRequire} >*</span> : null }
            
                <textarea className={styleArea} placeholder={this.props.Placeholder} value={this.state.Text} 
                        disabled={this.props.Disable} readOnly={this.props.ReadOnly}
                        onChange={this.onChange} onBlur={this.onBlur} onFocus={this.props.onFocus} onKeyDown={this.props.onKeyDown} />
            </span>

            {texteSup}
        </span>;
    }
}