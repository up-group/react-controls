import React from 'react';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs } from '@storybook/addon-knobs';
import UpLabel from './UpLabel';

export default {
  title: 'Components/Display/UpLabel',
  decorators: [withKnobs, getRootContainer('UpLabel')],
  component: UpLabel,
};

export const General = () => (
  <UpLabel text="text" required>
    <span>children</span>
  </UpLabel>
);

export const OnlyChildren = () => <UpLabel>children</UpLabel>;
