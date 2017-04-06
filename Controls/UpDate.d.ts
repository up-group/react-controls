/// <reference types="react" />
import "eonasdan-bootstrap-datetimepicker";
import * as React from "react";
export interface UpDateProps {
    hasError: boolean;
    onChange: (value?: Date) => void;
    isNuallble: boolean;
    default?: Date;
}
export interface UpDateState {
    value?: Date;
}
export declare class UpDate extends React.Component<UpDateProps, UpDateState> {
    inputElementGroup: HTMLDivElement;
    constructor(p: any, c: any);
    setInput(data: any): void;
    componentDidMount(): void;
    render(): JSX.Element;
    handleChangeJsEvent(event: any): void;
    dispatchOnChange: () => void;
    isEmpty(value: any): boolean;
}
