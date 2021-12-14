import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';
import { General } from '../index.stories';

const whithTheme = component => (
  <UpThemeProvider theme={UpDefaultTheme}>
    {component}
  </UpThemeProvider>
);

const renderComponent = component => render(whithTheme(component));

describe('Tests for UpDate', () => {
  it('should show UpDate', () => {
    const { getByTestId } = renderComponent(<General />);

    expect(getByTestId('UpDate')).toHaveClass('up-date');
  });

  it('should clear date value on close event if date input mannualy', () => {
    const { getByTestId } = renderComponent(<General />);
    console.log(getByTestId('UpDate'));
    //fireEvent.click() ;
  });
});
