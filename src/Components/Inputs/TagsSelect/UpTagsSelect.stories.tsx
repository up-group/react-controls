import React from 'react';
import { Story } from '@storybook/react';
import { UpTagsSelect, Props } from './UpTagsSelect';

export default {
  component: UpTagsSelect,
  title: 'Components/Inputs/UpTagsSelect',
  argTypes: { onChange: { action: 'selected' } },
};

const tags = [
  {
    id: '1',
    text: 'Mono',
  },
  {
    id: '2',
    text: 'Multi',
  },
  {
    id: '3',
    text: 'Tag 3',
  },
];

const args = {
  tags,
};

const Template: Story<Props> = args => <UpTagsSelect {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = { ...args, label: "Nombre d'anomalies par titre" };

export const Default = Template.bind({});
Default.args = args;

export const WithDefaultSelected = Template.bind({});
WithDefaultSelected.args = {
  ...args,
  tags: [
    { id: '1', text: 'Mono', selected: true },
    { id: '2', text: 'Multi', selected: true },
    { id: '3', text: 'Tag 3', selected: false },
  ],
};
