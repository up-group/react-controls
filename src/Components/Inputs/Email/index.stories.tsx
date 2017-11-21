import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpEmail from './UpEmail'

storiesOf('UpEmail', module)
  .addWithInfo('Email input', 'Utilisation simple',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}> 
        <div style={{padding:"30px"}}>
          <UpEmail />
        </div>
    </UpThemeProvider>
  )).addWithInfo('Email Input Required', 'Avec valeur requise',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}> 
        <div style={{padding:"30px"}}>
          <UpEmail isRequired={true} />
        </div>
    </UpThemeProvider>
  )) ;