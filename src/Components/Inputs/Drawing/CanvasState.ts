    import Shape from './Shape'
    import * as $ from 'jquery'

    export default class CanvasState {
        canvas:any;
        width:number;
        height:number;
        ctx:any;
        stylePaddingLeft:number;
        stylePaddingTop:number;
        styleBorderLeft:number;
        styleBorderTop:number;
        htmlTop : number;
        htmlLeft:number;
        valid:boolean;
        alert:boolean;
        dragging:boolean;
        drawing:boolean;
        selection:  any;
        dragoffx:number;
        dragoffy:number;
        drawingoffx:number;
        drawingoffy:number;
        shapes:Array<Shape>;
        selectionColor:string;
        selectionWidth:number;
        interval:number;
        imageObj:any;
        border:number;
        scale:number; 

        constructor(canvas) {
            // **** First some setup! ****
            this.canvas = canvas;
            this.width = canvas.width;
            this.height = canvas.height;
            this.ctx = canvas.getContext('2d');
            // This complicates things a little but but fixes mouse co-ordinate problems
            // when there's a border or padding. See getMouse for more detail
            var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
            if (document.defaultView && document.defaultView.getComputedStyle) {
                this.stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10) || 0;
                this.stylePaddingTop = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10) || 0;
                this.styleBorderLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10) || 0;
                this.styleBorderTop = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10) || 0;
            }
            this.border = 1 ;
            // Some pages have fixed-position bars (like the stumbleupon bar) at the top or left of the page
            // They will mess up mouse coordinates and this fixes that
            var html = document.body.parentElement;
            this.htmlTop = html.offsetTop;
            this.htmlLeft = html.offsetLeft;

        // **** Keep track of state! ****

        this.valid = false; // when set to false, the canvas will redraw everything
        this.shapes = [];  // the collection of things to be drawn
        this.dragging = false; // Keep track of when we are dragging
        this.drawing = false; // Keep track of when we are drawing

        // the current selected object. In the future we could turn this into an array for multiple selection
        this.selection = null;
        this.dragoffx = 0; // See mousedown and mousemove events for explanation
        this.dragoffy = 0;

        // This is an example of a closure!
        // Right here "this" means the CanvasState. But we are making events on the Canvas itself,
        // and when the events are fired on the canvas the variable "this" is going to mean the canvas!
        // Since we still want to use this particular CanvasState in the events we have to save a reference to it.
        // This is our reference!
        var myState = this;
        myState.alert = false;

        // **** Options! ****
        this.selectionColor = '#CC0000';
        this.selectionWidth = 2;
        this.interval = 10;
        setInterval(function () { myState.draw(); }, myState.interval);
    }

    registerListeners = () => {
        var myState = this;
        var canvas = this.canvas;
        //fixes a problem where double clicking causes text to get selected on the canvas
        canvas.addEventListener('selectstart', function (e) { e.preventDefault(); return false; }, false);
        // Up, down, and move are for dragging
        canvas.addEventListener('mousedown', function (e) {
            if (myState.imageObj !== false && myState.imageObj.width + 2 * myState.border != canvas.width) {
                myState.dragging = false;
                myState.drawing = false;
                if (myState.alert == false) {
                    alert('La sélection de zone n\'est possible que si le zoom est désactivé !');
                    myState.alert = true;
                }
            } else {
                var mouse = myState.getMouse(e);
                var mx = mouse.x;
                var my = mouse.y;
                var shapes = myState.shapes;
                var l = shapes.length;
                for (var i = l - 1; i >= 0; i--) {
                    if (shapes[i].contains(mx, my, myState.scale)) {
                        var mySel = shapes[i];
                        // Keep track of where in the object we clicked
                        // so we can move it smoothly (see mousemove)
                        myState.dragoffx = mx - mySel.x;
                        myState.dragoffy = my - mySel.y;
                        myState.dragging = true;
                        myState.selection = mySel;
                        myState.valid = false;
                        return;
                    }
                }
                // havent returned means we have failed to select anything.
                // If there was an object selected, we deselect it
                if (myState.selection) {
                    myState.selection = null;
                    myState.valid = false; // Need to clear the old selection border
                }
                myState.drawing = true;
                myState.drawingoffx = mx;
                myState.drawingoffy = my;
            }
        }, true);
        canvas.addEventListener('mousemove', function (e) {
            if (myState.dragging) {
                var mouse = myState.getMouse(e);
                // We don't want to drag the object by its top-left corner, we want to drag it
                // from where we clicked. Thats why we saved the offset and use it here
                myState.selection.x = mouse.x - myState.dragoffx;
                myState.selection.y = mouse.y - myState.dragoffy;
                myState.valid = false; // Something's dragging so we must redraw
            } else if (myState.drawing) {
                var mouse = myState.getMouse(e);
                // Add temp shape
                var _h = Math.abs(mouse.y - myState.drawingoffy);
                var _w = Math.abs(mouse.x - myState.drawingoffx);
                var _shape = new Shape(myState.drawingoffx, myState.drawingoffy, _w, _h, 'rgba(0,255,0,.6)');
                _shape.temp = true;
                myState.addShape(_shape);
            }
        }, true);
        canvas.addEventListener('mouseup', function (e) {
            if (myState.drawing === true) {
                var mouse = myState.getMouse(e);
                var _h = Math.abs(mouse.y - myState.drawingoffy);
                var _w = Math.abs(mouse.x - myState.drawingoffx);
                if (_w > 120 && _h > 17) {
                    var _shape = new Shape(myState.drawingoffx, myState.drawingoffy, _w, _h, mouse.y, false);
                    myState.addShape(_shape);
                } else {
                    myState.removeTempShape();
                }
                myState.valid = false; // Need to clear the old selection border
            }
            myState.dragging = false;
            myState.drawing = false;
        }, true);
    }

    removeTempShape = () => {
        var _shapes = [];
        for (var i in this.shapes) {
            if (this.shapes[i].temp !== true) {
                _shapes.push(this.shapes[i]);
            }
        }
        this.shapes = _shapes;
    }

    addShape = (shape:Shape) => {
        var _shapes = [];
        var _nextRef = 1;

        this.shapes = this.shapes.sort(function (a, b) {
            if (a.ref < b.ref) {
                return -1;
            } else if (a.ref > b.ref) {
                return 1;
            } else {
                return 0;
            }
        });

        // compute the next reference
        for (var i in this.shapes) {
            if (this.shapes[i].temp !== true) {
                var _ref = this.shapes[i].ref;
                if (_nextRef < _ref) {
                    break;
                } else if (_ref >= _nextRef) {
                    _nextRef = _ref + 1;
                }
            }
        }

        // prepare the new data
        for (var i in this.shapes) {
            if (this.shapes[i].temp !== true) {
                _shapes.push(this.shapes[i]);
            }
        }
        this.shapes = _shapes;
        shape.ref = _nextRef;
        this.shapes.push(shape);
        if (shape.temp !== true) {
            // -> binded shapes
        }
        this.selection = null;
        this.valid = false;
    }

    cropShape = (shape:Shape) => {
        //Find the part of the image that is inside the crop box
        var crop_canvas,
            left = shape.x,
            top = shape.y,
            width = shape.w,
            height = shape.h;

        crop_canvas = document.createElement('canvas');
        crop_canvas.width = width;
        crop_canvas.height = height;

        try {
            crop_canvas.getContext('2d').drawImage(this.imageObj,
            left - this.border, top - this.border, width, height, 0, 0, width, height);

            return crop_canvas.toDataURL("image/png");
        } catch (error) {
            alert('La sélection de zone ' + shape.ref + ' dépasse les limites de l\'ordonnance !');
            return null;
        }
    }

    removeShape = (shape:Shape) => {
        var _shapes = [];
        for (var i in this.shapes) {
            if (!(shape.x == this.shapes[i].x
                && shape.y == this.shapes[i].y
                && shape.w == this.shapes[i].w
                && shape.h == this.shapes[i].h)) {
                _shapes.push(this.shapes[i]);
            }
        }
        this.shapes = _shapes;
        // -> binde shapes
        this.selection = null;
        this.valid = false;
    }

    clear = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
    drawImage = () => {
        var WIDTH = this.imageObj.width + 2 * this.border;
        var HEIGHT = this.imageObj.height + 2 * this.border;
        this.canvas.width = WIDTH * this.scale;
        this.canvas.height = HEIGHT * this.scale;
        this.canvas.getContext('2d').scale(this.scale, this.scale);
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
    
    // While draw is called as often as the INTERVAL variable demands,
    // It only ever does something if the canvas gets invalidated by our code
    draw = () => {
        // if our state is invalid, redraw and validate!
        if (!this.valid) {
            var ctx = this.ctx;
            this.drawImage() ;
            var shapes = this.shapes;
            this.clear();
            if (this.imageObj !== false && this.imageObj != undefined) {
                if (this.border) {
                    ctx.stroke();
                    ctx.rect(0, 0, this.width, this.height);
                    ctx.strokeStyle = 'white';
                    ctx.lineWidth = this.border;
                }
                // ** Add stuff you want drawn in the background all the time here **
                ctx.drawImage(this.imageObj, this.border, this.border);
            }

            // draw all shapes
            var l = shapes.length;
            var _oneShapeDraw = false;
            for (var i = 0; i < l; i++) {
                var shape = shapes[i];
                // We can skip the drawing of elements that have moved off the screen:
                if (shape == undefined || shape.hide || (typeof shape.draw != "function") || shape.x > this.width || shape.y > this.height ||
                    shape.x + shape.w < 0 || shape.y + shape.h < 0) {
                    // Shape not to be drawed
                    continue;
                }
                shape.draw(ctx);
                _oneShapeDraw = true;
            }

            // draw selection
            // right now this is just a stroke along the edge of the selected Shape
            if (_oneShapeDraw && this.selection != null) {
                ctx.strokeStyle = this.selectionColor;
                ctx.lineWidth = this.selectionWidth;
                var mySel = this.selection;
                ctx.strokeRect(mySel.x, mySel.y, mySel.w, mySel.h);
            }

            // ** Add stuff you want drawn on top all the time here **

            this.valid = true;
        }
    }

    // Creates an object with x and y defined, set to the mouse position relative to the state's canvas
    // If you wanna be super-correct this can be tricky, we have to worry about padding and borders
    getMouse = (e) => {
        var element = this.canvas, offsetX = 0, offsetY = 0, mx, my;

        // Compute the total offset
        if (element.offsetParent !== undefined) {
            do {
                offsetX += element.offsetLeft;
                offsetY += element.offsetTop;
            } while ((element = element.offsetParent));
        }

        // Add padding and border style widths to offset
        // Also add the <html> offsets in case there's a position:fixed bar
        offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
        offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;

        var scrollY = 0 ;
        element = this.canvas
        do {
            scrollY =   $(element).scrollTop() ;
        } while (scrollY == 0 && (element = element.parentNode));
       
        mx = e.pageX - offsetX;
        my = e.pageY + scrollY - offsetY;

        // We return a simple javascript object (a hash) with x and y defined
        return { x: mx, y: my };
    }
}