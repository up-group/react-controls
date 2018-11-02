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

stories.add('Simple usage',
   () => (
      <UpNotification/* status="info"*/ message="Chargement en cours"></UpNotification>
  ), {info: 'Utilisation du composant en lui passant les données à afficher'}
).add('Activation Close',
  () => (
     <UpNotification dismissable={true} /*status="info"*/ message="Chargement en cours"></UpNotification>
 ), {info:'Utilisation du composant en autorisant la fermeture de la notification'}
).add('Modal',
 () => (
    <UpNotification title={"Erreur"} dismissable={true} displayMode={"modal"}/* status="danger"*/ message="Un  problème est survenu !!"></UpNotification>
), {info: 'Utilisation du composant modal'}
);
