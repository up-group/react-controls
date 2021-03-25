import * as React from 'react';
import UpDefaultTheme from '../../../Common/theming';
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider';
import UpPanel, { UpPanel as UpPanelComponent } from './UpPanel';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'Components/Containers/UpPanel',
    decorators: [
        withKnobs,
        getRootContainer('UpPanel'),
        (UpPanel) => (
            <UpThemeProvider theme={UpDefaultTheme}>
                <UpPanel />
            </UpThemeProvider>
        )
    ],
    component: UpPanelComponent
};

export const GeneralUse =
    () => (
        <UpPanel
            type={'default'}
            title={'Mon Panel'}
            message={'Mon panel text'}
        />
    );

export const customedTitle =
    () => (
        <UpPanel
            type={'danger'}
            title={
                <h3 style={{ borderBottom: '1px dotted white' }}>Mon JSX Panel</h3>
            }
            message={'Mon panel text'}
        />
    );

export const WithFooter =
    () => (
        <UpPanel
            type={'info'}
            title={'Mon Panel'}
            message={'Mon panel text'}
            footer={'this is the footer'}
        />
    );

export const WithIcon =
    () => (
        <UpPanel
            type={'success'}
            title={'Mon Panel'}
            message={'Success'}
            iconName={'delete'}
        />
    );

export const falsyDisableAutoIntentIcon =
    () => (
        <UpPanel
            type={'warning'}
            title={'Mon Panel'}
            message={'Warning Message'}
            disableAutoIntentIcon={false}
        />
    );

falsyDisableAutoIntentIcon.storyName = 'Show Icon Based On Type If Falsy DisableAutoIntentIcon';
