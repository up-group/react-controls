/// <reference types="react" />
import * as React from "react";
export interface UpFileProp {
    maxSize?: number;
    hasError: boolean;
    fileExtension?: string;
    onChange: (value: number[]) => void;
    onError: (value: string) => void;
}
export declare class UpFile extends React.Component<UpFileProp, {}> {
    constructor(p: any, c: any);
    render(): JSX.Element;
    readonly maxSizeb: number;
    readonly maxSizeMb: number;
    onchange: (event: any) => any;
}
