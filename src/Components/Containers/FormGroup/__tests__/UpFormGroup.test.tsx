import * as React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpFormGroup from '../UpFormGroup';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';

const whithTheme = component => <UpThemeProvider theme={UpDefaultTheme}>{component}</UpThemeProvider>;
const renderComponent = component => render(whithTheme(component));

afterEach(cleanup);

describe('Tests for UpFormGroup', () => {
  it('should render title in legend tag', () => {
    renderComponent(<UpFormGroup title={'FormGroup title'}></UpFormGroup>);

    expect(screen.getByText('FormGroup title').nodeName).toBe('LEGEND');
  });
});
