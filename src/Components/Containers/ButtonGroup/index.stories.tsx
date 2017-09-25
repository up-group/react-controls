import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpButtonGroup from './'
import UpButton from '../../Inputs/Button'
import UpButtonGroupDropDown from '../ButtonGroupDropDown/UpButtonGroupDropDown'

storiesOf('UpButtonGroup', module)
  .addWithInfo('DropDown', 'Utilisation du composant en lui passant les données à afficher',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <div>
      <div style={{"margin": "30px"}}>
        <UpButtonGroup gutter={0} align={"h"}>
          <UpButton onClick={action("Main")} actionType={"add"} intent={"primary"}>
            Add
          </UpButton>
          <UpButton
            intent="primary"
            onClick={action('OnClick')}
            dropDown="down"
            extraActions={[{libelle: "Option 1", onClick: action('Option 1')}, {libelle: "Option 2", onClick: action('Option 2')}, {size: 2}, {libelle: "Option 3", onClick: action("Option 3")}]}
          />
        </UpButtonGroup>
      </div>
      <div style={{"margin": "30px"}}>
        <UpButtonGroup gutter={0} align={"h"}>
          <UpButton onClick={action("Main")} actionType={"add"} intent={"primary"} />
          <UpButton
            intent="primary"
            onClick={action('OnClick')}
            dropDown="down"
            extraActions={[{libelle: "Option 1", onClick: action('Option 1')}, {libelle: "Option 2", onClick: action('Option 2')}, {size: 2}, {libelle: "Option 3", onClick: action("Option 3")}]}
          />
        </UpButtonGroup>
      </div></div>
    </UpThemeProvider>
  )).addWithInfo('Multi Button', 'Utilisation du composant en lui passant les données à afficher',
  () => (
   <UpThemeProvider theme={UpDefaultTheme}>
     <div style={{"margin": "30px"}}>
       <UpButtonGroup gutter={0} align={"h"}>
         <UpButton onClick={action("Add")} width={'normal'} actionType={"add"} intent={"primary"}>
           Add
         </UpButton><UpButton onClick={action("Edit")} width={'normal'} actionType={"edit"} intent={"primary"}>
           Edit
         </UpButton><UpButton onClick={action("Delete")} width={'normal'} actionType={"delete"} intent={"danger"}>
           Remove
         </UpButton>
       </UpButtonGroup>

       <UpButtonGroup gutter={5} align={"h"}>
         <UpButton onClick={action("Add")} width={'normal'} actionType={"add"} intent={"default"}>
           Add
         </UpButton>
         <UpButton onClick={action("Edit")} width={'normal'} actionType={"edit"} intent={"primary"}>
           Edit
         </UpButton>
         <UpButton onClick={action("Edit")} width={'normal'} actionType={"info-sign"} intent={"info"}>
           Info
         </UpButton>
         <UpButton onClick={action("Edit")} width={'normal'} actionType={"help"} intent={"warning"}>
           Aide
         </UpButton>
         <UpButton onClick={action("Delete")} width={'normal'} actionType={"delete"} intent={"danger"}>
           Remove
         </UpButton>
       </UpButtonGroup>
     </div>
   </UpThemeProvider>
 )) ;