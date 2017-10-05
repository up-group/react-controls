import * as React from "react"
import {UpDrawingProps} from "./"
import {style} from 'typestyle'
import CanvasState from "./CanvasState"

import UpButton  from '../../Inputs/Button'
import UpButtonGroup  from '../../Containers/ButtonGroup'

import UpLigne from '../../Display/Ligne' 
import UpToggle from '../../Inputs/Toggle'
import UpLabel from '../../Display/Label'

import {UpContextMenu, UpContextMenuTrigger, UpContextMenuItem, UpContextMenuItemDivider} from '../../Display/ContextMenu'

const DRAWING_MENU_TYPE = 'DRAWING_MENU_TYPE' ;

export interface UpDrawingState {
    activationShape : boolean;
    src:string;
    zones?:Array<any>; 
    selection?:any;
    scale:number;
}

export default class UpDrawing extends React.Component<UpDrawingProps, UpDrawingState> {
    canvas:any;
    canvasState: CanvasState;

    public static defaultProps:UpDrawingProps = {
        src:"",
        activationShape:true
    }

    constructor(p, c) {
        super(p, c);
        this.state = {
            src: p.src,
            zones: p.zones || [] ,
            activationShape: true,
            scale:1
        }
    }

    setCanvas = (canvas) => {
        this.canvas = canvas;
        var ctx = this.canvas.getContext('2d');
        this.canvasState = new CanvasState(canvas);
        if (this.state.src) {
            this.canvasState.scale = this.state.scale ;
            this.canvasState.imageObj = new Image();
            this.canvasState.imageObj.crossOrigin = '';
            var self = this ;
            this.canvasState.imageObj.onload = function() {
                self.canvasState.valid = false ;
                self.canvasState.draw() ;
            } ;
            this.canvasState.imageObj.src = this.state.src;
            this.canvasState.registerListeners() ;
        }
    }

    componentDidMount() {
    
    }

    componentWillReceiveProps(nextProps: UpDrawingProps) {
        if (nextProps.src !== this.props.src) {
            this.setState({src: nextProps.src });
        }
    }

    zoomIn = (event:any) => {
        var self = this ;
        this.setState({scale : this.state.scale + 0.2}, () => {
            self.canvasState.scale = this.state.scale;
            self.canvasState.valid = false;
        }) ;
    }

    zoomOut = (event:any) => {
        var self = this ;
        this.setState({scale : this.state.scale - 0.2}, () => {
            self.canvasState.scale = this.state.scale;
            self.canvasState.valid = false;
        }) ;
    }

    zoomNormal = (event:any) => {
        var self = this ;
        this.setState({scale : 1}, () => {
            self.canvasState.scale = this.state.scale;
            self.canvasState.valid = false;
        }) ;
    }
    rotate = (event:any) => {

    }

    open = () => {
        
    }

    crop = (event:any) => {
        if (this.canvasState.selection) {
            var _imageCropped = this.canvasState.cropShape(this.canvasState.selection);
            if (_imageCropped != null) {
                var _data = { dataURL: _imageCropped, shape: this.canvasState.selection };
                if(this.props.onCrop) {
                    this.props.onCrop(_data) ;
                }
            }
        }
    }

    cropAll = (event:any) => {
        // Check all chapes 
        var _shapesChecked = true;
        for (var i in this.canvasState.shapes) {
            var _shape = this.canvasState.shapes[i];
            var _imageCropped = this.canvasState.cropShape(_shape);
            if (_imageCropped == null) {
                _shapesChecked = false;
            }
        }
        if (_shapesChecked) {
            for (var i in this.canvasState.shapes) {
                var _shape = this.canvasState.shapes[i];
                var _imageCropped = this.canvasState.cropShape(_shape);
                if (_imageCropped != null) {
                    var _data = { dataURL: _imageCropped, shape: _shape };
                    this.props.onCrop(_data) ;
                }
            }
        }
    }

    del = (event:any) => {
        if (this.canvasState.selection && this.props.onDel) {
            this.props.onDel(this.canvasState.selection) ;
        }
    }

    delAll = () => {
        if (this.canvasState.selection && this.props.onDelAll) {
            this.props.onDelAll(this.canvasState.shapes) ;
        }            
    }

    toggleActivationShape = (value) => {

        this.setState({activationShape: value}, () => {
            this.canvasState.shapes.map(function(shape) {
                shape.hide = !value ;
            });
            this.canvasState.valid = false ;
        });
    }

    render() {
        const WrapperStyle = style({}) ;
        const CanvasStyle = style({
            border:"1px solid #111",
            borderRadius:"4px"
        });

        const {onChange, src, zones, ...others} = this.props ;
        
        return (
            <div className={WrapperStyle}>
                <div className="up-canvas-actions">
                    <UpLabel text="Zones : ">
                        <UpToggle value={true} onChange={this.toggleActivationShape} checked={this.state.activationShape === true} />
                    </UpLabel>
                    <UpButtonGroup> 
                        <UpButton onClick={this.zoomIn} width={'icon'} actionType={"zoom-in"} tooltip={"Zoom avant"} />
                        <UpButton onClick={this.zoomOut} width={'icon'} actionType={"zoom-out"} tooltip={"Zoom arrière"} />
                        <UpButton onClick={this.zoomNormal} width={'icon'} actionType={"zoom-normal"} tooltip={"Zoom normal"} />
                        <UpButton onClick={this.rotate} width={'icon'} actionType={"image-rotate-right"} tooltip={"Appliquer une rotation de  l\'image de 90° vers la droite"} />
                        <UpButton onClick={this.open} width={'icon'} actionType={"open"} tooltip={"Ouvrir l\'image dans une nouvelle fenêtre"} />
                    </UpButtonGroup>
                </div>

                <UpContextMenuTrigger id={DRAWING_MENU_TYPE} holdToDisplay={1000}>
                    <canvas width={"100%"} height={"500px"} className={CanvasStyle} ref={this.setCanvas}>
                        Votre navigateur ne supporte pas les fonctions d'édition d'image.
                    </canvas>
                </UpContextMenuTrigger>

                <UpContextMenu id={DRAWING_MENU_TYPE}>
                    <UpContextMenuItem onClick={this.crop} data={{action: 'up-crop'}}>Ajouter la sélection</UpContextMenuItem>
                    <UpContextMenuItem onClick={this.cropAll} data={{action: 'up-crop-all'}}>Ajouter tous</UpContextMenuItem>
                    <UpContextMenuItemDivider size= {2} />
                    <UpContextMenuItem onClick={this.del} data={{action: 'up-del'}}>Supprimer</UpContextMenuItem>
                    <UpContextMenuItem onClick={this.delAll} data={{action: 'up-del-all'}}>Tout supprimer</UpContextMenuItem>
                </UpContextMenu>
        </div>
        )
    }

    onChange = (event) => {

    }
}