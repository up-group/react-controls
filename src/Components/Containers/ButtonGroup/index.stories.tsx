import React from 'react';
import { action } from '@storybook/addon-actions';
import UpButtonGroup from './UpButtonGroup';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { UpButton } from '../../..';

export default {
  title: 'Components/Containers/UpButtonGroup',
  decorators: [
    withKnobs,
    getRootContainer('UpButtonGroup'),
    UpButtonGroup => (
      <div style={{ margin: '30px', padding: '10px' }}>
        <UpButtonGroup />
      </div>
    ),
  ],
  component: UpButtonGroup,
};

export const DropDown = () => (
  <>
    <UpButtonGroup gutter={0} align={'h'}>
      <UpButton
        onClick={action('OnClick')}
        dropDown="down"
        intent="primary"
        extraActions={[
          {
            libelle: 'Option 1',
            onClick: action('Option 1'),
          },
          {
            libelle: 'Option 2',
            onClick: action('Option 2'),
          },
          {
            libelle: 'Option 3',
            onClick: action('Option 3'),
          },
        ]}
      >
        BOUTON 3
      </UpButton>
    </UpButtonGroup>
    <br />
    <UpButtonGroup gutter={10} align={'h'}>
      <UpButton onClick={action('Main')} actionType={'add'} />
      <UpButton
        onClick={action('OnClick')}
        dropDown="down"
        extraActions={[
          {
            libelle: 'Option 1',
            onClick: action('Option 1'),
          },
          {
            libelle: 'Option 2',
            onClick: action('Option 2'),
          },
          { size: 2 },
          {
            libelle: 'Option 3',
            onClick: action('Option 3'),
          },
        ]}
      />
    </UpButtonGroup>
  </>
);

export const GluedButtons = () => (
  <UpButtonGroup isAddOn={'left'} gutter={0} align={'h'}>
    <UpButton onClick={action('Edit')} width={'normal'} intent={'info'} actionType={'info-sign'}>
      Info
    </UpButton>
    <UpButton onClick={action('Edit')} width={'normal'} intent={'primary'} actionType={'edit'}>
      Edit
    </UpButton>
    <UpButton onClick={action('Delete')} width={'normal'} intent={'danger'} actionType={'delete'}>
      Remove
    </UpButton>
  </UpButtonGroup>
);

GluedButtons.storyName = 'Show Glued Buttons';

export const VerticalButtons = () => (
  <UpButtonGroup gutter={5} align={'h'}>
    <UpButton intent={'primary'} onClick={action('Add')} width={'normal'} actionType={'add'}>
      Add
    </UpButton>
    <UpButton onClick={action('Edit')} width={'normal'} intent={'primary'} actionType={'edit'}>
      Edit
    </UpButton>
    <UpButton onClick={action('Edit')} width={'normal'} intent={'info'} actionType={'info-sign'}>
      Info
    </UpButton>
    <UpButton onClick={action('Edit')} width={'normal'} intent={'warning'} actionType={'help'}>
      Aide
    </UpButton>
    <UpButton onClick={action('Delete')} width={'normal'} intent={'danger'} actionType={'delete'}>
      Remove
    </UpButton>
  </UpButtonGroup>
);

VerticalButtons.storyName = 'Show Multiple Buttons Vertically';

export const HorizontalButtons = () => (
  <>
    <UpButtonGroup gutter={20} align={'v'}>
      <UpButton intent={'secondary'} onClick={action('Add')} width={'full'} actionType={'add'}>
        Add
      </UpButton>
      <UpButton onClick={action('Edit')} width={'full'} intent={'primary'} actionType={'edit'}>
        Edit
      </UpButton>
      <UpButton onClick={action('Delete')} width={'full'} intent={'danger'} actionType={'delete'}>
        Remove
      </UpButton>
    </UpButtonGroup>
  </>
);

HorizontalButtons.storyName = 'Show Multiple Buttons Horizontally';

HorizontalButtons.decorators = [
  MultiButtonWithGutter => (
    <div
      style={{
        height: '300px',
        width: '300px',
        border: '2px solid #ffc83d',
        borderRadius: '6px',
      }}
    >
      <MultiButtonWithGutter />
    </div>
  ),
];
