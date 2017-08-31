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
    UpSwitch,
    UpSelect,
    UpDataGrid,
    UpTreeView,
    UpNavTab,
    UpLoadingIndicatorZone
} from "../src/index";

import Timeline from "../src/Components/Display/TimeLine/index"
import UpModal from "../src/Components/Containers/Modal/UpModal"
import UpDashboard from "../src/Components/Containers/Dashboard/UpDashboard"
import UpTile from "../src/Components/Containers/Dashboard/UpTile"
import UpLogoAlerte from "../src/Components/Display/LogoAlerte/UpLogoAlerte"
import UpCalendarWeekDay from "../src/Components/Display/CalendarWeekDay/UpCalendarWeekDay"
import UpMenu from "../src/Components/Display/Menu/UpMenu"



import * as moment from 'moment'


interface Item {
    id?: number;
    text: string;
}

interface DemoState {
    item: Item;
    user: any;
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



export interface TestProps {
    t: string
}

export interface TestState {

}

export class Test extends React.Component<TestProps, TestState>{

    constructor(p, c) {
        super(p, c);
        this.state = {};
        console.log("ctor", this.props.t);
    }

    render() {
        console.log("render", this.props.t);
        return <div>{this.props.t}</div>
    }
}




export class Test2 extends React.Component<TestProps, TestState>{

    constructor(p, c) {
        super(p, c);
        this.state = {};
        console.log("ctor", this.props.t);
    }

    render() {
        console.log("render", this.props.t);
        return <div>{this.props.t}</div>
    }
}


class Demo extends React.Component<undefined, DemoState> {
    constructor(props) {
        super(props);
        this.onDateChange = this.onDateChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);

        this.state = {
            date: "13/04/2017",
            item: {
                id: 1,
                text: "Item 1"
            },
            user: {
                id: 1,
                name: "User 1"
            },
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

    tttt = (a) => {
        console.log(a);
    }


    public render() {

        if (1 == 1) {
            let data = [
                { 'c1': new Date(), 'c2': 'Value 2', 'c3': 'Value 3', c4: aa },
                { 'c1': new Date(), 'c2': 'Value 2', 'c3': 'Value 3', c4: aa },
                { 'c1': new Date(), 'c2': 'Value 2', 'c3': 'Value 3', c4: aa },
                { 'c1': new Date(), 'c2': 'Value 2', 'c3': 'Value 3', c4: aa },
                { 'c1': new Date(), 'c2': 'Value 2', 'c3': 'Value 3', c4: aa },
                { 'c1': new Date(), 'c2': 'Value 2', 'c3': 'Value 3', c4: aa },
                { 'c1': new Date(), 'c2': 'Value 2', 'c3': 'Value 3', c4: aa },
                { 'c1': new Date(), 'c2': 'Value 2', 'c3': 'Value 3', c4: aa },
                { 'c1': new Date(), 'c2': 'Value 2', 'c3': 'Value 3', c4: aa },
                { 'c1': new Date(), 'c2': 'Value 2', 'c3': 'Value 3', c4: aa },
            ];
            return <UpThemeProvider theme={theme}>
                <div style={{ padding: 50 }}>

                    <UpLoadingIndicatorZone isLoading={true}>

                        <UpDataGrid
                            isPaginationEnabled={true}
                            total={100}
                            defaultTake={100}
                            columns={
                                [{
                                    label: 'Col 1',
                                    field: 'c1',
                                    isSortable: true,
                                    type: 'time'
                                }, {
                                    label: 'Col 2',
                                    field: 'c2',
                                    isSortable: true
                                }, {
                                    label: 'Col 3',
                                    field: 'c3',
                                    isSortable: true
                                }, {
                                    label: 'Col 4',
                                    field: 'c4',
                                    isSortable: true,
                                    type: 'multilineText'

                                }]
                            }

                            actions={[{
                                type: "add",
                                intent: "default",
                                description: "TEStMF",
                                action: (a) => { console.log(1, a); }
                            }]}

                            data={data} />
                    </LoadingIndicatorZone>
                </div>
            </UpThemeProvider>
        }


        if (1 == 1) {
            var a = [
                {
                    head: "test",
                    content: <Test t="eeee" />,
                },
                {
                    head: "test 2",
                    content: <Test2 t="aaaa" />,
                }
            ]

            return <UpNavTab loadType="onLoad" tabs={a} />
        }



        if (1 == 1) {
            return <UpTreeView
                onBranchClick={(a) => { console.log(a); }}
                childMenuItems={
                    [
                        {
                            text: "Lorem", id: "5", isSelected: false, isVisible: true, childMenuItems: [
                                {
                                    id: "1", text: "Lorem", isSelected: false, isVisible: true, childMenuItems: [

                                        { id: "1", text: "Lorem", isSelected: false, isVisible: false, childMenuItems: [] },
                                        { id: "12", text: "Lorem", isSelected: false, isVisible: true, childMenuItems: [] },
                                        { id: "1", text: "Lorem", isSelected: false, isVisible: true, childMenuItems: [] }
                                    ]
                                },
                                { id: "1", text: "Lorem sc", isSelected: false, isVisible: true, childMenuItems: [] },
                                { id: "1", text: "Lorem", isSelected: false, isVisible: true, childMenuItems: [] }
                            ]
                        },
                        { id: "1", text: "Lorem", isSelected: false, isVisible: true, childMenuItems: [] },
                        { id: "1", text: "t", isSelected: false, isVisible: true, childMenuItems: [] },
                        { id: "1", text: "teshtztht", isSelected: false, isVisible: true, childMenuItems: [] },
                    ]
                } />
        }

        if (11 == 11) {

            return <UpMenu onMenuClick={this.tttt}

                topMenuItems={[
                    { title: "tehtztst", icon: "up up-dossier", action: "https://www.google.fr" },
                    { title: "tehtztst", icon: "up up-dossier", action: () => { alert(5); } }
                ]}





                menuItems={
                    [
                        {
                            title: "test", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [
                                {
                                    title: "aaaaaa", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [

                                        { title: "bbbbb", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                        { title: "ccccc", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                        { title: "ddddd", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] }
                                    ]
                                },
                                { title: "ffffff sc", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                                { title: "ddddd", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] }
                            ]
                        },
                        { title: "tehtztst", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                        { title: "t", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                        { title: "teshtztht", icon: "up up-dossier", isSelected: false, isVisible: true, uri: "https://www.google.fr", childMenuItems: [] },
                    ]}></UpMenu>
        }

        if (1 == 1) {
            return <UpThemeProvider theme={theme}>
                <UpDashboard>
                    <UpTile>
                        <UpCalendarWeekDay />
                    </UpTile>

                    <br />
                    <br />
                    <br />
                    <br />
                    <UpLogoAlerte intenet="danger" icon="add" />
                    <UpButton tooltip="test" onClick={() => { }} />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <UpTile Title="Test1">

                        <ul className="products-list product-list-in-box">
                            <li className="item">
                                <div className="product-img">
                                    <i className="pe pe-7s-attention text-red"></i>
                                </div>
                                <div className="product-info">
                                    <a href="javascript:void(0)" className="product-title">Berthe Medinette
                                <span className="label label-danger pull-right">Aujourd'hui</span></a>
                                    <span className="product-description">
                                        Décédée le 06/08/2017.
                            </span>
                                </div>
                            </li>
                            <li className="item">
                                <div className="product-img">
                                    <i className="pe pe-7s-info text-yellow"></i>
                                </div>
                                <div className="product-info">
                                    <a href="javascript:void(0)" className="product-title">Jean Dupont
                                <span className="label label-warning pull-right">hier</span></a>
                                    <span className="product-description">
                                        Hospitalisation.
                            </span>
                                </div>
                            </li>
                            <li className="item">
                                <div className="product-img">
                                    <i className="pe pe-7s-info text-success"></i>
                                </div>
                                <div className="product-info">
                                    <a href="javascript:void(0)" className="product-title">Jean-Pierre MARTIN
                                <span className="label label-success pull-right">05/08/2017</span></a>
                                    <span className="product-description">
                                        Retour d'hospitalisation.
                            </span>
                                </div>
                            </li>
                            <li className="item">
                                <div className="product-img">
                                    <i className="pe pe-7s-info text-yellow"></i>
                                </div>
                                <div className="product-info">
                                    <a href="javascript:void(0)" className="product-title">Louise LE GAL
                                <span className="label label-warning pull-right">04/08/2017</span></a>
                                    <span className="product-description">
                                        Hospitalisation.
                            </span>
                                </div>
                            </li>
                            <li className="item">
                                <div className="product-img">
                                    <i className="pe pe-7s-attention text-red"></i>
                                </div>
                                <div className="product-info">
                                    <a href="javascript:void(0)" className="product-title">Berthe Medinette
                                <span className="label label-danger pull-right">04/08/2017</span></a>
                                    <span className="product-description">
                                        Décédée le 03/08/2017.
                            </span>
                                </div>
                            </li>
                            <li className="item">
                                <div className="product-img">
                                    <i className="pe pe-7s-info text-yellow"></i>
                                </div>
                                <div className="product-info">
                                    <a href="javascript:void(0)" className="product-title">Jean Dupont
                                <span className="label label-warning pull-right">03/08/2017</span></a>
                                    <span className="product-description">
                                        Hospitalisation.
                            </span>
                                </div>
                            </li>
                            <li className="item">
                                <div className="product-img">
                                    <i className="pe pe-7s-info text-success"></i>
                                </div>
                                <div className="product-info">
                                    <a href="javascript:void(0)" className="product-title">Jean-Pierre MARTIN
                                <span className="label label-success pull-right">02/08/2017</span></a>
                                    <span className="product-description">
                                        Retour d'hospitalisation.
                            </span>
                                </div>
                            </li>
                            <li className="item">
                                <div className="product-img">
                                    <i className="pe pe-7s-info text-yellow"></i>
                                </div>
                                <div className="product-info">
                                    <a href="javascript:void(0)" className="product-title">Louise LE GAL
                                <span className="label label-warning pull-right">01/08/2017</span></a>
                                    <span className="product-description">
                                        Hospitalisation.
                            </span>
                                </div>
                            </li>
                        </ul>
                    </UpTile>
                    <UpTile Title="test 2.1 ">
                        <UpNumber value={5} />
                    </UpTile>
                    <UpTile Title="test 2.2 ">
                        <UpNumber value={5} />
                    </UpTile>
                    <UpTile Title="test 2.3 ">
                        <UpNumber value={5} />
                    </UpTile>
                    <UpTile Title="test 2.4 ">
                        <UpNumber value={5} />
                    </UpTile>
                    <UpTile Title="test 2.5 ">
                        <UpNumber value={5} />
                    </UpTile>
                </UpDashboard>
            </UpThemeProvider>
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

        const groups = [
            { id: 2, title: 'group 2' },
            { id: 1, title: 'group 1' },
            { id: 3, title: 'group 3' }
        ]

        const items = [
            { id: 1, group: 1, title: 'item 1', start_time: moment('1995-12-25'), end_time: moment('1995-12-25').add(1, 'hour') },
            { id: 2, group: 2, title: 'item 2', start_time: moment('1995-12-25').add(-0.5, 'hour'), end_time: moment('1995-12-25').add(0.5, 'hour') },
            { id: 3, group: 3, title: 'item 3', start_time: moment('1995-12-25').add(2, 'hour'), end_time: moment('1995-12-25').add(3, 'hour') }
        ]

        var time = <Timeline groups={groups}
            items={items}
            defaultTimeStart={moment('1995-12-25').add(-12, 'hour')}
            defaultTimeEnd={moment('1995-12-25').add(12, 'hour')}
        />;

        var aa = `testy
tesdddddddddddddddddddddt
sfd`;


        return (
            <UpThemeProvider theme={theme}>
                <UpBox flexDirection="row" alignItems="stretch" justifyContent="center" >
                    <UpPanel title="Paramètres" type="warning">
                        <UpModal />
                        Mon message



                    </UpPanel>

                    <UpBox margin="small" boxSize={{ horizontal: 'xxlarge' }}>
                        Editor
              <hr />
                        <UpPanel title="Paramètres" type="info" disableAutoIntentIcon={true}>
                            <UpSelect
                                showError={true}
                                default={null}
                                isRequired={false}
                                multiple={true}
                                value={this.state.user}
                                onChange={this.onChangeUser}
                                placeholder="Recherche"
                                allowClear={false}
                                dataSource={enti}
                            />
                            <UpSelect
                                showError={true}
                                default={null}
                                isRequired={false}
                                multiple={true}
                                placeholder="Recherche"
                                allowClear={false}
                                value={this.state.item}
                                onChange={this.onChangeItem}
                                data={[
                                    {
                                        id: 1,
                                        text: "Item 1"
                                    },
                                    {
                                        id: 2,
                                        text: "Item 2"
                                    },
                                    {
                                        id: 3,
                                        text: "Item 3"
                                    },
                                    {
                                        id: 4,
                                        text: "Item 4"
                                    },
                                    {
                                        id: 5,
                                        text: "Item 5"
                                    }
                                ]}
                            />
                            <UpBox margin="small" boxSize={{ horizontal: 'small' }}>
                                Component
              <hr />
                            </UpBox>

                            <UpNumber max={5} min={2} onChange={this.onNumberChange} />
                            {time}
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
                                        <UpSwitch value={true} isNullable={true} onChange={this.onNumberChange} />
                                        <UpSwitch value={false} isNullable={true} onChange={this.onNumberChange} />
                                        <UpSwitch value={null} isNullable={true} onChange={this.onNumberChange} />
                                        <UpSwitch value={true} isNullable={false} onChange={this.onNumberChange} />
                                        <UpSwitch value={false} isNullable={false} onChange={this.onNumberChange} />
                                        <UpSwitch value={null} isNullable={false} onChange={this.onNumberChange} />
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
    onChangeItem = (newValue) => {
        this.setState({
            item: newValue
        });
    }
    onChangeUser = (newValue) => {
        this.setState({
            user: newValue
        });
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
