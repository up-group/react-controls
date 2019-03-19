import * as React from 'react';
import { UpLabelProps } from './types';
import { getStyles } from './styles';

export default class UpLabel extends React.Component<UpLabelProps, {}> {
  
  public static defaultProps = {
    text:'',
    disabled:false,
    required:false,
    textAlign:'left',
    color: '#7f8fa4',
  }

  constructor(props) {
    super(props) ;
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
      const {children, text, required, textAlign, inline, ...others} = this.props ; 

      return (
        <label className={getStyles(this.props)} onFocus={this.onFocus} onClick={this.onClick} {...others}>
          <span className="up-label-text">{text}</span>
          {required && 
            <span className="up-label-required"></span>
          }
          {children}
        </label>
      ) ;
  }
}
