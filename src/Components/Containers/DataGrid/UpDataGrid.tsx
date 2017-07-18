import * as React from 'react'
import * as ReactDOM from 'react-dom'

import UpPagination from './UpPagination'
import UpToolbar from './UpToolbar'
import UpRowHeader from './UpRowHeader'
import UpRow from './UpRow'

export interface Column {
    label:string;
    field:string;
    formatter?:any;
    type?:any;
    isSortable?:boolean;
}
export interface Row {
    isSelected : boolean;
}

export interface UpDataGridProps {
    columns: Array<Column>;
    isSelectionEnabled: boolean;
    rowTemplate?: any
    // Event Handler
    onPageChange?: (page: number) => void;
    onSortChange?: (sort: any) => void;
    onSelectionChange?: (selection: any) => void;
}

export interface UpDataGridState {
    data: Array<Row>;
    page:number;
    limit:number;
    total: number;
    maxPage:number;
}

export type SortDirection = 'ASC' | 'DESC'

export default class UpDataGrid extends React.Component<UpDataGridProps, UpDataGridState> {

    static defaultProps : UpDataGridProps = {
        columns:[],
        isSelectionEnabled:true
    }

    constructor(props, context) {
        super(props, context) 
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
        
    }

    render() {
        const pagination = <UpPagination count={50} onPageChange={this.onPageChange} /> ;
        const toolbar    = <UpToolbar /> ;
        return (
            <div className="up-data-grid-container">
                {pagination}
                <div className="up-data-grid-main">
                    <UpRowHeader columns={this.props.columns} />
                    {this.state.data.map( (value, index) => {
                        <UpRow columns={this.props.columns} item={value} />
                    })}
                </div>
                {toolbar}
            </div>
        );
    }   
}