import * as React from 'react';
import useMountedRef from './useMountedRef';

const useSafeState = initialValue => {
  const [state, setState] = React.useState(initialValue);
  const mountedRef = useMountedRef();

  return [
    state,
    value => {
      mountedRef.current && setState(value);
    },
  ];
};

export const useSafeStateWithReducer = initialValue => {
  const [state, setState] = React.useReducer((state, newState) => ({ ...state, ...newState }), initialValue);
  const mountedRef = useMountedRef();

  return [
    state,
    value => {
      mountedRef.current && setState(value);
    },
  ];
};

export const useSafeStateWithReducerGeneric = <T>(initialValue: T) => {
  const [state, setState] = React.useReducer((state: T, newState: T) => ({ ...state, ...newState }), initialValue);
  const mountedRef = useMountedRef();

  return [
    state,
    (value: T) => {
      mountedRef.current && setState(value);
    },
  ];
};

export const useSafeStateGeneric = <T>(initialValue: T) => {
  const [state, setState] = React.useState(initialValue);
  const mountedRef = useMountedRef();

  return [
    state,
    (value: T) => {
      mountedRef.current && setState(value);
    },
  ];
};

export default useSafeState;
