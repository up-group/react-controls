import * as $ from 'jquery'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as classnames from 'classnames'
import { style } from 'typestyle'

import axios from 'axios'

import UpPagination from './UpPagination'
import UpUpDataGridToolbar from './UpDataGridToolbar'
import UpDataGridRowHeader from './UpDataGridRowHeader'
import UpDataGridRow from './UpDataGridRow'
import UpDefaultCellFormatter, { ICellFormatter } from './UpDefaultCellFormatter'

import UpLoadingIndicator from '../../Display/LoadingIndicator'
import UpButton from '../../Inputs/Button/UpButton'

import { IntentType } from '../../../Common/theming/types'
import shallowEqual from '../../../Common/utils/shallowEqual'
import { ActionType } from '../../../Common/actions';


const WrapperDataGridStyle = style({
    position: "relative"
})

const CellInnerElementStyle = {
    marginTop: "0.3em"
};

const DataGridStyle = style({
    width: "100%",
    border: "1px solid #737373",
    borderRadius: "4px",
    //display: "table",
    borderCollapse: "collapse",
    $nest: {
        ".up-data-grid-header": {
            backgroundColor: "#fafafa",
            backgroundImage: "linear-gradient(to bottom, #ffffff, #f2f2f2)",
            backgroundRepeat: "repeat-x",
            border: "1px solid #d4d4d4",
            borderRadius: "4px",
            boxShadow: "0 1px 4px rgba(0, 0, 0, 0.067)",
            color: "#428bca",
            fontWeight: 700,
            //display: "table-header-group"
        },
        ".up-data-grid-body": {
            background: "white",
            //display: "table-row-group"
        },
        ".up-selection": {
            width: "0.2em"
        },
        ".up-display-label": CellInnerElementStyle,
        ".up-display-value": CellInnerElementStyle,
        ".up-data-grid-row": {
            //display: "table-row"
        },
        ".up-data-grid-header-cell": {
            //display: "table-cell",
            textAlign: "left",
            verticalAlign: "top",
            padding: "4px"
        },
        ".up-data-grid-cell": {
            //   display: "table-cell",
            verticalAlign: "top",
            padding: "8px"
        },
        ".up-data-grid-row-bordered": {
            borderTop: "0.1em solid #428bca"

            //$nest: {
            //    "& > div": {
            //        borderTop: "0.1em solid #428bca"
            //    }
            //}
        },
        ".up-data-grid-row-borderless": {
            $nest: {
                ".up-data-grid-cell": {
                    border: "0"
                }
            }
        },
        ".up-data-grid-row-selected": {
            $nest: {
                ".up-data-grid-cell": {
                    borderTop: "0.1em solid #737373",
                    borderBottom: "0.1em solid #737373",
                    backgroundColor: "whitesmoke"
                }
            }
        },
        //"button": {
        //    margin: "4px 4px"
        //},
        ".up-data-grid-sortable": {
            cursor: "pointer"
        }
    }
});

export interface Action {
    type: ActionType,
    //intent: IntentType,
    description: string,
    action: (row: Row) => void
}

export interface Column {
    label: string | JSX.Element;
    field?: string;
    formatter?: ICellFormatter;
    type?: any;
    isSortable?: boolean;
    isSorted?: boolean;
    sortDir?: SortDirection;
}

export interface Row {
    isSelected?: boolean;
    value?: any;
}

export type Method = 'GET' | 'POST';
export type PaginationPosition = "top" | "bottom" | "both";

export interface exportCsv {
    fileName: string;
    textButton?: string;
}

export interface UpDataGridProps {
    injectRow?: (previous: any, next: any, colum: Column[]) => JSX.Element;
    columns: Array<Column>;
    actions?: Array<Action>;
    isSelectionEnabled?: boolean;
    isPaginationEnabled?: boolean;
    paginationPosition?: PaginationPosition;
    isOddEvenEnabled?: boolean;
    isSortEnabled?: boolean;
    rowTemplate?: any;
    data?: Array<any>;
    dataKey?: string;
    isDataFetching?: boolean;
    // For pagination
    defaultSkip?: number;
    defaultTake?: number;
    defaultPage?: number;
    total?: number;

    exportCsv?: exportCsv;

    dataSource?: {
        query: string;
        method?: Method;
        entityKey?: string;
        orderParamName?: string;
        dirParamName?: string;
        skipParamName?: string;
        takeParamName?: string;
    },

    // Event Handler
    onPageChange?: (page: number, take: number, skip: number) => void;
    onSortChange?: (c: Column, dir: SortDirection) => void;
    onSelectionChange?: (lastChangeRow: Row, seletectedRow: Row[]) => void;
}

export interface UpDataGridState {
    data: Array<Row>;
    columns?: Array<Column>,
    page: number;
    skip: number;
    take: number;
    total: number;
    isDataFetching?: boolean;
}

export type SortDirection = 'ASC' | 'DESC'

export default class UpDataGrid extends React.Component<UpDataGridProps, UpDataGridState> {

    static defaultProps: UpDataGridProps = {
        columns: [],
        actions: [],
        dataKey: 'Entity',
        paginationPosition: 'top',
        defaultSkip: 0,
        defaultTake: 50,
        defaultPage: 1,
        isSelectionEnabled: false,
        isPaginationEnabled: false,
        isOddEvenEnabled: true,
        isSortEnabled: true
    }

    constructor(props, context) {
        super(props, context);
        this.fetchData = this.fetchData.bind(this);
        this.handleData = this.handleData.bind(this);

        const data = props.data as Array<any>;
        const columns: Array<Column> = this.props.columns;
        var _state = {
            data: [],
            isDataFetching: false,
            columns: columns, //this.prepareColumns(columns),
            page: 1,
            skip: 0,
            take: props.defaultTake,
            total: props.total
        };
        if (props.data != null) {
            _state.data = this.mapDataToRow(data);
        }
        this.state = _state;
    }

    componentDidMount() {
        if (this.props.dataSource != undefined) {
            this.fetchData();
        }
    }

    //prepareColumns = (columns : Array<Column>) : Array<Column> => {
    //    let newColumns : Array<Column> = [] ;
    //    const formatter = new UpDefaultCellFormatter() ;

    //    columns.map((value:Column, index) => {
    //        if(value.formatter == null) 
    //            value.formatter = formatter ;

    //        newColumns.push(value);
    //    });

    //    return newColumns ;
    //}

    mapDataToRow = (data: Array<any>): Array<Row> => {
        let rows: Array<Row> = [];

        data.map((value, index) => {
            rows.push({
                isSelected: false,
                value: value
            });
        });

        return rows;
    }

    handleData = (data) => {
        var sortedColumn: Column = null;
        this.state.columns.map((value, index) => {
            if (value.isSorted) {
                sortedColumn = value;
            }
        });
        var dataKey = this.props.dataKey;

        var rows: Array<Row> = [];
        var total = 0;
        if (data.Count != null) {
            total = data.Count;
            if (dataKey != null) {
                data = data[dataKey];
            }
        } else {
            total = data.length;
        }
        if (data != null) {
            rows = this.mapDataToRow(data);

            if (rows.length == total && this.state.take < total) {
                // Internal sort
                if (sortedColumn) {
                    rows.sort(
                        function (x, y) {
                            if (sortedColumn.sortDir == "ASC")
                                return x.value[sortedColumn.field] === y.value[sortedColumn.field] ? 0 : x.value[sortedColumn.field] > y.value[sortedColumn.field] ? 1 : -1;
                            else
                                return x.value[sortedColumn.field] === y.value[sortedColumn.field] ? 0 : x.value[sortedColumn.field] > y.value[sortedColumn.field] ? -1 : 1;
                        }
                    );
                }
                // Internal pagination
                rows = rows.slice(this.state.skip, this.state.skip + this.state.take);
            }
        }
        this.setState({ data: rows, total: total, isDataFetching: false });
    }
    fetchData = () => {
        this.setState({ isDataFetching: true });
        var sortedColumn: Column = null;
        this.state.columns.map((value, index) => {
            if (value.isSorted) {
                sortedColumn = value;
            }
        });
        var dataKey = this.props.dataKey;

        var orderParamName = this.props.dataSource.orderParamName || 'Order';
        var dirParamName = this.props.dataSource.dirParamName || 'Dir';
        var skipParamName = this.props.dataSource.skipParamName || 'Skip';
        var takeParamName = this.props.dataSource.takeParamName || 'Take';
        var self = this;
        if (this.props.dataSource.method === 'POST') {
            var params = {
                takeParamName: this.state.take,
                skipParamName: this.state.skip
            };

            if (sortedColumn != null) {
                params[orderParamName] = sortedColumn.field;
                params[dirParamName] = sortedColumn.sortDir;
            }

            axios.post(`${this.props.dataSource.query}`,
            )
                .then((response) => {
                    var data = response.data;
                    self.handleData(data);
                }).catch((reason) => {
                    //TODO : handle error message
                    this.setState({ isDataFetching: false });
                });
        } else {
            var query = `${this.props.dataSource.query}?${takeParamName}=${this.state.take}&${skipParamName}=${this.state.skip}`;
            if (sortedColumn != null) {
                query = `${query}&${orderParamName}=${sortedColumn.field}&${dirParamName}=${sortedColumn.sortDir}`;
            }
            axios.get(query)
                .then((response) => {
                    var data = response.data;
                    self.handleData(data);
                }).catch((reason) => {
                    //TODO : handle error message
                    this.setState({ isDataFetching: false });
                });
        }
    }

    getSelectedRows = () => {
        if (this.props.isSelectionEnabled) {
            return null;
        }

        return this.state.data.filter(r => r.isSelected === true);
    }

    onPageChange = (page: number, take: number, skip: number) => {
        if (this.props.onPageChange)
            this.props.onPageChange(page, take, skip);

        this.setState({ page: page, take: take, skip: skip }, () => {
            if (this.props.dataSource != undefined) {
                this.fetchData();
            }
        });
    }

    get seletectedRow() {
        if (this.state.data == null) {
            return [];
        }
        return this.state.data
            .filter((value) => {
                if (value.isSelected === true) {
                    return true
                }
                return false;
            })
            .map((value) => {
                return value.value;
            });
    }

    onRowSelectionChange = (rowKey: number, r: Row) => {
        var rows = this.state.data;
        rows[rowKey] = r;

        this.setState({ data: rows }, () => {
            if (this.props.onSelectionChange) {
                this.props.onSelectionChange(r, this.seletectedRow);
            }
        });
    }

    onSelectionAllChange = (isSelected: boolean) => {
        let rows: Array<Row> = this.state.data.map((row, index) => {
            return {
                isSelected: isSelected,
                value: row.value
            };
        });

        this.setState({ data: rows },
            () => {
                if (this.props.onSelectionChange) {
                    this.props.onSelectionChange(null, this.seletectedRow);
                }
            });
    }

    onSortChange = (c: Column, dir: SortDirection) => {
        if (this.props.onSortChange) {
            this.props.onSortChange(c, dir);
        }
        // Update the column state
        var columns: Array<Column> = [];
        this.state.columns.map((value, index) => {
            if (c.field == value.field) {
                columns.push(c);
            } else {
                value.isSorted = false;
                value.sortDir = null;
                columns.push(value);
            }
        });
        this.setState({ columns: columns }, () => {
            if (this.props.dataSource != undefined) {
                this.fetchData();
            }
        });
    }

    arraysEqual(arr1: any[], arr2: any[]) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (var i = arr1.length; i--;) {
            if (shallowEqual(arr1[i], arr2[i]) === false) {
                return false;
            }
        }
        return true;
    }

    //objectEqual(obj1, obj2) {
    //    var aProps = Object.getOwnPropertyNames(obj1);
    //    var bProps = Object.getOwnPropertyNames(obj2);
    //    if (aProps.length != bProps.length) {
    //        return false;
    //    }
    //    for (var i = 0; i < aProps.length; i++) {
    //        var propName = aProps[i];
    //        if (obj1[propName] !== obj2[propName]) {
    //            return false;
    //        }
    //    }
    //    return true;
    //}

    componentWillReceiveProps(nextProps: UpDataGridProps) {
        var data = this.state.data;
        var curentState = data.map((v => { return v.value; }));
        var arrayEqualResult = this.arraysEqual(curentState, nextProps.data);
        if (this.props.dataSource == null && arrayEqualResult === false) {
            data = (nextProps.data != null) ? this.mapDataToRow(nextProps.data) : nextProps.data;
        }
        var newState: UpDataGridState
            = {
                data: data,
                columns: nextProps.columns,//(nextProps.columns != null) ? this.prepareColumns(nextProps.columns) : nextProps.columns,
                total: nextProps.total,
                isDataFetching: nextProps.isDataFetching,
                skip: nextProps.defaultSkip > nextProps.total ? 0 : nextProps.defaultSkip,
                take: nextProps.defaultTake,
                page: (nextProps.defaultPage - 1) * nextProps.defaultSkip > nextProps.total ? 1 : nextProps.defaultPage
            };

        this.setState(newState, () => {
            if (arrayEqualResult === false) {
                if (this.props.onSelectionChange) {
                    this.props.onSelectionChange(null, []);
                }
            }
        });
    }

    render() {
        const takes = [{ id: 20, text: "20" },
        { id: 50, text: "50" },
        { id: 100, text: "100" },
        { id: 200, text: "200" }];

        const pagination = <UpPagination defaultSkip={this.state.skip} defaultTake={this.state.take}
            total={this.state.total} onPageChange={this.onPageChange.bind(this)} takes={takes} />;
        const toolbar = <UpUpDataGridToolbar />;
        const RowTemplate = this.props.rowTemplate;

        var OddEvenStyle = null;
        if (this.props.isOddEvenEnabled) {
            OddEvenStyle = style({
                $nest: {
                    '.up-data-grid-row:nth-child(even)': {
                        background: "#EFEFEF"
                    },
                    '.up-data-grid-row:nth-child(odd)': {
                        background: "#FFF"
                    }
                }
            });
        }
        var columns = this.state.columns;
        if (this.props.isSortEnabled == false) {
            var newUnsortableColumns: Array<Column> = [];
            columns.map((value, index) => {
                value.isSortable = false;
                newUnsortableColumns.push(value);
            });
            columns = newUnsortableColumns;
        }


        var rows = [];

        for (var index = 0; index < this.state.data.length; index++) {
            let value = this.state.data[index];

            if (RowTemplate) {
                rows.push(<RowTemplate key={`row-${index}`}
                    isSelectionEnabled={this.props.isSelectionEnabled}
                    actions={this.props.actions}
                    columns={columns}
                    item={value} />)
            } else {
                rows.push(<UpDataGridRow key={`row-${index}`}
                    rowIndex={index}
                    isSelectionEnabled={this.props.isSelectionEnabled}
                    actions={this.props.actions}
                    columns={columns}
                    value={value.value}
                    isSelected={value.isSelected}
                    onSelectionChange={this.onRowSelectionChange}
                />)
            }

            if (this.props.injectRow != null) {
                let previous = value;
                let next = this.state.data[index + 1];
                let rowToInject = this.props.injectRow(previous, next, columns);
                if (rowToInject != null) {
                    rows.push(
                        <tr className="up-data-grid-row up-data-grid-row-bordered" key={`row-custom-${index}`} >
                            <td className="up-data-grid-cell" colSpan={columns.length}>
                                {rowToInject}
                            </td>
                        </tr>
                    )
                }
            }

        }

        return (
            <div className={classnames("up-data-grid-container", WrapperDataGridStyle)} >
                {this.props.isPaginationEnabled && this.props.paginationPosition != 'bottom' &&
                    pagination
                }
                <UpLoadingIndicator message={"Chargement en cours"} isLoading={this.state.isDataFetching} />
                {this.btnExportCsv}
                {!this.state.isDataFetching &&
                    <table ref={(r) => { this.refTable = r; }} className={classnames("up-data-grid-main", DataGridStyle)}>
                        <UpDataGridRowHeader isSelectionEnabled={this.props.isSelectionEnabled}
                            onSelectionChange={this.onSelectionAllChange.bind(this)}
                            onSortChange={this.onSortChange.bind(this)}
                            actions={this.props.actions}
                            columns={columns} />
                        <tbody className={classnames("up-data-grid-body", OddEvenStyle)}>
                            {rows}
                        </tbody>
                    </table>
                }
                {!this.state.isDataFetching && this.props.isPaginationEnabled && this.props.paginationPosition != 'top' &&
                    <div style={{ marginTop: "10px" }}>{pagination}</div>
                }
            </div>
        );
    }

    refTable: HTMLTableElement = null;

    componentDidUpdate(prevProps, prevState) {

        //if (this.refTable != null) {
        //    var a = new exporterTable(this.refTable, {});
        //    debugger
        //}

    }

    get isExportCsvEnable() {
        if (this.props.data == null || this.props.data.length === 0 ) {
            return false;
        }
        return this.props.exportCsv != null;
    }

    get btnExportCsv() {
        if (this.isExportCsvEnable === false) {
            return null;
        }

        if (this.props.exportCsv.textButton == null) {
           return <UpButton onClick={this.onExport} actionType={"download"} />
        }

        return <UpButton onClick={this.onExport} > {this.props.exportCsv.textButton}</UpButton >
    }

    onExport = (a) => {
        this.exportTableToCSV(this.refTable, this.props.exportCsv.fileName, true)
    }


    private exportTableToCSV(table: HTMLTableElement, filename, header) {
        var csv = this.getCsvFromTable(table, header);

        var ieVersion = function () {
            var rv = -1;
            if (navigator.appName == 'Microsoft Internet Explorer') {
                var ua = navigator.userAgent;
                var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                if (re.exec(ua) != null)
                    rv = parseFloat(RegExp.$1);
            } else if (navigator.appName == 'Netscape') {
                var ua = navigator.userAgent;
                var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
                if (re.exec(ua) != null)
                    rv = parseFloat(RegExp.$1);
            }
            return rv;
        }();

        if (ieVersion != -1) {
            if (ieVersion > 9) {
                var bytes = new Array(csv.length);
                for (var i = 0; i < csv.length; i++) {
                    bytes[i] = csv.charCodeAt(i);
                }
                var blob = new Blob([new Uint8Array(bytes)], { type: 'text/csv' });
                window.navigator.msSaveBlob(blob, filename);
            }
        } else {

            var a = document.createElement('A') as HTMLAnchorElement;
            a.href = 'data:text/csv;base64,' + window.btoa(csv);
            a.download = filename;
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            //$(a).attr({
            //    'download': filename,
            //    'href': ,
            //    'target': '_blank'
            //});

        }
    }

    private getCsvFromTable(table: HTMLTableElement, header: boolean) {
        var tmpColDelim = String.fromCharCode(11),
            tmpRowDelim = String.fromCharCode(0),
            colDelim = '";"',
            rowDelim = '"\r\n"',
            csv = "",
            getRows = function (typeOfRow) {
                var $rows = $(table).find('tr:has(' + typeOfRow + ')');
                return csv = '"' + $rows.map(function (i, row) {
                    var $row = $(row),
                        $cols = $row.find(typeOfRow);

                    return $cols.map(function (j, col) {
                        var $col = $(col),
                            text = $col.text().trim();
                        return text.replace('"', '""') + Array(($col[0] as any).colSpan).join(tmpColDelim);

                    }).get().join(tmpColDelim);

                }).get().join(tmpRowDelim)
                    .split(tmpRowDelim).join(rowDelim)
                    .split(tmpColDelim).join(colDelim) + '"';
            };

        if (header) {
            csv += getRows('th') + '\r\n';
        };
        csv += getRows('td');
        return csv;
    }


}




