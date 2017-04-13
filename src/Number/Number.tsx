import * as React from 'react';
import { TextInputComponent, StyleProps } from '../Styled/Input/styles';

import { BaseControl } from '../BaseControl/BaseControl';
import TypeStringControl from '../Validation/TypeStringControl';
import TypeNumberControl from '../Validation/TypeNumberControl';



export interface Props extends StyleProps {
    max?: number,
    min?: number,
    isNullable?: boolean;
}


export default class Number extends BaseControl<Props, number> {
    public static defaultProps: Props = {
        color: '#000000',
        backgroundColor: '#ffffff',
        borderColor: '#732419',
        fontSize: 'medium',
        hasError: false
    };

    constructor(p, c) {
        super(p, c);

        var pattern = /^[0-9]*(|\.[0-9]*)*$/
        var patternErrorMessage = "Doit être un nombre";

        this._validationManager.addControl(new TypeStringControl(pattern, patternErrorMessage));
        this._validationManager.addControl(new TypeNumberControl(false, this.props.min, this.props.max));

    }

onChange(event: any) {
    return event.target.value;
}

renderControl() {
    return (
        <TextInputComponent
            hasError={this.state.error != null}
            type="text"
            color={this.props.color}
            backgroundColor={this.props.backgroundColor}
            fontSize={this.props.fontSize}
            onChange={this.handleChangeEvent}
        >
            {this.props.children}
        </TextInputComponent>
    );
}
}
