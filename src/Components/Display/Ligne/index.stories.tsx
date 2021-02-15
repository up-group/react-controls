import * as React from 'react';
import UpLigne, { UpLigne as UpLigneComponent } from './UpLigne';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpTooltip from '../../Display/Tooltip';

export default {
    title: 'Components/Display/UpLigne',
    decorators: [withKnobs, getRootContainer('UpLigne')],
    component: UpLigneComponent
};

const TooltipRenderer = (
    <div>
        <p style={{ padding: '10px' }}>Pour plus d'info, veuillez consulter le site de notre produit...</p>
    </div>
);

export const General =
    () => (
        <UpLigne className={"up-indication"} >
            Mon message
        </UpLigne>
    );

export const WithTooltip =
    () => (
        <UpTooltip id={'Tooltip'} title={'Détails'} content={TooltipRenderer}>
            <UpLigne dataFor='Tooltip'>
                Tooltip
            </UpLigne>
        </UpTooltip>
    );