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
stories.add('Simple usage',
   () => (
    <UpDate onChange={(value, event) => {console.log(event);console.log(value)}} />
  ), { info : 'Utilisation simple' }
).add('Date requise',
  () => (
    <UpDate isRequired={true} onChange={(value, event) => {console.log(event);console.log(value)}} />
 ), { info : 'La date est requise' }
).add('Form',
() => (
    <Formik initialValues={{ email: '', password: ''}}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email()
                .required('Required'),
            })}>
            {(props) => {
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
                    name={'startDate'}
                    isRequired={true} 
                    onChange={handleChange} />
                </form>
              );
            }}
    </Formik>
), { info : 'La date est requise' }
)  ;