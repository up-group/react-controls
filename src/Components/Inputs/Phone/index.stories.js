import React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import {IntentType} from '../../../Common/theming/types'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpPhone from './UpPhone'
import UpLabel from '../../Display/Label'

storiesOf('UpPhone', module)
  .addWithInfo('Phone input', 'Utilisation simple',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}> 
        <div style={{padding:"30px"}}>
          <UpPhone />
        </div>
    </UpThemeProvider>
  )).addWithInfo('Phone Input Required', 'Avec valeur requise',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}> 
        <div style={{padding:"30px"}}>
          <UpPhone isRequired={true} />
        </div>
    </UpThemeProvider>
  )) ;