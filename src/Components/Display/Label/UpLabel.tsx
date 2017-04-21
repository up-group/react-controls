import * as React from 'react';
import {UpLabelProps} from './'
import "@blueprintjs/core/dist/blueprint.css"

import { LabelStyled } from './styles';

export default class UpLabel extends React.Component<UpLabelProps, {}> {
  
  public static defaultProps = {
    text:'',
    disabled:false,
    required:false,
    textAlign:'left'
  }

  constructor(props) {
    super(props) ;
  }
  
  componentWillUnmount() {
  }

  componentDidMount() {
  }
  render() {
      const {children, text, required, ...others} = this.props ; 
      return (
        <LabelStyled {...others}>
          <span className="up-label-text">{text}</span>
          {required && 
            <span className="up-label-required"></span>
          }
          {children}
        </LabelStyled>
      ) ;
  }
}
