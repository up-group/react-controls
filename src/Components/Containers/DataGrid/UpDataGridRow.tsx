import * as React from 'react'
import * as ReactDOM from 'react-dom'

import UpCheckbox from '../../Inputs/Checkbox/UpCheckBox'
import UpButton from '../../Inputs/Button/UpButton'

import UpDataGridCell from './UpDataGridCell'
import { Column, Row, Action } from './UpDataGrid'
import UpDefaultCellFormatter from './UpDefaultCellFormatter'

import shallowEqual from '../../../Common/utils/shallowEqual'

export interface UpDataGridRowState {
}

export interface UpDataGridRowProps {
    rowIndex: number;
    isSelected: boolean;
    value: any;
    columns: Array<Column>;
    actions: Array<Action>;
    isSelectionEnabled: boolean;
    onSelectionChange?: (rowIndex: number, row: any) => void;
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

        return (
            <tr className="up-data-grid-row up-data-grid-row-bordered">
                {this.props.isSelectionEnabled &&
                    <UpDataGridCell key={"cell-selection"} value={selection} column={{ label: "", formatter: formatter }} />
                }

                {this.props.columns.map((value, index) => {
                    return <UpDataGridCell key={`cell-${index}`} value={this.props.value} column={value} />
                })}

                {this.props.actions && this.props.actions.length > 0 &&
                    <UpDataGridCell key={"cell-actions"} value={this.props.value} column={{ label: "", isSortable: false }}>
                        {
                            this.props.actions.map((value, index) => {
                                return <UpButton key={`action-${index}`} tooltip={value.description} actionType={value.type} width="icon" intent={value.intent} onClick={
                                    () => {
                                        if (value.action != null) {
                                            value.action({ isSelected: this.props.isSelected, value: this.props.value });
                                        }
                                    }
                                } />
                            })
                        }
                    </UpDataGridCell>
                }
            </tr>
        )
    }
}