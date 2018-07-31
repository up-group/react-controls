import * as React from "react"
import { style } from "typestyle"

import { isNullOrUndef, stringIsNullOrEmpty, getFontClassName, numberIsNullOrUndef } from "../../../Common/utils/helpers";
import { IconInfos, IconSuccess, IconError, IconChevron, DirectionEnum } from "../../Display/Icons/Icons";


interface ColorSet {
    ValueDefault: string;
    Value: string;
    Placeholder: string;
    BorderDefault: string;
    Border: string;
    BorderFocus: string;
    Label: string;
    Chevron: string;
}


export enum PosIconEnum {
    Gauche = 0,
    Droite = 1,
}

export enum InputTypeEnum {
    Text = 0,
    Password = 1,
    ComboBox = 2,
    Number = 3,
}

export interface TextInputProps {
    Value?: string;
    Placeholder?: string;
    Disable?: boolean;
    Label?: string;
    Icon?: JSX.Element;
    IconPos?: PosIconEnum;
    InformationText?: string;
    SuccessText?: string;
    ErrorText?: string;
    Width?: string;
    Require?: boolean;
    ReadOnly?: boolean;
    InitialState?: boolean;
    Type?: InputTypeEnum;
    ComboItems?: string[];
    ComboItemSelectIdx?: number;
    Validate?: (value: string) => boolean;
    onChange?: (value: string) => void;
    onFocus?: (event) => void;
    onBlur?: (event) => void;
    onKeyDown?: (event, isAbort?: boolean) => void;
    onComboItemSelect?: (idx: number) => void;
}

export interface TextInputState {
    Success?: boolean;
    Value: string;
    TextCanChange: boolean;
    IconAGauche: boolean;
    ComboOuverte: boolean;
}

export default class TextInput extends React.Component<TextInputProps, TextInputState> {
    constructor(p, c) {
        super(p, c);   

        var ValueIdxInvalide: boolean = numberIsNullOrUndef(this.props.ComboItemSelectIdx) || this.props.ComboItemSelectIdx < 0
            || isNullOrUndef(this.props.ComboItems) || this.props.ComboItemSelectIdx >= this.props.ComboItems.length;

        var valeur: string = this.props.Type === InputTypeEnum.ComboBox && ValueIdxInvalide === false ? 
            this.props.ComboItems[this.props.ComboItemSelectIdx] : 
            this.props.Value;
        if (this.props.Type === InputTypeEnum.Number) {
            if (stringIsNullOrEmpty(valeur) || numberIsNullOrUndef(Number(valeur))) {
                valeur = "";
            }
        }

        this.state = {
            Success: isNullOrUndef(this.props.InitialState) ? null : this.props.InitialState,
            Value: valeur,
            TextCanChange: this.props.Type !== InputTypeEnum.ComboBox && this.props.ReadOnly !== true,
            IconAGauche: this.props.Type === InputTypeEnum.ComboBox || this.props.Type === InputTypeEnum.Number ? true : 
                isNullOrUndef(this.props.IconPos) || this.props.IconPos === PosIconEnum.Gauche,
            ComboOuverte: false,
        };
    }

    private get Colors(): ColorSet {
        var valueDefault: string = "#354052";
        var value: string = valueDefault;
        var borderDefault: string = "#979797";
        var border: string = borderDefault;
        var borderFocus: string = "#f59100";
        var placeholder: string = "#4e5b59";
        var label: string = "#7f8fa4";
        var chevron: string = "#f59100";

        if (this.props.Disable) {
            value = "#b3b3b3";
            border = "#dcdcdc";
            borderFocus = border;
            chevron = value;
        } else if (this.state.Success != null) {
            if (this.state.Success) {
                border = "#05c591";
            } else {
                value = "#c50e1f";
                border = value;
                placeholder = value;
            }
        }

        return { 
            ValueDefault: valueDefault, 
            Value: value, 
            Placeholder: placeholder, 
            BorderDefault: borderDefault, 
            Border: border, 
            BorderFocus: borderFocus, 
            Label: label, 
            Chevron: chevron, 
        };
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
        if (this.props.Type === InputTypeEnum.Number) {
            if (numberIsNullOrUndef(Number(event.target.value))) {
                event.preventDefault();
                return false;
            }
        }

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
    private onKeyDown = (event) => {
        var abort: boolean = false;
        if (this.state.TextCanChange === false) {
            event.preventDefault();
            abort = true;
        }
        this.props.onKeyDown(event, abort);
    }

    private onChevronClick = (event) => {
        if (this.props.Type === InputTypeEnum.ComboBox) {
            this.setState({ ComboOuverte: true, });
        } else {
            var valeur: number = stringIsNullOrEmpty(this.state.Value) ? 0 : Number(this.state.Value);
            this.setState({ Value: (valeur - 1).toString(), });
        }
    }
    private onChevron2Click = (event) => {
        var valeur: number = stringIsNullOrEmpty(this.state.Value) ? 0 : Number(this.state.Value);
        this.setState({ Value: (valeur + 1).toString(), });
    }
    private onChevronBlur = (event) => {
        if (this.props.Type === InputTypeEnum.ComboBox) {
            this.setState({ ComboOuverte: false, });
        }
    }
    private onComboItemClick = (idx: number) => {
        this.setState({ Value: this.props.ComboItems[idx], });

        if ( ! isNullOrUndef(this.props.onComboItemSelect)) {
            this.props.onComboItemSelect(idx);
        }
    }

    render() {
        var chevronPresent: boolean = this.props.Type === InputTypeEnum.ComboBox || this.props.Type === InputTypeEnum.Number;
        var chevron2Present: boolean = this.props.Type === InputTypeEnum.Number;
        var droiteChevron: number = this.props.Type === InputTypeEnum.ComboBox ? 8 : 2;

        var styleG = style({
            width: isNullOrUndef(this.props.Width) ? "250px" : this.props.Width,
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
        });
        var styleLabel = getFontClassName({ color: this.Colors.Label, fontSize: "14px", });
        var styleRequire = getFontClassName({ color: "red", fontSize: "14px", lineHeight: 1.36, }) + " " + style({
            position: "absolute",
            top: 0,
            right: 0,
        });
        var styleFontInput = getFontClassName({ color: this.Colors.Value, fontSize: "14px", lineHeight: 1.36, });
        var styleInputContainer = style({
            position: "relative",
            width: "100%",
            display: "inline-block",
            $nest: {                
                "& *:focus": {
                    outline: "none",
                },
            },
        });
        var styleInput = style({
            width: "100%",
            border: "none",
            borderBottom: "1px solid " + this.Colors.Border,
            paddingBottom: "6px",
            boxSizing: "border-box",
            paddingLeft: (this.state.IconAGauche && isNullOrUndef(this.props.Icon) === false ? 20 : 0).toString() + "px",
            paddingRight: ((this.state.IconAGauche && (chevronPresent === false) ? 8 : 28) + (this.props.Require ? 6 : 0)).toString() + "px",
            backgroundColor: "inherit",
            $nest: {
                "&:hover": {
                    borderBottomColor: this.Colors.BorderFocus,
                },
                "&:focus": {
                    borderBottomColor: this.Colors.BorderFocus,
                },
                "&::placeholder": {
                    color: this.Colors.Placeholder,
                }
            },
        });
        var styleIcon = style({
            position: "absolute",
            top: 0,
            left: this.state.IconAGauche ? "0px" : "",
            right: this.state.IconAGauche ? "" : (this.props.Require ? "14px" : "8px"),
        });
        var styleChevron = style({
            position: "absolute",
            top: this.props.Type === InputTypeEnum.Number ? "40%" : "20%",
            right: (droiteChevron + (this.props.Require ? 6 : 0)).toString() + "px",
        });
        var styleChevron2 = style({
            position: "absolute",
            top: "0",
            right: (droiteChevron + (this.props.Require ? 6 : 0)).toString() + "px",
        });
        var styleIconInfos = style({
            opacity: 0.5,
        });
        var styleFontInfos = getFontClassName({ color: this.Colors.Value, fontSize: "12px", lineHeight: 1.58, }) + " " + style({
            opacity: 0.5,
        });
        var styleFontInfosSuc = getFontClassName({ color: this.Colors.Border, fontSize: "12px", lineHeight: 1.58, });
        var styleSousLabel = style({
            width: "100%",
        });
        var styleCombo = getFontClassName({ color: this.Colors.ValueDefault, fontSize: "14px", lineHeight: 1.36, }) + " " + style({
            position: "absolute",
            top: "100%",
            right: 0,
            left: 0,
            maxHeight: "250px",
            overflow: "auto",
            padding: "10px 10px 0px",
            zIndex: 9998,
            backgroundColor: "#ffffff",
            borderRadius: "0 0 4px 4px",
            border: "1px solid " + this.Colors.BorderDefault,
            borderTop: "none",
        });

        var type = this.props.Type === InputTypeEnum.Password ? "password" : "";
        
        var texteSup: JSX.Element = null;
        if (this.state.Success === null) {
            if ( ! stringIsNullOrEmpty(this.props.InformationText)) {
                texteSup = <IconInfos Color={this.Colors.Value} BackgroundColor="" IconSize="16px" className={styleIconInfos} >
                    <span className={styleFontInfos + " " + styleSousLabel} > {this.props.InformationText}</span>
                </IconInfos>
            }
        } else if (this.state.Success) {
            if ( ! stringIsNullOrEmpty(this.props.SuccessText)) {
                texteSup = <IconSuccess Color={this.Colors.Border} BackgroundColor="" IconSize="16px" >
                    <span className={styleFontInfosSuc + " " + styleSousLabel} > {this.props.SuccessText}</span>
                </IconSuccess>
            }
        } else {
            if ( ! stringIsNullOrEmpty(this.props.ErrorText)) {
                texteSup = <IconError Color={this.Colors.Border} BackgroundColor="" IconSize="16px" >
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
            
            <span className={styleFontInput + " " + styleInputContainer} >
                { this.props.Require ? <span className={styleRequire} >*</span> : null }

                { isNullOrUndef(this.props.Icon) ? null : 
                    <span className={styleIcon} >{this.props.Icon}</span>
                }
                { chevronPresent === false ? null :
                    <IconChevron Direction={DirectionEnum.Bas} Color={this.Colors.Chevron} IconSize="14px" BackgroundColor=""
                            onClick={this.props.Disable ? null : this.onChevronClick} onBlur={this.onChevronBlur} 
                            tabIndex={-1} className={styleChevron} />
                }
                { chevron2Present === false ? null : 
                    <IconChevron Direction={DirectionEnum.Haut} Color={this.Colors.Chevron} IconSize="14px" BackgroundColor=""
                            onClick={this.props.Disable ? null : this.onChevron2Click} className={styleChevron2} />
                }

                <input className={styleFontInput + " " + styleInput} onBlur={this.onBlur} onChange={this.onChange} 
                    value={this.state.Value} placeholder={this.props.Placeholder} disabled={this.props.Disable} type={type}
                    onFocus={this.props.onFocus} onKeyDown={this.onKeyDown} />

                { this.state.ComboOuverte === false ? null :
                    <span className={styleCombo} >                    
                        { isNullOrUndef(this.props.ComboItems) ? null :
                            this.props.ComboItems.map((value: string, idx: number): JSX.Element => {
                                return <p key={idx} onMouseDown={() => this.onComboItemClick(idx)} >{value}</p>
                            }) 
                        }
                    </span>
                }
            </span>

            {texteSup}
        </span>;
    }
}