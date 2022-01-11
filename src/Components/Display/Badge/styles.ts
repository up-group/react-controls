import { style } from 'typestyle';
import { WithThemeProps } from '../../../Common/theming/withTheme';
import { UpBadgeProps } from './types';
import { toRem } from '../../../Common/theming/utils';

export const getStyle = (props: UpBadgeProps & WithThemeProps) =>
  style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: props.rounded === true ? toRem(18) : toRem(16),
    padding: '0',
    fontWeight: 700,
    color: props.intent !== null ? props.theme.colorMap[`${props.intent}Fg`] : props.color,
    width: props.rounded === true ? toRem(32) : 'auto',
    height: props.rounded === true ? toRem(32) : 'auto',
    backgroundColor: props.intent !== null ? props.theme.colorMap[`${props.intent}`] : props.background,
    cursor: props.onClick || props.onMouseEnter || props.onMouseLeave ? 'pointer' : 'auto',
  });
