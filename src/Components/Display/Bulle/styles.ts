import { style, media, keyframes } from 'typestyle';
import { UpBulleProps } from './types';
import { DeviceSmartphones, DeviceSmallSmartphones } from '../../../Common/utils/device';
import { fadeOutAnimation, fadeInAnimation } from '../../../Common/theming/animations';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { toRem } from '../../../Common/theming/utils';

export const AutoSizedComponent: NestedCSSProperties = {
    padding: toRem(6),
    fontSize: toRem(11),
    width: 'auto',
};

export const BulleStyle = (props: UpBulleProps) => style({
    position: 'relative',
    fontSize: toRem(12),
    cursor: 'pointer',
    borderRadius: toRem(4),
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    padding: `${toRem(12)} ${toRem(16)}`,
    opacity: 1,
},
    media(DeviceSmartphones, AutoSizedComponent),
    media(DeviceSmallSmartphones, AutoSizedComponent)
);

export const IconStyle = style({
    color: 'white',
});

const IconifiedValue: NestedCSSProperties = {
    position: 'absolute',
    fontSize: toRem(10),
    top: toRem(3),
    left: toRem(20),
};

const HiddenMessage: NestedCSSProperties = {
    display: 'none',
    opacity: 0,
};

export const ValueStyle = style({
    marginLeft: toRem(12),
    color: 'white',
    fontSize: toRem(24),
    fontWeight: 500,
},
    media(DeviceSmartphones, IconifiedValue),
    media(DeviceSmallSmartphones, IconifiedValue));

export const MessageStyle = style({
    margin: `0 0 0 ${toRem(12)}`,
    color: 'white',
    opacity: 1,
    animation: `${fadeInAnimation} 2s`,
},
    media(DeviceSmartphones, HiddenMessage),
    media(DeviceSmallSmartphones, HiddenMessage)
);

export const ChildrenStyle = style({
    margin: toRem(5),
    color: 'white',
});