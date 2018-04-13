import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import UpMehdi from './UpMehdi'

storiesOf('UpMehdi', module)
    .addWithInfo('Simple usage 2', 'Utilisation du composant en lui passant les données à afficher',
    () => (

        <UpMehdi >
            <div>aaaa</div>
        </UpMehdi>
    ))
    ;