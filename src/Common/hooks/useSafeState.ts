import useMountedRef from './useMountedRef';
import { Dispatch, SetStateAction, useCallback, useReducer, useState } from 'react';

type SetStateFn<T> = Dispatch<SetStateAction<T | undefined>>;
type SafeSetState<T> = [T | undefined, SetStateFn<T>];

export function useSafeState<T = undefined>(initialState?: T | (() => T | undefined)): SafeSetState<T> {
  const [state, setState] = useState(initialState);
  const mountedRef = useMountedRef();

  const safeSetState = useCallback<SetStateFn<T>>(
    args => {
      // Only set the state when the component is mounted
      if (mountedRef.current) {
        setState(args);
      }
    },
    [setState, mountedRef]
  );

  return [state, safeSetState];
}

export const useSafeStateWithReducer = initialValue => {
  const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), initialValue);
  const mountedRef = useMountedRef();

  return [
    state,
    useCallback(
      args => {
        mountedRef.current && setState(args);
      },
      [setState, mountedRef]
    ),
  ];
};

export const useSafeStateWithReducerGeneric = <T>(initialValue: T) => {
  const [state, setState] = useReducer((state: T, newState: T) => ({ ...state, ...newState }), initialValue);
  const mountedRef = useMountedRef();

  return [
    state,
    useCallback(
      (args: T) => {
        mountedRef.current && setState(args);
      },
      [setState, mountedRef]
    ),
  ];
};

export default useSafeState;
