import * as React from 'react'
import UpLigne from './'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default { 
  title: 'Components|Display/UpLigne',
  decorators : [withKnobs, getRootContainer('UpLigne')]
};

export const General =
   () => (
      <UpLigne className={"up-indication"} color={"red"}>
        Mon message
      </UpLigne>
  )