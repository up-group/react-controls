// Imports
import * as React from 'react'
import { InputHTMLAttributes } from "react"

import * as classnames from 'classnames'
//import { BaseButton } from './styles'
import UpTooltip, { Tooltip } from '../../Display/Tooltip'
import { isString } from '../../../Common/utils'
import { IconName } from "../../Display/SvgIcon/icons";

import { style } from "typestyle"
import { getFontClassName, isNullOrUndef, numberIsNullOrUndef } from "../../../Common/utils/helpers";


export const fontSizeMap = {
    xsmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xlarge: 24
};

export const buttonSizeMap = {
    normal: '150px',
    icon: '32px',
    auto: 'auto'
};

export type FontSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
export type ButtonWidth = 'normal' | 'icon' | 'auto';
export type ButtonHeight = 'xsmall' | 'small' | 'normal' | 'large';
export type ActionType = IconName;
export type IconPosition = 'none' | 'left' | 'right';


export interface Action {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    iconName?: any;
    tooltip?: string | Tooltip;
    libelle: string;
}

export interface Separator {
    size?: number;
}

//export interface CommonProps {
//    color?: string; // Ovverride the defaut intent styling
//    backgroundColor?: string; // Ovverride the defaut intent styling
//    borderColor?: string; // Ovverride the defaut intent styling
//    fontSize?: FontSize;
//    disabled?: boolean;
//    shadow?: boolean;
//    rounded?: boolean;
//    rotate?: boolean;
//    actionType?: ActionType;
//    iconName?: any;
//    iconSize?: number;
//    iconPosition?: IconPosition;
//    //intent?: IntentType;
//    width?: ButtonWidth;
//    height?: ButtonHeight;
//    tooltip?: string | Tooltip;
//    extraActions?: Array<Action | Separator>;
//    isProcessing?: boolean;
//}

// This is so that the onClick handler is accepted without type interferance
export interface UpButtonProps extends InputHTMLAttributes<HTMLButtonElement>  /*extends CommonProps*/ {
    //Text: string;
    //Disable?: boolean;
    Secondary?: boolean;
    TwoLines?: boolean;
    RoundAngle?: boolean;

    //dropDown?: 'none' | 'up' | 'down' | 'element';
    tooltip?: string | Tooltip;
    actionType?: ActionType;
    iconName?: any;
    iconSize?: number;
    iconPosition?: IconPosition;
    //extraActions?: Array<Action | Separator>;
    isProcessing?: boolean;

}

//export interface UpButtonStyledProps extends UpButtonProps {
//    className?: string; // Needed by styled components to set the created className to a complex element
//    dataFor?: string; // Use for tooltip
//    isToggled?: boolean;
//}


export interface UpButtonState extends InputHTMLAttributes<HTMLInputElement> {
    isToggled?: boolean;
}

// Exports
export default class UpButton extends React.Component<UpButtonProps, UpButtonState> {

    constructor(props) {
        super(props);
        //this.handleClick = this.handleClick.bind(this);
        this.state = {
            isToggled: false
        };
    }

    public static defaultProps: UpButtonProps = {
        //backgroundColor: '',
        //borderColor: '',
        //fontSize: 'large',
        //disabled: false,
        //shadow: false,
        //iconName: false,
        //iconPosition: 'none',
        //iconSize: 20,
        ////intent: 'default',
        //width: 'auto',
        //height: 'normal',
        //tooltip: null,
        //dropDown: 'none',
        //onClick: (e: React.MouseEvent<HTMLButtonElement>) => { },
        //theme: defaultTheme
    };

    //private handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    //    if (this.props.disabled !== true) {
    //        this.props.onClick(e);
    //        if (this.props.dropDown != 'none') {
    //            this.setState({ isToggled: !this.state.isToggled });
    //        }
    //    }
    //    e.preventDefault();
    //    e.stopPropagation();
    //}

    //private collapse = (): void => {
    //    if (this.props.dropDown != 'none') {
    //        this.setState({ isToggled: false });
    //    }
    //}

    //private handleActionClick = (action: Action): void => {
    //    action.onClick(null);
    //    this.collapse();
    //}

    isSeparator(element: Action | Separator): boolean {
        return (element as Separator).size !== undefined;
    }

    public render() {
        const {
            Secondary,
            TwoLines,
            RoundAngle,

            //dropDown,
            tooltip,
            actionType,
            iconName,
            iconSize,
            iconPosition,
            //extraActions,
            isProcessing,

            className,
            ...rest } = this.props;

        const BtnList = style({
            display: this.state.isToggled ? "block" : "none",
            position: "absolute",
            top: "35px",
            zIndex: 1000,
            listStyle: "none",
            backgroundColor: "#ffffff",
            minWidth: 160,
            margin: 0,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            borderRadius: 4,
            boxShadow: "0 6px 12px rgba(0, 0, 0, .175)",
            height: this.state.isToggled ? 'auto' : '0px',
            transition: this.state.isToggled ? "height 2s ease-in" : "height 2s ease-out",
            transform: this.state.isToggled ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "top"
        });

        const buttonElement = style({
            cursor: "pointer",
            padding: "8px",
            $nest: {
                '&:hover': { backgroundColor: "#f5f5f5" },
            }
        });

        const separatorElement = style({
            height: "1px",
            margin: "9px 0",
            overflow: "hidden",
            backgroundColor: '#e5e5e5'
        });

        const buttonWrapper = style({
            display: "inline-block",
            position: "relative"
        });

        var icon: boolean | IconName = iconName;
        //if (icon === false && this.props.dropDown != 'none') {
        //    if (this.props.dropDown == 'up') {
        //        icon = 'caret-up';
        //    } else if (this.props.dropDown == 'down') {
        //        icon = 'caret-down';
        //    }
        //}

        var position: IconPosition = iconPosition;
        //if (position === 'none' /*&& this.props.dropDown != 'none'*/) {
        //    position = 'right';
        //} else if (position === 'none' && icon === false) {
        //    position = 'left';
        //}
        var _tooltip: Tooltip = null;
        if (tooltip) {
            if (isString(tooltip)) {
                _tooltip = {
                    content: tooltip as string
                }
            } else {
                _tooltip = tooltip as Tooltip;
            }
        }


        var orange = "#f59100";
        var color = this.props.disabled === true ? "#ffffff" : this.props.Secondary ? orange : "#ffffff";
        var backColor = this.props.disabled === true ? "#d7d7d7" : this.props.Secondary ? "#ffffff" : orange;
        var borderColor = this.props.disabled === true ? backColor : orange;
        var height = this.props.TwoLines ? "60px" : "40px";

        var styleG = getFontClassName({ fontSize: "14px", color: color, lineHeight: height, }) + " " + style({
            borderRadius: this.props.RoundAngle ? "30px" : "3px",
            border: "1px solid " + borderColor,
            backgroundColor: backColor,
            textAlign: "center",
            display: "inline-block",
            minWidth: "180px",
            height: height,
            cursor: this.props.disabled === true || isNullOrUndef(this.props.onClick) ? "auto" : "pointer",
            padding: "0 8px",
            $nest: {
                "&:focus": {
                    outline: "none",
                    fontWeight: "bold",
                },
            },
        });



        //var button = <span className={styleG}
        //    tabIndex={tabIndex}
        //    onClick={this.props.Disable ? null : this.props.onClick}
        //    onKeyDown={this.props.Disable ? null : this.onKeyDown} >
        //    {this.props.Text}
        //</span>;
        var button = <button className={styleG + ' ' + (className !== undefined ? className : "")}
            {...rest}
        />;



        return tooltip === null ?
            button
            :
            <UpTooltip {..._tooltip}>
                {button}
            </UpTooltip>

        //return (
        //    //<span /*className={classnames('up-btn-wrapper', buttonWrapper)}*/>
        //        {
        //            tooltip === null ?
        //                button
        //                :
        //                <UpTooltip {..._tooltip}>
        //                    {button}
        //                </UpTooltip>
        //        }
        //        {
        //            //this.props.dropDown != 'none' && this.state.isToggled &&
        //            //    <ul tabIndex={0} className={BtnList}>
        //            //        {
        //            //            this.props.extraActions.map((v, i) => {
        //            //                const isSeparator = this.isSeparator(v);
        //            //                if (!isSeparator) {
        //            //                    return <li tabIndex={i + 1} key={i} className={buttonElement}
        //            //                        onMouseDown={this.handleActionClick.bind(this, v)}
        //            //                    >{(v as Action).libelle}</li>
        //            //                } else {
        //            //                    return <li tabIndex={i + 1} role={"separator"} key={i} className={separatorElement}></li>
        //            //                }
        //            //            })
        //            //        }
        //            //    </ul>
        //            //
        //        }
        //    //</span >
        //        );
    }
}