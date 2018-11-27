// Imports
import "normalize.css/normalize.css"
import 'react-dates/initialize';
import * as React from "react"
import { UpDateProps } from './'
import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
import UpDateStyle from "./styles";
import defaultTheme from "../../../Common/theming";
import withTheme, { WithThemeProps } from "../../../Common/theming/withTheme";

// Exports
const MIN_DATE = new Date(-8640000000000);
const MAX_DATE = new Date(+8640000000000);

class UpDate extends BaseControlComponent<UpDateProps & WithThemeProps, Date> {

    public static defaultProps: UpDateProps = {
        format: "DD/MM/YYYY",
        showError: true,
        theme:defaultTheme
    };

    constructor(p, c) {
        super(p, c);
        this.state = { value: this.props.value };
    }

    shouldComponentUpdate(nextProps, nextState) {
        var shouldUpdate: boolean = nextState.value != this.state.value || nextState.error != this.state.error ;
        if (shouldUpdate === false) {
            shouldUpdate = this.props.disabled != nextProps.disabled
                || this.props.format != nextProps.format
                || this.props.maxDate != nextProps.maxDate
                || this.props.minDate != nextProps.minDate
                || this.props.readonly != nextProps.readonly
                //|| this.props.theme !== nextProps.theme
        }
        return shouldUpdate;
    }

    onChange = (startDate: Date, endDate?: Date) => {
        const fakeEvent = new Event("change", { bubbles: true }) ;
        const event : React.ChangeEvent<any> 
                = { ...fakeEvent,
                    target : {
                        ...fakeEvent.target,
                        name: this.props.name,
                        value: startDate,
            },
            nativeEvent: fakeEvent, 
            isDefaultPrevented: () => false, 
            persist: () => {},
            isPropagationStopped: () => false} as React.SyntheticEvent<any>;

        this.handleChangeEvent(event, startDate);
    }

    renderControl() {
        const {format, hasError, disabled, minDate, maxDate, readonly, theme, ...others} = this.props ;    
        return <UpDateStyle
           format={format} 
           theme={theme}
           value={this.state.value}
           hasError={hasError || this.hasError()}
           onChange={this.onChange}
           disabled={disabled}
           minDate={minDate ? minDate : MIN_DATE}
           maxDate={maxDate ? maxDate : MAX_DATE}></UpDateStyle>;
    }

    getValue(newDate: any) {
        return newDate;
    }
}

export default withTheme<UpDateProps>(UpDate) 