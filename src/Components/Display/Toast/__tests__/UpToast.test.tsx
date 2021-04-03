import * as React from 'react';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpToast from '../UpToast';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';
import UpLigne from '../../../Display/Ligne';

const whithTheme = (component) => (
    <UpThemeProvider
        theme={UpDefaultTheme}>
        {component}
    </UpThemeProvider>
);
const renderComponent = component => render(whithTheme(component));

afterEach(cleanup);

describe('Tests for UpToast', () => {

    it('should render title in h4 tag', () => {
        renderComponent(
            <UpToast
                title={'Notice of operation'}
            />
        );

        const element = screen.getByText('Notice of operation');
        expect(element.nodeName).toBe('H4');
        expect(element).toHaveClass('up-toast-title');
    });

    it('should not render title if it is not provided', () => {
        const { container } = renderComponent(
            <UpToast />
        );

        expect(container.querySelector('.up-toast-title')).toBeNull();
    });

    it('should render icon close if title is provided', () => {
        const { container } = renderComponent(
            <UpToast
                title={'Notice of operation'}
            />
        );

        expect(container.querySelector('.up-toast-close')).not.toBeNull();
    });

    it('should not render icon close if it is not provided', () => {
        const { container } = renderComponent(
            <UpToast />
        );

        expect(container.querySelector('.up-toast-close')).toBeNull();
    });

    it('should not render content if message or children are not provided', () => {
        const { container } = renderComponent(
            <UpToast />
        );

        expect(container.querySelector('.up-toast-body').childElementCount).toBe(0);
    });

    it('should render message if it is provided', () => {
        renderComponent(
            <UpToast
                message={'operation is executed successfully'}
            />
        );

        const element = screen.getByText('operation is executed successfully');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('up-notification-message');
    });

    it('should render expected message if it is passed as children', () => {
        const { container } = renderComponent(
            <UpToast>
                <p>
                    operation is executed successfully
                </p>
            </UpToast>
        );

        const element = container.querySelector('.up-notification-message');
        expect(element).toContainHTML('<p>operation is executed successfully</p>');
        expect(element).toHaveClass('up-notification-message');
    });
});