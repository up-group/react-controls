import { ActionFactory } from './UpDataGridRow';
import { Action } from './UpDataGrid/UpDataGrid.types';

export function isActionEnabled(props: {
  actions?: ActionFactory<any> | Array<Action>;
  displayRowActionsWithinCell?: boolean;
}): boolean {
  return !props.displayRowActionsWithinCell && props.actions != null;
}
