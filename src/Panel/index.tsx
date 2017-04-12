import * as React from 'react';
import {PanelType} from './types' 
import {PanelStyled} from './styles'


// This is so that the onClick handler is accepted without type interferance
export interface Props extends React.HTMLProps<HTMLDivElement & Panel> {
  title?:string;
  footer?: string | React.ReactElement<any>;
  dismissable?:boolean;
  type?:PanelType;
  message?:string;
  iconName?:string;
  iconSize?:number;
}

class Panel extends React.Component<Props, undefined> {
  public static defaultProps: Props = {
    footer: "",
    dismissable:false,
    type:"primary"
  };
  public render() {
    const {children, ...rest} = this.props ;
   
    return (
      <PanelStyled {...rest}>
        {children}
      </PanelStyled>
    );
  }
}

export default Panel;
