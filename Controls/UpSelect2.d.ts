/// <reference types="react" />
/// <reference types="jquery" />
/// <reference types="select2" />
/// <reference types="eonasdan-bootstrap-datetimepicker" />
import * as React from "react";
import 'select2';
export interface UpSelect2ExtendProp {
    default: any;
    getFullData: boolean;
    multiple?: boolean;
    data?: any;
    placeholder?: string;
    allowClear?: boolean;
    minimumInputLength?: number;
    dataSource?: {
        id: string;
        text: string;
        query: string;
        queryParameterName: string;
    };
    onChange: (arg) => void;
    onError: () => void;
    isNuallble: boolean;
    isRequired: boolean;
}
export declare class UpSelect2 extends React.Component<UpSelect2ExtendProp, {}> {
    el: JQuery;
    constructor(p: any, c: any);
    setInput(data: any): void;
    _componentDidMount(): void;
    handleChangeJsEvent(args: any): any;
    isEmpty(value: any): boolean;
    render(): JSX.Element;
    private readonly isExtrenal;
    componentDidMount(): void;
    componentWillUnmount(): void;
    initSelect2(props: any, updateValue?: boolean): void;
    private getUrl;
    private getdataParam;
    private fullData;
    private mapResult;
    private format(object, strFormat);
    private findInObject;
    destroySelect2(withCallbacks?: boolean): void;
    attachEventHandlers(props: any): void;
    detachEventHandlers(props: any): void;
    prepareValue(value: any, defaultValue: any): any;
    prepareOptions(options: any): any;
}
