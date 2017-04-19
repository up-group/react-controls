import UpInput from './UpInput'

export default UpInput

import { IconName } from "../../../Common/theming/types";

export type WidthSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'fill' ;
export type HeightSize = 'normal' | 'large' ;
export type InputType = 'text' | 'email' | 'number' | 'integer' | 'phone' | 'search' ;

export const sizeMap = {
  xsmall: "40px",
  small: "100px",
  medium: "150px",
  large: "250px",
  xlarge: "350px",
  xxlarge: "500px",
  fill: "100%",
};

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