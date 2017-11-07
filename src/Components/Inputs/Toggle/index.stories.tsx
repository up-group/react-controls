import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { style } from 'typestyle'

import UpDefaultTheme from '../../../Common/theming'
import {IntentType} from '../../../Common/theming/types'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpToggle from './'
import {Size} from './UpToggle'
import UpLabel from '../../Display/Label'
import UpNotification from '../../Display/Notification'
import UpBox from '../../Containers/Box'

interface ToggleWrapperProps {
   size?:Size;
}

interface ToggleWrapperState {
    checked: boolean;
}

class ToggleWrapper extends React.Component<ToggleWrapperProps, ToggleWrapperState>{
    public static defaultProps = {
        size:'normal'
    }
    
    constructor(props, context) {
        super(props, context);
        this.state = {
            checked: false
        }
    }
    onChange = (value)  => {
        this.setState({ checked: value });
    }
    render() {
        return (
            <UpToggle size={this.props.size} value={true} checked={this.state.checked === true} onChange={this.onChange} />);
    }
}

storiesOf('UpToggle', module)
    .addWithInfo('Simple usage', 'Utilisation avec plusieurs options',
    () => (
    <UpThemeProvider theme={UpDefaultTheme}>
        <UpBox style={{margin:"30px"}}>
            <UpNotification status={"info"}>
                Le composant <code>UpToggle</code> a un comportement similaire à <code>UpCheckBox</code> mais avec une UX centrée sur l'idée d'activation/désactivation. 
                Il existe 3 tailles selon le cas d'utilisation : <code>small</code>, <code>normal</code> et <code>large</code>.
            </UpNotification>

            <UpBox style={{margin:"30px"}}>
                <UpLabel textAlign={"left"} inline={true} width="medium" text="Activation de ... :">
                    <ToggleWrapper size={'small'} />
                </UpLabel>
                <UpLabel textAlign={"left"} inline={true} width="medium" text="Activation de ... :">
                    <ToggleWrapper size={'normal'} />
                </UpLabel>
                <UpLabel textAlign={"left"} inline={true} width="medium" text="Activation de ... :">
                    <ToggleWrapper size={'large'} />
                </UpLabel>
            </UpBox>
        </UpBox>
    </UpThemeProvider>
    )) ;