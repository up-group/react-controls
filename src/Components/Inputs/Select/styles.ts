import { style } from 'typestyle';
import { toRem } from '../../../Common/theming/utils';
import { ThemeInterface } from 'theming/types';

export const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

export const groupBadgeStyles: React.CSSProperties = {
    // backgroundColor: '#EBECF0',
    borderRadius: '2em',
    //color: '#172B4D',
    display: 'inline-block',
    fontSize: toRem(12),
    fontWeight: 500,
    lineHeight: 1,
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

export const getLabelStyle = props => {
    const floatLabel = {
        transform: 'translate(0, 0) !important',
        fontSize: `${toRem(12)} !important`,
    };
    return style({
        marginTop: props.floatingLabel ? toRem(16) : 0,
        position: 'relative',
        $nest: {
            '&.up-select-wrapper .up-select-label': {
                position: 'absolute',
                left: 0,
                top: toRem(-10),
                zIndex: 1,
                fontSize: toRem(14),
                color: props.theme.colorMap.gray6,
                transformOrigin: "top left",
                transform: `translate(0, ${toRem(16)}) scale(1)`,
                transition: "all .1s ease-in-out",
            },
            '&.up-select-wrapper label.up-select-label + div > div' : {
                backgroundColor: 'transparent'
            },
            '&.up-select-wrapper .up-select-label-star': {
                position: 'absolute',
                top: toRem(4),
                right: toRem(-10)
            },
            '& .up-select-label-focused': {
                ...floatLabel
            },
            '& .up-select-label-valued': {
                ...floatLabel
            },
            '& div[id^="react-select-"]:hover': {
                //To remove the transparent background when hovering selected option, to prevent a text below from appearing
                backgroundColor: '#F2F2F2 !important'
            }
        }
    })
};

export const customStyles = (theme: ThemeInterface, value) => ({
    option: (provided, state) => ({
        ...provided,
        fontWeight: state.isSelected ? 400 : provided.fontWeight || 'inherit',
        backgroundColor: 'white',
        padding: toRem(10),
        fontSize: toRem(14),
        cursor: 'pointer',
        color: state.isSelected ? theme.colorMap.primary : theme.colorMap.grey1,
        ':active': {
            color: theme.colorMap.primary,
            fontWeight: 400,
            backgroundColor: state.isSelected ? 'transparent' : `${theme.colorMap.lightGrey1} !important`,
        },
        ':hover': {
            fontWeight: 400,
            backgroundColor: state.isSelected ? 'transparent' : `${theme.colorMap.lightGrey1} !important`,
        }
    }),
    control: (provided, state) => ({
        ...provided,
        outline: 'none',
        borderRadius: 0,
        color: provided.color,
        fontSize: toRem(14),
        border: state.isFocused ? 0 : 0,
        // This line disable the blue border
        boxShadow: state.isFocused ? 0 : 0,
        '&:hover': {
            border: state.isFocused ? 0 : 0,
            borderBottom: `1px solid ${state.isFocused ? theme.colorMap.primary : theme.colorMap.gray6}`,
        },
        minHeight: `1.8rem !important`,
        borderBottom: `1px solid ${state.isFocused ? theme.colorMap.primary : theme.colorMap.gray6}`
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: theme.colorMap.grey1,
        'svg, svg path': {
            fill: theme.colorMap.grey1,
        },
        '&:hover': {
            cursor: 'pointer'
        },
        padding: 0,
    }),
    indicatorSeparator: () => null,// this line remove the separator
    valueContainer: (provided, state) => ({
        ...provided,
        padding: 0,
        paddingBottom: toRem(2),
        '&:hover': {
            cursor: 'pointer'
        }
    }),
    multiValueLabel: (provided, state) => ({
        ...provided,
        backgroundColor: theme.colorMap.primary,
        color: 'white',
    }),
    multiValueRemove: (provided, state) => ({
        ...provided,
        backgroundColor: theme.colorMap.primary,
        color: 'white',
    }),
    menu: (provided, state) => {
        return ({
            ...provided,
            marginTop: 0,
            borderRadius: 0,
            border: `1px solid ${theme.colorMap.lightGrey1}`,
            zIndex: 10000,
        })
    },
    clearIndicator: (provided, state) => ({
        ...provided,
        color: theme.colorMap.primary,
        'svg, svg path': {
            fill: theme.colorMap.primary,
        },
        '&:hover': {
            cursor: 'pointer'
        },
        padding: 0
    }),
    container: (provided, state) => ({
        ...provided,
        border: 0,
        outline: 'none'
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        return { ...provided, opacity, transition, color: theme.colorMap.grey1 };
    },
});
