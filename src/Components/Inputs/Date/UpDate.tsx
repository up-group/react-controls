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
import { style } from "typestyle";
import UpSelect from "../Select";

moment.locale("fr");

// Exports
const MIN_DATE = new Date(-8640000000000);
const MAX_DATE = new Date(+8640000000000);

const selectStyle = style({
  $nest: {
     '& > select' : {
        display: 'inline-block',
        padding: '0.5em',
        backgroundImage: 'linear-gradient(45deg, transparent 50%, gray 50%),linear-gradient(135deg, gray 50%, transparent 50%),linear-gradient(to right, #ccc, #ccc)',
        backgroundPosition: 'calc(100% - 4px) calc(0.25em + 0.5px), calc(100% - 3.3px) calc(0.25em + 0.5px), calc(100% - 0.6em) 0.13em',
        backgroundSize: '5px 5px, 5px 5px, 1px 1.5em',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent',
        border: 0,
        margin: 0,      
        '-webkit-box-sizing': 'border-box',
        '-moz-box-sizing': 'border-box',
        boxSizing: 'border-box',
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none'
    },
    '& > select:focus' : {
      backgroundImage: 'linear-gradient(45deg, green 50%, transparent 50%),linear-gradient(135deg, transparent 50%, green 50%),linear-gradient(to right, #ccc, #ccc)',
      backgroundPosition: 'calc(100% - 3.3px) 0.25em, calc(100% - 5px) 0.25em, calc(100% - 0.6em) 0.13em;',
      backgroundSize: '5px 5px, 5px 5px, 1px 1.5em',
      backgroundRepeat: 'no-repeat',
      border: 0,
      borderColor: 'green',
      zIndex: 99
    },
    '& > select:-moz-focusring' : {
      color: 'transparent',
      textShadow: '0 0 0 #000',
    }
  }
})

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
    numberOfMonths: 2
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
  
  returnYears = () => {
    let years = []
    for(let i = moment().year() - 100; i <= moment().year(); i++) {
        years.push({
          id: i,
          text: i
        });
    }
    years = years.sort((a, b) => b.id - a.id);
    return years;
  }

  formatMonth = (month) => (month+1) < 10 ? `0${month+1}` : `${month+1}`;

  renderMonthElement = ({ month, onMonthSelect, onYearSelect }) =>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexShrink: 2 }}>
        <div style={{ width: '30%' }}>
          <UpSelect
              value={{ id: month.month(), text : this.formatMonth(month.month())}}
              menuPlacement='bottom'
              data={moment.months().map((label, value) => (
                {
                  id: value,
                  text: label
                }
              ))}
              tooltip={moment.months().find((label, value) => value == month.month())}
              onChange={(e) => {
                onMonthSelect(month, e.target.value.id)
              }}
          >
          </UpSelect>
        </div>
        <div className={style({ width: '40%' })}>
          <UpSelect
              data={this.returnYears()}
              menuPlacement='bottom'
              value={{ id : month.year(), text : month.year()}}
              isSearchable={true}
              onChange={(e) => onYearSelect(month, e.target.value.id)}>
          </UpSelect>
        </div>
    </div>

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
          "up-date",
          this.isFocused ? "up-input-focused" : null,
          !isEmpty(this.currentValue) ? "up-input-valued" : null
        )}
      >
        {floatingLabel && <label htmlFor={id}>{floatingLabel}</label>}
        <SingleDatePicker
          renderMonthElement={this.props.numberOfMonths == 1 ? this.renderMonthElement : null}
          numberOfMonths={this.props.numberOfMonths}
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