import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { IntentType } from '../../../Common/theming/types'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpRadio from './UpRadio'
import UpLabel from '../../Display/Label'

import { withKnobs, text, boolean, number, array} from '@storybook/addon-knobs';
import { getRootContainer } from '../../../Common/stories';

const stories = storiesOf('Inputs/UpRadio', module) ;

stories.addDecorator(withKnobs)

stories.addDecorator(getRootContainer('UpRadio'));
stories.addWithInfo('Multiple usage', 'Utilisation avec plusieurs options',
    () => (
            <div style={{ padding: "30px" }}>
                <UpRadio onChange={console.log} defaultValue={"option1"} name={"modeAdresse"} options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }]} />
            </div>
    )).addWithInfo('Display horizontally', 'Affichage des radio en ligne',
    () => (
            <div style={{ padding: "30px" }}>

                <UpRadio defaultValue={"option1"} name={"modeAdresse"} displayMode="horizontal" options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }]} />
            </div>
    )).addWithInfo('Display as Button', 'Affichage des radio comme button',
    () => (
            <div style={{ padding: "30px" }}>
                <UpRadio name={"modeAdresse"} displayMode="button" options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }]} />
            </div>
    )).addWithInfo('Display as Button with required', 'Affichage des radio comme button marqué comme requis',
    () => (
            <div style={{ padding: "30px" }}>
                <UpRadio name={"modeAdresse"} isRequired={true} displayMode="button" options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }]} />
            </div>
    ));