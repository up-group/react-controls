import * as React from 'react';
import * as update from 'react-addons-update';
import UpTooltip, { UpTooltip as UpTooltipComponent } from './UpTooltip';
import UpLigne from '../Ligne';
import UpPanel from '../../Containers/Panel';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { UpSvgIcon } from '../../..';

export default {
    title: 'Components/Display/UpTooltip',
    decorators: [withKnobs, getRootContainer('UpTooltip')],
    component: UpTooltipComponent
};

const TooltipRenderer = (
    <div>
        <p style={{ padding: '10px' }}>Pour plus d'info, veuillez consulter le site de notre produit...</p>
    </div>
);

export const General =
    () => (
        <UpPanel type={'primary'}>
            Exemple d'utilisation du composant
            <UpTooltip title={'Détails'} content={TooltipRenderer}>
                <UpLigne>
                    &nbsp;<code>&lt;UpTooltip /&gt;</code>&nbsp;
                </UpLigne>
            </UpTooltip>{' '}
            sur du texte.
        </UpPanel>
    );

export const OnALink =
    () => (
        <UpPanel>
            Exemple d'utilisation du composant
            <UpTooltip id={'Tooltip'} title={'Détails'} content={TooltipRenderer}>
                <a data-for={'Tooltip'} data-tip='React-tooltip'> ◕‿‿◕ </a>
            </UpTooltip>{' '}
            sur du texte.
        </UpPanel>
    );

export const withFormatedText =
    () => {
        const TooltipContent = 'Text that ends with a new line.\n Text that ends with a new line.\n Text that ends with a new line';

        return (
            <UpTooltip title={'Détails'} content={TooltipContent}>
                Example of use of the Up Tooltip component
                <UpSvgIcon
                    width={25}
                    height={25}
                    iconName={'warning-sign'}
                    color={'red'}
                    style={{ cursor: 'pointer' }}
                />
            </UpTooltip>
        )
    };