import * as React from 'react'
import {IntentType} from '../../../Common/theming/types' 
import {PanelStyled} from './styles'  
import {IconName} from "../../../Common/theming/types"

export interface Props extends React.HTMLProps<HTMLDivElement & Panel> {
  title?:string;
  footer?: string | React.ReactElement<any>;
  dismissable?:boolean;
  type?:IntentType;
  message?:string;
  iconName?:IconName;
  iconSize?:number;
}

export class Panel extends React.Component<Props, undefined> {
  public static defaultProps: Props = {
    footer: "",
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
