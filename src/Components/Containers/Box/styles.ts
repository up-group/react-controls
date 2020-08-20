import { toRem } from '../../../Common/theming/utils';
import { style } from 'typestyle';
import { UpBoxProps } from './types';

import {
    Size,
    SizeObject,
    BoxSize,
    BoxSizeObject,
    Full,
    WrapOption,
    SizeStyle,
    SIZE_MAP,
    BOX_SIZE_MAP
} from './types';

export function calculateFlexWrap(wrap?: boolean, reverse?: boolean): WrapOption {
    if (wrap && reverse) {
        return 'wrap-reverse';
    } else if (wrap && !reverse) {
        return 'wrap';
    } else {
        return 'nowrap';
    }
};

export function sizeToString(size: Size | SizeObject, smallSize: boolean = false): string {
    let returnVal: string;
    if (typeof size === 'string') {
        returnVal = `${toRem(SIZE_MAP[size])}`;
    } else if (typeof size === 'object') {
        const horizontal = size.horizontal || 'none';
        const vertical = size.vertical || 'none';
        returnVal = `${toRem(SIZE_MAP[vertical])} ${toRem(SIZE_MAP[horizontal])}`;
    } else {
        returnVal = `0`;
    }
    return returnVal;
};

function stringBoxStyle(size: BoxSize): SizeStyle {
    if (size === 'full') {
        return {
            width: '100vw',
            height: '100vh',
        };
    } else if (size === 'auto') {
        return {
            width: 'auto',
            height: 'auto',
        };
    } else {
        return {
            width: size ? `${toRem(BOX_SIZE_MAP[size])}` : '',
            height: size ? `${toRem(BOX_SIZE_MAP[size])}` : '',
        };
    }
};

function objectBoxStyle(size: BoxSizeObject): SizeStyle {
    let width = 'auto';
    let height = 'auto';
    if (size.vertical) {
        height = size.vertical === 'full'
            ? '100vh'
            : `${toRem(BOX_SIZE_MAP[size.vertical])}`;
    }
    if (size.horizontal) {
        width = size.horizontal === 'full'
            ? '100%'
            : `${toRem(BOX_SIZE_MAP[size.horizontal])}`;
    }
    return {
        width,
        height,
    };
};

export function boxSizeToStyle(size: BoxSize | BoxSizeObject): SizeStyle {
    if (typeof size === 'string') {
        return stringBoxStyle(size);
    } else if (typeof size === 'object') {
        return objectBoxStyle(size);
    } else {
        return { width: 'auto', height: 'auto' };
    }
};

export function calculateFullStyle(full: Full, postFix: 'vw' | 'vh'): string {
    if (typeof full === 'object') {
        if (postFix === 'vw') {
            return full.horizontal ? `100%` : 'auto';
        } else {
            return full.vertical ? `100%` : 'auto';
        }
    } else if (typeof full === 'boolean') {
        return full ? `100%` : 'auto';
    }
    return 'auto';
};

const FullSize = style({
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '100%',
    width: '100%'
});

export const getBoxStyles = (props: UpBoxProps) => {
    const BoxStyles = style({
        display: 'flex',
        backgroundColor: props.backgroundColor,
        color: props.color,
        alignContent: props.alignContent,
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
        flexDirection: props.flexDirection,
        padding: sizeToString(props.pad),
        margin: sizeToString(props.margin),
        userSelect: props.selectable,
        flexWrap: calculateFlexWrap(props.flexWrap, props.reverse),
    });

    return BoxStyles;
};

export const getSize = (props: UpBoxProps) => {
    const Sizes = style({
        flexShrink: 1,
        width: boxSizeToStyle(props.boxSize).width,
        height: boxSizeToStyle(props.boxSize).height,
        flexBasis: "auto",
        minHeight: calculateFullStyle(props.full, 'vh'),
        minWidth: calculateFullStyle(props.full, 'vw')
    });

    return (props.full || props.boxSize) ? Sizes : FullSize;
};