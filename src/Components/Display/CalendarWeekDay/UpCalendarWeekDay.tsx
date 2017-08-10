
import * as React from "react"
import * as moment from "moment"

export interface UpCalendarWeekDayProps {

}

export interface UpCalendarWeekDayState {
    selectedDate: Date;
}

export default class UpCalendarWeekDay extends React.Component<UpCalendarWeekDayProps, UpCalendarWeekDayState>{
    public static defaultProps: UpCalendarWeekDayProps = {};

    constructor(p, c) {
        super(p, c);
        this.state = {
            selectedDate: new Date()
        };

    }

    render() {
        var t = this.getCurrentWeek();
        moment.locale("fr");

        var dateNow = new Date();
        var dayofWeek = dateNow.getDay();
        var month = moment.months(dateNow.getMonth());


        var week = t.map((v, i) => {
            return <CalendarDay day={v} key={i} selectedDate={this.state.selectedDate} onClick={this.onDayClick} />
        });



        return <div>
            <div className="titreCalendrierHome col-md-12">
                <div className="moisAbr col-md-2 bg-aqua">{dateNow.getFullYear()}</div>
                <div id="moisFR" className="moisTitre col-md-10 bg-blue">{month}</div>
            </div>
            <div className="col-md-12">
                <div style={{ padding: 0 }} className="col-md-2">
                    {week}
                </div>
                <div style={{ padding: 0 }} className="col-md-10">
                    <DayDetail date={this.state.selectedDate} event={this.makeEvent()} />
                </div>

            </div>
        </div>
    }

    makeEvent = () => {
        var events = [];

        events.push(
            {
                start: new Date(2017, 7, 10, 11, 0),
                end: new Date(2017, 7, 10, 14, 0),
                title: "test 1"
            }
        );


        events.push(
            {
                start: new Date(2017, 7, 8, 9, 0),
                end: new Date(2017, 7, 8, 11, 0),
                title: "test 2"
            }
        );

        events.push(
            {
                start: new Date(2017, 7, 12, 18, 0),
                end: new Date(2017, 7, 12, 20, 0),
                title: "test .3"
            }
        );
        return events;
    }


    getCurrentWeek = () => {
        var dateNow = new Date();
        var firstDay = dateNow;
        while (firstDay.getDay() != 1) {
            firstDay = moment(firstDay).subtract('days', 1).toDate();
        }
        console.log(firstDay)
        var week = [firstDay];
        for (var i = 1; i < 7; i++) {
            week.push(moment(firstDay).add('days', i).toDate())
        }
        return week;
    }

    onDayClick = (date: Date) => {
        this.setState({ selectedDate: date });
    }

}

export interface CalendarDayProps {
    day: Date;
    selectedDate: Date;
    onClick: (date: Date) => void;
}

interface CalendarDayState {

}

class CalendarDay extends React.Component<CalendarDayProps, CalendarDayState>{
    //  public static defaultProps: CalendarDayProps = {};

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {
        var styleJour: React.CSSProperties = {
            borderBottom: "1px solid #ccc",
            borderLeft: "1px solid #ccc",
            borderRight: "1px solid #ccc",
            borderRadius: "5px 0 0 5px",
            height: 75,
            lineHeight: "60px",
            listStyleType: "none",
            textAlign: "center",


            width: "100 %",

            padding: "0",
            backgroundColor: "#fafafa",
            fontSize: "20px",
            fontWeight: 300,
            cursor: "pointer",

        };

        var styleNbDate = null;

        if (this.props.day.getDate() == this.props.selectedDate.getDate()) {
            styleJour["borderRight"] = "none";
            styleJour["boxShadow"] = "1px 1px 6px #ccc";

            styleNbDate = {
                border: "2px solid #00c0ef",
                padding: "3px 7px",
                borderRadius: "20px",
            }

        }

        return <div style={styleJour} onClick={this.onClick}>
            <span style={styleNbDate}> {this.props.day.getDate()}</span>
        </div >
    }

    onClick = () => {
        this.props.onClick(this.props.day);
    }
}



export interface DayDetailProps {
    date: Date;
    event: { start: Date; end: Date; title: string }[]
}

export interface DayDetailState {

}

export class DayDetail extends React.Component<DayDetailProps, DayDetailState>{
    //public static defaultProps: DayDetailProps = {};

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    //    return <div className="fc-content" style={position: relative}<div className="fc-view fc-view-agendaDay fc-agenda" style={position:relative" unselectable="on"><table style={width:100%" className= "fc-agenda-days fc-border-separate" cellspacing= "0" > <thead><tr className="fc-first fc-last"><th className="fc-agenda-axis fc-widget-header fc-first" style={width: 50px}&nbsp;</th><th className="fc-thu fc-col0 fc-widget-header fc-last"></th><th className="fc-agenda-gutter fc-widget-header fc-last" style={display: none}&nbsp;</th></tr ></thead > <tbody><tr className="fc-first fc-last"><th className="fc-agenda-axis fc-widget-header fc-first">&nbsp;</th><td className="fc-col0 fc-thu fc-widget-content fc-state-highlight fc-today fc-last"><div style={height: 482px}<div className="fc-day-content"><div style={position:relative">&nbsp;</div></div></div></td><td className="fc-agenda-gutter fc-widget-content fc-last" style={display: none}&nbsp;</td ></tr ></tbody ></table > <div style={position: absolute; z-index: 2; left: 0px; width: 100 %; top: 22px}<div style={position: absolute; width: 100%; overflow - x: hidden; overflow - y: auto; height: 482px}<div style={position:relative;width:100%;overflow: hidden"><div className="fc- event - container" style={position:absolute;z-index:8;top:0;left:0"> <div className="fc-event fc-event-vert fc-event-draggable fc-event-start fc-event-end ui-draggable ui-draggable-handle ui-resizable" style={position: absolute; top: 104px; left: 52px; background - color: rgb(60, 118, 61); border - color: rgb(60, 118, 61); color: rgb(255, 255, 255); width: 405.55px; height: 82px}<div className="fc-event-inner"><div className="fc-event-time">10:30 - 12:30</div><div className="fc-event-title">Evaluation M. DUPOND</div></div> <div className="fc-event-bg"></div> <div className="ui-resizable-handle ui-resizable-s" style={display: block}=</div></div> <div className="fc-event fc-event-vert fc-event-draggable fc-event-start fc-event-end" style={position: absolute; top: 251px; left: 52px; background - color: rgb(243, 156, 18); border - color: rgb(243, 156, 18); color: rgb(255, 255, 255); width: 405.55px; height: 61px}<div className="fc-event-inner"><div className="fc-event-time">14:00 - 15:30</div><div className="fc-event-title">Réunion d'équipe</div></div> <div className="fc-event-bg"></div> <div className="ui-resizable-handle ui-resizable-s">=</div></div > <div className="fc-event fc-event-vert fc-event-draggable fc-event-start fc-event-end" style={position: absolute; top: 377px; left: 52px; background - color: rgb(0, 192, 239); border - color: rgb(0, 192, 239); color: rgb(255, 255, 255); width: 405.55px; height: 40px}<div className="fc-event-inner"><div className="fc-event-time">17:00 - 18:00</div><div className="fc-event-title">Entretien M. MARTIN</div></div> <div className="fc-event-bg"></div> <div className="ui-resizable-handle ui-resizable-s">=</div></div ></div > <table className="fc-agenda-slots" style={width:100% " cellspacing="0"><tbody><tr className="fc- slot0 "><th className="fc- agenda - axis fc- widget - header" style={width: 50px}8:00</th><td className="fc- widget - content"><div style={position:relative">&nbsp;</div ></td ></tr > <tr className="fc-slot1 fc-minor"><th className="fc-agenda-axis fc-widget-header">&nbsp;</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot2 "><th className="fc-agenda-axis fc-widget-header">9:00</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot3 fc-minor"><th className="fc-agenda-axis fc-widget-header">&nbsp;</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot4 "><th className="fc-agenda-axis fc-widget-header">10:00</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot5 fc-minor"><th className="fc-agenda-axis fc-widget-header">&nbsp;</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot6 "><th className="fc-agenda-axis fc-widget-header">11:00</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot7 fc-minor"><th className="fc-agenda-axis fc-widget-header">&nbsp;</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot8 "><th className="fc-agenda-axis fc-widget-header">12:00</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot9 fc-minor"><th className="fc-agenda-axis fc-widget-header">&nbsp;</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot10 "><th className="fc-agenda-axis fc-widget-header">13:00</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot11 fc-minor"><th className="fc-agenda-axis fc-widget-header">&nbsp;</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot12 "><th className="fc-agenda-axis fc-widget-header">14:00</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot13 fc-minor"><th className="fc-agenda-axis fc-widget-header">&nbsp;</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot14 "><th className="fc-agenda-axis fc-widget-header">15:00</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot15 fc-minor"><th className="fc-agenda-axis fc-widget-header">&nbsp;</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot16 "><th className="fc-agenda-axis fc-widget-header">16:00</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot17 fc-minor"><th className="fc-agenda-axis fc-widget-header">&nbsp;</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot18 "><th className="fc-agenda-axis fc-widget-header">17:00</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot19 fc-minor"><th className="fc-agenda-axis fc-widget-header">&nbsp;</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot20 "><th className="fc-agenda-axis fc-widget-header">18:00</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot21 fc-minor"><th className="fc-agenda-axis fc-widget-header">&nbsp;</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr > <tr className="fc-slot22 "><th className="fc-agenda-axis fc-widget-header">19:00</th><td className="fc-widget-content"><div style={position:relative">&nbsp;</div></td></tr ></tbody ></table ></div ></div ></div ></div ></div >

    render() {
        var styleRemovePadding = {
            //   padding :0
        }

        var hourSegement = new Date(this.props.date.getFullYear(), this.props.date.getMonth(), this.props.date.getDate(), 8, 0)
        var current = hourSegement;

        var tableLine = [];


        for (var i = 0; i < 25; i++) {

            var event = null;

            var eventData = this.getEventIn(hourSegement);

            if (eventData.length != 0) {
                var evt = eventData[0];
                if (evt.start.valueOf() == hourSegement.valueOf()) {
                    event = <div style={{
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        position: "absolute",
                        top: "0",
                        bottom: "0",
                        right: 0,
                        backgroundColor: "rgb(243, 156, 18)",
                        height: "21px",
                        width: "80%",
                        paddingLeft: 10
                    }}>
                        {eventData[0].title}
                    </div>

                } else {
                    event = <div style={{
                        position: "absolute",
                        top: "0",
                        bottom: "0",
                        right: 0,
                        backgroundColor: "rgb(243, 156, 18)",
                        height: "21px",
                        width: "80%",
                    }}>
                    </div>
                }





            }


            var line = <tr style={
                {
                    height: 20,
                    borderBottom: "1px dotted"
                }
            }
                key={i}
                className="col-md-12">


                <td style={
                    {
                        padding: 0,
                        borderRight: "1px dotted"
                    }
                }
                    className="col-md-1">
                    {this.getHourString(current)}
                </td>


                <td style={styleRemovePadding} className="col-md-11">
                    {event}
                </td>


            </tr>

            tableLine.push(line)
            hourSegement = moment(hourSegement).add('minutes', 30).toDate();
            current = hourSegement;

        }

        return <table>
            <tbody>
                {tableLine}
            </tbody>
        </table>

    }


    getHourString = (date: Date) => {
        if (date.getMinutes() != 0) {
            return "";
        }
        return moment(date).format('HH:mm');
    }

    getEventIn = (inside: Date) => {
        var mDate = moment(inside);
        var data = this.props.event.filter((v) => {
            //if (mDate.isBetween(v.start, v.end)) {
            //    return true;
            //}
            if (mDate.isBefore(v.end) && mDate.isAfter(v.start) || v.start.valueOf() == inside.valueOf()) {
                return true;
            }

            return false;
        });

        return data;

    }


}
