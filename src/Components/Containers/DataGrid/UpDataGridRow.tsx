import * as React from 'react'
import * as ReactDOM from 'react-dom'

import UpCheckbox from '../../Inputs/Checkbox'
import UpButton from '../../Inputs/Button'
import {IntentType} from '../../../Common/theming/types'

import UpDataGridCell from './UpDataGridCell'
import {Column, Action} from './UpDataGrid'
import UpDefaultCellFormatter from './UpDefaultCellFormatter'

export interface UpDataGridRowState {
    isSelected:boolean;
}

export interface UpDataGridRowProps {
    item: any;
    columns:Array<Column>;
    actions:Array<Action>;
    isSelectionEnabled:boolean;
}

export default class UpDataGridRow extends React.Component<UpDataGridRowProps, UpDataGridRowState> {

    static defaultProps : UpDataGridRowProps = {
        isSelectionEnabled:true,
        item:{},
        columns:[],
        actions:[]
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            isSelected:false
        }
    }

    onSelectionChange = (event) => {
        console.log(event);
    }

    onActionClick = (item:any, role:string) => {
        console.log(item, role);
    }

    render() {
        const formatter = new UpDefaultCellFormatter() ;
        const selection = <UpCheckbox options={[{name:"up-selection", checked:this.props.item.isSelected===true, value:true, onChange: this.onSelectionChange}]} /> ;
        
        return (
            <div className="up-data-grid-row">
                {this.props.isSelectionEnabled && 
                    <UpDataGridCell item={{value : selection}} formatter={formatter} />
                }

                {this.props.columns.map((value, index)  => {
                    return <UpDataGridCell item={this.props.item} column={value} formatter={formatter} />
                })}

                {this.props.actions && this.props.actions.length > 0 &&
                    this.props.actions.map((value, index)  => {
                        return <UpButton tooltip={value.description} ref={`btn-${index}`} actionType={value.type} width="icon" intent={value.intent} onClick={this.onActionClick.bind(this, value.role, this.props.item)} />
                    }) 
                }
            </div>
        )
    }
}