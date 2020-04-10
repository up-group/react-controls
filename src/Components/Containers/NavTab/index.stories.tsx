import * as React from 'react'

import UpNavTab from './UpNavTab'
import UpPanel from '../../Containers/Panel'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const tab1 = <UpPanel type="info" disableAutoIntentIcon={false} message="Information sur ..." />
const tab2 = <UpPanel type="warning" disableAutoIntentIcon={false} message="Attention sur ..." />
const tab3 = <UpPanel type="danger" disableAutoIntentIcon={false} message="Erreur sur ..." />

export default { 
  title: 'Components|Containers/UpNavTab',
  decorators : [withKnobs, getRootContainer('UpNavTab')]
};

export const General =
   () =>  (
      <UpNavTab tabs={[{
        content: tab1,
        head:"Tab 1"
      },{
        content: tab2,
        head:"Tab 2"
      },{
        content: tab3,
        head:"Tab 3"
      }]} />
    )