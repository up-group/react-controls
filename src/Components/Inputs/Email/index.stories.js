import React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import {IntentType} from '../../../Common/theming/types'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpEmail from './UpEmail'
import UpLabel from '../../Display/Label'

storiesOf('UpEmail', module)
  .addWithInfo('Eamil input', 'Utilisation simple',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}> 
        <div style={{padding:"30px"}}>
          <UpEmail />
        </div>
    </UpThemeProvider>
  )).addWithInfo('Eamil Input Required', 'Avec valeur requise',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}> 
        <div style={{padding:"30px"}}>
          <UpEmail isRequired={true} />
        </div>
    </UpThemeProvider>
  )) ;