import * as React from 'react';
import UpNotification, { UpNotification as UpNotificationComponent } from './UpNotification';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpLoadingIndicator from '../LoadingIndicator';
import { style } from 'typestyle';
import UpBox from '../../Containers/Box';
import UpLine from '../../Display/Ligne';
import { UpButton, UpHeading } from '../../..';
import { useEffect, useRef } from 'react';

export default {
    title: 'Components/Display/UpNotification',
    decorators: [withKnobs, getRootContainer('UpNotification')],
    component: UpNotificationComponent
};

const wrapperBoxesStyle = style({
    $nest: {
        '& > div': {
            margin: '10px 0px',
        },
    },
});

const useShowButton =
    () => {
        const [key, setKey] = React.useState(0);

        const Button = (
            <UpButton
                intent={'primary'}
                onClick={() => setKey(key + 1)}>
                Show Notification
            </UpButton>
        );

        return [key, Button];
    };

export const General =
    () => (
        <UpBox
            alignItems={'normal'}
            className={wrapperBoxesStyle}
        >
            <UpNotification intent='warning'>
                <UpLine>Votre connexion se termine dans 10 minutes !</UpLine>
            </UpNotification>

            <UpNotification intent='success'>
                <UpLine>Votre opération a été enregistré avec succès !</UpLine>
            </UpNotification>

            <UpNotification intent='danger'>
                <UpLine>Une erreur est survenue dans le traitement de votre demande !</UpLine>
            </UpNotification>

            <UpNotification intent='error'>
                <UpLine>Une erreur est survenue dans le traitement de votre demande !</UpLine>
            </UpNotification>

            <UpNotification intent='default'>
                <UpLine>Bonjour !</UpLine>
            </UpNotification>

            <UpNotification intent='light'>
                <UpLine>Hello !</UpLine>
            </UpNotification>

            <UpNotification intent='info'>
                <UpLoadingIndicator
                    isLoading={true}
                    displayMode={'inline'}
                />
            </UpNotification>
        </UpBox>
    );

export const DismissableNotification =
    () => (
        <UpNotification
            intent='primary'
            dismissable={true}
            onCloseClick={() => alert('icon Clicked, Notification is closing')}
        >
            <UpLine>Votre opération a été enregistré avec succès !</UpLine>
        </UpNotification>
    );

export const AutoDismissableNotification =
    () => {
        const [key, Button] = useShowButton();
        
        return (
            <>
                {Button}
                <UpNotification
                    key={key as number}
                    intent='success'
                    dismissable={true}
                    durationBeforeClosing={8}
                    className={style({
                        marginTop: '20px'
                    })}
                >
                    <UpLine>Votre opération a été enregistré avec succès !</UpLine>
                </UpNotification>
            </>
        )
    };

export const WithTitle =
    () => (
        <UpNotification
            intent='warning'
            title={'UpNotification Title'}
            className={style({
                $nest: {
                    '& h2': {
                        color: '#fff'
                    }
                }
            })}
        >
            <UpLine>Votre opération a été enregistré avec succès !</UpLine>
        </UpNotification>
    );

export const WithBigIcon =
    () => (
        <UpNotification
            intent='success'
            iconSize={40}
        >
            <UpLine>Votre opération a été enregistré avec succès !</UpLine>
        </UpNotification>
    );

export const ShowInModal =
    () => (
        <UpNotification
            title={'Erreur'}
            displayMode={'modal'}
            intent='danger'
        >
            <p>Un problème est survenu !!</p>
        </UpNotification>
    );

ShowInModal.decorators = [(ShowInModal) => (
    <div style={{ height: '250px' }}>
        <ShowInModal />
    </div>
)];

export const ShowInText =
    () => (
        <UpNotification
            displayMode={'text'}
            intent='danger'
        >
            <UpLine>Un problème est survenu !!</UpLine>
        </UpNotification>
    );

