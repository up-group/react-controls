
export type WidthSize = 'auto' | 'small' | 'medium' | 'large' | 'xlarge' ;
export type Align = 'left' | 'right'  ;

export interface CommonProps {
    disabled?:boolean;
    className?: string;
    inline?:boolean;
    required?:boolean;
    width?:WidthSize;
    textAlign?: Align;
}

export interface UpLabelProps extends CommonProps {
  text:string;
};

export interface UpLabelStyledProps extends CommonProps {

}