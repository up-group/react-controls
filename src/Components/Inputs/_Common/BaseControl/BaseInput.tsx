// Imports
import * as React from 'react'
import { InputBaseComponent } from './BaseControl'
import { InputBaseProps } from './BaseControl'
import { InputStyled} from '../Styled/Input/BaseInput'
import { IconName } from '../../../../Common/theming/types'

// Exports
export type WidthSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'fill';
export type HeightSize = 'normal' | 'large';

export interface CommonInputTextProps extends InputBaseProps<string> {
    placeholder?: string;
    height?: HeightSize;
    width?: WidthSize;
    iconName?:IconName;
}

export class InputTextComponent extends InputBaseComponent<CommonInputTextProps, string> {
    public static defaultProps: CommonInputTextProps = {
    };

    constructor(p, c) {
        super(p, c);
    }

    onChange(event: any) {
        return event.target.value;
    }

    renderControl() {
        const {onChange, ...others} = this.props ;
        return <InputStyled hasError={this.hasError()} onChange={this.handleChangeEvent} {...others} />
    }
}