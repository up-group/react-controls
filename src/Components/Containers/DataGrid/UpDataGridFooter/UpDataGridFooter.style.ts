import { media, style } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';

import { WithThemeProps } from '../../../../Common/theming/withTheme';
import { DeviceSmartphones } from '../../../../Common/utils/device';
import { UpDataGridFooterProps } from './UpDataGridFooter';

export const getStyle = (props: UpDataGridFooterProps & WithThemeProps) => {
  const position: NestedCSSProperties = props.actionsDataGrid ? {} : { position: 'absolute', right: 0 };
  return style(
    {
      display: 'flex',
      marginTop: '5px',
      width: '100%',
      minHeight: '40px',
      flexDirection: 'row',
      $nest: {
        '&.up-data-grid-footer .up-buttons-wrapper': {
          alignItems: 'normal',
          flexGrow: 1,
        },
        '&.up-data-grid-footer .up-btn-wrapper': {
          marginRight: '6px',
        },
        '&.up-data-grid-footer .pagination-container': {
          ...position,
        },
        '&.up-data-grid-footer .up-icon-wrapper svg path': {
          fill: props.actionsDataGrid && props.theme.colorMap.disabledFg,
        },
      },
    },
    media(DeviceSmartphones, {
      flexDirection: 'column',
    })
  );
};
