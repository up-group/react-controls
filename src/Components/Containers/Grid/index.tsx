// Imports
import UpGrid from './UpGrid'
import UpRow from './UpRow'
import UpCol from './UpCol'

// Exports
export type LayoutMode = 'flex' | 'float'
export type Alignment =  'top' | 'middle' | 'bottom'
export type Justification = 'start' | 'end' | 'center' | 'space-around' | 'space-between'

export interface UpGridProps {
    gutter?: number;
    type?: LayoutMode;
    style?: React.CSSProperties; // In order to set margin for example
}

export interface UpGridStyledProps {
    style?: React.CSSProperties; // In order to set margin for example
}

export interface ColSize {
  span?: number;
  order?: number;
  offset?: number;
  push?: number;
  pull?: number;
}

export interface UpColProps {
  className?: string;
  span?: number;
  order?: number;
  offset?: number;
  push?: number;
  pull?: number;
  xs?: number | ColSize;
  sm?: number | ColSize;
  md?: number | ColSize;
  lg?: number | ColSize;
  xl?: number | ColSize;
  prefixCls?: string;
  style?: React.CSSProperties;
}

export interface UpRowProps {
  className?: string;
  gutter?: number;
  type?: LayoutMode;
  align?: Alignment,
  justify?: Justification;
  style?: React.CSSProperties;
  prefixCls?: string;
}

export {
  UpGrid,
  UpRow,
  UpCol
};