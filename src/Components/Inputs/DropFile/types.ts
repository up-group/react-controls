import { WithThemeProps } from '../../../Common/theming';
import { IntentType } from '../../../Common/theming/types';

export interface IFile {
    type?: IFileType;
    name?: string;
    value?: string;
    mime_type?: string;
    size_kb?: number;
    import_date?: Date;
    comment?: string;
    value_base64?: string | ArrayBuffer;
    id?: string;
    version?: string;
    width?: number;
    height?: number;
    originalFile?: {
        lastModified: number;
        lastModifiedDate: Date;
        name: string;
        preview: string;
        size: number;
        type: string;
        webkitRelativePath: string;
    }
};

export interface IFileType {
    id?: string;
    code?: string;
    label?: string;
    description?: string;
    version?: string;
};

export interface UpDropFileProps extends WithThemeProps {
    showOptions?: boolean;
    label?: string;
    name: string;
    required?: boolean;
    allowedExtensions?: string[];
    ratio?: number;
    enableCrop?: boolean;
    onMouseOver?: any;
    onMouseOut?: any;
    error?: any;
    touched?: boolean;
    value?: IFile;
    disabled?: boolean;
    maxImgWidth?: number,
    autoResizeContainer?: boolean;
    showPreview?: boolean;
    noPreviewMessage?: string;
    previewDisabledMessage?: string;
    openFileLabel?: string;
    deleteFileLabel?: string;
    selectFileLabel?: string;
    resizeImageLabel?: string;
    dropLabel?: string;
    separatorLabel?: string;
    allowExtensionsLabel?: string;
    allowedExtensionsErrorMessage?: (
      allowedExtensions?: string[],
      value?: IFile
    ) => string;
    displaySelectFile?: boolean;
    tabIndex?: number;
    onChange?: (event: React.ChangeEvent<any>, value: IFile) => void;
    loadFile?: (id: string) => Promise<IFile>;
    source?: () => Promise<IFile>;
};

export interface Message {
    message: string;
    intent: IntentType;
};

export interface UpDropFileState {
    height: number;
    width: number;
    isLoading: boolean;
    errors?: Array<Message>;
    showModal: boolean;
    showOptions: boolean;
    color: string;
    shadow: string;
    ratio?: number;
    isFetchingFile?: boolean;
    value: IFile;
};