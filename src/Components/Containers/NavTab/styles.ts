import { NestedCSSProperties } from 'typestyle/lib/types';
import { style } from 'typestyle';
import * as classnames from 'classnames';
import { TabHeadProps } from './types';
import { toRem } from '../../../Common/theming/utils';

export const headTabActiveArrow = style({
    color: 'transparent',
    position: 'absolute',
    bottom: '-11px',
    left: '0',
    right: '0',
    margin: 'auto',
    borderWidth: '11px 12px 0px 12px',
    borderColor: '#F59100 transparent',
    borderStyle: 'solid',
    width: 0,
    opacity: 1,
});

export const headTabActiveBorder = style({
    background: '#F59100',
    display: 'block',
    width: '100%',
    height: '5px',
    left: 0,
    position: 'absolute',
    bottom: 0,
    opacity: 1,
});

export const navTabContent = {
    marginTop: '34px',
};

export const navTabHeader: NestedCSSProperties = {
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

export const navTabItem = (props: TabHeadProps): NestedCSSProperties => ({
    fontSize: props.tabKey === props.selectedTabKey ? toRem(24) : toRem(18),
    marginLeft: toRem(20),
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2,
    padding: `${toRem(10)} ${toRem(15)}`,
    borderRadius: '4px 4px 0 0',
    backgroundColor: '#fff',
    width: '100%',
    height: toRem(45),
    fontWeight: props.tabKey === props.selectedTabKey ? 700 : 500,
    color: props.tabKey === props.selectedTabKey ? '#F59100' : '#4E5B59',
    $nest: {
        '&:first-child': {
            marginLeft: 0
        }
    }
});