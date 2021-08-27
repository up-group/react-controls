import * as React from "react";
import { UpContextMenu, UpContextMenuItem, UpContextMenuTrigger } from "../../Display/ContextMenu";
import UpSvgIcon from "../../Display/SvgIcon";
import UpBox from '../../Containers/Box';
import { style } from "typestyle";

import classnames from 'classnames';
import { generateId } from "../../../Common/utils";
import { eventFactory } from "../../../Common/utils/eventListener";

export interface UpTimeProps {
    hasError?: boolean;
    className?:string;
    name?:string;
    value?: string;
    onChange?:(event, value: string) => void;
    minuteStep? : number;
    withIcon?: boolean;
    tabIndex? : number;
}

export interface UpTimeState {
    hour?: number;
    minute?: number;
    focusedHour? : boolean;
    focusedMinute? : boolean;
}

export default class UpTimePicker extends React.Component<UpTimeProps, UpTimeState> {
    inputElement: HTMLInputElement;
    
    hourContextMenuId = `hour-time-picker-${generateId()}`;
    minuteContextMenuId = `minute-time-picker-${generateId()}`;

    public static defaultProps = {
        minuteStep : 5,
        withIcon: true,
    }

    constructor(p, c) {
        super(p, c);
        this.state = {
            hour: this.props.value ? parseInt(this.props.value.split(':')[0]) : 0,
            minute: this.props.value ? parseInt(this.props.value.split(':')[1]) : 0
        };
    }

    render() {
        
        const minuteSteps = [] ;
        let currentStep = 0 ;
        while(currentStep < 60) {
            minuteSteps.push(currentStep) ;
            currentStep += this.props.minuteStep;
        }
        const hourSteps = [] ;
        currentStep = 1 ;
        while(currentStep < 24) {
            hourSteps.push(currentStep) ;
            currentStep += 1;
        }

        const wrapperStyles = style({
          $nest: {
            "& div": {
              display: "inline-block"
            },
            "& .up-time-separator": {
              marginLeft: 10,
              marginRight: 10
            },
            "& input, & .up-time-separator": {
              fontSize: "14px",
              color: "#354052"
            },
            "& svg,  & svg g, & svg path, & svg polygon, & svg polyline": {
              fill: "#354052"
            }
          }
        });

        return (
            <>
            <UpBox className={classnames(wrapperStyles, 'up-timepicker up-form-control')} flexDirection={'row'} alignItems={'flex-start'} justifyContent={'flex-end'} 
            style={{
                borderColor: this.props.hasError === true ? 'red' : 'inherit',
                borderBottomWidth: '1px',
                borderBottomStyle: 'solid', 
                width: "160px", // Fix width
                padding: "2px",
                display: 'flex',
            }}>
                <input
                    type="text"
                    value={this.state.hour.toString()}
                    onKeyDown={this.onKeyDownHour}
                    onChange={this.onchangeHourEvent}
                    style={{
                        "border": "none",
                        "width": "2em",
                        "textAlign": "center"
                    }}
                />
                <UpContextMenuTrigger rightClick={false} id={this.hourContextMenuId} holdToDisplay={1000}>
                    <UpSvgIcon iconName={'caret-down'} style={{cursor: 'pointer'}} />
                </UpContextMenuTrigger>
                <div className={'up-time-separator'}>:</div>
                <input
                    type="text"
                    value={this.state.minute.toString()}
                    onKeyDown={this.onKeyDownMin}
                    onChange={this.onchangeMinEvent}
                    onFocus={this.onFocusMinute}
                    tabIndex={this.props.tabIndex}
                    style={{
                        "border": "none",
                        "width": "2em",
                        "textAlign": "center"
                    }}
                />
                <UpContextMenuTrigger rightClick={false} id={this.minuteContextMenuId} holdToDisplay={1000}>
                    <UpSvgIcon iconName={'caret-down'} style={{cursor: 'pointer'}} />
                </UpContextMenuTrigger>
                <UpSvgIcon iconName={'timer'} style={{
                    marginLeft: 10,
                    marginTop: 5,
                }}/>
            </UpBox>
            <UpContextMenu id={this.minuteContextMenuId}>
                {minuteSteps.map((step, i) => {
                    return <UpContextMenuItem key={i} onClick={this.setMinute} data={{value: step}}>{step}</UpContextMenuItem>
                })}
            </UpContextMenu>
            <UpContextMenu id={this.hourContextMenuId}>
                {hourSteps.map((step, i) => {
                    return <UpContextMenuItem key={i} onClick={this.setHour} data={{value: step}}>{step}</UpContextMenuItem>
                })}
            </UpContextMenu>
        </>
        );
    }
    setHour = (e, selectedOption)  => {
        this.onchangeHour(selectedOption.value)
    }

    setMinute = (e, selectedOption)  =>  {
        this.onchangeMin(selectedOption.value)
    }

    onFocusMinute = (e) => {
        this.setState({ focusedMinute : true })
    }

    onchangeHourEvent = (e) => { this.onchangeHour(e.target.value); }
    onchangeHour = (value) => {
        var hour = Number(value)
        if (isNaN(hour)) {
            hour = 0;
        } else if (hour < 0) {
            hour = 23;
        } else if (hour > 23) {
            hour = 0;
        }
        this.setState({ hour }, this.sendChange);
    }
    onKeyDownHour = (e) => {
        if (e.keyCode == 38) { // up
            this.onchangeHour(Number(e.target.value) + 1);
        } else if (e.keyCode == 40) { // down
            this.onchangeHour(Number(e.target.value) - 1);
        }
    }


    onchangeMinEvent = (e) => { this.onchangeMin(e.target.value); }
    onchangeMin = (value) => {
        var minute = Number(value)
        if (isNaN(minute)) {
            minute = 0;
        } else if (minute < 0) {
            minute = 59;
        } else if (minute > 59) {
            minute = 0;
        }
        this.setState({ minute }, this.sendChange);
    }
    onKeyDownMin = (e) => {
        if (e.keyCode == 38) { // up
            this.onchangeMin(Number(e.target.value) + 1);
        } else if (e.keyCode == 40) { // down
            this.onchangeMin(Number(e.target.value) - 1);
        }
    }

    sendChange = () => {
        if(this.props.onChange != null) {
            const value = this.state.hour + ":" + this.state.minute ;
            this.props.onChange(eventFactory(this.props.name, value), value);
        }
    }
}
