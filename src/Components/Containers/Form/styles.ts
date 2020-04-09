import { style } from 'typestyle';
import { styleObjectProps } from './UpForm';
import { CSSProperties } from 'typestyle/lib/types';
export const getStyles = (props: styleObjectProps & CSSProperties ) => {
  const { alignItems, flexDirection, justifyContent,flexWrap } = props;
  return style({
    display: 'flex',
    flexDirection: flexDirection || 'row',
    justifyContent,
    alignItems,
    flexWrap,
  });
};
