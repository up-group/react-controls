import * as React from 'react';
import { isFunction } from '../../../../Common/utils';

import { Column, Action } from '../UpDataGrid/UpDataGrid.types';
import { UpCellFormatter } from '../UpDefaultCellFormatter';

export interface ApiType {
  value?: Props['value'];
  column?: Props['column'];
}

type RenderCallback = (args: ApiType) => JSX.Element;

export interface Props {
  value?: any;
  column?: Column;
  children?: RenderCallback | React.ReactNode;
  render?: RenderCallback;
  component?: React.ComponentType<Props>;
  actions?: Array<Action>;
}

const UpDataGridCell: React.FC<Props> = ({
  actions,
  component: InjectedComponent,
  children,
  render,
  value,
  column,
}) => {
  const getApi = () => ({ value, column });

  const renderProps = getApi();

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
      <UpCellFormatter value={value} column={column}>
        {children}
      </UpCellFormatter>
    );
  }

  let cellStyle = {};
  if (actions && actions.length > 0) {
    cellStyle = { marginBottom: '8px' };
  }

  return (
    <td className="up-data-grid-cell">
      <div style={cellStyle}>{renderInnercell}</div>
      <div className="row-actions">
        {actions &&
          actions.map(action => {
            return (
              <p
                key={action.type}
                className={`row-action${action.type === 'delete' ? '-delete' : ''}`}
                onClick={() => action.action(value)}
              >
                {action.description}
              </p>
            );
          })}
      </div>
    </td>
  );
};

export default UpDataGridCell;
