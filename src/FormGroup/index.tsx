import * as React from 'react';
import { FormGroupStyled } from './styles';

export interface Props {
    className?:string;
}

export default class FormGroup extends React.Component<Props, {}> {
  
  public static defaultProps = {
  }

  constructor(props) {
    super(props) ;
  }
  componentWillUnmount() {
  }

  componentDidMount() {
  }
  render() {
      return (
        <FormGroupStyled>
        {this.props.children}
        </FormGroupStyled>
      );
  }
}
