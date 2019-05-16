import { DeviceLRTablets } from "../../../Common/utils/device";
import { media, style } from "typestyle";
import { UpMenuProps, UpMenuState } from "./UpMenu";
import { WithThemeProps } from "../../../Common/theming";

export const MenuStyles = (
         props: UpMenuProps & WithThemeProps & UpMenuState
       ): string =>
         style(
           {
             $nest: {
               "&.up-menu": {
                 width: props.minified ? "76px" : props.width,
                 minWidth: "76px",
                 zIndex: 1000,
                 position: "relative",
                 height: "100vh",
                 backgroundColor: "#4E5B59",
                 transition: "width 0.5s",
                 padding: "14px"
               },
               "&.up-menu li a": {
                 color: "#ffffff",
                 textDecoration: "none"
               },
               "&.up-menu ul, &.up-menu ul li": {
                 margin: 0,
                 padding: 0,
                 listStyle: "none"
               },
               "&.up-menu nav > ul li.separator": {
                 //borderBottom: `1px solid ${
                 //  props.theme.colorMap.disabledFg
                 //}`,
                 margin: "27px 0 !important",
                 padding: 0,
                 width: "auto",
                 lineHeight: "3px"
               },
               "&.up-menu ul li .up-icon-wrapper.colored svg, .up-menu ul li .up-icon-wrapper.colored svg path, .up-menu ul li .up-icon-wrapper.colored svg polygon, .up-menu ul li .up-icon-wrapper.colored svg polyline": {
                 fill: "#ffffff",
                 cursor: "pointer"
               },
               "&.up-menu ul li.active .up-icon-wrapper.colored svg, .up-menu ul li.active .up-icon-wrapper.colored svg path, .up-menu ul li.active .up-icon-wrapper.colored svg polygon, .up-menu ul li.active .up-icon-wrapper.colored svg polyline": {
                 fill: props.theme.colorMap.primary
               },
               "&.up-menu ul li:hover .up-icon-wrapper.colored svg, .up-menu ul li:hover .up-icon-wrapper.colored svg path, .up-menu ul li:hover .up-icon-wrapper.colored svg polygon, .up-menu ul li:hover .up-icon-wrapper.colored svg polyline": {
                 fill: props.theme.colorMap.primary
               },
               "&.up-menu nav > ul > li .up-menu-item-title": {
                 display: props.minified ? "none" : "inherit",
                 fontSize: "14px",
                 fontWeight: 500,
                 textAlign: "left",
                 marginLeft: "14px"
               },
               "&.up-menu ul li.active .up-menu-item-title, &.up-menu ul li:hover ul li.active .up-menu-item-title, &.up-menu ul li.active ul li.active .up-menu-item-title": {
                 color: props.theme.colorMap.primary
               },
               "&.up-menu ul li:hover ul li .up-menu-item-title, &.up-menu ul li.active ul li .up-menu-item-title": {
                 color: "#fff"
               },
               "&.up-menu ul li ul li:hover .up-menu-item-title": {
                 color: props.theme.colorMap.primary
               },
               "&.up-menu nav > ul > li": {
                 position: "relative",
                 maxWidth: props.width-28,
                 overflow: "hidden"
               },
               "&.up-menu nav > ul > li:hover": {
                 overflow: "visible"
               },
               "&.up-menu nav > ul > li.active > a, &.up-menu nav > ul > li:hover > a": {
                 backgroundColor: "#424C4A",
                 borderRadius: "24px"
               },
               "&.up-menu nav > ul > li a": {
                 display: "flex",
                 flexDirection: "row",
                 justifyContent: "flex-start",
                 alignItems: "center",
                 padding: "12px"
               },
               "&.up-menu nav > ul > li > ul > li a": {
                 padding: "0px",
                 paddingLeft:'12px',
                 width:'213px'
               },
               "&.up-menu nav > ul > li > a": {
                 width: props.minified ? 48 : props.width-28
               },
               "&.up-menu nav > ul > li:first-child": {
                 marginTop: props.minified ? 0 : 83
               },
               "&.up-menu nav > ul > li .up-sub-menu-title": {
                 display: "none",
                 color: "#FFF",
                 fontSize: "14px",
                 fontWeight: 500
               },
               "&.up-menu nav > ul > li:hover .up-sub-menu-title": {
                 display: props.minified ? "inline-block" : "none",
                 marginBottom: "20px"
               },
               "&.up-menu nav > ul > li:not(:last-child)": {
                 marginBottom: "6px"
               },
               "&.up-menu nav > ul > li > ul": {
                 display: "none",
                 transform: "scaleY(0)",
                 minWidth: "180px"
               },
               "&.up-menu nav > ul > li > ul > li": {
                 display: "block"
               },
               "&.up-menu nav > ul li.active > ul": {
                 display: props.minified ? "block" : "inherit"
               },
               "&.up-menu nav > ul > li:hover .up-menu-item-title": {
                 zIndex: 1001,
                 display: props.minified ? "none" : "inline-block"
               },
               "&.up-menu nav > ul > li:hover ul li .up-menu-item-title": {
                 display: "inline-block"
               },
               "&.up-menu nav > ul > li:hover > ul": {
                 display: props.minified ? "block" : "none",
                 backgroundColor: "#4E5B59",
                 top: props.minified ? "0px" : "inherit",
                 left: props.minified ? "48px" : "inherit",
                 position: props.minified ? "absolute" : "inherit",
                 padding: "16px 5px 30px 35px",
                 width: "auto",
                 opacity: 1,
                 transform: "scaleY(1)",
                 transformOrigin: "50% 0",
                 transition: "transform 0.5s ease",
                 zIndex: 1000,
                 borderBottomRightRadius: props.theme.borderRadius,
                 borderTopRightRadius: props.theme.borderRadius
               },
               "&.up-menu nav > ul > li.active:not(:hover) > ul": {
                 display: props.minified ? "none" : "block",
                 padding: "16px 5px 30px 35px",
                 width: "auto",
                 opacity: 1,
                 transform: "scaleY(1)",
                 transformOrigin: "50% 0",
                 transition: "transform 0.5s ease"
               },
               "&.up-menu nav > ul > li.active:hover > ul": {
                 display: "block"
               },
               "&.up-menu nav > ul > li > ul.active:hover": {
                 display: "block"
               },
               "&.up-menu nav > ul > li ul li:not(:last-child)": {
                 marginBottom: "25px"
               },
               "&.up-menu .up-menu-actions": {
                 minHeight: "23px",
                 margin: props.minified?"30px 15px":"0"
               },
               "&.up-menu .up-menu-toggle.colored svg, .up-menu .up-menu-toggle.colored svg path, .up-menu .up-menu-toggle.colored svg polygon, .up-menu .up-menu-toggle.colored svg polyline": {
                 fill: "#ffffff",
                 cursor: "pointer"
               },
               "&.up-menu .up-menu-toggle.colored:hover svg, .up-menu .up-menu-toggle.colored:hover svg path, .up-menu .up-menu-toggle.colored:hover svg polygon, .up-menu .up-menu-toggle.colored:hover svg polyline": {
                 fill: props.theme.colorMap.primary
               },
               "& .up-menu-footer": {
                 position: "absolute",
                 bottom: "8px",
                 width: 'calc(100% - 28px)',
               },
               "& .up-menu-header": {
                 display: 'flex',
                 flexDirection: props.minified?'column':'row',
                 justifyContent:'space-between',
                 alignItems: props.minified?'flex-start':'center'
               },
             }
           },
           media(DeviceLRTablets, {
             $nest: {
               ".skin-up.main-header.navbar.dropdown-menu li.divider": {
                 backgroundColor: "rgba(255, 255, 255, 0.1)"
               },
               ".skin-up.main-header.navbar.dropdown-menu li a": {
                 color: "#fff"
               },
               ".skin-up.main-header.navbar.dropdown-menu li a: hover": {
                 background: "rgb(0, 170, 212)"
               }
             }
           })
         );
