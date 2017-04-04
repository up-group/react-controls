import * as React from "react";
import * as ReactDOM from "react-dom";

interface UpFileProp {
    maxSize?: number; //in Mo
    hasError: boolean;
    fileExtension?: string;
    onChange: (value: number[]) => void;
    onError: (value: string) => void;
}

export default class UpFile extends React.Component<UpFileProp, {}> {
    constructor(p, c) {        super(p, c);
    }    render() {
        if (!FileReader) {
            return <span>Non support du navigateur</span>;
        }

        return <input
            style={this.props.hasError === true ? { borderColor: "red" } : null}
            type="file"
            className="form-control"
            accept={this.props.fileExtension}
            onChange={this.onchange}
            />
    }

    get maxSizeb() {
        return 1048576 * this.maxSizeMb;
    }
    get maxSizeMb() {
        return this.props.maxSize || 5;
    }

    onchange = (event) => {
        if (!FileReader) {
            return null;
        }
        if (event.target.files.length == 0) {
            this.props.onChange([]);
            return;
        }

        var size = event.target.files[0].size;
        if (size > this.maxSizeb) {
            this.props.onError("Plus de " + this.maxSizeMb + "M");
            return;
        }

        var reader = new FileReader();
        reader.onloadend = () => {

            var array = new Uint8Array(reader.result);
            var a = [];
            for (var i = 0; i < array.length; i++) {
                a.push(array[i]);
            }
            this.props.onChange(a);
        }
        reader.readAsArrayBuffer(event.target.files[0]);
    }


}