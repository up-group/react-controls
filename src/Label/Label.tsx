import * as React from 'react';
import {LabelProps} from './types'
import "@blueprintjs/core/dist/blueprint.css"

import Styled from 'styled-components'

const WrapperControl = Styled.div``


export default class Label extends React.Component<LabelProps, {}> {
  
  public static defaultProps = {
    text:'',
    position:'left',
    disabled:false
  }
  
  wrappedInput : any ;

  constructor(props) {
    super(props) ;
    this.setInput = this.setInput.bind(this) ;
  }
  setInput(input) {
    this.wrappedInput = input;
  }
  componentWillUnmount() {

  }

  componentDidMount() {
    // Set a temp id for the input
    console.log(this.wrappedInput);
  }
  render() {
      const position = this.props.position ;
      if(position==='right') {
        return (
          <label className="pt-label">
          {this.props.children}
          <span className="pt-label">{this.props.text}</span>
          </label>
        );
      } else {
        return (
          <label className="pt-label"> 
          <span className="pt-label-text">{this.props.text}</span>
          <WrapperControl innerRef={this.setInput}>
            {this.props.children}
          </WrapperControl>
          </label>
        );
      }
  }
}
