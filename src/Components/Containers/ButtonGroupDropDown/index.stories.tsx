import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpButtonGroupDropDown from './UpButtonGroupDropDown'

storiesOf('UpButtonGroupDropDown', module)
  .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <div style={{"margin": "30px"}}>
               <UpButtonGroupDropDown onClick={null} buttons={[{name:"Option 1", onClick: action("Option 1")}]} text={"Add"} />
      </div>
    </UpThemeProvider>
  )) ;