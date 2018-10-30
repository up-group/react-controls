// Imports
import { NestedCSSProperties } from 'typestyle/lib/types';
import { style } from 'typestyle';
import { WithThemeProps } from '../../../Common/theming/withTheme';

const base = (props: WithThemeProps) : NestedCSSProperties => (
  {
    border: 'none',
    $nest : {
      legend : {
        borderBottom : `1px solid ${props.theme.colorMap.darkGray5}`,
        color:props.theme.colorMap.darkGray5,
        fontWeight:700,
        fontSize: '16px',
        width:'98%',
      }
    }
  }
);

export const getStyles = (props: WithThemeProps) => style(base(props))
