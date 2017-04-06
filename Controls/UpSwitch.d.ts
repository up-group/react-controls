/// <reference types="react" />
import * as React from "react";
export interface UpSwitchProps {
    onChange: (value?: boolean) => void;
    isNuallble: boolean;
    default?: boolean;
}
export interface UpSwitchState {
    value?: boolean;
}
export declare class UpSwitch extends React.Component<UpSwitchProps, UpSwitchState> {
    constructor(p: any, c: any);
    componentDidMount(): void;
    render(): JSX.Element;
    onBoolClick: (a: any) => void;
    dispatchOnChange: () => void;
}
