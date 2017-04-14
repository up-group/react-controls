import * as React from 'react';
import {Props as StyleProps} from '../Input/';
import {InputStyled} from '../Input/styles';

import { BaseControl } from '../BaseControl/BaseControl';
import TypeStringControl from '../Validation/TypeStringControl';
import TypeNumberControl from '../Validation/TypeNumberControl';

import { WidthSize, HeightSize, InputType } from '../Input/types';

export interface Props extends StyleProps {
    max?: number,
    min?: number,
    isNullable?: boolean;
    color?: string;
    backgroundColor?: string;
    width?: WidthSize;
    height?: HeightSize;
    borderColor?: string;
    iconName?:string;
    placeholder?:string;
}

export default class Integer extends BaseControl<Props, number> {
    public static defaultProps: Props = {
        color: '#000000',
        backgroundColor: '#ffffff',
        borderColor: '#732419'
    };

    constructor(p, c) {
        super(p, c);

        var pattern = /^[0-9]*$/
        var patternErrorMessage = "Doit être un nombre entier";

        this._validationManager.addControl(new TypeStringControl(pattern, patternErrorMessage));
        this._validationManager.addControl(new TypeNumberControl(true, this.props.min, this.props.max));

    }

    onChange(event: any) {
        return event.target.value;
    }

    renderControl() {
        return (
            <InputStyled
                type="number"
                iconName={this.props.iconName}
                style={this.props.style}
                borderColor={this.props.borderColor}
                onClick={this.props.onClick}
                color={this.props.color}
                backgroundColor={this.props.backgroundColor}
                width={this.props.width}
                height={this.props.height}
                hasError={this.hasError()}
                readOnly={this.props.readOnly}
                disabled={this.props.disabled}
                onChange={this.handleChangeEvent}>
                    {this.props.children}
            </InputStyled>
        );
    }
}
