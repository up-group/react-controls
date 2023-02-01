import React from 'react';
import { Story } from '@storybook/react';
import { AddCommentButton, Props } from './AddCommentButton';

export default {
  component: AddCommentButton,
  title: 'Components/Inputs/UpAddCommentButton',
  argTypes: { onClick: { action: 'clicked' } },
};

const args = {
  label: 'Ajouter un commentaire',
  disabled: false,
};

const Template: Story<Props> = (args: Props) => <AddCommentButton {...args} />;

export const Default = Template.bind({});
Default.args = args;

export const Disabled = Template.bind({});
Disabled.args = { ...args, disabled: true };

export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = { ...args, label: 'Ajouter' };
