export interface UpTreeViewProps {
  onBranchClick?: (data: MenuItemData) => void;
  childMenuItems?: MenuItemData[];
  showInvisible?: boolean;
}

export interface UpTreeViewState {
  selectedBranchId: string;
}

export interface MenuItemData {
  id: string;
  text: string;
  isSelected?: boolean;
  isVisible?: boolean;
  childMenuItems?: MenuItemData[];
}

export interface SubMenuProps {
  childMenuItems?: MenuItemData[];
  onBranchClick: (data: MenuItemData, branchId: string) => void;
  branchId?: string;
  selectedBranchId?: string;
  showInvisible: boolean;
}

export interface SubMenuState {}

export interface SubItemsProps extends MenuItemData {
  onBranchClick: (data: MenuItemData, branchId: string) => void;
  branchId: string;
  selectedBranchId: string;
  showInvisible: boolean;
}

export interface SubItemsState {
  expand: boolean;
}
