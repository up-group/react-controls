import * as React from 'react'
import * as ReactDOM from 'react-dom'

import UpCell from './UpCell'
import {Column} from './UpDataGrid'
import UpDefaultCellFormatter from './UpDefaultCellFormatter'

export interface UpRowState {
    isSelected:boolean;
}

export interface UpRowProps {
    item: any;
    columns:Array<Column>;
}

export default class UpRow extends React.Component<UpRowProps, UpRowState> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let formatter = new UpDefaultCellFormatter() ;
        return (
            <div className="up-data-grid-row">
                {this.props.columns.map((value, index)  => {
                    <UpCell value={value} formatter={formatter} />
                })}
            </div>
        )
    }
}