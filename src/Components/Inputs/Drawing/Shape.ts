export default class Shape {
    x: number;
    y: number;
    w: number;
    h: number;
    ref: number;
    fill: string;
    temp: boolean;
    hide: boolean;
    // Constructor for Shape objects to hold data for all drawn objects.
    // For now they will just be defined as rectangles.
    constructor(x, y, w, h, fill, ref?) {
        // This is a very simple and unsafe constructor. All we're doing is checking if the values exist.
        // "x || 0" just means "if there is a value for x, use that. Otherwise use 0."
        // But we aren't checking anything else! We could put "Lalala" for the value of x 
        this.x = x || 0;
        this.y = y || 0;
        this.w = w || 1;
        this.h = h || 1;
        this.ref = ref || '';
        this.fill = fill;
    }

    // Draws this shape to a given context
    draw = (ctx) => {
        ctx.fillStyle = 'rgba(5,203,133,.1)';
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.strokeStyle = '#434343';
        ctx.lineWidth = 2;
        ctx.strokeRect(this.x, this.y, this.w, this.h);

        if (this.ref) {
            var centerX = this.x - 20;
            var centerY = this.y + 5;
            var radius = 15;

            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(5,203,133,.6)';
            ctx.fill();

            ctx.textBaseline = 'middle';
            ctx.font = 'bold 18pt Calibri';
            ctx.textAlign = 'center';
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(this.ref, centerX, centerY, 10);
        }
    }

    // Determine if a point is inside the shape's bounds
    contains = (mx, my, scale) => {
        // All we have to do is make sure the Mouse X,Y fall in the area between
        // the shape's X and (X + Width) and its Y and (Y + Height)
        return (this.x / scale <= mx) && (this.x / scale + this.w >= mx) &&
            (this.y / scale <= my) && (this.y / scale + this.h >= my);
    }
};