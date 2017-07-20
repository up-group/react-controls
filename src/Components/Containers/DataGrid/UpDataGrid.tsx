import * as React from 'react'
import * as ReactDOM from 'react-dom'

import axios from 'axios'

import UpPagination from './UpPagination'
import UpUpDataGridToolbar from './UpDataGridToolbar'
import UpDataGridRowHeader from './UpDataGridRowHeader'
import UpDataGridRow from './UpDataGridRow'

import * as classnames from 'classnames' 

import {style} from 'typestyle'
import {ActionType} from '../../Inputs/Button'
import {IconName, IntentType} from '../../../Common/theming/types'

const WrapperDataGridStyle = style( {
    position:"relative"
})

const CellInnerElementStyle = {
    marginTop: "0.3em"
};

const DataGridStyle = style({
    width: "100%",
    border: "1px solid #737373",
    borderRadius: "4px",
    display: "table",
    $nest: {
        ".up-data-grid-header" : {
            backgroundColor: "#fafafa",
            backgroundImage: "linear-gradient(to bottom, #ffffff, #f2f2f2)",
            backgroundRepeat: "repeat-x",
            border: "1px solid #d4d4d4",
            borderRadius: "4px",
            boxShadow: "0 1px 4px rgba(0, 0, 0, 0.067)",
            color: "#428bca",
            fontWeight: 700,
            display: "table-header-group"
        },
        ".up-data-grid-body" : {
            background: "white",
            display: "table-row-group"
        },
        ".up-selection" : {
            width: "0.2em"
        },
        ".up-display-label" : CellInnerElementStyle,
        ".up-display-value" : CellInnerElementStyle,
        ".up-data-grid-row" : {
            display: "table-row"
        },
        ".up-data-grid-header-cell" : {
            display: "table-cell",
            verticalAlign: "top",
            padding: "4px"
        },
        ".up-data-grid-cell" : {
            display: "table-cell",
            verticalAlign: "top",
            padding: "8px"
        },
        ".up-data-grid-row-bordered" : {
            $nest : {
                ".up-data-grid-cell" : {
                    borderTop: "0.1em solid #428bca"
                }
            }
        },
        ".up-data-grid-row-borderless" : {
            $nest : {
                ".up-data-grid-cell" : {
                    border: "0"
                }
            }
        },
        ".up-data-grid-row-selected" : {
            $nest : {
                ".up-data-grid-cell" : {
                    borderTop: "0.1em solid #737373",
                    borderBottom: "0.1em solid #737373",
                    backgroundColor: "whitesmoke"
                }
            }
        },
        "button" : {
            margin : "4px 4px"
        },
        ".up-data-grid-sortable" : {
            cursor:"pointer"
        }
    }
});

export interface Action {
    type: ActionType,
    role: string,
    intent: IntentType,
    description:string
}

export interface Column {
    label:string | JSX.Element;
    field?:string;
    formatter?:any;
    type?:any;
    isSortable?:boolean;
    isSorted?:boolean;
    sortDir?:SortDirection;
}

export interface Row {
    isSelected? : boolean;
    value?:any;
}

export type Method = 'GET' | 'POST' ;

export interface UpDataGridProps {
    columns: Array<Column>;
    actions?: Array<Action>;
    isSelectionEnabled?: boolean;
    isPaginationEnabled?: boolean;
    isOddEvenEnabled?: boolean;
    isSortEnabled?:boolean;
    rowTemplate?: any;
    data?: Array<any>;
    dataKey?:string;
    // For pagination
    defaultSkip?:number;
    defaultTake?:number;
    defaultPage?:number;
    total?:number;

    dataSource?: {
        query: string;
        method?:Method;
        entityKey?:string;
    },

    // Event Handler
    onPageChange?: (page: number,take:number, skip:number) => void;
    onSortChange?: (c: Column, dir:SortDirection) => void;
    onSelectionChange?: (row: Row) => void;
    handleAction?: (item:any, role:string) => void;
}

export interface UpDataGridState {
    data: Array<Row>;
    columns:Array<Column>,
    page:number;
    skip:number;
    take:number;
    total: number;
}

export type SortDirection = 'ASC' | 'DESC'

export default class UpDataGrid extends React.Component<UpDataGridProps, UpDataGridState> {

    static defaultProps : UpDataGridProps = {
        columns:[],
        actions:[],
        dataKey:'Entity',
        defaultSkip:0,
        defaultTake:50,
        defaultPage:1,
        isSelectionEnabled:false,
        isPaginationEnabled:false,
        isOddEvenEnabled:true,
        isSortEnabled:true
    }

    constructor(props, context) {
        super(props, context) ;
        this.fetchData = this.fetchData.bind(this) ;
        if(props.data != null) {
            const data = props.data as Array<any>;
            let rows : Array<Row> = [] ;
            
            data.map((value, index) => {
                rows.push({
                    isSelected:false,
                    value:value
                });
            });

            this.state = {
                data : rows,
                columns: props.columns,
                page:1,
                skip:0,
                take: props.defaultTake,
                total: props.total
            };
        } else if (props.dataSource != undefined) {
            this.state = {
                data : [],
                columns: props.columns,
                page:1,
                skip:0,
                take: props.defaultTake,
                total: props.total
            };
            this.fetchData() ;
        }
    }

    fetchData = () => {
        var sortedColumn:Column = null ;
        this.state.columns.map((value, index) => {
            if(value.isSorted) {
                sortedColumn = value ;
            }
        });
        var dataKey = this.props.dataKey ;

        if(this.props.dataSource.method === 'POST') {
            
            var params = {  Take : this.state.take,
                            Skip : this.state.skip} ;

            if(sortedColumn != null) {
                params['Order'] = sortedColumn.field ;
                params['Dir']   = sortedColumn.sortDir;
            }

            axios.post(`${this.props.dataSource.query}`,
                    )
                    .then((response) => {
                        var data = response.data;
                        console.log(data) ;
                    });
        } else {
            var query = `${this.props.dataSource.query}?Take=${this.state.take}&Skip=${this.state.skip}` ;
            if(sortedColumn != null) {
                query = `${query}&Order=${sortedColumn.field}&Dir=${sortedColumn.sortDir}` ;
            }
            var self = this ;
            axios.get(query)
                    .then((response) => {
                        var data = response.data;
                        var rows : Array<Row> = [] ;
                        var total = 0 ;
                        if(data.Count != null) {
                            total = data.Count ;
                            if(dataKey != null) {
                                data = data[dataKey] ;
                            }
                        } else {
                            total = data.length ;
                        }
                        if(data != null) {
                            data.map((value, index)  => {
                                rows.push({value: value, isSelected: false}) ;
                            });
                            if(rows.length == total && self.state.take < total) {
                                // Internal sort
                                if(sortedColumn) {
                                    rows.sort(
                                        function(x, y)
                                        {
                                            if(sortedColumn.sortDir=="ASC")
                                                return x.value[sortedColumn.field] === y.value[sortedColumn.field] ? 0 : x.value[sortedColumn.field] > y.value[sortedColumn.field] ? 1 : -1 ;
                                            else 
                                                return x.value[sortedColumn.field] === y.value[sortedColumn.field] ? 0 : x.value[sortedColumn.field] > y.value[sortedColumn.field] ? -1 : 1 ;
                                        }
                                        );
                                }
                                // Internal pagination
                                rows = rows.slice(self.state.skip, self.state.skip + self.state.take) ;
                            }
                        }
                        self.setState({data: rows, total: total}) ;
                    });
        }
    }

    getSelectedRows = () => {
        if (this.props.isSelectionEnabled) {
            return null;
        }

        return this.state.data.filter(r => r.isSelected === true);
    }

    onPageChange = (page:number, take:number, skip:number) => {
        if(this.props.onPageChange)
            this.props.onPageChange(page, take, skip) ;

        this.setState({page:page, take:take, skip:skip}, () => {
            if (this.props.dataSource != undefined) {
                this.fetchData() ;
            }
        }) ;
    }

    onSelectionChange = (r:Row) => {
        if(this.props.onSelectionChange)
            this.props.onSelectionChange(r) ;
    }

    onSelectionAllChange = (isSelected:boolean) => {
        let rows : Array<Row> = [] ;
        
        this.state.data.map((row, index) => {
            rows.push({
                isSelected:isSelected,
                value:row.value
            });
        });

        this.setState({data:rows}) ;
    }

    onSortChange = (c:Column, dir:SortDirection) => {
        if(this.props.onSortChange) {
            this.props.onSortChange(c, dir) ;
        }
        // Update the column state
        var columns:Array<Column> = [] ;
        this.state.columns.map((value, index) => {
            if (c.field == value.field) {
               columns.push(c) ;
            } else {
                value.isSorted = false ;
                value.sortDir=null;
                columns.push(value)  ;
            }
        });
        this.setState({columns:columns}, () => {
            if (this.props.dataSource != undefined) {
                this.fetchData() ;
            }
        }) ;
    }

    handleAction = (item:any, role:string) => {
        if(this.props.handleAction)
            this.props.handleAction(item, role) ;
    }

    render() {
        const pagination = <UpPagination total={this.state.total} onPageChange={this.onPageChange.bind(this)} /> ;
        const toolbar    = <UpUpDataGridToolbar /> ;
        const RowTemplate = this.props.rowTemplate ;

        var OddEvenStyle = null ;
        if(this.props.isOddEvenEnabled) {
            OddEvenStyle = style({
                $nest : {
                    '.up-data-grid-row:nth-child(even)' : {
                        background: "#EFEFEF"
                    },
                    '.up-data-grid-row:nth-child(odd)' : {
                        background: "#FFF"
                    }
                }
            }) ;
        }
        var columns = this.props.columns ;
        if(this.props.isSortEnabled == false) {
            var newUnsortableColumns : Array<Column> = [] ;
            columns.map((value, index) => {
                value.isSortable = false ;
                newUnsortableColumns.push(value) ;
            });
            columns = newUnsortableColumns ;
        }
        
        return (
            <div className={classnames("up-data-grid-container", WrapperDataGridStyle)} >
                {this.props.isPaginationEnabled &&
                    pagination
                }
                <div className={classnames("up-data-grid-main", DataGridStyle)}>
                    <UpDataGridRowHeader isSelectionEnabled={this.props.isSelectionEnabled} 
                                         onSelectionChange={this.onSelectionAllChange.bind(this)}
                                         onSortChange={this.onSortChange.bind(this)}
                                         actions={this.props.actions}
                                         columns={columns} />
                    <div className={classnames("up-data-grid-body", OddEvenStyle)}>
                        {this.state.data.map( (value, index) => {
                            if(RowTemplate) {
                                return <RowTemplate ref={`row-${index}`} 
                                                    isSelectionEnabled={this.props.isSelectionEnabled} 
                                                    actions={this.props.actions}
                                                    handleAction={this.handleAction}
                                                    columns={columns} 
                                                    item={value} />
                            } else {
                                return <UpDataGridRow   ref={`row-${index}`} 
                                                        isSelectionEnabled={this.props.isSelectionEnabled} 
                                                        actions={this.props.actions}
                                                        handleAction={this.handleAction}
                                                        columns={columns} 
                                                        item={value} />
                            }
                        })}
                    </div>
                </div>
                {toolbar}
            </div>
        );
    }   
}