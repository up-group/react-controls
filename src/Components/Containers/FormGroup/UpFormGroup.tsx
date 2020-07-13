// Imports
import * as React from 'react';
import { UpFormGroupProps } from './';
import defaultTheme from '../../../Common/theming';
import { getStyles } from './styles';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
// Exports
class UpFormGroup extends React.Component<UpFormGroupProps & WithThemeProps> {
  
  public static defaultProps:UpFormGroupProps & WithThemeProps = {
     title:"",
     theme:defaultTheme,
     withTitleSeparator:false
  }

  constructor(props) {
    super(props) ;
  }

  render() {
      const {title, children, ...others} = this.props ;
      return (
        <fieldset className={getStyles(this.props)} {...others}>
            <legend>{title}</legend>
            {children}
        </fieldset>
      );
  }
}

export default withTheme<UpFormGroupProps>(UpFormGroup)
