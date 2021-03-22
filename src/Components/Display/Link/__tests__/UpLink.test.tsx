import * as React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpLink from '../UpLink';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';

const whithTheme = (component) => <UpThemeProvider theme={UpDefaultTheme}>{component}</UpThemeProvider>;
const renderComponent = component => render(whithTheme(component));

afterEach(cleanup);

describe('Tests for UpLink', () => {

    it('should render anchor element', () => {
        const { getByText } = renderComponent(
            <UpLink
                label={'My anchor'}
            />
        );

        expect(getByText('My anchor').nodeName).toBe('A');
    });

    it('should add correct href', () => {
        const { getByText } = renderComponent(
            <UpLink
                label={'My anchor'}
                href='https://example.com'
            />
        );

        expect(getByText('My anchor').getAttribute('href')).toBe('https://example.com');
    });

    it('should fire callback on click', () => {
        const onClick = jest.fn();
        const { getByText } = renderComponent(
            <UpLink
                label={'My anchor'}
                onClick={onClick}
            />
        );

        fireEvent.click(getByText('My anchor'));
        expect(onClick).toHaveBeenCalled();
    });

    it('should add class to anchor', () => {
        const { getByText } = renderComponent(
            <UpLink
                label={'My anchor'}
            />
        );

        expect(getByText('My anchor').className).toBeTruthy();
    });

    it('should add tooltips if dataFor is provided', () => {
        const { getByText } = renderComponent(
            <UpLink
                label={'My anchor'}
                dataFor={'anchor'}
            />
        );

        expect(getByText('My anchor').getAttribute('data-tip')).toBe('tooltip');
        expect(getByText('My anchor').getAttribute('data-for')).toBe('anchor');
    });
});