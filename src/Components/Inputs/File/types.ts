import { WithThemeProps } from "../../../Common/theming/withTheme";

export interface CommonProps extends WithThemeProps {
    maxSize?: number; //in Mo
    hasError: boolean;
    fileExtension?: string;
    className?: string;
    onChange: (value: any) => void;
} 

export interface UpFileProps extends CommonProps {
    onError?: (value: string) => void;
    value?:any;
}

export interface UpFileStyleProps extends CommonProps {
    value:any;
}