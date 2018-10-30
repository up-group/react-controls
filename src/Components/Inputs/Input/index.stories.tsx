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

stories.addWithInfo('Text input', 'Utilisation simple',
   () => (
    <UpInput type={"text"} />
  )).addWithInfo('Search Input', 'Champ de recherche',
   () => (
    <UpInput type={"search"} />
  )).addWithInfo('Email Input', 'Champ email',
   () => (
    <UpInput type={"email"} />
  )).addWithInfo('Phone Input', 'Champ phone',
  () => (
    <UpInput type={"phone"} />
  )).addWithInfo('Required Input', 'Champ requis',
 () => (
    <UpInput isRequired={true} type={"email"} />
)) ;
