// Imports
import * as React from 'react'
//import { PanelStyled } from './styles'  
import { UpPanelProps } from './'

// Exports
export class UpPanel extends React.Component<UpPanelProps, undefined> {
  public static defaultProps: UpPanelProps = {
    footer: "",
    //type:"default",
    disableAutoIntentIcon:true
  };
  public render() {
      return (<div >{this.props.children}</div>
    );
  }
}

export default (UpPanel) ;
