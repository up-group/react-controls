import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';
import { General } from '../index.stories';

const whithTheme = component => <UpThemeProvider theme={UpDefaultTheme}>{component}</UpThemeProvider>;

const renderComponent = component => render(whithTheme(component));

describe('Tests for UpToggle', () => {
  it('should show UpToggle', () => {
    const { getAllByTestId } = renderComponent(<General />);
    const elements = getAllByTestId('UpToggle');
    for (const element of elements) {
      expect(element).toHaveClass('up-toggle');
    }
  });
});
