/// <reference types="react" />
import * as React from "react";
export interface UpTimePickerProps {
    hasError: boolean;
    onChange: (value: string) => void;
}
export interface UpTimePickerState {
    hour?: number;
    minute?: number;
}
export declare class UpTimePicker extends React.Component<UpTimePickerProps, UpTimePickerState> {
    inputElement: HTMLInputElement;
    constructor(p: any, c: any);
    render(): JSX.Element;
    onchangeHourEvent: (e: any) => void;
    onchangeHour: (value: any) => void;
    onKeyDownHour: (e: any) => void;
    onchangeMinEvent: (e: any) => void;
    onchangeMin: (value: any) => void;
    onKeyDownMin: (e: any) => void;
    sendChange: () => void;
}
