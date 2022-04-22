import React from 'react';

import UpDefaultTheme from '../../../Common/theming';
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider';

import UpRichText from './';
import UpLabel from '../../Display/Label';

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { Formik } from 'formik';

import * as Yup from 'yup';

export default {
  title: 'Components/Inputs/UpRichText',
  decorators: [withKnobs, getRootContainer('UpRating')],
};

export const General = () => (
  <UpThemeProvider theme={UpDefaultTheme}>
    <div style={{ padding: '30px' }}>
      <UpLabel text={'Observation : '}>
        <UpRichText width={'fill'} />
      </UpLabel>
    </div>
  </UpThemeProvider>
);

export const IntegrationInForm = () => (
  <Formik
    initialValues={{ description: '' }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({})}
  >
    {props => {
      const { values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset } =
        props;
      return (
        <form onSubmit={handleSubmit}>
          <UpLabel text={'Observation : '}>
            <UpRichText width={'fill'} name={'description'} value={values.description} onChange={handleChange} />
          </UpLabel>
        </form>
      );
    }}
  </Formik>
);
