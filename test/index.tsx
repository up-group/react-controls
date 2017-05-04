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
    UpColorMap,
    UpPhone,
    UpNumber,
    UpEmail,
    UpInput,
    UpSelect,
    UpFormGroup,
    UpSwitch
} from "../src/index";

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

        return (
            <UpThemeProvider theme={theme}>
                <div>
                    <UpBox flexDirection="row" alignItems="stretch" justifyContent="center" >
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
                                        <UpCol  span={12}>
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
                </div>
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
