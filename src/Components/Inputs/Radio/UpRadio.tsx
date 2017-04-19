import * as React from 'react'
import UpLabel from '../../Display/Label/'

import {StyledRadioButton} from './styles'

import {UpRadioProps, Position} from './'

export default class UpCheckbox extends React.Component<UpRadioProps, {}> {
  constructor(props) {
    super(props) ;
  }
  componentWillUnmount() {

  }
  componentDidMount() {

  }
  render() {
    const options = this.props.options ;
    /*const icon = <SvgIcon iconName={props.iconName}
          width={props.iconSize}
          height={props.iconSize}
          color={props.color} /> ;*/
    return (
      <div>
      {options.map((option) => (
        <StyledRadioButton onChange={option.onChange} key={`Key_${this.props.name}_${option.value}`} 
          name={this.props.name}
          checked={option.checked}
          text={option.text} value={option.value}>
        </StyledRadioButton>
      ))}
      </div>
    );
  }
}