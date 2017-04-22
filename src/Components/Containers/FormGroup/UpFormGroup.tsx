// Imports
import * as React from 'react'
import { FormGroupStyled, FormGroupTitle} from './styles'
import { UpFormGroupProps } from './'

// Exports
export default class UpFormGroup extends React.Component<UpFormGroupProps, {}> {
  
  public static defaultProps = {
     title:""
  }

  constructor(props) {
    super(props) ;
  }

  componentWillUnmount() {
  }

  componentDidMount() {
  }

  render() {
      const {title, children, ...others} = this.props ;
      return (
        <FormGroupStyled {...others}>
            <FormGroupTitle>{title}</FormGroupTitle>
            {children}
        </FormGroupStyled>
      );
  }
}
