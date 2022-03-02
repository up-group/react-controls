import * as React from 'react';
import UpText from './';
import UpLabel from '../../Display/Label';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { Formik } from 'formik';
import * as Yup from 'yup';
import UpInput from '../Input';

export default {
  title: 'Components/Inputs/UpText',
  decorators: [withKnobs, getRootContainer('UpText')],
  component: UpText,
};

export const General = () => (
  <UpLabel text={'Observation : '}>
    <UpText width={'fill'} />
  </UpLabel>
);

export const IntegrationInForm = () => (
  <Formik
    initialValues={{ description: '', firstName: '' }}
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
          <UpLabel text={'Firstname : '}>
            <UpInput
              name={'firstName'}
              floatingLabel={'First Name'}
              value={values.firstName}
              autocomplete={'off'}
              onChange={handleChange}
            />
          </UpLabel>
          <UpLabel text={'Observation : '}>
            <UpText width={'fill'} name={'description'} value={values.description} onChange={handleChange} />
          </UpLabel>
        </form>
      );
    }}
  </Formik>
);

export const WithPlaceHolder = () => (
  <Formik
    initialValues={{ description: '', firstName: '' }}
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
          <UpLabel text={'Firstname : '}>
            <UpInput
              name={'firstName'}
              floatingLabel={'First Name'}
              value={values.firstName}
              autocomplete={'off'}
              onChange={handleChange}
            />
          </UpLabel>
          <UpText
            width={'fill'}
            name={'description'}
            placeholder={'Les observation de votre compte'}
            value={values.description}
            onChange={handleChange}
          />
        </form>
      );
    }}
  </Formik>
);

export const WithMaximumCharacter = () => (
  <div data-testid="UpText">
    <UpLabel text={'Observation : '}>
      <UpText
        width={'fill'}
        maxChar={number('maxChar', 300)}
        maxCharMsgShowNumber={number('maxCharMsgShowNumber', 0)}
        maxCharMsg={text('maxCharMsg', 'Vous avez saisi {{numberOfChar}} sur un nombre maximal de {{maxChar}}')}
      />
    </UpLabel>
  </div>
);

export const ForceMaximumCharacter = () => (
  <UpLabel text={'Observation : '}>
    <UpText
      width={'fill'}
      maxChar={100}
      forceMaxChar={true}
      maxCharMsgShowNumber={number('maxCharMsgShowNumber', 0)}
      maxCharMsg={text('maxCharMsg', 'Vous avez saisi {{numberOfChar}} sur un nombre maximal de {{maxChar}}')}
    />
  </UpLabel>
);
