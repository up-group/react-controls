import * as React from 'react'

import UpSvgIcon from '../../../Display/SvgIcon' 
import  UpTooltip, {Tooltip} from '../../../Display/Tooltip'

export interface ErrorDisplayProps {
    error: string;
    showError: boolean;
    hasError: boolean;
}

export default class ErrorDisplay extends React.Component<ErrorDisplayProps, {}> {
    constructor(p, c) {
        super(p, c);
    }

    
    render() {
        const Error = () => {
            return (<UpTooltip type={"error"} content={this.props.error}>
                        <UpSvgIcon width={15} height={15} iconName="error-sign" color={"red"}/>
                    </UpTooltip>) ;
        } ;
        
        {this.props.error}
        return (<div>
            {this.props.children}
            {this.props.showError === true && this.props.hasError === true ? 
                (<Error />) : null}
                
        </div>)
    }
}
