import * as React from 'react'
import { action } from '@storybook/addon-actions';

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpCodeViewer from '../../Display/CodeViewer';
import UpButton from './UpButton'
import UpBox from '../../Containers/Box';
import UpNotification from '../../Display/Notification';
import UpParagraph from '../../Display/Paragraph';
import UpHeading from '../../Display/Heading';
import UpButtonGroup from '../../Containers/ButtonGroup';
import { style } from 'typestyle';
import { IntentType } from 'theming/types';
import { ActionType } from 'actions';

const codeStoryADroite = 
`const actions = [{libelle: "Option 1", onClick: action("Option 1")}, {libelle: "Option 2", onClick: action("Option 2")},{size: 2,},{libelle: "Option 3",onClick: action("Option 3")}];
<UpButton 
  intent="primary" 
  onClick={e => action("Main")} 
  dropDown={'down'}
  extraActions={actions}>
</UpButton>`

export default { 
  title: 'Components|Inputs/UpButton',
  decorators : [withKnobs]
};

export const General =
  () => {
    const actionType = text('actionType', 'add');
    const intent = text('intent', 'primary');

    return <UpThemeProvider theme={UpDefaultTheme}>
      <UpBox style={{ margin: "40px 30px" }}>
        <UpHeading tag={'h1'}><code>UpButton</code></UpHeading>
        <UpNotification intent={"info"}>
          <UpBox flexDirection={'column'}>
            <UpParagraph>
              Le composant <code>UpButton</code> permet de définir un bouton avec trois propriétés principales :
            </UpParagraph>
            <ul style={{ margin: "8px" }}>
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
          </UpBox>
        </UpNotification>
        <UpParagraph>
          <UpButtonGroup gutter={17}>
            <UpButton actionType={actionType as ActionType} intent={intent as IntentType} onClick={(event) => {
              return new Promise(function (resolve, reject) {
                setTimeout(() => resolve(true), 5000)
              })
            }} width={"normal"}>
              Add
            </UpButton>
            <UpButton 
              rounded={true}
              intent={'secondary'}
              tooltip={"Cliquez sur moi !!"}
              onClick={(event) => {
              return new Promise(function (resolve, reject) {
                setTimeout(() => resolve(true), 5000)
              })
              }} width={"normal"}>Test</UpButton>
            <UpButton
              intent={'primary'}
              actionType={'save'}
              disabled={true}
              onClick={(event) => {
                return new Promise(function (resolve, reject) {
                  setTimeout(() => resolve(true), 5000)
                })
              }}>Disabled</UpButton>
          </UpButtonGroup>
        </UpParagraph>
      </UpBox>
    </UpThemeProvider>
  } ;

export const Icon =
  () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpBox style={{ margin: "40px 30px" }}>
        <UpHeading tag={'h1'}><code>UpButton</code></UpHeading>
        <UpNotification intent={"info"}>
          <UpParagraph>
            Le composant <code>UpButton</code> afficher en mode icône
          </UpParagraph>
        </UpNotification>
        <UpParagraph>
          <UpButton actionType="arrow-right" width={"icon"} intent="primary" borderless onClick={(event) => {
            return new Promise(function (resolve, reject) {
              setTimeout(() => resolve(true), 5000)
            })
          }}>
            Add
          </UpButton>
          <UpButton actionType="delete" disabled={true} width={"icon"} intent="danger" onClick={(event) => {
            return new Promise(function (resolve, reject) {
              setTimeout(() => resolve(true), 5000)
            })
          }}>
            Delete
          </UpButton>
        </UpParagraph>
      </UpBox>
    </UpThemeProvider>
  )

export const IconToRight =
  () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpBox style={{ margin: "40px 30px" }}>
        <UpHeading tag={'h1'}><code>UpButton</code></UpHeading>
        <UpNotification intent={"info"}>
          <UpParagraph>
            Le composant <code>UpButton</code> en positionnant l'icône à droite
          </UpParagraph>
        </UpNotification>
        <UpParagraph>
          <UpButton actionType="add" iconPosition={"right"} width={"normal"} intent="primary" onClick={(event) => { console.log(event) }}>
            Add
          </UpButton>
        </UpParagraph>
      </UpBox>
    </UpThemeProvider>
  )
export const DropDown =
  () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpBox style={{ margin: "40px 30px" }}>
        <UpHeading tag={'h1'}><code>UpButton</code></UpHeading>
        <UpNotification intent={"info"}>
          <UpParagraph>
            Le composant <code>UpButton</code> en définissant un menu d'actions associées
          </UpParagraph>
        </UpNotification>
        <UpParagraph>
          <UpButton intent="primary" onClick={(event) => { action("Main") }} dropDown={'down'}
            extraActions={[
              {
                libelle: "Option 1",
                onClick: action("Option 1")
              },
              {
                libelle: "Option 2",
                onClick: action("Option 2")
              },
              {
                size: 2,
              },
              {
                libelle: "Option 3",
                onClick: action("Option 3")
              }
            ]}>
          </UpButton>
        </UpParagraph>
      </UpBox>
    </UpThemeProvider>
  )

export const DropDownToRight =
  () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpBox style={{ margin: "40px 30px" }}>
        <UpHeading tag={'h1'}><code>UpButton</code></UpHeading>
        <UpNotification intent={"info"}>
          <UpParagraph>
            Le composant <code>UpButton</code> en définissant un menu d'actions associées
          </UpParagraph>
        </UpNotification>
        <UpParagraph className={style({
          position: "absolute",
          right: '20px',
        })}>
          <UpButton intent="primary" onClick={(event) => { action("Main") }} dropDown={'down'}
            extraActions={[
              {
                libelle: "Option 1",
                onClick: action("Option 1")
              },
              {
                libelle: "Option 2",
                onClick: action("Option 2")
              },
              {
                size: 2,
              },
              {
                libelle: "Option 3",
                onClick: action("Option 3")
              }
            ]}>
          </UpButton>
        </UpParagraph>
        <UpCodeViewer code={codeStoryADroite} language={'jsx'}>
        </UpCodeViewer>
      </UpBox>
    </UpThemeProvider>
  )

export const DropDownWithText =
  () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpBox style={{ margin: "40px 30px" }}>
        <UpHeading tag={'h1'}><code>UpButton</code></UpHeading>
        <UpNotification intent={"info"}>
          <UpParagraph>
            Le composant <code>UpButton</code> en définissant un menu d'actions associées, un label principal et l'icône à gauche
          </UpParagraph>
        </UpNotification>
        <UpParagraph>
          <UpButton iconPosition={"left"} intent="primary" onClick={(event) => { action("Main") }} dropDown={'down'}
            extraActions={[
              {
                libelle: "Option 1",
                onClick: action("Option 1")
              },
              {
                libelle: "Option 2",
                onClick: action("Option 2")
              },
              {
                size: 2,
              },
              {
                libelle: "Option 3",
                onClick: action("Option 3")
              }
            ]}>Options
          </UpButton>
        </UpParagraph>
      </UpBox>
    </UpThemeProvider>
  )

export const DropDownWithTextAndIconToLeft =
  () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpBox style={{ margin: "40px 30px" }}>
        <UpHeading tag={'h1'}><code>UpButton</code></UpHeading>
        <UpNotification intent={"info"}>
          <UpParagraph>
            Le composant <code>UpButton</code> en définissant un menu d'actions associées et un label principal
          </UpParagraph>
        </UpNotification>
        <UpParagraph>
          <UpButton intent="primary" onClick={(event) => { action("Main") }} dropDown={'down'}
            extraActions={[
              {
                libelle: "Option 1",
                onClick: action("Option 1")
              },
              {
                libelle: "Option 2",
                onClick: action("Option 2")
              },
              {
                size: 2,
              },
              {
                libelle: "Option 3",
                onClick: action("Option 3")
              }
            ]}>Options
            </UpButton>
        </UpParagraph>
      </UpBox>
    </UpThemeProvider>
  )
export const WithLoadingStatus =
  () => {
    const isProcessing = boolean('isProcessing', true);
    return <UpThemeProvider theme={UpDefaultTheme}>
      <UpBox style={{ margin: "40px 30px" }}>
        <UpHeading tag={'h1'}><code>UpButton</code></UpHeading>
        <UpNotification intent={"info"}>
          <UpParagraph>
          Le composant <code>UpButton</code> avec indication du traitement en cours
          </UpParagraph>
        </UpNotification>
        <UpParagraph>
          <UpButton intent={'primary'} iconName={'edit'} iconPosition={'left'} onClick={null} width={"normal"} isProcessing={isProcessing}>Save</UpButton>
        </UpParagraph>
      </UpBox>
    </UpThemeProvider>
  }

export const Rounded =
  () => {
    const isProcessing = boolean('isProcessing', false);
    return <UpThemeProvider theme={UpDefaultTheme}>
      <UpBox style={{ margin: "40px 30px" }}>
        <UpHeading tag={'h1'}><code>UpButton</code></UpHeading>
        <UpNotification intent={"info"}>
          <UpParagraph>
          Le composant <code>UpButton</code> en mode icône et avec indication du traitement en cours
          </UpParagraph>
        </UpNotification>
        <UpParagraph>
          <UpButton rotate={isProcessing} intent="primary" rounded={true} width="icon" onClick={this.refresh} actionType="refresh"></UpButton>
        </UpParagraph>
      </UpBox>
    </UpThemeProvider>;
  }
