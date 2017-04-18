import * as React from 'react';
import {Props as StyleProps} from '../Input/index';
import {InputStyled} from '../Input/styles';

import { BaseControl } from '../BaseControl/BaseControl';
import TypeStringControl from '../Validation/TypeStringControl';

import { WidthSize, HeightSize, InputType } from '../Input/types';
import { CommonProps } from '../Input/index';

import {FilterProps} from '../utils/types'

export interface StyledProps extends CommonProps{
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    isNullable?: boolean;
    hasError?: boolean;
    onChange?: (data: any) => void;
    className?:string;
}

export interface Props extends CommonProps  {
    isNullable?: boolean;
}

export default class Email extends BaseControl<Props, string> {
    public static defaultProps: Props = {
    };

    public static defaultStyledProps: StyledProps = {
        color: "",
        backgroundColor: "",
        borderColor: "",
        isNullable: false,
        className:"",
        disabled: false,
        placeholder: "",
        height: "normal",
        width: "medium",
        readOnly: false
    };

    constructor(p, c) {
        super(p, c);

        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        var patternErrorMessage = "Doit être un courriel";

        this._validationManager.addControl(new TypeStringControl(pattern, patternErrorMessage));
    }

    onChange(event: any) {
        return event.target.value;
    }

    renderControl() {
        const styledProps= FilterProps(this.props, Email.defaultStyledProps) ;
        
        return (
            <InputStyled
                hasError={this.hasError()}
                {...styledProps}
                iconName="email"
                onChange={this.handleChangeEvent}
            >
            </InputStyled>
        );
    }
}
