import * as React from 'react'
import styled, {css} from '../../../Common/theming/themedComponents';

import remStringFromPX from '../../../Common/utils'

import { UpButtonStyledProps, sizeMap } from './'

import ThemeColorMap from '../../../Common/theming'
import SvgIcon from "../../Display/SvgIcon/index";

const ReactButtonComponent: React.StatelessComponent<UpButtonStyledProps> = (props) => {
    const { children, className, onClick, dataFor } = props;

    const icon = <SvgIcon iconName={props.iconName}
          width={props.iconSize}
          height={props.iconSize}
          color={props.color} /> ;

    return <button onClick={onClick} className={className} data-for={dataFor}>
      {props.iconName &&
        icon
      }
      {children}
      </button>;
}

const shadow = props => css`
  box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1) ;
`;

const base = props => css`
  text-align: center;
  font-size: ${(props: UpButtonStyledProps) => remStringFromPX(sizeMap[props.fontSize])};
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  border-radius: ${(props: UpButtonStyledProps) => props.theme.borderRadius || '3px'};
  padding: 6px 12px;
  vertical-align: middle;
  min-width: ${(props: UpButtonStyledProps) => props.theme.minButtonSize || '30px'};
  min-height: ${(props: UpButtonStyledProps) => props.theme.minButtonSize || '30px'};
  line-height: ${(props: UpButtonStyledProps) => props.theme.minButtonSize || '30px'};
  svg {
    margin:4px 4px 4px 0px;
    display:inline-block;
    float:left;
  }
`;

const disabled = props => css`
background: ${props => props.theme.colorMap.disabledBg };
color: ${props => props.theme.colorMap.disabledFg };
cursor: not-allowed;
`;

const active = props => css`
color: ${(props: UpButtonStyledProps) => props.color || 'white' };
background-color: ${props => props.backgroundColor|| props.theme.colorMap[props.type]};
border-color: ${props => props.borderColor || props.theme.colorMap[`${props.type}Dark`]};
border-width:1px;
border-style:solid;
&:hover {
  background-color: ${props => props.color || props.theme.colorMap[`${props.type}Light`] || 'white' };
  color: ${(props: UpButtonStyledProps) => props.backgroundColor || props.theme.colorMap[`${props.type}Dark`]};
  svg {
    fill: ${(props: UpButtonStyledProps) => props.backgroundColor || props.theme.colorMap[`${props.type}Dark`]}
  }
}
svg {
    fill: ${(props: UpButtonStyledProps) => props.color || 'white'}
}
`;

export const BaseButton = styled<UpButtonStyledProps>(ReactButtonComponent) `
${(props: UpButtonStyledProps) => base(props) }
${(props: UpButtonStyledProps) => props.shadow? shadow(props):css``}
${(props: UpButtonStyledProps) => props.disabled ? disabled(props) : active(props) }
`;
