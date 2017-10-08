import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import {IntentType} from '../../../Common/theming/types'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpNumber from './UpNumber'
import UpLabel from '../../Display/Label'

storiesOf('UpNumber', module)
  .addWithInfo('Simple usage', 'Utilisation avec plusieurs options',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
        <UpLabel textAlign={"left"} inline={false} width="small" text="Number :">
            <UpNumber />
            </UpLabel>
    </UpThemeProvider>
  )).addWithInfo('Integer', 'Only greather than 0',
  () => (
   <UpThemeProvider theme={UpDefaultTheme}>
       <UpLabel textAlign={"left"} inline={true} width="small" text="Number :">
           <UpNumber min={0} />
           </UpLabel>
   </UpThemeProvider>
 )) ;