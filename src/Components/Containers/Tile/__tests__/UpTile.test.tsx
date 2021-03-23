import * as React from 'react';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpTile from '../UpTile';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';

const whithTheme = (component) => (
    <UpThemeProvider
        theme={UpDefaultTheme}
    >
        {component}
    </UpThemeProvider>
);
const renderComponent = component => render(whithTheme(component));

afterEach(cleanup);

describe('Tests for UpTile', () => {

    it('should render title in h3 tag', () => {
        renderComponent(
            <UpTile
                title={'UpTile title'}>
            </UpTile>
        );

        expect(screen.getByText('UpTile title').nodeName).toBe('H3');
        expect(screen.getByText('UpTile title')).toHaveClass('box-title');
    });

    it('should render a footer in div tag', () => {
        const { container } = renderComponent(
            <UpTile
                footer='This is the footer'>
            </UpTile>
        );

        expect(container.querySelector('.box-footer')).toHaveTextContent('This is the footer');
        expect(container.querySelector('.box-footer').nodeName).toBe('DIV');
    });

    it('should collapse UpTile afer button collapse click', () => {
        const { container } = renderComponent(
            <UpTile />
        );

        expect(container.querySelector('.box-body')).toBeVisible();
        expect(container.querySelector('.box-home')).not.toHaveClass('collapsed-box');

        fireEvent.click(container.querySelector('button'));
        expect(container.querySelector('.box-home')).toHaveClass('collapsed-box');
    });

    it('should render content', () => {
        const { container } = renderComponent(
            <UpTile>
                <p>Content</p>
            </UpTile>
        );

        expect(container.querySelector('.box-body')).toContainHTML('<p>Content</p>');
    });

    it('should apply a maxHeight property', () => {
        const { container } = renderComponent(
            <UpTile
                maxHeight="200"
            >
                <p>Content</p>
            </UpTile>
        );

        const bodyElement = container.querySelector('.box-body').firstElementChild;
        const cssbodyElement = window.getComputedStyle(bodyElement);
        expect(cssbodyElement.maxHeight).toBe('200px');
        expect(cssbodyElement.overflowY).toBe('auto');
    });
});