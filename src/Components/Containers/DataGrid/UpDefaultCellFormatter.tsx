import * as React from 'react'
import { Column, Row } from './UpDataGrid'
import UpBadge from '../../Display/Badge/index'
import { isEmpty } from '../../../Common/utils/index'

import UpLink from '../../Display/Link/index'
import UpSvgIcon from '../../Display/SvgIcon/index'
import * as moment from "moment"
import { IconName } from '../../../Common/theming/icons';

export interface ICellFormatter {
    format: (item: any, column: Column) => React.ReactElement<any>
}

export default class UpDefaultCellFormatter implements ICellFormatter {

    getValue = (value, column) => {
        var field = column.field;
        var pathParts = field.split('.');
        var valueExtracted;
        if (pathParts.length == 1) {
            valueExtracted = value[field];
        } else {
            var nextValue = value[pathParts[0]];
            var nextPath = pathParts.slice(1).join('.');
            valueExtracted = this.getValue(nextValue, nextPath)
        }
        var result: any = "";
        var type = column.type;
        if (field) {
            switch (type) {
                case 'link':
                    if (!isEmpty(valueExtracted)) {
                        var href = valueExtracted;
                        if (valueExtracted.href !== undefined) {
                            valueExtracted = valueExtracted.href;
                        }
                        var icon: IconName = "link";
                        if (valueExtracted.icon !== undefined) {
                            icon = valueExtracted.icon;
                        }
                        result = <UpLink href={valueExtracted} onClick={(e) => {
                            window.open(valueExtracted);
                        }}>
                            <UpSvgIcon iconName={icon} />
                        </UpLink>
                    }
                    break;
                case 'file':
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
                    if (valueExtracted != undefined) {
                        // On regarde s'il est défini une couleur
                        var _couleur = undefined;
                        if (typeof (valueExtracted['Couleur']) != 'undefined')
                            _couleur = valueExtracted['Couleur'];

                        if (_couleur == undefined) {
                            result = valueExtracted;
                        } else {
                            var _libelle = '';
                            if (typeof (valueExtracted['Libelle']) != 'undefined')
                                _libelle = valueExtracted['Libelle'];

                            if (_libelle == undefined) {
                                _libelle = '';
                            }
                            result = <UpBadge text={_libelle} background={_couleur} />;
                        }
                    } else {
                        result = "";
                    }
                    break;
            }
        }
        return result;
    };

    format = (item: any, column: Column) => {
        let result = item;
        if (column && column.field) {
            result = this.getValue(item, column);
        }
        return (
            <div>{result}</div>
        );
    }
}

export interface UpCellFormatterProps {
    column: Column;
    value: any;
}

interface UpCellFormatterState {
}

export class UpCellFormatter extends React.Component<UpCellFormatterProps, {}>{

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {
        var valueExtracted = this.props.value[this.props.column.field];
        if (this.props.column.formatter != null) {
            return this.props.column.formatter.format(this.props.value, this.props.column);
        }

        if (valueExtracted == null) {
            return <span>{this.props.children}</span>
        }

        switch (this.props.column.type) {
            case 'link':
                if (!isEmpty(valueExtracted)) {
                    var href = valueExtracted;
                    if (valueExtracted.href !== undefined) {
                        valueExtracted = valueExtracted.href;
                    }
                    var icon: IconName = "link";
                    if (valueExtracted.icon !== undefined) {
                        icon = valueExtracted.icon;
                    }
                    return <UpLink href={valueExtracted} onClick={(e) => {
                        window.open(valueExtracted);
                    }}>
                        <UpSvgIcon iconName={icon} />
                    </UpLink>
                }
                break;
            case 'file':
                // TODO
                break;
            case 'date':
                return <span>{moment(valueExtracted).format("DD/MM/YYYY")}</span>
            case 'date-time':
                return <span>{moment(valueExtracted).format("DD/MM/YYYY HH:mm")}</span>
            case 'time':
                return <span>{moment(valueExtracted).format("HH:mm")}</span>
            case "multilineText":
                return <span style={{ "whiteSpace": "pre" }}>{valueExtracted}</span>
            case "boolean":
                switch (valueExtracted) {
                    case true:
                        return <UpBadge text={"Oui"} background={"green"} />
                    case false:
                        return <UpBadge text={"Non"} background={"red"} />
                    default:
                        return <span />
                }
            default:
                if (valueExtracted != undefined) {
                   // On regarde s'il est défini une couleur
                   var _couleur = undefined;
                   if (typeof (valueExtracted['Couleur']) != 'undefined')
                       _couleur = valueExtracted['Couleur'];
    
                   if (_couleur != null) {
                       var _libelle = '';
                       if (typeof (valueExtracted['Libelle']) != 'undefined')
                           _libelle = valueExtracted['Libelle'];
    
                       if (_libelle == undefined) {
                           _libelle = '';
                       }
                       return <UpBadge text={_libelle} background={_couleur} />;
                   }
                }
                return <span>{valueExtracted == null ? "" : valueExtracted}</span>
        }

        return <div></div>
    }
}