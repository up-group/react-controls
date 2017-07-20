import React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import {IntentType} from '../../../Common/theming/types'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpCheckbox from './UpCheckbox'
import UpLabel from '../../Display/Label'

var onOptionChange = () => {}

var state = {
    majeur: false,
    homme: true,
    grand: false,
    couleur: "red",
    selection: null //{id: 3, text : ""}
}

storiesOf('UpCheckbox', module)
  .addWithInfo('Multiple usage', 'Utilisation avec plusieurs options',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
        <UpLabel inline={true} width="small" text="Choix :">
            <UpCheckbox options={[{
                    text: "Vous êtes majeur ?",
                    name: "Option1",
                    onChange: onOptionChange,
                    value: true,
                    checked: state.majeur === true
                }, {
                    text: "Vous êtes Homme ?",
                    name: "Option2",
                    onChange: onOptionChange,
                    value: true,
                    checked: state.homme === true
                }, {
                    text: "Vous êtes grand ?",
                    name: "Option3",
                    onChange: onOptionChange,
                    value: true,
                    checked: state.grand === true
                }]} />
            </UpLabel>
    </UpThemeProvider>
  )) ;