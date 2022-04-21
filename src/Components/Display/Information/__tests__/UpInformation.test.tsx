import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpInformation from '../UpInformation';

describe('Tests for UpInformation', () => {
  it('should render expected title in span tag', () => {
    render(<UpInformation title={'Informations'} iconName={'wink-grey'} />);

    expect(screen.getByText('Informations').nodeName).toBe('SPAN');
    expect(screen.getByText('Informations')).toHaveClass('up-information-title');
  });

  it('should not render title if iconName is not provided', () => {
    const { container } = render(<UpInformation title={'Informations'} />);

    expect(container.querySelector('.up-information-title')).toBeNull();
  });

  it('should not render title if title is not provided', () => {
    const { container } = render(<UpInformation iconName={'warning'} />);

    expect(container.querySelector('.up-information-title')).toBeNull();
  });

  it('should render expected content', () => {
    const { container } = render(
      <UpInformation title={'Informations'} iconName={'wink-grey'} content={'UpInformation content'} />
    );

    expect(container.querySelector('.up-box-content')).toHaveTextContent('UpInformation content');
  });

  it('should not render action button if action is not provided', () => {
    const { container } = render(<UpInformation title={'Informations'} iconName={'wink-grey'} />);

    expect(container.querySelector('button')).toBeNull();
  });

  it('should not render action button if action is provided', () => {
    const { container } = render(
      <UpInformation
        action={{
          libelle: 'Continuer',
          onClick: () => {},
        }}
      />
    );

    expect(container.querySelector('button')).toBeTruthy();
    expect(container.querySelector('button').textContent).toBe('Continuer');
  });
});
