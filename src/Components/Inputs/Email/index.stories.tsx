import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpEmail from './UpEmail'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Inputs/UpEmail', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpEmail'));

stories.addWithInfo('Email input', 'Utilisation simple',
   () => (
        <div style={{padding:"30px"}}>
          <UpEmail  />
        </div>
)).addWithInfo('Email Input Required', 'Avec valeur requise',
   () => (
        <div style={{padding:"30px"}}>
          <UpEmail required={true} />
        </div>
  )) ;