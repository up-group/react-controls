import React, { useState } from 'react';
import classnames from 'classnames';
import UpCheckbox from '../../Inputs/Checkbox/UpCheckBox';
import UpButton from '../../Inputs/Button/UpButton';
import UpDataGridCell from './UpDataGridCell';
import { Column, Action, isActionEnabled } from './UpDataGrid';
import UpDefaultCellFormatter from './UpDefaultCellFormatter';
import UpButtonGroup from '../../Containers/ButtonGroup';
import { UpDataGridConsumer } from './UpDataGridContext';
import { getDataGridRowStyle } from './UpDataGridRow.style';
import { findDetailAction, hasDetailAction, isDetailAction } from './UpDataGridRow.helper';
import { UpDataGridDetails } from './UpDataGridDetails';

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
  isRowSelectable?: boolean;
  isOneRowSelected?: boolean;
}

const UpDataGridRow: React.VFC<UpDataGridRowProps> = props => {
  const {
    columns = [],
    isSelected = false,
    isSelectionEnabled = true,
    isRowSelectable,
    onSelectionChange,
    rowIndex = -1,
    value = {},
    actions = null,
    onClick,
    isRowClickable = false,
    getRowCustomClassName,
  } = props;

  const [detailsOpened, setDetailsOpened] = useState(false);

  const formatter = new UpDefaultCellFormatter();

  const handleSelectionChange = (event, isSelected): void => {
    onSelectionChange?.(rowIndex, {
      isSelected,
      value,
    });
  };

  const getRowClickAction = finalActions => {
    if (onClick) {
      return () =>
        onClick &&
        onClick(rowIndex, {
          value,
        });
    }

    const filteredActions = (finalActions && finalActions.filter(a => a != null)) || [];
    const actionsLength = filteredActions.length;

    if (actionsLength === 1 && isRowClickable) {
      return () => {
        let selectedText = '';
        if (window.getSelection) {
          //Return selected text by user.
          selectedText = window.getSelection().toString();
        }
        return selectedText.length
          ? false
          : filteredActions[0].action({
              isSelected,
              value,
            });
      };
    }
  };

  const selection = (
    <UpCheckbox
      options={[
        {
          name: 'up-selection',
          checked: isSelected === true,
          disabled: isRowSelectable !== undefined && !isRowSelectable,
          value: true,
          onOptionChange: handleSelectionChange,
        },
      ]}
    />
  );

  let finalActions: Array<Action> = null;

  if (actions && !Array.isArray(actions)) {
    finalActions = actions(value);
  } else if (actions != null) {
    finalActions = actions as Array<Action>;
  }

  finalActions = finalActions?.filter(
    action =>
      action !== null && (action.isVisible == null || typeof action.isVisible !== 'function' || action.isVisible(value))
  );

  // render action in the first element of the array
  const renderActions = ({ rowActions, labelToDisplayRowActionsInCell, index, column }) => {
    if (labelToDisplayRowActionsInCell && column.label === labelToDisplayRowActionsInCell) {
      return rowActions;
    }
    if (!labelToDisplayRowActionsInCell && index === 0) {
      return rowActions;
    }
  };

  const customClassName = (getRowCustomClassName && getRowCustomClassName(rowIndex, value)) || '';

  const hasDetails = hasDetailAction(finalActions);

  const finalRowStyles = classnames(
    `up-data-grid-row up-data-grid-row-bordered ${customClassName}`,
    getDataGridRowStyle(props, finalActions && finalActions.length)
  );

  return (
    <UpDataGridConsumer>
      {({ displayRowActionsWithinCell, rowActions, labelToDisplayRowActionsInCell }) => (
        <>
          <tr className={finalRowStyles} onClick={getRowClickAction(finalActions)}>
            {isSelectionEnabled && (
              <UpDataGridCell key={'cell-selection'} value={selection} column={{ formatter, label: '' }} />
            )}

            {columns.map((column, index) => {
              return (
                <UpDataGridCell
                  actions={
                    displayRowActionsWithinCell &&
                    renderActions({
                      rowActions,
                      labelToDisplayRowActionsInCell,
                      index,
                      column,
                    })
                  }
                  key={`cell-${index}`}
                  value={value}
                  column={column}
                  render={column.render}
                />
              );
            })}

            {isActionEnabled({
              displayRowActionsWithinCell,
              actions: finalActions,
            }) && (
              <UpDataGridCell
                key={'cell-actions'}
                value={value}
                column={{
                  label: '',
                  isSortable: false,
                }}
              >
                <UpButtonGroup gutter={4}>
                  {finalActions.map((rowAction, index) => {
                    const extraProps =
                      (rowAction.getProps != null &&
                        typeof rowAction.getProps === 'function' &&
                        rowAction.getProps(value)) ||
                      {};

                    return (
                      <UpButton
                        key={`action-${index}`}
                        tooltip={{
                          content: rowAction.description,
                          title: null,
                        }}
                        actionType={rowAction.type}
                        iconName={rowAction.iconName}
                        width="icon"
                        intent={rowAction.intent}
                        borderless={rowAction.borderless}
                        onClick={(): void => {
                          if (rowAction.action != null) {
                            if (isDetailAction(rowAction)) {
                              return setDetailsOpened(!detailsOpened);
                            }
                            return rowAction.action({
                              isSelected,
                              value,
                            });
                          }
                        }}
                        borderColor={rowAction.borderColor}
                        backgroundColor={rowAction.backgroundColor}
                        hoverBackgroundColor={rowAction.hoverBackgroundColor}
                        {...extraProps}
                      />
                    );
                  })}
                </UpButtonGroup>
              </UpDataGridCell>
            )}
          </tr>
          {hasDetails && detailsOpened && (
            <tr className={finalRowStyles}>
              <td colSpan={100}>
                <UpDataGridDetails details={findDetailAction(finalActions)} />
              </td>
            </tr>
          )}
        </>
      )}
    </UpDataGridConsumer>
  );
};

export default UpDataGridRow;
