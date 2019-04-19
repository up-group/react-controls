import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDate from './UpDate'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { getRootContainer } from '../../../Common/stories';

import { Formik } from 'formik';
import * as Yup from 'yup';

const stories = storiesOf('Inputs/UpDate', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpDate'));


const DateForm = (props) => {
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
      <UpDate
        name={"startDate"}
        floatingLabel={"Date de début"}
        value={values.startDate}
        isRequired={true}
        onChange={handleChange}
      />
      <UpDate
        name={"endDate"}
        floatingLabel={"Date de fin"}
        value={values.endDate}
        isRequired={true}
        onChange={handleChange}
      />
    </form>
  );
}

stories
  .add(
    "Simple usage",
    () => (
      <UpDate
        onChange={(value, event) => {
          console.log(event);
          console.log(value);
        }}
      />
    ),
    { info: "Utilisation simple" }
  )
  .add(
    "Date requise",
    () => (
      <UpDate
        isRequired={true}
        onChange={(value, event) => {
          console.log(event);
          console.log(value);
        }}
      />
    ),
    { info: "La date est requise" }
  )
  .add(
    "Form",
    () => (
      <Formik
        initialValues={{ startDate: null, endDate: null }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
        })}
      >
        {props => <DateForm {...props} />}
      </Formik>
    ),
    { info: "La date est requise" }
  );