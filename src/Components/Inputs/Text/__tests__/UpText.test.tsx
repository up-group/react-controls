import * as React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpText from '../UpText';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';

import { General, WithMaximumCharacter, ForceMaximumCharacter, WithPlaceHolder } from '../index.stories'

const whithTheme = (component) => <UpThemeProvider theme={UpDefaultTheme}>{component}</UpThemeProvider>

describe('Tests for UpText', () => {

    const renderComponent = component => render(whithTheme(component));

    it('should display UpText', async () => {
        const { container } = renderComponent(<General  />);
        
        expect(container.getElementsByClassName('up-text').length).toBe(1);
        const input = container.getElementsByClassName('up-text')[0] ;
        let text = '' ;

        for(let i = 0; i < 100; i++) {
            text += 'a' ;
        }

        fireEvent.change(input, { target: { value: text }})

        await waitFor(() => screen.findByDisplayValue(text))
    });

    it('should display maximum characters message', async () => {
        const { container } = renderComponent(<WithMaximumCharacter  />);
        
        expect(container.getElementsByClassName('up-text').length).toBe(1);
        const input = container.getElementsByClassName('up-text')[0] ;
        fireEvent.change(input, { target: { value: 'Un text trop long !' } })
        const items = await screen.findAllByText("Vous avez saisi 19 sur un nombre maximal de 300")
        expect(items).toHaveLength(1)
    });

    it('should force maximum characters', async () => {
        const { container } = renderComponent(<ForceMaximumCharacter  />);
        
        expect(container.getElementsByClassName('up-text').length).toBe(1);

        const input = container.getElementsByClassName('up-text')[0] ;
        let text = '' ;

        for(let i = 0; i < 100; i++) {
            text += 'a' ;
        }

        fireEvent.change(input, { target: { value: text }})

        await waitFor(() => screen.findByDisplayValue(text))
        
        fireEvent.change(input, { target: { value: `${text}a` }})

        await waitFor(() => screen.findByDisplayValue(text))

        expect(input).toHaveValue(text)
    });

    it('should display placeholder', async () => {
        const { container } = renderComponent(<WithPlaceHolder  />);
        
        expect(container.getElementsByClassName('up-text').length).toBe(1);

        expect(screen.getAllByPlaceholderText('Les observation de votre compte')).toHaveLength(1)
    })
});