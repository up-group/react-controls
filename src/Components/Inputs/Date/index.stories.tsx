import * as React from 'react'

import UpDate from './UpDate'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { getRootContainer } from '../../../Common/stories';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as moment from 'moment' 
import UpPassword from '../Password';


export default { 
  title: 'Components/Inputs/UpDate',
  decorators : [withKnobs, getRootContainer('UpDate')]
};

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
        maxDate={values.endDate}
      />
      <UpDate
        name={"endDate"}
        floatingLabel={"Date de fin"}
        value={values.endDate}
        isRequired={true}
        onChange={handleChange}
        minDate={values.startDate}
      />
    </form>
  );
}

export const General =
    () => {
    const [value,setDate] = React.useState(moment() as any)      
      return   (
      <UpDate
        onChange={(event,value) => {
          console.log(event);
          console.log(value);
          setDate(value)
        }}
        value={ value && moment(value)}
        fromToDay = {true}
      />
    )}

export const MonthsAndYearsSelectable =
    () => (
      <>
        <UpDate
          numberOfMonths={1}
          onChange={(value, event) => {
            console.log(event);
            console.log(value);
          }}
          daySize={40}
        />
        <div style={{margin: "50px", width : '100px'}} >
        <UpPassword
          value={""}
        />
        </div>
      </>
    )

  export const IsRequired =
    () => (
      <UpDate
        isRequired={true}
        onChange={(value, event) => {
          console.log(event);
          console.log(value);
        }}
      />
    )

  export const IntegrationInForm =
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
    )