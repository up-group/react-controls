import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpEmail from './UpEmail'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Components|Inputs/UpEmail', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpEmail'));

stories.add('Email input',
   () => (
        <div style={{padding:"30px"}}>
          <UpEmail  />
        </div>
  ), { info :  'Utilisation simple' }
).add('Email Input Required',
   () => (
        <div style={{padding:"30px"}}>
          <UpEmail isRequired={true} />
        </div>
), { info :  'Avec valeur requise' }) ;