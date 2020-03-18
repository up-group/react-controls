import * as React from "react";

import UpInput from "./UpInput";

import { getRootContainer } from "../../../Common/stories";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import UpLabel from "../../Display/Label";
import { UpGrid, UpRow, UpCol } from "../../Containers/Grid";

import { Formik } from "formik";
import * as Yup from "yup";
import UpPassword from "../Password";
import { style } from "typestyle";
import UpSelect from "../../Inputs/Select";

export default { 
  title: 'Components|Inputs/UpInput',
  decorators : [withKnobs, getRootContainer('UpInput')]
};

const SimpleInput = props => {
  let [selectedValue, setValue] = React.useState(null);

  const onChange = (event, value) => {
    setValue(value);
  };

  return <UpInput value={selectedValue}  onChange={onChange} type={"text"} />;
};

const ReadOnlyInputs = () => (
  <React.Fragment>
    <UpInput floatingLabel={text('Floating Label','Floating Name')} readonly={boolean('Floating ReadOnly', true)} defaultValue="read only" />
    <UpLabel text={text('Label','Label')}  >
      <UpInput readonly={boolean('ReadOnly', true)} defaultValue="read only"/>
    </UpLabel>
  </React.Fragment>
  
)

const EmailForm = props => {
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
};

const PhoneInput = props => {
  const [phoneValue, setPhoneValue] = React.useState("");
  const [error, setError] = React.useState("");
  const validation = [
    {
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
};

const ControlledSeacrhInput = props => {
  const [value,setValue] = React.useState('')
  const [isLoading,setIsLoading] = React.useState(false);
  
  return (
    <UpInput
      type='search' 
      value={value} 
      onChange={(event,value)=>{
        setIsLoading(true)
        setValue(value)
        setTimeout(() => {
          setIsLoading(false)
        }, 2000);
      }} 
      onClear={()=>setValue('')} 
      placeholder='placeholder ...'   
      iconPosition={'left'} 
      hasClearOption
      isLoading={isLoading}
     />
  )
}

const UncontrolledSearchInput = () =>  <UpInput type='search' iconPosition={'left'} hasClearOption isLoading/>

const SimpleSelect = (props) => {
  let [selectedValue, setValue] = React.useState({ id: 1, text: 'M.' });
  
  const onChange = (event, value) => {
      setValue(value);
  }

  return (
      <UpSelect 
          className={style({width:'220px'})}
          tooltip={"Civilité"} 
          isRequired={true} 
          default={null} 
          data={[
              { id: 1, text: 'M.' },
              { id: 2, text: 'Mme' },
              { id: 3, text: 'Mlle' },
              { id: 4, text: 'Dr' },
          ]}
          value={selectedValue} 
          onChange={onChange} />
)}

const FormWithSelect = (props)=> {
  return (
    <div style={{width:'100%'}}>
  <form style={{display:'flex',justifyContent:'space-between' ,marginTop:'25px'}}>
    <SimpleSelect/>
    <SimpleInput/>
  </form>
</div>
  )
}

export const General =
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
  )
export const IsReadOnly = () => (
  <UpGrid>
      <UpRow>
        <UpCol span={6}>
          <ReadOnlyInputs/>
        </UpCol>
      </UpRow>
    </UpGrid>
);

export const Search = () => (
    <UpGrid>
      <UpRow>
        <UpCol span={12}>
          <UpLabel text={'Controlled Recherche :'} required={true} inline={true}>
            <ControlledSeacrhInput/>
          </UpLabel>
          <UpLabel text={'Uncontrolled Recherche :'} required={true} inline={true}>
            <UncontrolledSearchInput/>
          </UpLabel>
        </UpCol>
      </UpRow>
    </UpGrid>
  )
export const Email = () => (
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
  ) ;
export const Phone =
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
  )
export const IsRequired = 
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
  )
export const IntegrationInForm =
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
  )
export const AutoFocus = 
() => (
  <UpGrid>
      <UpRow>
        <UpCol span={6}>
          <UpLabel text={'Adresse :'}>
            <UpInput autoFocus isRequired={true} />
          </UpLabel>
          <UpLabel text={'Adresse 2 :'}>
            <UpInput isRequired={true}/>
          </UpLabel>
          <UpLabel text={'Adresse 3 :'}>
            <UpInput isRequired={true} />
          </UpLabel>
        </UpCol>
      </UpRow>
    </UpGrid>
);

export const ComplexForm = ()=> <FormWithSelect/>
