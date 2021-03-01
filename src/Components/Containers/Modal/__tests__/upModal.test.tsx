import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpModal from '../UpModal';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';

const whithTheme = (component) => <UpThemeProvider theme={UpDefaultTheme}>{component}</UpThemeProvider>

const renderComponent = component => render(whithTheme(component));

describe('Tests for UpModal', () => {

    it('should show modal when showModal prop change to true', () => {
        const { getByTestId } = renderComponent(<UpModal showModal={true} dataTestId={"UpModal"} />);

        expect(getByTestId('UpModal')).toHaveClass('in');
    });

    it('should hide modal when showModal prop change to false', () => {
        const { getByTestId } = renderComponent(<UpModal showModal={false} dataTestId={"UpModal"} />);

        expect(getByTestId('UpModal')).toHaveClass('fade');
    });

    it('adds a header seperator', () => {
        const { getByTestId } = renderComponent(<UpModal dataTestId={"UpModal"} />);
        expect(getByTestId('UpModal').getElementsByClassName('up-modal_header')[0]).toHaveStyle('border-bottom: 1px solid #e5e5e5');
    });

    it("should call onClose when clicking on the close icon", () => {
        const onClose = jest.fn();
        const { getByTestId } = renderComponent(<UpModal onClose={onClose} dataTestId={"UpModal"} />);

        fireEvent.click(getByTestId('UpModal').getElementsByClassName('up-modal_close')[0]);
        expect(onClose).toHaveBeenCalled();
    });

    it('should call onClose callback when click on the overlay', () => {
        const onClose = jest.fn();
        renderComponent(
            <UpModal
                showModal={true}
                onClose={onClose}
                closeOnClickOutside={true}
                dataTestId={"UpModal"}
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
                dataTestId={"UpModal"}
            />);

        fireEvent.mouseDown(document.body);
        expect(onClose).not.toHaveBeenCalled();
    });

    it('should show a header as string', () => {
        const header = 'Header';
        const { getByTestId } = renderComponent(<UpModal header={header}  dataTestId={"UpModal"} />);

        expect(getByTestId('UpModal').getElementsByClassName('up-modal_header')[0]).toContainHTML('<h3 class="up-modal_title">Header</h3>');
    });

    it('should show a header as React element', () => {
        const header = <h4 className="up-modal_title">Other Header</h4>;
        const { getByTestId } = renderComponent(<UpModal header={header}  dataTestId={"UpModal"} />);

        expect(getByTestId('UpModal').getElementsByClassName('up-modal_header')[0]).toContainHTML('<h4 class="up-modal_title">Other Header</h4>');
    });

    it('should show a footer', () => {
        const footer = 'Footer';
        const { getByTestId } = renderComponent(<UpModal footer={footer} dataTestId={"UpModal"} />);
        expect(getByTestId('UpModal').getElementsByClassName('up-modal_footer')[0]).toContainHTML('<div class="up-modal_footer">Footer</div>');
    });
});