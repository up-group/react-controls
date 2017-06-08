// Imports
import * as React from 'react'
import styled, {css} from '../../../Common/theming/themedComponents';
import remStringFromPX from '../../../Common/utils'
import { Dictionary } from '../../../Common/utils/types'
import { UpButtonStyledProps, fontSizeMap, buttonSizeMap} from './'
import defaultTheme from '../../../Common/theming'
import SvgIcon from "../../Display/SvgIcon/index";
import { ThemeInterface } from "../../../Common/theming/types";
import { IconName } from '../../../Common/theming/types'
import * as classnames from 'classnames' 
import { ActionType } from './'

export var ActionIconMap = new Dictionary<ActionType, IconName>([]) ;
ActionIconMap.set('add', 'add') ;
ActionIconMap.set('delete', 'delete') ;
ActionIconMap.set('edit', 'edit') ;
ActionIconMap.set('stop', 'stop') ;
ActionIconMap.set('cancel', 'cancel') ;
ActionIconMap.set('save', 'save') ;
ActionIconMap.set('close', 'close') ;
ActionIconMap.set('print', 'print') ;
ActionIconMap.set('renew', 'renew') ;
ActionIconMap.set('refresh', 'refresh') ;
ActionIconMap.set('sync', 'sync') ;
ActionIconMap.set('expand', 'expand') ;
ActionIconMap.set('collapse', 'collapse') ;
ActionIconMap.set('help', 'help') ;
ActionIconMap.set('zoom-in', 'zoom-in') ;
ActionIconMap.set('zoom-out', 'zoom-out') ;
ActionIconMap.set('search', 'search') ;
ActionIconMap.set('info', 'info') ; 
ActionIconMap.set('import', 'import') ; 
ActionIconMap.set('export', 'export') ; 
ActionIconMap.set('download', 'download') ; 
ActionIconMap.set('upload', 'upload') ; 
ActionIconMap.set('unlock', 'unlock') ; 

const DEFAULT_MIN_SIZE = "30px" 
const DEFAULT_BORDER_RADIUS = "4px" 

const ReactButtonComponent: React.StatelessComponent<UpButtonStyledProps> = (props) => {
    const { children, className, onClick, dataFor, width } = props;

    const actionType = props.actionType ;
    var iconName : IconName = 'blank' ;
    if(actionType && ActionIconMap.containsKey(actionType)) {
        iconName = ActionIconMap.get(actionType) ;
    }
    
    // Our SVG Icon viewbox is 20*20 units
    const icon = <SvgIcon iconName={iconName}
          width={props.iconSize}
          height={props.iconSize}
          color={props.color} /> ;

    var tooltipProps = {} ;
    if(dataFor) {
      tooltipProps = {
        "data-tip" : "tooltip",
        "data-for" :  dataFor
      }
    }

    return <button onClick={onClick} className={classnames('up-btn', className, (props.rotate?'rotating':''))} {...tooltipProps} >
      {iconName != 'blank' &&
        icon
      }
      {(width == 'normal' ||  width == 'auto') &&
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
  text-align: left;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  width: ${(props: UpButtonStyledProps) => buttonSizeMap[props.width] || 'auto'};
  min-width: ${(props: UpButtonStyledProps) => props.theme.minButtonSize || DEFAULT_MIN_SIZE};
  min-height: ${(props: UpButtonStyledProps) => props.theme.minButtonSize || DEFAULT_MIN_SIZE};
  line-height: ${(props: UpButtonStyledProps) => props.theme.minButtonSize || DEFAULT_MIN_SIZE};
  svg {
    margin:4px 4px 4px 0px;
    display:inline-block;
    float:left;
  }
  span {
    line-height: ${(props: UpButtonStyledProps) => props.theme.minButtonSize || DEFAULT_MIN_SIZE};
  }
  &:active {
     box-shadow: inset 5px 5px 5px rgba(16, 22, 26, 0.2) ;
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
  svg {
    fill: ${(props: UpButtonStyledProps) => props.backgroundColor || props.theme.colorMap[`${props.type}Dark`]}
  }
}
svg {
    fill: ${(props: UpButtonStyledProps) => props.color || 'white'}
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
  padding: 4px 5px;
  border-radius: 3px;
  font-size: 12px;
  line-height: 1.5;
`;

const iconXSmall = props => css`
  padding: 1px 2px;
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
  font-size: 14px;
  line-height: 1.5;
  svg {
    width:32px;
    heigth:32px;
  }
`;

var getWidth = function(props) {
  return props.width!="icon" ? normal(props) : css`` ;
}

var getHeight = function(props) {
  if(props.width=="icon") {
    switch(props.height) {
      case 'xsmall' :
      return iconXSmall(props) ;
      case 'small':
      return iconSmall(props) ;
      case 'large':
      return iconLarge(props) ;
      default:
      return icon(props) ;
    }
  } else {
    switch(props.height) {
      case 'xsmall' :
      return xsmall(props) ;
      case 'small':
      return small(props) ;
      case 'large':
      return large(props) ;
      default:
      return normal(props) ;
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

const rotate = props => css`
  @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
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
  }
  .rotating div svg {
    -webkit-animation: rotating 2s linear infinite;
    -moz-animation: rotating 2s linear infinite;
    -ms-animation: rotating 2s linear infinite;
    -o-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
  }
`;

export const BaseButton = styled<UpButtonStyledProps>(ReactButtonComponent) `
${(props: UpButtonStyledProps) => base(props) }
${(props: UpButtonStyledProps) => getWidth(props)}
${(props: UpButtonStyledProps) => getHeight(props)}
${(props: UpButtonStyledProps) => props.shadow? shadow(props):css``}
${(props: UpButtonStyledProps) => props.rounded? rounded(props):css``}
${(props: UpButtonStyledProps) => props.disabled ? disabled(props) : active(props) }
${(props: UpButtonStyledProps) => props.rotate ? rotate(props) : css`` }
`;