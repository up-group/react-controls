import * as React from 'react'
import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpCalendar from './' ;

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpBox from '../../Containers/Box';
import UpParagraph from '../../Display/Paragraph';
import UpCodeViewer from '../CodeViewer';
import UpLink from '../Link';

import { style } from "typestyle";
import * as moment from 'moment'

export default { 
    title: 'Components/Display/UpCalendar',
    decorators : [withKnobs, getRootContainer('UpCalendar')]
};

const codeStoryViewer = `<UpCalendar />`

export const General =
 () => (
        <UpThemeProvider theme={UpDefaultTheme}>
         <UpBox style={{ margin: "40px 30px" }}>
            <UpParagraph>
                 <code>UpCalendar</code> est composant permettant différents modes d'affichage de calendrier.
                 Basé sur <code><UpLink href={'https://fullcalendar.io'}>FullCalendar</UpLink></code>.
            </UpParagraph>
            <UpBox flexDirection={'row'} flexWrap={true}  full={true}>
                <UpCalendar events={[
                        { title: 'event 1', start: moment().toDate(), end: moment().add({ hours: 1 }).toDate(), description: 'Mon event 1' },
                        { title: 'event 2', start: moment().add({ days: 1 }).toDate(), end: moment().add({ days: 1 }).add({ hours: 1 }).toDate(), description: 'Mon event 2' }
                    ]}
                    renderTooltipHeader={(event: InputEvent & { title: string, description: string}) => {
                        console.log(event) ;
                        return <div>{event.title}</div> 
                    }}
                    renderTooltipContent={(event: InputEvent) => {
                        console.log(event) ;
                        return <div>{event['extendedProps'].description}</div> }
                    } />
            </UpBox>
            <UpCodeViewer style={{ width : '100%'}} code={codeStoryViewer} language={'jsx'}></UpCodeViewer>
         </UpBox>
        </UpThemeProvider>    
)