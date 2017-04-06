/// <reference types="react" />
import "eonasdan-bootstrap-datetimepicker";
import * as React from "react";
export interface UpDateTimeProps {
    hasError: boolean;
    onChange: (value?: Date) => void;
    isNuallble: boolean;
    default?: Date;
}
export interface UpDateTimeState {
    value?: Date;
}
export declare class UpDateTime extends React.Component<UpDateTimeProps, UpDateTimeState> {
    inputElementGroup: HTMLDivElement;
    constructor(p: any, c: any);
    setInput(data: any): void;
    componentDidMount(): void;
    render(): JSX.Element;
    handleChangeJsEvent(event: any): void;
    dispatchOnChange: () => void;
    isEmpty(value: any): boolean;
}
