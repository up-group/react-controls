export type Alignement = 'h' | 'v';
export type AddOnMode = 'none' | 'left' | 'right';
export type Width = 'auto' | 'full';

export interface UpButtonGroupProps {
    /** To add a margin right or a margin bottom according to alignment */
    gutter?: number;
    /** To align buttons horizontally or vertically */
    align?: Alignement;
    /** To delete the border radius property of the buttons according to the sides(glued buttons).  */
    isAddOn?: AddOnMode;
    /** To specify the Container Width for Buttons */
    width?: Width;
};