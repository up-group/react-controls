import UpSelect from './UpSelect'
import * as React from 'react'

export default UpSelect ;

import {InputBaseProps} from '../_Common/BaseControl/BaseControl' 

export interface UpSelectOption {
    id:number,
    text:string,
    icon:string
}

export interface UpSelectProps extends InputBaseProps<any> {
    default: any;
    multiple?: boolean;
    data?: any;
    placeholder?: string;
    loadingPlaceholder?:string;
    allowClear?: boolean;
    minimumInputLength?: number;
    dataSource?: {
        id?: string,
        text?: string,
        query: string,
        queryParameterName?: string
    },
    autoload?:boolean
    noResultsText? : string,
    clearAllText? : string,
    clearValueText? : string,
    addLabelText? : string,
    searchPromptText? : string,
    optionRenderer?: React.StatelessComponent<UpSelectOption>,
    valueRenderer?: React.StatelessComponent<UpSelectOption>,
    dataFor?:string; //For tooltip
}

export interface UpSelectStyledProps extends UpSelectProps {
}