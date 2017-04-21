import * as React from 'react';
import Component from './styles';
import Props from './types';

export default function Box({
  children,
  ...others,
}: Props): JSX.Element {
  return (
    <Component {...others}>
      {children || null}
    </Component>
  );
};
