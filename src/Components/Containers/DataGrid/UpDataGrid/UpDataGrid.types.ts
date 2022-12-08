import { ActionType } from 'actions';
import { IconName } from '../../../../Common/theming/icons';
import { IntentType } from '../../../../Common/theming/types';
import { ICellFormatter } from '../UpDefaultCellFormatter';

export interface Action {
  type: ActionType;
  iconName?: IconName;
  intent?: IntentType;
  description: string;
  action: (row: Row) => void;
  libelle?: string;
  borderless?: boolean;
  isVisible?: (value: any) => boolean;
  getProps?: (value: any) => any;
}

export interface ToolTip {
  title?: JSX.Element | string;
  content: JSX.Element | string;
  icon?: IconName;
}

export type RenderValue = { value: any; column: Column };

export interface Column {
  label: string | JSX.Element;
  field?: string;
  formatter?: ICellFormatter;
  getFormatterProps?: (value: string) => any;
  render?: (value: RenderValue) => JSX.Element;
  type?: any;
  isSortable?: boolean;
  isSorted?: boolean;
  sortDir?: SortDirection;
  tooltip?: ToolTip;
}

export interface Row {
  isSelected?: boolean;
  value?: any;
}

export type Method = 'GET' | 'POST';
export type PaginationPosition = 'top' | 'bottom' | 'both';

export interface exportCsv {
  fileName: string;
  textButton?: string;
}

export type SortDirection = 'ASC' | 'DESC';
