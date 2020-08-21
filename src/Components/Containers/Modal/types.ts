export type DisplayMode = 'fromTop' | 'fromBottom' | 'fromRight' | 'fromLeft';
export type ModalWidth = 'half' | 'full' | 'default';

export interface UpModalWrapperProps {
    children?: React.ReactNode,
    closeOnClickOutside?: boolean;
    /** possible case : fromTop | fromBottom | fromRight | fromLeft */
    displayMode?: DisplayMode;
    fullHeight?: boolean;
    html?: string;
    /** possible case : half | full | default */
    modalWidth?: ModalWidth;
    withHeaderSeparator?: boolean;
    footer?: string | JSX.Element;
    header?: string | JSX.Element;
};

export interface UpModalProps extends UpModalWrapperProps {
    onClose?: () => void;
    showModal?: boolean;
};