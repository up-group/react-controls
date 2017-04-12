import * as React from 'react'
import styled, { css } from 'styled-components'
import remStringFromPX from '../utils'
import { sizeMap } from './maps'
import { Props } from './'
import ThemeColorMap from '../theming'
import SvgIcon from '../SvgIcon'

const ReactButtonComponent: React.StatelessComponent<Props> = (props) => {
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
  font-size: ${(props: Props) => remStringFromPX(sizeMap[props.fontSize])};
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ;
  border-radius: ${(props: Props) => props.theme.borderRadius || '3px'};
  padding: 0 10px;
  vertical-align: middle;
  min-width: ${(props: Props) => props.theme.minButtonSize || '30px'};
  min-height: ${(props: Props) => props.theme.minButtonSize || '30px'};
  line-height: ${(props: Props) => props.theme.minButtonSize || '30px'};
  svg {
    margin:4px 4px 4px 0px;
    display:inline-block;
    float:left;
  }
`;

const disabled = props => css`
background: ${(props: Props) => ThemeColorMap.disabledBg };
color: ${(props: Props) => ThemeColorMap.disabledFg };
cursor: not-allowed;
`;

const active = props => css`
background: ${props => props.backgroundColor || 'green' };
color: ${(props: Props) => props.color};
&:hover {
  background: ${props => props.color || 'green' };
  color: ${(props: Props) => props.backgroundColor};
  svg {
    fill: ${(props: Props) => props.backgroundColor}
  }
}
svg {
    fill: ${(props: Props) => props.color}
}
`;

export const BaseButton = styled<Props>(ReactButtonComponent) `
${(props: Props) => base(props) }
${(props: Props) => props.shadow? shadow(props):css``}
${(props: Props) => props.disabled ? disabled(props) : active(props) }
`;

export const HeroButton = styled<Props>(ReactButtonComponent) `
${(props: Props) => base(props)}
${(props: Props) => props.disabled ? disabled(props) : active(props) }
`;
