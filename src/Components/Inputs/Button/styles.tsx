import * as React from 'react'
import styled, { css } from 'styled-components'
import remStringFromPX from '../../../Common/utils'

import { UpButtonProps, sizeMap } from './'

import ThemeColorMap from '../../../Common/theming'
import SvgIcon from "../../Display/SvgIcon/index";

const ReactButtonComponent: React.StatelessComponent<UpButtonProps> = (props) => {
    const { children, className } = props;

    const icon = <SvgIcon iconName={props.iconName}
          width={props.iconSize}
          height={props.iconSize}
          color={props.color} /> ;

    return <button className={className}>
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
  font-size: ${(props: UpButtonProps) => remStringFromPX(sizeMap[props.fontSize])};
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ;
  border-radius: ${(props: UpButtonProps) => props.theme.borderRadius || '3px'};
  padding: 0 10px;
  vertical-align: middle;
  min-width: ${(props: UpButtonProps) => props.theme.minButtonSize || '30px'};
  min-height: ${(props: UpButtonProps) => props.theme.minButtonSize || '30px'};
  line-height: ${(props: UpButtonProps) => props.theme.minButtonSize || '30px'};
  svg {
    margin:4px 4px 4px 0px;
    display:inline-block;
    float:left;
  }
`;

const disabled = props => css`
background: ${(props: UpButtonProps) => ThemeColorMap.disabledBg };
color: ${(props: UpButtonProps) => ThemeColorMap.disabledFg };
cursor: not-allowed;
`;

const active = props => css`
background: ${props => props.backgroundColor || 'green' };
color: ${(props: UpButtonProps) => props.color};
border-color:${(props: UpButtonProps) => props.backgroundColor};
border-width:1px;
border-style:solid;
&:hover {
  background: ${props => props.color || 'green' };
  color: ${(props: UpButtonProps) => props.backgroundColor};
  svg {
    fill: ${(props: UpButtonProps) => props.backgroundColor}
  }
}
svg {
    fill: ${(props: UpButtonProps) => props.color}
}
`;

export const BaseButton = styled<UpButtonProps>(ReactButtonComponent) `
${(props: UpButtonProps) => base(props) }
${(props: UpButtonProps) => props.shadow? shadow(props):css``}
${(props: UpButtonProps) => props.disabled ? disabled(props) : active(props) }
`;

export const HeroButton = styled<UpButtonProps>(ReactButtonComponent) `
${(props: UpButtonProps) => base(props)}
${(props: UpButtonProps) => props.disabled ? disabled(props) : active(props) }
`;
