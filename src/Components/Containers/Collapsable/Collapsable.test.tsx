import React from 'react';
import { render, screen, fireEvent, cleanup, RenderResult } from '@testing-library/react';

import { Collapsable, Props } from './Collapsable';

const onClick = jest.fn();

const textContent = 'Lorem ipsum dolor sit amet';

const props: Props = {
  title: 'Informations du commercant',
  defaultOpened: false,
  statusIndicator: true,
  onClick,
};

const create = (): RenderResult =>
  render(
    <Collapsable {...props}>
      <p>{textContent}</p>
    </Collapsable>
  );
afterEach(cleanup);

describe('Collapsable', () => {
  it('should test if component render content correctly', async () => {
    const { queryByText } = create();

    const title = screen.getByText('Informations du commercant');

    fireEvent.click(title);
    expect(screen.getByText(textContent)).toBeDefined();

    fireEvent.click(title);

    expect(queryByText(textContent)).toBeNull();
  });
});
