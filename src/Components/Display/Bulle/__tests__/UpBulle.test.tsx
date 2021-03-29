import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpBulle from '../UpBulle';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';
import { style } from 'typestyle';

const whithTheme = (component) => (
    <UpThemeProvider theme={UpDefaultTheme}>
        {component}
    </UpThemeProvider>
);
const renderComponent = component => render(whithTheme(component));

describe('Tests for UpBulle', () => {

    it('should render UpBulle elements as expected', () => {
        const { container } = renderComponent(
            <UpBulle
                icon={'cake'}
                value={2}
                backgroundImage={'linear-gradient(282deg, #bddf3d, #5cbc15'}
                message={'Message'}
            />
        );

        expect(container.querySelector('.up-icon-wrapper')).not.toBeNull();
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByText('Message')).toBeInTheDocument();
    });

    it('should not render UpBulle elements if they are null or undefined', () => {
        const { container } = renderComponent(
            <UpBulle
                icon={null}
                value={undefined}
                backgroundImage={'linear-gradient(282deg, #bddf3d, #5cbc15'}
                message={null}
            />
        );

        expect(container.querySelector('.up-icon-wrapper')).toBeNull();
        expect(screen.queryByText('2')).toBeNull();
        expect(screen.queryByText('Message')).toBeNull();
    });

    it('should pass className through props', () => {
        const { container } = renderComponent(
            <UpBulle
                icon={'cake'}
                value={2}
                backgroundImage={'linear-gradient(282deg, #bddf3d, #5cbc15'}
                message={'Message'}
                className={style({
                    width: '300px'
                })}
            />
        );

        expect(container.querySelector('.up-bulle').classList.length).toBe(3);
    });
});