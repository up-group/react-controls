import React from 'react';
import { Story } from '@storybook/react';
import { UpTagsSelect, Props } from './UpTagsSelect';
import _ from 'lodash';

export default {
  component: UpTagsSelect,
  title: 'Components/Inputs/UpTagsSelect',
  argTypes: { onChange: { action: 'selected' } },
};

const tags = [
  {
    id: '1',
    text: 'Mono',
    selected: false,
  },
  {
    id: '2',
    text: 'Multi',
    selected: false,
  },
  {
    id: '3',
    text: 'Tag 3',
    selected: false,
  },
];

const args: Props = {
  tags,
  multipleSelection: true,
};

const Template: Story<Props> = (args: Props) => {
  const [tags, setTags] = React.useState(args.tags);
  return (
    <UpTagsSelect
      {...args}
      tags={tags}
      onChange={(e, value) =>
        setTags(
          _.isArray(value)
            ? value
            : tags.map(tag => {
                if (value.id == tag.id) {
                  tag.selected = value.selected;
                } else {
                  tag.selected = false;
                }
                return tag;
              })
        )
      }
    />
  );
};

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

export const SingleTagSelection = Template.bind({});
SingleTagSelection.args = {
  ...args,
  multipleSelection: false,
};
