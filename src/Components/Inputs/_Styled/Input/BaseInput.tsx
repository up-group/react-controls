import * as React from 'react'
import styled, { css } from 'styled-components';
import SvgIcon from "../../../Display/SvgIcon/index";
import { iconName } from "../../../Display/SvgIcon/types";

import { inputStyles, HeightLarge } from "./sharedStyle"


export type WidthSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'fill';
export type HeightSize = 'normal' | 'large';
export type InputType = 'text' | 'email' | 'number' | 'integer' | 'phone' | 'search';


export interface CommonProps {
    disabled?: boolean;
    readOnly?: boolean;

    placeholder?: string;
    height?: HeightSize;
    width?: WidthSize;
}

export interface StyledProps extends CommonProps {
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    type?: InputType;
    iconName?: iconName;
    hasError?: boolean;
    onChange?: (data: any) => void;
    className?: string;
}


const BaseInput: React.StatelessComponent<StyledProps> = (props) => {
    const {className, type, iconName, placeholder, disabled, readOnly, onChange } = props;

    var icon: any = null;
    if (iconName) {
        icon = <div className="up-icon">
            <SvgIcon iconName={iconName}
                width={20}
                height={20}
                color={props.color} />
        </div>;
    }
    return (<div className={className}>
        <div className="up-input-group">
            <input onChange={onChange} className="up-input" type="text" placeholder={placeholder} dir="auto" disabled={disabled} readOnly={readOnly} />
            {icon}
        </div>
    </div>);
}

const sizeMap = {
    xsmall: "40px",
    small: "100px",
    medium: "150px",
    large: "250px",
    xlarge: "350px",
    xxlarge: "500px",
    fill: "100%",
};


const error = css`
.up-input {
  border-color:${(props) => props.theme.error};
  border-width: 1px;
  border-style: solid;
}
`


export const InputStyled = styled<StyledProps>(BaseInput) `
  ${inputStyles}
  ${(props) => props.hasError ? error : css``}
  color: ${(props: StyledProps) => props.color};
  .up-input {
    width: ${(props: StyledProps) => sizeMap[props.width]};
    ${(props: StyledProps) => (props.height == "large" ? HeightLarge : css``)}
  }
`;