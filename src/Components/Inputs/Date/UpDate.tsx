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

// Exports
const MIN_DATE = new Date(-8640000000000);
const MAX_DATE = new Date(+8640000000000);

class UpDate extends BaseControlComponent<UpDateProps & WithThemeProps, Date> {
  public static defaultProps: UpDateProps = {
    format: "DD/MM/YYYY",
    showError: true,
    theme: defaultTheme
  };

  constructor(p, c) {
    super(p, c);
    this.state = { value: this.props.value };
  }

  shouldComponentUpdate(nextProps, nextState) {
    var shouldUpdate: boolean =
      nextState.value != this.state.value ||
      nextState.error != this.state.error;
    if (shouldUpdate === false) {
      shouldUpdate =
        this.props.disabled != nextProps.disabled ||
        this.props.format != nextProps.format ||
        this.props.maxDate != nextProps.maxDate ||
        this.props.minDate != nextProps.minDate ||
        this.props.readonly != nextProps.readonly;
      //|| this.props.theme !== nextProps.theme
    }
    return shouldUpdate;
  }

  onChange = (startDate: Date, endDate?: Date) => {
    this.handleChangeEvent(eventFactory(this.props.name, startDate), startDate);
  };

  showError() {
    return this.props.showError !== undefined
      ? this.props.showError === true
      : this.hasError;
  }

  showSuccess() {
    return this.props.showSuccess
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
      ...others
    } = this.props;
    return (
      <UpDateStyle
        format={format}
        theme={theme}
        value={this.state.value}
        hasError={this.hasError}
        onChange={this.onChange}
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