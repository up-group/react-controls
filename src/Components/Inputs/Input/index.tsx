// Imports
import UpInput from './UpInput'
import { IconName } from "../../../Common/theming/types";

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
    isNullable?: boolean;
    iconName?: IconName;
    hasError?: boolean;
    onChange?: (data: any) => void;
    className?: string;
    value:string;
    maxLength?:number;
}

export interface CommonProps {
    disabled?: boolean;
    placeholder?: string;
    height?: HeightSize;
    width?: WidthSize;
    readonly?: boolean;
}

export interface UpInputProps extends CommonProps {
    type?: InputType;
    isNullable?: boolean;
    hasError?: boolean;
    iconName?:IconName;
    value?:string;
    validation?:Array<Validation>;
    maxLength?:number;
}

export default UpInput