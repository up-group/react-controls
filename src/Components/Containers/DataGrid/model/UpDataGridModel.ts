import { IconName } from 'theming/icons';
import { ICellFormatter } from '../UpDefaultCellFormatter';

export type SortDirection = 'ASC' | 'DESC';

export interface Row {
  isSelected?: boolean;
  value?: any;
}

export interface ToolTip {
  title?: JSX.Element | string;
  content: JSX.Element | string;
  icon?: IconName;
}

export interface Column {
  label: string | JSX.Element;
  field?: string;
  formatter?: ICellFormatter;
  getFormatterProps?: (value: string) => any;
  render?: ({ value: any, column: Column }) => JSX.Element;
  type?: any;
  isSortable?: boolean;
  isSorted?: boolean;
  sortDir?: SortDirection;
  tooltip?: ToolTip;
}

export interface UpDataGridState {
  rows: Array<Row>;
  columns: Array<Column>;
  page?: number;
  skip?: number;
  take?: number;
  total?: number;
  isDataFetching?: boolean;
  allRowsSelected?: boolean;
  rowsSelected?: Array<Row>;
  lastFetchedDataTime?: Date;
}

export interface Row {
  isSelected?: boolean;
  value?: any;
}

export type Method = 'GET' | 'POST';
export type PaginationPosition = 'top' | 'bottom' | 'both';

export interface UpDataGridProps extends TestableComponentProps {
  className?: string;
  columns: Array<Column>;
  rowActions?: ActionFactory<any> | Array<Action>;
  labelToDisplayRowActionsInCell?: string;
  isSelectionEnabled?: boolean;
  isPaginationEnabled?: boolean;
  paginationPosition?: PaginationPosition;
  isOddEvenEnabled?: boolean;
  isSortEnabled?: boolean;

  rowsSelected?: Array<Row>;
  lastFetchedDataTime?: Date;

  rowTemplate?: any;
  data?: Array<any>;
  idKey?: string;
  dataKey?: string;

  isDataFetching?: boolean;
  alignCells?: 'top' | 'bottom' | 'middle' | 'initial';
  textAlignCells?: 'center' | 'left' | 'right' | 'initial';
  exportCsv?: exportCsv;

  dataSource?: {
    query: string;
    method?: Method;
    entityKey?: string;
    orderParamName?: string;
    dirParamName?: string;
    skipParamName?: string;
    takeParamName?: string;
  };

  loadingMessage?: string;
  paginationProps?: Partial<UpPaginationProps>;
  injectRow?: (previous: any, next: any, colum: Column[]) => JSX.Element;
  // Event Handler
  onSortChange?: (c: Column, dir: SortDirection) => void;
  onSelectionChange?: (
    lastUpdatedRow: Row,
    dataSelected: any[],
    allRowsSelected?: Row[],
    isAllRowsSelected?: boolean
  ) => void;
  onRowClick?: (rowIndex: number, row: any) => void;
  isRowClickable?: boolean;
  getRowCustomClassName?: (rowIndex: number, row: any) => string;
  footerProps?: Partial<UpDataGridFooterProps>;
  headerProps?: Partial<UpDataGridHeaderProps>;
  displayRowActionsWithinCell?: boolean;
  onlyOneRowCanBeSelected?: boolean;
  isDataInitialized?: boolean;
  setIsDataInitializedToFalse?: () => void;
}

export interface exportCsv {
    fileName: string;
    textButton?: string;
  }  