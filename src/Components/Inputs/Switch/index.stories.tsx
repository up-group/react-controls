import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpSwitch from './UpSwitch'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Inputs/UpSwitch', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpSwitch'));

stories.add('Simple usage', 
    () => (
        <UpSwitch isNullable={true} onChange={console.log} />
    ))
    .add('Remplace les valeurs text',
    () => (
        <UpSwitch isNullable={true} onChange={console.log} displayTrue="Toujours" displayNull="¯\\_(ツ)_/¯" displayFalse="Jamais" />
    ));
  