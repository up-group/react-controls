import * as React from 'react';
import UpLigne, { UpLigne as UpLigneComponent } from './UpLigne';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpTooltip from '../../Display/Tooltip';
import { style } from 'typestyle';

export default {
    title: 'Components/Display/UpLigne',
    decorators: [withKnobs, getRootContainer('UpLigne')],
    component: UpLigneComponent
};

export const General =
    () => (
        <UpLigne>
            My message
        </UpLigne>
    );

export const WithTooltip =
    () => (
        <UpTooltip
            id={'Tooltip'}
            title={'Détails'}
            content={'Pour plus d\'info, veuillez consulter le site de notre produit...'}
        >
            <UpLigne
                dataFor='Tooltip'
            >
                Hover to display Tooltip
            </UpLigne>
        </UpTooltip>
    );

export const WithCustomization =
    () => (
        <UpLigne
            className={style({
                fontWeight: 'bold',
                color: '#000 !important',
                backgroundColor: '#F59100',
                padding: '10px'
            })}
        >
            My message
        </UpLigne>
    );