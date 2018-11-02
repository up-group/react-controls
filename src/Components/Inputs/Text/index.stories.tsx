import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpText from './'
import UpLabel from '../../Display/Label'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Inputs/UpText', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpText'));

stories.add('Simple usage',
    () => (
        <UpLabel text={"Observation : "}>
             <UpText width={'fill'} />
        </UpLabel>
    ), { info : 'Utilisation avec plusieurs options'}
);
