import * as React from 'react';
import { General } from '../index.stories';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';

import {
    getByLabelText,
    getByText,
    getByTestId,
    queryByTestId
  } from '@testing-library/dom'

import '@testing-library/jest-dom'

import { render, fireEvent, waitFor, screen } from '@testing-library/react'

const whithTheme = (component) => <UpThemeProvider theme={UpDefaultTheme}>{component}</UpThemeProvider>

describe('Tests for UpMenu', () => {
    
    it('should trigger the uri of the sub menu item', async () => {
        
        render(whithTheme(<General />));

        const menuItem = screen.getByText('Stack Option 1') ;

        fireEvent.click(menuItem)

        await waitFor(() => screen.getByText('Stack Option 1'))

        expect(menuItem.parentElement.parentElement).toHaveClass('active');
        expect(screen.getByTestId('uri') ).toHaveTextContent('/stack/option1');
    });
});