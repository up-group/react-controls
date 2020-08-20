import { style, media, keyframes} from "typestyle";
import { UpBulleProps } from "./UpBulle";
import { DeviceSmartphones, DeviceSmallSmartphones } from "../../../Common/utils/device";
import { fadeOutAnimation, fadeInAnimation } from "../../../Common/theming/animations";
import { NestedCSSProperties } from "typestyle/lib/types";

export const AutoSizedComponent : NestedCSSProperties =
{
    padding : '6px',
    fontSize: '11px',
    width : 'auto',
}

export const BulleStyle = (props : UpBulleProps ) => style({
    position: 'relative',
    fontSize: "12px",
    cursor: "pointer",
    borderRadius: "4px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    padding: "12px 16px",
    opacity:  1,
}, 
media(DeviceSmartphones, AutoSizedComponent),
media(DeviceSmallSmartphones, AutoSizedComponent));

export const IconStyle = style({
    color:"white",
});

const IconifiedValue : NestedCSSProperties = {
    position:  'absolute',
    fontSize: '10px',
    top: '3px',
    left: '20px',
}

const HiddenMessage : NestedCSSProperties = {
    display: 'none',
    opacity:  0,
}

export const ValueStyle = style({
    marginLeft: "12px",
    color:"white",
    fontSize: '24px',
    fontWeight: 500,
}, 
media(DeviceSmartphones, IconifiedValue),
media(DeviceSmallSmartphones, IconifiedValue));

export const MessageStyle = style({
    margin: "0px 0px 0px 12px",
    color:"white",
    opacity:  1,
    animation: `${fadeInAnimation} 2s`,
}, 
media(DeviceSmartphones, HiddenMessage),
media(DeviceSmallSmartphones, HiddenMessage));

export const ChildrenStyle = style({
    margin: "5px",
    color: "white",
});