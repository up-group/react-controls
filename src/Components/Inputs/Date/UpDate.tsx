// Imports
import "normalize.css/normalize.css"
import 'react-dates/initialize';
import * as React from "react"
import { UpDateProps } from './'
import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
import UpDateStyle from "./styles";
import defaultTheme from "../../../Common/theming";
import withTheme, { WithThemeProps } from "../../../Common/theming/withTheme";
import { eventFactory } from "../../../Common/utils/eventListener";
import { Moment } from "moment";

// Exports
const MIN_DATE = new Date(-8640000000000);
const MAX_DATE = new Date(+8640000000000);

class UpDate extends BaseControlComponent<
  UpDateProps & WithThemeProps,
  Moment
> {
  public static defaultProps: UpDateProps = {
    format: "DD/MM/YYYY",
    showError: true,
    theme: defaultTheme
  };

  constructor(p, c) {
    super(p, c);
    this.state = { value: this.props.value };
  }

  onChange = (startDate: Moment, endDate?: Moment) => {
    console.log("onChange", startDate);
    this.handleChangeEvent(eventFactory(this.props.name, startDate), startDate);
  };

  get isControlled() {
    return this.props.value !== undefined;
  }

  get currentValue() {
    return this.isControlled ? this.props.value : this.state.value;
  }

  showError() {
    return this.props.showError !== undefined
      ? this.props.showError === true
      : this.hasError;
  }

  showSuccess() {
    return this.props.showSuccess;
  }

  renderControl() {
    const {
      format,
      disabled,
      minDate,
      maxDate,
      readonly,
      theme,
      hasError,
      floatingLabel,
      placeholder,
      ...others
    } = this.props;
    return (
      <UpDateStyle
        format={format}
        theme={theme}
        value={this.currentValue}
        hasError={this.hasError}
        onChange={this.onChange}
        floatingLabel={floatingLabel}
        placeholder={placeholder}
        disabled={disabled}
        minDate={minDate ? minDate : MIN_DATE}
        maxDate={maxDate ? maxDate : MAX_DATE}
      />
    );
  }

  getValue(newDate: any) {
    return newDate;
  }
}

export default withTheme<UpDateProps>(UpDate) 