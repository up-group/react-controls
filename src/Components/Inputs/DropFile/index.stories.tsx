import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import { withKnobs } from '@storybook/addon-knobs';

import UpBox from '../../Containers/Box';
import UpNotification from '../../Display/Notification';
import UpParagraph from '../../Display/Paragraph';
import UpDropFile from './UpDropFile';

import { Formik } from "formik";
import * as Yup from "yup"; 

import { style } from 'typestyle';

const stories = storiesOf('Components|Inputs/UpDropFile', module) ;

const FileForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <UpDropFile
        allowedExtensions={['jpg', 'jpeg', 'png']}
        autoResizeContainer={true}
        name={"file"}
        value={values.file}
        enableCrop={true}
        onChange={handleChange}
        label={"File"}
        maxImgWidth={600}
      >
        Add
      </UpDropFile>
    </form>
  );
};

stories.addDecorator(withKnobs);
stories.add('Simple usage',
() => {

 return (
   <UpThemeProvider theme={UpDefaultTheme}>
     <UpBox style={{ margin: "40px 30px" }}>
       <UpNotification intent={"info"}>
         Le composant <code>UpDropFile</code> permet de définir ...
       </UpNotification>

       <UpBox className={style({ width: "300px !important" })}>
         <UpDropFile label={"File"} name={"file"} maxImgWidth={600}>
           Add
         </UpDropFile>
       </UpBox>
       <UpBox className={style({ width: "300px !important" })}>
         <UpDropFile
           showPreview={false}
           label={"File without preview"}
           name={"file"}
           maxImgWidth={600}
         >
           Add
         </UpDropFile>
       </UpBox>
     </UpBox>
   </UpThemeProvider>
 );
 
}, { info : "Utilisation du composant en lui passant les données à afficher" }
).add('Form',
  () => {
    return (
      <UpThemeProvider theme={UpDefaultTheme}>
        <UpBox style={{ margin: "40px 30px" }}>
          <UpNotification intent={"info"}>
            Le composant <code>UpDropFile</code> permet de définir ...
          </UpNotification>
          <UpBox className={style({ width: "100%" })}>
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
                file: Yup.object().required("Le fichier est requis")
              })}
            >
              {props => <FileForm {...props} />}
            </Formik>
          </UpBox>
        </UpBox>
      </UpThemeProvider>
    );

  }, { info: "Utilisation du composant en lui passant les données à afficher" }
)