import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpLigne from '../UpLigne';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';
import { style } from 'typestyle';
import UpTooltip from '../../../Display/Tooltip';

const whithTheme = component => (
  <UpThemeProvider theme={UpDefaultTheme}>
    {component}
  </UpThemeProvider>
);
const renderComponent = component => render(whithTheme(component));

describe('Tests for UpLigne', () => {
  it('should render content in span tag', () => {
    renderComponent(<UpLigne>My message</UpLigne>);

    expect(screen.getByText('My message').nodeName).toBe('SPAN');
  });

  it('should add default class for customization ', () => {
    renderComponent(<UpLigne>My message</UpLigne>);

    expect(screen.getByText('My message').classList.length).toBe(1);
  });

  it('should add additional class if className property is provided ', () => {
    renderComponent(
      <UpLigne
        className={style({
          color: '#000',
        })}>
        My message
      </UpLigne>
    );

    expect(screen.getByText('My message').classList.length).toBe(2);
  });

  it('should add ToolTip if dataFor property is provided', () => {
    renderComponent(
      <UpTooltip
        id={'Tooltip'}
        title={'Détails'}
        content={'Tooltip content'}>
        <UpLigne dataFor="Tooltip">Hover to display Tooltip</UpLigne>
      </UpTooltip>
    );

    expect(
      screen
        .getByText('Hover to display Tooltip')
        .getAttribute('data-for')
    ).toBe('Tooltip');
    expect(screen.getByText('Tooltip content')).toHaveClass(
      'up-tooltip-body'
    );
  });

  it('should not add ToolTip if dataFor property is not provided', () => {
    const { container } = renderComponent(
      <UpLigne>My message</UpLigne>
    );

    expect(
      screen.getByText('My message').getAttribute('data-for')
    ).toBeNull();
    expect(container.querySelector('.up-tooltip-body')).toBeNull();
  });
});
