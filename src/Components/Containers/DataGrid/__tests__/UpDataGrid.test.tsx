import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';
import { General } from '../index.stories';

const whithTheme = (component) => <UpThemeProvider theme={UpDefaultTheme}>{component}</UpThemeProvider>

const renderComponent = component => render(whithTheme(component));

describe('Tests for UpDataGrid', () => {

    it('should show UpDataGrid', () => {
        const { getByTestId } = renderComponent(<General  />);

        expect(getByTestId('UpDataGrid')).toHaveClass('up-data-grid-container');
    });
});