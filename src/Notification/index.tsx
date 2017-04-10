import * as React from 'react';
import Box from './styles';
import { Paragraph } from '../';
import { Status } from './types';

export interface Props extends React.HTMLProps<Notification> {
  message: JSX.Element | string;
  status?: Status;
}
export default function Notification({
  message,
  status,
  ...rest,
}: Props): JSX.Element {
  return (
    <Box
      boxSize={{ horizontal: 'medium' }}
      pad="small"
      alignItems="center"
      selectable
    >
      <Paragraph paragraphSize="large" color="white">{message}</Paragraph>
    </Box>
  );
};
