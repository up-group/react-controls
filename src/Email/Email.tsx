import * as React from 'react';
import Input, {Props as StyleProps} from '../Input/';

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
        var patternErrorMessage = "Doit être un mail";

        this._validationManager.addControl(new TypeStringControl(pattern, patternErrorMessage));
    }

    onChange(event: any) {
        return event.target.value;
    }

    renderControl() {
        return (
            <Input
                hasError={this.state.error != null}
                type="text"
                color={this.props.color}
                value={this.props.value}
                iconName={this.props.iconName}
                width={this.props.width}
                height={this.props.height}
                backgroundColor={this.props.backgroundColor}
                onChange={this.handleChangeEvent}
            >
                {this.props.children}
            </Input>
        );
    }
}
