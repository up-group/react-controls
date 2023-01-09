import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { UpSlider, Props } from './UpSlider';

const onChange = jest.fn();

const steps = Array.from({ length: 10 }, (_, i) => <p key={i}>{`Child ${i + 1}`}</p>);

let props: Props = {
  steps,
  onChange,
  displayedItemsCount: 1,
};

const create = (): React.ReactNode => render(<UpSlider {...props} />);

describe('UpSlider', () => {
  beforeEach(() => {
    props = {
      steps,
      onChange,
      displayedItemsCount: 1,
    };
  });

  it('should test if component render content correctly', () => {
    create();

    const item1 = screen.getByText('Child 1');
    const item2 = screen.queryByText('Child 2');

    const nextButton = screen.getByTestId('stepper-control-right');
    const leftButton = screen.queryByText('stepper-control-left');

    expect(item1).toBeDefined();
    expect(item2).toBeNull();
    expect(nextButton).toBeDefined();
    expect(leftButton).toBeNull();
  });

  it('should render displayedItemsCount items', () => {
    props.displayedItemsCount = 2;
    create();

    const item1 = screen.getByText('Child 1');
    const item2 = screen.getByText('Child 2');

    expect(item1).toBeDefined();
    expect(item2).toBeDefined();
  });

  it('should navigate to the second item and hide the first', () => {
    create();

    let item1 = screen.getByText('Child 1');
    let item2 = screen.queryByText('Child 2');
    const nextButton = screen.getByTestId('stepper-control-right');

    expect(item1).toBeDefined();
    expect(item2).toBeNull();

    fireEvent.click(nextButton);

    item1 = screen.queryByText('Child 1');
    item2 = screen.getByText('Child 2');

    expect(item1).toBeNull();
    expect(item2).toBeDefined();
  });
});
