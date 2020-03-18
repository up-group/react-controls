import * as React from 'react'
import UpTile from './UpTile'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { getRootContainer } from '../../../Common/stories';

export default { 
    title: 'Components|Containers/UpTile',
    decorators : [withKnobs, getRootContainer('UpTile')]
};

export const General =
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
    )
