import UpInput from './UpInput'

export default UpInput

import { IconName } from "../../../Common/theming/types";

export type WidthSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'fill' ;
export type HeightSize = 'normal' | 'large' ;
export type InputType = 'text' | 'email' | 'number' | 'integer' | 'phone' | 'search' ;

export interface StyledProps extends CommonProps {
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    type?: InputType;
    isNullable?: boolean;
    iconName?: IconName;
    hasError?: boolean;
    onChange?: (data: any) => void;
    className?: string;
}

export interface CommonProps {
    disabled?: boolean;
    placeholder?: string;
    height?: HeightSize;
    width?: WidthSize;
    readOnly?: boolean;
}

export interface Props extends CommonProps {
    type?: InputType;
    isNullable?: boolean;
    hasError?: boolean;
    iconName?:IconName;
}