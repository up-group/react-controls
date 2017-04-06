/// <reference types="react" />
import * as React from "react";
export interface UpStringMultiLineProps {
    hasError: boolean;
    onChange: (value: number[]) => void;
}
export declare class UpStringMultiLine extends React.Component<UpStringMultiLineProps, {}> {
    constructor(p: any, c: any);
    render(): JSX.Element;
    onchange: (event: any) => void;
}
