import { NestedCSSProperties } from 'typestyle/lib/types';
import { style } from 'typestyle';
import { WithThemeProps } from '../../../Common/theming/withTheme';
import { UpFormGroupProps } from './types';
import { toRem } from '../../../Common/theming/utils';

const base = (props: WithThemeProps & UpFormGroupProps): NestedCSSProperties => ({
  border: 'none',
  $nest: {
    legend: {
      borderBottom: props.withTitleSeparator && `1px solid ${props.theme.colorMap.darkGray5}`,
      color: props.theme.colorMap.darkGray5,
      paddingBottom: toRem(5),
      marginBottom: toRem(10),
      fontWeight: 700,
      fontSize: toRem(16),
      width: '98%',
    },
  },
});

export const getStyles = (props: WithThemeProps & UpFormGroupProps) => style(base(props));
