import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpSelect from './'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export interface testProps {

}

export interface testState {
    valM: any[],
    val: any,
    lastChange?: any,
    valE: any;
    valEM: any[];
}

export class Test extends React.Component<testProps, testState>{
    public static defaultProps: testProps = {};

    constructor(p, c) {
        super(p, c);
        this.state = {
            val: { id: 555, name: "tesdzadzt" },
            valM: null,
            valE: 1,
            valEM: [1, 2],

        };
    }

    render() {
        return  <div>
                <div>
                    <button onClick={() => {
                        this.setState({
                            val: { id: 5, name: "test" },
                            valM: [{ id: 1111, name: "test 1" }, { id: 11122, name: "test 2" }],
                            valE: 3,
                            valEM: [3, 4],
                        });
                    }}>set test</button>
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
                            query: "https://jsonplaceholder.typicode.com/users",
                            text: "name"
                        }}
                        onChange={(a) => { this.setState({ val: a, lastChange: a }); }} />
                    <div>
                        {JSON.stringify(this.state.val)}
                    </div>

                    <UpSelect autoload={false}
                        isRequired={false}
                        allowClear={true}
                        default={null}
                        multiple={true}
                        tooltip="Votre ville de naissance"
                        minimumInputLength={3}
                        value={this.state.valM}
                        returnType="id"
                        dataSource={{
                            query: "https://jsonplaceholder.typicode.com/users",
                            text: "name"
                        }}
                        onChange={(a) => { this.setState({ valM: a, lastChange: a }); }} />
                </div>
                <div>
                    {JSON.stringify(this.state.valM)}
                </div>

                <div >

                    <UpSelect width="normal"
                        value={this.state.valE}
                        returnType="id"
                        tooltip="Civilité" default={null}
                        data={[
                            { id: 1, text: 'M.' },
                            { id: 2, text: 'Mme' },
                            { id: 3, text: 'Mlle' },
                            { id: 4, text: 'Dr' },
                        ]}
                        onChange={(a) => { this.setState({ valE: a, lastChange: a }); }} />
                    <div>
                        {JSON.stringify(this.state.valE)}
                    </div>
                    <UpSelect
                        value={this.state.valEM}
                        width="normal"
                        returnType="id"
                        multiple={true}
                        tooltip="Civilité" default={null} data={[
                            { id: 1, text: 'M.' },
                            { id: 2, text: 'Mme' },
                            { id: 3, text: 'Mlle' },
                            { id: 4, text: 'Dr' },
                        ]}
                        onChange={(a) => { this.setState({ valEM: a, lastChange: a }); }} />
                </div>

            <div>
                {JSON.stringify(this.state.valEM)}
            </div>
            <div>
                lastChange
               <br />
                {JSON.stringify(this.state.lastChange)}
            </div>
            </div>
    }
}

const stories = storiesOf('Inputs/UpSelect', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpSelect'));

const SimpleSelect = (props) => {
    let [selectedValue, setValue] = React['useState']({ id: 1, text: 'M.' });
    
    const onChange = (value) => {
        console.log(value) ;
        setValue(value);
    }

    return (
        <UpSelect width="normal" tooltip="Civilité" default={null} data={[
            { id: 1, text: 'M.' },
            { id: 2, text: 'Mme' },
            { id: 3, text: 'Mlle' },
            { id: 4, text: 'Dr' },
        ]} value={selectedValue} onChange={onChange} />
)}

stories.add('Simple usage',
    () => <SimpleSelect />, { info : 'Utilisation du composant en lui passant les données à afficher'}
).add('Set value',
    () => (
        <Test />
    ), { info : 'Utilisation du composant en lui passant les données à afficher'}
).add('Ajax',
    () => (
            <UpSelect autoload={false}
                isRequired={false}
                allowClear={true}
                default={null}
                multiple={false}
                tooltip="Votre ville de naissance"
                minimumInputLength={3}
                value
                returnType="id"
                labelKey={"title"}
                filterOptions={(option, filter) => {
                    return option['title'] != null && option['title'].toLowerCase().indexOf(filter.toLowerCase()) >= 0 ;
                }}
                dataSource={{
                    query: "https://jsonplaceholder.typicode.com/todos",
                    text: "title"
                }}
                onChange={console.log} />
    ), { info : 'Utilisation du composant lié à une source de donnée' }
).add('Ajax avec modification des réponses',
    () => (
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
    ), { info :  'Utilisation du composant lié à une source de donnée' }
).add('Required',
    () => (
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
    ), { info : 'Utilisation du composant avec valeur requise'}
).add('Return Id Value',
    () => (
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
    ), { info :  'Utilisation du composant en retournant la valeur de l\'identifiant et non plus l\'objet sélectionné' }
).add('Size',
    () => (
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
    ), { info : 'Utilisation du composant en retournant la valeur de l\'identifiant et non plus l\'objet sélectionné'},
).add('Creatable',
    () => (
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
                    filterOptions={(option, filter) => {
                        return option['title'] != null && option['title'].toLowerCase().indexOf(filter.toLowerCase()) >= 0 ;
                    }}
                    onChange={console.log} />
            </div>
    ), { info : 'Utilisation du composant avec autorisation de création de nouvelle option'}
);