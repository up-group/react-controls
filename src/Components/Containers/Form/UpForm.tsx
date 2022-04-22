import React from 'react';
import classnames from 'classnames';
import { Formik } from 'formik';
import { getStyles } from './styles';
import { CSSProperties } from 'typestyle/lib/types';

interface UpFormProps {
  children?: (formikBag) => React.ReactElement;
  initialValues?: Object;
  onValidate?: (values) => void | Promise<any>;
  className?: string;
  onSubmit?: (values, formikBag: Object) => void | Promise<any>;
  validateOnBlur?: boolean;
  validationSchema?: any;
  onReset?: (values, formikBag: Object) => void;
  style?: CSSProperties;
}
const UpForm = ({
  children,
  initialValues = {},
  onSubmit = () => {},
  onValidate = () => {},
  className,
  validateOnBlur,
  validationSchema,
  onReset,
  style = {},
  ...rest
}: UpFormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={onValidate}
      validateOnBlur={validateOnBlur}
      validationSchema={validationSchema}
      onReset={onReset}
      {...rest}
    >
      {({ handleSubmit, ...restFormikBag }) => (
        <form onSubmit={handleSubmit} className={classnames('up-form', getStyles(style), className)}>
          {children(restFormikBag)}
        </form>
      )}
    </Formik>
  );
};

export default UpForm;
