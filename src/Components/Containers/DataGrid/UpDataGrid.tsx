import * as $ from "jquery";
import * as React from "react";
import * as classnames from "classnames";
import {media, style} from "typestyle";

import axios from "axios";

import UpPagination, { UpPaginationProps } from "./UpPagination";
import UpDataGridRowHeader from "./UpDataGridRowHeader";
import UpDataGridRow, { ActionFactory } from "./UpDataGridRow";
import { ICellFormatter } from "./UpDefaultCellFormatter";

import UpLoadingIndicator from "../../Display/LoadingIndicator";
import UpButton from "../../Inputs/Button/UpButton";

import { IntentType, WithThemeProps } from "../../../Common/theming/types";
import { ActionType } from "../../../Common/actions";
import UpDefaultTheme, { withTheme } from "../../../Common/theming";
import UpDataGridFooter, { UpDataGridFooterProps } from './UpDataGridFooter';
import UpDataGridHeader, { UpDataGridHeaderProps } from './UpDataGridHeader';

import * as _ from 'lodash';
import { UpDataGridProvider } from './UpDataGridContext'
import { getTestableComponentProps, TestableComponentProps } from "../../../Common/utils/types";
import {DeviceSmartphones} from "../../../Common/utils/device";
import {IconName} from 'theming/icons';

const WrapperDataGridStyle = style({
  position: "relative"
}, media(DeviceSmartphones, {
  $nest: {
    '& .up-loading-indicator': {
      overflowX: 'auto',
    },
  },
}));

const CellInnerElementStyle = {
  marginTop: "0.3em"
};

export function isActionEnabled(props: {
  actions?: ActionFactory<any> | Array<Action>;
  displayRowActionsWithinCell?: boolean;
}): boolean {
  return !props.displayRowActionsWithinCell && props.actions != null;
}

const DataGridStyle = (props: UpDataGridProps & WithThemeProps) =>
  style({
    width: "100%",
    borderRadius: props.theme.borderRadius,
    borderSpacing: 0,
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: props.theme.colorMap.defaultBorder,
    color: props.theme.colorMap.darkGray5,
    fontSize: "14px",
    $nest: {
      "& .up-data-grid-header": {
        backgroundColor: "white",
        backgroundRepeat: "repeat-x",
        fontWeight: 700,
        fontSize: "12px"
      },
      "& .up-data-grid-header .up-checkbox": {
        marginTop: '8px',
        marginBottom: '8px',
        marginLeft: '7px',
      },
      "& .up-data-grid-body": {
        background: "white"
      },
      "& .up-selection": {
        width: "0.2em"
      },
      "& .up-display-label, & .up-display-value": CellInnerElementStyle,
      "& .up-data-grid-header-cell": {
        textAlign: "left",
        padding: "8px",
        paddingLeft: "14px",
        borderCollapse: "collapse",
        borderColor: "transparent",
        borderRadius: props.theme.borderRadius
      },
      "& .up-data-grid-header-cell-label": {
        fontSize: '14px',
        color: props.theme.colorMap.grey1
      },
      "& .up-data-grid-header-cell.up-data-grid-header-cell-selection" : {
        width:"32px",
        paddingLeft : "8px"
      },
      "& .up-data-grid-header-cell.up-data-grid-header-cell-selection .up-checkbox": {
        marginLeft: "1px"
      },
      "& .up-data-grid-cell": {
        padding: "16px",
        position: 'relative',
        verticalAlign: props.alignCells,
        textAlign: props.textAlignCells,
        $nest: {
          "& .up-buttons-wrapper": {
            justifyContent: props.textAlignCells === 'center' ? 'center' :
              props.textAlignCells === 'left' ? 'flex-start' :
                props.textAlignCells === 'right' ? 'flex-end' : 'normal',
          },
          "& .up-badge": {
            padding: '4px 6px',
          },
        },
        //width:'100%'
      },
      '& .up-data-grid-cell .up-checkbox .up-control-indicator::before' : {
        left: '0px'
      },
      "& .up-data-grid-cell .up-checkbox": {
        marginTop: '0 !important',
        display: 'inline-block'
      },
      "& .up-data-grid-cell .row-actions": {
        position: 'absolute',
        display: 'none',
        width: '300px',
        bottom: '3px',
        justifyContent: 'space-between',
        zIndex: 1
      },
      "& .up-data-grid-cell .row-action": {
        color: props.theme.colorMap.primary,
        cursor: 'pointer'
      },
      "& .up-data-grid-cell .row-action:hover, & .up-data-grid-cell .row-action-delete:hover": {
        textDecoration: 'underline',
      },
      "& .up-data-grid-cell .row-action-delete": {
        color: props.theme.colorMap.errorActive,
        cursor: 'pointer'
      },
      "& .up-data-grid-row": {
        verticalAlign: 'top',
      },
      "& .up-data-grid-row:hover .row-actions": {
        display: 'flex',
      },
      "& .up-data-grid-row-bordered": {
        $nest: {
          ".up-data-grid-cell": {
            borderTop: `1px solid ${props.theme.colorMap.defaultBorder}`,
            borderCollapse: "collapse"
          }
        }
      },
      "& .up-data-grid-row-bordered:last-child": {
        $nest: {
          ".up-data-grid-cell": {
            border: "0",
            borderRadius: props.theme.borderRadius
          }
        }
      },
      "& .up-data-grid-row-borderless": {
        $nest: {
          ".up-data-grid-cell": {
            border: "0"
          }
        }
      },
      "& .up-data-grid-row-selected": {
        $nest: {
          "& .up-data-grid-cell": {
            borderTop: `0.1em solid ${props.theme.colorMap.primaryDark}`,
            borderBottom: `0.1em solid ${props.theme.colorMap.primaryDark}`,
            backgroundColor: props.theme.colorMap.primary,
            color: props.theme.colorMap.primaryFg
          }
        }
      },
      "& .up-data-grid-sortable": {
        cursor: "pointer"
      },
    },
  }, media(DeviceSmartphones, {
    $nest: {
      "& .up-data-grid-header-cell-label": {
        whiteSpace: 'nowrap',
      },
    },
  }));

export interface Action {
  type: ActionType;
  intent?: IntentType;
  description: string;
  action: (row: Row) => void;
  libelle?: string;
  borderless?: boolean
  isVisible?: (value: unknown) => boolean;
  getProps?: (value: unknown) => unknown;
}

export interface ToolTip {
  title?: JSX.Element | string,
  content: JSX.Element | string,
  icon?: IconName
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
  tooltip?: ToolTip
}

export interface Row {
  isSelected?: boolean;
  value?: any;
}

export type Method = "GET" | "POST";
export type PaginationPosition = "top" | "bottom" | "both";

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
  onSelectionChange?: (lastUpdatedRow: Row, dataSelected: any[], allRowsSelected?: Row[], isAllRowsSelected?: boolean) => void;
  onRowClick?: (rowIndex: number, row: any) => void;
  isRowClickable?: boolean;
  getRowCustomClassName?: (rowIndex: number, row: any) => string;
  footerProps?: Partial<UpDataGridFooterProps>;
  headerProps?: Partial<UpDataGridHeaderProps>;
  displayRowActionsWithinCell?: boolean;
  onlyOneRowCanBeSelected?: boolean;
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
  lastFetchedDataTime?:Date;
}

export type SortDirection = "ASC" | "DESC";

const isSamePage = (prevProps, nextProps) => {
  return prevProps?.page == nextProps?.page
    && prevProps?.take == nextProps?.take
    && prevProps?.skip == nextProps?.skip
}

export const mapDataToRow = (data: Array<any>, allRowsSelected: boolean, rowsSelected: Array<any>): Array<Row> => {
  let rows: Array<Row> = [];
  data.map((value, index) => {
    rows.push({
      isSelected: (allRowsSelected !== null) ? allRowsSelected : isSelectedRowData(value.id, rowsSelected),
      value: value
    });
  });

  return rows;
};

const isSelectedRowData = (id: string, rowsSelected: Array<Row>) => {
  return rowsSelected?.some(data => data.value.id === id);
}

const getRowsFromData = (data: Array<any>, isAllRowsSelected: boolean): Array<Row> => {
  return data.map((row, index) => {
    return {
      isSelected: isAllRowsSelected,
      value: row.value,
    };
  });
}

const getNewSelectedRows = (rows: Array<Row>, currentSelection: Array<Row>): Array<Row> => {
  return rows.filter(r => r.isSelected).filter(r => !currentSelection.map(d => d.value.id).includes(r.value.id));
}

const removeRowsFromData = (rows: Array<Row>, currentData: Array<Row>) : Array<Row>  => {
  return rows.filter(s => !currentData.some(d => d.value.id === s.value.id));
}

class UpDataGrid extends React.Component<
  UpDataGridProps & WithThemeProps,
  UpDataGridState
  > {
  static defaultProps: UpDataGridProps & WithThemeProps = {
    columns: [],
    rowActions: null,
    dataKey: "Entity",
    idKey: "id",
    labelToDisplayRowActionsInCell: '',
    paginationPosition: "top",
    isSelectionEnabled: false,
    isPaginationEnabled: false,
    isOddEvenEnabled: true,
    isSortEnabled: true,
    theme: UpDefaultTheme,
    alignCells: 'initial',
    textAlignCells: 'initial',
    loadingMessage: "Chargement en cours...",
    paginationProps: {
      takes: [
        { id: 10, text: "10" },
        { id: 20, text: "20" },
        { id: 50, text: "50" },
        { id: 100, text: "100" },
        { id: 200, text: "200" },
        { id: 500, text: "500" }
      ]
    }
  };

  constructor(props, context) {
    super(props, context);
    this.fetchData = this.fetchData.bind(this);
    this.handleData = this.handleData.bind(this);

    const data = this.props.data as Array<any>;
    const columns: Array<Column> = this.props.columns;
    
    const _state : Partial<UpDataGridState> = {
      rows: [],
      rowsSelected: [],
      isDataFetching: false,
      columns: columns,
      skip: this.props.paginationProps.skip || 0,
      take: this.props.paginationProps.take || 50,
      page: this.props.paginationProps.page || 1,
      total: this.props.paginationProps.total,
      allRowsSelected: false,
    };

    if (this.props.data != null) {
      const rows = mapDataToRow(data, this.state?.allRowsSelected, this.state?.rowsSelected);
      _state.rows = rows;
      _state.rowsSelected = rows.filter(s => s.isSelected)
    }

    this.state = _state as UpDataGridState;
  }

  componentDidMount() {
    if (this.props.dataSource != undefined) {
      this.fetchData();
    }
  }

  handleData = data => {
    var sortedColumn: Column = null;
    this.state.columns.map((value, index) => {
      if (value.isSorted) {
        sortedColumn = value;
      }
    });
    var dataKey = this.props.dataKey;

    var rows: Array<Row> = [];
    var total = 0;
    if (data.Count != null) {
      total = data.Count;
      if (dataKey != null) {
        data = data[dataKey];
      }
    } else {
      total = data.length;
    }
    if (data != null) {
      rows = mapDataToRow(data, this.state?.allRowsSelected, this.state?.rowsSelected);

      if (rows.length == total && this.state.take < total) {
        // Internal sort
        if (sortedColumn) {
          rows.sort(function (x, y) {
            if (sortedColumn.sortDir == "ASC")
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

    const addedRows = rows.filter(r => r.isSelected)
      .filter(r => !this.currentRowsSelected.some(d => d.value.id === r.value.id));
    
    const dataSelected = [...this.currentRowsSelected, ...addedRows];
    this.setState({ rows: rows, rowsSelected: dataSelected, total: total, isDataFetching: false, lastFetchedDataTime: new Date() });
  };

  fetchData = () => {
    this.setState({ isDataFetching: true });
    var sortedColumn: Column = null;
    this.state.columns.map((value, index) => {
      if (value.isSorted) {
        sortedColumn = value;
      }
    });
    var dataKey = this.props.dataKey;

    var orderParamName = this.props.dataSource.orderParamName || "Order";
    var dirParamName = this.props.dataSource.dirParamName || "Dir";
    var skipParamName = this.props.dataSource.skipParamName || "Skip";
    var takeParamName = this.props.dataSource.takeParamName || "Take";
    var self = this;
    if (this.props.dataSource.method === "POST") {
      var params = {
        takeParamName: this.state.take,
        skipParamName: this.state.skip
      };

      if (sortedColumn != null) {
        params[orderParamName] = sortedColumn.field;
        params[dirParamName] = sortedColumn.sortDir;
      }

      axios
        .post(`${this.props.dataSource.query}`)
        .then(response => {
          var data = response.data;
          self.handleData(data);
        })
        .catch(reason => {
          //TODO : handle error message
          this.setState({ isDataFetching: false });
        });
    } else {
      var query = `${this.props.dataSource.query}?${takeParamName}=${this.state.take}&${skipParamName}=${this.state.skip}`;
      if (sortedColumn != null) {
        query = `${query}&${orderParamName}=${sortedColumn.field}&${dirParamName}=${sortedColumn.sortDir}`;
      }
      axios
        .get(query)
        .then(response => {
          var data = response.data;
          self.handleData(data);
        })
        .catch(reason => {
          //TODO : handle error message
          this.setState({ isDataFetching: false });
        });
    }
  };

  onPageChange = (page: number, take: number, skip: number) => {
    if (this.props.paginationProps.onPageChange)
      this.props.paginationProps.onPageChange(page, take, skip);

    this.setState({ page, take, skip }, () => {
      if (this.props.dataSource !== undefined) {
        this.fetchData();
      }
    });
  };

  get isSelectionControlled() {
    return this.props.rowsSelected !== undefined;
  }

  get currentRowsSelected() {
    return this.isSelectionControlled ? this.props.rowsSelected : this.state.rowsSelected;
  }

  get dataSelectedFromCurrentRows() {
    if (this.state.rows == null) {
      return [];
    }

    return this.state.rows
      .filter(row => {
        if (row.isSelected === true) {
          return true;
        }
        return false;
      })
      .map(row => {
        return row.value;
      });
  }

  getSelectedRowsWithAlsoTheCurrentOne = (currentRow: Row) => {
    const idRow = currentRow.value.id;
    const isRowSelected = currentRow.isSelected;

    //if onlyOneRowCanBeSelected, return just one element
    if (this.props.onlyOneRowCanBeSelected) {
      return isRowSelected ? [currentRow] : [];
    }

    return isRowSelected ? [...this.currentRowsSelected, currentRow] : this.currentRowsSelected.filter(data => data.value.id !== idRow);
  }

  isAllRowsSelectedWithAlsoTheCurrentOne = (currentRow: Row) => {
    //Do not check if the "all rows checkbox" must be selected in the case of a single selectable row.
    if(this.props.onlyOneRowCanBeSelected) return;

    const dataLength = this.state.rows.length;
    const selectedRowsLength = this.getSelectedRowsWithAlsoTheCurrentOne(currentRow).length;
    // Check if all rows that are selected, belong to the same page (pagination)
    const notCheckedRowsLength = this.state.rows.filter(data => !data.isSelected).length;

    return notCheckedRowsLength == 0 && (selectedRowsLength % dataLength) == 0;
  }

  onRowSelectionChange = (rowKey: number, currentRow: Row) => {
    let allRowsSelected = this.getSelectedRowsWithAlsoTheCurrentOne(currentRow) ;
    let isAllRowsSelected = this.isAllRowsSelectedWithAlsoTheCurrentOne(currentRow) ;

    if(this.isSelectionControlled) {
      this.props.onSelectionChange(currentRow, this.dataSelectedFromCurrentRows, allRowsSelected, null);
    } else {
      const rows = this.state.rows;
      // Disable all items before choosing another
      if (this.props.onlyOneRowCanBeSelected) {
        rows.forEach(item => item.isSelected = false);
      }
      rows[rowKey] = currentRow;

      this.setState({
        rows,
        rowsSelected: allRowsSelected,
        allRowsSelected: isAllRowsSelected ,
      });
    }
  };

  onSelectionAllChange = (isSelected: boolean) => {
    if(this.isSelectionControlled) {
      this.props.onSelectionChange(null, this.dataSelectedFromCurrentRows, this.currentRowsSelected, isSelected);
    } else {
      const rows: Array<Row> = getRowsFromData(this.state.rows, isSelected);
      const addedRows = getNewSelectedRows(rows, this.currentRowsSelected);
    
      const isCurrentlyAllRowSelected : boolean = this.state.allRowsSelected

      let newAllDataSelected = [...this.currentRowsSelected, ...addedRows];

      if (isCurrentlyAllRowSelected) {
        newAllDataSelected = removeRowsFromData(newAllDataSelected, this.state.rows)
      }

      this.setState({
        rowsSelected: newAllDataSelected,
        rows: rows,
        allRowsSelected: isSelected,
      });
    }
  };

  onSortChange = (c: Column, dir: SortDirection) => {
    if (this.props.onSortChange) {
      this.props.onSortChange(c, dir);
    }

    // Update the column state
    var columns: Array<Column> = [];
    this.state.columns.map((value, index) => {
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

  static getDerivedStateFromProps(props: UpDataGridProps, state: UpDataGridState) {
    let rows = state.rows;
    let dataSelected = props.rowsSelected === undefined ? state?.rowsSelected : props.rowsSelected;

    rows = props.data != null
        ? mapDataToRow(props.data, null, dataSelected)
        : state.rows;
    
    let allDataSelected = dataSelected ;
    
    if(rows != null && props.rowsSelected === undefined ) {
      const addedRows = rows.filter(r => r.isSelected).filter(r => !dataSelected.some(d => d.value.id === r.value.id));
      allDataSelected = [...dataSelected, ...addedRows];
    }

    let allRowsSelected = rows != null && rows.length > 0 && !rows.some(row => !row.isSelected);

    const newState: UpDataGridState = {
      rows,
      rowsSelected: allDataSelected,
      allRowsSelected,
      columns: props.columns,
      total: props.paginationProps.total,
      isDataFetching: props.isDataFetching,
      lastFetchedDataTime: props.lastFetchedDataTime,
    };

    if (props.paginationProps.skip != null) {
      newState.skip =
      props.paginationProps.skip > props.paginationProps.total
          ? 0
          : props.paginationProps.skip;
      newState.take = props.paginationProps.take;
      newState.page =
        (props.paginationProps.page - 1) * props.paginationProps.take >
        props.paginationProps.total
          ? 1
          : props.paginationProps.page;
    }
    
    return newState;
  }

  render() {
    const {
      skip,
      take,
      total,
      onPageChange,
      ...otherProps
    } = this.props.paginationProps;

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
          "& .up-data-grid-row:nth-child(even)": {
            background: "#FFF"
          },
          "& .up-data-grid-row:nth-child(odd)": {
            background: "#f5f5f5"
          }
        }
      });
    }
    let columns = this.state.columns;
    if (this.props.isSortEnabled == false) {
      let newUnsortableColumns: Array<Column> = [];
      columns.map((value, index) => {
        value.isSortable = false;
        newUnsortableColumns.push(value);
      });
      columns = newUnsortableColumns;
    }

    let rows = [];

    for (let index = 0; index < this.state.rows.length; index++) {
      let value = this.state.rows[index];

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
            isOneRowSelected= {this.props.onlyOneRowCanBeSelected && this.currentRowsSelected.length === 1 ? true : false }
          />
        );
      }

      if (this.props.injectRow != null) {
        let previous = value;
        let next = this.state.rows[index + 1];
        let rowToInject = this.props.injectRow(previous, next, columns);
        if (rowToInject != null) {
          rows.push(
            <tr
              className="up-data-grid-row up-data-grid-row-bordered"
              key={`row-custom-${index}`}
            >
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
    }

    let newFooterProps: UpDataGridFooterProps = {
      ...this.props.footerProps,
      ...(this.props.footerProps && this.props.footerProps.actionsDataGrid && {
        actionsDataGrid: {
          ...this.props.footerProps.actionsDataGrid,
          actions: this.props.footerProps.actionsDataGrid.actions.map(action => ({
            ...action,
            onClick: rows => action.onClick(rows)
              .then(data => {
                //Empty the selectData and uncheck all checkboxes if the request is successful
                this.setState({
                  rowsSelected: [],
                  rows: this.state.rows.map(row =>  ({...row, isSelected : false}))
                })
              })
          }))
        }
      })
    }
    return (
      <UpDataGridProvider value={providerValues} >
        <div
          className={classnames(
            "up-data-grid-container",
            WrapperDataGridStyle,
            this.props.className
          )}
          {...getTestableComponentProps(this.props)}
        >
          <UpDataGridHeader
            {...this.props.headerProps}
            buttonExport={this.btnExportCsv}
          />
          {this.props.isPaginationEnabled &&
            this.props.paginationPosition != "bottom" && !this.state.isDataFetching &&
            pagination}
          <UpLoadingIndicator
            displayMode={"zone"}
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
                className={classnames(
                  "up-data-grid-main",
                  DataGridStyle(this.props)
                )}
              >
                <UpDataGridRowHeader
                  isSelectionEnabled={this.props.isSelectionEnabled}
                  onSelectionChange={this.onSelectionAllChange.bind(this)}
                  onSortChange={this.onSortChange.bind(this)}
                  actions={this.props.rowActions}
                  columns={columns}
                  displayRowActionsWithinCell={this.props.displayRowActionsWithinCell}
                  textAlignCells={this.props.textAlignCells}
                  isAllDataChecked={this.state.allRowsSelected}
                  isSelectionAllEnabled={!this.props.onlyOneRowCanBeSelected}
                />
                <tbody className={classnames("up-data-grid-body", oddEvenStyle)}>
                  {rows}
                </tbody>
              </table>
            </>
          </UpLoadingIndicator>
          <UpDataGridFooter
            {...newFooterProps}
            isPaginationEnabled={this.props.isPaginationEnabled && this.props.paginationPosition != "top"}
            pagination={pagination}
            data={this.currentRowsSelected}
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
      return <UpButton onClick={this.onExport} actionType={"download"} />;
    }

    return (
      <UpButton onClick={this.onExport}>
        {" "}
        {this.props.exportCsv.textButton}
      </UpButton>
    );
  }

  onExport = a => {
    this.exportTableToCSV(this.refTable, this.props.exportCsv.fileName, true);
  };

  private exportTableToCSV(table: HTMLTableElement, filename, header) {
    var csv = this.getCsvFromTable(table, header);

    var ieVersion = (function () {
      var rv = -1;
      if (navigator.appName == "Microsoft Internet Explorer") {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
        if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
      } else if (navigator.appName == "Netscape") {
        var ua = navigator.userAgent;
        var re = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
        if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
      }
      return rv;
    })();

    if (ieVersion != -1) {
      if (ieVersion > 9) {
        var bytes = new Array(csv.length);
        for (var i = 0; i < csv.length; i++) {
          bytes[i] = csv.charCodeAt(i);
        }
        var blob = new Blob([new Uint8Array(bytes)], { type: "text/csv" });
        window.navigator.msSaveBlob(blob, filename);
      }
    } else {
      var a = document.createElement("A") as HTMLAnchorElement;
      a.href = "data:text/csv;base64," + window.btoa(csv);
      a.download = filename;
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  private getCsvFromTable(table: HTMLTableElement, header: boolean) {
    var tmpColDelim = String.fromCharCode(11),
      tmpRowDelim = String.fromCharCode(0),
      colDelim = '";"',
      rowDelim = '"\r\n"',
      csv = "",
      getRows = function (typeOfRow) {
        var $rows = $(table).find("tr:has(" + typeOfRow + ")");
        return (csv =
          '"' +
          $rows
            .map(function (i, row) {
              var $row = $(row),
                $cols = $row.find(typeOfRow);

              return $cols
                .map(function (j, col) {
                  var $col = $(col),
                    text = $col.text().trim();
                  return (
                    text.replace('"', '""') +
                    Array(($col[0] as any).colSpan).join(tmpColDelim)
                  );
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
      csv += getRows("th") + "\r\n";
    }
    csv += getRows("td");
    return csv;
  }
}

export default withTheme<UpDataGridProps>(UpDataGrid);
