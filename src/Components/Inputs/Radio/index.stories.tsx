import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { IntentType } from '../../../Common/theming/types'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpRadio from './UpRadio'
import UpLabel from '../../Display/Label'

storiesOf('UpRadio', module)
    .addWithInfo('Multiple usage', 'Utilisation avec plusieurs options',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <div style={{ padding: "30px" }}>
                <UpRadio onChange={console.log} defaultValue={"option1"} name={"modeAdresse"} options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }]} />
            </div>
        </UpThemeProvider>
    )).addWithInfo('Display horizontally', 'Affichage des radio en ligne',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <div style={{ padding: "30px" }}>

                <UpRadio defaultValue={"option1"} name={"modeAdresse"} displayMode="horizontal" options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }]} />
            </div>
        </UpThemeProvider>
    )).addWithInfo('Display as Button', 'Affichage des radio comme button',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <div style={{ padding: "30px" }}>
                <UpRadio name={"modeAdresse"} displayMode="button" options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }]} />
            </div>
        </UpThemeProvider>
    )).addWithInfo('Display as Button with required', 'Affichage des radio comme button marqué comme requis',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <div style={{ padding: "30px" }}>
                <UpRadio name={"modeAdresse"} isRequired={true} displayMode="button" options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }]} />
            </div>
        </UpThemeProvider>
    ));