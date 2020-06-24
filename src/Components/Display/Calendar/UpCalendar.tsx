import * as React from 'react' ;

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

import { CalendarOptions } from '@fullcalendar/core';
import frLocale from '@fullcalendar/core/locales/fr';

import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import './UpCalendar.css'

export interface UpCalendarProps extends CalendarOptions {}

const UpCalendar = (props: UpCalendarProps) => {
    return <FullCalendar
                initialView="dayGridMonth"
                locale={'fr'}
                locales={[frLocale]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                {...props} />
}

export default UpCalendar ;
