import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpPanel from '../UpPanel';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';

const whithTheme = component => <UpThemeProvider theme={UpDefaultTheme}>{component}</UpThemeProvider>;
const renderComponent = component => render(whithTheme(component));

afterEach(cleanup);

describe('Tests for UpPanel', () => {
  it('should render title', () => {
    const { container } = renderComponent(<UpPanel title={'Mon panel'} />);

    expect(container.querySelector('.up-panel_header')).toHaveTextContent('Mon panel');
  });

  it('should render title as react element', () => {
    renderComponent(<UpPanel title={<h3>Mon JSX Panel</h3>} />);

    expect(screen.getByText('Mon JSX Panel').nodeName).toBe('H3');
    expect(screen.getByText('Mon JSX Panel').parentNode).toHaveClass('up-panel_header');
  });

  it('should render a message body', () => {
    const { container } = renderComponent(<UpPanel title={'Mon panel'} message={'Mon panel text'} />);

    expect(container.querySelector('.up-panel_message')).toHaveTextContent('Mon panel text');
  });

  it('should render footer', () => {
    const { container } = renderComponent(<UpPanel footer={'this is the footer'} />);

    expect(container.querySelector('.up-panel_footer')).toHaveTextContent('this is the footer');
  });

  it('should render footer as react element', () => {
    const { container } = renderComponent(<UpPanel footer={<h3>this is the footer</h3>} />);

    expect(container.querySelector('.up-panel_footer')).toContainHTML('<h3>this is the footer</h3>');
  });

  it('should not show an icone if truthy disableAutoIntentIcon or no icon is provided', () => {
    const { container } = renderComponent(
      <UpPanel type={'default'} title={'Mon Panel'} message={'Mon panel text'} disableAutoIntentIcon={true} />
    );

    expect(container.querySelector('.up-panel_message').parentNode).toHaveClass('up-col-24');
  });

  it('should show an icone if falsy disableAutoIntentIcon', () => {
    const { container } = renderComponent(
      <UpPanel type={'warning'} title={'Mon Panel'} message={'Warning Message'} disableAutoIntentIcon={false} />
    );

    expect(container.querySelector('.up-panel_message').parentNode).toHaveClass('up-col-22');
  });

  it('should show an icon if iconName property is provided', () => {
    const { container } = renderComponent(
      <UpPanel type={'warning'} title={'Mon Panel'} message={'Warning Message'} iconName={'warning'} />
    );

    expect(container.querySelector('.up-panel_message').parentNode).toHaveClass('up-col-22');
  });
});
