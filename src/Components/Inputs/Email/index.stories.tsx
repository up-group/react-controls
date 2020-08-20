import * as React from 'react'

import UpEmail from './UpEmail'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs } from '@storybook/addon-knobs';

export default { 
  title: 'Components/Inputs/UpEmail',
  decorators : [withKnobs, getRootContainer('UpEmail')]
};

export const General =
   () => (
        <div style={{padding:"30px"}}>
          <UpEmail  />
        </div>
  )

export const IsRequired =
   () => (
        <div style={{padding:"30px"}}>
          <UpEmail isRequired={true} />
        </div>
);