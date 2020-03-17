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

import { Formik } from 'formik';
import * as Yup from 'yup'; 
import UpInput from '../Input';
import UpNumber from '../Number/UpNumber';
import UpCheckBox from '../Checkbox';
const stories = storiesOf('Components|Inputs/UpRadio', module) ;


const SimpleRadio = (props) => {
    let [selectedValue, setValue] = React.useState(null);

    const onChange = (event, value) => {
        setValue(value);
    }

    return (
        <div>
            <div style={{ padding: "30px",height:300 }}>
                <UpRadio flexWrap onChange={onChange} gutter={30} value={selectedValue} defaultValue={"option1"} alignMode="vertical" name={"modeAdresse"} options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }, { text: "Option 4", value: "option4" }, { text: "Option 5", value: "option5" }, { text: "Option 6", value: "option6" }]} />
            </div>
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
).add('Display with toggled element',
    () => (
            <div style={{ padding: "30px" }}>
                <UpRadio gutter={30} defaultValue={"option1"} alignMode="vertical" name={"modeAdresse"} options={[{ text: "Option 1", value: "option1",toggledElement:<UpInput placeholder={"Saisir votre message"}/> }, { text: "Option 2", value: "option2",toggledElement:<UpNumber/> }, { text: "Option 3", value: "option3", toggledElement:<UpCheckBox options={[{name:"case",text:"Cocher la case suivante"}]} /> }]} />
            </div>
    ), {info : 'Affichage des radio en ligne'}
).add('Form',
    () => (
        <div style={{ padding: "30px" }}>
            <Formik initialValues={{ modeAdresse: null }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
                validateOnBlur={true}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .required('Le choix est requis'),
                })}>
                {(props) => <RadioForm {...props} />}
            </Formik>
        </div>
    ), { info: 'Affichage des radio en ligne' }
);


const RadioForm = (props) => {
    const [onBlurState, setOnBlurState] = React.useState({} as any);

    const {
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
    } = props;

    return (
        <form onSubmit={handleSubmit}>
            <UpRadio defaultValue={"option1"} name={"modeAdresse"} onChange={handleChange}
            alignMode="horizontal" value={values.modeAdresse} gutter={8} options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }]} />
        </form>
    );
}
