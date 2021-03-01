import { UpInputProps } from '../Input/types';
import { style } from 'typestyle';
import { ruleIsValid } from '../../../Common/utils';
import { toRem } from '../../../Common/theming/utils';

const fillColor = (props: UpInputProps) => {
    let color: string
    if (!props.touched) color = props.theme.colorMap.default;
    if (!!props.value) color = props.theme.colorMap.success;
    if (props.showError && props.hasError) color = props.theme.colorMap.error;

    return color;
};

export const onSide = style({
    display: 'flex'
});

export const getStyles = (props: UpInputProps) => style({
    $nest: {
        "&.up-password": {
            position: "relative",
        },
        "&.up-password .up-icon-wrapper": {
            position: 'absolute',
            top: props.floatingLabel ? 18 : 4,
            right: 0,
            cursor: "pointer",
            zIndex: 10,
        },
        "&.up-password .up-icon-wrapper svg, &.up-password .up-icon-wrapper svg polygon, &.up-password .up-icon-wrapper svg path, &.up-password .up-icon-wrapper svg polyline": {
            fill: `${fillColor(props)} !important`,
        },
        "&.up-password .up-wrapper-error-tooltip": {
            display: 'none',
            background: 'transparent'
        }
    }
});

export const getRulesStyle = (props: UpInputProps) => style({
    display: 'block',
    zIndex: 1000,
    width: '100%',
    border: `0 1px 1px solid ${props.theme.colorMap.lightGrey1}`,
    borderTop: 'unset',
    boxShadow: '0 0 5px 0 rgba(0,0,0,0.11)',
    fontSize: toRem(12),
    color: '#4E5B59',
    lineHeight: 1.5,
    fontWeight: 400,
    marginTop: toRem(0.5)
})

export const getRuleStatus = (props: UpInputProps, regex: RegExp) => style({
    height: '8px',
    width: '8px',
    backgroundColor: `${ruleIsValid(props.value, regex) ?
        props.theme.colorMap.success :
        props.theme.colorMap.lightGrey1
        }`,
    borderRadius: '50%',
    display: 'inline-block',
    margin: `${toRem(0)} ${toRem(10)}`,
});