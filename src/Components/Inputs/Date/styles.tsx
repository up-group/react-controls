//import * as React from 'react'
//import { UpDateStyledProps } from './'



////class UpLocaleUtils implements IDatePickerLocaleUtils {
////    formatDay(day: Date, locale: string) {
////        return "jour";
////    }
////    formatMonthTitle(month: Date, locale: string) {
////        return "";
////    }
////    formatWeekdayShort(weekday: number, locale: string) {
////        return "";
////    }
////    formatWeekdayLong(weekday: number, locale: string) {
////        return "";
////    }
////    getFirstDayOfWeek(locale: string) {
////        return 1;
////    }
////    getMonths(locale: string): [string, string, string, string, string, string, string, string, string, string, string, string] {
////        return ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet",
////            "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
////    }
////}

////const locale = new UpLocaleUtils();

//const BaseDate: React.StatelessComponent<UpDateStyledProps> = (props) => {

//    const {value, className, format, disabled, minDate, maxDate, innerRef, onChange, ...others} = props;
//    const picker = (<span className="pt-icon pt-icon-calendar"></span>);

//    return (
//        <input type="date"/>
//        //<DateInput className={className}
//        //locale="fr"
//        //ref={innerRef}
//        //invalidDateMessage=""
//        //localeUtils={locale}
//        //rightElement={picker}
//        //value={value}
//        //disabled={disabled}
//        //minDate={minDate}
//        //maxDate={maxDate}
//        //canClearSelection={true}
//        //closeOnSelection={true}
//        //onChange={onChange}
//        //outOfRangeMessage={""}
//        //    format={format} />
//    );
//}

//export const NormalDate = styled<UpDateStyledProps>(BaseDate) `
//`;

//export default class UpDateStyle extends React.Component<UpDateStyledProps, {}> {
//    public static defaultProps: UpDateStyledProps = {
//        value: null
//    };

//    dateInput: any;

//    constructor(p, c) {
//        super(p, c);
//    }

//    setInput = (input) => {
//        // The ref function is called twice, 
//        // the first one with the component instance (as React) 
//        // and the second one with the DOM node instance
//        if (this.dateInput == undefined) {
//            this.dateInput = input;
//        }
//    }

//    componentDidMount() {
//        var _props = this.props as UpDateStyledProps;
//        if (_props.dataFor && this.dateInput) {
//            this.dateInput.inputRef.setAttribute('data-tip', 'tooltip');
//            this.dateInput.inputRef.setAttribute('data-for', _props.dataFor);
//        }
//    }

//    public render() {
//        return (
//            <NormalDate innerRef={this.setInput} {...this.props} />
//        );
//    }
//}