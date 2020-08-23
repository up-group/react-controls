import * as React from 'react';
import UpNavTab from './UpNavTab';
import UpPanel from '../../Containers/Panel';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'Components/Containers/UpNavTab',
    decorators: [withKnobs, getRootContainer('UpNavTab')],
    component: UpNavTab
};

export const GeneralUse =
    () => (
        <UpNavTab tabs={
                [
                    {
                        content: <UpPanel type="info" message="Information sur ..." />,
                        head: "Tab 1"
                    },
                    {
                        content: <UpPanel type="warning" message="Attention sur ..." />,
                        head: "Tab 2"
                    }, {
                        content: <UpPanel type="danger" message="Erreur sur ..." />,
                        head: "Tab 3"
                    }
                ]
            }
        />
    )