import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { IntentType } from '../../../Common/theming/types'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpRadio from './UpRadio'
import UpLabel from '../../Display/Label'

import { withKnobs, text, boolean, number, array} from '@storybook/addon-knobs';

const stories = storiesOf('UpRadio', module) ;

stories.addDecorator(withKnobs)

stories.addWithInfo('Multiple usage', 'Utilisation avec plusieurs options',
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
    () => {
        const label = 'Options';
        const defaultValue = ["Option 1", "Option 2",  "Option 3"];
        const separator = ', ';
        const options = array(label, defaultValue, separator);
        const displayMode = text("DisplayMode", "button") ; 

        return <UpThemeProvider theme={UpDefaultTheme}>
            <div style={{ padding: "30px" }}>
                <UpRadio name={"modeAdresse"} displayMode={displayMode} options={options.map(o => {
                    return {text: o, value: o}
                })} />
            </div>
        </UpThemeProvider>
    }).addWithInfo('Display as Button with required', 'Affichage des radio comme button marqué comme requis',
    () => {
        const label = 'Options';
        const defaultValue = ["Option 1", "Option 2",  "Option 3"];
        const separator = ', ';
        const options = array(label, defaultValue, separator);
        const displayMode = text("DisplayMode", "button") ; 

        return <UpThemeProvider theme={UpDefaultTheme}>
            <div style={{ padding: "30px" }}>
                <UpRadio name={"modeAdresse"} isRequired={true} displayMode={displayMode} options={options.map(o => {
                    return {text: o, value: o}
                })} />
            </div>
        </UpThemeProvider>;
    });