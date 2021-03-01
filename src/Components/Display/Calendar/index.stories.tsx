import * as React from 'react';
import UpCalendar from './';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs } from '@storybook/addon-knobs';
import UpBox from '../../Containers/Box';
import UpParagraph from '../../Display/Paragraph';
import UpLink from '../Link';
import UpDefaultTheme from '../../../Common/theming';
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider';
import * as moment from 'moment';

export default {
    title: 'Components/Display/UpCalendar',
    decorators: [withKnobs, getRootContainer('UpCalendar')],
    component: UpCalendar
};

export const General =
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <UpBox style={{ margin: "40px 30px" }}>
                <UpParagraph>
                    <code>UpCalendar</code> est composant permettant différents modes d'affichage de calendrier.
                    Basé sur <code><UpLink href={'https://fullcalendar.io'}>FullCalendar</UpLink></code>.
                </UpParagraph>
                <UpBox
                    flexDirection={'row'}
                    flexWrap={true}
                    full={true}
                >
                    <UpCalendar
                        events={[
                            { title: 'event 1', start: moment().toDate(), end: moment().add({ hours: 1 }).toDate(), description: 'Mon event 1' },
                            { title: 'event 2', start: moment().add({ days: 1 }).toDate(), end: moment().add({ days: 1 }).add({ hours: 1 }).toDate(), description: 'Mon event 2' }
                        ]}
                        renderTooltipHeader={(event: InputEvent & { title: string, description: string }) => {
                            return <div>{event.title}</div>
                        }}
                        renderTooltipContent={(event: InputEvent) => {
                            return <div>{event['extendedProps'].description}</div>
                        }}
                    />
                </UpBox>
            </UpBox>
        </UpThemeProvider>
    );
