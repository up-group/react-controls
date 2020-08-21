import * as React from 'react'

import UpCalendar from './' ;

import { getRootContainer } from '../../../Common/stories';
import { withKnobs } from '@storybook/addon-knobs';
import UpBox from '../../Containers/Box';
import UpParagraph from '../../Display/Paragraph';
import UpCodeViewer from '../CodeViewer';
import UpLink from '../Link';

import * as moment from 'moment'

export default { 
    title: 'Components/Display/UpCalendar',
    decorators : [withKnobs, getRootContainer('UpCalendar')]
};

const codeStoryViewer = `<UpCalendar />`;
let currentDate = moment() ;
let startDate = currentDate.toDate();
let endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours()+1);

let events = [
    { title: 'event 1', start: startDate, end: endDate, description: 'Mon event 1' }
];

export const General = () => (
    <UpBox style={{ margin: "40px 30px" }}>
    <UpParagraph>
         <code>UpCalendar</code> est composant permettant différents modes d'affichage de calendrier.
         Basé sur <code><UpLink href={'https://fullcalendar.io'}>FullCalendar</UpLink></code>.
    </UpParagraph>
    <UpBox flexDirection={'row'} flexWrap={true}  full={true}>
        <UpCalendar events={events}
        renderTooltipHeader={(event: InputEvent & { title: string, description: string}) => {
            return <div>{event.title}</div> 
        }}
        renderTooltipContent={(event: InputEvent) => {
            return <div>{event['extendedProps'].description}</div> }
        } />
    </UpBox>
    <UpCodeViewer style={{ width : '100%'}} code={codeStoryViewer} language={'jsx'}></UpCodeViewer>
 </UpBox>
)