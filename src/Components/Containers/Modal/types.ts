import { TestableComponentProps } from "../../../Common/utils/types";

export type DisplayMode = 'fromTop' | 'fromBottom' | 'fromRight' | 'fromLeft';
export type ModalWidth = 'half' | 'full' | 'default';
export type ScreenPosition = 'top' | 'center';

export interface UpModalWrapperProps extends TestableComponentProps {
    children?: React.ReactNode,
    /** If provided, we can close the modal by clicking outside */
    closeOnClickOutside?: boolean;
    /** To specify how is the modal displayed */
    displayMode?: DisplayMode;
    /** If provided, the modal takes the entire screen */
    fullHeight?: boolean;
    /** To show a specific content : frame, PDF ...  */
    html?: string;
    /** To specify the width of the modal */
    modalWidth?: ModalWidth;
    /** If provided, a separator is added to the header */
    withHeaderSeparator?: boolean;
    /** To pass the footer content as a string or as react element */
    footer?: string | JSX.Element;
    /** To pass the header content as a string or as react element */
    header?: string | JSX.Element;
    /** To choose the modal position in the screen */
    screenPosition?: ScreenPosition;
};

export interface UpModalProps extends UpModalWrapperProps {
    /** To pass a callback which allows to close the modal */
    onClose?: () => void;
    /** To display the modal */
    showModal?: boolean;
};