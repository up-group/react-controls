import * as React from 'react'
import * as update from 'react-addons-update'

import { storiesOf } from '@storybook/react'
import { UpHeading } from '../../..';

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Display/UpHeading', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpHeading'));

stories.addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
 () => (
  <div>
    <UpHeading tag='h1'>H1</UpHeading>   
    <UpHeading tag='h2'>H2</UpHeading>
    <UpHeading tag='h3'>H3</UpHeading>
    <UpHeading tag='h4'>H4</UpHeading>
    <UpHeading tag='h5'>H5</UpHeading>
  </div>
))