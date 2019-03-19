// Imports
import * as React from 'react'
import * as classNames from 'classnames'

import { getCheckableStyles } from '../_Common/Styled';
import { style } from 'typestyle';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import defaultTheme from '../../../Common/theming';

export interface UpCheckboxProps {
  options: Array<Option>;
  styles?: React.CSSProperties;
}

export interface Option {
  name: string;
  value?: any;
  text?: string;
  iconName?: string;
  onOptionChange?: (event: React.ChangeEvent<any>, value: boolean) => void;
  checked?: boolean;
}

export interface UpCheckboxStyledProps extends WithThemeProps {
  className?: string;
  onChange?: (event: React.ChangeEvent<any>, value: Option) => void;
}

export interface UpCheckboxProps {
    options: Array<Option>;
}

const BaseCheckBox: React.StatelessComponent<UpCheckboxStyledProps & Option> = (props: UpCheckboxStyledProps & Option & WithThemeProps) => {
  const { checked, className, text, name, value, onChange } = props;

  return (
    <label className={classNames("up-control", "up-checkbox", style(getCheckableStyles(props)), className)}>
      <input onClick={(e) => {
        e.stopPropagation();
        e.persist() ;
        onChange(e, { name, checked:!checked })}} onChange={(e) => {}} checked={checked} name={name} type="checkbox" value={value} />
      <span className="up-control-indicator"></span>
      <span className="up-control-label">{text}</span>
    </label>
  )
}

export interface UpCheckboxState {
  options: Array<Option>;
}

// Exports
class UpCheckbox extends React.Component<UpCheckboxProps & WithThemeProps, UpCheckboxState> {
  
  static defaultProps : Partial<UpCheckboxProps> & WithThemeProps = {
    theme:defaultTheme,
    styles: { marginTop: '8px' },
  }

  constructor(props) {
    super(props) ;
    this.state = {
        options : props.options
    };
  }

  stopPropagation = (event) => {
    event.stopPropagation() ;
  }

  handleChangeEvent = (event: React.ChangeEvent<any>, optionChange: Option) => {
    const options = [...this.state.options] ;
    for (let propKey in options) {
        const option = options[propKey] ;
        if(option.name == optionChange.name && option.onOptionChange!=undefined) {
          option.onOptionChange(event, optionChange.checked);
          option.checked = optionChange.checked;
        }
    }
    this.setState({options}) ;
  }

  get isControlled() {
    return this.props.options !== undefined;
  }

  get currentOptions() {
    return this.isControlled ? this.props.options : this.state.options;
  }

  render() {
    const options = this.currentOptions ;
    /*const icon = <SvgIcon iconName={props.iconName}
          width={props.iconSize}
          height={props.iconSize}
          color={props.color} /> ;*/
    return (
      <div onClick={this.stopPropagation} style={this.props.styles}>
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
                theme={this.props.theme}
                checked={option.checked}>
              </BaseCheckBox>
          })
        }
      </div>
    );
  }
}

export default withTheme<UpCheckboxProps>(UpCheckbox);