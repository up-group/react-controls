import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpTimePicker from './'
import UpLabel from '../../Display/Label'
import UpNotification from '../../Display/Notification'
import UpBox from '../../Containers/Box'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Inputs/UpToggle', module) ;

stories.addDecorator(withKnobs)
stories.add('Simple usage',
        () => (
            <UpBox style={{ margin: "40px 30px" }}>
                <UpNotification>
                    Le composant <code>UpToggle</code> a un comportement similaire à <code>UpCheckBox</code> mais avec une UX centrée sur l'idée d'activation/désactivation.
                Il existe 3 tailles selon le cas d'utilisation : <code>small</code>, <code>normal</code> et <code>large</code>.
            </UpNotification>

                <UpBox style={{ margin: "30px" }}>
                    <UpLabel textAlign={"left"} inline={true} width="medium" text="Heure de début :">
                        <UpTimePicker />
                    </UpLabel>
                </UpBox>
            </UpBox>
        ),  {info : 'Utilisation avec plusieurs options'},
);