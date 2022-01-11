import { TestableComponentProps } from '../../../Common/utils/types';

export type DisplayMode = 'fromTop' | 'fromBottom' | 'fromRight' | 'fromLeft';
export type ModalWidth = 'half' | 'full' | 'default';
export type ScreenPosition = 'top' | 'center';

export interface UpModalWrapperProps extends TestableComponentProps {
  /** Modal content */
  children?: React.ReactNode;
  /** If true, the modal can be closed by clicking outside */
  closeOnClickOutside?: boolean;
  /** To choose how to display modal, e.g: show modal from top */
  displayMode?: DisplayMode;
  /** If true, the modal occupies the entire viewport */
  fullHeight?: boolean;
  /** To display other types of content like PDF, Frame ... */
  html?: string;
  /** To set modal width */
  modalWidth?: ModalWidth;
  /** If true, an underline is added to the header */
  withHeaderSeparator?: boolean;
  /** To add footer */
  footer?: string | JSX.Element;
  /** To add header */
  header?: string | JSX.Element;
  /** To position the modal on the height of the viewport */
  screenPosition?: ScreenPosition;
}

export interface UpModalProps extends UpModalWrapperProps {
  /** Called callback when modal closed */
  onClose?: () => void;
  /** To show or hide the modal */
  showModal?: boolean;
}
