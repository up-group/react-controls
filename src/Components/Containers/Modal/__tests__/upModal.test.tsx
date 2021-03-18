import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpModal from '../UpModal';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';

const whithTheme = (component) => <UpThemeProvider theme={UpDefaultTheme}>{component}</UpThemeProvider>

const renderComponent = component => render(whithTheme(component));

describe('Tests for UpModal', () => {

    it('should show modal when showModal prop change to true', () => {
        const { getByTestId } = renderComponent(
            <UpModal
                showModal={true}
                dataTestId={'UpModal'}
            />
        );

        expect(getByTestId('UpModal')).toHaveClass('in');
        expect(getByTestId('UpModal').parentElement.querySelector('.up-modal_backdrop')).toBeVisible();
    });

    it('should hide modal when showModal prop change to false', () => {
        const { getByTestId } = renderComponent(
            <UpModal
                showModal={false}
                dataTestId={'UpModal'}
            />
        );

        expect(getByTestId('UpModal')).toHaveClass('fade');
        expect(getByTestId('UpModal').parentElement.querySelector('.up-modal_backdrop')).not.toBeVisible();
    });

    it('adds a header seperator', () => {
        const { getByTestId } = renderComponent(
            <UpModal
                dataTestId={'UpModal'}
            />
        );

        expect(getByTestId('UpModal').querySelector('.up-modal_header')).toHaveStyle('border-bottom: 1px solid #e5e5e5');
    });

    it("should call onClose when clicking on the close icon", () => {
        const onClose = jest.fn();
        const { getByTestId } = renderComponent(
            <UpModal
                onClose={onClose}
                dataTestId={'UpModal'}
            />
        );

        fireEvent.click(getByTestId('UpModal').querySelector('.up-modal_close'));
        expect(onClose).toHaveBeenCalled();
    });

    it('should call onClose callback when click on the overlay', () => {
        const onClose = jest.fn();
        renderComponent(
            <UpModal
                showModal={true}
                onClose={onClose}
                closeOnClickOutside={true}
                dataTestId={'UpModal'}
            />
        );

        fireEvent.mouseDown(document.body);
        expect(onClose).toHaveBeenCalled();
    });

    it('should not call onClose callback when click on the overlay', () => {
        const onClose = jest.fn();
        renderComponent(
            <UpModal
                showModal={true}
                onClose={onClose}
                closeOnClickOutside={false}
                dataTestId={'UpModal'}
            />
        );

        fireEvent.mouseDown(document.body);
        expect(onClose).not.toHaveBeenCalled();
    });

    it('should show a header as string', () => {
        const header = 'Header';
        const { getByTestId } = renderComponent(
            <UpModal
                header={header}
                dataTestId={'UpModal'}
            />
        );

        expect(getByTestId('UpModal').querySelector('.up-modal_header')).toContainHTML('<h3 class="up-modal_title">Header</h3>');
    });

    it('should show a header as React element', () => {
        const header = <h4 className="up-modal_title">Other Header</h4>;
        const { getByTestId } = renderComponent(
            <UpModal
                header={header}
                dataTestId={'UpModal'}
            />
        );

        expect(getByTestId('UpModal').querySelector('.up-modal_header')).toContainHTML('<h4 class="up-modal_title">Other Header</h4>');
    });

    it('should show a footer', () => {
        const footer = 'Footer';
        const { getByTestId } = renderComponent(
            <UpModal
                footer={footer}
                dataTestId={'UpModal'}
            />
        );

        expect(getByTestId('UpModal').querySelector('.up-modal_footer')).toContainHTML('<div class="up-modal_footer">Footer</div>');
    });

    it('should show a footer as React element', () => {
        const footer = <h4>Footer</h4>;
        const { getByText } = renderComponent(
            <UpModal
                footer={footer}
                dataTestId={'UpModal'}
            />
        );

        expect(getByText('Footer')).toContainHTML('<h4>Footer</h4>');
    });
});