import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import UpDataPanel from './UpDataPanel';
import { getRootContainer } from '../../../Common/stories';
import { style } from 'typestyle';

export default {
  title: 'Components|Containers/UpDataPanel',
  decorators: [withKnobs, getRootContainer('UpDataPanel')]
};

const data = [
  {
    first_label: 'value 1',
    second_label: 'value 2',
    third_label: 'value 3',
    //fourth_label: 'Value 4',
    fifth_label: 'value 5',
    sixth_label: 'value6'
  }
];
const columns = [
  {
    field: 'first_label',
    label: 'First Label',
    tooltip: { title: 'Titre', content: 'message' }
  },
  { field: 'second_label', label: 'Second Label' },
  { field: 'third_label', label: 'Third Label' },
  { field: 'fourth_label', label: 'Forth Label' },
  { field: 'fifth_label', label: 'Fifth Label' },
  { field: 'sixth_label', label: 'Sixth Label' },
  { field: 'seventh_mabem', label: 'Seventh Label' }
];
export const DisplayRowMode = () => (
  <UpDataPanel
    data={data}
    columns={columns}
    title={{ general: 'Tire généric', specific: ' specific' }}
    showOnlyNotEmptyValue={true}
    displayMode="row"
    className={style({
      $nest: {
        '&.panel-container': {
          marginTop: '25px'
        }
      }
    })}
    actions={[
      {
        action: e => {
          console.log(e);
        },
        type: 'arrow-right',
        intent: 'primary'
      }
    ]}
  />
);

export const DisplayColumnMode = () => (
  <UpDataPanel
    data={data}
    columns={columns}
    showOnlyNotEmptyValue={boolean('showOnlyNotEmptyValue', false)}
    displayMode="column"
    className={style({
      $nest: {
        '&.panel-container': {
          marginTop: '25px'
        }
      }
    })}
  />
);
