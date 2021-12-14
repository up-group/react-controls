import 'normalize.css/normalize.css'
import 'react-dates/initialize';
import React from 'react'
import { UpDateProps } from './types';
import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
import defaultTheme from '../../../Common/theming';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import { eventFactory } from '../../../Common/utils/eventListener';
import SvgIcon from '../../Display/SvgIcon'
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { generateUniqueId } from '../../../Common/utils/helpers';
import defaultPhrases from './i18n/fr';
import classnames from 'classnames';
import { isEmpty } from '../../../Common/utils';
import getStyles from './styles';
import { style } from 'typestyle';
import UpSelect from '../Select';
import { isNumeric } from '../../../Common/utils/helpers';
import { getTestableComponentProps } from '../../../Common/utils/types';
import update from 'react-addons-update';

moment.locale('fr');

const MIN_DATE = new Date(-8640000000000);
const MAX_DATE = new Date(+8640000000000);

class UpDate extends BaseControlComponent<UpDateProps & WithThemeProps, moment.Moment> {

    public static defaultProps: UpDateProps = {
        format: 'DD/MM/YYYY',
        showError: true,
        theme: defaultTheme,
        minDate: MIN_DATE,
        maxDate: MAX_DATE,
        iconPosition: 'right',
        numberOfMonths: 2,
        enableOutsideDays: true,
        daySize: 30
    };

    dateInput: any;
    id: string;
    datePicker: HTMLInputElement;

    constructor(p, c) {
        super(p, c);
        this.state = { value: this.props.value };
        this.id = generateUniqueId();
    };

    onChange = (startDate: moment.Moment, endDate?: moment.Moment) => {
        let value = startDate ;
        if(!(value instanceof moment) && moment(value, this.props.format, true).isValid()) {
            value = moment(value);
        }
        
        if(moment(value, this.props.format, true).isValid()) {
            let isOutsideRange = this.props.isOutsideRange || this.defaultIsOutsideRange ;
            if(isOutsideRange(value)) {
                value = null;
            }
            this.handleChangeEvent(eventFactory(this.props.name, value), value);
        } else {
            this.handleChangeEvent(eventFactory(this.props.name, null), null);
        }
    };

    showError() {
        return this.props.showError !== undefined ? this.props.showError === true : this.hasError;
    };

    showSuccess() {
        return this.props.showSuccess;
    };

    setInput = input => {
        // The ref function is called twice,
        // the first one with the component instance (as React)
        // and the second one with the DOM node instance
        if (this.dateInput == undefined) {
            this.dateInput = input;
            if (this.props.tabIndex) {
                this.dateInput.setAttribute('tabindex', this.props.tabIndex);
            }
        }
    };

    onFocusChange = ({ focused }: { focused: boolean }) => {
        if (focused) {
            this.onFocus(eventFactory('focus', true));
        } else {
            this.onBlur(eventFactory('blur', true));
            setTimeout(() => {
                this.resetDateInputValue();
            }, 100);
        }
    };

    checkDate(e: KeyboardEvent): void {
        const event = e.target as HTMLInputElement;

        if (event && event.value) {
            const value = event.value as string;
            const stringsToNumerics = value.split('/').map(stringValue => isNumeric(stringValue));
            //Check if the array has falsy values which means unwanted characters.
            const unwantedCharacters = stringsToNumerics.some(booleanValue => !booleanValue);
            //Two characters are acceptable : / and -
            if (unwantedCharacters) event.value = event.value.replace(/[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF!''$%^&*()_+|~=`{}\[\]:\\;<>?,.@#§µ²°]/, '');
        }
    };

    componentDidMount() {
        this.datePicker = document.getElementById(this.id) as HTMLInputElement;

        if (this.datePicker) {
            this.datePicker.addEventListener('input', this.checkDate);
        }

        if (this.props['dataFor'] && this.datePicker) {
            this.datePicker.setAttribute('data-tip', 'tooltip');
            this.datePicker.setAttribute('data-for', this.props['dataFor']);
        }
    };

    componentWillUnmount() {
        if (this.datePicker) this.datePicker.removeEventListener('input', this.checkDate);
    };

    returnYears = () => {
        let years = []
        for (let i = moment().year() - 100; i <= moment().year(); i++) {
            years.push({
                id: i,
                text: i
            });
        }
        years = years.sort((a, b) => b.id - a.id);
        return years;
    };

    formatMonth = (month) => (month + 1) < 10 ? `0${month + 1}` : `${month + 1}`;

    getValue(newDate: any) {
        return newDate;
    };

    resetDateInputValue = (force:boolean = false) => {
        if(force === true || !this.currentValue) {
            let newState = update(this.state, { extra: {  reset: { $set: true } } });
            this.setState(newState, () => { 
                newState = update(this.state, { extra: { reset: { $set: false } } });
                this.setState(newState)
            })
        }
    }

    onCloseCalendar = ({ date }) => {
        // Manually clear date field when the date returned is not the correct one (manual entry). 
        if (date == null) {
            this.resetDateInputValue();
        };
    };

    renderMonthElement = ({ month, onMonthSelect, onYearSelect }) => (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", flexShrink: 2 }}>
            <div style={{ width: "30%" }}>
                <UpSelect
                    value={{ id: month.month(), text: this.formatMonth(month.month()) }}
                    menuPlacement="bottom"
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
            <div className={style({ width: "40%" })}>
                <UpSelect
                    data={this.returnYears()}
                    menuPlacement="bottom"
                    value={{ id: month.year(), text: month.year() }}
                    isSearchable={true}
                    onChange={(e) => onYearSelect(month, e.target.value.id)}>
                </UpSelect>
            </div>
        </div>
    )

    defaultIsOutsideRange = (day: Date | moment.Moment): boolean => {
        let _day : moment.Moment = day as moment.Moment ;
        if(day instanceof Date) {
            _day = moment(day)
        }
        
        let maxDate : unknown = this.props.maxDate ; 
        if(maxDate instanceof moment) {
            maxDate = (maxDate as moment.Moment).startOf('day')
        } else if (maxDate instanceof Date) {
            maxDate = (maxDate as Date).setHours(0, 0, 0, 0)
        }
        let minDate : unknown = this.props.minDate ; 
        if(minDate instanceof moment) {
            minDate = (minDate as moment.Moment).startOf('day')
        } else if (minDate instanceof Date) {
            minDate = (minDate as Date).setHours(0, 0, 0, 0)
        }

        return (maxDate && _day.toDate().setHours(0, 0, 0, 0) > maxDate) ||
            (minDate && _day.toDate().setHours(0, 0, 0, 0) < minDate);
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

        if(this.state.extra && this.state.extra.reset) {
            return null
        }
        
        return (
            <div
                className={classnames(
                    getStyles({
                        focused: this.isFocused,
                        ...(this.props as Omit<UpDateProps, 'children'>)
                    }),
                    'up-date',
                    this.isFocused ? 'up-input-focused' : null,
                    !isEmpty(this.currentValue) ? 'up-input-valued' : null
                )}
                {...getTestableComponentProps(this.props)}
            >
                {floatingLabel && <label htmlFor={this.id}>{floatingLabel}</label>}
                <SingleDatePicker
                    customInputIcon={<SvgIcon iconName="calendar" width="15px" height="15px" />}
                    enableOutsideDays={this.props.enableOutsideDays}
                    renderMonthElement={this.props.numberOfMonths == 1 ? this.renderMonthElement : null}
                    numberOfMonths={this.props.numberOfMonths}
                    focused={this.isFocused}
                    onFocusChange={this.onFocusChange}
                    placeholder={floatingLabel ? '' : placeholder}
                    date={this.currentValue}
                    onDateChange={this.onChange}
                    id={this.id}
                    disabled={disabled || this.props.readonly}
                    showClearDate={!this.props.readonly}
                    showDefaultInputIcon={true}
                    noBorder={false}
                    screenReaderInputMessage={floatingLabel ? floatingLabel : placeholder ? placeholder : "Date"}
                    ref={this.setInput}
                    keepOpenOnDateSelect={false}
                    hideKeyboardShortcutsPanel={true}
                    phrases={defaultPhrases}
                    isDayBlocked={day => false}
                    inputIconPosition={iconPosition == "right" ? "after" : "before"}
                    isOutsideRange={this.props.isOutsideRange || this.defaultIsOutsideRange}
                    // isDayHighlighted={(day: any) => day == new Date()}
                    daySize={this.props.daySize}
                    onClose={this.onCloseCalendar}
                />
            </div>
        );
    }
};

export { UpDate };
export default withTheme<UpDateProps>(UpDate);
