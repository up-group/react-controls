import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpModal from '../UpModal';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';

describe('Tests for upModal', () => {

    const getThemeProvider = ({ children }) => (
        <UpThemeProvider theme={UpDefaultTheme}>
            {children}
        </UpThemeProvider>);

    const renderComponent = component => render(component, { wrapper: getThemeProvider });

    it('should show modal when showModal prop change to true', () => {
        const { getByTestId } = renderComponent(<UpModal showModal={true} />);

        expect(getByTestId('upModal')).toHaveClass('in');
    });

    it('should hide modal when showModal prop change to false', () => {
        const { getByTestId } = renderComponent(<UpModal showModal={false} />);

        expect(getByTestId('upModal')).toHaveClass('fade');
    });

    it('adds a header seperator', () => {
        const { getByTestId } = renderComponent(<UpModal />);

        expect(getByTestId('upModalHeader')).toHaveStyle('border-bottom: 1px solid #e5e5e5');
    });

    it("should call onClose when clicking on the close icon", () => {
        const onClose = jest.fn();
        const { getByTestId } = renderComponent(<UpModal onClose={onClose} />);

        fireEvent.click(getByTestId('upModalClose'));
        expect(onClose).toHaveBeenCalled();
    });

    it('should call onClose callback when click on the overlay', () => {
        const onClose = jest.fn();
        renderComponent(
            <UpModal
                showModal={true}
                onClose={onClose}
                closeOnClickOutside={true}
            />);

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
            />);

        fireEvent.mouseDown(document.body);
        expect(onClose).not.toHaveBeenCalled();
    });

    it('should show a header as string', () => {
        const header = 'Header';
        const { getByTestId } = renderComponent(<UpModal header={header} />);

        expect(getByTestId('upModalHeader')).toContainHTML('<h3 class="up-modal_title">Header</h3>');
        expect(getByTestId('upModalHeader').firstChild).toHaveTextContent('Header');
    });

    it('should show a header as React element', () => {
        const header = <h4 className="up-modal_title">Other Header</h4>;
        const { getByTestId } = renderComponent(<UpModal header={header} />);

        expect(getByTestId('upModalHeader')).toContainHTML('<h4 class="up-modal_title">Other Header</h4>');
    });

    it('should show a footer', () => {
        const footer = 'Footer';
        const { getByTestId } = renderComponent(<UpModal footer={footer} />);

        expect(getByTestId('upModalContent')).toContainHTML('<div class="up-modal_footer">Footer</div>');
        expect(getByTestId('upModalContent').lastChild).toHaveTextContent('Footer');
    });
});