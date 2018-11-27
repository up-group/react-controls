import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpText from './'
import UpLabel from '../../Display/Label'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Inputs/UpText', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpText'));

import { Formik } from 'formik';
import * as Yup from 'yup';

stories.add('Simple usage',
    () => (
        <UpLabel text={"Observation : "}>
             <UpText width={'fill'} />
        </UpLabel>
    ), { info : 'Utilisation avec plusieurs options'}
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
                 <UpLabel text={"Observation : "}>
                    <UpText width={'fill'} />
                </UpLabel>
                </form>
              );
            }}
    </Formik>
), { info : 'Utilisation dans Formik'}
);
