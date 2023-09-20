declare class DrawJS {
    config: any;
    canvas: any;
    ctx: CanvasRenderingContext2D;
    dpr: number;
    image: any;
    imageComputed: any;
    isDrawing: boolean;
    isEditing: boolean;
    shapes: any[];
    currentShape: any[];
    constructor();
    /**
     * Initialize the DrawJS instance
     * @param config
     * @returns void
     * @public
     */
    initialize(config: any): void;
    onStartLine(): void;
    onEndLine(): void;
    onStartPolygon(): void;
    onEndPolygon(): void;
    onStartRectangle(): void;
    onEndRectangle(): void;
    onStartCircle(): void;
    onEndCircle(): void;
}
export default DrawJS;
//# sourceMappingURL=index.d.ts.map