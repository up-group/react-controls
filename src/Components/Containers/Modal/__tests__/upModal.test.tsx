import * as React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpModal from '../UpModal';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';

const whithTheme = component => <UpThemeProvider theme={UpDefaultTheme}>{component}</UpThemeProvider>;
const renderComponent = component => render(whithTheme(component));

afterEach(cleanup);

describe('Tests for UpModal', () => {
  it('should show modal when showModal is true', () => {
    const { container } = renderComponent(<UpModal showModal={true} />);

    expect(container.querySelector('.up-modal')).toHaveClass('in');
    expect(container.querySelector('.up-modal_backdrop')).toBeVisible();
  });

  it('should hide modal when showModal prop change to false', () => {
    const { container } = renderComponent(<UpModal showModal={false} />);

    expect(container.querySelector('.up-modal')).toHaveClass('fade');
    expect(container.querySelector('.up-modal_backdrop')).not.toBeVisible();
  });

  it('should add a header seperator by default', () => {
    const { container } = renderComponent(<UpModal />);

    expect(container.querySelector('.up-modal_header')).toHaveStyle('border-bottom: 1px solid #e5e5e5');
  });

  it('should remove the header seperator', () => {
    const { container } = renderComponent(<UpModal withHeaderSeparator={false} />);

    expect(container.querySelector('.up-modal_header').getAttribute('style')).toBeNull();
  });

  it('should call onClose when clicking on the close icon', () => {
    const onClose = jest.fn();
    const { container } = renderComponent(<UpModal onClose={onClose} />);

    fireEvent.click(container.querySelector('.up-modal_close'));
    expect(onClose).toHaveBeenCalled();
  });

  it('should call onClose callback when click on the overlay', () => {
    const onClose = jest.fn();
    renderComponent(<UpModal showModal={true} onClose={onClose} closeOnClickOutside={true} />);

    fireEvent.mouseDown(document.body);
    expect(onClose).toHaveBeenCalled();
  });

  it('should not call onClose callback when click on the overlay', () => {
    const onClose = jest.fn();
    renderComponent(<UpModal showModal={true} onClose={onClose} closeOnClickOutside={false} />);

    fireEvent.mouseDown(document.body);
    expect(onClose).not.toHaveBeenCalled();
  });

  it('should show a header as string', () => {
    const header = 'Header';
    const { container } = renderComponent(<UpModal header={header} />);

    expect(container.querySelector('.up-modal_header')).toContainHTML('<h3 class="up-modal_title">Header</h3>');
  });

  it('should show a header as React element', () => {
    const header = <h4 className="up-modal_title">Other Header</h4>;
    const { container } = renderComponent(<UpModal header={header} />);

    expect(container.querySelector('.up-modal_header')).toContainHTML('<h4 class="up-modal_title">Other Header</h4>');
  });

  it('should show a footer', () => {
    const footer = 'Footer';
    const { container } = renderComponent(<UpModal footer={footer} />);

    expect(container.querySelector('.up-modal_footer')).toContainHTML('<div class="up-modal_footer">Footer</div>');
  });

  it('should show a footer as React element', () => {
    const footer = <h4>Footer</h4>;
    const { getByText } = renderComponent(<UpModal footer={footer} />);

    expect(getByText('Footer')).toContainHTML('<h4>Footer</h4>');
  });
});
