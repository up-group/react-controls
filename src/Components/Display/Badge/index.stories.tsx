import * as React from 'react';
import UpBadge, { UpBadge as UpBadgeComponent } from './UpBadge';
import UpBox from '../../Containers/Box';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default {
    title: 'Components/Display/UpBadge',
    decorators: [
        withKnobs,
        getRootContainer('UpBadge'),
    ],
    component: UpBadgeComponent
};

export const General =
    () => (
        <dl>
            <dt>Badge avec <code>intent</code> définit à <code>primary</code></dt>
            <dd>
                <UpBadge text="1" rounded={true} intent="primary" /><br />
            </dd>
            <dt>Badge avec <code>intent</code> définit à <code>info</code></dt>
            <dd>
                <UpBadge text="2" rounded={true} intent="info" /><br />
            </dd>
            <dt>Badge avec <code>intent</code> définit à <code>default</code></dt>
            <dd>
                <UpBadge text="3" rounded={true} intent="default" /><br />
            </dd>
            <dt>Badge avec <code>intent</code> définit à <code>warning</code></dt>
            <dd>
                <UpBadge text="4" rounded={true} intent="warning" /><br />
            </dd>
            <dt>Badge avec <code>intent</code> définit à <code>danger</code></dt>
            <dd>
                <UpBadge text="5" rounded={true} intent="danger" /><br />
            </dd>
            <dt>Badge avec <code>intent</code> définit à <code>error</code></dt>
            <dd>
                <UpBadge text="6" rounded={true} intent="error" /><br />
            </dd>
            <dt>Badge avec <code>intent</code> définit à <code>light</code></dt>
            <dd>
                <UpBadge text="7" rounded={true} intent="light" />
            </dd>
        </dl>
    );