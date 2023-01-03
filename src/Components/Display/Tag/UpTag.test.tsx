// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { UpTag, Props } from './UpTag';

const onChange = jest.fn();

const props: Props = {
  id: '1',
  text: 'Mono',
  onChange,
  selected: false,
};

const create = (): RenderResult => render(<UpTag {...props} />);

describe('Tag', () => {
  it('should test if component render content correctly', () => {
    create();

    const text = screen.getByText('Mono');
    const id = screen.getByTestId(`tag-${props.id}`);

    expect(text).toBeDefined();
    expect(id).toBeDefined();
  });
});
