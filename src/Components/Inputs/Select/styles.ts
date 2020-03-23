// Imports
import { UpSelectStyledProps } from './types';
import { style } from 'typestyle';

var getHeight = (props: UpSelectStyledProps) => {
    return {
      $nest : {
        '& > div > div': { minHeight: '35px' },
        '& > div > div > div': { padding: '2px 8px 2px 0px' },
      }
    }
}

// Exports
export const getStyles = (props: UpSelectStyledProps) => (
  style(getHeight(props))
)
