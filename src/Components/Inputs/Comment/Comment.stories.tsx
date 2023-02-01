import React from 'react';
import { Story } from '@storybook/react';
import { Comment, Props } from './Comment';

export default {
  component: Comment,
  title: 'Components/Display/UpComment',
  argTypes: {
    onCancel: { action: 'cancel' },
    onChange: { action: 'change' },
    onSubmit: { action: 'submit' },
  },
};

const args: Props = {
  author: 'Isabelle',
  date: '13/05/2022',
  text: 'Lorem ipsum',
};

const Template: Story<Props> = (args: Props) => <Comment {...args} />;

export const Default = Template.bind({});
Default.args = args;

export const EditionMode = Template.bind({});
EditionMode.args = { ...args, mode: 'edition' };

export const LockedMode = Template.bind({});
LockedMode.args = { ...args, mode: 'locked' };
