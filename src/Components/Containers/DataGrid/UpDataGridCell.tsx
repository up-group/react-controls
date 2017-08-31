import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Column } from './UpDataGrid'
import { ICellFormatter, UpCellFormatter } from './UpDefaultCellFormatter'

export interface UpDataGridCellState {
    isSelected: boolean;
}

export interface UpDataGridCellProps {
    item?: any;
    column?: Column;
}

export default class UpDataGridCell extends React.Component<UpDataGridCellProps, UpDataGridCellState> {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isSelected: false
        }
    }

    render() {
        return (
            <div className="up-data-grid-cell">
                <UpCellFormatter item={this.props.item} column={this.props.column}>
                    {this.props.children}
                </UpCellFormatter>
            </div>
        )
    }
}