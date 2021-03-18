import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpFormGroup from '../UpFormGroup';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';

const whithTheme = (component) => <UpThemeProvider theme={UpDefaultTheme}>{component}</UpThemeProvider>;
const renderComponent = component => render(whithTheme(component));

describe('Tests for UpFormGroup', () => {

    it('should render a title in legend tag', () => {
        const { getByText } = renderComponent(
            <UpFormGroup
                title={'FormGroup title'}>
            </UpFormGroup>
        );

        expect(getByText('FormGroup title').nodeName).toBe('LEGEND');
    });
});