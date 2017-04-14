import * as React from 'react';
import { TextInputComponent, StyleProps } from '../Styled/Input/styles';

import { BaseControl } from '../BaseControl/BaseControl';
import TypeStringControl from '../Validation/TypeStringControl';



export interface Props extends StyleProps {
    isNullable?: boolean;
}


export default class Phone extends BaseControl<Props, string> {
    public static defaultProps: Props = {
        color: '#000000',
        backgroundColor: '#ffffff',
        borderColor: '#732419',
        fontSize: 'medium',
        hasError: false

    };

    constructor(p, c) {
        super(p, c);

        var pattern = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/
        var patternErrorMessage = "Doit être un téléphone";

        this._validationManager.addControl(new TypeStringControl(pattern, patternErrorMessage));
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
