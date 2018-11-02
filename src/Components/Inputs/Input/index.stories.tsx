import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpInput from './UpInput'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Inputs/UpInput', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpInput'));

stories.add('Text input',
   () => (
    <UpInput type={"text"} />
  ), {info : 'Utilisation simple'}
).add('Search Input',
   () => (
    <UpInput type={"search"} />
  ), {info : 'Champ de recherche'}
).add('Email Input',
   () => (
    <UpInput type={"email"} />
  ), {info : 'Champ email'}
).add('Phone Input',
  () => (
    <UpInput type={"phone"} />
  ), {info : 'Champ phone'}
).add('Required Input',
 () => (
    <UpInput isRequired={true} type={"email"} />
  ), {info : 'Champ requis'}
) ;
