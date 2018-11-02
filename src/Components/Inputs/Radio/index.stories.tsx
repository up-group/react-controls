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
stories.add('Multiple usage',
    () => (
            <div style={{ padding: "30px" }}>
                <UpRadio onChange={console.log} defaultValue={"option1"} name={"modeAdresse"} options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }]} />
            </div>
    ), {info : 'Utilisation avec plusieurs options'}
).add('Display horizontally',
    () => (
            <div style={{ padding: "30px" }}>

                <UpRadio defaultValue={"option1"} name={"modeAdresse"} displayMode="horizontal" options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }]} />
            </div>
    ), {info : 'Affichage des radio en ligne'}
).add('Display as Button',
    () => (
            <div style={{ padding: "30px" }}>
                <UpRadio name={"modeAdresse"} displayMode="button" options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }]} />
            </div>
    ), {info : 'Affichage des radio comme button'}
).add('Display as Button with required',
    () => (
            <div style={{ padding: "30px" }}>
                <UpRadio name={"modeAdresse"} isRequired={true} displayMode="button" options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }]} />
            </div>
), {info : 'Affichage des radio comme button marqué comme requis'} );