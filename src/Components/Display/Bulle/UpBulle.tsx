import * as React from "react"
import * as cn from 'classnames';

import SvgIcon from "../SvgIcon/index"
import { IconName } from "../../../Common/theming/icons";
import { BulleStyle, IconStyle, ValueStyle, MessageStyle, ChildrenStyle } from "./styles";
import UpBox from "../../Containers/Box";
import withTheme, { WithThemeProps } from "../../../Common/theming/withTheme";

import defaultTheme from '../../../Common/theming';

export interface UpBulleProps {
    backgroundImage: string;
    message: string;
    icon: IconName;
    value: number;
    className?: string;
}

class UpBulle extends React.Component<UpBulleProps & WithThemeProps>{
    
    public static defaultProps: Partial<UpBulleProps> & WithThemeProps = {
        theme: defaultTheme,
    }

    constructor(p, c) {
        super(p, c);
    }

    render() { 
        return (
            <div className={cn(BulleStyle(this.props), this.props.className, 'up-bulle')} style={{ backgroundImage: this.props.backgroundImage }}>
                <UpBox flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'}>
                    {this.props.icon &&
                        <SvgIcon className={IconStyle} iconName={this.props.icon} color={"white"} />
                    }
                    {this.props.value &&
                        <div className={ValueStyle}>{this.props.value}</div>
                    }
                    {this.props.message &&
                        <div className={MessageStyle}>{this.props.message}</div>
                    }
                    {this.props.children &&
                        <div className={ChildrenStyle}>{this.props.children}</div>
                    }
                </UpBox>
            </div>
        )
    }
}

export default withTheme<UpBulleProps>(UpBulle)