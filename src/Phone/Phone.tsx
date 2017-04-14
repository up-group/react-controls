import * as React from 'react';
import Input, {Props as StyleProps} from '../Input/';

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
        var patternErrorMessage = "Doit être un téléphone";

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
