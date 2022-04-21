import * as React from 'react';
import { Action } from './UpDataGrid';
import { ActionFactory } from './UpDataGridRow';

const UpDataGridContext = React.createContext<{
  displayRowActionsWithinCell: boolean;
  rowActions: ActionFactory<any> | Array<Action>;
  labelToDisplayRowActionsInCell: string;
}>({
  displayRowActionsWithinCell: false,
  rowActions: [],
  labelToDisplayRowActionsInCell: undefined,
});

export const UpDataGridProvider = UpDataGridContext.Provider;
export const UpDataGridConsumer = UpDataGridContext.Consumer;
