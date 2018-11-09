// Imports
import { UpSelectStyledProps } from './types';
import { style } from 'typestyle';

var getHeight = (props: UpSelectStyledProps) => {
    return {
      $nest : {
        '.Select-input' : { height: '32px' },
        '.Select-control' : { height: '32px' },
      }
    }
}

// Exports
export const getStyles = (props: UpSelectStyledProps) => (
  style(getHeight(props))
)
