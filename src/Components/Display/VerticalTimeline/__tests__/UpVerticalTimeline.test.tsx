import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpVerticalTimeline from '../UpVerticalTimeline';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';

const whithTheme = (component) => (
    <UpThemeProvider theme={UpDefaultTheme}>
        {component}
    </UpThemeProvider>
);
const renderComponent = component => render(whithTheme(component));

const timeLine = [
    { status: 'Livrée', date: 'Le 18/02/2020  à 12h12', isAchieved: true },
    { status: 'Expédié', date: 'Le 18/02/2020  à 12h12', isAchieved: true },
    { status: 'Traitement en cours', date: 'Le 18/02/2020  à 12h12', isAchieved: true },
    { status: 'Payée', isAchieved: false },
];

describe('Tests for UpVerticalTimeline', () => {

    it('should render global title in div tag', () => {
        renderComponent(
            <UpVerticalTimeline
                title={'Suivi de commandes'}
                timeline={timeLine}
            />
        );

        expect(screen.getByText('Suivi de commandes')).toHaveClass('up-vertical-align-title');
    });

    it('should render expected graphic events timeLine', () => {
        const { container } = renderComponent(
            <UpVerticalTimeline
                title={'Suivi de commandes'}
                timeline={timeLine}
            />
        );

        expect(container.querySelectorAll('.up-vertical-align-circle').length).toBe(4);
        expect(container.querySelectorAll('.up-vertical-align-line').length).toBe(3);
    });

    it('should render title for each event ', () => {
        const { container } = renderComponent(
            <UpVerticalTimeline
                title={'Suivi de commandes'}
                timeline={timeLine}
            />
        );

        expect(container.querySelectorAll('.up-vertical-align-content-title').length).toBe(4);
    });

    it('should render subTitle for each event ', () => {
        const { container } = renderComponent(
            <UpVerticalTimeline
                title={'Suivi de commandes'}
                timeline={timeLine}
            />
        );

        expect(container.querySelectorAll('.up-vertical-align-content-subtitle').length).toBe(4);
    });

    it('should render expected number of activated events timeLine', () => {
        const { container } = renderComponent(
            <UpVerticalTimeline
                title={'Suivi de commandes'}
                timeline={timeLine}
            />
        );

        //Number of cercle
        expect(container.querySelectorAll('.up-vertical-align-circle.up-checkmark').length).toBe(3);
        expect(container.querySelectorAll('.up-vertical-align-circle.up-vertical-align-inactive').length).toBe(1);
    });

    it('should render expected number of no activated events timeLine', () => {
        const { container } = renderComponent(
            <UpVerticalTimeline
                title={'Suivi de commandes'}
                timeline={timeLine}
            />
        );

        //Number of align line
        expect(container.querySelectorAll('.up-vertical-align-line.up-checkmark').length).toBe(2);
        expect(container.querySelectorAll('.up-vertical-align-line.up-vertical-align-inactive').length).toBe(1);
    });
});
