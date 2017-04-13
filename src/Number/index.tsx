import * as React from 'react';
import { TextInputComponent, StyleProps } from '../Styled/Input/styles';

import { BaseControl } from '../BaseControl/BaseControl';
import TypeStringControl from '../Validation/TypeStringControl';
import TypeNumberControl from '../Validation/TypeNumberControl';



export interface Props extends React.HTMLProps<HTMLInputElement>, StyleProps {
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    isNullable?: boolean;
}


export default class Number extends BaseControl<Props, any> {
    public static defaultProps: Props = {
        color: '#000000',
        backgroundColor: '#ffffff',
        borderColor: '#732419',
        fontSize: 'medium'

    };

    constructor(p, c) {
        super(p, c);

        var pattern = /^[0-9]*(|\.[0-9]*)*$/
        var patternErrorMessage = "Doit être un nombre";

        this._validationManager.addControl(new TypeStringControl(pattern, patternErrorMessage));


        var min, max = null;
        if (this.props.min != null) {
            if (typeof (this.props.min) === "number") {
                min = this.props.min;
            } else {
                min = parseFloat(this.props.min);
            }
        }

        if (this.props.max != null) {
            if (typeof (this.props.max) === "number") {
                max = this.props.max;
            } else {
                max = parseFloat(this.props.max);
            }
        }

        this._validationManager.addControl(new TypeNumberControl(this.props.type == "integer", min, max));

    }

    onChange(event: any) {
        return event.target.value;
    }

    renderControl() {
        return (
            <TextInputComponent
                type="text"
                onClick={this.props.onClick}
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
