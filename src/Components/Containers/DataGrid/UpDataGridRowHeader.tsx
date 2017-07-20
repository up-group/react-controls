import * as React from 'react'
import * as ReactDOM from 'react-dom'

import UpCheckbox from '../../Inputs/Checkbox'

import UpDataGridCellHeader from './UpDataGridCellHeader'
import {Column, Action, SortDirection} from './UpDataGrid'

export interface UpDataGridRowHeaderState {
    isSelected:boolean;
    columns:Array<Column>;
}

export interface UpDataGridRowHeaderProps {
    columns:Array<Column>;
    isSelectionEnabled:boolean;
    actions:Array<Action>;
    onSortChange?: (c:Column, d:SortDirection) => void;
    onSelectionChange? : (isSelected:boolean) => void;
}

export default class UpDataGridRowHeader extends React.Component<UpDataGridRowHeaderProps, UpDataGridRowHeaderState> {

    static defaultProps : UpDataGridRowHeaderProps = {
        isSelectionEnabled:true,
        columns:[],
        actions:[]  
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            isSelected:false,
            columns:this.props.columns
        }
    }

    onSelectionChange = (isSelected) => {
        if(this.props.onSelectionChange)
            this.props.onSelectionChange(isSelected) ;
    }

    onSortChange = (c:Column, dir:SortDirection) => {
        // Update the column state
        var columns:Array<Column> = [] ;
        var sortedColumn = c ;
        sortedColumn.sortDir = dir ;

        this.state.columns.map((value, index) => {
            value.isSorted = (c.field == value.field) ;
            if(value.isSorted)
                value.sortDir = dir ;
            else 
                value.sortDir = null ;

            columns.push(value)  ;
        });

        this.setState({columns:columns}, () => {
            if(this.props.onSortChange)
                this.props.onSortChange(sortedColumn, dir) ;
        }) ;
    }

    componentWillReceiveProps(nextProps:UpDataGridRowHeaderProps) {
        // Refresh the columns
        this.setState({isSelected: false, columns: nextProps.columns}) ;
    }

    render() {
        const selection = <UpCheckbox options={[{name:"", value:"", onChange: this.onSelectionChange}]} /> ;
        const isActionEnabled = this.props.actions && this.props.actions.length > 0 ;
        return (
            <div className="up-data-grid-header">
                {this.props.isSelectionEnabled && 
                    <UpDataGridCellHeader column={{label:selection, isSortable:false}} />
                }
                {this.props.columns.map((value, index)  => {
                    return <UpDataGridCellHeader onSortChange={this.onSortChange.bind(this)} column={value} />
                })}
                {isActionEnabled && 
                    <UpDataGridCellHeader width={`${this.props.actions.length*40}px`} column={{label:"", isSortable:false}} />
                }
            </div>
        )
    }
}