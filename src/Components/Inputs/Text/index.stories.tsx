import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'


import UpText from './'
import UpLabel from '../../Display/Label'

storiesOf('UpText', module)
    .addWithInfo('Simple usage', 'Utilisation avec plusieurs options',
    () => (
            <div style={{ padding: "30px" }}>
                <UpLabel text={"Observation : "}>
                    <UpText width={'fill'} />
                </UpLabel>
            </div>
    )).addWithInfo('RTE', 'Utilisation en mode RTE',
    () => (
            <div style={{ padding: "30px" }}>
                <UpLabel text={"Observation : "}>
                    <UpText enableRTE={true} width={'fill'} onChange={action('Text changed')} />
                </UpLabel>
            </div>
    ));;