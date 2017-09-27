import * as React from "react"
import {UpDrawingProps} from "./"
import {style} from 'typestyle'

import UpButton  from '../../Inputs/Button' 
import UpLigne from '../../Display/Ligne'

export default class UpDrawing extends React.Component<UpDrawingProps, any> {
    constructor(p, c) {
        super(p, c);
        this.state = {
            value:p.value
        }
    }

    componentWillReceiveProps(nextProps: UpDrawingProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({value: nextProps.value });
        }
    }

    zoomIn = (event:any) => {

    }

    zoomOut = (event:any) => {
        
    }

    zoomNormal = (event:any) => {
        
    }
    rotate = (event:any) => {

    }

    open = () => {
        
    }

    render() {
        const WrapperStyle = style({}) ;

        /*data-bind="upDrawing: $component.src, 
                        upShapes : shapes, 
                        upScale: scale,
                        upResetSelection: resetSelection,
                        upBorder: border,
                        upActivationShape : activationShape"*/

        const {onChange, value, ...others} = this.props ;
        return (
            <div className={WrapperStyle}>
                <div className="up-canvas-actions">
                    <span>Zones : </span>
                    <UpButton onClick={this.zoomIn} width={'icon'} actionType={"zoom-in"} tooltip={"Zoom avant"} />
                    <UpButton onClick={this.zoomOut} width={'icon'} actionType={"zoom-out"} tooltip={"Zoom arrière"} />
                    <UpButton onClick={this.zoomNormal} width={'icon'} actionType={"zoom-normal"} tooltip={"Zoom normal"} />
                    <UpButton onClick={this.rotate} width={'icon'} actionType={"image-rotate-right"} tooltip={"Appliquer une rotation de  l\'image de 90° vers la droite"} />
                    <UpButton onClick={this.open} width={'icon'} actionType={"open"} tooltip={"Ouvrir l\'image dans une nouvelle fenêtre"} />
                </div>
        
                <canvas >
                    Votre navigateur ne supporte pas les fonctions d'édition d'image.
                </canvas>
        
                <ul className="up-contextmenu dropdown-menu" role="menu" style={{"display":"none"}}>
                    <li><a tabIndex={-1} href="up-crop">Ajouter la sélection</a></li>
                    <li><a tabIndex={-1} href="up-crop-all">Ajouter tous</a></li>
                    <li className="divider"></li>
                    <li><a tabIndex={-1} href="up-del">Supprimer</a></li>
                    <li><a tabIndex={-1} href="up-del-all">Tout supprimer</a></li>
                </ul>
        </div>
        )
    }

    onChange = (event) => {

    }
}