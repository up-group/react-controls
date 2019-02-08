import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpCheckbox from './UpCheckBox'
import UpLabel from '../../Display/Label'
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const SimpleCheckbox = (props) => {
    let [selectedValue, setValue] = React.useState(null);

    const onChange = (event, value) => {
        setValue(value);
    }

    return <UpCheckbox options={[{
        text: "",
        name: "Option1",
        onOptionChange: onChange,
        value: true,
        checked: selectedValue === true
    }]} />
}


const MultipleCheckbox = (props) => {
    let [selectedOption1, setOption1Value] = React.useState(null);
    let [selectedOption2, setOption2Value] = React.useState(null);
    let [selectedOption3, setOption3Value] = React.useState(null);

    const onChangeOption1 = (event, value) => {
        setOption1Value(value);
    }
    const onChangeOption2 = (event, value) => {
        setOption2Value(value);
    }
    const onChangeOption3 = (event, value) => {
        setOption3Value(value);
    }

    return <UpCheckbox options={[{
        text: "Vous êtes majeur ?",
        name: "Option1",
        onOptionChange: onChangeOption1,
        value: true,
        checked: selectedOption1 === true
    }, {
        text: "Vous êtes Homme ?",
        name: "Option2",
        onOptionChange: onChangeOption2,
        value: true,
        checked: selectedOption2 === true
    }, {
        text: "Vous êtes grand ?",
        name: "Option3",
        onOptionChange: onChangeOption3,
        value: true,
        checked: selectedOption3 === true
    }]} />
}

const stories = storiesOf('Inputs/UpCheckbox', module) ;
stories.addDecorator(getRootContainer('UpCheckbox'));
stories.addDecorator(withKnobs)
stories.add('Simple usage',
    () => (
        <UpLabel textAlign={"left"} inline={true} width="medium" text="Activation de ... :">
            <SimpleCheckbox />
        </UpLabel>
), { info : 'Utilisation avec plusieurs options' }
).add('Multiple usage',
   () => (
        <UpLabel inline={true} width="small" text="Choix :">
           <MultipleCheckbox />
        </UpLabel>
  ), { info : 'Utilisation avec plusieurs options' }
) ;
