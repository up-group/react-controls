// Imports
import * as React from 'react'
import { PanelStyled } from './styles'  
import { UpPanelProps } from './'
import { withTheme } from 'styled-components'
import defaultTheme from '../../../Common/theming'

// Exports
export class UpPanel extends React.Component<UpPanelProps, undefined> {
  public static defaultProps: UpPanelProps = {
    footer: "",
    type:"primary",
    theme:defaultTheme,
    disableAutoIntentIcon:true
  };
  public render() {
    return (
      <PanelStyled {...this.props}></PanelStyled>
    );
  }
}

export default withTheme(UpPanel) ;
