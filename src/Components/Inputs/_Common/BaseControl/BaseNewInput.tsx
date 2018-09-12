import { DetailedHTMLProps, InputHTMLAttributes, DetailedHTMLFactory } from "react"
import * as React from "react"
import { style } from "typestyle"

import { isNullOrUndef, stringIsNullOrEmpty, getFontClassName, numberIsNullOrUndef, arrayIsNullOrEmpty } from "../../../../Common/utils/helpers";
import { IconInfos, IconSuccess, IconError, IconChevron, DirectionEnum } from "../../../Display/Icons/Icons";


export interface ValidationReturn {
    ok: boolean;
    specificMessage?: string;
}

export interface ColorSet {
    ValueDefault: string;
    Value: string;
    Placeholder: string;
    BorderDefault: string;
    Border: string;
    BorderFocus: string;
    Label: string;
    Chevron: string;
}

export function GetFinanceurColors(disable: boolean, success: boolean): ColorSet {
    var valueDefault: string = "#354052";
    var value: string = valueDefault;
    var borderDefault: string = "#979797";
    var border: string = borderDefault;
    var borderFocus: string = "#f59100";
    var placeholder: string = valueDefault;
    var label: string = "#7f8fa4";
    var chevron: string = "#f59100";

    if (disable) {
        value = "#b3b3b3";
        border = "#dcdcdc";
        borderFocus = border;
        chevron = value;
    } else if (success != null) {
        if (success) {
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

export enum PosIconEnum {
    Gauche = 0,
    Droite = 1,
}

//export enum InputTypeEnum {
//    Text = 0,
//    Password = 1,
//    ComboBox = 2,
//    Number = 3,
//}





export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    //Value?: string;
    //Placeholder?: string;
    //Disable?: boolean;
    //Label?: string;
    //Require?: boolean;
    //ReadOnly?: boolean;
    //AutoFocus?: boolean;

    //Type?: InputTypeEnum;
    //type?: "button" | "checkbox" | "color" | "date" | "datetime" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    type?: "combo"/*switch to other*/ | "email" | "number" | "password" | "tel" | "text" | string;
    label?: string;



    //onChange?: (value: string) => void;
    //onFocus?: (event) => void;
    //onBlur?: (event) => void;
    //onKeyDown?: (event, isAbort?: boolean) => void;

    Icon?: JSX.Element;
    IconPos?: PosIconEnum;


    //InitialState?: boolean;
    InformationText?: string;
    SuccessText?: string;
    ErrorText?: string;


    //Width?: string;


    Validate?: (value: string | string[] | number) => ValidationReturn;
    onChangeValue?: (value: string | string[] | number) => void;


    //number
    //NumberMax?: number;
    //NumberMin?: number;

    //combo
    onComboItemSelect?: (idx: number) => void;
    ComboItems?: string[];
    ComboItemSelectIdx?: number;

}

export interface TextInputState {
    Success?: boolean;
    Value: string;
    TextCanChange: boolean;
    IconAGauche: boolean;
    ComboOuverte: boolean;
    SpecificMessage: string;
}


export default class BaseNewInput extends React.Component<TextInputProps, TextInputState> {
    private control: any;

    constructor(p, c) {
        super(p, c);

        var ValueIdxInvalide: boolean = numberIsNullOrUndef(this.props.ComboItemSelectIdx) || this.props.ComboItemSelectIdx < 0
            || isNullOrUndef(this.props.ComboItems) || this.props.ComboItemSelectIdx >= this.props.ComboItems.length;

        var valeur: string = this.props.type === "combo" && ValueIdxInvalide === false
            ?
            this.props.ComboItems[this.props.ComboItemSelectIdx]
            :
            this.props.value as string;
        ////////////////////////////// change => as string

        if (this.props.type === "number") {
            if (stringIsNullOrEmpty(String(valeur)) || numberIsNullOrUndef(Number(valeur))) {
                valeur = "";
            } else if (isNullOrUndef(this.props.max) === false && this.props.max < Number(valeur)) {
                valeur = this.props.max.toString();
            } else if (isNullOrUndef(this.props.min) === false && this.props.min > Number(valeur)) {
                valeur = this.props.min.toString();
            }
        }

        var validationResult = this.props.Validate != undefined ? this.props.Validate(this.props.value) : null;


        this.state = {
            Success: isNullOrUndef(validationResult) ? null : validationResult.ok,
            Value: valeur,
            TextCanChange: this.props.type !== "combo" && this.props.readOnly !== true,
            IconAGauche: this.props.type === "combo" || this.props.type === "number" ? true :
                isNullOrUndef(this.props.IconPos) || this.props.IconPos === PosIconEnum.Gauche,
            ComboOuverte: false,
            SpecificMessage: null,
        };
    }

    private processValidation = (value: string) => {
        var validation: ValidationReturn = isNullOrUndef(this.props.Validate) ? null : this.props.Validate(value);

        if (isNullOrUndef(validation) || isNullOrUndef(validation.ok)) {
            this.setState({ Value: value, Success: null, SpecificMessage: null, });
        } else {
            this.setState({ Value: value, Success: validation.ok, SpecificMessage: validation.specificMessage, });
        }
    }

    private doNumberDown = () => {
        if (this.props.readOnly || this.props.disabled) {
            return;
        }

        var saveOldValue: string = this.state.Value;
        var valeur: number = stringIsNullOrEmpty(this.state.Value) ? -1 : (Number(this.state.Value) - 1);
        if (isNullOrUndef(this.props.max) === false && this.props.max < Number(valeur)) {
            valeur = Number(this.props.max);
        } else if (isNullOrUndef(this.props.min) === false && this.props.min > Number(valeur)) {
            valeur = Number(this.props.min);
        }
        this.processValidation(valeur.toString());
        if ((!isNullOrUndef(this.props.onChange)) && saveOldValue !== valeur.toString()) {
            this.props.onChangeValue(valeur.toString());
        }
    }
    private doNumberUp = () => {
        if (this.props.readOnly || this.props.disabled) {
            return;
        }

        var saveOldValue: string = this.state.Value;
        var valeur: number = stringIsNullOrEmpty(this.state.Value) ? 1 : (Number(this.state.Value) + 1);
        if (isNullOrUndef(this.props.max) === false && this.props.max < Number(valeur)) {
            valeur = Number(this.props.max);
        } else if (isNullOrUndef(this.props.min) === false && this.props.min > Number(valeur)) {
            valeur = Number(this.props.min);
        }
        this.processValidation(valeur.toString());
        if ((!isNullOrUndef(this.props.onChange)) && saveOldValue !== valeur.toString()) {
            this.props.onChangeValue(valeur.toString());
        }
    }

    private onBlur = (event) => {
        this.processValidation(event.target.value);

        if (!isNullOrUndef(this.props.onBlur)) {
            this.props.onBlur(event);
        }
    }
    private onChange = (event) => {
        if (this.props.onChange) {
            this.props.onChange(event);
        }

        if (this.props.type === "number") {
            if (numberIsNullOrUndef(Number(event.target.value))
                || Number(event.target.value) < this.props.min || Number(event.target.value) > this.props.max) {
                event.preventDefault();
                return false;
            }
        }

        var saveOldValue: string = this.state.Value;
        this.processValidation(event.target.value);

        if ((!isNullOrUndef(this.props.onChange)) && saveOldValue !== event.target.value) {
            this.props.onChange(event.target.value);
        }
    }
    private onKeyDown = (event) => {
        var abort: boolean = false;

        if (!this.props.disabled && !this.props.readOnly) {
            if (this.props.type === "combo" && !arrayIsNullOrEmpty(this.props.ComboItems)) {
                if (event.keyCode === 38) { // fleche haut
                    var current: number = this.props.ComboItems.indexOf(this.state.Value);
                    if (current > 0) {
                        this.onComboItemClick(current - 1);
                        abort = true;
                    }
                } else if (event.keyCode === 40) { // fleche bas
                    var current: number = this.props.ComboItems.indexOf(this.state.Value);
                    if (current < this.props.ComboItems.length - 1) {
                        this.onComboItemClick(current + 1);
                        abort = true;
                    }
                }
            } else if (this.props.type === "number") {
                if (event.keyCode === 38) { // fleche haut
                    this.doNumberUp();
                    abort = true;
                } else if (event.keyCode === 40) { // fleche bas
                    this.doNumberDown();
                    abort = true;
                }
            }
        }
        if (abort) {
            event.preventDefault();
            return;
        }

        if (!this.state.TextCanChange) {
            if (event.keyCode === 9 || (event.keyCode >= 112 && event.keyCode <= 123)) {
                // tabulation ou F1-F12 => on laisse passer
            } else {
                event.preventDefault();
                abort = true;
            }
        }

        if (!isNullOrUndef(this.props.onKeyDown)) {
            this.props.onKeyDown(event); //, abort);
        }
    }

    private onChevronClick = (event) => {
        if (this.props.type === "combo") {
            this.setState({ ComboOuverte: true, });
        } else { // type=number
            this.doNumberDown();
        }
    }
    private onChevron2Click = (event) => {
        this.doNumberUp();
    }
    private onChevronBlur = (event) => {
        if (this.props.type === "combo") {
            this.setState({ ComboOuverte: false, });
        }
    }
    private onComboItemClick = (idx: number) => {
        var saveOldValue: string = this.state.Value;
        this.processValidation(this.props.ComboItems[idx]);

        if (!isNullOrUndef(this.props.onComboItemSelect)) {
            this.props.onComboItemSelect(idx);
        }
        if ((!isNullOrUndef(this.props.onChange)) && saveOldValue !== this.props.ComboItems[idx]) {
            this.props.onChangeValue(this.props.ComboItems[idx]);
        }
    }

    public focus = () => {
        if (!this.props.disabled) {
            this.control.focus();
        }
    }

    componentWillReceiveProps(nextProps: TextInputProps) {
        if (nextProps.value !== this.props.value && nextProps.value !== this.state.Value) {
            switch (nextProps.type) {
                case "combo":
                    break;
                case "number":
                    var valeur = nextProps.value as string;//////////////////////////////////////
                    if (stringIsNullOrEmpty(valeur) || numberIsNullOrUndef(Number(valeur))) {
                        valeur = "";
                    } else if (isNullOrUndef(this.props.max) === false && this.props.max < Number(valeur)) {
                        valeur = this.props.max.toString();
                    } else if (isNullOrUndef(this.props.min) === false && this.props.min > Number(valeur)) {
                        valeur = this.props.min.toString();
                    }
                    this.setState({ Value: valeur, Success: null, SpecificMessage: null, });
                    break;
                default:
                    this.setState({ Value: nextProps.value as string, Success: null, SpecificMessage: null, });
                    break;
            }
        }
        //if (nextProps.InitialState !== this.props.InitialState && nextProps.InitialState !== this.state.Success) {
        //    this.setState({ Success: isNullOrUndef(nextProps.InitialState) ? null : nextProps.InitialState, });
        //}
    }

    componentDidMount() {
        if (this.control) {
            this.control.addEventListener('keydown', this.onKeyDown);
        }
    }
    componentWillUnmount() {
        if (this.control) {
            this.control.removeEventListener('keydown', this.onKeyDown);
        }
    }

    render() {
        var chevronPresent: boolean = this.props.type === "combo" || this.props.type === "number";
        var chevron2Present: boolean = this.props.type === "number";
        var droiteChevron: number = this.props.type === "combo" ? 8 : 2;

        var couleurs: ColorSet = GetFinanceurColors(this.props.disabled, this.state.Success);

        var styleG = style({
            width: isNullOrUndef(this.props.width) ? "250px" : this.props.width,
            //width: "250px",
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            textAlign: "left",
        });
        var styleLabel = getFontClassName({ color: couleurs.Label, fontSize: "14px", });
        var styleRequire = getFontClassName({ color: "red", fontSize: "14px", lineHeight: 1.36, }) + " " + style({
            position: "absolute",
            top: 0,
            right: 0,
        });
        var styleFontInput = getFontClassName({ color: couleurs.Value, fontSize: "14px", lineHeight: 1.36, });
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
            borderBottom: "1px solid " + couleurs.Border,
            paddingBottom: "6px",
            boxSizing: "border-box",
            paddingLeft: (this.state.IconAGauche && isNullOrUndef(this.props.Icon) === false ? 20 : 0).toString() + "px",
            paddingRight: ((this.state.IconAGauche && (chevronPresent === false) ? 8 : 28) + (this.props.required ? 6 : 0)).toString() + "px",
            backgroundColor: "inherit",
            $nest: {
                "&:hover": {
                    borderBottomColor: couleurs.BorderFocus,
                },
                "&:focus": {
                    borderBottomColor: couleurs.BorderFocus,
                },
                "&::placeholder": {
                    color: couleurs.Placeholder,
                    opacity: 0.5,
                }
            },
        });
        var styleIcon = style({
            position: "absolute",
            top: 0,
            left: this.state.IconAGauche ? "0px" : "",
            right: this.state.IconAGauche ? "" : (this.props.required ? "14px" : "8px"),
        });
        var styleChevron = style({
            position: "absolute",
            top: this.props.type === "number" ? "40%" : "20%",
            right: (droiteChevron + (this.props.required ? 6 : 0)).toString() + "px",
        });
        var styleChevron2 = style({
            position: "absolute",
            top: "0",
            right: (droiteChevron + (this.props.required ? 6 : 0)).toString() + "px",
        });
        var styleIconInfos = style({
            opacity: this.state.Success === false ? 1 : 0.5,
        });
        var styleFontInfos = getFontClassName({ color: couleurs.Value, fontSize: "12px", lineHeight: 1.58, }) + " " + style({
            opacity: this.state.Success === false ? 1 : 0.5,
        });
        var styleFontInfosSuc = getFontClassName({ color: couleurs.Border, fontSize: "12px", lineHeight: 1.58, });
        var styleSousLabel = style({
            textAlign: "justify",
            display: "inline-block",
            width: "100%",
        });
        var styleCombo = style({
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
            border: "1px solid " + couleurs.BorderDefault,
            borderTop: "none",
        });
        var styleLigneCombo = getFontClassName({ color: couleurs.ValueDefault, fontSize: "14px", lineHeight: 1.36, }) + " " + style({
            minHeight: "19px",
            cursor: "pointer",
        });


        var texteSup: JSX.Element = null;
        if (this.state.Success) {
            var texteSupStr: string = stringIsNullOrEmpty(this.state.SpecificMessage) ?
                stringIsNullOrEmpty(this.props.SuccessText) ? "" : this.props.SuccessText :
                this.state.SpecificMessage;
            if (texteSupStr != "") {
                texteSup = <IconSuccess Color={couleurs.Border} BackgroundColor="" IconSize="16px" >
                    <span className={styleFontInfosSuc} > {texteSupStr}</span>
                </IconSuccess>;
            }
        } else if (this.state.Success !== null) {
            var texteSupStr: string = stringIsNullOrEmpty(this.state.SpecificMessage) ?
                stringIsNullOrEmpty(this.props.ErrorText) ? "" : this.props.ErrorText :
                this.state.SpecificMessage;
            if (texteSupStr != "") {
                texteSup = <IconError Color={couleurs.Border} BackgroundColor="" IconSize="16px" >
                    <span className={styleFontInfosSuc} > {texteSupStr}</span>
                </IconError>;
            }
        }
        if (texteSup === null && !stringIsNullOrEmpty(this.props.InformationText)) {
            texteSup = <IconInfos Color={couleurs.Value} BackgroundColor="" IconSize="16px" className={styleIconInfos} >
                <span className={styleFontInfos} > {this.props.InformationText}</span>
            </IconInfos>;
        }

        var typeText = this.props.type === "password" ? "password" : "text";

        var {
            type,
            Icon,
            IconPos,
            InformationText,
            SuccessText,
            ErrorText,
            Validate,
            onChangeValue,
            onComboItemSelect,
            ComboItems,
            ComboItemSelectIdx,

            onChange,// <= a voir
            ...rest
        } = this.props;

        return <span className={styleG} >
            {stringIsNullOrEmpty(this.props.label) ? null :
                <span className={styleLabel} >
                    {this.props.label}
                    <br />
                </span>
            }

            <span className={styleFontInput + " " + styleInputContainer} >
                {this.props.required ? <span className={styleRequire} >*</span> : null}

                {isNullOrUndef(this.props.Icon) ? null :
                    <span className={styleIcon} >{this.props.Icon}</span>
                }
                {chevronPresent === false ? null :
                    <IconChevron Direction={DirectionEnum.Bas} Color={couleurs.Chevron} IconSize="14px" BackgroundColor=""
                        onClick={this.props.disabled ? null : this.onChevronClick} onBlur={this.onChevronBlur}
                        tabIndex={-1} className={styleChevron} />
                }
                {chevron2Present === false ? null :
                    <IconChevron Direction={DirectionEnum.Haut} Color={couleurs.Chevron} IconSize="14px" BackgroundColor=""
                        onClick={this.props.disabled ? null : this.onChevron2Click} className={styleChevron2} />
                }

                <input
                    type={typeText}
                    className={styleFontInput + " " + styleInput}
                    //disabled={this.props.disabled}                    //autoFocus={this.props.autoFocus}                    value={isNullOrUndef(this.state.Value) ? "" : this.state.Value}
                    placeholder={this.props.placeholder}
                    onFocus={this.props.onFocus}
                    //onKeyDown={this.onKeyDown}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    {...rest}
                    ref={(c) => { this.control = c; }}
                />

                {this.state.ComboOuverte === false ? null :
                    <span className={styleCombo} >
                        {isNullOrUndef(this.props.ComboItems) ? null :
                            this.props.ComboItems.map((value: string, idx: number): JSX.Element => {
                                return <p key={idx} onMouseDown={() => this.onComboItemClick(idx)} className={styleLigneCombo} tabIndex={-1} >
                                    {stringIsNullOrEmpty(value) ? "..." : value}
                                </p>
                            })
                        }
                    </span>
                }
            </span>

            <span className={styleSousLabel} >{texteSup}</span>
        </span>;
    }
}