import * as React from "react"
import UpButton, { UpButtonProps } from "../../Inputs/Button/index"
import { style } from "typestyle"


export interface buttonGroupDropDownElement {
    onClick: () => void;
    name: string | JSX.Element;
}


export interface UpButtonGroupDropDownProps extends UpButtonProps {
    buttons: buttonGroupDropDownElement[];
    text: string;
    onClick?;
}

export interface UpButtonGroupDropDownState {
    open: boolean;
}

export default class UpButtonGroupDropDown extends React.Component<UpButtonGroupDropDownProps, UpButtonGroupDropDownState>{


    constructor(p, c) {
        super(p, c);
        this.state = {
            open: false
        };
    }

    render() {
        var main: React.CSSProperties = {
            position: "relative",
            display: "inline-block"
        }


        const BtnList = style({
            display: this.state.open ? "block" : "none",
            position: "absolute",
            zIndex: 1000,
            listStyle: "none",
            backgroundColor: "#ffffff",
            minWidth: 160,
            margin: 0,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            borderRadius: 4,
            boxShadow: "0 6px 12px rgba(0, 0, 0, .175)"
        });

        const buttonElement = style({
            cursor: "pointer",
            paddingLeft: 10,
            $nest: {
                '&:hover': { backgroundColor: "#f5f5f5" },
            },
        });


        const {
            text,
            buttons,
            ...other
        } = this.props;

        return <div style={main} tabIndex={0} onBlur={this.collapse} >
            <UpButton { ...other } onClick={this.change}>
                {this.props.text}<span className="caret" />
            </UpButton>
            <ul className={BtnList} >
                {
                    this.props.buttons.map((v, i) => {
                        return <li key={i} className={buttonElement}
                            onMouseDown={(e) => {
                                v.onClick();
                                e.stopPropagation();
                            }}
                        >{v.name}</li>
                    })
                }
            </ul>
        </div>
    }

    expand = () => {
        this.setState({ open: true });
    }

    collapse = (e) => {
        this.setState({ open: false });
    }

    change = () => {
        this.setState({ open: !this.state.open });
    }
}

