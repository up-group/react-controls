import * as React from 'react'
import { storiesOf, ReactiveVar } from '@storybook/react'


import UpModal from './UpModal'
import UpButton from '../../Inputs/Button/UpButton'
import UpPanel from '../../Containers/Panel'

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
        const CloseAction = () => <UpButton actionType={"close"} onClick={this.closeModal}>Close</UpButton>;
        const Info = () => <UpPanel /*type={"warning"}*/ disableAutoIntentIcon={false}>
            <p>Bienvenue !!</p>
        </UpPanel>;

        return (<div><UpModal onClose={this.onClose} footer={<CloseAction />}
            header={'Header'} showModal={this.state.showModal} html={this.props.html}>
            {this.props.html == null &&
                <Info />
            }
        </UpModal>
            <UpButton actionType={"confirm"} onClick={this.openModal}>Open</UpButton></div>);
    }
}

const HTML = `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd"> <html> <head> <title>Mon titre</title> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta charset="UTF-8"> </head> <body text="#000000" vlink="#990000" alink="#990000" link="#990000" bgcolor="#ffffff"><p>Mon message</p></body></html>`;

storiesOf('UpModal', module)
    .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
        () => (
            <ModalWrapper />
        )
    ).addWithInfo('Html', 'Set the content using HTML',
        () => (
            <ModalWrapper html={HTML} />

        )
    );