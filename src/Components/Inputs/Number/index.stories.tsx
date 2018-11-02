import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import {IntentType} from '../../../Common/theming/types'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpNumber from './UpNumber'
import UpLabel from '../../Display/Label'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Inputs/UpNumber', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpNumber'));

stories.add('Simple usage',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
        <UpLabel textAlign={"left"} inline={false} width="small" text="Number :">
            <UpNumber />
            </UpLabel>
    </UpThemeProvider>
  ), { info: 'Utilisation avec plusieurs options' }
).add('Integer',
  () => (
   <UpThemeProvider theme={UpDefaultTheme}>
       <UpLabel textAlign={"left"} inline={true} width="small" text="Number :">
           <UpNumber min={0} />
           </UpLabel>
   </UpThemeProvider>
    ), {info :  'Only greather than 0'}
 ) ;
