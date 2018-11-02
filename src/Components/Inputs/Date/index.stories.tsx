import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDate from './UpDate'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { getRootContainer } from '../../../Common/stories';

const stories = storiesOf('Inputs/UpDate', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpDate'));
stories.add('Simple usage', 'Utilisation simple',
   () => (
    <UpDate onChange={(value, event) => {console.log(event);console.log(value)}} />
  ), { info : 'Utilisation simple' }
).add('Date requise',
  () => (
    <UpDate isRequired={true} onChange={(value, event) => {console.log(event);console.log(value)}} />
 ), { info : 'La date est requise' }
) ;