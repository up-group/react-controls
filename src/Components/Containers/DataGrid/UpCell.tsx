import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {ICellFormatter} from './UpDefaultCellFormatter'

export interface UpCellState {
    isSelected:boolean;
}

export interface UpCellProps {
    formatter: ICellFormatter;
    value:any;
}

export default class UpCell extends React.Component<UpCellProps, UpCellState> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="up-data-grid-cell">
                {this.props.formatter.format(this.props.value)}
            </div>
        )
    }
}