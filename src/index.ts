class DrawJS {

    public config: any = {};

    public canvas!: any;
    public ctx!: CanvasRenderingContext2D;
    public dpr: number = window.devicePixelRatio || 1;

    public image: any = null;
    public imageComputed: any = null;
    
    public isDrawing: boolean = false;
    public isEditing: boolean = false;

    public shapes: any[] = [];
    public currentShape: any[] = [];

    constructor() {
        console.log("DrawJS constructor");
    }

    /**
     * Initialize the DrawJS instance
     * @param config
     * @returns void
     * @public
     */
    public initialize(config: any) {
        console.log("DrawJS initialize");

        this.config = config;
        this.canvas = document.getElementById(this.config.canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = this.image.width * this.dpr;
        this.canvas.height = this.image.height * this.dpr;

        if (this.config.imageId) {
            this.image = document.getElementById(this.config.imageId);
            this.imageComputed = window.getComputedStyle(this.image);
            this.canvas.style.left = this.imageComputed.getPropertyValue('margin-left');
        }

        this.ctx.scale(this.dpr, this.dpr);
    }

    public onStartLine() {
        this.isDrawing = true;
    }

    public onEndLine() {
        this.isDrawing = false;
    }

    public onStartPolygon() {
        this.isDrawing = true;
    }

    public onEndPolygon() {
        this.isDrawing = false;
    }

    public onStartRectangle() {
        this.isDrawing = true;
    }

    public onEndRectangle() {
        this.isDrawing = false;
    }

    public onStartCircle() {
        this.isDrawing = true;
    }

    public onEndCircle() {
        this.isDrawing = false;
    }
}

export default DrawJS;