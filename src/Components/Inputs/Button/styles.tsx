// Imports
import * as React from 'react'
import styled, { css, keyframes } from '../../../Common/theming/themedComponents';
import remStringFromPX from '../../../Common/utils'
import { Dictionary } from '../../../Common/utils/types'
import { UpButtonStyledProps, fontSizeMap, buttonSizeMap } from './'
import defaultTheme from '../../../Common/theming'
import SvgIcon from "../../Display/SvgIcon/index";
import { IconNames, IconName } from "../../Display/SvgIcon/icons";
import { ThemeInterface } from "../../../Common/theming/types";
import * as classnames from 'classnames'
import { ActionType } from './'

export var ActionIconMap = new Dictionary<ActionType, IconName>([]);
for (var i = 0; i < IconNames.length; i++) {
    var iconName = IconNames[i];
    ActionIconMap.set(iconName, iconName);
}

const DEFAULT_MIN_SIZE = "30px"
const DEFAULT_BORDER_RADIUS = "4px"

const ReactButtonComponent: React.StatelessComponent<UpButtonStyledProps> = (props) => {
    const { children, className, onClick, dataFor, width } = props;

    const actionType = props.actionType;
    var iconName: IconName = 'none';
    if (actionType && ActionIconMap.containsKey(actionType)) {
        iconName = ActionIconMap.get(actionType);
    } else if (props.iconName) {
        iconName = props.iconName;
    }

    // Our SVG Icon viewbox is 20*20 units
    const icon = <SvgIcon iconName={iconName}
        width={props.iconSize}
        height={props.iconSize}
        className={props.rotate ? 'rotating' : ''}
        color={props.color} />;

    var tooltipProps = {};
    if (dataFor) {
        tooltipProps = {
            "data-tip": "tooltip",
            "data-for": dataFor
        }
    }

    return <button onClick={onClick} className={classnames('up-btn', className)} {...tooltipProps} >
        {iconName != 'none' &&
            icon
        }
        {(width == 'normal' || width == 'auto') &&
            children
        }
    </button>;
}

const shadow = props => css`
  box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1) ;
`;

const base = props => css`
  text-align: center;
  font-size: ${(props: UpButtonStyledProps) => remStringFromPX(fontSizeMap[props.fontSize])};
  border: none;
  opacity:0.8;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  width: ${(props: UpButtonStyledProps) => buttonSizeMap[props.width] || 'auto'};
  line-height: ${(props: UpButtonStyledProps) => props.theme.minButtonSize || DEFAULT_MIN_SIZE};
  svg {
    margin:3px;
    display:inline-block;
    float:left;
  }
  span {
    line-height: ${(props: UpButtonStyledProps) => props.theme.minButtonSize || DEFAULT_MIN_SIZE};
    padding-left: ${(props: UpButtonStyledProps) => (props.width=="auto")?"8px":"inherit"};
    padding-right: ${(props: UpButtonStyledProps) => (props.width=="auto")?"8px":"inherit"};
  }
  &:active {
     box-shadow: inset 5px 5px 5px rgba(16, 22, 26, 0.2) ;
  }
`;

const disabled = props => css`
background: ${props => props.theme.colorMap.disabledBg};
color: ${props => props.theme.colorMap.disabledFg};
cursor: not-allowed;
`;

const active = props => css`
color : ${props => props.color || props.theme.colorMap[`${props.intent}Fg`] || 'black'};
background-color: ${props => props.backgroundColor || props.theme.colorMap[props.intent]};
border-color: ${props => props.borderColor || props.theme.colorMap[`${props.intent}Dark`]};
border-width:1px;
border-style:solid;
&:hover {
  color : ${props => props.color || props.theme.colorMap[`${props.intent}HoverFg`] || 'black'};
  background-color: ${props => props.color || props.theme.colorMap[`${props.intent}Hover`] || 'white'};
  svg {
    fill: ${(props: UpButtonStyledProps) => props.backgroundColor || props.theme.colorMap[`${props.intent}Fg`]}
  }
}
&:hover:active {
  color : ${props => props.color || props.theme.colorMap[`${props.intent}HoverFg`] || 'black'};
  background-color: ${props => props.color || props.theme.colorMap[`${props.intent}HoverActive`] || 'white'};
  svg {
    fill: ${(props: UpButtonStyledProps) => props.backgroundColor || props.theme.colorMap[`${props.intent}HoverFg`]}
  }
}
&:active {
  color : ${props => props.color || props.theme.colorMap[`${props.intent}HoverFg`] || 'black'};
  background-color: ${props => props.color || props.theme.colorMap[`${props.intent}Active`] || 'white'};
  svg {
    fill: ${(props: UpButtonStyledProps) => props.backgroundColor || props.theme.colorMap[`${props.intent}HoverFg`]}
  }
}
svg {
    fill: ${(props: UpButtonStyledProps) => props.color || props.theme.colorMap[`${props.intent}Fg`] || 'white'}
}
`;

const large = props => css`
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3;
  border-radius: ${(props) => props.theme.borderRadius || DEFAULT_BORDER_RADIUS};
  svg {
    width:32px;
    heigth:32px;
  }
`;
const normal = props => css`
  padding: 0px 2px;
  font-size: 16px;
  line-height: 1.3;
  border-radius: ${(props) => props.theme.borderRadius || DEFAULT_BORDER_RADIUS};
  
  svg {
    width:20px;
    heigth:20px;
  }
`;

const small = props => css`
    padding: 3px 8px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;

    svg {
      width:16px;
      heigth:16px;
    }
`;

const xsmall = props => css`
  padding: 1px 4px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;

    svg {
      width:12px;
      heigth:12px;
    }
`;

const icon = props => css`
  padding: 0px;
  height: 24px;
  width: 24px;
  min-width:initial;
  min-height:initial;
  border-radius: 3px;
  font-size: 12px;
  line-height: 1.5;
`;

const iconXSmall = props => css`
  padding: 1px 2px;
  min-width:initial;
  min-height:initial;
  border-radius: 3px;
  font-size: 10px;
  line-height: 1;

  svg {
    width:12px;
    heigth:12px;
  }
`;

const iconSmall = props => css`
  padding: 3px 4px;
  min-width:initial;
  min-height:initial;
  border-radius: 3px;
  font-size: 12px;
  line-height: 1.5;
  svg {
      width:16px;
      heigth:16px;
  }
`;

const iconNormal = props => css`
  padding: 4px 5px;
  border-radius: 3px;
  min-width:initial;
  min-height:initial;
  font-size: 12px;
  line-height: 1.5;
  svg {
    width:20px;
    heigth:20px;
  }
`;

const iconLarge = props => css`
  padding: 6px 8px;
  border-radius: 3px;
  min-width:initial;
  min-height:initial;
  font-size: 14px;
  line-height: 1.5;
  svg {
    width:32px;
    heigth:32px;
  }
`;

var getWidth = function (props) {
    return props.width != "icon" ? normal(props) : css``;
}

var getHeight = function (props) {
    if (props.width == "icon") {
        switch (props.height) {
            case 'xsmall':
                return iconXSmall(props);
            case 'small':
                return iconSmall(props);
            case 'large':
                return iconLarge(props);
            default:
                return icon(props);
        }
    } else {
        switch (props.height) {
            case 'xsmall':
                return xsmall(props);
            case 'small':
                return small(props);
            case 'large':
                return large(props);
            default:
                return normal(props);
        }
    }
}

const rounded = props => css`
  height:32px;
  width:32px;
  border-radius:16px;
  div {
    margin:0px;
  }
  svg {
    margin:0px;
  }
`;

const rotatingAnimation = keyframes`
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
`;

const rotate = props => css`
  .rotating {
    -webkit-animation: ${rotatingAnimation} 2s linear infinite;
    -moz-animation: ${rotatingAnimation} 2s linear infinite;
    -ms-animation: ${rotatingAnimation} 2s linear infinite;
    -o-animation: ${rotatingAnimation} 2s linear infinite;
    animation: ${rotatingAnimation} 2s linear infinite;
  }
`;

export const BaseButton = styled<UpButtonStyledProps>(ReactButtonComponent) `
${(props: UpButtonStyledProps) => base(props)}
${(props: UpButtonStyledProps) => getWidth(props)}
${(props: UpButtonStyledProps) => getHeight(props)}
${(props: UpButtonStyledProps) => props.shadow ? shadow(props) : css``}
${(props: UpButtonStyledProps) => props.rounded ? rounded(props) : css``}
${(props: UpButtonStyledProps) => props.disabled ? disabled(props) : active(props)}
${(props: UpButtonStyledProps) => props.rotate ? rotate(props) : css``}
`;