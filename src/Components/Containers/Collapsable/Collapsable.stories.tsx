import React from 'react';
import { Story } from '@storybook/react';
import { Collapsable, Props } from './Collapsable';

export default {
  component: Collapsable,
  title: 'Components/Containers/Collapsable',
  argTypes: { onClick: { action: 'clicked' } },
};

const args: Props = {
  title: 'Informations du commercant',
  defaultOpened: false,
  statusIndicator: true,
  withBorders: true,
};

const Template: Story<Props> = args => (
  <Collapsable {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed risus in justo dapibus suscipit.
      Suspendisse elementum pretium nunc, in dapibus massa pharetra non. Sed id erat consequat, pellentesque felis sed,
      efficitur nibh. Nullam interdum leo vel augue sodales, mollis consequat lorem faucibus. Quisque commodo erat quis
      elit ultricies varius. In sit amet risus semper, fringilla nisl non, euismod tortor. Curabitur consequat id sem eu
      tincidunt.
    </p>
  </Collapsable>
);

export const Default = Template.bind({});
Default.args = args;

export const WithoutStatusIndicator = Template.bind({});
WithoutStatusIndicator.args = { ...args, statusIndicator: false };

export const DefaultOpened = Template.bind({});
DefaultOpened.args = { ...args, defaultOpened: true };

export const WithoutBorders = Template.bind({});
WithoutBorders.args = { ...args, withBorders: false };
