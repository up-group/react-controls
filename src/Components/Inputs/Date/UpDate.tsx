// Imports
import "normalize.css/normalize.css"
import 'react-dates/initialize';
import * as React from "react"
import { UpDateProps } from './'

import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
import defaultTheme from "../../../Common/theming";
import withTheme, { WithThemeProps } from "../../../Common/theming/withTheme";
import { eventFactory } from "../../../Common/utils/eventListener";
import { Moment } from "moment";

import { SingleDatePicker } from "react-dates";
import { generateUniqueId } from "../../../Common/utils/helpers";

import defaultPhrases from "./i18n/fr";

import * as classnames from "classnames";
import { isEmpty } from "../../../Common/utils";

import * as moment from "moment";
import getStyles from "./styles";
import { DateInputProps } from "../FinanceurInput";

moment.locale("fr");

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
    theme: defaultTheme,
    minDate: MIN_DATE,
    maxDate: MAX_DATE,
    iconPosition: 'right',
  };

  dateInput: any;

  constructor(p, c) {
    super(p, c);
    this.state = { value: this.props.value };
  }

  onChange = (startDate: Moment, endDate?: Moment) => {
    this.handleChangeEvent(eventFactory(this.props.name, startDate), startDate);
  };

  showError() {
    return this.props.showError !== undefined
      ? this.props.showError === true
      : this.hasError;
  }

  showSuccess() {
    return this.props.showSuccess;
  }

  setInput = input => {
    // The ref function is called twice,
    // the first one with the component instance (as React)
    // and the second one with the DOM node instance
    if (this.dateInput == undefined) {
      this.dateInput = input;
    }
  };

  onFocusChange = ({ focused }: { focused: boolean }) => {
    if (focused) {
      this.onFocus(eventFactory("focus", true));
    } else {
      this.onBlur(eventFactory("blur", true));
    }
  };

  componentDidMount() {
    if (this.props["dataFor"] && this.dateInput) {
      this.dateInput.inputRef.setAttribute("data-tip", "tooltip");
      this.dateInput.inputRef.setAttribute("data-for", this.props["dataFor"]);
    }
  }

  renderControl() {
    const {
      disabled,
      minDate,
      maxDate,
      floatingLabel,
      placeholder,
      iconPosition
    } = this.props;

    const id = generateUniqueId();

    return (
      <div
        className={classnames(
          getStyles({
            focused: this.isFocused,
            ...(this.props as Omit<UpDateProps, "children">)
          }),
          this.isFocused ? "up-input-focused" : null,
          !isEmpty(this.currentValue) ? "up-input-valued" : null
        )}
      >
        {floatingLabel && <label htmlFor={id}>{floatingLabel}</label>}
        <SingleDatePicker
          focused={this.isFocused}
          onFocusChange={this.onFocusChange}
          placeholder={floatingLabel ? "" : placeholder}
          date={this.currentValue}
          onDateChange={this.onChange}
          id={id}
          disabled={disabled}
          showClearDate={true}
          showDefaultInputIcon={true}
          noBorder={false}
          screenReaderInputMessage={
            floatingLabel ? floatingLabel : placeholder ? placeholder : "Date"
          }
          ref={this.setInput}
          keepOpenOnDateSelect={false}
          hideKeyboardShortcutsPanel={true}
          phrases={defaultPhrases}
          isOutsideRange={day =>
            (maxDate && day > maxDate) || (minDate && day < minDate)
          }
          isDayBlocked={day => false}
          inputIconPosition={iconPosition == "right" ? "after" : "before"}
          // isDayHighlighted={(day: any) => day == new Date()}
        />
      </div>
    );
  }

  getValue(newDate: any) {
    return newDate;
  }
}

export default withTheme<UpDateProps>(UpDate) 