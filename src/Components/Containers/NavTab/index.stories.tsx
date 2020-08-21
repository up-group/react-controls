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

const tab1 = <UpPanel type="info" message="Information sur ..." />;
const tab2 = <UpPanel type="warning" message="Attention sur ..." />;
const tab3 = <UpPanel type="danger" message="Erreur sur ..." />;

export const GeneralUse =
    () => (
        <UpNavTab tabs={
                [
                    {
                        content: tab1,
                        head: "Tab 1"
                    },
                    {
                        content: tab2,
                        head: "Tab 2"
                    }, {
                        content: tab3,
                        head: "Tab 3"
                    }
                ]
            }
        />
    )