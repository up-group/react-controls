// Imports
import UpInput from './UpInput'
import { IconName, ThemedProps } from '../../../Common/theming/types'
import { Tooltip } from '../../Display/Tooltip'

// Exports
export type WidthSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'fill' ;
export type HeightSize = 'normal' | 'large' ;
export type InputType = 'text' | 'email' | 'number' | 'integer' | 'phone' | 'search' ;

export interface Validation {
    pattern : RegExp;
    errorMessage: string;
}

export interface UpInputStyledProps extends CommonProps {
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    type?: InputType;
    iconName?: IconName;
    hasError?: boolean;
    showError?:boolean;
    onChange?: (data: any) => void;
    className?: string;
    value:string;
    maxLength?:number;
    dataFor?:string; // Use for tooltip
}

export interface CommonProps extends ThemedProps{
    disabled?: boolean;
    placeholder?: string;
    height?: HeightSize;
    width?: WidthSize;
    readonly?: boolean;
    tooltip?: string | Tooltip;
    showError?: boolean;
}

export interface UpInputProps extends CommonProps {
    type?: InputType;
    hasError?: boolean;
    iconName?:IconName;
    value?:string;
    validation?:Array<Validation>;
    maxLength?:number;
}

export default UpInput