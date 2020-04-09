import * as React from 'react';
import classnames from 'classnames';
import { Formik } from 'formik';
import { getStyles } from './styles';
import { JustifyContent, AlignItems, CSSProperties } from 'typestyle/lib/types';
export type styleObjectProps = {
  flexDirection?: string;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  flexWrap?: string;
};
interface UpFormProps {
  children;
  initialValues?: Object;
  onValidate?: () => void;
  className?: string;
  onSubmit?: () => void;
  style?: styleObjectProps & CSSProperties;
}
const UpForm = ({
  children,
  initialValues = {},
  onSubmit = () => {},
  onValidate = () => {},
  className,
  style = {},
  ...rest
}: UpFormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={onValidate}
      validateOnBlur={true}>
      {({ handleSubmit, ...restFormikBox }) => (
        <form
          onSubmit={handleSubmit}
          className={classnames(
            className,
            'up-form',
            getStyles(style)
          )}>
          {children(restFormikBox)}
        </form>
      )}
    </Formik>
  );
};

export default UpForm;
