import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpRating from './UpRating'

import { withKnobs } from '@storybook/addon-knobs';
import { getRootContainer } from '../../../Common/stories';

const stories = storiesOf('Components|Inputs/UpRating', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpRating'));
stories.add('Usage',
    () => (
            <div style={{ padding: "30px" }}>
                <UpRating onChange={console.log} 
                     name={"rating"} 
                     numberOfStars={5} max={5} />
            </div>
    ), {info : 'Utilisation simple'}
)