export type Alignement = 'h' | 'v';
export type AddOnMode = 'none' | 'left' | 'right';
export type Width = 'auto' | 'full';

export interface UpButtonGroupProps {
    gutter?: number;
    align?: Alignement;
    isAddOn?: AddOnMode;
    width?: Width;
};