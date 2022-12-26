import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { style } from 'typestyle';
import classnames from 'classnames';

import UpCheckbox from '../../Inputs/Checkbox/UpCheckBox';
import UpButton from '../../Inputs/Button/UpButton';

import UpDataGridCell from './UpDataGridCell';
import { Column, Row, Action, isActionEnabled } from './UpDataGrid';
import UpDefaultCellFormatter from './UpDefaultCellFormatter';

import shallowEqual from '../../../Common/utils/shallowEqual';
import { isEmpty } from '../../../Common/utils';
import UpButtonGroup from '../../Containers/ButtonGroup';
import { UpDataGridConsumer } from './UpDataGridContext';
import { WithThemeProps } from '../../../Common/theming/types';

export interface UpDataGridRowState {}

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
  getRowCustomClassName?: (rowIndex: number, row: any) => string;
  isRowClickable?: boolean;
  isOneRowSelected?: boolean;
}

const DataGridRowStyle = (props: UpDataGridRowProps & WithThemeProps, finalActionsLength: number) =>
  style({
    ...(props.onClick ? { cursor: 'pointer' } : {}),
    ...(props.isRowClickable && finalActionsLength === 1
      ? {
          cursor: 'pointer',
          $nest: {
            '&:hover': {
              background: '#d4d4d4 !important',
            },
          },
        }
      : {}),
  });

export default class UpDataGridRow extends React.Component<UpDataGridRowProps, UpDataGridRowState> {
  static defaultProps: UpDataGridRowProps = {
    rowIndex: -1,
    isSelectionEnabled: true,
    value: {},
    isSelected: false,
    columns: [],
    actions: null,
    isRowClickable: false,
  };

  constructor(props, context) {
    super(props, context);
  }

  onSelectionChange = (event, isSelected) => {
    if (this.props.onSelectionChange) {
      this.props.onSelectionChange(this.props.rowIndex, {
        isSelected: isSelected,
        value: this.props.value,
      });
    }
  };

  shouldComponentUpdate(nextProps: UpDataGridRowProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  }

  getRowClickAction = finalActions => {
    if (this.props.onClick) {
      return () =>
        this.props.onClick &&
        this.props.onClick(this.props.rowIndex, {
          value: this.props.value,
        });
    }

    const actions = (finalActions && finalActions.filter(a => a != null)) || [];
    const actionsLength = actions.length;

    if (actionsLength === 1 && this.props.isRowClickable) {
      return () => {
        let selectedText = '';
        if (window.getSelection) {
          //Return selected text by user.
          selectedText = window.getSelection().toString();
        }
        return selectedText.length
          ? false
          : actions[0].action({
              isSelected: this.props.isSelected,
              value: this.props.value,
            });
      };
    }
  };

  render() {
    const formatter = new UpDefaultCellFormatter();
    const selection = (
      <UpCheckbox
        options={[
          {
            name: 'up-selection',
            checked: this.props.isSelected === true,
            value: true,
            onOptionChange: this.onSelectionChange,
            // ...(this.props.isOneRowSelected && !this.props.isSelected && { disabled: true })
          },
        ]}
      />
    );

    let finalActions: Array<Action> = null;

    if (this.props.actions && !Array.isArray(this.props.actions)) {
      finalActions = this.props.actions(this.props.value);
    } else if (this.props.actions != null) {
      finalActions = this.props.actions as Array<Action>;
    }

    finalActions = finalActions?.filter(
      action =>
        action !== null &&
        (action.isVisible == null || typeof action.isVisible !== 'function' || action.isVisible(this.props.value))
    );

    // render action in the first element of the array
    const renderActions = ({ rowActions, labelToDisplayRowActionsInCell, index, value }) => {
      if (labelToDisplayRowActionsInCell && value.label === labelToDisplayRowActionsInCell) {
        return rowActions;
      }
      if (!labelToDisplayRowActionsInCell && index === 0) {
        return rowActions;
      }
    };
    const customClassName =
      (this.props.getRowCustomClassName && this.props.getRowCustomClassName(this.props.rowIndex, this.props.value)) ||
      '';

    return (
      <UpDataGridConsumer>
        {({ displayRowActionsWithinCell, rowActions, labelToDisplayRowActionsInCell }) => (
          <tr
            className={classnames(
              `up-data-grid-row up-data-grid-row-bordered ${customClassName}`,
              DataGridRowStyle(this.props, finalActions && finalActions.length)
            )}
            onClick={this.getRowClickAction(finalActions)}
          >
            {this.props.isSelectionEnabled && (
              <UpDataGridCell key={'cell-selection'} value={selection} column={{ formatter, label: '' }} />
            )}

            {this.props.columns.map((value, index) => {
              return (
                <UpDataGridCell
                  actions={
                    displayRowActionsWithinCell &&
                    renderActions({
                      rowActions,
                      labelToDisplayRowActionsInCell,
                      index,
                      value,
                    })
                  }
                  key={`cell-${index}`}
                  value={this.props.value}
                  column={value}
                  render={value.render}
                />
              );
            })}

            {isActionEnabled({
              displayRowActionsWithinCell,
              actions: finalActions,
            }) && (
              <UpDataGridCell
                key={'cell-actions'}
                value={this.props.value}
                column={{
                  label: '',
                  isSortable: false,
                }}
              >
                <UpButtonGroup gutter={4}>
                  {finalActions.map((value, index) => {
                    const extraProps =
                      (value.getProps != null &&
                        typeof value.getProps === 'function' &&
                        value.getProps(this.props.value)) ||
                      {};
                    return (
                      <UpButton
                        key={`action-${index}`}
                        tooltip={{
                          content: value.description,
                          title: null,
                        }}
                        actionType={value.type}
                        iconName={value.iconName}
                        width="icon"
                        intent={value.intent}
                        borderless={value.borderless}
                        onClick={() => {
                          if (value.action != null) {
                            return value.action({
                              isSelected: this.props.isSelected,
                              value: this.props.value,
                            });
                          }
                        }}
                        additionalStyles={value.additionalStyles}
                        {...extraProps}
                      />
                    );
                  })}
                </UpButtonGroup>
              </UpDataGridCell>
            )}
          </tr>
        )}
      </UpDataGridConsumer>
    );
  }
}
