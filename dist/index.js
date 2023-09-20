class DrawJS {
    constructor() {
        this.config = {};
        this.dpr = window.devicePixelRatio || 1;
        this.image = null;
        this.imageComputed = null;
        this.isDrawing = false;
        this.isEditing = false;
        this.shapes = [];
        this.currentShape = [];
        console.log("DrawJS constructor");
    }
    /**
     * Initialize the DrawJS instance
     * @param config
     * @returns void
     * @public
     */
    initialize(config) {
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
    onStartLine() {
        this.isDrawing = true;
    }
    onEndLine() {
        this.isDrawing = false;
    }
    onStartPolygon() {
        this.isDrawing = true;
    }
    onEndPolygon() {
        this.isDrawing = false;
    }
    onStartRectangle() {
        this.isDrawing = true;
    }
    onEndRectangle() {
        this.isDrawing = false;
    }
    onStartCircle() {
        this.isDrawing = true;
    }
    onEndCircle() {
        this.isDrawing = false;
    }
}
export default DrawJS;
