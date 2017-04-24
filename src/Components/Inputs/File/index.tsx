import UpFile from './UpFile'

export default UpFile 

export interface CommonProps {
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
