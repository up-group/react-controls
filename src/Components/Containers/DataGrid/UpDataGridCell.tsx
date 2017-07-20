import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {Column} from './UpDataGrid'
import {ICellFormatter} from './UpDefaultCellFormatter'

export interface UpDataGridCellState {
    isSelected:boolean;
}

export interface UpDataGridCellProps {
    item?:any;
    column?:Column;
}

export default class UpDataGridCell extends React.Component<UpDataGridCellProps, UpDataGridCellState> {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isSelected:false
        }
    }

    render() {
        return (
            <div className="up-data-grid-cell">
                {this.props.column.formatter.format(this.props.item.value, this.props.column)}
            </div>
        )
    }
}