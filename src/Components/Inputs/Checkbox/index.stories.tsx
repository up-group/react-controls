import * as React from 'react'

import UpCheckbox from './UpCheckBox'
import UpLabel from '../../Display/Label'
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpDefaultTheme, { UpThemeProvider } from '../../../Common/theming';
import UpButton from '../Button/UpButton';
import UpInput from '../Input';
import UpBox from '../../Containers/Box';

/// HOOKS
import useSafeSate from '../../../Common/hooks/useSafeState'

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
    let [currentName, setCurrentName] = useSafeSate('')

    let [options, setOptions] = useSafeSate([{
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
        setOptions(prevOptions => prevOptions.map((option: iCbOption) => {
            if (option.name !== cbName) {
                return option;
            }
            return {
                ...option,
                checked
            };
        }));
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newName = currentName || randomName();
        console.group("handleClick");
        console.log("Add option", newName);
        console.groupEnd();

        setOptions(prevOptions => [...prevOptions, {
            name: newName,
            value: newName,
            text: newName,
            onOptionChange: (event, checked) => handleToggle(newName, checked),
            checked: false
        }]);
    };

    return (
        <UpThemeProvider theme={UpDefaultTheme}>
            <UpBox
                style={{
                    margin: "1em"
                }}
            >
                <UpBox style={{marginBottom : "20px"}}>
                    <UpButton actionType={'add'} intent={'primary'} onClick={(e) => handleClick(e)}>
                        Ajouter un checkbox
                    </UpButton>
                    <UpBox style={{width : "200px"}}>
                        <UpInput hasClearOption={true} onClear={() => setCurrentName('')} value={currentName} onChange={e => setCurrentName(e.target.value)}></UpInput>
                    </UpBox>
                </UpBox>
                <UpBox>
                    <UpLabel inline={true} width="small" text="Choix :">
                        <UpCheckbox options={options}></UpCheckbox>
                    </UpLabel>
                </UpBox>
            </UpBox>
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


const MultipleCheckbox = () => {
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


const MultipleCheckboxWithSomeDisabled = () => {
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
        checked: selectedOption2 === true,
        disabled: true
    }, {
        text: "Vous êtes grand ?",
        name: "Option3",
        onOptionChange: onChangeOption3,
        value: true,
        checked: selectedOption3 === true
    }]} />
}

export default { 
    title: 'Components|Inputs/UpCheckbox',
    decorators : [withKnobs, getRootContainer('UpCheckbox')]
};

export const General =
    () => (
        <UpLabel textAlign={"left"} inline={true} width="medium" text="Activation de ... :">
            <SimpleCheckbox />
        </UpLabel>
    );
export const Multiple =
   () => (
        <UpLabel inline={true} width="small" text="Choix :">
           <MultipleCheckbox />
        </UpLabel>
    );
export const MultipleWithSomeDisabled =
       () => (
            <UpLabel inline={true} width="small" text="Choix :">
               <MultipleCheckboxWithSomeDisabled />
            </UpLabel>
    );
export const Dynamic =
    () => (
        <DynamicOptions />
    ) ;