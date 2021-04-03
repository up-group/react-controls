import * as React from 'react';
import UpPanel from '../../Containers/Panel';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpVerticalTimeline, { UpVerticalTimeline as UpVerticalTimelineComponent } from './UpVerticalTimeline';

export default {
    title: 'Components/Display/UpVerticalTimeline',
    decorators: [withKnobs, getRootContainer('UpVerticalTimeline')],
    component: UpVerticalTimelineComponent
};

export const General =
    () => (
        <UpPanel type={'primary'}>
            Exemple d'utilisation du composant vertical timeline.
            <UpVerticalTimeline
                title={'Suivi de commandes'}
                timeline={
                    [
                        { status: 'Livrée', date: 'Le 18/02/2020  à 12h12', isAchieved: true },
                        { status: 'Expédié', date: 'Le 18/02/2020  à 12h12', isAchieved: true },
                        { status: 'Traitement en cours', date: 'Le 18/02/2020  à 12h12', isAchieved: true },
                        { status: 'Payée', isAchieved: false },
                    ]
                }
            />
        </UpPanel>
    );
