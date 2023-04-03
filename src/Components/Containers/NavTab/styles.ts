import { style } from 'typestyle';
import { TabHeadItemProps } from './types';
import { toRem } from '../../../Common/theming/utils';
import { NestedCSSProperties } from 'typestyle/lib/types';

export const headTabArrow = style({
  color: 'transparent',
  position: 'absolute',
  bottom: toRem(-11),
  left: '0',
  right: '0',
  margin: 'auto',
  borderWidth: `${toRem(11)} ${toRem(12)} ${toRem(0)} ${toRem(12)}`,
  borderColor: '#F59100 transparent',
  borderStyle: 'solid',
  width: 0,
  opacity: 1,
});

export const headTabBorder = style({
  background: '#F59100',
  display: 'block',
  width: '100%',
  height: '5px',
  position: 'absolute',
  left: 0,
  bottom: 0,
  opacity: 1,
});

export const tabContent: NestedCSSProperties = {
  marginTop: toRem(34),
};

export const tabHeader: NestedCSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const tabItem = (props: TabHeadItemProps): NestedCSSProperties => ({
  fontSize: props.tabKey === props.selectedTabKey ? toRem(20) : toRem(18),
  marginLeft: toRem(20),
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 2,
  padding: `${toRem(10)} ${toRem(12)}`,
  borderRadius: '4px 4px 0 0',
  backgroundColor: '#fff',
  width: '100%',
  alignSelf: 'stretch',
  fontWeight: props.tabKey === props.selectedTabKey ? 700 : 500,
  color: props.tabKey === props.selectedTabKey ? '#F59100' : '#4E5B59',
  $nest: {
    '&:first-child': {
      marginLeft: 0,
    },
  },
});
