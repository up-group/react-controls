import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpCheckbox from './UpCheckBox'
import UpLabel from '../../Display/Label'
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpDefaultTheme, { UpThemeProvider } from '../../../Common/theming';

const randomName = (n = 12) => {
    const alphabet: string = "azertyuiopmlkjhgfdsqwxcvbn";
    const randomInt = (max: number): number =>
        Math.floor(Math.random() * Math.floor(max));
    let out = "";
    while (n > 0) {
        out = out + alphabet.charAt(randomInt(alphabet.length));
        n--;
    }
    const name = out[0].toUpperCase() + out.slice(1);
    return name;
};

interface iCbOption {
    name: string;
    value: any;
    text?: string;
    iconName?: string;
    onOptionChange?: (ev, ck: boolean) => void;
    checked?: boolean;
}

const DynamicOptions = () => {
    const name = randomName();
    let [options, setOptions] = React.useState([{
        name,
        value: name,
        text: name,
        onOptionChange: (event, checked) => handleToggle(name, checked),
        checked: false
    }] as Array<iCbOption>);

    const handleToggle = (cbName, checked) => {
        console.group("handleToggle");
        console.log("name", cbName);
        console.log("checked", checked);
        console.groupEnd();
        const newOptions = options.map((option: iCbOption) => {
            if (option.name !== cbName) {
                return option;
            }
            return {
                ...option,
                checked
            };
        });
        options = newOptions ;
        setOptions(options);
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newName = randomName();
        console.group("handleClick");
        console.log("Add option", newName);
        console.groupEnd();
        const newOptions: iCbOption[] = [
            ...options,
            {
                name: newName,
                value: newName,
                text: newName,
                onOptionChange: (event, checked) => handleToggle(newName, checked),
                checked: false
            }
        ];
        options = newOptions;
        setOptions(options);
    };
    return (
        <UpThemeProvider theme={UpDefaultTheme}>
            <div
                style={{
                    margin: "1em"
                }}
            >
                <div>
                    <div>
                        <button type="button" onClick={handleClick}>
                            Ajouter un checkbox
              </button>
                    </div>
                    <div>
                        <UpCheckbox options={options}></UpCheckbox>
                    </div>
                </div>
                <div>
                    <h2>scénario :</h2>
                    <ul>
                        <li>Ajouter 1 element checkbox</li>
                    </ul>
                </div>
            </div>
        </UpThemeProvider>
    );
}


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

const stories = storiesOf('Components|Inputs/UpCheckbox', module) ;
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
).add('Dynamic usage',
    () => (
        <UpLabel inline={true} width="small" text="Choix :">
            <DynamicOptions />
        </UpLabel>
    ), { info: 'Utilisation avec options dynamiques' }
);
