import * as React from 'react';
import UpDefaultTheme from '../../../Common/theming';
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider';
import { withKnobs } from '@storybook/addon-knobs';
import UpBox from '../../Containers/Box';
import UpNotification from '../../Display/Notification';
import UpDropFile, { UpDropFile as UpDropFileComponent } from './UpDropFile';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { style } from 'typestyle';
import { getRootContainer } from '../../../Common/stories';
import { IFile } from './types';

export default {
  title: 'Components/Inputs/UpDropFile',
  decorators: [withKnobs, getRootContainer('UpDropFile')],
  component: UpDropFileComponent,
};

const FileForm = props => {
  const { values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset } = props;

  return (
    <form onSubmit={handleSubmit}>
      <UpDropFile
        allowedExtensions={['jpg', 'jpeg', 'png']}
        autoResizeContainer={true}
        name={'file'}
        value={values.file}
        enableCrop={true}
        onChange={handleChange}
        label={'File'}
        maxImgWidth={600}
      >
        Add
      </UpDropFile>
    </form>
  );
};

export const General = () => (
  <UpThemeProvider theme={UpDefaultTheme}>
    <UpBox className={style({ width: '300px !important' })}>
      <UpDropFile label={'File'} name={'file'}>
        Add
      </UpDropFile>
    </UpBox>
  </UpThemeProvider>
);

export const FileWithoutPreview = () => (
  <UpThemeProvider theme={UpDefaultTheme}>
    <UpBox className={style({ width: '300px !important' })}>
      <UpDropFile showPreview={false} label={'File without preview'} name={'file'}>
        Add
      </UpDropFile>
    </UpBox>
  </UpThemeProvider>
);

export const AllowedExtensionsAndCustomizableLabel = () => (
  <UpThemeProvider theme={UpDefaultTheme}>
    <UpBox className={style({ width: '300px !important' })}>
      <UpDropFile
        label={'Add your file'}
        name={'file'}
        allowedExtensions={['pdf']}
        allowExtensionsLabel={'Only PDF format is accepted'}
      >
        Add
      </UpDropFile>
    </UpBox>
  </UpThemeProvider>
);

export const AllowedExtensionsAndCustomizableErrorMessage = () => (
  <UpThemeProvider theme={UpDefaultTheme}>
    <UpBox className={style({ width: '300px !important' })}>
      <UpDropFile
        label={'Add your file'}
        name={'file'}
        allowedExtensions={['pdf']}
        allowedExtensionsErrorMessage={(extensions?: string[], value?: IFile) =>
          `Le format n'est pas bon. Le fichier doit être un ${extensions ? extensions[0] : ''}`
        }
      >
        Add
      </UpDropFile>
    </UpBox>
  </UpThemeProvider>
);

export const CustomisableSelectFileButtonLabel = () => (
  <UpThemeProvider theme={UpDefaultTheme}>
    <UpBox className={style({ width: '300px !important' })}>
      <UpDropFile name={'file'} selectFileLabel={'Choisir'} displaySelectFile={true}>
        Add
      </UpDropFile>
    </UpBox>
  </UpThemeProvider>
);

export const MaxFileSize = () => (
  <UpThemeProvider theme={UpDefaultTheme}>
    <UpBox className={style({ width: '300px !important' })}>
      <UpDropFile name={'file'} selectFileLabel={'Choisir'} displaySelectFile={true} maxFileSize={1}>
        Add
      </UpDropFile>
    </UpBox>
  </UpThemeProvider>
);

export const IntegrationInForm = () => (
  <UpThemeProvider theme={UpDefaultTheme}>
    <UpBox className={style({ width: '100%' })}>
      <Formik
        initialValues={{ file: null }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        validateOnBlur={true}
        validationSchema={Yup.object().shape({
          file: Yup.object().required('Le fichier est requis'),
        })}
      >
        {props => <FileForm {...props} />}
      </Formik>
    </UpBox>
  </UpThemeProvider>
);
