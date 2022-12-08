import * as React from 'react';

import { Action } from '../UpDataGrid/UpDataGrid.types';
import { ActionFactory } from '../UpDataGridRow/UpDataGridRow';

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
