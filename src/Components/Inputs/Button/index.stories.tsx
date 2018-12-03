import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpButton from './UpButton'
import UpBox from '../../Containers/Box';
import UpNotification from '../../Display/Notification';
import UpParagraph from '../../Display/Paragraph';

const stories = storiesOf('Inputs/UpButton', module) ;
stories.addDecorator(withKnobs);
stories.add('Simple usage',
   () => {
    const actionType = text('actionType', 'add');
    const intent = text('intent', 'primary');
    
    return <UpThemeProvider theme={UpDefaultTheme}>
      <UpBox style={{margin:"40px 30px"}}>
        <UpNotification intent={"info"}>
            Le composant <code>UpButton</code> permet de définir un bouton avec trois propriétés principales :
            <ul>
              <li>
                actionType : Le type de l'action gérer par le bouton. Exemple 'add' ajoutera un icône approprié.
              </li>
              <li>
                intent : le type du bouton : 'primary', 'secondary', 'info', 'success', 'warning' ou 'error'
              </li>
              <li>
                onClick : l'action a exécuté.
              </li>
            </ul> 
            <UpParagraph>
               <UpButton actionType={actionType} intent={intent} onClick={(event) => {
                 return new Promise(function(resolve, reject) {
                    setTimeout(() => resolve(true), 5000)
                 })
               }} width={"auto"}>
                Add
              </UpButton>
           </UpParagraph>
        </UpNotification>
      </UpBox>
    </UpThemeProvider>
   }, { info : "Utilisation du composant en lui passant les données à afficher" }
).add('Icon',
  () => (
   <UpThemeProvider theme={UpDefaultTheme}>
     <UpBox style={{margin:"40px 30px"}}>
        <UpNotification intent={"info"}>
            Le composant <code>UpButton</code> afficher en mode icône :
            <UpParagraph>
              <UpButton actionType="add" width={"icon"} intent="primary"  onClick={(event) => {
                 return new Promise(function(resolve, reject) {
                    setTimeout(() => resolve(true), 5000)
                 })
               }}>
                Add
              </UpButton> 
            </UpParagraph>
        </UpNotification>
      </UpBox>
   </UpThemeProvider>
 ), { info : "Utilisation du composant en lui passant les données à afficher" }
).add('Icon à droite',
 () => (
  <UpThemeProvider theme={UpDefaultTheme}>
    <UpBox style={{margin:"40px 30px"}}>
        <UpNotification intent={"info"}>
            Le composant <code>UpButton</code> en positionnant l'icône à droite :
            <UpParagraph>
              <UpButton actionType="add" iconPosition={"right"} width={"normal"} intent="primary" onClick={(event) => {console.log(event)}}>
                Add
              </UpButton>
            </UpParagraph>
        </UpNotification>
    </UpBox>
  </UpThemeProvider>
), { info : "Utilisation du composant en lui passant les données à afficher" }
).add('DropDown',
 () => (
  <UpThemeProvider theme={UpDefaultTheme}>
      <UpBox style={{margin:"40px 30px"}}>
          <UpNotification intent={"info"}>
              Le composant <code>UpButton</code> en définissant un menu d'actions associées :
              <UpParagraph>
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
              </UpParagraph>
          </UpNotification>
      </UpBox>
  </UpThemeProvider>
), { info :  'Utilisation du composant en mode DropDown' }
).add('DropDown avex text',
() => (
 <UpThemeProvider theme={UpDefaultTheme}>
    <UpBox style={{margin:"40px 30px"}}>
      <UpNotification intent={"info"}>
          Le composant <code>UpButton</code> en définissant un menu d'actions associées, un label principal et l'icône à gauche :
          <UpParagraph>
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
          </UpParagraph>
      </UpNotification>
    </UpBox>
 </UpThemeProvider>
), { info :  'Utilisation du composant en mode DropDown'}
).add('DropDown avex text et icône à gauche',
() => (
 <UpThemeProvider theme={UpDefaultTheme}>
   <UpBox style={{margin:"40px 30px"}}>
        <UpNotification intent={"info"}>
          Le composant <code>UpButton</code> en définissant un menu d'actions associées et un label principal :
          <UpParagraph>
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
          </UpParagraph>
        </UpNotification>
    </UpBox>
 </UpThemeProvider>
), { info :  'Utilisation du composant en mode DropDown'}
).add('Avec indication d\'opération',
() => {
  const isProcessing = boolean('isProcessing', true);
  return <UpThemeProvider theme={UpDefaultTheme}>
   <UpBox style={{margin:"40px 30px"}}>
      <UpNotification intent={"info"}>
          Le composant <code>UpButton</code> avec indication du traitement en cours :
          <UpParagraph>
             <UpButton intent={'primary'} iconName={'edit'} iconPosition={'left'} onClick={null} width={"normal"} isProcessing={isProcessing}>Save</UpButton>
          </UpParagraph>
      </UpNotification>
    </UpBox>
        
 </UpThemeProvider>
},  { info: 'Utilisation du composant avec activation de l\'indication dd\'un processus en cours' },
).add('Arrondi',
() => {
  const isProcessing = boolean('isProcessing', false);
  return <UpThemeProvider theme={UpDefaultTheme}>
   <UpBox style={{margin:"40px 30px"}}>
      <UpNotification intent={"info"}>
          Le composant <code>UpButton</code> en mode icône et avec indication du traitement en cours :
          <UpParagraph>
            <UpButton rotate={isProcessing} intent="primary" rounded={true} width="icon" onClick={this.refresh} actionType="refresh"></UpButton>
          </UpParagraph>
      </UpNotification>
    </UpBox>
 </UpThemeProvider>;
}, { info : 'Utilisation du composant avec activation de l\'indication dd\'un processus en cours'}
);
