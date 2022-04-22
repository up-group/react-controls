// Imports
import React from 'react';
import classnames from 'classnames';
import { getCheckableStyles } from '../_Common/Styled';
import { style } from 'typestyle';
import withTheme from '../../../Common/theming/withTheme';
import defaultTheme from '../../../Common/theming';
import { UpCheckboxStyledProps, Option, UpCheckboxProps, UpCheckboxState } from './types';

const BaseCheckBox: React.FunctionComponent<UpCheckboxStyledProps & Option> = (
  props: UpCheckboxStyledProps & Option
) => {
  const { checked, disabled, className, text, name, value, onChange, tabIndex, readonly } = props;

  return (
    <label className={classnames('up-control', 'up-checkbox', style(getCheckableStyles(props)), className)}>
      <input
        onClick={e => {
          e.stopPropagation();
          e.persist();
          !readonly && onChange(e, { name, checked: !checked });
        }}
        onChange={e => {}}
        checked={checked}
        disabled={disabled}
        name={name}
        type="checkbox"
        value={value}
      />
      <span className="up-control-indicator"></span>
      <span className="up-control-label">{text}</span>
    </label>
  );
};

class UpCheckbox extends React.Component<UpCheckboxProps, UpCheckboxState> {
  static defaultProps: Partial<UpCheckboxProps> = {
    theme: defaultTheme,
  };

  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
    };
  }

  stopPropagation = event => {
    event.stopPropagation();
  };

  handleChangeEvent = (event: React.ChangeEvent<any>, optionChange: Option) => {
    const options = [...this.currentOptions];
    for (const propKey in options) {
      const option = options[propKey];
      if (option.name == optionChange.name && option.onOptionChange != undefined) {
        option.onOptionChange(event, optionChange.checked);
        if (!this.isControlled) {
          option.checked = optionChange.checked;
        }
      }
    }

    if (!this.isControlled) {
      this.setState({ options });
    }
  };

  get isControlled() {
    return this.props.options !== undefined;
  }

  get currentOptions() {
    return this.isControlled ? this.props.options : this.state.options;
  }

  render() {
    const options = this.currentOptions;
    /*const icon = <SvgIcon iconName={props.iconName}
              width={props.iconSize}
              height={props.iconSize}
              color={props.color} /> ;*/
    return (
      <div className="up-checkbox" onClick={this.stopPropagation} style={this.props.styles}>
        {/* Avoid set active element when using the component inside a label */}
        <label style={{ display: 'none' }}>
          <input type="checkbox" />
        </label>
        {options.map(option => {
          return (
            <BaseCheckBox
              {...option}
              onChange={this.handleChangeEvent}
              key={`Key_${option.name}_${option.value}`}
              theme={this.props.theme}
              tabIndex={this.props.tabIndex}
            ></BaseCheckBox>
          );
        })}
      </div>
    );
  }
}

export { UpCheckbox };
export default withTheme<UpCheckboxProps>(UpCheckbox);
