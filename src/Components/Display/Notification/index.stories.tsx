import * as React from 'react'

import UpNotification from './UpNotification'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpLoadingIndicator from '../LoadingIndicator';
import { style } from 'typestyle';

export default { 
  title: 'Components/Display/UpNotification',
  decorators : [withKnobs, getRootContainer('UpNotification')]
};

const wrapperBoxesStyle = style({
  $nest : {
    '& > div' : {
      margin : '10px 0px',
    },
  },
});

export const General =
   () => (
      <div className={wrapperBoxesStyle}>
      <UpNotification intent="info">
        <UpLoadingIndicator isLoading={true} displayMode={'inline'} />
   </UpNotification>
      <UpNotification intent="success" durationBeforeClosing={6}  >
        <p>Votre opération a été enregistré avec succès !</p>
      </UpNotification>
      <UpNotification intent="danger" durationBeforeClosing={8} >
        <p>Une erreur est survenue dans le traitement de votre demande !</p>
      </UpNotification>
      <UpNotification intent="error" onCloseClick={()=> {console.log('icon Clicked')}} >
        <p>Une erreur est survenue dans le traitement de votre demande !</p>
      </UpNotification>
      <UpNotification intent="warning">
        <p>Votre connexion se termine dans 10 minutes !</p>
      </UpNotification>
      <UpNotification intent="default" >
        <p>Bonjour !</p>
      </UpNotification>
      </div>
  )
export const ActivationClose =
  () => (
     <UpNotification dismissable={true} intent="info">
        <UpLoadingIndicator isLoading={true} displayMode={'inline'} />
     </UpNotification>
  )

export const Modal =
 () => (
    <UpNotification title={"Erreur"} dismissable={true} displayMode={"modal"} intent="danger">
        <p>Un problème est survenu !!</p>
    </UpNotification>
 )

export const Text =
  () => (
    <UpNotification dismissable={true} displayMode={"text"} intent="danger">
      <p>Un problème est survenu !!</p>
    </UpNotification>
  )

