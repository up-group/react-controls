import * as React from "react";
import { style } from "typestyle";
import { IconCalendrier } from "../../Display/Icons/Icons";
import { relative } from "path";
import { stringIsNullOrEmpty, jourDuMois, isNullOrUndef } from "../../../Common/utils/helpers";


export interface CalendrierProps {
    Date?: Date;
    WithLines?: boolean;
    Disable?: boolean;
    onChange?: (newDate: Date) => void;
}

export interface CalendrierState {
    Date: Date;
    Deplie: boolean,
}

export default class Calendrier extends React.Component<CalendrierProps, CalendrierState> {
    constructor(p, c) {
        super(p, c);
        this.state = {
            Date: isNullOrUndef(this.props.Date) ? new Date() : this.props.Date,
            Deplie: false,
        }
    }

    private onCalendrierClick = () => {
        if (!this.props.Disable) {
            this.setState({ Deplie: !this.state.Deplie, });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.Date !== nextProps.Date && this.state.Date !== nextProps.Date) { // Helper.compareDate => number
            this.setState({ Date: isNullOrUndef(nextProps.Date) ? new Date() : nextProps.Date, });
        }
    }
    
    render() {
        var styleG = style({
            position: "relative",
        });

        return <span className={styleG} >
            <IconCalendrier onClick={this.onCalendrierClick} BackgroundColor="" />
            { this.state.Deplie ? this.renderDeplie() : null }
        </span>;
    }
    private renderDeplie = (): JSX.Element => {
        var styleG = style({
            position: "absolute",
            left: "16px",
            top: "15%",
            display: "inline-block",
            zIndex: 100,

            backgroundColor: "green",
        });
        var styleTable = style({
            margin: "4px",
            $nest: {
                "& th": {
                    textAlign: "center",
                    verticalAlign: "middle",
                    minWidth: "25px",
                    paddingRight: "0",
                    paddingBottom: "0",
                    fontWeight: "normal",
                },
                "& td": {
                    textAlign: "center",
                    verticalAlign: "middle",
                    minWidth: "25px",
                    paddingRight: "0",
                    paddingBottom: "0",
                },
            },
        });

        var jdm: number = jourDuMois(this.state.Date.getMonth(), this.state.Date.getFullYear(), true);

        var idx1eJour: number = new Date(this.state.Date.getFullYear(), this.state.Date.getMonth(), 1).getDay() - 1;
        if (idx1eJour < 0) { // dimanche
            idx1eJour = 6;
        }

        var premiereLigne: JSX.Element[] = [];
        var cpt: number = 0;
        while (cpt < idx1eJour) {
            premiereLigne.push(<td key={cpt} />);
            cpt++;
        }
        var cpt2: number = cpt;
        while (cpt2 < 7) {
            premiereLigne.push(<td key={cpt2} >{cpt2 - cpt + 1}</td>);
            cpt2++;
        }

        var lignesComplete: JSX.Element[] = [];
        var nbBoucleComplete: number = (jdm - cpt2 + cpt) / 7; // nombre quil faut tronquer
        nbBoucleComplete = nbBoucleComplete - (nbBoucleComplete % 1)
        for (var cpt3: number = 0; cpt3 < nbBoucleComplete; cpt3++) {
            lignesComplete.push(
                <tr key={cpt3 + 2} >
                    { [cpt2 - cpt + 1, cpt2 - cpt + 2, cpt2 - cpt + 3, cpt2 - cpt + 4, cpt2 - cpt + 5, cpt2 - cpt + 6, cpt2 - cpt + 7].map((j, i) => {
                        cpt2++;
                        return <td key={i} >{j}</td>;
                    }) }
                </tr>
            );
        }
        
        var jRestant: number = jdm - cpt2 + cpt;
        var derniersJour: JSX.Element[] = null;
        if (jRestant > 0) {
            derniersJour = [];
            var cpt4: number = 0;
            while (cpt4 < jRestant) {
                derniersJour.push(<td key={cpt4} >{cpt2 - cpt + 1 + cpt4}</td>);
                cpt4++;
            }
            while (cpt4 < 7) {
                derniersJour.push(<td key={cpt4} />);
                cpt4++;
            }
        }

        return <span className={styleG} >
            <span>annee mois ...</span>
            <br />
            <table className={styleTable} >
                <tbody>
                    <tr>
                        <th>L.</th>
                        <th>M.</th>
                        <th>M.</th>
                        <th>J.</th>
                        <th>V.</th>
                        <th>S.</th>
                        <th>D.</th>
                    </tr>
                    <tr>{premiereLigne}</tr>
                    {lignesComplete}
                    { derniersJour === null ? null : 
                        <tr>{derniersJour}</tr>
                    }
                </tbody>
            </table>
        </span>;
    }
}