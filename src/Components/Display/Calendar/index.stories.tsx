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

export default { 
    title: 'Components|Display/UpCalendar',
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

             <UpParagraph>
                 <UpBox flexDirection={'row'} flexWrap={true}>
                     <UpCalendar />
                 </UpBox>
             </UpParagraph>
             <UpCodeViewer style={{ width : '100%'}} code={codeStoryViewer} language={'jsx'}></UpCodeViewer>
             <UpParagraph>
                 <UpBox flexDirection={'row'} flexWrap={true}>
                     <UpCalendar
                         defaultView="dayGridMonth"
                         weekends={false}
                         events={[
                             { title: 'event 1', date: '2019-04-01' },
                             { title: 'event 2', date: '2019-04-02' }
                         ]}
                     />
                 </UpBox>
             </UpParagraph>
             
         </UpBox>
     </UpThemeProvider>    
)