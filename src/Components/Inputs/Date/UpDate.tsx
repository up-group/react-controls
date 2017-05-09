// Imports
import "normalize.css/normalize.css"
import "@blueprintjs/core/dist/blueprint.css"
import * as React from "react"
import { UpDateProps, UpDateStyledProps } from './'
import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
import UpDateStyle from './styles'
import defaultTheme from '../../../Common/theming'

// Exports
const MIN_DATE = new Date(-8640000000000);
const MAX_DATE = new Date(+8640000000000);

export default class UpDate extends BaseControlComponent<UpDateProps, Date> {

    public static defaultProps: UpDateProps = {
        format: "DD/MM/YYYY",
        showError: true,
        theme:defaultTheme
    };

    constructor(p, c) {
        super(p, c);
        this.getValue = this.getValue.bind(this);
        this.state = { value: this.props.value };
    }

    componentWillMount = () => {
    }

    shouldComponentUpdate(nextProps, nextState) {
        var shouldUpdate: boolean = nextState.value != this.state.value;
        if (shouldUpdate === false) {
            shouldUpdate = this.props.disabled != nextProps.disabled
                || this.props.format != nextProps.format
                || this.props.maxDate != nextProps.maxDate
                || this.props.minDate != nextProps.minDate
                || this.props.readonly != nextProps.readonly
                || this.props.theme !== nextProps.theme
        }
        return shouldUpdate;
    }

    renderControl() {
        return <UpDateStyle
            format={this.props.format} value={this.state.value}

            hasError={this.props.hasError || this.hasError()}

            onChange={this.handleChangeEvent}
            disabled={this.props.disabled}
            minDate={this.props.minDate ? this.props.minDate : MIN_DATE}
            maxDate={this.props.maxDate ? this.props.maxDate : MAX_DATE}></UpDateStyle>;
    }

    getValue(newDate: any) {
        return newDate;
    }
}
