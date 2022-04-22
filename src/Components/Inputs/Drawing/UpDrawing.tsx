import React from 'react';
import classnames from 'classnames';
import { UpDrawingProps, UpDrawingState } from './types';
import { style } from 'typestyle';
import CanvasState from './CanvasState';
import UpButton from '../../Inputs/Button/UpButton';
import UpButtonGroup from '../../Containers/ButtonGroup';
import UpToggle from '../../Inputs/Toggle';
import UpLabel from '../../Display/Label';
import {
  UpContextMenu,
  UpContextMenuTrigger,
  UpContextMenuItem,
  UpContextMenuItemDivider,
} from '../../Display/ContextMenu';
import { generateUniqueId } from '../../../Common/utils/helpers';

const DRAWING_MENU_TYPE = 'DRAWING_MENU_TYPE';

export default class UpDrawing extends React.Component<UpDrawingProps, UpDrawingState> {
  canvas: any;
  canvasState: CanvasState;
  contextKey: string;

  public static defaultProps: UpDrawingProps = {
    src: '',
    activationShape: true,
    displayActions: true,
    disabled: false,
  };

  constructor(p, c) {
    super(p, c);
    this.state = {
      src: p.src,
      zones: p.zones || [],
      activationShape: true,
      scale: 1,
    };

    this.contextKey = `${DRAWING_MENU_TYPE}_${generateUniqueId()}`;
  }

  setCanvas = canvas => {
    if (this.canvas == null) {
      this.canvas = canvas;
      const ctx = this.canvas.getContext('2d');
      this.canvasState = new CanvasState(canvas);
      if (this.state.src) {
        this.canvasState.scale = this.state.scale;
        this.canvasState.imageObj = new Image();
        this.canvasState.imageObj.crossOrigin = '';
        const self = this;
        this.canvasState.imageObj.onload = function () {
          self.canvasState.valid = false;
          self.canvasState.draw();
        };
        this.canvasState.imageObj.src = this.state.src;
        this.canvasState.registerListeners();
      }
    }
  };

  componentWillReceiveProps(nextProps: UpDrawingProps) {
    const _newState: any = {};
    if (nextProps.src !== this.props.src) {
      _newState.src == nextProps.src;
    }
  }

  zoomIn = (event: any) => {
    const self = this;
    this.setState({ scale: this.state.scale + 0.2 }, () => {
      self.canvasState.scale = this.state.scale;
      self.canvasState.valid = false;
    });
  };

  zoomOut = (event: any) => {
    const self = this;
    this.setState({ scale: this.state.scale - 0.2 }, () => {
      self.canvasState.scale = this.state.scale;
      self.canvasState.valid = false;
    });
  };

  zoomNormal = (event: any) => {
    const self = this;
    this.setState({ scale: 1 }, () => {
      self.canvasState.scale = this.state.scale;
      self.canvasState.valid = false;
    });
  };

  rotate = (event: any) => {
    if (typeof this.props.onRotate == 'function') {
      const callback = function (result) {
        //self.canvasState.src = ;
      };
      this.props.onRotate(callback);
    }
  };

  open = () => {
    const _windowWidth = this.canvas.width;
    const _windowHeight = this.canvas.height;
    const _windowArgs = 'scrollbars=yes,resizable=yes, width=' + _windowWidth + ', height=' + _windowHeight;

    const _html =
      '<p>' + "<img style='height: auto;' class='img-rounded  thumb' src='" + this.state.src + "' />" + '</p>';

    const _window = window.open('', '', _windowArgs);
    const _document = _window.document.open('text/html', 'replace');
    _document.write('<!DOCTYPE html><html><body>' + _html + '</body></html>');
    _document.close();
  };

  crop = (event: any) => {
    console.log(this.canvasState);
    console.log(this.canvasState.selection);
    if (this.canvasState.selection) {
      const _imageCropped = this.canvasState.cropShape(this.canvasState.selection);
      if (_imageCropped != null) {
        const _data = {
          dataURL: _imageCropped,
          shape: this.canvasState.selection,
        };
        if (this.props.onCrop) {
          this.props.onCrop(_data);
        }
      }
    }
  };

  cropAll = (event: any) => {
    // Check all chapes
    let _shapesChecked = true;
    for (const i in this.canvasState.shapes) {
      const _shape = this.canvasState.shapes[i];
      const _imageCropped = this.canvasState.cropShape(_shape);
      if (_imageCropped == null) {
        _shapesChecked = false;
      }
    }
    if (_shapesChecked) {
      for (const i in this.canvasState.shapes) {
        const _shape = this.canvasState.shapes[i];
        const _imageCropped = this.canvasState.cropShape(_shape);
        if (_imageCropped != null) {
          const _data = {
            dataURL: _imageCropped,
            shape: _shape,
          };
          this.props.onCrop(_data);
        }
      }
    }
  };

  del = (event: any) => {
    if (this.canvasState.selection && this.props.onDel) {
      this.props.onDel(this.canvasState.selection);
    }
  };

  delAll = () => {
    if (this.canvasState.selection && this.props.onDelAll) {
      this.props.onDelAll(this.canvasState.shapes);
    }
  };

  toggleActivationShape = value => {
    this.setState({ activationShape: value }, () => {
      this.canvasState.shapes.map(function (shape) {
        shape.hide = !value;
      });
      this.canvasState.valid = false;
    });
  };

  render() {
    const WrapperStyle = style({});
    const CanvasStyle = style({
      border: '1px solid #111',
      borderRadius: '4px',
    });

    const { onChange, src, shapes, ...others } = this.props;

    return (
      <div className={classnames(WrapperStyle, 'up-drawing')}>
        {this.props.displayActions && (
          <div className="up-canvas-actions">
            <UpLabel text="Zones : ">
              <UpToggle
                value={true}
                onChange={this.toggleActivationShape}
                checked={this.state.activationShape === true}
              />
            </UpLabel>
            <UpButtonGroup>
              <UpButton onClick={this.zoomIn} width={'icon'} actionType={'zoom-in'} tooltip={'Zoom avant'} />
              <UpButton onClick={this.zoomOut} width={'icon'} actionType={'zoom-out'} tooltip={'Zoom arrière'} />
              <UpButton onClick={this.zoomNormal} width={'icon'} actionType={'zoom-normal'} tooltip={'Zoom normal'} />
              {this.props.onRotate && (
                <UpButton
                  onClick={this.rotate}
                  width={'icon'}
                  actionType={'image-rotate-right'}
                  tooltip={"Appliquer une rotation de  l'image de 90° vers la droite"}
                />
              )}
              <UpButton
                onClick={this.open}
                width={'icon'}
                actionType={'open'}
                tooltip={"Ouvrir l'image dans une nouvelle fenêtre"}
              />
            </UpButtonGroup>
          </div>
        )}

        <UpContextMenuTrigger key={this.contextKey} id={this.contextKey} holdToDisplay={1000}>
          <canvas width={'100%'} height={'500px'} className={CanvasStyle} ref={this.setCanvas}>
            Votre navigateur ne supporte pas les fonctions d'édition d'image.
          </canvas>
        </UpContextMenuTrigger>

        <UpContextMenu key={`ContextMenu_${this.contextKey}`} id={this.contextKey}>
          <UpContextMenuItem onClick={this.crop} data={{ action: 'up-crop' }}>
            Ajouter la sélection
          </UpContextMenuItem>
          <UpContextMenuItem onClick={this.cropAll} data={{ action: 'up-crop-all' }}>
            Ajouter tous
          </UpContextMenuItem>
          <UpContextMenuItemDivider size={2} />
          <UpContextMenuItem onClick={this.del} data={{ action: 'up-del' }}>
            Supprimer
          </UpContextMenuItem>
          <UpContextMenuItem onClick={this.delAll} data={{ action: 'up-del-all' }}>
            Tout supprimer
          </UpContextMenuItem>
        </UpContextMenu>
      </div>
    );
  }
}
