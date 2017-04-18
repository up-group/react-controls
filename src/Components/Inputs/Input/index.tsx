import * as React from 'react';
import { InputStyled } from './styles';
import { WidthSize, HeightSize, InputType } from './types';
import { BaseControl } from "../../../Common/BaseControl/BaseControl";
import { iconName } from "../../Display/SvgIcon/types";

export interface StyledProps extends CommonProps {
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    type?: InputType;
    isNullable?: boolean;
    iconName?: iconName;
    hasError?: boolean;
    onChange?: (data: any) => void;
    className?: string;
}

export interface CommonProps /*extends ThemeProps<ThemeInterface>*/ {
    disabled?: boolean;
    placeholder?: string;
    height?: HeightSize;
    width?: WidthSize;
    readOnly?: boolean;
    type?: InputType;
}

export interface Props extends CommonProps {
    isNullable?: boolean;
    hasError?: boolean;
}


export default class Input extends BaseControl<Props, any> {
    public static defaultProps: Props = {
        //theme:null
    };
    public static defaultStyledProps: StyledProps = {
        color: "",
        backgroundColor: "",
        borderColor: "",
        isNullable: false,
        iconName: "",
        hasError: false,
        type:"text",
        className:"",
        disabled: false,
        placeholder: "",
        height: "normal",
        width: "medium",
        readOnly: false
    };
    constructor(p, c) {
        super(p, c);
    }

    onChange(event: any) {
        return event.target.value;
    }

    renderControl() {
        const styledProps= FilterProps(this.props, Input.defaultStyledProps) ;
        return (
            <InputStyled
                {...styledProps}
                onChange={this.handleChangeEvent}>
                {this.props.children}
            </InputStyled>
        );
    }
}
