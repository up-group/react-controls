import * as React from 'react'
import { BaseControlState } from '../_Common/BaseControl/BaseControl';
import { UpInputProps } from '../Input/types';
import UpInput from '../Input';
import { IconName } from '../../../Common/theming/icons';
import UpSvgIcon from '../../Display/SvgIcon';
import { style } from 'typestyle';
import withTheme from '../../../Common/theming/withTheme';
import defaultTheme from '../../../Common/theming';
import * as classnames from 'classnames' ;

const getStyles = (props: UpInputProps) => style({ 
    position : 'absolute', 
    top: 0, right: '0', 
    cursor: 'pointer',
    zIndex: 10,
    $nest : {
        '&.up-password:hover svg' : {
           fill: props.theme.colorMap.primary, 
        },
        '&.up-password:hover svg polygon' : {
           fill: props.theme.colorMap.primary, 
        },
        '&.up-password:hover svg path' : {
           fill: props.theme.colorMap.primary, 
        }
    } 
    });

export interface UpPasswordProps extends UpInputProps {}

export interface UpPasswordState {
    isVisible : boolean;
}

class UpPassword extends React.Component<UpPasswordProps, UpPasswordState>  {

    static defaultProps = {
        theme: defaultTheme
    }

    constructor(p, c) {
        super(p, c);
        this.state = {
            isVisible : false,
        }
    }

    toggleVisible = () => this.setState({
        isVisible : !this.state.isVisible,
    })

    render() {
        const iconEyeOpen : IconName = 'eye-open' ;
        const iconEyeClose : IconName = 'eye-close' ;
        const type = this.state.isVisible ? this.props.type : 'password' ;

        return <div style={{position: 'relative'}}>
            <UpInput {...this.props} type={type} iconName="lock-closed" />
            <UpSvgIcon className={classnames(getStyles(this.props), 'up-password')} 
                onClick={this.toggleVisible}
                iconName={this.state.isVisible ? iconEyeClose : iconEyeOpen} />
        </div>
    }
}

export default withTheme<UpInputProps>(UpPassword)