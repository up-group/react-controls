import { TestableComponentProps } from "../../../Common/utils/types";

export type DisplayMode = 'fromTop' | 'fromBottom' | 'fromRight' | 'fromLeft';
export type ModalWidth = 'half' | 'full' | 'default';
export type ScreenPosition = 'top' | 'center';

export interface UpModalWrapperProps extends TestableComponentProps {
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
    /** possible case : top | Center */
    screenPosition?: ScreenPosition;
};

export interface UpModalProps extends UpModalWrapperProps {
    onClose?: () => void;
    showModal?: boolean;
};