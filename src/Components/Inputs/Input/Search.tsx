import * as React from "react"
import { style } from "typestyle"
import { IconRecherche } from "../../Display/Icons/Icons";
import { isNullOrUndef, getFontClassName } from "../../../Common/utils/helpers";


export interface SearchProps {
    Value: string;
    PlaceHolder: string;
    onChange: (value: string) => void;
    onFocus: (focus: boolean) => void;
}

export interface SearchState {
    Focus: boolean;
}

export default class Search extends React.Component<SearchProps, SearchState> {
    constructor(p, c) {
        super(p, c);
        this.state = {
            Focus: false,
        }
    }

    onFocus = (focus: boolean) => {
        this.setState({Focus: focus});
        this.props.onFocus(focus);
    }

    render() {
        var couleurBords: string = this.state.Focus ? "#ffffff" : "#7a756f";
        var placeholder: string = isNullOrUndef(this.props.PlaceHolder) ? "" : this.props.PlaceHolder;
        var value: string = isNullOrUndef(this.props.Value) ? "" : this.props.Value;  

        var styleG = style({
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
        });
        var styleIcone = style({
            top: "10%",
            left: "2%",
            position: "absolute",
        });
        var styleInput = getFontClassName({ fontSize: "14px", color: "#ffffff", }) + " " + style({
            width: "100%",
            height: "100%",
            borderRadius: "4px",
            border: "1px solid " + couleurBords,
            paddingLeft: "12%",
            backgroundColor: "#3f3b37",
            outline: "none",
        });
      
        return <div className={styleG} >
            <IconRecherche className={styleIcone} Color={couleurBords} IconSize="166.67%" />
            <input className={styleInput} placeholder={placeholder} value={value} 
                onChange={(event) => this.props.onChange(event.target.value)}
                onFocus={() => this.onFocus(true)} onBlur={() => this.onFocus(false)} />
        </div>
    }
}