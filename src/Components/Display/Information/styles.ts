import { NestedCSSProperties } from 'typestyle/lib/types';
import { UpInformationCustomStyles, UpInformationProps } from './types';
import { toRem } from '../../../Common/theming/utils';

export const titleStyle: NestedCSSProperties = {
    color: '#6A6A6A',
    fontFamily: 'Roboto, sans-serif, Verdana',
    fontSize: toRem(18),
    fontWeight: 500,
    lineHeight: 1.16,
    verticalAlign: 'middle',
};

export const boxWrapperStyle: NestedCSSProperties = {
    $nest: {
        '&.up-information': {
            width: '100%',
            height: 'auto',
            paddingLeft: 0,
            backgroundColor: 'white',
            border: '1px solid #D7D7D7',
            borderRadius: toRem(6),
            paddingRight: toRem(19),
        },
        '& .up-icon-wrapper': {
            verticalAlign: 'middle',
            position: 'relative',
            left: toRem(-22)
        }
    }
};

export const contentWrapperStyle: NestedCSSProperties = {
    $nest: {
        '&.up-information-content-wrapper': {
            width: '100%',
            padding: `0 ${toRem(10)} ${toRem(10)} ${toRem(54)}`
        }
    }
};

export const contentStyle = {
    margin: 0,
    color: '#9B9B9B',
    fontFamily: 'Roboto, sans-serif',
    fontSize: toRem(14),
    fontWeight: 500,
    lineHeight: 1.14,
    marginTop: toRem(12)
};

export const buttonStyle: NestedCSSProperties = {
    $nest: {
        '&.up-information-button-wrapper': {
            marginTop: toRem(12),
            padding: `0 ${toRem(10)} 0 0`
        },
        '& button': {
            width: toRem(210),
            fontFamily: 'Roboto, sans-serif',
            fontSize: toRem(14),
            fontWeight: 'bold',
            lineHeight: 1.14
        }
    }
};

export const getCustomStyle = (key: keyof UpInformationCustomStyles, props: UpInformationProps): NestedCSSProperties => {
    if (props.customStyles && props.customStyles[key]) {
        return props.customStyles[key](props);
    }
    return {}
};
