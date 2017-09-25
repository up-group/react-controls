import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

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
 )).addWithInfo('Icon à droite', 'Utilisation du composant en lui passant les données à afficher',
 () => (
  <UpThemeProvider theme={UpDefaultTheme}>
    <UpButton actionType="add" iconPosition={"right"} width={"normal"} intent="primary" onClick={(event) => {console.log(event)}}>
      Add
    </UpButton>
  </UpThemeProvider>
)).addWithInfo('DropDown', 'Utilisation du composant en mode DropDown',
 () => (
  <UpThemeProvider theme={UpDefaultTheme}>
    <UpButton intent="primary" onClick={(event) => {action("Main")}} dropDown={'down'} 
      extraActions={[
        {
          libelle : "Option 1",
          onClick : action("Option 1")
        },
        {
          libelle : "Option 2",
          onClick : action("Option 2")
        },
        {
          size : 2,
        },
        {
          libelle : "Option 3",
          onClick : action("Option 3")
        }
      ]}>
    </UpButton>
  </UpThemeProvider>
)).addWithInfo('DropDown avex text', 'Utilisation du composant en mode DropDown',
() => (
 <UpThemeProvider theme={UpDefaultTheme}>
   <UpButton intent="primary" onClick={(event) => {action("Main")}} dropDown={'down'} 
     extraActions={[
       {
         libelle : "Option 1",
         onClick : action("Option 1")
       },
       {
         libelle : "Option 2",
         onClick : action("Option 2")
       },
       {
         size : 2,
       },
       {
         libelle : "Option 3",
         onClick : action("Option 3")
       }
     ]}>Options
   </UpButton>
 </UpThemeProvider>
)).addWithInfo('DropDown avex text et icon à gauche', 'Utilisation du composant en mode DropDown',
() => (
 <UpThemeProvider theme={UpDefaultTheme}>
   <UpButton iconPosition={"left"} intent="primary" onClick={(event) => {action("Main")}} dropDown={'down'} 
     extraActions={[
       {
         libelle : "Option 1",
         onClick : action("Option 1")
       },
       {
         libelle : "Option 2",
         onClick : action("Option 2")
       },
       {
         size : 2,
       },
       {
         libelle : "Option 3",
         onClick : action("Option 3")
       }
     ]}>Options
   </UpButton>
 </UpThemeProvider>
)).addWithInfo('Avec indication d\'opération', 'Utilisation du composant avec activation de l\'indication dd\'un processus en cours',
() => (
 <UpThemeProvider theme={UpDefaultTheme}>
   <UpButton width={"normal"} isProcessing={true}>Save</UpButton>
 </UpThemeProvider>
)).addWithInfo('Arrondi', 'Utilisation du composant avec activation de l\'indication dd\'un processus en cours',
() => (
 <UpThemeProvider theme={UpDefaultTheme}>
   <UpButton intent="primary" rounded={true} width="icon" onClick={this.refresh} actionType="refresh"></UpButton>
 </UpThemeProvider>
));


