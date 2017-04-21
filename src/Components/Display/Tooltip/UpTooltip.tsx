// Imports
import * as React from "react" ;
import { Component } from "react";
import {IntentType} from '../../../Common/theming/types'
import * as ReactTooltip from 'react-tooltip'
import {GenerateId} from '../../../Common/utils'
import {Placement, Effect} from './' 

export interface UpTooltipProps extends React.Props<UpTooltip> {
  content: string;
  placement?: Placement;
  type?: IntentType;
  effect?: Effect;
  multiline?:boolean;
  html?: boolean; 
  delayHide?:number;
  delayShow?:number;
  disable?:boolean;
  id?:string;
}

export interface UpTooltipState {

}

export default class UpTooltip extends Component<UpTooltipProps, UpTooltipState> {

   public static defaultProps : UpTooltipProps = {
       content : '',
       placement : 'top',
       effect: 'solid',
       type:'info',
       multiline:true,
       html:true,
       delayHide:500,
       delayShow:500,
       disable:false
    };

  constructor(props: UpTooltipProps) {
    super(props) ;
  }
  componentWillUnmount() {
  
  }
  componentDidMount() {
   
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
          return child
        }
    });
    var _getContent:any = content ;
    if (typeof content === 'string' || content instanceof String) {
        _getContent = () => {return content;} ;
    }
    return (
      <div style={{display:"inline-block"}}>
        {childrenWithProps}
        <ReactTooltip id={_id} getContent={_getContent} {...others} />
      </div>
    );
  }
}
