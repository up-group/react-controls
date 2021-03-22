import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpEntityView from '../UpEntityView';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';

const whithTheme = (component) => <UpThemeProvider theme={UpDefaultTheme}>{component}</UpThemeProvider>;
const renderComponent = component => render(whithTheme(component));

const informations = [
    { key: 'Code Client', value: 'CLT23232323' },
    { key: 'Raison sociale', value: 'Sté Dupond' },
    { key: 'Email utilisateur', value: 'jean.dupont@up.coop' },
    { key: 'Date de création', value: '18/02/2020' },
    { key: 'N° Commande', value: 'CMD1234567' },
    { key: 'Montant', value: '3456,46 €' }
];

afterEach(cleanup);

describe('Tests for UpEntityView', () => {

    it('should render title in div tag', () => {
        const { container } = renderComponent(
            <UpEntityView
                title={'Informations'}
                icon={'cadhoc-check'}
                informations={informations}
            />
        );

        expect(container.querySelector('.up-entity-view-title')).toHaveTextContent('Informations');
        expect(container.querySelector('.up-entity-view-title').nodeName).toBe('DIV');
    });

    it('should render icon', () => {
        const { container } = renderComponent(
            <UpEntityView
                title={'Informations'}
                icon={'cadhoc-check'}
                informations={informations}
            />
        );

        expect(container.querySelector('.up-icon-wrapper')).toBeInTheDocument();
    });

    it('should render all informations', () => {
        const { container } = renderComponent(
            <UpEntityView
                title={'Informations'}
                icon={'cadhoc-check'}
                informations={informations}
            />
        );

        expect(container.querySelectorAll('.up-entity-view-content')).toHaveLength(6);
    });

    it('should render key informations in bold', () => {
        const { getByText } = renderComponent(
            <UpEntityView
                title={'Informations'}
                icon={'cadhoc-check'}
                informations={informations}
            />
        );

        expect(getByText('Code Client :').nodeName).toBe('B');
        expect(getByText('CLT23232323').nodeName).toBe('DIV');
        expect(getByText('Code Client :').parentNode).toContainHTML('<div class="up-entity-view-content"><b>Code Client : </b>CLT23232323</div>');
    });
});