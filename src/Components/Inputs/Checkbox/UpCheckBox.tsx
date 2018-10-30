// Imports
import * as React from 'react'

import * as classNames from 'classnames'

import { CommonCheckableStyle } from '../_Common/Styled';
import { style } from 'typestyle';
import { WithThemeProps } from '../../../Common/theming/withTheme';

import { getFontClassName, isNullOrUndef } from "../../../Common/utils/helpers";
//import { IconCheckBox_Check, IconCheckBox_Empty } from "../../Display/Icons/Icons";
import { CheckBox, CheckBoxOutlineBlank } from "../../Display/Icons/materialinear";
import { debug } from "util";




export interface UpCheckboxProps /*extends InputHTMLAttributes<HTMLInputElement>*/ {
    text?: string;
    //Check?: boolean;
    //onChangeValue?: (check: boolean) => void;
    //Disable?: boolean;
    //onChange?: (check: boolean) => void;
    //onKeyDown?: (event) => void;
}

export interface UpCheckboxStyledProps extends WithThemeProps {
    className?: string;
}

export interface UpCheckboxProps {
    options: Array<Option>;
}

const BaseCheckBox: React.StatelessComponent<UpCheckboxStyledProps & Option> = (props) => {
  const { checked, className, text, name, value, onChange } = props;

  return (
    <label className={classNames("up-control", "up-checkbox", style(CommonCheckableStyle(props)), className)}>
      <input onClick={(e) => {
        e.stopPropagation();
        onChange({
          name,
          checked:!checked
      })}} checked={checked} name={name} type="checkbox" value={value} />
      <span className="up-control-indicator"></span>
      {text}
    </label>
  )
}

export interface UpCheckboxState {
  options: Array<Option>;
}

// Exports
export default class UpCheckbox extends React.Component<UpCheckboxProps, UpCheckboxState> {
  constructor(props) {
    super(props) ;
    this.state = {
        options : props.options
    };
  }
  
  componentWillReceiveProps(nextProps: UpCheckboxProps) {
      if (nextProps.options !== this.props.options) {
          this.setState({options: nextProps.options });
      }
  }

  stopPropagation = (event) => {
    event.stopPropagation() ;
  }

  handleChangeEvent = (optionChange:Option) => {
    const options = [...this.state.options] ;
    for (let propKey in options) {
        const option = options[propKey] ;
        if(option.name == optionChange.name && option.onChange!=undefined) {
          option.onChange(optionChange.checked);
          option.checked = optionChange.checked;
        }
    }
    this.setState({options}) ;
  }

  render() {
    const options = this.state.options ;
    /*const icon = <SvgIcon iconName={props.iconName}
          width={props.iconSize}
          height={props.iconSize}
          color={props.color} /> ;*/
    return (
      <div onClick={this.stopPropagation} style={{marginTop:'8px'}}>
        {/* Avoid set active element when using the component inside a label */}
        <label style={{display:"none"}}><input type="checkbox" /></label>
        {
          options.map((option) => {
            return <BaseCheckBox 
                onChange={this.handleChangeEvent} 
                key={`Key_${option.name}_${option.value}`} 
                text={option.text} 
                name={option.name} 
                value={option.value}
                checked={option.checked}>
              </BaseCheckBox>
          })
        }
      </div>
    );
  }
}
