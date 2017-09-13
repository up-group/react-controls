import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpButtonGroup from './'
import UpButton from '../../Inputs/Button'
import UpButtonGroupDropDown from '../ButtonGroupDropDown/UpButtonGroupDropDown'

storiesOf('UpButtonGroup', module)
  .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
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
    </UpThemeProvider>
  )) ;