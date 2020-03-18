import * as React from 'react'

import UpSelect from './'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { mdx } from '@storybook/addon-docs/blocks';

interface TestProps {

}

interface TestState {
    valM: any[],
    val: any,
    lastChange?: any,
    valE: any;
    valEM: any[];
}

class Test extends React.Component<TestProps, TestState>{
    public static defaultProps: TestProps = {};

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
                        onChange={(event, a) => { this.setState({ valM: a, lastChange: a }); }} />
                </div>
                <div>
                    {JSON.stringify(this.state.valM)}
                </div>

                <div >

                    <UpSelect
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
                        returnType="id"
                        multiple={true}
                        tooltip="Civilité" default={null} data={[
                            { id: 1, text: 'M.' },
                            { id: 2, text: 'Mme' },
                            { id: 3, text: 'Mlle' },
                            { id: 4, text: 'Dr' },
                        ]}
                        onChange={(event, value) => { this.setState({ valEM: value, lastChange: value }); }} />
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

export default { 
    title: 'Components|Inputs/UpSelect',
    decorators : [withKnobs,getRootContainer('UpSelect')],
    parameters: {
        docs: {
            page: mdx
        }
    }
};

const SimpleSelect = (props) => {
    let [selectedValue, setValue] = React.useState({ id: 1, text: 'M.' });
    
    const onChange = (event, value) => {
        setValue(value);
    }

    return (
        <UpSelect 
            tooltip={"Civilité"} 
            isRequired={true} 
            default={null} 
            data={[
                { id: 1, text: 'M.' },
                { id: 2, text: 'Mme' },
                { id: 3, text: 'Mlle' },
                { id: 4, text: 'Dr' },
            ]}
            value={selectedValue} 
            onChange={onChange} />
)}

export const General = () => <SimpleSelect />;

export const FetchingData =  () => (
    <UpSelect autoload={false}
        isRequired={false}
        allowClear={true}
        default={null}
        multiple={false}
        tooltip="Votre ville de naissance"
        minimumInputLength={3}
        returnType="id"
        labelKey={"title"}
        dataSource={{
            query: "https://jsonplaceholder.typicode.com/todos",
            text: "title"
        }}
        onChange={console.log} />
);
export const FetchingDataWithProxy =  () => (
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
) ;

export const IsRequired =
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
    ); 

export const ReturnId =
    () => (
        <div style={{ margin: "30px" }}>
            <UpSelect isRequired={true}
                allowClear={true}
                default={2}
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
    ) ;

export const Creatable = () => (
        <div style={{ margin: "30px" }}>
            <UpSelect autoload={false}
                isRequired={false}
                allowClear={true}
                allowCreate={true}
                default={null}
                multiple={false}
                tooltip="Votre civilité"
                minimumInputLength={3}
                createOptionPosition={'first'}
                data={[
                    { id: 1, text: 'M.' },
                    { id: 2, text: 'Mme' },
                    { id: 3, text: 'Mlle' },
                    { id: 4, text: 'Dr' },
                ]}
                onChange={console.log} />
        </div>
)
export const AsyncCreatable = () => (
        <div style={{ margin: "30px" }}>
            <UpSelect autoload={false}
                isRequired={false}
                allowClear={true}
                allowCreate={true}
                default={null}
                multiple={false}
                tooltip="Votre ville de naissance"
                minimumInputLength={3}
                createOptionPosition={'first'}
                dataSource={{
                    query: "https://jsonplaceholder.typicode.com/todos",
                    text: "title"
                }}
                onChange={console.log} />
        </div>
)
export const MultiCreatable =
() => (
        <div style={{ margin: "30px" }}>
            <UpSelect autoload={false}
                isRequired={false}
                allowClear={true}
                allowCreate={true}
                default={null}
                multiple={true}
                tooltip="Vos couleurs préférées"
                minimumInputLength={3}
                createOptionPosition={'first'}
                data={[
                    { id: 1, text: 'Rouge' },
                    { id: 2, text: 'Bleu' },
                    { id: 3, text: 'Vert' },
                    { id: 4, text: 'Orange' },
                ]}
                onChange={console.log} />
        </div>
);