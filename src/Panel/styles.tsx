import * as React from 'react'

import styled, { css } from '../theming/themedComponents'
import ThemeColorMap from '../theming'
import SvgIcon from '../SvgIcon'

import { Props } from './'

const DefaultPanel: React.StatelessComponent<Props> = (props) => {
    const { children } = props;

    const icon = <SvgIcon iconName={props.iconName}
          width={props.iconSize}
          height={props.iconSize}
          color={props.color} /> ;

    return (
        <div className={props.className}>
          <div className="up-panel">
            {props.title &&
              <div className="up-panel-header">{props.title}</div>
            }
            <div className="up-panel-body">
              {props.iconName &&
              icon
            }
            {children}
            </div>
            {props.footer &&
              <div className="up-panel-footer">{props.footer}</div>
            }
          </div>
        </div>
    );
}

const shadow = props => css`
  box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1) ;
`;

const base = props => css`
  text-align: left;
  border: none;
  display: block;
  border-radius: ${props => props.theme.borederRadius || '4px'};
  vertical-align: top;   
  border: 1px solid transparent;
  width:100%;
  margin-bottom:10px;
  .up-panel-header {
    width:100%;
    padding: 8px;
    color: ${props => (props.theme.colorMap)? props.theme.colorMap.white1 : ThemeColorMap.white1};
    font-weight:"700"
  }
  .up-panel-body {
    background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ; 
    background-color: #fff;
    padding: 10px;
  }
  .up-panel-footer {
    background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ; 
    background-color: ${props => (props.theme.colorMap)? props.theme.colorMap.lightGray5 : ThemeColorMap.lightGray5};
    border-color: ${props => (props.theme.colorMap)? props.theme.colorMap.lightGray1 : ThemeColorMap.lightGray1};
    border-top-width:1px;
    border-top-style:solid;
    padding: 6px;
  }
  svg {
    margin:4px 4px 4px 0px;
    display:inline-block;
    float:left;
  }
`;

export const PrimaryDefaultPanel = styled<Props>(DefaultPanel) `
${(props: Props) => base(props) }
${(props: Props) => shadow(props)}
border-color: ${props => (props.theme.colorMap)? props.theme.colorMap.primary : ThemeColorMap.primary};
 .up-panel-header {
   background-color: ${props => (props.theme.colorMap)? props.theme.colorMap.primary : ThemeColorMap.primary};
 }
`;

export const WarningDefaultPanel = styled<Props>(DefaultPanel) `
${(props: Props) => base(props)}
${(props: Props) => shadow(props)}
border-color: ${props => (props.theme.colorMap)? props.theme.colorMap.warning : ThemeColorMap.warning};
 .up-panel-header {
   background-color: ${props => (props.theme.colorMap)? props.theme.colorMap.warning : ThemeColorMap.warning};
 }
`;

export const SuccessDefaultPanel = styled<Props>(DefaultPanel) `
${(props: Props) => base(props) }
${(props: Props) => shadow(props)}
border-color: ${props => (props.theme.colorMap)? props.theme.colorMap.ok : ThemeColorMap.ok};
 .up-panel-header {
   background-color: ${props => (props.theme.colorMap)? props.theme.colorMap.ok : ThemeColorMap.ok};
 }
`;

export const InfoDefaultPanel = styled<Props>(DefaultPanel) `
${(props: Props) => base(props) }
${(props: Props) => shadow(props)}
border-color: ${props => (props.theme.colorMap)? props.theme.colorMap.secondary : ThemeColorMap.secondary};
 .up-panel-header {
   background-color: ${props => (props.theme.colorMap)? props.theme.colorMap.secondary : ThemeColorMap.secondary};
 }
`;

export const DangerDefaultPanel = styled<Props>(DefaultPanel) `
${(props: Props) => base(props) }
${(props: Props) => shadow(props)}
border-color: ${props => (props.theme.colorMap)? props.theme.colorMap.error : ThemeColorMap.error};
.up-panel-header {
   background-color: ${props => (props.theme.colorMap)? props.theme.colorMap.error : ThemeColorMap.error};
 }
`;

export const PanelStyled: React.StatelessComponent<Props> = (props) => {
    const { children, ...rest } = props;
    switch(props.type) {
      case "primary":
        return <PrimaryDefaultPanel {...rest}>{children}</PrimaryDefaultPanel> ;
      case "info":
        return <InfoDefaultPanel {...rest}>{children}</InfoDefaultPanel> ;
      case "warning":
        return <WarningDefaultPanel {...rest}>{children}</WarningDefaultPanel> ;
      case "danger":
        return <DangerDefaultPanel {...rest}>{children}</DangerDefaultPanel> ;
      case "success":
        return <SuccessDefaultPanel {...rest}>{children}</SuccessDefaultPanel> ;
    }

    return <PrimaryDefaultPanel {...rest}>{children}</PrimaryDefaultPanel> ;
}