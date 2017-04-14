import * as React from "react";
import * as ReactDOM from "react-dom";



import {
  UpHeadline,
  UpBox,
  UpList,
  UpPanel,
  UpButton,
  UpThemeProvider,
  UpThemeInterface,
  UpDate,
  UpText,
  UpLabel,
  UpColorMap,
  UpPhone,
  UpNumber,
  UpEmail,
  UpInteger,
  UpInput,
  UpSelect,
  UpFormGroup
}
from "../src/index";
import {ChangeOrderEvent} from "../src/List/index";


interface Item {
  text: string;
}

interface DemoState {
  items: Array<Item>;
  date: string;
  description: string;
  search: string;
  phone: string;
  email: string;
  number: number;
  integer: number;
}

var theme: UpThemeInterface = {
  colorMap: UpColorMap
}
theme.colorMap.warning = "orange";
theme.colorMap.secondary = UpColorMap.lightGray2;

class Demo extends React.Component<undefined, DemoState> {
  constructor(props) {
    super(props);
    this.onSortEnd = this.onSortEnd.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);

    this.state = {
      date: "13/04/2017",
      items: [
        {
          text: "Item 1"
        },
        {
          text: "Item 2"
        },
        {
          text: "Item 3"
        },
        {
          text: "Item 4"
        },
        {
          text: "Item 5"
        }
      ],
      description: "",
      email: "",
      search: "",
      phone: "",
      number: 0,
      integer: 0
    }
  }
  public render() {

    return (
      <UpThemeProvider theme={theme}>
        <div>
          <UpHeadline fontWeight={700}>
            Démo
              <hr />
          </UpHeadline>
          <UpBox flexDirection="row" alignItems="stretch" justifyContent="center" >
            <UpBox margin="small" boxSize={{ horizontal: 'small' }}>
              Component
                     <hr />
              <UpList fontSize="20" sortable={true} items={this.state.items} onSortEnd={this.onSortEnd} />
              <UpButton style={{ margin: 20 }}
                fontSize="small"
                iconName="add"
                iconSize={16}
                color={theme.colorMap.warning}
                backgroundColor={theme.colorMap.white1}
                borderColor={theme.colorMap.warning}
              >
                View Example App
              </UpButton>
            </UpBox>
            <UpBox margin="small" boxSize={{ horizontal: 'xxlarge' }}>
              Editor
              <hr />
              <UpPanel title="Paramètres" type="info">

                <UpBox margin="small" boxSize={{ horizontal: 'full' }}>
                  <UpLabel text="Date :"></UpLabel>
                  <UpDate onChange={this.onDateChange} value={this.state.date} />
                </UpBox>
                <UpBox margin="small" boxSize={{ horizontal: 'full' }}>
                  <UpLabel text="Description :"></UpLabel>
                  <UpText onChange={this.onTextChange} value={this.state.description}/>   
               </UpBox>
               <UpBox margin="small" boxSize={{ horizontal: 'full' }}>
                  <UpLabel text="Email :"></UpLabel>
                  <UpInput disabled={true} type="email" placeholder="Entrez votre couriel" onChange={this.onTextChange} value={this.state.email} />
                </UpBox>
                <UpBox margin="small" boxSize={{ horizontal: 'full' }}>
                  <UpLabel text="Commune :"></UpLabel>
                  <UpInput readOnly={true} width="xlarge" height="large" type="search" placeholder="Chercher votre commune" onChange={this.onTextChange} value={this.state.search} />
                </UpBox>
                <UpBox margin="small" boxSize={{ horizontal: 'full' }}>
                  <UpLabel text="Nom :"></UpLabel>
                  <UpInput width="xlarge" type="text"  placeholder="Entrer votre nom"  onChange={this.onTextChange} value={this.state.search}/>   
               </UpBox>
               <UpBox margin="small" boxSize={{ horizontal: 'full' }}>
                  <UpLabel text="Nombre :"></UpLabel>
                  <UpNumber width="xlarge" placeholder="Entrer votre nombre" onChange={this.onNumberChange} value={this.state.number} />
                </UpBox>
                <UpBox margin="small" boxSize={{ horizontal: 'full' }}>
                  <UpLabel text="Montant :"></UpLabel>
                  <UpInteger width="xlarge" placeholder="Entrer votre montant" onChange={this.onIntegerChange} value={this.state.integer} />
                </UpBox>
                <UpBox margin="small" boxSize={{ horizontal: 'full' }}>
                  <UpLabel text="Email :"></UpLabel>
                  <UpEmail width="xlarge"  placeholder="Entrer votre email"  onChange={this.onPhoneChange} value={this.state.email}/>   
               </UpBox>
               <UpBox margin="small" boxSize={{ horizontal: 'full' }}>
                  <UpLabel text="Tél :"></UpLabel>
                  <UpPhone width="xlarge"  placeholder="Entrer votre numéro de tel"  onChange={this.onPhoneChange} value={this.state.phone}/>  
               </UpBox>

                <UpButton
                  style={{ margin: 20 }}
                  fontSize="small"
                  iconName="edit"
                  iconSize={16}
                  color={theme.colorMap.white1}
                  backgroundColor={theme.colorMap.primary}
                  borderColor={theme.colorMap.white1}
                >
                  Enregistrer
              </UpButton>
              </UpPanel>

              <UpPanel title="Paramètres" type="primary">
                Mon message
              </UpPanel>
              <UpPanel title="Paramètres" type="danger">
                Mon message
              </UpPanel>
              <UpPanel title="Paramètres" type="success">
                Mon message
              </UpPanel>
              <UpPanel title="Paramètres" type="warning">
                Mon message
              </UpPanel>
            </UpBox>
          </UpBox>
        </div>
      </UpThemeProvider>
    );
  }
  onSortEnd(e : ChangeOrderEvent) {
    /*this.setState({
      items: arrayMove(this.state.items, e.oldIndex, e.newIndex),
    });*/
  }
  onDateChange(newDate) {
    this.setState({
      date: newDate
    });
  }
  onTextChange(data) {
    this.setState({
      description: data
    });
  }
  onPhoneChange(data) {
    this.setState({
      phone: data
    });
  }
  onEmailChange(data) {
    this.setState({
      email: data
    });
  }
  onNumberChange(data) {
    this.setState({
      number: data
    });
  }
  onIntegerChange(data) {
    this.setState({
      integer: data
    });
  }
}







ReactDOM.render(<Demo />, document.getElementById('root'));
