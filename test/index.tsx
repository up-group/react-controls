import * as React from "react";
import * as ReactDOM from "react-dom";
import Input from "../src/Input/index"
import Date from "../src/Date/index"
import DateTime from "../src/DateTime/index"
import Number from "../src/Number/Number"
import Integer from "../src/Integer/Integer"
import Phone from "../src/Phone/Phone"
import Email from "../src/Email/Email"


//interface DemoState {
//    result: string;
//    schema: JsonSchema;
//}

export class Demo extends React.Component<{}, {}> {


    constructor(p, c) {
        super(p, c);
        this.state = { result: "", schema: {} }
    }

    render() {

        return <div className="col-md-6">
            <Email onError={this.onError} onChange={this.test} />
            <Phone onError={this.onError} onChange={this.test} />
            <Number onError={this.onError} onChange={this.test} max={15}  />
            <Integer onError={this.onError} onChange={this.test} min={5}  />
            <Date value="" onChange={this.test} />
            <DateTime value="" onChange={this.test} />
        </div>

    }


    test = (args) => {
        console.log("cha",args);
    }

    onError = (args) => {
        console.log("err",args)
    }
    //render() {
    //    //var schemas: { id: string, data: JsonSchema }[] = [

    //    //    {
    //    //        data: {

    //    //            "title": "test",
    //    //            "type": "object",
    //    //            "properties": {
    //    //                "number": { "type": "number" },
    //    //                "integer": { "type": "integer" },
    //    //                "boolean": { "type": "boolean" },
    //    //                "string": { "type": "string" }
    //    //            }
    //    //        }
    //    //        ,
    //    //        id: "base"
    //    //    }
    //    //    ,
    //    //    {
    //    //        data: {
    //    //            "title": "date",
    //    //            "type": "object",
    //    //            "properties": {
    //    //                "date": { "type": "string", "format": "date" },
    //    //                "time": { "type": "string", "format": "time" },
    //    //                "datetime": { "type": "string", "format": "date-time" }
    //    //            }
    //    //        }
    //    //        ,
    //    //        id: "DateTime"
    //    //    },
    //    //    {
    //    //        data: {
    //    //            "title": "Required",
    //    //            "type": "object",
    //    //            "properties": {
    //    //                "number": { "type": "number" }
    //    //            },
    //    //            "required": ["number"]
    //    //        }
    //    //        ,
    //    //        id: "required"
    //    //    },
    //    //    {
    //    //        data: {
    //    //            "title": "MAX / MIN",
    //    //            "type": "object",
    //    //            "properties": {
    //    //                "size": {
    //    //                    "type": "number",
    //    //                    "minimum": 5.0,
    //    //                    "maximum": 10.5
    //    //                }
    //    //            },
    //    //        }
    //    //        ,
    //    //        id: "MAX / MIN"
    //    //    },

    //    //    {
    //    //        data: {
    //    //            "title": "enum",
    //    //            "type": "object",
    //    //            "properties": {
    //    //                "size": {
    //    //                    "enumNames": ["choix1", "choix2", "choix3"],
    //    //                    "enumDescriptions": ["Premier choix", "Second choix", "Troisieme choix"],
    //    //                    "type": "integer",
    //    //                    "format": "enum",
    //    //                    "enum": [2, 4, 6]
    //    //                }

    //    //            },
    //    //        }
    //    //        ,
    //    //        id: "enum"
    //    //    }
    //    //    ,

    //    //    {
    //    //        data: {
    //    //            "title": "upload",
    //    //            "type": "object",
    //    //            "properties": {
    //    //                "file":
    //    //                {
    //    //                    "fileExtension": ".csv",
    //    //                    "type": ["string", "null"],
    //    //                    "default": null,
    //    //                    "format": "upload"
    //    //                }
    //    //            },
    //    //        }
    //    //        ,
    //    //        id: "upload"
    //    //    }












    //    //];


    //    //var onFormEror = (e) => {
    //    //    console.log("onFormEror", e);
    //    //}

    //    //return <div>

    //    //    <select className="form-control" defaultValue="" onChange={this.selectChange} required>

    //    //        {
    //    //            schemas.map((schema) => {
    //    //                return <option key={schema.id} value={JSON.stringify(schema.data)}>{schema.id}</option>;
    //    //            })
    //    //        }

    //    //    </select>

    //    //    <textarea value={JSON.stringify(this.state.schema)} className="form-control" cols={100} rows={10} onChange={this.onSchemaChange}></textarea>
    //    //    <hr />
    //    //    <UpSchemaForm schema={this.state.schema} onFormEror={onFormEror} onFormPayload={this.onFormPayload}></UpSchemaForm>
    //    //    <hr />
    //    //    {this.state.result}
    //    //</div>


    //}

    onSchemaChange = (e) => {
        this.setState({ schema: JSON.parse(e.target.value) });
    }

    onFormPayload = (e) => {
        this.setState({ result: JSON.stringify(e) });
    }


    selectChange = (e) => {
        this.setState({ schema: JSON.parse(e.target.value) });
    }

}




ReactDOM.render(<Demo />, document.getElementById('root'));


