import React from 'react';
import UpEmail from './UpEmail';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Components/Inputs/UpEmail',
  decorators: [withKnobs, getRootContainer('UpEmail')],
  component: UpEmail,
};

export const General = () => <UpEmail />;

General.decorators = [
  General => (
    <div style={{ padding: '30px' }}>
      <General />
    </div>
  ),
];

export const IsRequired = () => <UpEmail isRequired={true} />;

IsRequired.decorators = [
  IsRequired => (
    <div style={{ padding: '30px' }}>
      <IsRequired />
    </div>
  ),
];
