import * as React from 'react' ;

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import { Calendar, OptionsInput } from '@fullcalendar/core';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

export interface UpCalendarProps extends OptionsInput {
    
}

const UpCalendar = (props: UpCalendarProps) => {
    return <FullCalendar {...props} 
                defaultView="dayGridMonth" 
                plugins={[dayGridPlugin]} />
}

export default UpCalendar ;
