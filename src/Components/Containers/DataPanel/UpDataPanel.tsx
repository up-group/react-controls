import * as React from 'react';
import * as classnames from 'classnames';

import { IntentType } from '../../../Common/theming/types';
import { ActionType } from '../../../Common/actions';
import UpDataPanelItem from './UpDataPanelItem';
import withTheme, {
  
} from '../../../Common/theming/withTheme';
import { ICellFormatter } from '../DataGrid/UpDefaultCellFormatter';

export interface Column {
  label: string  | JSX.Element;
  field?: string ;
  formatter?: ICellFormatter;
  getFormatterProps?: (value: string) => any;
  tooltip?: {
    title?: JSX.Element | string;
    content: JSX.Element | string;
  };
}
export interface Action {
  type: ActionType;
  intent?: IntentType;
  description?: string;
  action: (panelValue) => void;
  libelle?: string;
}
export type DisplayType = 'row' | 'column';
export interface TitleFormatter {
    format: (title) => React.ReactElement<any>;
  }
export interface UpDataPanelProps {
  columns: Array<Column>;
  data: Array<any>;
  showOnlyNotEmptyValue?: boolean;
  actions?: Array<Action>;
  displayMode?: DisplayType;
  className?: string;
  title?: {
    general: string;
    specific?: string;
    formatter?: TitleFormatter
  };
}


export const UpDataPanel = props => {
  const { data, ...rest } = props;

  return (
    data &&
    data.map(panelElement => {
      return <UpDataPanelItem  panelData={panelElement} {...rest} />;
    })
  );
};

export default withTheme<UpDataPanelProps>(UpDataPanel);
