import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpLigne from './'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Display/UpLigne', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpLigne'));

stories.add('Simple usage',
   () => (
      <UpLigne className={"up-indication"} color={"red"}>
        Mon message
      </UpLigne>
  ), { info : 'Utilisation du composant en lui passant les données à afficher'}
);