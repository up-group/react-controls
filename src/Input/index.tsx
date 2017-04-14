import * as React from 'react';
import { InputStyled } from './styles';
import { WidthSize, HeightSize, InputType } from './types';
import { BaseControl } from '../BaseControl/BaseControl';
import TypeStringControl from '../Validation/TypeStringControl';
import TypeNumberControl from '../Validation/TypeNumberControl';

//import Validator from 'validator'

export interface StyledProps extends React.HTMLProps<HTMLInputElement> {
    color?: string;
    backgroundColor?: string;
    width?: WidthSize;
    height?: HeightSize;
    borderColor?: string;
    type?: InputType;
    isNullable?: boolean;
    iconName?: string;
    hasError?: boolean;
}

export interface Props {
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
            >
                {this.props.children}
            </InputStyled>
        );
    }
}
