// Imports
import * as React from "react" ;
import { Component } from "react";

import * as classNames from 'classnames'

import * as ReactTooltip from 'react-tooltip'
import { generateId, isFunction } from '../../../Common/utils'

import {UpTooltipProps} from './'

import { style } from 'typestyle' 

const getStyles = (props : UpTooltipProps) => style({
  pointerEvents: 'auto',
  opacity: 0.95,
  padding: '0px',
  $nest : {
    '& .up-tooltip-header' : {
      padding: '4px',
      borderBottom:'1px solid #111',
      fontWeight:700,
      fontSize: '13px',
      color:'#111',
      background:'whitesmoke',
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

export default class UpTooltip extends Component<UpTooltipProps, UpTooltipState> {

   public static defaultProps : UpTooltipProps = {
       content : '',
       place : 'right',
       effect: 'float',
       type: 'light',
       multiline:false,
       html:false,
       delayHide:500,
       delayShow:500,
       disable:false
    };

  constructor(props: UpTooltipProps) {
    super(props) ;
  }

  getContent = () => {
    return (
      <div>
        {this.props.title != null && 
        <div className="up-tooltip-header">
          {this.props.title}
        </div>
        }
        <div className="up-tooltip-body">
          {this.props.content}
        </div>
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

    if(this.props.type=='light') {
     custom = style({
       background: "#FEFEFE !important",
       border: "1px #ccc solid",
       borderRadius: "6px",
       $nest : {
         '&.place-top:after' : {
           borderTopColor: "#ccc !important",
           borderTopStyle: "solid !important",
           borderTopWidth: "6px !important"
         },
         '&.place-left:after' : {
           borderLeftColor: "#ccc !important",
           borderLeftStyle: "solid !important",
           borderLeftWidth: "6px !important"
         },
         '&.place-right:after' : {
           borderRightColor: "#ccc !important",
           borderRightStyle: "solid !important",
           borderRightWidth: "6px !important"
         },
         '&.place-bottom:after' : {
           borderBottomColor: "#ccc !important",
           borderBottomStyle: "solid !important",
           borderBottomWidth: "6px !important"
         }
       }
     });
    }

    return (
      <>
        {childrenWithProps &&
          childrenWithProps
        }
        {childrenAsFunction &&
           childrenAsFunction({id : tooltipId})
        }
        <ReactTooltip className={classNames('up-tooltip', getStyles(this.props), custom)} id={tooltipId} getContent={this.getContent} {...others} />
      </>
    );
  }
}