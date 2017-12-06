import * as React from 'react'
import * as ReactDOM from 'react-dom'

import UpSvgIcon from '../../Display/SvgIcon'

import { SortDirection, Column } from './UpDataGrid'

import * as classnames from 'classnames'

export interface UpDataGridCellHeaderState {
    isSorted:boolean;
    sortDirection: SortDirection
}

export interface UpDataGridCellHeaderProps {
    defaultSort?:SortDirection;
    onSortChange?: (c:Column, d:SortDirection) => void;
    column?:Column;
    width?: string;
}

export default class UpDataGridCellHeader extends React.Component<UpDataGridCellHeaderProps, UpDataGridCellHeaderState> {

    static defaultProps : UpDataGridCellHeaderProps = {
        
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            isSorted:false,
            sortDirection:null
        }
    }

    onCellClick = () => {
        if(this.props.column.isSortable===true) {
            this.setState({isSorted: true, sortDirection : this.state.sortDirection == "ASC" ?  "DESC" : "ASC" }, () => {
                this.props.onSortChange(this.props.column, this.state.sortDirection);
            }) ;
        }  
    }

    componentWillReceiveProps(newProps: UpDataGridCellHeaderProps) {
        if(newProps.column.isSorted !== this.state.isSorted) {
            this.setState({isSorted: newProps.column.isSorted, sortDirection : (newProps.column.isSorted) ? (this.state.sortDirection==null)?"DESC":"ASC" : null }) ;         
        }
    }

    render() {
        let sortIcon = null;
        if(this.state.sortDirection=="DESC") {
            sortIcon = "sort-desc" ;
        } else if(this.state.sortDirection=="ASC") {
            sortIcon = "sort-asc" ;
        }
        var width = "auto" ;
        if(this.props.width) {
            width = this.props.width ;
        }
        return (
            <th style={{width: width}} className={classnames("up-data-grid-header-cell", (this.props.column.isSortable)?'up-data-grid-sortable':'')}  onClick={this.onCellClick}>
                {this.props.column.label}
                {this.state.isSorted &&  sortIcon != null &&
                    <UpSvgIcon width={10} iconName={sortIcon} />
                }
            </th>
        )
    }
}