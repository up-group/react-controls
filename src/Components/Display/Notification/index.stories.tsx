import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpNotification from './'

var onSelectionChange = (data) => {
    console.log(data) ;
}

storiesOf('UpNotification', module)
  .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpNotification status="info" message="Chargement en cours"></UpNotification>
    </UpThemeProvider>
  )).addWithInfo('Activation Close', 'Utilisation du composant en autorisant la fermeture de la notification',
  () => (
   <UpThemeProvider theme={UpDefaultTheme}>
     <UpNotification dismissable={true} status="info" message="Chargement en cours"></UpNotification>
   </UpThemeProvider>
 )).addWithInfo('Modal', 'Utilisation du composant modal',
 () => (
  <UpThemeProvider theme={UpDefaultTheme}>
    <UpNotification title={"Erreur"} dismissable={true} displayMode={"modal"} status="danger" message="Un  problème est survenu !!"></UpNotification>
  </UpThemeProvider>
));
