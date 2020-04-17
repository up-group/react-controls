import * as React from 'react'

import UpSelect from './'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { mdx } from '@storybook/addon-docs/blocks';
import { UpGrid, UpRow, UpCol } from '../../Containers/Grid';

import { Formik } from "formik";
import * as Yup from "yup";
import { style } from 'typestyle';
import UpInput from '../Input';
import UpBox from '../../Containers/Box';
import UpPassword from '../Password';
import UpDate from '../Date';

export default { 
    title: 'Components|Inputs/UpSelect',
    decorators : [withKnobs,getRootContainer('UpSelect')],
    parameters: {
        docs: {
            page: mdx
        }
    }
};

const UserCreationForm = props => {
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
          <UpGrid className={'up-form'} gutter={16}>
            <UpRow>
                <UpCol className={'up-form-field'} xs={24} sm={12} md={8} lg={6} >
                    <UpSelect autoload={false}
                            isRequired={false}
                            allowClear={true}
                            allowCreate={true}
                            default={null}
                            multiple={false}
                            floatingLabel="Civilité"
                            tooltip="Votre civilité"
                            minimumInputLength={3}
                            createOptionPosition={'first'}
                            data={[
                                { id: 1, text: 'M.' },
                                { id: 2, text: 'Mme' },
                                { id: 3, text: 'Mlle' },
                                { id: 4, text: 'Dr' },
                            ]}
                            onChange={console.log} />
                </UpCol>
                <UpCol xs={24} sm={12} md={8} lg={6}>
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
                </UpCol>
                <UpCol xs={24} sm={12} md={8} lg={6}>
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
                </UpCol>
            </UpRow>
            <UpRow>
                <UpCol xs={24} sm={12} md={8} lg={6}>
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
                            helpMessage={children => (
                                <div className={HelpMessageDisplayStyle(errors.email)}>
                                    {children}
                                    <div className={"up-wrapper-help-message-inline"}>
                                        Vous devez renseigner un email valide
                                    </div>
                                </div>
                            )}
                        />
                </UpCol>
                <UpCol xs={24} sm={12} md={8} lg={6}>
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
                        showPasswordOnClick={true}
                        showSuccess={dirty && onBlurState.password}
                        value={values.password}
                        onChange={handleChange}
                    />
                </UpCol>
            </UpRow>
            <UpRow>
                <UpCol className={'up-form-field'} xs={24} sm={12} md={8} lg={6} >
                    <UpSelect autoload={false}
                            isRequired={false}
                            allowClear={true}
                            allowCreate={true}
                            default={null}
                            multiple={false}
                            floatingLabel="Civilité"
                            tooltip="Votre civilité"
                            minimumInputLength={3}
                            createOptionPosition={'first'}
                            data={[
                                { id: 1, text: 'M.' },
                                { id: 2, text: 'Mme' },
                                { id: 3, text: 'Mlle' },
                                { id: 4, text: 'Dr' },
                            ]}
                            onChange={console.log} />
                </UpCol>
                <UpCol xs={24} sm={12} md={8} lg={6}>
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
                </UpCol>
                <UpCol xs={24} sm={12} md={8} lg={6}>
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
                </UpCol>
            </UpRow>
            <UpRow>
                <UpCol xs={24} sm={12} md={8} lg={6}>
                    <UpDate
                            name={"birthdate"}
                            floatingLabel={"Date de naissance"}
                            errorDisplayMode={"inline"}
                            showError={dirty && onBlurState.email}
                            showSuccess={dirty && onBlurState.email}
                            error={errors.email === undefined ? null : errors.email}
                            hasError={errors.email != null}
                            value={values.email}
                            onChange={handleChange}
                            placeholder={"Date de naissance"}
                            helpMessage={children => (
                                <div className={HelpMessageDisplayStyle(errors.email)}>
                                    {children}
                                    <div className={"up-wrapper-help-message-inline"}>
                                        Vous devez renseigner votre date de naissance
                                    </div>
                                </div>
                            )}
                        />
                </UpCol>
                <UpCol xs={24} sm={12} md={8} lg={6}>
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
                        showPasswordOnClick={true}
                        showSuccess={dirty && onBlurState.password}
                        value={values.password}
                        onChange={handleChange}
                    />
                </UpCol>
            </UpRow>
        </UpGrid>
      </form>
    );
  };

const SimpleSelect = (props) => {
    let [selectedValue, setValue] = React.useState(null);
    
    const onChange = (event, value) => {
        setValue(value);
    }

    return (
        <UpSelect 
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
            floatingLabel="Floating Label"
            onChange={onChange} />
)}

export const General = () => <SimpleSelect />;

export const FetchingData =  () => (
    <UpSelect autoload={false}
        isRequired={false}
        allowClear={true}
        default={null}
        multiple={false}
        tooltip="Votre ville de naissance"
        minimumInputLength={3}
        returnType="id"
        labelKey={"title"}
        dataSource={{
            query: "https://jsonplaceholder.typicode.com/todos",
            text: "title"
        }}
        onChange={console.log} />
);
export const FetchingDataWithProxy =  () => (
    <UpSelect autoload={false}
        isRequired={false}
        allowClear={true}
        default={null}
        multiple={false}
        tooltip="Votre ville de naissance"
        minimumInputLength={3}
        dataSource={{
            query: "https://jsonplaceholder.typicode.com/todos",
            text: "title",
            handleResponse: (response) => {
                return [{ id: 100, title: 'Data proxied' }];
            }
        }}
        onChange={console.log} />
) ;

export const IsRequired =
    () => (
            <div style={{ margin: "30px" }}>
                <UpSelect isRequired={true}
                    allowClear={true}
                    default={null}
                    multiple={false}
                    tooltip="Votre ville de naissance"
                    data={[
                        { id: 1, text: 'M.' },
                        { id: 2, text: 'Mme' },
                        { id: 3, text: 'Mlle' },
                        { id: 4, text: 'Dr' },
                    ]}
                    onChange={console.log} />
            </div>
    ); 

export const ReturnId =
    () => (
        <div style={{ margin: "30px" }}>
            <UpSelect isRequired={true}
                allowClear={true}
                default={2}
                multiple={false}
                returnType={"id"}
                valueKey={"id"}
                tooltip="Votre ville de naissance"
                data={[
                    { id: 1, text: 'M.' },
                    { id: 2, text: 'Mme' },
                    { id: 3, text: 'Mlle' },
                    { id: 4, text: 'Dr' },
                ]}
                onChange={console.log} />
        </div>
    ) ;

export const Creatable = () => (
        <div style={{ margin: "30px" }}>
            <UpSelect autoload={false}
                isRequired={false}
                allowClear={true}
                allowCreate={true}
                default={null}
                multiple={false}
                tooltip="Votre civilité"
                minimumInputLength={3}
                createOptionPosition={'first'}
                data={[
                    { id: 1, text: 'M.' },
                    { id: 2, text: 'Mme' },
                    { id: 3, text: 'Mlle' },
                    { id: 4, text: 'Dr' },
                ]}
                onChange={console.log} />
        </div>
)
export const AsyncCreatable = () => (
        <div style={{ margin: "30px" }}>
            <UpSelect autoload={false}
                isRequired={false}
                allowClear={true}
                allowCreate={true}
                default={null}
                multiple={false}
                tooltip="Votre ville de naissance"
                minimumInputLength={3}
                createOptionPosition={'first'}
                dataSource={{
                    query: "https://jsonplaceholder.typicode.com/todos",
                    text: "title"
                }}
                onChange={console.log} />
        </div>
)
export const MultiCreatable =
() => (
        <div style={{ margin: "30px" }}>
            <UpSelect autoload={false}
                isRequired={false}
                allowClear={true}
                allowCreate={true}
                default={null}
                multiple={true}
                tooltip="Vos couleurs préférées"
                minimumInputLength={3}
                createOptionPosition={'first'}
                data={[
                    { id: 1, text: 'Rouge' },
                    { id: 2, text: 'Bleu' },
                    { id: 3, text: 'Vert' },
                    { id: 4, text: 'Orange' },
                ]}
                onChange={console.log} />
        </div>
);

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
            {(props) => <UserCreationForm {...props} />}
          </Formik>
        </UpCol>
      </UpRow>
    </UpGrid>
  )