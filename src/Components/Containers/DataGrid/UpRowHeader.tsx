import * as React from 'react'
import * as ReactDOM from 'react-dom'

import UpCellHeader from './UpCellHeader'
import {Column} from './UpDataGrid'

export interface UpRowHeaderState {
    isSelected:boolean;
}

export interface UpRowHeaderProps {
    columns:Array<Column>;
}

export default class UpRowHeader extends React.Component<UpRowHeaderProps, UpRowHeaderState> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="up-data-grid-row-header">
                {this.props.columns.map((value, index)  => {
                    <UpCellHeader column={value} />
                })}
            </div>
        )
    }
}