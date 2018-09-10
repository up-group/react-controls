import * as React from 'react'
import { storiesOf } from '@storybook/react'


import UpNotification from './'

var onSelectionChange = (data) => {
    console.log(data) ;
}

storiesOf('UpNotification', module)
  .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
   () => (
      <UpNotification/* status="info"*/ message="Chargement en cours"></UpNotification>
  )).addWithInfo('Activation Close', 'Utilisation du composant en autorisant la fermeture de la notification',
  () => (
     <UpNotification dismissable={true} /*status="info"*/ message="Chargement en cours"></UpNotification>
 )).addWithInfo('Modal', 'Utilisation du composant modal',
 () => (
    <UpNotification title={"Erreur"} dismissable={true} displayMode={"modal"}/* status="danger"*/ message="Un  problème est survenu !!"></UpNotification>
));
