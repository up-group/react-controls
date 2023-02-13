import React from 'react';
import { Story } from '@storybook/react';
import { CommentTimeline, Props } from './CommentTimeline';

export default {
  component: CommentTimeline,
  title: 'Components/Display/UpCommentTimeline',
  argTypes: { onSubmit: { action: 'submitted' } },
};

const comment1 = {
  id: '360',
  author: 'Isabelle',
  date: '13/05/2022',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis dolor orci, quis porttitor elit maximus eu. Phasellus rutrum rhoncus libero eget tincidunt. Nunc aliquam, sem nec malesuada malesuada, urna ante faucibus justo, in efficitur enim est eu mauris. Duis egestas justo nec leo mattis, ac condimentum nulla auctor. Interdum et malesuada fames et.',
};

const comment2 = {
  id: '15',
  author: 'Isabelle',
  date: '14/05/2022',
  text: 'Lorem ipsum mi.',
};
const comment3 = {
  id: '350',
  author: 'Isabelle',
  date: '15/05/2022',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a dictum lectus, eu maximus libero. Mauris dolor mauris, luctus vitae tortor vel, tincidunt pellentesque erat. Proin pharetra aliquam libero, rutrum molestie augue bibendum nec. Aenean tempor ipsum vel metus sagittis, at tincidunt diam sollicitudin. Ut a erat libero. Nulla egestas.',
};
const comment4 = {
  id: '4',
  author: 'Isabelle',
  date: '16/05/2022',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum ligula at malesuada posuere. Curabitur quis eros sit amet magna vulputate eleifend. Nulla leo mi, porttitor nec ultricies at, venenatis vitae urna. Nam maximus lacinia nulla, non posuere nulla interdum vitae. Morbi imperdiet id metus id pretium. Sed id commodo nisl turpis duis.',
};

const comments = [comment1, comment2, comment3, comment4];

const args = {
  author: 'Ludovic',
  dateFormat: 'DD/MM/YYYY',
};

const Template: Story<Props> = (args: Props) => (
  <div>
    <CommentTimeline {...args} />
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec risus tincidunt, mattis felis in, scelerisque
      est. Vivamus interdum lorem rhoncus, placerat dui et, rutrum elit. Aenean rutrum eleifend turpis nec placerat.
      Etiam gravida elit ex, a efficitur neque maximus ut. Suspendisse potenti. Pellentesque egestas cursus nibh, id
      faucibus nisi egestas at. Donec blandit odio ut volutpat viverra. Pellentesque imperdiet dui eu turpis sodales
      fermentum. Ut ornare tortor et ornare dictum. Cras mauris velit, mollis vitae justo eget, tincidunt consectetur
      quam. Donec augue quam, finibus a urna vel, auctor viverra dolor. Pellentesque vehicula eu urna et iaculis. Cras
      nunc quam, pretium vitae odio feugiat, imperdiet dapibus mauris. In non tortor sollicitudin mi suscipit viverra
      quis tempor mauris. Aliquam bibendum varius ante. Pellentesque nec congue ligula, sed malesuada ligula. Duis ipsum
      sapien, elementum et augue in, porta placerat magna. Nullam eget lectus sit amet tortor venenatis tempus dignissim
      in quam. Fusce a tellus lorem.
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = { ...args, comments };

export const Empty = Template.bind({});
Empty.args = { ...args, comments: [] };
