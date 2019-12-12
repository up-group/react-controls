import * as React from 'react'
import * as ReactDOM from 'react-dom'

import UpCheckbox from '../../Inputs/Checkbox/UpCheckBox'
import UpButton from '../../Inputs/Button/UpButton'

import UpDataGridCell from './UpDataGridCell'
import { Column, Row, Action } from './UpDataGrid'
import UpDefaultCellFormatter from './UpDefaultCellFormatter'

import shallowEqual from '../../../Common/utils/shallowEqual'
import { isEmpty } from '../../../Common/utils';
import UpButtonGroup from "../../Containers/ButtonGroup";

export interface UpDataGridRowState {
}

export type ActionFactory<T> = (value: T) => Array<Action>;

export interface UpDataGridRowProps {
    rowIndex: number;
    isSelected: boolean;
    value: any;
    columns: Array<Column>;
    actions: Array<Action> | ActionFactory<any>;
    isSelectionEnabled: boolean;
    onSelectionChange?: (rowIndex: number, row: any) => void;
    onClick?: (rowIndex: number, row: any) => void;
}

export default class UpDataGridRow extends React.Component<UpDataGridRowProps, UpDataGridRowState> {

    static defaultProps: UpDataGridRowProps = {
        rowIndex: -1,
        isSelectionEnabled: true,
        value: {},
        isSelected: false,
        columns: [],
        actions: []
    }

    constructor(props, context) {
        super(props, context);
    }

    onSelectionChange = (isSelected) => {
        if (this.props.onSelectionChange) {
            this.props.onSelectionChange(this.props.rowIndex, { isSelected: isSelected, value: this.props.value });
        }
    }

    shouldComponentUpdate(nextProps: UpDataGridRowProps, nextState) {
        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }

    render() {
        const formatter = new UpDefaultCellFormatter();
        const selection = <UpCheckbox options={[{ name: "up-selection", checked: this.props.isSelected === true, value: true, onOptionChange: this.onSelectionChange }]} />;
        
        let finalActions : Array<Action> = null ;
        if(this.props.actions && !Array.isArray(this.props.actions)) {
            finalActions = this.props.actions(this.props.value) ;
        } else if(this.props.actions != null) {
            finalActions = this.props.actions as Array<Action> ;
        }

        return (
            <tr className="up-data-grid-row up-data-grid-row-bordered" style={{ cursor: this.props.onClick ? 'pointer' : ''}} onClick={() => this.props.onClick && this.props.onClick(this.props.rowIndex, { value: this.props.value })}>
                {this.props.isSelectionEnabled &&
                    <UpDataGridCell key={"cell-selection"} value={selection} column={{ label: "", formatter: formatter }} />
                }
                {this.props.columns.map((value, index) => {
                    return <UpDataGridCell key={`cell-${index}`} value={this.props.value} column={value} render={value.render} />
                })}
                {!isEmpty(finalActions) &&
                    <UpDataGridCell key={"cell-actions"} value={this.props.value} column={{ label: "", isSortable: false }}>
                        <UpButtonGroup gutter={4}>
                            {
                                finalActions.map((value, index) => {
                                    return <UpButton
                                        key={`action-${index}`}
                                        tooltip={{
                                            content : value.description,
                                            title : null
                                        }}
                                        actionType={value.type}
                                        width="icon"
                                        intent={value.intent}
                                        onClick={
                                            () => {
                                                if (value.action != null) {
                                                    value.action({ isSelected: this.props.isSelected, value: this.props.value });
                                                }
                                            }
                                        }
                                    />
                                })
                            }
                        </UpButtonGroup>
                    </UpDataGridCell>
                }
            </tr>
        )
    }
}
