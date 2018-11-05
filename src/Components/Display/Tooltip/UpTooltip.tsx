// Imports
import * as React from "react" ;
import { Component } from "react";

import * as classNames from 'classnames'

import * as ReactTooltip from 'react-tooltip'
import {GenerateId, isString} from '../../../Common/utils'
import {Placement, Effect} from './' 

import {UpTooltipProps} from './'

import {cssRaw, style} from 'typestyle' 

cssRaw(`
  .up-tooltip-header {
    padding:4px;
    border-bottom:1px solid #111;
    font-weight:700;
    font-size:13px;
    color:#111;
    background:whitesmoke;
  }
  .up-tooltip-body {
    padding:8px 0px;
  }
  .up-tooltip {
    pointer-events: auto !important;
    opacity: 0.95 !important;
    padding:0px;
    &:hover {
      visibility: visible !important;
      opacity: 1 !important;
    }
   }
`) ;

export interface UpTooltipState {}

export default class UpTooltip extends Component<UpTooltipProps, UpTooltipState> {

   public static defaultProps : UpTooltipProps = {
       content : '',
       place : 'right',
       effect: 'float',
       //type:'light',
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
    var _id = id ;
    if(!_id) {
      _id = GenerateId() ;
    }

    var childrenWithProps = React.Children.map(this.props.children, function(child) {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { "dataFor" : _id  });
        } else {
          return child ;
        }
    });

    var custom = '' ;

    //if(this.props.type=='light') {
    //  custom = style({
    //    background: "#FEFEFE !important",
    //    border: "1px #ccc solid",
    //    borderRadius: "6px",
    //    $nest : {
    //      '&.place-top:after' : {
    //        borderTopColor: "#ccc !important",
    //        borderTopStyle: "solid !important",
    //        borderTopWidth: "6px !important"
    //      },
    //      '&.place-left:after' : {
    //        borderLeftColor: "#ccc !important",
    //        borderLeftStyle: "solid !important",
    //        borderLeftWidth: "6px !important"
    //      },
    //      '&.place-right:after' : {
    //        borderRightColor: "#ccc !important",
    //        borderRightStyle: "solid !important",
    //        borderRightWidth: "6px !important"
    //      },
    //      '&.place-bottom:after' : {
    //        borderBottomColor: "#ccc !important",
    //        borderBottomStyle: "solid !important",
    //        borderBottomWidth: "6px !important"
    //      }
    //    }
    //  });
    //}

    return (
      <div style={{display:"inline-block", width:'100%'}}>
        {childrenWithProps}
        <ReactTooltip className={classNames('up-tooltip', custom)} id={_id} getContent={this.getContent} {...others} />
      </div>
    );
  }
}