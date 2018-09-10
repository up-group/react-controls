// Imports
import * as React from 'react'
import { BaseControlComponent } from './BaseControl'
import { BaseControlProps } from './BaseControl'
//import { InputStyled} from '../Styled/Input/BaseInput'
import { IconName } from '../../../../Components/Display/SvgIcon/icons'

// Exports
export type WidthSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'fill';
export type HeightSize = 'normal' | 'large';

export interface CommonInputTextProps extends BaseControlProps<string> {
    placeholder?: string;
    height?: HeightSize;
    width?: WidthSize;
    hasError?:boolean;
    maxLength?:number;
}

export interface CommonInputTextWithIconProps extends CommonInputTextProps {
    iconName?:IconName;
}
