// Imports
import * as React from 'react'
import UpLabel from '../../Display/Label/index'
import {StyledCheckBox, CheckboxGroup} from './styles'

import { ThemedProps } from '../../../Common/theming/types'

export type Position = 'left' | 'right';

export interface Option {
    name: string;
    value: any;
    text?: string;
    iconName?: string;
    onChange?: (e: any) => void;
    checked?: boolean;
}

export interface UpCheckboxStyledProps extends Option, ThemedProps {
    className?: string;
}

export interface UpCheckboxProps {
    options: Array<Option>;
    //position?:Position;
}

// Exports
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

  stopPropagation = (event) => {
    event.stopPropagation() ;
  }

  handleChangeEvent = (event) => {
    var options = this.state.options ;
    for (var i in options) {
        var option:Option = options[i] ;
        if(option.name == event.target.name && option.onChange!=undefined) {
          option.onChange(event.target.checked);
          options[i].checked = event.target.checked;
        }
    }

    this.setState({options: options}) ;
  }

  render() {
    const options = this.state.options ;
    /*const icon = <SvgIcon iconName={props.iconName}
          width={props.iconSize}
          height={props.iconSize}
          color={props.color} /> ;*/
    return (
      <CheckboxGroup onClick={this.stopPropagation}>
        {/* Avoid set active element when using the component inside a label */}
        <label style={{display:"none"}}><input type="checkbox" /></label>
        {options.map((option) => (
          <StyledCheckBox 
            onChange={this.handleChangeEvent} 
            key={`Key_${option.name}_${option.value}`} 
            text={option.text} name={option.name} 
            value={option.value}
            checked={option.checked}>
          </StyledCheckBox>
        ))}
      </CheckboxGroup>
    );
  }
}