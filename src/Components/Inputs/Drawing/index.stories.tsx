import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import {IntentType} from '../../../Common/theming/types'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpDrawing from './UpDrawing'
import UpLabel from '../../Display/Label'

var state = {
}

storiesOf('UpDrawing', module)
  .addWithInfo('Simple usage', 'Utilisation simple',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
        <div style={{margin:"30px"}}>
            <UpDrawing onChange={(value, event) => {console.log(event);console.log(value)}} />
        </div>
    </UpThemeProvider>
  )) ;