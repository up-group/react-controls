import React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import {IntentType} from '../../../Common/theming/types'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpDate from './UpDate'
import UpLabel from '../../Display/Label'

var onOptionChange = () => {}

var state = {
}

storiesOf('UpDate', module)
  .addWithInfo('Simple usage', 'Utilisation simple',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
        <div style={{margin:"30px"}}>
            <UpDate onChange={(value, event) => {console.log(event);console.log(value)}} />
        </div>
    </UpThemeProvider>
  )).addWithInfo('Date requise', 'La date est requise',
  () => (
   <UpThemeProvider theme={UpDefaultTheme}>
        <div style={{margin:"30px"}}>
            <UpDate isRequired={true} onChange={(value, event) => {console.log(event);console.log(value)}} />
        </div>
   </UpThemeProvider>
 )) ;