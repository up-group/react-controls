import { style } from 'typestyle';
import { WithThemeProps } from '../../../Common/theming/types';
import { UpDataGridRowProps } from './UpDataGridRow';

export const getDataGridRowStyle = (props: UpDataGridRowProps & WithThemeProps, finalActionsLength: number): string =>
  style({
    ...(props.onClick ? { cursor: 'pointer' } : {}),
    ...(props.isRowClickable && finalActionsLength === 1
      ? {
          cursor: 'pointer',
          $nest: {
            '&:hover': {
              background: '#d4d4d4 !important',
            },
          },
        }
      : {}),
  });
