import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpInput from './UpInput'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpLabel from '../../Display/Label';
import { UpGrid, UpRow, UpCol } from '../../Containers/Grid'

import { Formik } from 'formik';
import * as Yup from 'yup';
import UpPassword from '../Password';
import { style } from 'typestyle';

const stories = storiesOf('Inputs/UpInput', module);

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpInput'));

const SimpleInput = (props) => {
  let [selectedValue, setValue] = React.useState(null);

  const onChange = (event, value) => {
    setValue(value);
  }

  return <UpInput value={selectedValue} onChange={onChange} type={"text"} />;
}

const EmailForm = (props) => {
  const [onBlurState, setOnBlurState] = React.useState({} as any);

  const HelpMessageDisplayStyle = error =>
    style({
      position: "relative",
      cursor: "help",
      height: "100%",
      $nest: {
        "& .up-wrapper-help-message-inline": {
          display: "inline-block",
          color: error ? "red" : "black",
          fontSize: "8pt"
        }
      }
    });

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
      <UpInput
        name={"email"}
        type={"email"}
        onBlur={e => {
          handleBlur(e);
          setOnBlurState({ ...onBlurState, email: true });
        }}
        floatingLabel={"Email"}
        errorDisplayMode={"inline"}
        showError={dirty && onBlurState.email}
        showSuccess={dirty && onBlurState.email}
        error={errors.email === undefined ? null : errors.email}
        hasError={errors.email != null}
        value={values.email}
        onChange={handleChange}
        onFocus={e => {
          setOnBlurState({ ...onBlurState, email: false });
        }}
        autocomplete={"off"}
        iconPosition={"right"}
        placeholder={"Renseignez votre email"}
        //helpMessageText={"Vous devez renseigner un email valide"}
        helpMessage={children => (
          <div className={HelpMessageDisplayStyle(errors.email)}>
            {children}
            <div className={"up-wrapper-help-message-inline"}>
              Vous devez renseigner un email valide
            </div>
          </div>
        )}
      />
      <UpPassword
        name={"password"}
        floatingLabel={"Password"}
        onBlur={e => {
          handleBlur(e);
          setOnBlurState({ ...onBlurState, password: true });
        }}
        iconPosition={"right"}
        autocomplete={"off"}
        onFocus={e => {
          setOnBlurState({ ...onBlurState, password: false });
        }}
        showSuccess={dirty && onBlurState.password}
        value={values.password}
        onChange={handleChange}
      />
      <UpInput
        name={"firstName"}
        floatingLabel={"First Name"}
        onBlur={e => {
          handleBlur(e);
          setOnBlurState({ ...onBlurState, firstName: true });
        }}
        onFocus={e => {
          setOnBlurState({ ...onBlurState, firstName: false });
        }}
        value={values.firstName}
        showSuccess={dirty && onBlurState.firstName}
        autocomplete={"off"}
        onChange={handleChange}
      />
      <UpInput
        name={"lastName"}
        floatingLabel={"Last Name"}
        onBlur={e => {
          handleBlur(e);
          setOnBlurState({ ...onBlurState, lastName: true });
        }}
        onFocus={e => {
          setOnBlurState({ ...onBlurState, lastName: false });
        }}
        value={values.lastName}
        showSuccess={dirty && onBlurState.lastName}
        autocomplete={"off"}
        onChange={handleChange}
      />
    </form>
  );
}

const PhoneInput = (props) => {
  const [phoneValue, setPhoneValue] = React.useState("");
  const [error, setError] = React.useState("");
  const validation = [{
    pattern: /^0[67][\d]+$/,
    errorMessage: "Phone erroné"
  }
  ];
  return (
    <UpInput
      type={"phone"}
      error={error}
      onChange={(e, v, error) => {
        setPhoneValue(v);
        setError(error);
      }}
      value={phoneValue}
      validation={validation}
      errorDisplayMode={"inline"}
    />
  );
}


stories.add('Text input',
  () => (
    <UpGrid>
      <UpRow>
        <UpCol span={6}>
          <UpLabel text={'Nom :'} required={true} inline={true}>
            <SimpleInput />
          </UpLabel>
        </UpCol>
      </UpRow>
    </UpGrid>
  ), { info: 'Utilisation simple' }
).add('Search Input',
  () => (
    <UpGrid>
      <UpRow>
        <UpCol span={6}>
          <UpLabel text={'Recherche :'} required={true} inline={true}>
            <UpInput type={"search"} />
          </UpLabel>
        </UpCol>
      </UpRow>
    </UpGrid>
  ), { info: 'Champ de recherche' }
).add('Email Input',
  () => (
    <UpGrid>
      <UpRow>
        <UpCol span={6}>
          <UpLabel text={'Email :'} required={true} inline={true}>
            <UpInput type={"email"} validation={[{
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              errorMessage: "Le champ doit être un courriel"
            }]} iconPosition={'left'} />
          </UpLabel>
        </UpCol>
      </UpRow>
    </UpGrid>
  ), { info: 'Champ email' }
).add('Phone Input',
  () => (
    <UpGrid>
      <UpRow>
        <UpCol span={6}>
          <UpLabel text={'Phone :'} required={true} inline={true}>
            <PhoneInput />
          </UpLabel>
        </UpCol>
      </UpRow>
    </UpGrid>
  ), { info: 'Champ phone' }
).add('Required Input',
  () => (
    <UpGrid>
      <UpRow>
        <UpCol span={6}>
          <UpLabel text={'Email :'} required={true} inline={true}>
            <UpInput isRequired={true} type={"email"} />
          </UpLabel>
          <UpLabel text={'Email :'} required={true} inline={true}>
            <UpInput isRequired={true} type={"email"} iconPosition={'right'} />
          </UpLabel>
          <UpLabel text={'Email :'}>
            <UpInput isRequired={true} type={"email"} />
          </UpLabel>
          <UpLabel text={'Email :'}>
            <UpInput isRequired={true} type={"email"} iconPosition={'right'} />
          </UpLabel>
        </UpCol>
      </UpRow>
    </UpGrid>
  ), { info: 'Champ requis' }
).add('Form',
  () => (
    <UpGrid>
      <UpRow>
        <UpCol span={12}>
          <Formik initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
            validateOnBlur={true}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Vous devez renseigner un email valide")
                .required('L\'email est requis'),
            })}>
            {(props) => <EmailForm {...props} />}
          </Formik>
        </UpCol>
      </UpRow>
    </UpGrid>
  ), { info: 'Champ requis' }
);
