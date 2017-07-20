import * as React from 'react'

import {Column} from './UpDataGrid'
import UpBadge from '../../Display/Badge'

export interface ICellFormatter {   
    format : (item:any, column: Column) => React.ReactElement<any>
}

export default class UpDefaultCellFormatter implements ICellFormatter{
    
    getValue = (value, column) => {
        var field = column.field ;
        var pathParts = field.split('.') ;
        var valueExtracted ; 
        if(pathParts.length==1) {
            valueExtracted = value[field] ;
        } else {
            var nextValue = value[pathParts[0]] ;
            var nextPath = pathParts.slice(1).join('.') ;
            valueExtracted = this.getValue(nextValue, nextPath)
        }
        var result:any = "" ;
        var type = column.type;
        if(field) {
            switch (type) {
                case 'link':
                    try {
                        if (    valueExtracted != undefined 
                            &&  valueExtracted != 0 
                            &&  valueExtracted != "00000000-0000-0000-0000-000000000000") {
                            result = "" ; // TODO
                        }
                    } catch (exception) {

                    }
                    break;
                case 'file' :
                    // TODO
                    break;
                case 'date':
                    // var _format = c.format;
                    // if (_format) {
                    //     try {
                    //         var _data = eval("self.item." + field);
                    //         result = new moment(_data).format(_format);
                    //     } catch (exception) {
                    //         console.log(exception)
                    //     }
                    // } else {
                    //     result = eval("self.item." + field);
                    // }
                    break;
                default:
                    if(valueExtracted != undefined) {
                        // On regarde s'il est défini une couleur
                        var _couleur = undefined;
                        if(typeof(valueExtracted['Couleur']) != 'undefined')
                            _couleur = valueExtracted['Couleur'];
                            
                        if (_couleur==undefined) {
                            result = valueExtracted ;
                        } else {
                            var _libelle = '';
                            if(typeof(valueExtracted['Libelle']) != 'undefined')
                            _libelle = valueExtracted['Libelle'];

                            if (_libelle == undefined) {
                                _libelle = '';
                            }
                            result = <UpBadge text={_libelle} color={_couleur} /> ;
                        }
                    } else {
                        result = "" ;
                    }
                    break ;
            }
        }
        return result ;
    };

    format = (item:any, column: Column) => {
        let result = item ;
        if(column && column.field) {
            result = this.getValue(item, column) ;
        }
        return (
            <div>{result}</div>
        );
    }
}