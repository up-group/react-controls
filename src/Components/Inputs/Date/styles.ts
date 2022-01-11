import { UpDateProps } from './types';
import 'react-dates/lib/css/_datepicker.css';
import { WithThemeProps } from '../../../Common/theming/withTheme';
import { toRem } from '../../../Common/theming/utils';
import { style } from 'typestyle';

const getStyles = (props: UpDateProps & WithThemeProps & { focused: boolean }) =>
  style({
    marginTop: props.floatingLabel ? toRem(14) : 0,
    position: 'relative',
    backgroundColor: 'transparent',
    $nest: {
      '& .SingleDatePicker': {
        ...(props.fullWidth && { width: '100%' }),
      },
      '& .SingleDatePickerInput': {
        ...(props.fullWidth && { width: '100%' }),
        minHeight: toRem(29),
      },
      '& label': {
        fontSize: toRem(14),
        position: 'absolute',
        top: toRem(-10),
        left: 0,
        color: props.theme.colorMap.gray6,
        transformOrigin: 'top left',
        transform: `translate(0, ${toRem(16)}) scale(1)`,
        transition: 'all .1s ease-in-out',
        cursor: 'text',
        marginLeft: props.iconPosition == 'left' ? toRem(36) : 0,
      },
      '& .DateInput': {
        ...(props.fullWidth ? { width: '100%' } : { width: 'auto' }),
      },
      '& .SingleDatePickerInput, & .SingleDatePickerInput input, & .SingleDatePickerInput .DateInput': {
        backgroundColor: 'transparent',
        color: props.theme.colorMap.grey1,
        paddingBottom: 0,
      },
      '&.up-input-focused svg, &.up-input-focused svg path, &.up-input-focused svg polygon, &.up-input-focused svg polyline':
        {
          fill: props.theme.colorMap.primary,
        },
      '&.up-input-focused label, &.up-input-valued label': {
        transform: 'translate(0, 2px)',
        fontSize: toRem(12),
        color: props.theme.colorMap.primary,
        marginLeft: 0,
      },
      '& .SingleDatePickerInput__withBorder': {
        borderWidth: props.theme.inputBorderLess ? '0 0 1px 0' : '1px',
        borderColor: props.focused ? props.theme.colorMap.primary : props.theme.colorMap.darkGray4,
        borderRadius: props.theme.inputBorderLess ? 0 : props.theme.borderRadius,
      },
      '& .SingleDatePickerInput__withBorder:hover': {
        borderColor: props.theme.colorMap.primary,
      },
      '& .SingleDatePickerInput_calendarIcon': {
        margin: props.theme.inputBorderLess
          ? `0 ${props.iconPosition === 'left' ? toRem(5) : toRem(0)} 0 0`
          : `0 ${toRem(5)} 0 ${toRem(10)}`,
        padding: toRem(4),
        position: 'absolute',
        right: 0,
        top: toRem(2),
      },
      '& .SingleDatePickerInput_calendarIcon svg, & .SingleDatePickerInput_calendarIcon svg path': {
        fill: props.focused ? props.theme.colorMap.primary : props.theme.colorMap.darkGray4,
      },
      '& .SingleDatePickerInput_clearDate svg, & .SingleDatePickerInput_clearDate svg path': {
        fill: props.focused ? props.theme.colorMap.primary : props.theme.colorMap.darkGray4,
      },
      '& .SingleDatePickerInput__withBorder:hover svg, & .SingleDatePickerInput__withBorder:hover svg path ': {
        fill: props.theme.colorMap.primary,
      },
      '& .DateInput_input': {
        padding: toRem(6),
        paddingLeft: props.iconPosition == 'right' ? 0 : toRem(6),
        fontSize: toRem(14),
        color: '#354052',
        lineHeight: 1.3,
      },
      '& .DateInput_input__focused': {
        borderWidth: 0,
      },
      '& .DateInput_input__disabled': {
        fontSize: toRem(14),
        lineHeight: 1.3,
        fontStyle: 'normal',
      },
      '& .SingleDatePickerInput__showClearDate': {
        paddingRight: props.iconPosition == 'left' ? toRem(30) : 0,
      },
      '& .SingleDatePickerInput_clearDate': {
        right: props.iconPosition == 'left' ? 0 : toRem(9),
      },
      '& .SingleDatePickerInput_clearDate:hover': {
        backgroundColor: 'transparent',
      },
      '& .SingleDatePickerInput_clearDate:hover svg, & .SingleDatePickerInput_clearDate:hover svg path': {
        fill: props.theme.colorMap.primary,
      },
      '& .CalendarDay': {
        borderRadius: '50%',
        border: 'unset',
      },
      '& .CalendarDay:hover': {
        backgroundColor: props.theme.colorMap.lightGrey1,
        color: props.theme.colorMap.grey1,
        borderColor: props.theme.colorMap.lightGrey1,
      },
      '& .CalendarDay__selected': {
        backgroundColor: props.theme.colorMap.primary,
        color: props.theme.colorMap.primaryFg,
        borderColor: props.theme.colorMap.primary,
      },
      '& .DayPickerNavigation_button svg, & .DayPickerNavigation_button svg path': {
        fill: props.theme.colorMap.primary,
      },
      '& .DayPickerNavigation_button:hover': {
        borderColor: props.theme.colorMap.primary,
      },
      '& .SingleDatePicker_picker': {
        zIndex: 20,
        top: `${toRem(32)} !important`,
      },
      '& .DateInput_fang': {
        display: 'none',
      },
      '& .CalendarDay__outside, & .CalendarDay__outside:hover': {
        backgroundColor: props.theme.colorMap.primaryFg,
        color: props.theme.colorMap.disabledFg,
      },
      '& button:focus': {
        outline: 'none !important',
      },
    },
  });

export default getStyles;

export const selectStyle = style({
  $nest: {
    '& > select': {
      display: 'inline-block',
      padding: '0.5em',
      backgroundImage:
        'linear-gradient(45deg, transparent 50%, gray 50%),linear-gradient(135deg, gray 50%, transparent 50%),linear-gradient(to right, #ccc, #ccc)',
      backgroundPosition:
        'calc(100% - 4px) calc(0.25em + 0.5px), calc(100% - 3.3px) calc(0.25em + 0.5px), calc(100% - 0.6em) 0.13em',
      backgroundSize: '5px 5px, 5px 5px, 1px 1.5em',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'transparent',
      border: 0,
      margin: 0,
      '-webkit-box-sizing': 'border-box',
      '-moz-box-sizing': 'border-box',
      boxSizing: 'border-box',
      '-webkit-appearance': 'none',
      '-moz-appearance': 'none',
    },
    '& > select:focus': {
      backgroundImage:
        'linear-gradient(45deg, green 50%, transparent 50%),linear-gradient(135deg, transparent 50%, green 50%),linear-gradient(to right, #ccc, #ccc)',
      backgroundPosition: 'calc(100% - 3.3px) 0.25em, calc(100% - 5px) 0.25em, calc(100% - 0.6em) 0.13em;',
      backgroundSize: '5px 5px, 5px 5px, 1px 1.5em',
      backgroundRepeat: 'no-repeat',
      border: 0,
      borderColor: 'green',
      zIndex: 99,
    },
    '& > select:-moz-focusring': {
      color: 'transparent',
      textShadow: '0 0 0 #000',
    },
  },
});
