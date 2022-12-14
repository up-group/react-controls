import { Story } from '@storybook/react';
import { UpSlider, Props } from './UpSlider';

export default {
  component: UpSlider,
  title: 'Components/Containers/UpSlider',
  argTypes: { onChange: { action: 'changed' } },
};

const steps = Array.from({ length: 10 }, (_, i) => <div key={i}> Child {i + 1}</div>);

const args: Props = {
  steps,
};

const images = [
  <img key={0} src={'./cheque-1.png'} alt={'Cheque 1'} />,
  <img key={1} src={'./cheque-1.png'} alt={'Cheque 2'} />,
  <img key={2} src={'./cheque-1.png'} alt={'Cheque 3'} />,
  <img key={3} src={'./cheque-1.png'} alt={'Cheque 4'} />,
  <img key={4} src={'./cheque-1.png'} alt={'Cheque 5'} />,
  <img key={5} src={'./cheque-1.png'} alt={'Cheque 6'} />,
  <img key={6} src={'./cheque-1.png'} alt={'Cheque 7'} />,
  <img key={7} src={'./cheque-1.png'} alt={'Cheque 8'} />,
  <img key={8} src={'./cheque-1.png'} alt={'Cheque 9'} />,
  <img key={9} src={'./cheque-1.png'} alt={'Cheque 10'} />,
  <img key={10} src={'./cheque-1.png'} alt={'Cheque 11'} />,
];

const Template: Story<Props> = args => <UpSlider {...args} />;

export const Default = Template.bind({});
Default.args = args;

export const WithImages = Template.bind({});
WithImages.args = { ...args, steps: images };
