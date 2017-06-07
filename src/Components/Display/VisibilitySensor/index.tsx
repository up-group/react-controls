import UpVisibilitySensor from './UpVisibilitySensor'

export type Placement = 'top' | 'right' | 'bottom' | 'left'

export interface Offset {
    top: number;
    left: number;
    bottom: number;
    right: number;
}

export interface VisibilityRect {
    top: boolean;
    left: boolean;
    bottom: boolean;
    right: boolean;
}

export interface UpVisibilitySensorProps {
    onChange: (isVisible: boolean, visibilityRect: VisibilityRect) => void;
    active?: boolean;
    partialVisibility?: boolean | Placement;
    delayedCall?: boolean;
    offset?: Offset ;
    scrollCheck?: boolean;
    scrollDelay?: number;
    scrollThrottle?: number;
    resizeCheck?: boolean;
    resizeDelay?: number;
    resizeThrottle?: number;
    intervalCheck?: boolean;
    intervalDelay?: number;
    containment?: any;
    children?: JSX.Element;
    minTopValue?: number;
    forceCheck?:boolean;
}

export interface UpVisibilitySensorState {
    isVisible: boolean;
    visibilityRect: VisibilityRect;
}

export default UpVisibilitySensor 