import Button, { ButtonProps, ButtonState } from "./Button";
import RadioGroup, { RadioGroupProps, RadioGroupState, Radio, RadioProps, RadioState } from "./RadioGroup";
import TextArea, { TextAreaProps, TextAreaState } from "./TextArea";
import TextInput, { TextInputProps, TextInputState, InputTypeEnum, PosIconEnum } from "./TextInput";


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

export {
    Button, ButtonProps, ButtonState,
    RadioGroup, RadioGroupProps, RadioGroupState, Radio, RadioProps, RadioState,
    TextArea, TextAreaProps, TextAreaState,
    TextInput, TextInputProps, TextInputState, InputTypeEnum, PosIconEnum,
}