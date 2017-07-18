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
            padding: "4px"
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
}

export interface Row {
    isSelected? : boolean;
    value?:any;
}

export interface UpDataGridProps {
    columns: Array<Column>;
    actions: Array<Action>;
    isSelectionEnabled: boolean;
    rowTemplate?: any;
    data: string | Array<any>;
    total?:number;
    // Event Handler
    onPageChange?: (page: number,take:number, skip:number) => void;
    onSortChange?: (c: Column, dir:SortDirection) => void;
    onSelectionChange?: (selection: any) => void;
}

export interface UpDataGridState {
    data: Array<Row>;
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
        data:[],
        isSelectionEnabled:true
    }

    constructor(props, context) {
        super(props, context) ;
        const data = this.props.data as Array<any>;
        let rows : Array<Row> = [] ;
        
        data.map((value, index) => {
            rows.push({
                isSelected:false,
                value:value
            });
        });

        // On vérifie si on nous a passé tout le tableau
        if(rows.length == this.props.total) {
            
        }

        this.state = {
            data : rows,
            page:1,
            skip:0,
            take:50,
            total: this.props.total
        };
    }

    getSelectedRows = () => {
        if (this.props.isSelectionEnabled) {
            return null;
        }

        return this.state.data.filter(r => r.isSelected === true);
    }

    checkAll = () => {

    }

    onPageChange = (page:number, take:number, skip:number) => {
        if(this.props.onPageChange)
            this.props.onPageChange(page, take, skip) ;
    }

    onSelectionChange = (r:Row, isSelected:boolean) => {

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

    }

    render() {
        const pagination = <UpPagination count={50} onPageChange={this.onPageChange} /> ;
        const toolbar    = <UpUpDataGridToolbar /> ;
        return (
            <div className={classnames("up-data-grid-container", WrapperDataGridStyle)} >
                {pagination}
                <div className={classnames("up-data-grid-main", DataGridStyle)}>
                    <UpDataGridRowHeader isSelectionEnabled={this.props.isSelectionEnabled} 
                                         onSelectionChange={this.onSelectionAllChange}
                                         onSortChange={this.onSortChange}
                                         actions={this.props.actions}
                                         columns={this.props.columns} />
                    <div className={classnames("up-data-grid-body")}>
                        {this.state.data.map( (value, index) => {
                            return <UpDataGridRow ref={`row-${index}`} isSelectionEnabled={this.props.isSelectionEnabled} 
                                                  actions={this.props.actions}
                                                  columns={this.props.columns} item={value} />
                        })}
                    </div>
                </div>
                {toolbar}
            </div>
        );
    }   
}