import { IntentType } from '../../../Common/theming/types';
import { ActionType } from '../../../Common/actions';
import { ICellFormatter } from '../DataGrid/UpDefaultCellFormatter';

export type DisplayType = 'row' | 'column';

export interface Column {
    label: string | JSX.Element;
    field?: string;
    formatter?: ICellFormatter;
    getFormatterProps?: (value: any) => any;
    tooltip?: {
        title?: JSX.Element | string;
        content: JSX.Element | string;
    };
};

export interface Action {
    type: ActionType;
    intent?: IntentType;
    description?: string;
    action: (panelValue) => void;
    libelle?: string;
};

export interface TitleFormatter {
    format: (row: {}, additionalProps?: any) => React.ReactElement<any>;
};

export interface UpDataPanelProps {
    /** Columns Panel */
    columns: Array<Column>;
    /** Data Columns Panel */
    data: Array<any>;
    /** To hide field if it is empty */
    showOnlyNotEmptyValue?: boolean;
    /** To display actions buttons */
    actions?: Array<Action>;
    /** To display fields horizontally or vertically */ 
    displayMode?: DisplayType;
    /** To add className for customization panel style */
    className?: string;
    /** To show Generic and Specific title */
    title?: {
        general: TitleFormatter | JSX.Element | string;
        specific?: TitleFormatter | JSX.Element | string;
    };
    /** To add specific style to a column */
    getColumnCustomClassName?: (label: string) => string;
};

export interface PanelItemProps {
    className?: string;
    title?: {
        general: TitleFormatter | JSX.Element | string;
        specific?: TitleFormatter | JSX.Element | string;
    };
    displayMode?: DisplayType;
    actions?: Array<Action>;
    panelData: {};
    columns: Array<Column>;
    showOnlyNotEmptyValue: boolean;
    getColumnCustomClassName?: (label: string) => string;
};