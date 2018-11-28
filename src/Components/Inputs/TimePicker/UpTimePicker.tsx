import * as React from "react";
import { UpContextMenu, UpContextMenuItem, UpContextMenuItemDivider, UpContextMenuTrigger } from "../../Display/ContextMenu";

export interface UpTimeProps {
    hasError?: boolean;
    className?:string;
    name?:string;
    value?: string;
    onChange?:(event, value: string) => void;
    minuteStep? : number;
}

export interface UpTimeState {
    hour?: number;
    minute?: number;
    focusedHour? : boolean;
    focusedMinute? : boolean;
}

export default class UpTimePicker extends React.Component<UpTimeProps, UpTimeState> {
    inputElement: HTMLInputElement;
    
    public static defaultProps = {
        minuteStep : 5,
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

        return <div className="form-control"
            style={{
                borderColor: this.props.hasError === true ? 'red' : 'inherit',
                width: "5em",
                padding: "4px"
            }}>
            <div style={{display: 'inline-block'}}>
                <UpContextMenuTrigger rightClick={false} id={'hour-time-picker'} holdToDisplay={1000}>
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
                </UpContextMenuTrigger>
                <UpContextMenu id="hour-time-picker">
                    {hourSteps.map(step => {
                        return <UpContextMenuItem onClick={this.setHour} data={{value: step}}>{step}</UpContextMenuItem>
                    })}
                </UpContextMenu>
            </div>
            :
            <div style={{display: 'inline-block'}}>
                <UpContextMenuTrigger rightClick={false} id={'minute-time-picker'} holdToDisplay={1000}>
                    <input
                        type="text"
                        value={this.state.minute.toString()}
                        onKeyDown={this.onKeyDownMin}
                        onChange={this.onchangeMinEvent}
                        onFocus={this.onFocusMinute}
                        style={{
                            "border": "none",
                            "width": "2em",
                            "textAlign": "center"
                        }}
                    />
                </UpContextMenuTrigger>
                <UpContextMenu id="minute-time-picker">
                    {minuteSteps.map(step => {
                        return <UpContextMenuItem onClick={this.setMinute} data={{value: step}}>{step}</UpContextMenuItem>
                    })}
                </UpContextMenu>
            </div>
        </div>
    }
    setHour() {
        console.log(arguments) ;
    }

    setMinute() {
        console.log(arguments) ;
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
            const fakeEvent = new Event("change", { bubbles: true }) ;
            const event : React.ChangeEvent<any> 
                    = { ...fakeEvent,
                        target : {
                            ...fakeEvent.target,
                            value,
                            name: this.props.name,
                },
                nativeEvent: fakeEvent, 
                isDefaultPrevented: () => false, 
                persist: () => {},
                isPropagationStopped: () => false} as React.SyntheticEvent<any>;

            this.props.onChange(event, value);
        }
    }
}
