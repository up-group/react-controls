import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { style } from "typestyle"
import UpTile from './UpTile'
import { Icon } from '@blueprintjs/core';
import { iconClass } from '@blueprintjs/core/dist/common/classes';

storiesOf('UpTile', module)
    .addWithInfo('Simple usage 1', 'Utilisation du composant en lui passant les données à afficher',
    () => (
        <div>
            <br />
            <UpTile Title="INFOS">
                <a>Test</a>
                <a>Test</a>
                <a>Test</a>
            </UpTile>
            <UpTile Title="INFOS">Test </UpTile>
            <UpTile Title="INFOS">Test </UpTile>
        </div>
    ));
