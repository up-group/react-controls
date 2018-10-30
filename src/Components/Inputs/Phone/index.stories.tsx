import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpPhone from './UpPhone'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Inputs/UpPhone', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpPhone'));

stories.addWithInfo('Phone input', 'Utilisation simple',
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
