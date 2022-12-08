import { ActionType } from '../../../Inputs/Button/types';
import { IntentType } from '../../../../Common/theming/types';

export interface ActionDataGrid {
  label: string;
  actionType?: ActionType;
  onClick?: (rows: []) => Promise<any>;
}

export interface ActionsDataGrid {
  groupLabel: string;
  validationLabel: string;
  intent?: IntentType;
  actions?: ActionDataGrid[];
  confirmationMessage?: string;
}
