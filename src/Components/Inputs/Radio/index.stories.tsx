import * as React from 'react'

import UpRadio from './UpRadio'
import UpHeading from '../../Display/Heading'

import { withKnobs, text, boolean, number, array} from '@storybook/addon-knobs';
import { getRootContainer } from '../../../Common/stories';

import { Formik } from 'formik';
import * as Yup from 'yup'; 
import UpInput from '../Input';
import UpNumber from '../Number/UpNumber';
import UpCheckBox from '../Checkbox';


export default { 
    title: 'Components/Inputs/UpRadio',
    decorators : [withKnobs, getRootContainer('UpRadio')]
  };

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

export const General = () => <SimpleRadio /> ;

export const DisplayHorizontally =
    () => (
            <div style={{ padding: "30px" }}>
                <UpRadio defaultValue={"option1"} name={"modeAdresse"} alignMode="horizontal" gutter={8} options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }]} />
            </div>
    )
export const DisplayAsButton =
    () => (
            <div style={{ padding: "30px" }}>
                <UpRadio name={"modeAdresse"} displayMode="button" options={[{ text: "Option 1", value: "option1" }, { text: "Option 2", value: "option2" }, { text: "Option 3", value: "option3" }]} />
            </div>
    )
export const DisplayAsButtonWithRequired =
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
);
export const DisplayAsLarge =
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
export const DisplayWithToggledElement =
    () => (
            <div style={{ padding: "30px" }}>
                <UpRadio gutter={30} defaultValue={"option1"} alignMode="vertical" name={"modeAdresse"} options={[{ text: "Option 1", value: "option1",toggledElement:<UpInput placeholder={"Saisir votre message"}/> }, { text: "Option 2", value: "option2",toggledElement:<UpNumber/> }, { text: "Option 3", value: "option3", toggledElement:<UpCheckBox options={[{name:"case",text:"Cocher la case suivante"}]} /> }]} />
            </div>
    )
export const IntegrationInForm =
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
    )

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
