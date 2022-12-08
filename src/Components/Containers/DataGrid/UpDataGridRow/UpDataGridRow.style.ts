import { style } from 'typestyle';
import { WithThemeProps } from '../../../../Common/theming';
import { UpDataGridRowProps } from './UpDataGridRow';

export const DataGridRowStyle = (props: UpDataGridRowProps & WithThemeProps, finalActionsLength: number) =>
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
