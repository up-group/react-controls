import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import { storybookMainBodyStyles } from '../../../../stories/styles.ts' ;

import UpNotification from './'

var onSelectionChange = (data) => {
    console.log(data) ;
}

const stories = storiesOf('UpNotification', module) ;

const RootContainer = (storyFn) => (
  <UpThemeProvider theme={UpDefaultTheme}>
    <div style={storybookMainBodyStyles}>
      <UpNotification>
        Présentation du composant <code>UpNotification</code>
      </UpNotification>
      { storyFn() }
    </div>
  </UpThemeProvider>
);

stories.addDecorator(RootContainer);

stories.addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
   () => (
    <UpNotification status="info" message="Chargement en cours"></UpNotification>
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
