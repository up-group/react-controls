import React from 'react';
import { render, screen, fireEvent, cleanup, RenderResult } from '@testing-library/react';

import { UpTagsSelect, Props } from './UpTagsSelect';

const onChange = jest.fn();

const tags = [
  { id: '1', text: 'Mono', selected: false },
  { id: '2', text: 'Multi', selected: false },
];

const props: Props = {
  tags,
  label: "Nombre d'anomalies par titre",
  onChange,
};

const create = (): RenderResult => render(<UpTagsSelect {...props} />);
afterEach(cleanup);

describe('TagsSelect', () => {
  it('should test if component render content correctly', () => {
    create();

    const text = screen.getByText("Nombre d'anomalies par titre");
    const tag1 = screen.getByText('Mono');
    const tag2 = screen.getByText('Multi');

    expect(text).toBeDefined();
    expect(tag1).toBeDefined();
    expect(tag2).toBeDefined();
  });

  it('should call the onChange prop when one of the tags is clicked', () => {
    create();

    const tag1 = screen.getByText('Mono');

    fireEvent.click(tag1);
    expect(onChange).toHaveBeenCalledWith(expect.anything(), [
      { id: '1', text: 'Mono', selected: true },
      { id: '2', text: 'Multi', selected: false },
    ]);

    fireEvent.click(tag1);
    expect(onChange).toHaveBeenCalledWith(expect.anything(), [
      { id: '1', text: 'Mono', selected: false },
      { id: '2', text: 'Multi', selected: false },
    ]);
  });
});
