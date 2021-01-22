import { IProgressCircleProps } from './types';
import { style } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { UpThemeColorMap as colorMap } from '../../../Common/theming/';
import { toRem } from '../../../Common/theming/utils';

export const display1LeftGreyLevel1: NestedCSSProperties = {
    fontFamily: 'Roboto',
    fontWeight: 500,
    textAlign: 'left',
    color: colorMap.gray1,
};

export const body1RightGreyLevel1: NestedCSSProperties = {
    fontFamily: 'Roboto',
    textAlign: 'left',
    color: colorMap.gray1,
};

export const body1CenterGreyLevel1: NestedCSSProperties = {
    fontFamily: 'Roboto',
    fontSize: '1vw',
    textAlign: 'center',
    color: colorMap.gray1,
};

export const CircularProgressStyle = style({
    position: 'absolute',
    top: 0,
    left: 0,
});

export const CompletedCircularProgressStyle = style({
    zIndex: 5,
});

export const WrapperCircularProgressStyle = style({
    position: 'relative',
    display: 'block',
    margin: 'auto',
    $nest: {
        '&:after': {},
        svg: {
            position: 'absolute',
            top: 0,
            left: 0,
            transform: 'rotate(-90deg)',
        },
        '& svg > circle': {
            strokeDasharray: [0],
            //filter: 'url(#dropshadow)',
            transition: 'all 1s linear',
        },
    },
});

export const DefaultValueLabelStyle = (props: IProgressCircleProps) => ({
    ...display1LeftGreyLevel1,
    $nest: {
        '.up-progress-value': {
            fontSize: toRem(props.size / 6),
            marginRight: toRem(2),
        },
        '.up-progress-value-max': {
            fontSize: toRem(props.size / 7),
        }
    }
});

export const DefaultUniteStyle = (props: IProgressCircleProps) => ({
    ...display1LeftGreyLevel1,
    fontSize: toRem(props.size / 7),
});

export const DefaultWrapperValueLabelStyle = style({
    ...body1RightGreyLevel1,
    marginBottom: toRem(8),
    textAlign: 'center',
});

export const LabelCircularProgressStyle = (props: IProgressCircleProps) => {
    const fullSize = props.size + 20;
    return style({
        position: 'absolute',
        top: toRem((fullSize / 2) - (fullSize / 8) + 10),
        left: toRem(props.thickness + (fullSize / 10) + 5),
        right: 0,
        width: toRem(fullSize - props.thickness + 2 - (fullSize / 10)),
        textAlign: 'center',
    });
};

export const TooltipCircularProgressStyle = (props: IProgressCircleProps) => {
    return style({
        width: '100%',
        textAlign: 'center',
        padding: toRem(8),
    });
};