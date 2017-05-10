import * as React from "react";
import * as ReactDOM from "react-dom";

import {
    UpGrid,
    UpCol,
    UpRow,
    UpBox,
    UpPanel,
    UpButton,
    UpThemeProvider,
    UpThemeInterface,
    UpDate,
    UpText,
    UpLabel,
    UpDefaultTheme,
    UpPhone,
    UpNumber,
    UpEmail,
    UpInput,
    UpFormGroup,
    UpSwitch
} from "../src/index";


import UpSelect from "../src/Components/Inputs/Select/index";

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

var theme: UpThemeInterface = UpDefaultTheme
theme.colorMap.warning = "orange";

class Demo extends React.Component<undefined, DemoState> {
    constructor(props) {
        super(props);
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
        var theme: any = {
            colorMap: {}
        }

        var enti = {
            id: "id",
            name: "Inventaire",
            text: "{name}",
            query: "https://jsonplaceholder.typicode.com/users",//"http://localhost:9510/api/domain/Inventaire/IInventaireSearchQuery",
            queryParameterName: "args"
        };
                 //"enumNames": ["choix1", "choix2", "choix3"],
                      //      "enumDescriptions": ["Premier choix", "Second choix", "Troisieme choix"],
                      //      "type": "integer",
                      //      "format": "enum",
                      //      "enum": [2, 4, 6]

        var aaa = [{ id: 1, text: "test" }, { id: 2, text: "test2" }];

        return (
            <UpThemeProvider theme={theme}>
                <UpBox flexDirection="row" alignItems="stretch" justifyContent="center" >

             
                     <UpSelect
                        showError={true}
                        default={null}
                        //isNullable={this.isNullable}
                        isRequired={false}
                        //getFullData={false}
                        multiple={true}
                        placeholder="Recherche"
                        allowClear={false}
                        //onChange={}
                        dataSource={enti}
                    />
                    <UpBox margin="small" boxSize={{ horizontal: 'small' }}>
                        Component
              <hr />
                    </UpBox>
                    <UpBox margin="small" boxSize={{ horizontal: 'xxlarge' }}>
                        Editor
              <hr />
                        <UpPanel title="Paramètres" type="info">
                            <UpNumber max={5} min={2} onChange={this.onNumberChange} />

                            <UpGrid>
                                <UpRow gutter={10} >
                                    <UpCol span={12}>
                                        <UpSwitch isNullable={true} onChange={this.onNumberChange} />

                                    </UpCol>
                                    <UpCol span={12}>

                                        <UpSwitch isNullable={true} onChange={this.onNumberChange} />
                                    </UpCol>
                                </UpRow>
                                <UpRow gutter={10} >
                                    <UpCol span={12}>
                                        <UpSwitch isNullable={true} onChange={this.onNumberChange} />

                                    </UpCol>
                                    <UpCol span={12}>

                                        <UpSwitch isNullable={true} onChange={this.onNumberChange} />
                                    </UpCol>
                                </UpRow>
                            </UpGrid>


                            {this.state.number}
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
            </UpThemeProvider>
        );
    }
    onDateChange = (newDate) => {
        this.setState({
            date: newDate
        });
    }
    onTextChange = (data) => {
        this.setState({
            description: data
        });
    }
    onPhoneChange = (data) => {
        this.setState({
            phone: data
        });
    }
    onEmailChange = (data) => {
        this.setState({
            email: data
        });
    }
    onNumberChange = (data) => {
        this.setState({
            number: data
        });
    }
    onIntegerChange = (data) => {
        this.setState({
            integer: data
        });
    }
}

ReactDOM.render(<Demo />, document.getElementById('root'));
