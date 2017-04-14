import * as React from 'react';
import {Props as StyleProps} from '../Input/';
import {InputStyled} from '../Input/styles';

import { BaseControl } from '../BaseControl/BaseControl';
import TypeStringControl from '../Validation/TypeStringControl';

import { WidthSize, HeightSize, InputType } from '../Input/types';

export interface Props extends StyleProps {
    isNullable?: boolean;
    color?: string;
    backgroundColor?: string;
    width?: WidthSize;
    height?: HeightSize;
    borderColor?: string;
    iconName?:string;
    placeholder?:string;
}

export default class Email extends BaseControl<Props, string> {
    public static defaultProps: Props = {
        color: '#000000',
        backgroundColor: '#ffffff',
        borderColor: '#732419',
        hasError: false
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
        return (
            <InputStyled
                type="email"
                iconName={this.props.iconName}
                style={this.props.style}
                borderColor={this.props.borderColor}
                onClick={this.props.onClick}
                color={this.props.color}
                backgroundColor={this.props.backgroundColor}
                width={this.props.width}
                height={this.props.height}
                readOnly={this.props.readOnly}
                hasError={this.hasError()}
                disabled={this.props.disabled}
                onChange={this.handleChangeEvent}>
                    {this.props.children}
            </InputStyled>
        );
    }
}
