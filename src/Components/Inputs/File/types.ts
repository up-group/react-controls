export interface UpFileProps {
    maxSize?: number; //in Mo
    hasError: boolean;
    fileExtension?: string;
    className?: string;
    onChange: (value: number[]) => void;
    onError?: (value: string) => void;
}
export interface UpFileStyleProps {
    maxSize?: number; //in Mo
    hasError: boolean;
    fileExtension?: string;
    className?: string;
    onChange: (value: any) => void;
}
