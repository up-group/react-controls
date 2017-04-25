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
    hasError?:boolean;
    maxLength?:number;
}

export interface CommonInputTextWithIconProps extends CommonInputTextProps {
    iconName?:IconName;
}

export class InputTextComponent extends InputBaseComponent<CommonInputTextWithIconProps, string> {
    public static defaultProps: CommonInputTextWithIconProps = {
    };

    constructor(p, c) {
        super(p, c);
        this.state = {
            value : p.value
        };
    }

    onChange(event: any) {
        return event.target.value;
    }

    componentWillReceiveProps(nextProps: CommonInputTextWithIconProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({value: nextProps.value });
        }
    }

    renderControl() {
        const {onChange, value, ...others} = this.props ;
        
        return <InputStyled 
            value={this.state.value}
            hasError={this.hasError()} onChange={this.handleChangeEvent} {...others} />
    }
}