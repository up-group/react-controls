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
