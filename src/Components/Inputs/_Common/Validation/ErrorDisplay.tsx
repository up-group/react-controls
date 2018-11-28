import * as React from 'react'

import UpSvgIcon from '../../../Display/SvgIcon' 
import  UpTooltip, {Tooltip} from '../../../Display/Tooltip'
import { style } from 'typestyle'

export interface ErrorDisplayProps {
    error: string;
    showError: boolean;
    hasError: boolean;
}

const ErrorDisplayStyle = style({
    position:"relative", 
    cursor:"help",
    $nest: {
        "& .up-wrapper-error" : {
            display:"inline-block",
            position:"absolute",
            top:"8px",
            left:"-20px"
        }
    }
}) ;

export default class ErrorDisplay extends React.Component<ErrorDisplayProps> {
    constructor(p, c) {
        super(p, c);
    }
    render() {

        const Error = () => {
            return (<div className={"up-wrapper-error"}>
                    <UpTooltip content={this.props.error}>
                        <UpSvgIcon width={15} height={15} iconName="error-sign" color={"red"} />
                    </UpTooltip></div>) ;
        } ;
        
        return (<div className={ErrorDisplayStyle}>
            {this.props.children}
            {this.props.showError === true && this.props.hasError === true ? 
                (<Error />) : null}
        </div>)
    }
}
