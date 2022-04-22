import React from 'react';

import UpTimePicker from './';
import UpLabel from '../../Display/Label';
import UpNotification from '../../Display/Notification';
import UpBox from '../../Containers/Box';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { getRootContainer } from '../../../Common/stories';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default {
  title: 'Components/Inputs/UpTimePicker',
  decorators: [withKnobs, getRootContainer('UpTimePicker')],
};
export const General = () => (
  <UpBox style={{ margin: '40px 30px' }}>
    <UpNotification>
      Le composant <code>UpTimePicker</code>
    </UpNotification>
    <UpBox style={{ margin: '30px' }}>
      <UpLabel textAlign={'left'} inline={true} width="medium" text="Heure de début :">
        <UpTimePicker />
      </UpLabel>
    </UpBox>
  </UpBox>
);

export const IntegrationInForm = () => (
  <Formik
    initialValues={{ time: null }}
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
          <UpLabel textAlign={'left'} inline={true} width="medium" text="Heure de début :">
            <UpTimePicker name={'time'} value={values.time} onChange={handleChange} />
          </UpLabel>
        </form>
      );
    }}
  </Formik>
);
