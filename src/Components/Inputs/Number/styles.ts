import { UpNumberProps } from './types';
import { style } from 'typestyle';
import { toRem } from '../../../Common/theming/utils';

export const wrapperNumberStyles = (props: UpNumberProps) => style({
    position: 'relative',
    $nest: {
        'input': {
            textAlign: 'right',
            paddingRight: props.hideButtons ? '0 !important' :
                props.theme.inputBorderLess ? `${toRem(42)} !important` : `${toRem(26)} !important`,
        },
        '.up-btn-wrapper': {
            height: toRem(16),
        },
        '.up-input-group > .up-icon-wrapper:last-child': {
            right: toRem(-14)
        }
    }
});

export const wrapperNumberButtonsStyles = (props: UpNumberProps) => style({
    position: 'absolute',
    right: props.theme.inputBorderLess ? '0px' : '2px',
    bottom: props.theme.inputBorderLess ? '7px' : '2px',
    $nest: {
        '& .up-btn-wrapper .up-btn .up-icon-wrapper svg': {
            margin: '0px',
        },
        '& .up-btn-wrapper .up-btn': {
            marginLeft: toRem(4),
        },
        '& .up-btn-wrapper': {
            width: 'auto',
        }
    },
});