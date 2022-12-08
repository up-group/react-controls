import * as React from 'react';
import { isFunction } from '../../../../Common/utils';

import { Column, Action } from '../UpDataGrid/UpDataGrid.types';
import { ICellFormatter, UpCellFormatter } from '../UpDefaultCellFormatter';

export interface UpDataGridCellState {
  isSelected: boolean;
}

export type UpDataGridCellRenderProps<P extends object = object> = ReturnType<UpDataGridCell['getApi']> & P;

type RenderCallback = (args: UpDataGridCellRenderProps) => JSX.Element;

export interface Props {
  value?: any;
  column?: Column;
  children?: RenderCallback | React.ReactNode;
  render?: RenderCallback;
  component?: React.ComponentType<Props>;
  actions?: Array<Action>;
}

export default class UpDataGridCell extends React.Component<Props, UpDataGridCellState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isSelected: false,
    };
  }

  private getApi = () => {
    return { value: this.props.value, column: this.props.column };
  };

  render() {
    const { component: InjectedComponent, children, render } = this.props;

    const renderProps = this.getApi();

    let renderInnercell;

    if (InjectedComponent) {
      renderInnercell = <InjectedComponent {...renderProps}>{children}</InjectedComponent>;
    } else if (render) {
      renderInnercell = render(renderProps);
    } else if (children != null && isFunction(children)) {
      const childrenAsFunction = children as (value: Props) => JSX.Element;
      renderInnercell = childrenAsFunction(renderProps);
    } else {
      renderInnercell = (
        <UpCellFormatter value={this.props.value} column={this.props.column}>
          {this.props.children}
        </UpCellFormatter>
      );
    }

    let cellStyle = {};
    if (this.props.actions && this.props.actions.length > 0) {
      cellStyle = { marginBottom: '8px' };
    }

    return (
      <td className="up-data-grid-cell">
        <div style={cellStyle}>{renderInnercell}</div>
        <div className="row-actions">
          {this.props.actions &&
            this.props.actions.map(action => {
              return (
                <p
                  key={action.type}
                  className={`row-action${action.type === 'delete' ? '-delete' : ''}`}
                  onClick={event => action.action(this.props.value)}
                >
                  {action.description}
                </p>
              );
            })}
        </div>
      </td>
    );
  }
}
