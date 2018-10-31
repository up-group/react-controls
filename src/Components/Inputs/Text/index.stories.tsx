import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpText from './'
import UpLabel from '../../Display/Label'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Inputs/UpText', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpText'));

stories.addWithInfo('Simple usage', 'Utilisation avec plusieurs options',
    () => (
        <UpLabel text={"Observation : "}>
             <UpText width={'fill'} />
        </UpLabel>
    ));
