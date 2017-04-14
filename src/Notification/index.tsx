import * as React from 'react';
import BoxStyled from './styles';
import Paragraph from '../Paragraph';
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
  return (<BoxStyled message="" boxSize={{ horizontal: 'medium' }} pad="small" alignItems="center" selectable>
      <Paragraph paragraphSize="large" color="white">{message}</Paragraph>
    </BoxStyled>);
};
