import * as React from 'react';
import SimpleStyledDiv, {ComplexStyledDiv}  from './styles';
import Props from './types';

export default function SimpleDiv({
  children,
  ...rest,
}: Props): JSX.Element {
  return (
    <SimpleStyledDiv {...rest}>
      {children || null}
    </SimpleStyledDiv>
  );
};

export function ComplexDiv({
  children,
  ...rest,
}: Props): JSX.Element {
  return (
    <ComplexStyledDiv {...rest}>
      {children || null}
    </ComplexStyledDiv>
  );
};