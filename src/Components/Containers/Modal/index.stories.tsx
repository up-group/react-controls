import * as React from 'react';
import UpDefaultTheme from '../../../Common/theming';
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider';
import UpModal, { UpModal as UpModalComponent } from './UpModal';
import UpButton from '../../Inputs/Button/UpButton';
import UpPanel from '../../Containers/Panel';
import UpButtonGroup from '../ButtonGroup';
import { getRootContainer } from '../../../Common/stories';
import { UpModalWrapperProps } from './types';
import UpBox from '../Box/';

const ModalWrapper: React.FunctionComponent<UpModalWrapperProps> = props => {

    const {
        closeOnClickOutside,
        displayMode,
        fullHeight,
        html,
        modalWidth,
        withHeaderSeparator,
        footer,
        screenPosition
    } = props;

    const [showModal, setShowModal] = React.useState<boolean>(true);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const openModalButton = () => (
        <UpButton
            intent={'secondary'}
            actionType={'confirm'}
            onClick={openModal}
        >
            Open
        </UpButton>
    );

    const modalContent = () => (
        <UpPanel type={'warning'}>
            <p>Bienvenue !!</p>
        </UpPanel>
    );

    return (
        <>
            <UpModal
                closeOnClickOutside={closeOnClickOutside}
                displayMode={displayMode}
                fullHeight={fullHeight}
                header={'Header'}
                html={html}
                modalWidth={modalWidth}
                onClose={closeModal}
                showModal={showModal}
                withHeaderSeparator={withHeaderSeparator}
                footer={footer !== null ? footer : null}
                screenPosition={screenPosition}
            >
                {html == null && modalContent()}
            </UpModal>
            <UpButtonGroup> {openModalButton()}</UpButtonGroup>
        </>
    );
}

export default {
    title: 'Components|Containers/UpModal',
    decorators: [
        getRootContainer('UpModal'),
        (ModalWrapper) => (
            <div style={{ height: "100vh" }}>
                <UpThemeProvider theme={UpDefaultTheme}>
                    <ModalWrapper />
                </UpThemeProvider>
            </div>
        )
    ],
    component: UpModalComponent,
};

const htmlFrame = `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd"> <html> <head> <title>Mon titre</title> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta charset="UTF-8"> </head> <body text="#000000" vlink="#990000" alink="#990000" link="#990000" bgcolor="#ffffff"><p>Mon message</p></body></html>`;

export const GeneralUse =
    () => (
        <ModalWrapper screenPosition={'center'}/>
    );

export const WithFooter =
    () => (
        <ModalWrapper footer={
            <UpBox
                justifyContent={'center'}
                backgroundColor={'#fff'}
                pad={'small'}
            >
                <UpButton
                    intent={'secondary'}
                    actionType={'confirm'}
                >
                    Button
                </UpButton>
            </UpBox>
        } />
    );

export const WithHtmlContent =
    () => (
        <ModalWrapper html={htmlFrame} />
    );

export const showFromTop =
    () => (
        <ModalWrapper
            displayMode="fromTop"
            modalWidth="full"
        />
    );

export const showFromBottom =
    () => (
        <ModalWrapper
            displayMode="fromBottom"
            modalWidth="full"
        />
    );

export const showFromRight =
    () => (
        <ModalWrapper
            displayMode="fromRight"
            modalWidth="half"
        />
    );

export const showFromLeft =
    () => (
        <ModalWrapper
            displayMode="fromLeft"
            modalWidth="half"
        />
    );
