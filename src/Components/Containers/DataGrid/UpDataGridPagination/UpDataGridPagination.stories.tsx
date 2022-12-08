import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import UpPagination from './UpDataGridPagination';
import { getRootContainer } from '../../../../Common/stories';

export default {
  title: 'Components/Containers/UpPagination',
  decorators: [withKnobs, getRootContainer('UpPagination')],
};

export const General = () => (
  <UpPagination
    total={100}
    onPageChange={(page, take, skip) => {
      console.log(page, take, skip);
    }}
  />
);
