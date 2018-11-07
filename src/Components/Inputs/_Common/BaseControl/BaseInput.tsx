// Imports
import { BaseControlProps } from './BaseControl'
import { IconName } from '../../../../Common/theming/icons';

// Exports
export type WidthSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'fill';
export type HeightSize = 'normal' | 'large';

export interface CommonInputTextProps<VT> extends BaseControlProps<VT> {
    placeholder?: string;
    height?: HeightSize;
    width?: WidthSize;
    hasError?:boolean;
    maxLength?:number;
    onFocus?: (e) => void;
    onBlur?: (e) => void;
}

export interface CommonInputTextWithIconProps<VT> extends CommonInputTextProps<VT> {
    iconName?:IconName;
}