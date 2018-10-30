import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpButton from './UpButton'

function onButtonClick() {
    alert("click !");
}

const stories = storiesOf('Inputs/UpButton', module) ;


