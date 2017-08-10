// Imports
import * as React from 'react'
import defaultTheme from '../../../Common/theming'
import { isString } from '../../../Common/utils'
import { UpPanelStyledProps } from './'
import styled, { css } from "../../../Common/theming/themedComponents";
import SvgIcon from "../../Display/SvgIcon/index";
import { ThemeInterface } from "../../../Common/theming/types";
import * as classnames from 'classnames'

const BasePanel: React.StatelessComponent<UpPanelStyledProps> = (props) => {
    var { children } = props;
    var iconName = props.iconName;
    if (!iconName && props.disableAutoIntentIcon === false && props.theme.intentTypeIcons && props.type) {
        iconName = props.theme.intentTypeIcons[props.type];
    }

    var message = props.message;

    React.Children.map(children, (child, i) => {
        if (isString(child) && children['length'] == 1) {
            message = child as string;
            children = null;
        }
    });

    const icon = <SvgIcon iconName={iconName}
        color={(props.theme && props.theme.colorMap) ? props.theme.colorMap[props.type] : props.theme.colorMap.defaultDark}
        width={props.iconSize}
        height={props.iconSize} />;

    return (
        <div className={classnames(props.className, "up-panel")}>
            {props.title &&
                <div className="up-panel-header">{props.title}</div>
            }
            <div className="up-panel-body">
                {iconName &&
                    icon
                }
                {message &&
                    <span className="up-panel-message">{message}</span>
                }
                {children}
            </div>
            {props.footer &&
                <div className="up-panel-footer">{props.footer}</div>
            }
        </div>
    );
}

const shadow = props => css`
  box-shadow: 0px 0px 1px grey;
`;

const base = props => css`
  text-align: left;
  border: none;
  display: block;
  border-radius: ${props => props.theme.borderRadius || '4px'};
  vertical-align: top;   
  border: 1px solid transparent;
  width:100%;
  margin-bottom:10px;
  .up-panel-header {
    width:100%;
    padding: 8px;
    font-weight:"700"
  }
  .up-panel-body {
    background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ; 
    background-color: #fff;
    padding: 10px;
  }
  .up-panel-message {
    margin:10px;
    display:inline-block
  }
  .up-panel-footer {
    background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ; 
    background-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.lightGray5 : defaultTheme.colorMap.lightGray5};
    border-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.lightGray1 : defaultTheme.colorMap.lightGray1};
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

export const DefaultPanel = styled<UpPanelStyledProps>(BasePanel) `
${(props: UpPanelStyledProps) => base(props)}
${(props: UpPanelStyledProps) => shadow(props)}
border-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.default : defaultTheme.colorMap.default};
 .up-panel-header {
   background-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.default : defaultTheme.colorMap.default};
 }
`;

export const PrimaryDefaultPanel = styled<UpPanelStyledProps>(BasePanel) `
${(props: UpPanelStyledProps) => base(props)}
${(props: UpPanelStyledProps) => shadow(props)}
border-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.primary : defaultTheme.colorMap.primary};
 .up-panel-header {
   background-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.primary : defaultTheme.colorMap.primary};
 }
`;

export const WarningDefaultPanel = styled<UpPanelStyledProps>(BasePanel) `
${(props: UpPanelStyledProps) => base(props)}
${(props: UpPanelStyledProps) => shadow(props)}
border-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.warning : defaultTheme.colorMap.warning};
 .up-panel-header {
   background-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.warning : defaultTheme.colorMap.warning};
 }
`;

export const SuccessDefaultPanel = styled<UpPanelStyledProps>(BasePanel) `
${(props: UpPanelStyledProps) => base(props)}
${(props: UpPanelStyledProps) => shadow(props)}
border-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.successDark : defaultTheme.colorMap.successDark};
 .up-panel-header {
   background-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.success : defaultTheme.colorMap.success};
 }
`;

export const InfoDefaultPanel = styled<UpPanelStyledProps>(BasePanel) `
${(props: UpPanelStyledProps) => base(props)}
${(props: UpPanelStyledProps) => shadow(props)}
border-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.infoDark : defaultTheme.colorMap.infoDark};
 .up-panel-header {
   background-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.info : defaultTheme.colorMap.info};
 }
`;

export const DangerDefaultPanel = styled<UpPanelStyledProps>(BasePanel) `
${(props: UpPanelStyledProps) => base(props)}
${(props: UpPanelStyledProps) => shadow(props)}
border-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.danger : defaultTheme.colorMap.dangerDark};
.up-panel-header {
   background-color: ${props => (props.theme.colorMap) ? props.theme.colorMap.danger : defaultTheme.colorMap.danger};
 }
`;

export const PanelStyled: React.StatelessComponent<UpPanelStyledProps> = (props) => {
    const { children, ...others } = props;
    switch (props.type) {
        case "primary":
            return <PrimaryDefaultPanel {...others}>{children}</PrimaryDefaultPanel>;
        case "info":
            return <InfoDefaultPanel {...others}>{children}</InfoDefaultPanel>;
        case "warning":
            return <WarningDefaultPanel {...others}>{children}</WarningDefaultPanel>;
        case "danger":
            return <DangerDefaultPanel {...others}>{children}</DangerDefaultPanel>;
        case "success":
            return <SuccessDefaultPanel {...others}>{children}</SuccessDefaultPanel>;
    }

    return <DefaultPanel {...others}>{children}</DefaultPanel>;
}