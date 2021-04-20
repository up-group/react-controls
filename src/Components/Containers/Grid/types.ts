export type LayoutMode = 'flex' | 'float';
export type Alignment = 'top' | 'middle' | 'bottom';
export type Justification = 'start' | 'end' | 'center' | 'space-around' | 'space-between';

export interface UpGridProps {
    /** To add className for grid customization style */
    className?: string;
    /** To add space between Columns */
    gutter?: number;
    /** To add space between Rows */
    rowSpacing?: number;
    /** To choose how to dispose columns */
    type?: LayoutMode;
    /** ??? */
    fullRowLayout?: boolean;
    /** Style global attribute which contains CSS styling declarations to be applied to the grid, e.g : In order to set margin for example */
    style?: React.CSSProperties;
};

export interface UpGridStyledProps {
    /** In order to set margin for example */
    style?: React.CSSProperties;
};

export interface ColSize {
    span?: number;
    order?: number;
    offset?: number;
    push?: number;
    pull?: number;
};

export interface UpColProps {
    className?: string;
    span?: number;
    order?: number;
    offset?: number;
    rowSpacing?: number;
    push?: number;
    pull?: number;
    xs?: number | ColSize;
    sm?: number | ColSize;
    md?: number | ColSize;
    lg?: number | ColSize;
    xl?: number | ColSize;
    prefixCls?: string;
    style?: React.CSSProperties;
};

export interface UpRowProps {
    className?: string;
    gutter?: number;
    rowSpacing?: number;
    type?: LayoutMode;
    align?: Alignment,
    justify?: Justification;
    style?: React.CSSProperties;
    prefixCls?: string;
    fullRowLayout?:boolean;
};