import * as React from "react"
import {UpFileProps} from "./"
import UpFileStyle from "./styles"

export default class UpFile extends React.Component<UpFileProps, {}> {
    constructor(p, c) {
        super(p, c);
    }

    render() {
        if (!FileReader) {
            return <span>Non support du navigateur</span>;
        }
        const {onChange, onError, ...others} = this.props ;
        return <UpFileStyle {...others} onChange={this.onChange}/>
    }

    get maxSizeb() {
        return 1048576 * this.maxSizeMb;
    }
    get maxSizeMb() {
        return this.props.maxSize || 5;
    }

    onChange = (event) => {
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
