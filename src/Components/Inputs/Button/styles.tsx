// Imports
import * as React from 'react'
import styled, {css} from '../../../Common/theming/themedComponents';
import remStringFromPX from '../../../Common/utils'
import { UpButtonStyledProps, fontSizeMap, buttonSizeMap} from './'
import ThemeColorMap from '../../../Common/theming'
import SvgIcon from "../../Display/SvgIcon/index";
import { ThemeInterface } from "../../../Common/theming/types";
import * as classnames from 'classnames' 

const ReactButtonComponent: React.StatelessComponent<UpButtonStyledProps> = (props) => {
    const { children, className, onClick, dataFor, width } = props;

    const icon = <SvgIcon iconName={props.iconName}
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

    return <button onClick={onClick} className={classnames('up-btn', className)} {...tooltipProps} >
      {props.iconName &&
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
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  width: ${(props: UpButtonStyledProps) => buttonSizeMap[props.width] || 'auto'};
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
  border-radius: ${(props) => props.theme.borderRadius || '4px'};
`;
const normal = props => css`
  padding: 4px 10px;
  font-size: 16px;
  line-height: 1.3;
  border-radius: ${(props) => props.theme.borderRadius || '4px'};
`;
const small = props => css`
    padding: 3px 8px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
`;
const xsmall = props => css`
  padding: 1px 4px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
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
`;
const iconSmall = props => css`
  padding: 3px 4px;
  border-radius: 3px;
  font-size: 12px;
  line-height: 1.5;
`;
const iconNormal = props => css`
  padding: 4px 5px;
  border-radius: 3px;
  font-size: 12px;
  line-height: 1.5;
`;
const iconLarge = props => css`
  padding: 6px 8px;
  border-radius: 3px;
  font-size: 14px;
  line-height: 1.5;
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

export const BaseButton = styled<UpButtonStyledProps>(ReactButtonComponent) `
${(props: UpButtonStyledProps) => base(props) }
${(props: UpButtonStyledProps) => getWidth(props)}
${(props: UpButtonStyledProps) => getHeight(props)}
${(props: UpButtonStyledProps) => props.shadow? shadow(props):css``}
${(props: UpButtonStyledProps) => props.disabled ? disabled(props) : active(props) }
`;