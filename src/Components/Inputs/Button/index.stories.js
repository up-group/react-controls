import React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpButton from './'

storiesOf('UpButton', module)
  .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpButton actionType="add" intent="primary" onClick={(event) => {console.log(event)}} width={"auto"}>
        Add
      </UpButton>
    </UpThemeProvider>
  )).addWithInfo('Icon', 'Utilisation du composant en lui passant les données à afficher',
  () => (
   <UpThemeProvider theme={UpDefaultTheme}>
     <UpButton actionType="add" width={"icon"} intent="primary" onClick={(event) => {console.log(event)}}>
       Add
     </UpButton>
   </UpThemeProvider>
 ))


