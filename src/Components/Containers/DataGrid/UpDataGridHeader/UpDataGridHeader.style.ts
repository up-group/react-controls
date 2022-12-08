import { media, style } from 'typestyle';

import { WithThemeProps } from '../../../../Common/theming';
import { DeviceSmartphones } from '../../../../Common/utils/device';

export const getStyle = (props: WithThemeProps) => {
  return style(
    {
      display: 'flex',
      marginTop: '5px',
      marginBottom: '5px',
      width: '100%',
      position: 'relative',
      flexDirection: 'row',
      $nest: {
        '&.up-data-grid-header .header-title': {
          lineHeight: '21px',
          fontWeight: 'bold',
          fontSize: '18px',
          flexGrow: 1,
          alignSelf: 'center',
          color: props.theme.colorMap.grey1,
        },
        '&.up-data-grid-header .up-btn-wrapper': {
          marginLeft: '20px',
        },
      },
    },
    media(DeviceSmartphones, {
      flexDirection: 'column',
      $nest: {
        'div > .up-buttons-wrapper': {
          justifyContent: 'center',
        },
      },
    })
  );
};
