import * as React from 'react'

import UpRating from './UpRating'

import { withKnobs } from '@storybook/addon-knobs';
import { getRootContainer } from '../../../Common/stories';

export default { 
    title: 'Components|Inputs/UpRating',
    decorators : [withKnobs, getRootContainer('UpRating')]
  };
  
export const General =
    () => (
            <div style={{ padding: "30px" }}>
                <UpRating onChange={console.log} 
                     name={"rating"} 
                     numberOfStars={5} max={5} />
            </div>
    ) ;