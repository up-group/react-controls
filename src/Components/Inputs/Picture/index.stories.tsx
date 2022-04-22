import React from 'react';
import UpPicture from './UpPicture';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpBox from '../../Containers/Box';
import { getRootContainer } from '../../../Common/stories';

export default {
  title: 'Components/Inputs/UpPicture',
  decorators: [withKnobs, getRootContainer('UpPicture')],
  component: UpPicture,
};

export const General = () => (
  <UpBox style={{ margin: '40px 30px' }}>
    <UpPicture width={300} height={300} />
  </UpBox>
);
