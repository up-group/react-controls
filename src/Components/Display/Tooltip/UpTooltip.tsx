// Imports
import * as React from "react" ;
import { Component } from "react";

import * as classNames from 'classnames'

import * as ReactTooltip from 'react-tooltip'
import { generateId, isFunction, isEmpty } from '../../../Common/utils'

import {UpTooltipProps} from './'

import { style } from 'typestyle' 
import UpDefaultTheme, { withTheme, WithThemeProps } from "../../../Common/theming";
import { IntentType } from '../../../Common/theming/types';

export type Placement = "top" | "right" | "bottom" | "left" 
export type Effect = "float" | "solid" 

export interface Tooltip {
  content: JSX.Element | string ;
  place?: Placement;
  type?: IntentType;
  effect?: Effect;
  multiline?:boolean;
  html?: boolean; 
  title?: JSX.Element | string;
  delayHide?:number;
  delayShow?:number;
  disable?:boolean;
}

export interface UpTooltipProps extends React.Props<UpTooltip>, Tooltip {
  id?:string;
}

const getStyles = (props : UpTooltipProps & WithThemeProps) => style({
  pointerEvents: 'auto',
  opacity: 0.95,
  padding: '0px',
  $nest : {
    '& .up-tooltip-content' : {
      padding: '0px',
      margin: '0px',
    },
    '& .up-tooltip-header' : {
      padding: '8px 14px',
      margin: 0,
      borderBottom:'1px solid #ebebeb',
      borderRadius: props.theme.borderRadius,
      fontWeight:700,
      fontSize: '13px',
      color:'#4d4f5c',
      background:'#f7f7f7',
    },
    '& .up-tooltip-body' : {
      padding:'8px',
    },
    '&:hover' : {
      visibility: 'visible',
      opacity: 1,
    }
  }
}) ;

export interface UpTooltipState {}

class UpTooltip extends Component<UpTooltipProps & WithThemeProps, UpTooltipState> {

   public static defaultProps : UpTooltipProps & WithThemeProps = {
       content : '',
       title: 'Note',
       place : 'right',
       effect: 'float',
       type: 'light',
       multiline:false,
       html:false,
       delayHide:500,
       delayShow:500,
       disable:false,
       theme : UpDefaultTheme,
    };

  constructor(props: UpTooltipProps) {
    super(props) ;
  }

  getContent = () => {
    return (
      <div className="up-tooltip-content">
        {this.props.title != null && 
        <p className="up-tooltip-header">
          {this.props.title}
        </p>
        }
        <p className="up-tooltip-body">
          {this.props.content}
        </p>
      </div>
    )
  }

  render() {
    const {id, children, content, ...others} = this.props ;
    let tooltipId = id ;
    if(!tooltipId) {
      tooltipId = generateId() ;
    }
    let childrenWithProps = null ;
    let childrenAsFunction = null ;
    
    if(children != null && isFunction(children)) {
      childrenAsFunction = children as (value : UpTooltipProps) => JSX.Element ;
    } else {
      childrenWithProps = React.Children.map(this.props.children, function(child) {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, { "dataFor" : tooltipId  });
          } else {
            return child ;
          }
      });
    }

    var custom = '' ;

    if(this.props.type == 'light') {
     custom = style({
       background: "white !important",
       border: "1px #ebebeb solid",
       borderRadius: this.props.theme.borderRadius,
       $nest : {
         '&.place-top:after' : {
           borderTopColor: "#ebebeb !important",
           borderTopStyle: "solid !important",
           borderTopWidth: "6px !important"
         },
         '&.place-left:after' : {
           borderLeftColor: "#ebebeb !important",
           borderLeftStyle: "solid !important",
           borderLeftWidth: "6px !important"
         },
         '&.place-right:after' : {
           borderRightColor: "#ebebeb !important",
           borderRightStyle: "solid !important",
           borderRightWidth: "6px !important"
         },
         '&.place-bottom:after' : {
           borderBottomColor: "#ebebeb !important",
           borderBottomStyle: "solid !important",
           borderBottomWidth: "6px !important"
         }
       }
     });
    }
    const renderChildren = <>
        {childrenWithProps &&
          childrenWithProps
        }
        {childrenAsFunction &&
           childrenAsFunction({id : tooltipId})
        }
    </>
    if(isEmpty(content)) {
      return renderChildren ;
    }
    return (
      <div style={{display:"inline-block", width:'100%'}}>
        {renderChildren}
        <ReactTooltip className={classNames('up-tooltip', getStyles(this.props), custom)} id={tooltipId} getContent={this.getContent} {...others} />
      </div>
    );
  }
}
export default withTheme<UpTooltipProps>(UpTooltip) ;
