import * as React from 'react';
import {UpLabelProps} from './'
// import "@blueprintjs/core/dist/blueprint.css"

//import { LabelStyled } from './styles';

export default class UpLabel extends React.Component<UpLabelProps, {}> {
  
  public static defaultProps = {
    text:'',
    disabled:false,
    required:false,
    textAlign:'right'
  }

  constructor(props) {
    super(props) ;
  }
  
  componentWillUnmount() {
  }

  componentDidMount() {
  }

  // Fix double focus with the blueprint datepicker.
  onFocus = (e) => {
    e.preventDefault() ;
    return false; 
  }
  onClick = (e) => {
    e.preventDefault() ;
    return false; 
  }
  // End Fix 

  render() {
      const {children, text, required, ...others} = this.props ; 
      return (
        <label onFocus={this.onFocus} onClick={this.onClick} {...others}>
          <span className="up-label-text">{text}</span>
          {required && 
            <span className="up-label-required"></span>
          }
          {children}
          </label>
      ) ;
  }
}
