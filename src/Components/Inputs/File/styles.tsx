import { UpFileStyleProps } from './types';
import { style } from 'typestyle';

const error = (props:UpFileStyleProps) => (
  {
    border: `1px solid ${props.theme.colorMap.danger}`
  }
);

export const getStyles = (props : UpFileStyleProps) => (
  props.hasError? style(error(props)) : null
);
