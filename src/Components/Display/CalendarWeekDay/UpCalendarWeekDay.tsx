
import * as React from "react"
import * as moment from "moment"

export interface UpCalendarWeekDayProps {

}

export interface UpCalendarWeekDayState {

}

export default class UpCalendarWeekDay extends React.Component<UpCalendarWeekDayProps, UpCalendarWeekDayState>{
    public static defaultProps: UpCalendarWeekDayProps = {};

    constructor(p, c) {
        super(p, c);
        this.state = {};

    }

    render() {
        this.getWeek();
        moment.locale("fr");

        var dateNow = new Date();
        var dayofWeek = dateNow.getDay();
        var month = moment.months(dateNow.getMonth());
        return <div>
            <div className="titreCalendrierHome col-md-12">
                <div className="moisAbr col-md-2 bg-aqua">{dateNow.getFullYear()}</div>
                <div id="moisFR" className="moisTitre col-md-8 bg-blue">{month}</div>
            </div>
            <div className="col-md-12">
                <div className="col-md-2">

                </div>
                <div className="col-md-10">

                </div>
            </div>
        </div>
    }


    getWeek = () => {
        var dateNow = new Date();
        var firstDay = dateNow;
        while (firstDay.getDay() != 1) {
            firstDay = moment(firstDay).subtract('days', 1).toDate();
        }
        console.log(firstDay)
    }
}
