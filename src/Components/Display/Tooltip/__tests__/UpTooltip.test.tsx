import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpTooltip from '../UpTooltip';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';
import UpLigne from '../../Ligne';

const whithTheme = (component) => (
    <UpThemeProvider theme={UpDefaultTheme}>
        {component}
    </UpThemeProvider>
);
const renderComponent = component => render(whithTheme(component));

describe('Tests for UpTooltip', () => {

    it('should render Tooltip component', () => {
        const { container } = renderComponent(
            <UpTooltip
                content={'MyTooltip'}
            >
                <UpLigne>
                    UpTooltip
                </UpLigne>
            </UpTooltip>
        );

        expect(container.querySelector('.__react_component_tooltip')).not.toBeNull();
    });

    it('should not render Tooltip component if no content', () => {
        const { container } = renderComponent(
            <UpTooltip
                content={null}
            >
                <UpLigne>
                    UpTooltip
                </UpLigne>
            </UpTooltip>
        );

        expect(container.querySelector('.__react_component_tooltip')).toBeNull();
    });

    it('should add right data attributes', () => {
        const { container } = renderComponent(
            <UpTooltip
                content={'MyTooltip'}
            >
                <UpLigne>
                    UpTooltip
                </UpLigne>
            </UpTooltip>
        );

        const element = screen.getByText('UpTooltip');
        const DataTipElementAtrr = element.getAttribute('data-tip');
        const DataForElementAttr = element.getAttribute('data-for');

        expect(DataTipElementAtrr).toBe('tooltip');
        expect(DataForElementAttr).not.toBeNull();
        expect(container.querySelector('.__react_component_tooltip').getAttribute('id')).toBe(DataForElementAttr);
    });

    it('should render function chidren as element', () => {
        renderComponent(
            <UpTooltip
                content={'MyTooltip'}
            >
                {
                    ({ id }) => (
                        <UpLigne
                            data-for={id}
                            data-tip='tooltip'
                        >
                            UpTooltip
                        </UpLigne>
                    )
                }
            </UpTooltip>
        );

        const element = screen.getByText('UpTooltip');

        expect(element.nodeName).toBe('SPAN');
        expect(element.getAttribute('data-for')).not.toBeNull();
    });

    it('should render children without Tooltip data attributes if invalid Element', () => {
        renderComponent(
            <UpTooltip
                content={'MyTooltip'}
            >
                UpTooltip 
            </UpTooltip>
        );

        const element = screen.getByText('UpTooltip');
        const DataTipElementAtrr = element.getAttribute('data-tip');
        const DataForElementAttr = element.getAttribute('data-for');

        expect(DataTipElementAtrr).toBeNull();
        expect(DataForElementAttr).toBeNull();
    })
});