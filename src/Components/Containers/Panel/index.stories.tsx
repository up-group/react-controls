import * as React from 'react';
import UpDefaultTheme from '../../../Common/theming';
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider';
import UpPanel, { UpPanel as UpPanelComponent } from './UpPanel';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs } from '@storybook/addon-knobs';

const customedTitle = (
    <div style={{ borderBottom: "1px dotted white" }}>Mon JSX Panel</div>
);

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
        />
    );

export const WarningMessage =
    () => (
        <UpPanel
            type={'warning'}
            title={'Mon Panel'}
            message={'Warning Message'}
        />
    );

export const infoPanelWithFooter =
    () => (
        <UpPanel
            type={'info'}
            title={'Mon Panel'}
            footer={'this is the footer'}
        />
    );

export const successPanelWithDeleteIconAndCustomedTitle =
    () => (
        <UpPanel
            type={'success'}
            title={customedTitle}
            message={'Success'}
            iconName={'delete'}
        />
    );
