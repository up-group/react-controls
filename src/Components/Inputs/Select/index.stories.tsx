import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpSelect from './'




export interface testProps {

}

export interface testState {
    val: any,
    lastChange?: any,
}

export class Test extends React.Component<testProps, testState>{
    public static defaultProps: testProps = {};

    constructor(p, c) {
        super(p, c);
        this.state = {
            val: null
        };
    }

    render() {
        return <UpThemeProvider theme={UpDefaultTheme}>
            <div>
                <div>
                    <button onClick={() => { this.setState({ val: { id: 5, title: "test" } }); }}>set test</button>
                    <UpSelect autoload={false}
                        isRequired={false}
                        allowClear={true}
                        default={null}
                        multiple={false}
                        tooltip="Votre ville de naissance"
                        minimumInputLength={3}
                        value={this.state.val}
                        returnType="id"

                        dataSource={{
                            query: "https://jsonplaceholder.typicode.com/todos",
                            text: "title"
                        }}
                        onChange={(a) => { this.setState({ val: a, lastChange: a }); }} />
                </div>
                <div>
                    val
               <br />
                    {JSON.stringify(this.state.val)}
                </div>
                <div>
                    lastChange
               <br />
                    {JSON.stringify(this.state.lastChange)}
                </div>
                <div >

                    <UpSelect width="normal"
                        returnType="id"
                        tooltip="Civilité" default={null} data={[
                        { id: 1, text: 'M.' },
                        { id: 2, text: 'Mme' },
                        { id: 3, text: 'Mlle' },
                        { id: 4, text: 'Dr' },
                    ]} onChange={console.log} />

                </div>

            </div>

        </UpThemeProvider>
    }
}


storiesOf('UpSelect', module)
    .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <UpSelect width="normal" tooltip="Civilité" default={null} data={[
                { id: 1, text: 'M.' },
                { id: 2, text: 'Mme' },
                { id: 3, text: 'Mlle' },
                { id: 4, text: 'Dr' },
            ]} onChange={console.log} />
        </UpThemeProvider>
    ))
    .addWithInfo('Set value', 'Utilisation du composant en lui passant les données à afficher',
    () => (
        <Test />
    ))
    .addWithInfo('Ajax', 'Utilisation du composant lié à une source de donnée',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <UpSelect autoload={false}
                isRequired={false}
                allowClear={true}
                default={null}
                multiple={false}
                tooltip="Votre ville de naissance"
                minimumInputLength={3}
                value
                returnType="id"
                filterOptions={(options, filter, currentValues) => {
                    var _options = [];
                    var _self = this;
                    options.map((value) => {
                        if (value['title'].toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                            // check if the option is selected
                            var isInValues: boolean = false;
                            for (var i in currentValues) {
                                var curentValue = currentValues[i];
                                if (value[_self.keyId] === curentValue[_self.keyId]) {
                                    isInValues = true;
                                    break;
                                }
                            };
                            // Return the option only if it is not in the current values
                            if (isInValues === false)
                                _options.push(value);
                        };
                    });
                    return _options;
                }}
                dataSource={{
                    query: "https://jsonplaceholder.typicode.com/todos",
                    text: "title"
                }}
                onChange={console.log} />
        </UpThemeProvider>
    ))
    .addWithInfo('Ajax avec modification des réponses', 'Utilisation du composant lié à une source de donnée',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <UpSelect autoload={false}
                isRequired={false}
                allowClear={true}
                default={null}
                multiple={false}
                tooltip="Votre ville de naissance"
                minimumInputLength={3}
                dataSource={{
                    query: "https://jsonplaceholder.typicode.com/todos",
                    text: "title",
                    handleResponse: (response) => {
                        return [{ id: 100, title: 'Data proxied' }];
                    }
                }}
                onChange={console.log} />
        </UpThemeProvider>
    ))
    .addWithInfo('Required', 'Utilisation du composant avec valeur requise',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <div style={{ margin: "30px" }}>
                <UpSelect isRequired={true}
                    allowClear={true}
                    default={null}
                    multiple={false}
                    tooltip="Votre ville de naissance"
                    data={[
                        { id: 1, text: 'M.' },
                        { id: 2, text: 'Mme' },
                        { id: 3, text: 'Mlle' },
                        { id: 4, text: 'Dr' },
                    ]}
                    onChange={console.log} />
            </div>
        </UpThemeProvider>
    ))
    .addWithInfo('Return Id Value', 'Utilisation du composant en retournant la valeur de l\'identifiant et non plus l\'objet sélectionné',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <div style={{ margin: "30px" }}>
                <UpSelect isRequired={true}
                    allowClear={true}
                    default={null}
                    value={2}
                    multiple={false}
                    returnType={"id"}
                    valueKey={"id"}
                    tooltip="Votre ville de naissance"
                    data={[
                        { id: 1, text: 'M.' },
                        { id: 2, text: 'Mme' },
                        { id: 3, text: 'Mlle' },
                        { id: 4, text: 'Dr' },
                    ]}
                    onChange={console.log} />
            </div>
        </UpThemeProvider>
    ))
    .addWithInfo('Size', 'Utilisation du composant en retournant la valeur de l\'identifiant et non plus l\'objet sélectionné',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <div style={{ margin: "30px" }}>
                <UpSelect isRequired={true}
                    allowClear={true}
                    width={'auto'}
                    default={null}
                    multiple={false}
                    returnType={"id"}
                    valueKey={"id"}
                    tooltip="Votre ville de naissance"
                    data={[
                        { id: 1, text: 'M.' },
                        { id: 2, text: 'Mme' },
                        { id: 3, text: 'Mlle' },
                        { id: 4, text: 'Dr' },
                    ]}
                    onChange={console.log} />
                <UpSelect isRequired={true}
                    allowClear={true}
                    width={'full'}
                    default={null}
                    multiple={false}
                    returnType={"id"}
                    valueKey={"id"}
                    tooltip="Votre ville de naissance"
                    data={[
                        { id: 1, text: 'M.' },
                        { id: 2, text: 'Mme' },
                        { id: 3, text: 'Mlle' },
                        { id: 4, text: 'Dr' },
                    ]}
                    onChange={console.log} />

                <UpSelect isRequired={true}
                    allowClear={true}
                    width={'xsmall'}
                    default={null}
                    multiple={false}
                    returnType={"id"}
                    valueKey={"id"}
                    tooltip="Votre ville de naissance"
                    data={[
                        { id: 1, text: 'M.' },
                        { id: 2, text: 'Mme' },
                        { id: 3, text: 'Mlle' },
                        { id: 4, text: 'Dr' },
                    ]}
                    onChange={console.log} />

                <UpSelect isRequired={true}
                    allowClear={true}
                    width={'small'}
                    default={null}
                    multiple={false}
                    returnType={"id"}
                    valueKey={"id"}
                    tooltip="Votre ville de naissance"
                    data={[
                        { id: 1, text: 'M.' },
                        { id: 2, text: 'Mme' },
                        { id: 3, text: 'Mlle' },
                        { id: 4, text: 'Dr' },
                    ]}
                    onChange={console.log} />

                <UpSelect isRequired={true}
                    allowClear={true}
                    width={'normal'}
                    default={null}
                    multiple={false}
                    returnType={"id"}
                    valueKey={"id"}
                    tooltip="Votre ville de naissance"
                    data={[
                        { id: 1, text: 'M.' },
                        { id: 2, text: 'Mme' },
                        { id: 3, text: 'Mlle' },
                        { id: 4, text: 'Dr' },
                    ]}
                    onChange={console.log} />

                <UpSelect isRequired={true}
                    allowClear={true}
                    width={'large'}
                    default={null}
                    multiple={false}
                    returnType={"id"}
                    valueKey={"id"}
                    tooltip="Votre ville de naissance"
                    data={[
                        { id: 1, text: 'M.' },
                        { id: 2, text: 'Mme' },
                        { id: 3, text: 'Mlle' },
                        { id: 4, text: 'Dr' },
                    ]}
                    onChange={console.log} />
            </div>
        </UpThemeProvider>
    ))
    .addWithInfo('Creatable', 'Utilisation du composant avec autorisation de création de nouvelle option',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <div style={{ margin: "30px" }}>
                <UpSelect autoload={false}
                    isRequired={false}
                    allowClear={true}
                    allowCreate={true}
                    default={null}
                    multiple={false}
                    tooltip="Votre ville de naissance"
                    minimumInputLength={3}
                    dataSource={{
                        query: "https://jsonplaceholder.typicode.com/todos",
                        text: "title"
                    }}
                    filterOptions={(options, filter, currentValues) => {
                        var _options = [];
                        var _self = this;
                        options.map((value) => {
                            if (value['title'].toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                                // check if the option is selected
                                var isInValues: boolean = false;
                                for (var i in currentValues) {
                                    var curentValue = currentValues[i];
                                    if (value[_self.keyId] === curentValue[_self.keyId]) {
                                        isInValues = true;
                                        break;
                                    }
                                };
                                // Return the option only if it is not in the current values
                                if (isInValues === false)
                                    _options.push(value);
                            };
                        });
                        return _options;
                    }}
                    onChange={console.log} />
            </div>
        </UpThemeProvider>
    ));