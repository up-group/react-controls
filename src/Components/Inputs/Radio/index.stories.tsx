import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { IntentType } from '../../../Common/theming/types'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpRadio from './UpRadio'
import UpLabel from '../../Display/Label'
import UpHeading from '../../Display/Heading'

import { withKnobs, text, boolean, number, array} from '@storybook/addon-knobs';
import { getRootContainer } from '../../../Common/stories';

const stories = storiesOf('Inputs/UpRadio', module) ;


const SimpleRadio = (props) => {
    let [selectedValue, setValue] = React.useState(null);

    const onChange = (event, value) => {
        setValue(value);
    }

    return (
        <div style={{ padding: "30px" }}>
            <UpRadio onChange={onChange} value={selectedValue} defaultValue={"option1"} alignMode="vertical" name={"modeAdresse"} options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }]} />
        </div>
    )
}

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpRadio'));
stories.add('Multiple usage',
    () => <SimpleRadio />, 
    {info : 'Utilisation avec plusieurs options'}
).add('Display horizontally',
    () => (
            <div style={{ padding: "30px" }}>
                <UpRadio defaultValue={"option1"} name={"modeAdresse"} alignMode="horizontal" gutter={8} options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }]} />
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
                <UpRadio name={"modeAdresse"} 
                    isRequired={true} 
                    displayMode="button" 
                    gutter={10}
                    options={[{ text: "Option 1", value: "option1" }, 
                    { text: "Option 2", value: "option2", intent: 'success' }, 
                    { text: "Option 3", value: "option3", intent: 'danger' }]} />
            </div>
), {info : 'Affichage des radio comme button marqué comme requis'} 
).add('Display as Large',
() => {
    
    return (
        <>
            <div style={{ marginTop: "10px" }}>
                <UpHeading tag={'h3'} textAlign={'left'} margin={'medium'}>Afficher horizontalement, et large :</UpHeading>
                <UpRadio name={"value1"} alignMode={'horizontal'} displayMode="large" options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }]} />
            </div>
            <div style={{ marginTop: "10px" }}>
                <UpHeading tag={'h3'} textAlign={'left'} margin={'medium'}>Afficher verticalement, et large :</UpHeading>
                <UpRadio name={"value2"} alignMode={'vertical'} displayMode="large" options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }]} />
            </div>
            <div style={{ marginTop: "10px" }}>
                <UpHeading tag={'h3'} textAlign={'left'} margin={'medium'}>Afficher horizontalement, avec icône et large :</UpHeading>
                <UpRadio name={"value3"} alignMode={'horizontal'} displayMode="large" options={[{ text: "Option 1", value: "option1", iconName: 'calendar' }, { text: "Option 2", value: "option2", iconName: 'cake' }, { text: "Option 3", value: "option3", iconName: 'cocktail'}]} />
            </div>
        </>
    )}
, {info : 'Affichage des radio comme button'}
);