import * as React from 'react';
import {Props as StyleProps} from '../Input/';
import {InputStyled} from '../Input/styles';

import { BaseControl } from '../BaseControl/BaseControl';
import TypeStringControl from '../Validation/TypeStringControl';

import { WidthSize, HeightSize } from '../Input/types';

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

export default class Phone extends BaseControl<Props, string> {
    public static defaultProps: Props = {
        color: '#000000',
        backgroundColor: '#ffffff',
        borderColor: '#732419',
        hasError: false
    };

    constructor(p, c) {
        super(p, c);

        var pattern = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/
        var patternErrorMessage = "Doit être un numéro de téléphone";

        this._validationManager.addControl(new TypeStringControl(pattern, patternErrorMessage));
    }

    onChange(event: any) {
        return event.target.value;
    }

    renderControl() {
        return (
            <InputStyled
                type="text"
                iconName={this.props.iconName}
                style={this.props.style}
                borderColor={this.props.borderColor}
                onClick={this.props.onClick}
                color={this.props.color}
                backgroundColor={this.props.backgroundColor}
                width={this.props.width}
                hasError={this.hasError()}
                height={this.props.height}
                readOnly={this.props.readOnly}
                disabled={this.props.disabled}
                onChange={this.handleChangeEvent}>
                {this.props.children}
            </InputStyled>
        );
    }
}
