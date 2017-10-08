import * as React from "react"
import {UpDrawingProps} from "./"
import {style} from 'typestyle'

import UpButton  from '../../Inputs/Button' 
import UpLigne from '../../Display/Ligne'

export default class UpDrawing extends React.Component<UpDrawingProps, any> {
    canvas:any;
    public static defaultProps = {
        activationShape:true
    }
    constructor(p, c) {
        super(p, c);
        this.state = {
            value:p.value
        }
    }

    private setCanvas = (canvas) => {
        this.canvas = canvas;
        var ctx = this.canvas.getContext('2d');
        if(this.props.activationShape) {
            // $(element).on("contextmenu", function (e) {
            //     $element.next().css({
            //         display: "block",
            //         position: 'fixed',
            //         left: e.clientX,
            //         top: e.clientY
            //     }).fadeIn();
            //     return false;
            // });

            // $(element).click(function (event) {
            //     if (event.which == 1) {
            //         $element.next().fadeOut();
            //     }
            // });

            // $element.next().find('a').each(function (index) {
            //     $(this).unbind('click').click(function (event) {
            //         event.stopPropagation();
            //         event.preventDefault();
            //         $element.next().fadeOut();
            //         var _action = $(this).attr('href');
            //         var _canvasState = $element.data('up-canvasState');
            //         switch (_action) {
            //             case 'up-del':
            //                 if (_canvasState.selection) {
            //                     ko.postbox.publish('up-drawing.deleteZone', _canvasState.selection);
            //                 }
            //                 break;
            //             case 'up-crop-all':
            //                 // Check all chapes 
            //                 var _shapesChecked = true;
            //                 for (var i in _canvasState.shapes) {
            //                     var _shape = _canvasState.shapes[i];
            //                     var _imageCropped = _canvasState.cropShape(_shape);
            //                     if (_imageCropped == null) {
            //                         _shapesChecked = false;
            //                     }
            //                 }
            //                 if (_shapesChecked) {
            //                     for (var i in _canvasState.shapes) {
            //                         var _shape = _canvasState.shapes[i];
            //                         var _imageCropped = _canvasState.cropShape(_shape);
            //                         if (_imageCropped != null) {
            //                             var _data = { dataURL: _imageCropped, shape: _shape };
            //                             ko.postbox.publish("up-drawing.addZone", _data);
            //                         }
            //                     }
            //                 }
            //                 break;
            //             case 'up-crop':
            //                 if (_canvasState.selection) {
            //                     var _imageCropped = _canvasState.cropShape(_canvasState.selection);
            //                     if (_imageCropped != null) {
            //                         var _data = { dataURL: _imageCropped, shape: _canvasState.selection };
            //                         ko.postbox.publish("up-drawing.addZone", _data);
            //                     }
            //                 }
            //                 break;
            //             case 'up-add-ref':
            //                 if (_canvasState.selection) {
            //                     $element.next().next().find('input').val(_canvasState.selection.ref);
            //                     // Display the input
            //                     $element.next().next().css({
            //                         display: "block",
            //                         left: event.pageX,
            //                         top: event.pageY
            //                     }).fadeIn();
            //                 }
            //                 break;
            //             case 'up-del-all':
            //                 ko.postbox.publish('up-drawing.deleteAllZones', _canvasState.shapes);
            //                 break;

            //         }
            //         _canvasState.selection = false;
            //     });
            // });
        }
    }

    componentDidMount() {
    
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
        
                <canvas ref={this.setCanvas}>
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