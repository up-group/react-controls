import * as React from 'react';
import UpDefaultTheme from '../../../Common/theming';
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider';
import UpPhone from './UpPhone';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { UpBox } from '../../..';

export default {
    title: 'Components/Inputs/UpPhone',
    decorators: [
        withKnobs,
        getRootContainer('UpPhone')
    ],
    component: UpPhone
};

export const General =
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <UpBox style={{ padding: "30px" }}>
                <UpPhone floatingLabel={"Phone"} />
            </UpBox>
        </UpThemeProvider>
    );

export const IsRequired =
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <UpBox style={{ padding: "30px" }}>
                <UpPhone
                    floatingLabel={"Phone"}
                    isRequired={true}
                />
            </UpBox>
        </UpThemeProvider>
    );
