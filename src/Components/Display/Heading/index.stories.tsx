import * as React from 'react'
import * as update from 'react-addons-update'

import { UpHeading } from '../../..';

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default { 
  title: 'Components|Display/UpHeading',
  decorators : [withKnobs, getRootContainer('UpHeading')]
};

export const General =
 () => (
    <div>
      <UpHeading tag='h1'>H1</UpHeading>   
      <UpHeading tag='h2'>H2</UpHeading>
      <UpHeading tag='h3'>H3</UpHeading>
      <UpHeading tag='h4'>H4</UpHeading>
      <UpHeading tag='h5'>H5</UpHeading>
    </div>
  )