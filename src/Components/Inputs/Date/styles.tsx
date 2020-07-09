import { UpDateProps } from "./";
import 'react-dates/lib/css/_datepicker.css'; 
import { WithThemeProps } from '../../../Common/theming/withTheme';
import { style } from 'typestyle';

const getStyles = (
  props: UpDateProps & WithThemeProps & { focused: boolean }
) =>
  style({
    marginTop: props.floatingLabel ? "14px" : "0px",
    position: "relative",
    backgroundColor: "transparent",
    $nest: {
      "& label": {
        fontSize: "14px",
        position: "absolute",
        top: "-10px",
        left: "0px",
        color: props.theme.colorMap.gray6,
        transformOrigin: "top left",
        transform: "translate(0, 16px) scale(1)",
        transition: "all .1s ease-in-out",
        cursor: "text",
        marginLeft: props.iconPosition == "left" ? "36px" : "0px"
      },
      "& .DateInput" : {
        width: "auto",
      },
      "& .SingleDatePickerInput, & .SingleDatePickerInput input, & .SingleDatePickerInput .DateInput": {
        backgroundColor: "transparent",
        color: props.theme.colorMap.grey1,
        paddingBottom: '0px'
      },
      "&.up-input-focused svg, &.up-input-focused svg path, &.up-input-focused svg polygon, &.up-input-focused svg polyline": {
        fill: props.theme.colorMap.primary
      },
      "&.up-input-focused label, &.up-input-valued label": {
        transform: "translate(0, 4px) scale(.75)",
        fontSize: "12px",
        color: props.theme.colorMap.primary,
        marginLeft: "0px"
      },
      "& .SingleDatePickerInput__withBorder": {
        borderWidth: props.theme.inputBorderLess ? "0 0 1px 0" : "1px",
        borderColor: props.focused ? props.theme.colorMap.primary :props.theme.colorMap.darkGray4,
        borderRadius: props.theme.inputBorderLess ? 0 : props.theme.borderRadius
      },
      "& .SingleDatePickerInput__withBorder:hover": {
        borderColor: props.theme.colorMap.primary
      },
      "& .SingleDatePickerInput_calendarIcon": {
        margin: props.theme.inputBorderLess ? `0 ${props.iconPosition === "left" ? '5px' : '0px'} 0 0` : "0 5px 0 10px",
        padding: "4px"
      },
      "& .SingleDatePickerInput_calendarIcon svg, & .SingleDatePickerInput_calendarIcon svg path": {
        fill: props.focused
          ? props.theme.colorMap.primary
          : props.theme.colorMap.darkGray4
      },
      "& .SingleDatePickerInput_clearDate svg, & .SingleDatePickerInput_clearDate svg path": {
        fill: props.focused
          ? props.theme.colorMap.primary
          : props.theme.colorMap.darkGray4
      },
      "& .SingleDatePickerInput__withBorder:hover svg, & .SingleDatePickerInput__withBorder:hover svg path ": {
        fill: props.theme.colorMap.primary
      },
      "& .DateInput_input": {
        padding: "6px",
        paddingLeft: props.iconPosition == "right" ? "0px" : "6px",
        fontSize: "14px",
        color: "#354052",
        lineHeight: "18px"
      },
      "& .DateInput_input__focused": {
        borderWidth: 0
      },
      "& .DateInput_input__disabled": {
        fontSize: "14px",
        lineHeight: "18px",
        fontStyle:'normal'
      },
      "& .SingleDatePickerInput__showClearDate": {
        paddingRight: props.iconPosition == "left" ? "30px" : "0px"
      },
      "& .SingleDatePickerInput_clearDate": {
        right: props.iconPosition == "left" ? "0" : "12px"
      },
      "& .SingleDatePickerInput_clearDate:hover": {
        backgroundColor: "transparent"
      },
      "& .SingleDatePickerInput_clearDate:hover svg, & .SingleDatePickerInput_clearDate:hover svg path": {
        fill: props.theme.colorMap.primary
      },
      "& .CalendarDay" :{
        borderRadius: '50%',
        border: 'unset',
      },
      "& .CalendarDay:hover":{
        backgroundColor: props.theme.colorMap.lightGrey1,
        color: props.theme.colorMap.grey1,
        borderColor: props.theme.colorMap.lightGrey1,
      },
      "& .CalendarDay__selected": {
        backgroundColor: props.theme.colorMap.primary,
        color: props.theme.colorMap.primaryFg,
        borderColor: props.theme.colorMap.primary,
      },
      "& .DayPickerNavigation_button svg, & .DayPickerNavigation_button svg path": {
        fill: props.theme.colorMap.primary
      },
      "& .DayPickerNavigation_button:hover": {
        borderColor: props.theme.colorMap.primary
      }, 
      "& .SingleDatePicker_picker" : {
        zIndex : 20,
        top: '32px !important'
      },
      "& .DateInput_fang": {
        display: 'none',
      },
      "& .CalendarDay__outside, & .CalendarDay__outside:hover": {
        backgroundColor: props.theme.colorMap.primaryFg,
        color: props.theme.colorMap.disabledFg,
      },
      "& button:focus" : {
          outline:"none !important"
      }
    }
  });

  export default getStyles ;