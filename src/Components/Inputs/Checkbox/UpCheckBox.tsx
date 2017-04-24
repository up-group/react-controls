import * as React from 'react'
import UpLabel from '../../Display/Label/index'

import {StyledCheckBox} from './styles'

import {UpCheckboxProps, Position} from './'

export default class UpCheckbox extends React.Component<UpCheckboxProps, any> {
  constructor(props) {
    super(props) ;
    this.state = {
        options : props.options
    };
  }
  
  componentWillUnmount() {

  }
  componentDidMount() {

  }

  componentWillReceiveProps(nextProps: UpCheckboxProps) {
      if (nextProps.options !== this.props.options) {
          this.setState({options: nextProps.options });
      }
  }

  render() {
    const options = this.state.options ;
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