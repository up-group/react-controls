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

export interface CommonProps {
    disabled?: boolean;
    placeholder?: string;
    height?: HeightSize;
    width?: WidthSize;
    readOnly?: boolean;
}

export interface Props extends CommonProps {
    type?: InputType;
    isNullable?: boolean;
    hasError?: boolean;
}


export default class Input extends BaseControl<Props, any> {
    public static defaultProps: Props = {
    };

    constructor(p, c) {
        super(p, c);
    }

    onChange(event: any) {
        return event.target.value;
    }

    renderControl() {
        return (
            <InputStyled
                type="text"
                onChange={this.handleChangeEvent}
            >
                {this.props.children}
            </InputStyled>
        );
    }
}
