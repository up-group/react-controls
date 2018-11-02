import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpRichText from './'
import UpLabel from '../../Display/Label'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Inputs/UpRichText', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpRichText'));

stories.add('Simple usage',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <div style={{ padding: "30px" }}>
                <UpLabel text={"Observation : "}>
                    <UpRichText width={'fill'} />
                </UpLabel>
            </div>
        </UpThemeProvider>
    ), { info :  'Utilisation avec plusieurs options'}
);