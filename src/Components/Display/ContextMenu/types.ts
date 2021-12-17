export interface UpContextMenuProps {
  id: string;
  onHide?: () => void;
  onShow?: () => void;
}

export interface UpContextMenuState {
  x: number;
  y: number;
  top: number;
  left: number;
  isVisible: boolean;
}

export interface UpContextMenuItemProps {
  attributes?: object;
  data: object;
  disabled?: boolean;
  preventClose?: boolean;
  onClick: (event, data) => void;
}

export interface UpContextMenuItemDividerProps {
  size?: number;
  color?: string;
}

export interface UpContextMenuItemDividerState {}

export interface UpContextMenuTriggerProps {
  id: string;
  attributes?: object;
  collect?: () => void;
  holdToDisplay?: number;
  renderTag?: any;
  rightClick?: boolean;
}
