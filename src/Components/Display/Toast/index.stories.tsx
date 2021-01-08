import * as React from 'react';
import UpDefaultTheme from '../../../Common/theming';
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import UpToast, { UpToast as UpToastComponent } from './UpToast';
import UpButton from '../../Inputs/Button/UpButton';
import { getRootContainer } from '../../../Common/stories';
import { IntentType } from 'theming/types';

export default {
    title: 'Components/Display/UpToast',
    decorators: [
        withKnobs,
        getRootContainer('UpToast'),
        (UpToast) => (
            <div style={{ height: "40vh" }}>
                <UpThemeProvider theme={UpDefaultTheme}>
                    <UpToast />
                </UpThemeProvider>
            </div>
        )
    ],
    component: UpToastComponent
};

const useShowButton =
    () => {
        const [duration, resetDuration] = React.useState(5000);
        const newDuration = new Number(duration) as number;
        const Button = (
            <UpButton
                intent={'primary'}
                onClick={() => {
                    resetDuration(newDuration);
                }}>
                Show toast
            </UpButton>
        );

        return [newDuration, Button];
    };

export const General =
    () => {
        const intent = text('intent', 'success');
        const message = text('message', 'Message 1 \n Message 2');
        const [duration, Button] = useShowButton();

        return (
            <>
                {Button}
                <UpToast
                    intent={intent as IntentType}
                    message={message}
                    duration={duration as number}
                    autoDismissable={true}
                />
            </>
        );
    };

export const ToastWithTitle =
    () => {
        const intent = text('intent', 'success');
        const message = text('message', 'Succès');
        const [duration, Button] = useShowButton();

        return (
            <>
                {Button}
                <UpToast
                    intent={intent as IntentType}
                    title={'Opération'}
                    autoDismissable={true}
                    message={message}
                    duration={duration as number}
                />
            </>
        );
    };