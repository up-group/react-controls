import * as React from "react";
import { style } from "typestyle";

import { stringIsNullOrEmpty, getFontClassName, arrayIsNullOrEmpty, isNullOrUndef, arrayIsIdentical, objectContains } from "../../../Common/utils/helpers";
import { IconRecherche, IconChevron, DirectionEnum } from "../../Display/Icons/Icons";
import { TextInput, PosIconEnum } from ".";


export interface EnTete {
    Libelle?: string;
    RechercheActif?: boolean;
    OrderActif?: boolean;
    OrderCompare?: (obj1: any, obj2: any) => number;
}

export interface Ordre {
    IdxCol: number;
    Descendant: boolean;
}

export interface TableauProps {
    Titre?: string;
    OrderActif?: boolean; 
    RechercheVisible?: boolean;
    EnTetes?: EnTete[];
    Donnees: any[][];
}

export interface TableauState {
    Donnees: any[][];
    Order: Ordre[];
    SearchText: string;
}

export default class Tableau extends React.Component<TableauProps, TableauState> {
    constructor(p, c) {
        super(p, c);
        this.state = {
            Donnees: this.props.Donnees.map((ligne: any[]): any[] => {
                return ligne.map((cell: any): any => {
                    return cell;
                });
            }),
            Order: [],
            SearchText: null,
        };
    }

    private onOrder = (idxCol: number) => {
        if (arrayIsNullOrEmpty(this.state.Order)) {
            this.setState({ Order: [{ IdxCol: idxCol, Descendant: false, }], });
        } else {
            var order: Ordre[] = this.state.Order.map((item) => { return {...item}; });
            if (order[0].IdxCol === idxCol) {
                order[0].Descendant = ! order[0].Descendant;
            } else {
                order = order.filter((item: Ordre, idx: number): boolean => {
                    return item && item.IdxCol !== idxCol;
                });
                order.splice(0, 0, { IdxCol: idxCol, Descendant: false, });
            }
            this.setState({ Order: order.map((item) => { return {...item}; }), });
        }
    }
    private onSearchChange = (value: string) => {
        if (value !== this.state.SearchText) {
            this.setState({ SearchText: value, });
        }
    }

    private applyOrder = (donnees: any[][], order: Ordre[]): any[][] => {
        if (arrayIsNullOrEmpty(donnees)) {
            return [];
        }
        if (!this.props.OrderActif || arrayIsNullOrEmpty(order) || arrayIsNullOrEmpty(this.props.EnTetes) || donnees.length < 2) {
            return donnees;
        } 

        var orderToApply: Ordre[] = order.filter((item: Ordre): boolean => {
            return this.props.EnTetes[item.IdxCol] && this.props.EnTetes[item.IdxCol].OrderActif !== false;
        });
        if (arrayIsNullOrEmpty(orderToApply)) {
            return donnees;
        }

        var result: any[][] = [donnees[0]];

        for (var cptDonnees: number = 1; cptDonnees < donnees.length; cptDonnees++) {
            var insert: boolean = false;

            for (var cptResult: number = 0; cptResult < result.length; cptResult++) {
                for (var cptOrdre: number = 0; cptOrdre < orderToApply.length; cptOrdre++) {
                    var dataDonnees: any = donnees[cptDonnees][orderToApply[cptOrdre].IdxCol];
                    var dataResult: any = result[cptResult][orderToApply[cptOrdre].IdxCol];

                    if (!isNullOrUndef(this.props.EnTetes[orderToApply[cptOrdre].IdxCol].OrderCompare)) {
                        var comp: number = this.props.EnTetes[orderToApply[cptOrdre].IdxCol].OrderCompare(dataDonnees, dataResult);
                        if (comp === 0) {// egal
                            continue;
                        }
                        if ((orderToApply[cptOrdre].Descendant && comp > 0) // dataDonnees > dataResult
                                || (!orderToApply[cptOrdre].Descendant && comp < 0)) { // dataDonnees < dataResult
                            result.splice(cptResult, 0, donnees[cptDonnees]);
                            insert = true;
                        }
                        break;
                    }

                    if (dataDonnees === null) {
                        break;
                    }
                    if (dataResult === null) {
                        result.splice(cptResult, 0, donnees[cptDonnees]);
                        insert = true;
                        break;
                    }

                    if (typeof dataDonnees === "object" || typeof dataResult === "object" || dataDonnees == dataResult) {
                        continue;
                    }

                    if ((orderToApply[cptOrdre].Descendant && dataDonnees > dataResult) 
                            || (!orderToApply[cptOrdre].Descendant && dataDonnees < dataResult)) {
                        result.splice(cptResult, 0, donnees[cptDonnees]);
                        insert = true;
                    }
                    break;
                }

                if (insert) {
                    break;
                }
            }

            if (!insert) {
                result.push(donnees[cptDonnees]);
            }
        }

        return result;
    }
    private applySearch = (donnees: any[][], search: string): any[][] => {
        if (arrayIsNullOrEmpty(donnees)) {
            return [];
        }
        if (!this.props.RechercheVisible || stringIsNullOrEmpty(search) || arrayIsNullOrEmpty(this.props.EnTetes) || donnees.length < 2) {
            return donnees;
        }

        var filtre = (ligne: any[], idx: number): boolean => {
            if (arrayIsNullOrEmpty(ligne)) {
                return false;
            }
            for (var cpt: number = 0; cpt < ligne.length; cpt++) {
                if (this.props.EnTetes[cpt] && this.props.EnTetes[cpt].RechercheActif !== false && objectContains(ligne[cpt], search)) {
                    return true;
                }
            }
            return false;
        };

        // on place en haut les lignes contenant la recherche, puis les autres.
        // les deux groupes de lignes gardent ainsi l'ordre fixé par les chevrons des colonnes
        return donnees.filter(filtre).concat(donnees.filter((l, i) => { return !filtre(l, i); }));
    }

    componentWillReceiveProps(nextProps) {
        if (!arrayIsIdentical(nextProps.Donnees, this.props.Donnees) && !arrayIsIdentical(nextProps.Donnees, this.state.Donnees)) {
            this.setState({ 
                Donnees: nextProps.Donnees.map((ligne: any[]): any[] => {
                    return ligne.map((cell: any): any => {
                        return cell;
                    });
                }), 
            });
        }
    }

    render() {
        const backColor: string = "#ffffff";
        const colorEnTete: string = "#9b9b9b";
        var enTetes: boolean = !arrayIsNullOrEmpty(this.props.EnTetes);

        var styleG = style({
            backgroundColor: backColor,
            width: "100%",
            position: "relative",
        });
        var styleTitre = getFontClassName({ fontSize: "18px", fontWeight: 500, color: "#4e5b59", });
        var styleRecherche = style({
            textAlign: "right",
            marginBottom: "0px",
        });
        var styleTable = getFontClassName({ fontSize: "14px", color: "#4a4a4a", }) + " " + style({
            width: "100%",
            $nest: {
                "& tr": {
                    width: "100%",
                },
                "& td": {
                    minHeight: "32px",
                    verticalAlign: "middle",
                    padding: "5px 8px 5px 5px",
                },
                "& tr:nth-child(2n)": {
                    backgroundColor: enTetes ? "#f5f5f5" : backColor,
                },
                "& tr:nth-child(2n+1)": {
                    backgroundColor: enTetes ? backColor : "#f5f5f5",
                },
            },
        });
        var styleEnTete = getFontClassName({ fontSize: "12px", fontWeight: 500, color: colorEnTete, }) + " " + style({
            $nest: {
                "& td": {
                    height: "24px",
                    paddingBottom: "4px",
                },
            },
        });

        var donnees: any[][] = this.applySearch(this.applyOrder(this.state.Donnees, this.state.Order), this.state.SearchText);

        return <div className={styleG} >
            { stringIsNullOrEmpty(this.props.Titre) ? null :
                <p className={styleTitre} >{this.props.Titre}</p>
            }
            { !this.props.RechercheVisible ? null :
                <p className={styleRecherche} >
                    <TextInput Placeholder="Recherche" Icon={<IconRecherche Color={"#354052"} BackgroundColor={""} IconSize="14px" />}
                        IconPos={PosIconEnum.Droite} onChange={this.onSearchChange} />
                </p>
            }
            <table className={styleTable} >
                <tbody>
                    { !enTetes ? null :
                        <tr className={styleEnTete} >
                            { this.props.EnTetes.map((enTete: EnTete, idx: number): JSX.Element => {
                                var icon: JSX.Element = null;
                                if (this.props.OrderActif && !isNullOrUndef(enTete) && enTete.OrderActif !== false) {
                                    var direction: DirectionEnum = DirectionEnum.Bas;
                                    if (!arrayIsNullOrEmpty(this.state.Order)) {
                                        var ordre: Ordre[] = this.state.Order.filter((item) => { return item.IdxCol === idx; });
                                        if (ordre && ordre[0] && ordre[0].Descendant) {
                                            direction = DirectionEnum.Haut;
                                        }
                                    }
                                    icon = <IconChevron Color={colorEnTete} IconSize="12px" fontWeight={500} 
                                            onClick={() => this.onOrder(idx)} Direction={direction} />
                                }

                                return isNullOrUndef(enTete) ? <td key={idx} /> : 
                                    <td key={idx} >
                                        <span>{enTete.Libelle}</span>&nbsp;{icon}
                                    </td>;
                            }) }
                        </tr>
                    }

                    { donnees.map((ligne: any[], idx: number): JSX.Element => {
                        if (arrayIsNullOrEmpty(ligne)) {
                            return null;
                        }
                        return <tr key={idx} >
                            { ligne.map((cellule: any, idx2: number): JSX.Element =>{
                                return <td key={idx.toString() + "_" + idx2.toString()} >
                                    {cellule}
                                </td>;
                            }) }
                        </tr>;
                    }) }
                </tbody>
            </table>
        </div>;
    }
}