import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpNotification from '../UpNotification';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';
import { act } from 'react-dom/test-utils';

const whithTheme = (component) => (
    <UpThemeProvider theme={UpDefaultTheme}>
        {component}
    </UpThemeProvider>
);
const renderComponent = component => render(whithTheme(component));

afterEach(cleanup);

describe('Tests for UpNotification', () => {

    beforeAll(() => {
        jest.useFakeTimers();
    })

    afterAll(() => {
        jest.useRealTimers()
    })

    it('should render title in h2 tag', () => {
        renderComponent(
            <UpNotification
                title={'Notification title'}
            >
            </UpNotification>
        );

        expect(screen.getByText('Notification title').nodeName).toBe('H2');
    });

    it('should not render title if displayMode is modal', () => {
        renderComponent(
            <UpNotification
                title={'Notification title'}
                displayMode={'modal'}
            >
            </UpNotification>
        );

        expect(screen.getByText('Notification title').nodeName).not.toBe('H2');
        expect(screen.getByText('Notification title').nodeName).toBe('H3');
        expect(screen.getByText('Notification title')).toHaveClass('up-modal_title');
    });

    it('should render message', () => {
        const { container } = renderComponent(
            <UpNotification
                title={'Mon panel'}
            >
                <p>Your transaction has been saved successfully !</p>
            </UpNotification>
        );

        expect(container.querySelector('.up-notification-message')).toContainHTML('<p>Your transaction has been saved successfully !</p>');
    });

    it('should render progress bar if durationBeforeClosing is provided', () => {
        const { container } = renderComponent(
            <UpNotification
                durationBeforeClosing={8}
            >
                <p>Your transaction has been saved successfully !</p>
            </UpNotification>
        );

        expect(container.querySelector('.up-notification-progress-bar-container')).toBeInTheDocument();
    });

    it('should not render progress bar if falsy durationBeforeClosin', () => {
        const { container } = renderComponent(
            <UpNotification>
                <p>Your transaction has been saved successfully !</p>
            </UpNotification>
        );

        expect(container.querySelector('.up-notification-progress-bar-container')).toBeNull();
    });

    it('should show close icon if onCloseClick is provided', () => {
        const { container } = renderComponent(
            <UpNotification
                onCloseClick={() => { }}
            />
        );

        expect(container.querySelector('.cancel-icon')).toBeInTheDocument();
    });

    it('should show close icon if dismissable is provided', () => {
        const { container } = renderComponent(
            <UpNotification
                dismissable={true}
            />
        );

        expect(container.querySelector('.cancel-icon')).toBeInTheDocument();
    });

    it('should fire close callback on close icon click', () => {
        const onClose = jest.fn();
        const { container } = renderComponent(
            <UpNotification
                onCloseClick={onClose}
            />
        );

        fireEvent.click(container.querySelector('.cancel-icon'));
        expect(onClose).toHaveBeenCalled();
    });

    it('should render icon illustration by default', () => {
        const { container } = renderComponent(
            <UpNotification />
        );

        expect(container.querySelector('.up-notification-icon-container')).toBeInTheDocument();
    });

    it('should render icon illustration if intent is provided', () => {
        const { container } = renderComponent(
            <UpNotification
                intent={'danger'}
            />
        );

        expect(container.querySelector('.up-notification-icon-container')).toBeInTheDocument();
    });

    it('should render UpNotification in modal', () => {
        const { container } = renderComponent(
            <UpNotification
                displayMode={'modal'}
            />
        );

        expect(container.querySelector('.up-modal')).toBeInTheDocument();
        expect(container.querySelector('.up-modal_body').childElementCount).toBe(1);
        expect(container.querySelector('.up-modal_body').firstElementChild).toHaveClass('up-notification');
    });

    it('should hide notification after close icon click', () => {
        const onClose = jest.fn();
        const { container } = renderComponent(
            <UpNotification
                onCloseClick={onClose}
            />
        );

        fireEvent.click(container.querySelector('.cancel-icon'));
        expect(container.querySelector('.up-notification')).not.toBeInTheDocument();
    });

    it('should auto hide notification after certain time', async () => {
        await act(async () => {
            renderComponent(
                <UpNotification
                    title={'Notification Title'}
                    dismissable={true}
                    durationBeforeClosing={5}
                />
            );

            expect(screen.queryByText('Notification Title')).toBeInTheDocument();
            jest.advanceTimersByTime(5500);
            expect(screen.queryByText('Notification Title')).not.toBeInTheDocument();
        });
    });
});
