import * as React from 'react'
import { storiesOf, ReactiveVar} from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpModal from './UpModal'
import UpButton from '../../Inputs/Button'
import UpPanel from '../../Containers/Panel'

class ModalWrapper extends React.Component {
  constructor(props, context) {
    super(props, context) ;
    this.state = {
      showModal: true
    }
    this.openModal = this.openModal.bind(this) ;
    this.closeModal = this.closeModal.bind(this) ;
    this.onClose = this.onClose.bind(this) ;
  }
  openModal() {
    this.setState({showModal : true}) ;
  }
  closeModal() {
    this.setState({showModal : false}) ;
  }
  onClose() {
    this.setState({showModal : false}) ;
  }
  render() {
     const CloseAction = () => <UpButton actionType={"close"} onClick={this.closeModal}>Close</UpButton> ;
     const Info =  () => <UpPanel type={"warning"} disableAutoIntentIcon={false}>
       <p>Bienvenue !!</p>
     </UpPanel> ;
     return (<div><UpModal onClose={this.onClose} footer={<CloseAction />} 
              header={'Header'} showModal={this.state.showModal}><Info /></UpModal>
            <UpButton actionType={"confirm"} onClick={this.openModal}>Open</UpButton></div>) ;
  }
}

storiesOf('UpModal', module)
  .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
   () =>  (<UpThemeProvider theme={UpDefaultTheme}>
        <ModalWrapper />
      </UpThemeProvider>)
) ;