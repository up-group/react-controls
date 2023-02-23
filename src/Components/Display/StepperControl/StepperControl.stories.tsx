import { Story } from '@storybook/react';
import { StepperControl, Props } from './StepperControl';

export default {
  component: StepperControl,
  title: 'Components/Display/StepperControl',
  argTypes: { onClick: { action: 'clicked' } },
};

const args: Props = {
  direction: 'left',
};

const Template: Story<Props> = args => (
  <div>
    <StepperControl {...args} />
  </div>
);

export const Left = Template.bind({});
Left.args = args;

export const Right = Template.bind({});
Right.args = { ...args, direction: 'right' };
