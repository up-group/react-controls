import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpNotification from './UpNotification'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpLoadingIndicator from '../LoadingIndicator';
import { style } from 'typestyle';

const stories = storiesOf('Display/UpNotification', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpNotification'));

const wrapperBoxesStyle = style({
  $nest : {
    '& > div' : {
      margin : '10px 0px',
    },
  },
});

stories.add('Simple usage',
   () => (
      <div className={wrapperBoxesStyle}>
      <UpNotification intent="info">
        <UpLoadingIndicator isLoading={true} displayMode={'inline'} />
      </UpNotification>
      <UpNotification intent="success">
        <p>Votre opération a été enregistré avec succès !</p>
      </UpNotification>
      <UpNotification intent="danger">
        <p>Une erreur est survenue dans le traitement de votre demande !</p>
      </UpNotification>
      <UpNotification intent="error">
        <p>Une erreur est survenue dans le traitement de votre demande !</p>
      </UpNotification>
      <UpNotification intent="warning">
        <p>Votre connexion se termine dans 10 minutes !</p>
      </UpNotification>
      <UpNotification intent="default">
        <p>Bonjour !</p>
      </UpNotification>
      </div>
  ), {info: 'Utilisation du composant en lui passant les données à afficher'}
).add('Activation Close',
  () => (
     <UpNotification dismissable={true} intent="info">
        <UpLoadingIndicator isLoading={true} displayMode={'inline'} />
     </UpNotification>
 ), {info:'Utilisation du composant en autorisant la fermeture de la notification'}
).add('Modal',
 () => (
    <UpNotification title={"Erreur"} dismissable={true} displayMode={"modal"} intent="danger">
        <p>Un problème est survenu !!</p>
    </UpNotification>
), {info: 'Utilisation du composant modal'}
).add('Text',
  () => (
    <UpNotification dismissable={true} displayMode={"text"} intent="danger">
      <p>Un problème est survenu !!</p>
    </UpNotification>
  ), { info: 'Utilisation du composant en mode <code>text</code>' }
);

