import { Story } from '@storybook/react';
import { ReadMoreText, Props } from './ReadMoreText';

export default {
  component: ReadMoreText,
  title: 'Components/Display/ReadMoreText',
  argTypes: { onChange: { action: 'changed' } },
};

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed iaculis est. Donec placerat auctor malesuada. Curabitur a leo aliquam, bibendum turpis at, aliquam arcu. Praesent aliquet, augue at posuere hendrerit, dolor orci faucibus quam, id laoreet libero nisi ut lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer in cursus nisl, a mattis mi. Mauris scelerisque ipsum id magna lobortis, ac aliquam leo faucibus. Integer rhoncus ante at erat finibus rhoncus.';

const args: Props = {
  text,
  max: 350,
};

const Template: Story<Props> = args => <ReadMoreText {...args} />;

export const Default = Template.bind({});
Default.args = args;
