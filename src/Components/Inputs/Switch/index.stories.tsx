import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpSwitch from './index'

storiesOf('UpSwitch', module)
    .addWithInfo('Simple usage', '',
    () => (
        <UpSwitch isNullable={true} onChange={console.log} />
    ))
    .addWithInfo('Remplace les valeurs text', '',
    () => (
        <UpSwitch isNullable={true} onChange={console.log} displayTrue="Toujours" displayNull="¯\\_(ツ)_/¯" displayFalse="Jamais" />
    ));
  