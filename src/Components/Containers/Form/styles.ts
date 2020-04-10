import { style } from 'typestyle';
import { CSSProperties } from 'typestyle/lib/types';

export const getStyles = (props: CSSProperties) => {
  const { flexDirection, ...rest } = props;
  
  return style({
    display: 'flex',
    flexDirection: flexDirection || 'row',
    ...rest,
  });
};
