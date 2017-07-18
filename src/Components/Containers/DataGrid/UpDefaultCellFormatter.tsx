import * as React from 'react'

export interface ICellFormatter {   
    format : (value:any) => React.ReactElement<any>
}

export default class UpDefaultCellFormatter implements ICellFormatter{
    format = (value:any) => {
        return (
            <div></div>
        );
    }
}