import * as React from 'react'
import { storiesOf } from '@storybook/react'
import UpTile from './UpTile'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { getRootContainer } from '../../../Common/stories';

const stories = storiesOf('Containers/UpTile', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpTile'));

stories.add('Simple usage 1',
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
    ), { info : 'Utilisation du composant en lui passant les données à afficher'}
    );
