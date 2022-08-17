import * as React from 'react';
import $ from 'jquery';
import classnames from 'classnames';
import { media, style } from 'typestyle';

import axios from 'axios';

import UpPagination, { UpPaginationProps } from './UpPagination';
import UpDataGridRowHeader from './UpDataGridRowHeader';
import UpDataGridRow, { ActionFactory } from './UpDataGridRow';
import { ICellFormatter } from './UpDefaultCellFormatter';

import UpLoadingIndicator from '../../Display/LoadingIndicator';
import UpButton from '../../Inputs/Button/UpButton';

import { IntentType, WithThemeProps } from '../../../Common/theming/types';
import { ActionType } from '../../../Common/actions';
import UpDefaultTheme, { withTheme } from '../../../Common/theming';
import UpDataGridFooter, { UpDataGridFooterProps } from './UpDataGridFooter';
import UpDataGridHeader, { UpDataGridHeaderProps } from './UpDataGridHeader';

import * as _ from 'lodash';
import { UpDataGridProvider } from './UpDataGridContext';
import { getTestableComponentProps, TestableComponentProps } from '../../../Common/utils/types';
import { DeviceSmartphones } from '../../../Common/utils/device';
import { IconName } from '../../../Common/theming/icons';
import { isEmpty } from '../../../Common/utils';

const WrapperDataGridStyle = style(
  {
    position: 'relative',
  },
  media(DeviceSmartphones, {
    $nest: {
      '& .up-loading-indicator': {
        overflowX: 'auto',
      },
    },
  })
);

const CellInnerElementStyle = {
  marginTop: '0.3em',
};

export function isActionEnabled(props: {
  actions?: ActionFactory<any> | Array<Action>;
  displayRowActionsWithinCell?: boolean;
}): boolean {
  return !props.displayRowActionsWithinCell && props.actions != null;
}

const DataGridStyle = (props: UpDataGridProps & WithThemeProps) =>
  style(
    {
      width: '100%',
      borderRadius: props.theme.borderRadius,
      borderSpacing: 0,
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: props.theme.colorMap.defaultBorder,
      color: props.theme.colorMap.darkGray5,
      fontSize: '14px',
      $nest: {
        '& .up-data-grid-header': {
          backgroundColor: 'white',
          backgroundRepeat: 'repeat-x',
          fontWeight: 700,
          fontSize: '12px',
        },
        '& .up-data-grid-header .up-checkbox': {
          marginTop: '8px',
          marginBottom: '8px',
          marginLeft: '7px',
        },
        '& .up-data-grid-body': {
          background: 'white',
        },
        '& .up-selection': {
          width: '0.2em',
        },
        '& .up-display-label, & .up-display-value': CellInnerElementStyle,
        '& .up-data-grid-header-cell': {
          textAlign: 'left',
          padding: '8px',
          paddingLeft: '14px',
          borderCollapse: 'collapse',
          borderColor: 'transparent',
          borderRadius: props.theme.borderRadius,
        },
        '& .up-data-grid-header-cell-label': {
          fontSize: '14px',
          color: props.theme.colorMap.grey1,
        },
        '& .up-data-grid-header-cell.up-data-grid-header-cell-selection': {
          width: '32px',
          paddingLeft: '8px',
        },
        '& .up-data-grid-header-cell.up-data-grid-header-cell-selection .up-checkbox': {
          marginLeft: '1px',
        },
        '& .up-data-grid-cell': {
          padding: '16px',
          position: 'relative',
          verticalAlign: props.alignCells,
          textAlign: props.textAlignCells,
          $nest: {
            '& .up-buttons-wrapper': {
              justifyContent:
                props.textAlignCells === 'center'
                  ? 'center'
                  : props.textAlignCells === 'left'
                  ? 'flex-start'
                  : props.textAlignCells === 'right'
                  ? 'flex-end'
                  : 'normal',
            },
            '& .up-badge': {
              padding: '4px 6px',
            },
          },
          //width:'100%'
        },
        '& .up-data-grid-cell .up-checkbox .up-control-indicator::before': {
          left: '0px',
        },
        '& .up-data-grid-cell .up-checkbox': {
          marginTop: '0 !important',
          display: 'inline-block',
        },
        '& .up-data-grid-cell .row-actions': {
          position: 'absolute',
          display: 'none',
          width: '300px',
          bottom: '3px',
          justifyContent: 'space-between',
          zIndex: 1,
        },
        '& .up-data-grid-cell .row-action': {
          color: props.theme.colorMap.primary,
          cursor: 'pointer',
        },
        '& .up-data-grid-cell .row-action:hover, & .up-data-grid-cell .row-action-delete:hover': {
          textDecoration: 'underline',
        },
        '& .up-data-grid-cell .row-action-delete': {
          color: props.theme.colorMap.errorActive,
          cursor: 'pointer',
        },
        '& .up-data-grid-row': {
          verticalAlign: 'top',
        },
        '& .up-data-grid-row:hover .row-actions': {
          display: 'flex',
        },
        '& .up-data-grid-row-bordered': {
          $nest: {
            '.up-data-grid-cell': {
              borderTop: `1px solid ${props.theme.colorMap.defaultBorder}`,
              borderCollapse: 'collapse',
            },
          },
        },
        '& .up-data-grid-row-bordered:last-child': {
          $nest: {
            '.up-data-grid-cell': {
              border: '0',
              borderRadius: props.theme.borderRadius,
            },
          },
        },
        '& .up-data-grid-row-borderless': {
          $nest: {
            '.up-data-grid-cell': {
              border: '0',
            },
          },
        },
        '& .up-data-grid-row-selected': {
          $nest: {
            '& .up-data-grid-cell': {
              borderTop: `0.1em solid ${props.theme.colorMap.primaryDark}`,
              borderBottom: `0.1em solid ${props.theme.colorMap.primaryDark}`,
              backgroundColor: props.theme.colorMap.primary,
              color: props.theme.colorMap.primaryFg,
            },
          },
        },
        '& .up-data-grid-sortable': {
          cursor: 'pointer',
        },
      },
    },
    media(DeviceSmartphones, {
      $nest: {
        '& .up-data-grid-header-cell-label': {
          whiteSpace: 'nowrap',
        },
      },
    })
  );

export interface Action {
  type: ActionType;
  iconName?: IconName;
  intent?: IntentType;
  description: string;
  action: (row: Row) => void;
  libelle?: string;
  borderless?: boolean;
  isVisible?: (value: unknown) => boolean;
  getProps?: (value: unknown) => unknown;
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
  rowTemplate?: any;
  data?: Array<any>;
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
    lastChangeRow: Row,
    seletectedRow: Row[],
    allSelectedRows?: Row[],
    allRows?: Row[],
    isFromProps?: boolean
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

export interface UpDataGridState {
  data: Array<Row>;
  columns: Array<Column>;
  page?: number;
  skip?: number;
  take?: number;
  total?: number;
  isDataFetching?: boolean;
  allRowSelected?: boolean;
  selectedData?: Array<Row>;
}

export type SortDirection = 'ASC' | 'DESC';

class UpDataGrid extends React.Component<UpDataGridProps & WithThemeProps, UpDataGridState> {
  static defaultProps: UpDataGridProps & WithThemeProps = {
    columns: [],
    rowActions: null,
    dataKey: 'Entity',
    labelToDisplayRowActionsInCell: '',
    paginationPosition: 'top',
    isSelectionEnabled: false,
    isPaginationEnabled: false,
    isOddEvenEnabled: true,
    isSortEnabled: true,
    theme: UpDefaultTheme,
    alignCells: 'initial',
    textAlignCells: 'initial',
    loadingMessage: 'Chargement en cours',
    paginationProps: {
      takes: [
        { id: 10, text: '10' },
        { id: 20, text: '20' },
        { id: 50, text: '50' },
        { id: 100, text: '100' },
        { id: 200, text: '200' },
        { id: 500, text: '500' },
      ],
    },
  };

  constructor(props, context) {
    super(props, context);
    this.fetchData = this.fetchData.bind(this);
    this.handleData = this.handleData.bind(this);

    const data = this.props.data as Array<any>;
    const columns: Array<Column> = this.props.columns;
    const _state = {
      data: [],
      selectedData: [],
      isDataFetching: false,
      columns: columns, //this.prepareColumns(columns),
      skip: this.props.paginationProps.skip || 0,
      take: this.props.paginationProps.take || 50,
      page: this.props.paginationProps.page || 1,
      total: this.props.paginationProps.total,
      allRowSelected: false,
    };
    if (this.props.data != null) {
      const rows = this.mapDataToRow(data);
      _state.data = rows;
      _state.selectedData = rows.filter(s => s.isSelected);
    }
    this.state = _state;
  }

  componentDidMount(): void {
    if (this.props.dataSource != undefined) {
      this.fetchData();
    }
  }

  isSelectedRowData = (id): boolean => this.state.selectedData.some(data => data.value.id === id);

  static isRow = (obj: any): obj is Row => 'value' in obj && 'isSelected' in obj;

  static isRowArray = (arg: any): arg is Row[] => Array.isArray(arg) && arg.every(item => UpDataGrid.isRow(item));

  mapDataToRow = (data: Array<any>): Array<Row> => {
    if (UpDataGrid.isRowArray(data)) return data;
    const rows: Array<Row> = [];
    data.map(value => {
      rows.push({
        isSelected: this.state && this.state.allRowSelected,
        value: value,
      });
    });

    return rows;
  };

  handleData = data => {
    let sortedColumn: Column = null;
    this.state.columns.map(value => {
      if (value.isSorted) {
        sortedColumn = value;
      }
    });
    const dataKey = this.props.dataKey;

    let rows: Array<Row> = [];
    let total = 0;
    if (data.Count != null) {
      total = data.Count;
      if (dataKey != null) {
        data = data[dataKey];
      }
    } else {
      total = data.length;
    }
    if (data != null) {
      rows = this.mapDataToRow(data);

      if (rows.length == total && this.state.take < total) {
        // Internal sort
        if (sortedColumn) {
          rows.sort(function (x, y) {
            if (sortedColumn.sortDir == 'ASC')
              return x.value[sortedColumn.field] === y.value[sortedColumn.field]
                ? 0
                : x.value[sortedColumn.field] > y.value[sortedColumn.field]
                ? 1
                : -1;
            else
              return x.value[sortedColumn.field] === y.value[sortedColumn.field]
                ? 0
                : x.value[sortedColumn.field] > y.value[sortedColumn.field]
                ? -1
                : 1;
          });
        }
        // Internal pagination
        rows = rows.slice(this.state.skip, this.state.skip + this.state.take);
      }
    }

    const addedRows = rows
      .filter(r => r.isSelected)
      .filter(r => !this.state.selectedData.some(d => d.value.id === r.value.id));
    const selectedData = [...this.state.selectedData, ...addedRows];
    this.setState({
      data: rows,
      selectedData,
      total: total,
      isDataFetching: false,
    });
  };

  fetchData = () => {
    this.setState({ isDataFetching: true });
    let sortedColumn: Column = null;
    this.state.columns.map((value, index) => {
      if (value.isSorted) {
        sortedColumn = value;
      }
    });

    const dataKey = this.props.dataKey;

    const orderParamName = this.props.dataSource.orderParamName || 'Order';
    const dirParamName = this.props.dataSource.dirParamName || 'Dir';
    const skipParamName = this.props.dataSource.skipParamName || 'Skip';
    const takeParamName = this.props.dataSource.takeParamName || 'Take';
    const self = this;
    if (this.props.dataSource.method === 'POST') {
      const params = {
        takeParamName: this.state.take,
        skipParamName: this.state.skip,
      };

      if (sortedColumn != null) {
        params[orderParamName] = sortedColumn.field;
        params[dirParamName] = sortedColumn.sortDir;
      }

      axios
        .post(`${this.props.dataSource.query}`)
        .then(response => {
          const data = response.data;
          self.handleData(data);
        })
        .catch(reason => {
          //TODO : handle error message
          this.setState({ isDataFetching: false });
        });
    } else {
      let query = `${this.props.dataSource.query}?${takeParamName}=${this.state.take}&${skipParamName}=${this.state.skip}`;
      if (sortedColumn != null) {
        query = `${query}&${orderParamName}=${sortedColumn.field}&${dirParamName}=${sortedColumn.sortDir}`;
      }
      axios
        .get(query)
        .then(response => {
          const data = response.data;
          self.handleData(data);
        })
        .catch(reason => {
          //TODO : handle error message
          this.setState({ isDataFetching: false });
        });
    }
  };

  getSelectedRows = () => {
    if (this.props.isSelectionEnabled) {
      return null;
    }

    return this.state.data.filter(r => r.isSelected === true);
  };

  onPageChange = (page: number, take: number, skip: number) => {
    if (this.props.paginationProps.onPageChange) this.props.paginationProps.onPageChange(page, take, skip);

    this.setState({ page, take, skip }, () => {
      if (this.props.dataSource !== undefined) {
        this.fetchData();
      }
    });
  };

  get seletectedRow() {
    if (this.state.data == null) {
      return [];
    }
    return this.state.data
      .filter(value => {
        if (value.isSelected === true) {
          return true;
        }
        return false;
      })
      .map(value => {
        return value.value;
      });
  }

  selectedRowsDataWithAlsoTheCurrentOne = (currentRow: Row) => {
    const idRow = currentRow.value.id;
    const isRowSelected = currentRow.isSelected;

    //if onlyOneRowCanBeSelected, return just one element
    if (this.props.onlyOneRowCanBeSelected) {
      return isRowSelected ? [currentRow] : [];
    }

    return isRowSelected
      ? [...this.state.selectedData, currentRow]
      : this.state.selectedData.filter(data =>
          idRow !== undefined ? data.value.id !== idRow : !_.isEqual(currentRow.value, data.value)
        );
  };

  isAllRowsSelectedWithAlsoTheCurrentOne = (currentRow: Row) => {
    //Do not check if the "all rows checkbox" must be selected in the case of a single selectable field.
    if (this.props.onlyOneRowCanBeSelected) return;

    return this.isAllRowSelected;
  };

  get isAllRowSelected() {
    return !isEmpty(this.state.data) && this.state.data.every(d => d.isSelected);
  }

  onRowSelectionChange = (rowKey: number, currentRow: Row) => {
    const rows = this.state.data;

    //Disable all items before choosing another
    if (this.props.onlyOneRowCanBeSelected) {
      rows.forEach(item => (item.isSelected = false));
    }

    rows[rowKey] = currentRow;

    this.setState(
      {
        data: rows,
        selectedData: this.selectedRowsDataWithAlsoTheCurrentOne(currentRow),
        allRowSelected: this.isAllRowsSelectedWithAlsoTheCurrentOne(currentRow),
      },
      () => {
        if (this.props.onSelectionChange) {
          this.props.onSelectionChange(currentRow, this.seletectedRow, this.state.selectedData, rows, false);
        }
      }
    );
  };

  onSelectionAllChange = (): void => {
    const rows: Array<Row> = this.state.data.map(row => ({
      isSelected: !this.state.allRowSelected,
      value: row.value,
    }));

    const addedRows = rows
      .filter(r => r.isSelected)
      .filter(r => !this.state.selectedData.map(d => d.value.id).includes(r.value.id));

    let selectedData = [...this.state.selectedData, ...addedRows];
    if (this.state.allRowSelected) {
      selectedData = selectedData.filter(s => !this.state.data.some(d => d.value.id === s.value.id));
    }
    this.setState(
      {
        selectedData,
        data: rows,
        allRowSelected: !this.state.allRowSelected,
      },
      () => {
        if (this.props.onSelectionChange) {
          this.props.onSelectionChange(null, this.seletectedRow, this.state.selectedData, rows, false);
        }
      }
    );
  };

  onSortChange = (c: Column, dir: SortDirection): void => {
    if (this.props.onSortChange) {
      this.props.onSortChange(c, dir);
    }
    // Update the column state
    const columns: Array<Column> = [];
    this.state.columns.map(value => {
      if (c.field == value.field) {
        columns.push(c);
      } else {
        value.isSorted = false;
        value.sortDir = null;
        columns.push(value);
      }
    });
    this.setState({ columns: columns }, () => {
      if (this.props.dataSource != undefined) {
        this.fetchData();
      }
    });
  };

  componentWillReceiveProps(nextProps: UpDataGridProps): void {
    let data = this.state.data;
    const { isDataInitialized } = this.props;

    const currentState = data.map(v => {
      return v.value;
    });

    const hasSameData = _.isEqual(currentState, nextProps.data);

    if (this.props.dataSource == null && hasSameData === false) {
      data = nextProps.data != null ? this.mapDataToRow(nextProps.data) : nextProps.data;
    }

    const addedRows = data
      .filter(r => r.isSelected)
      .filter(r => !this.state.selectedData.some(d => d.value.id === r.value.id));

    let selectedData = [...this.state.selectedData, ...addedRows];

    //Uncheck all checkboxes after a form reset. Restore the table to its initial state.
    if (isDataInitialized) {
      data = data.map(v => ({
        isSelected: false,
        value: { ...v.value },
      }));
      selectedData = [];
    }

    const newState: UpDataGridState = {
      data: data,
      columns: nextProps.columns, //(nextProps.columns != null) ? this.prepareColumns(nextProps.columns) : nextProps.columns,
      total: nextProps.paginationProps.total,
      isDataFetching: nextProps.isDataFetching,
      selectedData: selectedData,
      allRowSelected: !isEmpty(data) && data.every(d => d.isSelected),
    };

    if (nextProps.paginationProps.skip != null) {
      newState.skip =
        nextProps.paginationProps.skip > nextProps.paginationProps.total ? 0 : nextProps.paginationProps.skip;
      newState.take = nextProps.paginationProps.take;
      newState.page =
        (nextProps.paginationProps.page - 1) * nextProps.paginationProps.take > nextProps.paginationProps.total
          ? 1
          : nextProps.paginationProps.page;
    }

    this.setState(newState, () => {
      if (hasSameData === false) {
        if (this.props.onSelectionChange) {
          this.props.onSelectionChange(null, [], this.state.selectedData, data, true);
        }
      }
    });
  }

  render() {
    const { skip, take, total, onPageChange, ...otherProps } = this.props.paginationProps;

    const pagination = (
      <div className={classnames('pagination-container')}>
        <UpPagination
          skip={this.state.skip}
          take={this.state.take}
          total={this.state.total}
          onPageChange={this.onPageChange.bind(this)}
          {...otherProps}
        />
      </div>
    );
    // const toolbar = <UpUpDataGridToolbar />;
    const RowTemplate = this.props.rowTemplate;

    let oddEvenStyle = null;
    if (this.props.isOddEvenEnabled) {
      oddEvenStyle = style({
        $nest: {
          '& .up-data-grid-row:nth-child(even)': {
            background: '#FFF',
          },
          '& .up-data-grid-row:nth-child(odd)': {
            background: '#f5f5f5',
          },
        },
      });
    }
    let columns = this.state.columns;
    if (this.props.isSortEnabled == false) {
      const newUnsortableColumns: Array<Column> = [];
      columns.map((value, index) => {
        value.isSortable = false;
        newUnsortableColumns.push(value);
      });
      columns = newUnsortableColumns;
    }

    const rows = [];

    for (let index = 0; index < this.state.data.length; index++) {
      const value = this.state.data[index];

      if (RowTemplate) {
        rows.push(
          <RowTemplate
            key={`row-${index}`}
            isSelectionEnabled={this.props.isSelectionEnabled}
            actions={this.props.rowActions}
            columns={columns}
            item={value}
          />
        );
      } else {
        rows.push(
          <UpDataGridRow
            key={`row-${index}`}
            rowIndex={index}
            isSelectionEnabled={this.props.isSelectionEnabled}
            actions={this.props.rowActions}
            columns={columns}
            value={value.value}
            isSelected={value.isSelected}
            onSelectionChange={this.onRowSelectionChange}
            onClick={this.props.onRowClick}
            getRowCustomClassName={this.props.getRowCustomClassName}
            isRowClickable={this.props.isRowClickable}
            isOneRowSelected={this.props.onlyOneRowCanBeSelected && this.state.selectedData.length === 1 ? true : false}
          />
        );
      }

      if (this.props.injectRow != null) {
        const previous = value;
        const next = this.state.data[index + 1];
        const rowToInject = this.props.injectRow(previous, next, columns);
        if (rowToInject != null) {
          rows.push(
            <tr className="up-data-grid-row up-data-grid-row-bordered" key={`row-custom-${index}`}>
              <td className="up-data-grid-cell" colSpan={columns.length}>
                {rowToInject}
              </td>
            </tr>
          );
        }
      }
    }

    const providerValues = {
      displayRowActionsWithinCell: this.props.displayRowActionsWithinCell,
      rowActions: this.props.rowActions,
      labelToDisplayRowActionsInCell: this.props.labelToDisplayRowActionsInCell,
    };

    const newFooterProps: UpDataGridFooterProps = {
      ...this.props.footerProps,
      ...(this.props.footerProps &&
        this.props.footerProps.actionsDataGrid && {
          actionsDataGrid: {
            ...this.props.footerProps.actionsDataGrid,
            actions: this.props.footerProps.actionsDataGrid.actions.map(action => ({
              ...action,
              onClick: rows => {
                const promise = action.onClick(rows);

                return Promise.resolve(promise).then(data => {
                  //Empty the selectData and uncheck all checkboxes if the request is successful
                  this.setState({
                    selectedData: [],
                    data: this.state.data.map(row => ({
                      ...row,
                      isSelected: false,
                    })),
                  });
                });
              },
            })),
          },
        }),
    };
    return (
      <UpDataGridProvider value={providerValues}>
        <div
          className={classnames('up-data-grid-container', WrapperDataGridStyle, this.props.className)}
          {...getTestableComponentProps(this.props)}
        >
          <UpDataGridHeader {...this.props.headerProps} buttonExport={this.btnExportCsv} />
          {this.props.isPaginationEnabled &&
            this.props.paginationPosition != 'bottom' &&
            !this.state.isDataFetching &&
            pagination}
          <UpLoadingIndicator
            displayMode={'zone'}
            message={this.props.loadingMessage}
            isLoading={this.state.isDataFetching}
            width={320}
            height={240}
          >
            <>
              <table
                ref={r => {
                  this.refTable = r;
                }}
                className={classnames('up-data-grid-main', DataGridStyle(this.props))}
              >
                <UpDataGridRowHeader
                  isSelectionEnabled={this.props.isSelectionEnabled}
                  onSelectionChange={this.onSelectionAllChange.bind(this)}
                  onSortChange={this.onSortChange.bind(this)}
                  actions={this.props.rowActions}
                  columns={columns}
                  displayRowActionsWithinCell={this.props.displayRowActionsWithinCell}
                  textAlignCells={this.props.textAlignCells}
                  isAllDataChecked={this.isAllRowSelected}
                  isSelectionAllEnabled={!this.props.onlyOneRowCanBeSelected}
                />
                <tbody className={classnames('up-data-grid-body', oddEvenStyle)}>{rows}</tbody>
              </table>
            </>
          </UpLoadingIndicator>
          <UpDataGridFooter
            {...newFooterProps}
            isPaginationEnabled={this.props.isPaginationEnabled && this.props.paginationPosition != 'top'}
            pagination={pagination}
            data={this.state.selectedData}
            theme={this.props.theme}
          />
        </div>
      </UpDataGridProvider>
    );
  }

  refTable: HTMLTableElement = null;

  get isExportCsvEnable() {
    if (this.props.data == null || this.props.data.length === 0) {
      return false;
    }
    return this.props.exportCsv != null;
  }

  get btnExportCsv() {
    if (this.isExportCsvEnable === false) {
      return null;
    }

    if (this.props.exportCsv.textButton == null) {
      return <UpButton onClick={this.onExport} actionType={'download'} />;
    }

    return <UpButton onClick={this.onExport}> {this.props.exportCsv.textButton}</UpButton>;
  }

  onExport = a => {
    this.exportTableToCSV(this.refTable, this.props.exportCsv.fileName, true);
  };

  private exportTableToCSV(table: HTMLTableElement, filename, header) {
    const csv = this.getCsvFromTable(table, header);

    const ieVersion = (function () {
      let rv = -1;
      if (navigator.appName == 'Microsoft Internet Explorer') {
        const ua = navigator.userAgent;
        const re = new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})');
        if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
      } else if (navigator.appName == 'Netscape') {
        const ua = navigator.userAgent;
        const re = new RegExp('Trident/.*rv:([0-9]{1,}[.0-9]{0,})');
        if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
      }
      return rv;
    })();

    if (ieVersion != -1) {
      if (ieVersion > 9) {
        const bytes = new Array(csv.length);
        for (let i = 0; i < csv.length; i++) {
          bytes[i] = csv.charCodeAt(i);
        }
        const blob = new Blob([new Uint8Array(bytes)], {
          type: 'text/csv',
        });

        if (typeof window.navigator['msSaveBlob'] !== 'undefined') {
          (window.navigator as any).msSaveBlob(blob, filename);
        } else if (typeof window.navigator['msSaveOrOpenBlob'] !== 'undefined') {
          (window.navigator as any).msSaveOrOpenBlob(blob, filename);
        }
      }
    } else {
      const a = document.createElement('A') as HTMLAnchorElement;
      a.href = 'data:text/csv;base64,' + window.btoa(csv);
      a.download = filename;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  private getCsvFromTable(table: HTMLTableElement, header: boolean) {
    let csv = '';
    const tmpColDelim = String.fromCharCode(11),
      tmpRowDelim = String.fromCharCode(0),
      colDelim = '";"',
      rowDelim = '"\r\n"';
    const getRows = function (typeOfRow) {
      const $rows = $(table).find('tr:has(' + typeOfRow + ')');
      return (csv =
        '"' +
        $rows
          .map(function (i, row) {
            const $row = $(row),
              $cols = $row.find(typeOfRow);

            return $cols
              .map(function (j, col) {
                const $col = $(col),
                  text = $col.text().trim();
                return text.replace('"', '""') + Array(($col[0] as any).colSpan).join(tmpColDelim);
              })
              .get()
              .join(tmpColDelim);
          })
          .get()
          .join(tmpRowDelim)
          .split(tmpRowDelim)
          .join(rowDelim)
          .split(tmpColDelim)
          .join(colDelim) +
        '"');
    };

    if (header) {
      csv += getRows('th') + '\r\n';
    }
    csv += getRows('td');
    return csv;
  }
}

export default withTheme<UpDataGridProps>(UpDataGrid);
