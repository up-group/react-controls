import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';
import { General } from '../index.stories';

const whithTheme = (component) => <UpThemeProvider theme={UpDefaultTheme}>{component}</UpThemeProvider>

const renderComponent = component => render(whithTheme(component));

const getThemeProvider = ({ children }) => (
    <UpThemeProvider theme={UpDefaultTheme}>
        {children}
    </UpThemeProvider>);

describe('Tests for UpRating', () => {

    it('should show rating with 5 stars', () => {
        const { getByTestId } = renderComponent(<General  />);

        expect(getByTestId('UpRating')).toHaveClass('up-rating');
    });
});