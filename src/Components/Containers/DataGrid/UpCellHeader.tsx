import * as React from 'react'
import * as ReactDOM from 'react-dom'

import UpSvgIcon from '../../Display/SvgIcon'

import { SortDirection, Column } from './UpDataGrid'

export interface UpCellHeaderState {
    isSorted:boolean;
    sortDirection: SortDirection
}

export interface UpCellHeaderProps {
    isSortable?:boolean;
    defaultSort?:SortDirection;
    onSortChange?: (c:Column, d:SortDirection) => void;
    column?:Column;
}

export default class UpCellHeader extends React.Component<UpCellHeaderProps, UpCellHeaderState> {

    static defaultProps : UpCellHeaderProps = {
        isSortable:false
    }

    constructor(props, context) {
        super(props, context);
    }

    onCellClick = () => {
        this.setState({isSorted: true, sortDirection : this.state.sortDirection || this.state.sortDirection == "DESC" ?  "ASC" : "DESC" }) ;
        this.props.onSortChange(this.props.column, this.state.sortDirection) ;    
    }

    componentWillReceiveProps(newProps: UpCellHeaderProps) {
        if(newProps) {
            this.setState({isSorted: false, sortDirection : null }) ;         
        }
    }

    render() {
        let sortIcon = null;
        if(this.state.sortDirection=="DESC") {
            sortIcon = "sort-desc" ;
        } else if(this.state.sortDirection=="ASC") {
            sortIcon = "sort-asc" ;
        }

        return (
            <div className="up-data-grid-header-cell" onClick={this.onCellClick}>
                {this.state.isSorted && 
                    <UpSvgIcon type={sortIcon} />
                }
                {this.props.column.label}
            </div>
        )
    }
}