import * as React from 'react' ;

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

import { CalendarOptions, EventInput } from '@fullcalendar/core';
import frLocale from '@fullcalendar/core/locales/fr';

import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import './UpCalendar.css'
import { style } from 'typestyle';
import * as classnames from 'classnames';
import { usePopper } from "react-popper-2";

export { EventInput }

export interface UpCalendarProps extends CalendarOptions {
    className?: string;
    generateTooltipEvent? : (event: EventInput) => unknown;
    renderTooltipHeader? : (event: EventInput | unknown) => JSX.Element;
    renderTooltipContent? : (event: EventInput | unknown) => JSX.Element;
}

const UpCalendar : React.FunctionComponent<UpCalendarProps> = (props) => {
    const calendar = React.useRef(null) ;

    React.useEffect(() => {
        const calendarApi = calendar.current.getApi();
    });

    var fullCalendarStyle = style({
        $nest: {
            "& td.fc-timegrid-slot": {
                cursor: props.editable ? "pointer" : "default",
            },
            "& td.fc-daygrid-day": {
                cursor: props.editable ? "pointer" : "default",
            },
        },
    });
    
    const [tooltipEvent, setTooltipEvent] = React.useState<unknown>(null);
    const [referenceElement, setReferenceElement] = React.useState<HTMLElement | null>(
        null
    );

    const [arrowElement, setArrowElement] = React.useState<HTMLElement | null>(null);

    const [popperElement, setPopperElement] = React.useState<HTMLElement | null>(null);

    var styles = null ;
    var attributes = null ;
    if(usePopper) { 
        ({ styles, attributes } = usePopper(referenceElement, popperElement, {
            placement: "right",
            modifiers: [
            { name: "arrow", options: { element: arrowElement } },
            {
                name: "offset",
                options: {
                offset: [0, 10],
                },
            },
            ],
        }));
    }

    const {generateTooltipEvent, renderTooltipContent, renderTooltipHeader, className, ...calendarProps} = props;
    
    return ( 
        <div className={'up-calendar'} style={{width: '100%'}}>
            <FullCalendar
                initialView="dayGridMonth"
                locale={'fr'}
                locales={[frLocale]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                eventMouseEnter={(e) => {
                  setReferenceElement(e.el);
                  setTooltipEvent(
                    (generateTooltipEvent && generateTooltipEvent(e.event)) || e.event
                  );
                }}
                eventMouseLeave={(e) => {
                  setReferenceElement(null);
                  setTooltipEvent(null);
                }}
                ref={(element) => calendar.current = element}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                viewClassNames={classnames(fullCalendarStyle, className)}
                {...calendarProps} />
            
            {referenceElement && tooltipEvent && (
                <div
                className="up-calendar__tooltip"
                ref={setPopperElement}
                style={styles && styles.popper}
                {...(attributes?.popper || {})}
                >
                <div
                    className="up-calendar__tooltip__arrow"
                    ref={setArrowElement}
                    style={styles.arrow}
                />
                {props.renderTooltipHeader &&
                    <div className="up-calendar__tooltip__header">
                        {renderTooltipHeader(tooltipEvent)}
                    </div>
                }
                {props.renderTooltipContent &&
                    <div className="up-calendar__tooltip__content">
                        {renderTooltipContent(tooltipEvent)}
                    </div>
                }
                </div>
            )}
        </div>
    )
}

export default UpCalendar ;
