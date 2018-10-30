import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpNotification from './'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const onSelectionChange = (data) => {
    console.log(data) ;
}

const stories = storiesOf('Display/UpNotification', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpLoadingIndicator'));

stories.addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
   () => (
      <UpNotification/* status="info"*/ message="Chargement en cours"></UpNotification>
  )).addWithInfo('Activation Close', 'Utilisation du composant en autorisant la fermeture de la notification',
  () => (
     <UpNotification dismissable={true} /*status="info"*/ message="Chargement en cours"></UpNotification>
 )).addWithInfo('Modal', 'Utilisation du composant modal',
 () => (
    <UpNotification title={"Erreur"} dismissable={true} displayMode={"modal"}/* status="danger"*/ message="Un  problème est survenu !!"></UpNotification>
));
