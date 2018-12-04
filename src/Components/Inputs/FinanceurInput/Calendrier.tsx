import * as React from "react";
import { style } from "typestyle";
import { IconCalendrier, IconChevron, DirectionEnum } from "../../Display/Icons/Icons";
import { stringIsNullOrEmpty, jourDuMois, isNullOrUndef } from "../../../Common/utils/helpers";


const MONTH: string[] = ["Jan.", "Fév.", "Mars", "Avr.", "Mai", "Juin", "Juil.", "Août", "Sep.", "Oct.", "Nov.", "Déc."];

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

    public Blur = () => {
        if (this.state.Deplie) {
            this.setState({ Deplie: false, });
        }
    }

    private onCalendrierClick = () => {
        if (!this.props.Disable) {
            this.setState({ Deplie: !this.state.Deplie, });
        }
    }

    private incYear = (increment: number) => {
        this.setState({ Date: new Date(this.state.Date.getFullYear() + increment, this.state.Date.getMonth(), this.state.Date.getDate()), });
    }
    private incMonth = (increment: number) => {
        var annee: number = this.state.Date.getFullYear();
        var mois: number = this.state.Date.getMonth() + increment;
        while (mois > 11) {
            annee++;
            mois -= 12;
        }
        while (mois < 0) {
            annee--;
            mois += 12;
        }
        this.setState({ Date: new Date(annee, mois, this.state.Date.getDate()), });
    }
    private onDaySelect = (jour: number) => {
        if (!isNullOrUndef(this.props.onChange)) {
            this.props.onChange(new Date(this.state.Date.getFullYear(), this.state.Date.getMonth(), jour));
        }
        this.setState({ Deplie: false, });
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
            padding: "4px",
            backgroundColor: "#ffffff",
            borderRadius: "4px",
            border: "1px solid #979797",
        });
        var styleTable = style({
            display: "table",
            $nest: {
                "& > span": {
                    display: "table-row",
                },
                "& > span > span": {
                    textAlign: "center",
                    verticalAlign: "middle",
                    minWidth: "25px",
                    paddingRight: "0",
                    paddingBottom: "0",
                    display: "table-cell",
                },
            },
        });
        var styleCursor = style({
            cursor: "pointer",
        });

        var jdm: number = jourDuMois(this.state.Date.getMonth(), this.state.Date.getFullYear(), true);

        var idx1eJour: number = new Date(this.state.Date.getFullYear(), this.state.Date.getMonth(), 1).getDay() - 1;
        if (idx1eJour < 0) { // dimanche
            idx1eJour = 6;
        }

        var premiereLigne: JSX.Element[] = [];
        var cpt: number = 0;
        while (cpt < idx1eJour) {
            premiereLigne.push(<span key={cpt} />);
            cpt++;
        }
        var cpt2: number = cpt;
        while (cpt2 < 7) {
            let jp = cpt2 - cpt + 1;
            premiereLigne.push(<span key={cpt2} className={styleCursor} onClick={() => this.onDaySelect(jp)} >{jp}</span>);
            cpt2++;
        }

        var lignesCompletes: JSX.Element[] = [];
        var nbBoucleComplete: number = (jdm - cpt2 + cpt) / 7; // nombre quil faut tronquer
        nbBoucleComplete = nbBoucleComplete - (nbBoucleComplete % 1)
        for (var cpt3: number = 0; cpt3 < nbBoucleComplete; cpt3++) {
            lignesCompletes.push(
                <span key={cpt3 + 2} >
                    { [cpt2 - cpt + 1, cpt2 - cpt + 2, cpt2 - cpt + 3, cpt2 - cpt + 4, cpt2 - cpt + 5, cpt2 - cpt + 6, cpt2 - cpt + 7].map((j, i) => {
                        cpt2++;
                        return <span key={i} className={styleCursor} onClick={() => this.onDaySelect(j)} >{j}</span>;
                    }) }
                </span>
            );
        }
        
        var jRestant: number = jdm - cpt2 + cpt;
        var derniersJour: JSX.Element[] = null;
        if (jRestant > 0) {
            derniersJour = [];
            var cpt4: number = 0;
            while (cpt4 < jRestant) {
                let jd = cpt2 - cpt + 1 + cpt4;
                derniersJour.push(<span key={cpt4} className={styleCursor} onClick={() => this.onDaySelect(jd)} >{jd}</span>);
                cpt4++;
            }
            while (cpt4 < 7) {
                derniersJour.push(<span key={cpt4} />);
                cpt4++;
            }
        }

        return <span className={styleG} >
            <span>
                <IconChevron Direction={DirectionEnum.Gauche} onClick={() => this.incMonth(-1)} />
                {MONTH[this.state.Date.getMonth()]}
                <IconChevron Direction={DirectionEnum.Droite} onClick={() => this.incMonth(1)} />
                
                <IconChevron Direction={DirectionEnum.Gauche} onClick={() => this.incYear(-1)} />
                {this.state.Date.getFullYear()}
                <IconChevron Direction={DirectionEnum.Droite} onClick={() => this.incYear(1)} />
            </span>
            <br />
            <span className={styleTable} >
                <span>
                    <span>L.</span>
                    <span>M.</span>
                    <span>M.</span>
                    <span>J.</span>
                    <span>V.</span>
                    <span>S.</span>
                    <span>D.</span>
                </span>
                <span>{premiereLigne}</span>
                {lignesCompletes}
                { derniersJour === null ? null : 
                    <span>{derniersJour}</span>
                }
            </span>
        </span>;
    }
}