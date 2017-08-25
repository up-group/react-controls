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
        <UpDate onChange={(value, event) => {console.log(event);console.log(value)}} />
    </UpThemeProvider>
  )).addWithInfo('Date requise', 'La date est requise',
  () => (
   <UpThemeProvider theme={UpDefaultTheme}>
       <UpDate isRequired={true} onChange={(value, event) => {console.log(event);console.log(value)}} />
   </UpThemeProvider>
 )) ;