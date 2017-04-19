import * as React from 'react'
import UpLabel from '../../Display/Label/index'

import {StyledCheckBox} from './styles'

import {UpCheckboxProps, Position} from './'

export default class UpCheckbox extends React.Component<UpCheckboxProps, {}> {
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
        <StyledCheckBox 
          onChange={option.onChange} 
          key={`Key_${option.name}_${option.value}`} 
          text={option.text} name={option.name} 
          value={option.value}
          checked={option.checked}>
        </StyledCheckBox>
      ))}
      </div>
    );
  }
}