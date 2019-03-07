import * as React from 'react'
import { storiesOf, ReactiveVar } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpModal from './UpModal'
import UpButton from '../../Inputs/Button/UpButton'
import UpPanel from '../../Containers/Panel'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export interface ModalWrapperProps {
    html?: string;
}

interface ModalWrapperState {
    showModal: boolean;
}

class ModalWrapper extends React.Component<ModalWrapperProps, ModalWrapperState>{
    constructor(props, context) {
        super(props, context);
        this.state = {
            showModal: true
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onClose = this.onClose.bind(this);
    }
    openModal() {
        this.setState({ showModal: true });
    }
    closeModal() {
        this.setState({ showModal: false });
    }
    onClose() {
        this.setState({ showModal: false });
    }
    render() {
        const CloseAction = () => <UpButton intent={'secondary'} actionType={"close"} onClick={this.closeModal}>Close</UpButton>;
        const Info = () => <UpPanel type={"warning"} disableAutoIntentIcon={false}>
            <p>Bienvenue !!</p>
        </UpPanel>;

        return (
        <div>
            <UpModal onClose={this.onClose} footer={<CloseAction />}
                header={'Header'} showModal={this.state.showModal} html={this.props.html}>
                {this.props.html == null &&
                    <Info />
                }
            </UpModal>
            <UpButton intent={'secondary'} actionType={"confirm"} onClick={this.openModal}>Open</UpButton>
        </div>);
    }
}

const HTML = `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd"> <html> <head> <title>Mon titre</title> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta charset="UTF-8"> </head> <body text="#000000" vlink="#990000" alink="#990000" link="#990000" bgcolor="#ffffff"><p>Mon message</p></body></html>`;

const stories = storiesOf('Containers/UpModal', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpModal'));

stories.add('Simple usage',
    () => (<UpThemeProvider theme={UpDefaultTheme}>
        <ModalWrapper />
    </UpThemeProvider>), { info : 'Utilisation du composant en lui passant les données à afficher'}
    ).add('Html',
        () => (
            <ModalWrapper html={HTML} />

        ), { info : 'Set the content using HTML'}
    );