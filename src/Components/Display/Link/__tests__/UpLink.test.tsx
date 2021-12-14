import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import UpLink from '../UpLink';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';

const whithTheme = component => (
  <UpThemeProvider theme={UpDefaultTheme}>
    {component}
  </UpThemeProvider>
);
const renderComponent = component => render(whithTheme(component));

afterEach(cleanup);

describe('Tests for UpLink', () => {
  it('should render anchor element', () => {
    renderComponent(<UpLink label={'My anchor'} />);

    expect(screen.getByText('My anchor').nodeName).toBe('A');
  });

  it('should add correct href', () => {
    renderComponent(
      <UpLink label={'My anchor'} href="https://example.com" />
    );

    expect(screen.getByText('My anchor').getAttribute('href')).toBe(
      'https://example.com'
    );
  });

  it('should add correct target', () => {
    renderComponent(<UpLink label={'My anchor'} target="_blank" />);

    expect(screen.getByText('My anchor').getAttribute('target')).toBe(
      '_blank'
    );
  });

  it('should fire callback on click', () => {
    const onClick = jest.fn();
    renderComponent(<UpLink label={'My anchor'} onClick={onClick} />);

    fireEvent.click(screen.getByText('My anchor'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should add class to anchor', () => {
    renderComponent(<UpLink label={'My anchor'} />);

    expect(
      screen.getByText('My anchor').className.length
    ).toBeGreaterThan(0);
  });

  it('should add tooltips if dataFor is provided', () => {
    renderComponent(
      <UpLink label={'My anchor'} dataFor={'anchor'} />
    );

    expect(
      screen.getByText('My anchor').getAttribute('data-tip')
    ).toBe('tooltip');
    expect(
      screen.getByText('My anchor').getAttribute('data-for')
    ).toBe('anchor');
  });
});
