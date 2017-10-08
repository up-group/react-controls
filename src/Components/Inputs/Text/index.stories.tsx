import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import UpDefaultTheme from '../../../Common/theming'
import { IntentType } from '../../../Common/theming/types'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpText from './'
import UpLabel from '../../Display/Label'

storiesOf('UpText', module)
    .addWithInfo('Simple usage', 'Utilisation avec plusieurs options',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <div style={{ padding: "30px" }}>
                <UpLabel text={"Observation : "}>
                    <UpText width={'fill'} />
                </UpLabel>
            </div>
        </UpThemeProvider>
    )).addWithInfo('RTE', 'Utilisation en mode RTE',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <div style={{ padding: "30px" }}>
                <UpLabel text={"Observation : "}>
                    <UpText enableRTE={true} width={'fill'} onChange={action('Text changed')} />
                </UpLabel>
            </div>
        </UpThemeProvider>
    ));;