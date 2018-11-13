
export type WidthSize = 'auto' | 'small' | 'medium' | 'large' | 'xlarge' ;
export type Align = 'left' | 'right'  ;

export interface CommonProps {
    disabled?:boolean;
    className?: string;
    inline?:boolean;
    required?:boolean;
    width?:WidthSize;
    textAlign?: Align;
    color?: string;
}

export interface UpLabelProps extends CommonProps {
  text:string;
};
