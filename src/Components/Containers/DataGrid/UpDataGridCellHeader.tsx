import * as React from "react";
import * as ReactDOM from "react-dom";

import UpSvgIcon from "../../Display/SvgIcon";
import UpDefaultTheme from "../../../Common/theming";
import { SortDirection, Column } from "./UpDataGrid";

import * as classnames from "classnames";
import UpBox from "../Box";
import { style } from "typestyle";

export interface UpDataGridCellHeaderState {
  isSorted: boolean;
  sortDirection: SortDirection;
}

export interface UpDataGridCellHeaderProps {
  defaultSort?: SortDirection;
  onSortChange?: (c: Column, d: SortDirection) => void;
  column?: Column;
  width?: string;
}

const headerCellStyles = style({
  $nest: {
    "& .up-data-grid-header-cell-icons .up-icon-wrapper": {
      height: "8px"
    },
    "& .up-data-grid-header-cell-icons": {
      marginLeft: "8px"
    }
  }
});

export default class UpDataGridCellHeader extends React.Component<
  UpDataGridCellHeaderProps,
  UpDataGridCellHeaderState
> {
  constructor(props: UpDataGridCellHeaderProps, context) {
    super(props, context);
    this.state = {
      isSorted: props.column ? props.column.isSorted : false,
      sortDirection: props.column ? props.column.sortDir : null
    };
  }

  onCellClick = (sortDirection?: SortDirection) => {
    if (!sortDirection) {
      sortDirection = this.state.sortDirection === "ASC" ? "DESC" : "ASC";
    }

    if (
      this.props.column.isSortable === true &&
      this.state.sortDirection != sortDirection
    ) {
      this.setState({ isSorted: true, sortDirection: sortDirection }, () => {
        this.props.onSortChange(this.props.column, this.state.sortDirection);
      });
    }
  };

  componentWillReceiveProps(newProps: UpDataGridCellHeaderProps) {
    if (
      newProps.column.isSorted != null &&
      newProps.column.isSorted !== this.state.isSorted
    ) {
      this.setState({
        isSorted: newProps.column.isSorted,
        sortDirection: newProps.column.isSorted
          ? this.state.sortDirection == null
            ? "DESC"
            : "ASC"
          : null
      });
    }
  }

  render() {
    const sortAscIcon = "arrow-down";
    const sortDescIcon = "arrow-up";
    const arrowColor = UpDefaultTheme.colorMap.primary;

    var width = "auto";
    if (this.props.width) {
      width = this.props.width;
    }
    return (
      <th
        style={{ width: width }}
        className={classnames(
          headerCellStyles,
          "up-data-grid-header-cell",
          this.props.column.isSortable ? "up-data-grid-sortable" : ""
        )}
      >
        <UpBox
          flexDirection={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <span
            onClick={() => this.onCellClick()}
            className={"up-data-grid-header-cell-label"}
          >
            {this.props.column.label}
          </span>
          {this.props.column.isSortable && (
            <UpBox
              className={"up-data-grid-header-cell-icons"}
              flexDirection={"column"}
              style={{ width: "auto" }}
            >
              <UpSvgIcon
                width={8}
                iconName={sortDescIcon}
                color={
                  this.state.isSorted && this.state.sortDirection == "DESC"
                    ? arrowColor
                    : "#D7D7D7"
                }
                onClick={() => this.onCellClick("DESC")}
              />
              <UpSvgIcon
                width={8}
                iconName={sortAscIcon}
                color={
                  this.state.isSorted && this.state.sortDirection == "ASC"
                    ? arrowColor
                    : "#D7D7D7"
                }
                onClick={() => this.onCellClick("ASC")}
              />
            </UpBox>
          )}
        </UpBox>
      </th>
    );
  }
}
