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

stories.add('Phone input',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}> 
        <div style={{padding:"30px"}}>
          <UpPhone />
        </div>
    </UpThemeProvider>
  ), {info :  'Utilisation simple'}
).add('Phone Input Required',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}> 
        <div style={{padding:"30px"}}>
          <UpPhone isRequired={true} />
        </div>
    </UpThemeProvider>
  ), {info:  'Avec valeur requise'} 
) ;
