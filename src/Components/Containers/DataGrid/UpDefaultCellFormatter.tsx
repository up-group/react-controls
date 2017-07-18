import * as React from 'react'

import {Column} from './UpDataGrid'

export interface ICellFormatter {   
    format : (item:any, column: Column) => React.ReactElement<any>
}

export default class UpDefaultCellFormatter implements ICellFormatter{
    
    getValue = (value, path) => {
        var pathParts = path.split('.') ;
        if(pathParts.length==1) {
            return value[path] ;
        } else {
            var nextValue = value[pathParts[0]] ;
            var nextPath = pathParts.slice(1).join('.') ;
            return this.getValue(nextValue, nextPath)
        }
    }

    format = (item:any, column: Column) => {
        let result = item ;
        if(column) {
            result = this.getValue(item, column.field) ;
        }
        return (
            <div>{result}</div>
        );
    }
}