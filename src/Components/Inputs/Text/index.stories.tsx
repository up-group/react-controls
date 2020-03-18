import * as React from 'react'

import UpText from './'
import UpLabel from '../../Display/Label'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Formik } from 'formik';
import * as Yup from 'yup';

export default { 
  title: 'Components|Inputs/UpText',
  decorators : [withKnobs, getRootContainer('UpText')]
};

export const General =
  () => (
    <UpLabel text={"Observation : "}>
          <UpText width={'fill'} />
    </UpLabel>
  )

export const IntegrationInForm =
  () => (
    <Formik initialValues={{ description: ''}}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
            validationSchema={Yup.object().shape({
              
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
                    <UpText width={'fill'} 
                      name={'description'}
                      value={values.description}
                      onChange={handleChange}
                    />
                </UpLabel>
                </form>
              );
            }}
    </Formik>
)
