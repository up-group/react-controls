import UpSelect from './UpSelect'
import * as React from 'react'

export default UpSelect;

import { BaseControlProps } from '../_Common/BaseControl/BaseControl'

export type SelectWidth = 'xsmall' | 'small' | 'normal' | 'large' | 'full' | 'auto';
export type ReturnType = 'id' | 'full';

export interface UpSelectOption {
    id: number,
    text: string,
    icon?: string
}

export interface UpSelectProps extends BaseControlProps<any> {
    default: any;
    multiple?: boolean;
    data?: any;
    isLoading?:boolean;
    placeholder?: string;
    loadingPlaceholder?: string;
    allowClear?: boolean;
    allowCreate?:boolean;
    minimumInputLength?: number;
    dataSource?: {
        id?: string;
        text?: string;
        endPoint?:string;
        query: string;
        queryParameterName?: string;
        getExtraParams?:() => any;
        delay?:number;
        handleResponse?:(response:any) => Array<any>;
    },
    filterOptions?:(options:any, filter:string, currentValues:Array<any>) => Array<any>;
    valueKey?: string;
    labelKey?: string;
    autoload?: boolean;
    noResultsText?: string;
    clearAllText?: string;
    clearValueText?: string;
    addLabelText?: string;
    searchPromptText?: string;
    promptTextCreator?:(label:string) => string;
    isOptionUnique?:(option: object, options: Array<object>, labelKey: string, valueKey: string) => boolean;
    isValidNewOption?:(label:string) => boolean;
    onNewOptionClick?: (option) => void;
    optionRenderer?: React.StatelessComponent<UpSelectOption>;
    valueRenderer?: React.StatelessComponent<UpSelectOption>;
    dataFor?: string; //For tooltip,
    width?: SelectWidth;
    returnType?: ReturnType;
}

export interface UpSelectStyledProps {
    width?: SelectWidth;
}