
    // Microsoft.Maui.Graphics.AbstractCanvas_1
    export declare class AbstractCanvas_1  {
			set limitStrokeScaling(v: boolean);
			set strokeLimit(v: number);
			set fillColor(v: Microsoft_Maui_Graphics_Color);
			set fontColor(v: Microsoft_Maui_Graphics_Color);
			set font(v: Microsoft_Maui_Graphics_IFont);
			set fontSize(v: number);
			set alpha(v: number);
			set antialias(v: boolean);
			set blendMode(v: Microsoft_Maui_Graphics_BlendMode);
			get displayScale(): number
			set displayScale(v: number);
			set strokeSize(v: number);
			set miterLimit(v: number);
			set strokeColor(v: Microsoft_Maui_Graphics_Color);
			set strokeLineCap(v: Microsoft_Maui_Graphics_LineCap);
			set strokeLineJoin(v: Microsoft_Maui_Graphics_LineJoin);
			set strokeDashPattern(v: any);
			set strokeDashOffset(v: number);
			dispose(): any
			clipRectangle(x: number,y: number,width: number,height: number): any
			drawLine(x1: number,y1: number,x2: number,y2: number): any
			drawArc(x: number,y: number,width: number,height: number,startAngle: number,endAngle: number,clockwise: boolean,closed: boolean): any
			fillArc(x: number,y: number,width: number,height: number,startAngle: number,endAngle: number,clockwise: boolean): any
			drawRectangle(x: number,y: number,width: number,height: number): any
			fillRectangle(x: number,y: number,width: number,height: number): any
			drawRoundedRectangle(x: number,y: number,width: number,height: number,cornerRadius: number): any
			fillRoundedRectangle(x: number,y: number,width: number,height: number,cornerRadius: number): any
			drawEllipse(x: number,y: number,width: number,height: number): any
			fillEllipse(x: number,y: number,width: number,height: number): any
			drawString(value: string,x: number,y: number,horizontalAlignment: Microsoft_Maui_Graphics_HorizontalAlignment): any
			drawString(value: string,x: number,y: number,width: number,height: number,horizontalAlignment: Microsoft_Maui_Graphics_HorizontalAlignment,verticalAlignment: Microsoft_Maui_Graphics_VerticalAlignment,textFlow: Microsoft_Maui_Graphics_TextFlow,lineSpacingAdjustment: number): any
			drawText(value: Microsoft_Maui_Graphics_Text_IAttributedText,x: number,y: number,width: number,height: number): any
			drawPath(path: Microsoft_Maui_Graphics_PathF): any
			fillPath(path: Microsoft_Maui_Graphics_PathF,windingMode: Microsoft_Maui_Graphics_WindingMode): any
			subtractFromClip(x: number,y: number,width: number,height: number): any
			clipPath(path: Microsoft_Maui_Graphics_PathF,windingMode: Microsoft_Maui_Graphics_WindingMode): any
			resetState(): any
			setShadow(offset: Microsoft_Maui_Graphics_SizeF,blur: number,color: Microsoft_Maui_Graphics_Color): any
			setFillPaint(paint: Microsoft_Maui_Graphics_Paint,rectangle: Microsoft_Maui_Graphics_RectF): any
			drawImage(image: Microsoft_Maui_Graphics_IImage,x: number,y: number,width: number,height: number): any
			restoreState(): boolean
			saveState(): any
			rotate(degrees: number,x: number,y: number): any
			rotate(degrees: number): any
			scale(fx: number,fy: number): any
			translate(tx: number,ty: number): any
			concatenateTransform(transform: any): any
			getStringSize(value: string,font: Microsoft_Maui_Graphics_IFont,fontSize: number): Microsoft_Maui_Graphics_SizeF
			getStringSize(aString: string,font: Microsoft_Maui_Graphics_IFont,aFontSize: number,aHorizontalAlignment: Microsoft_Maui_Graphics_HorizontalAlignment,aVerticalAlignment: Microsoft_Maui_Graphics_VerticalAlignment): Microsoft_Maui_Graphics_SizeF

        }


    // Microsoft.Maui.Graphics.AbstractPattern
    export declare class Microsoft_Maui_Graphics_AbstractPattern  {
			get width(): number
			get height(): number
			get stepX(): number
			get stepY(): number
			draw(canvas: Microsoft_Maui_Graphics_ICanvas): any

        }


    // Microsoft.Maui.Graphics.BitmapExportContext
    export declare class Microsoft_Maui_Graphics_BitmapExportContext  {
			get width(): number
			get height(): number
			get dpi(): number
			get canvas(): Microsoft_Maui_Graphics_ICanvas
			get image(): Microsoft_Maui_Graphics_IImage
			dispose(): any
			writeToStream(stream: any): any

        }


    // Microsoft.Maui.Graphics.BitmapExportContextExtensions
    export declare class Microsoft_Maui_Graphics_BitmapExportContextExtensions  {
			static writeToFile(exportContext: Microsoft_Maui_Graphics_BitmapExportContext,filename: string): any

        }

export type Microsoft_Maui_Graphics_BlendMode = 
"Normal"
|"Multiply"
|"Screen"
|"Overlay"
|"Darken"
|"Lighten"
|"ColorDodge"
|"ColorBurn"
|"SoftLight"
|"HardLight"
|"Difference"
|"Exclusion"
|"Hue"
|"Saturation"
|"Color"
|"Luminosity"
|"Clear"
|"Copy"
|"SourceIn"
|"SourceOut"
|"SourceAtop"
|"DestinationOver"
|"DestinationIn"
|"DestinationOut"
|"DestinationAtop"
|"Xor"
|"PlusDarker"
|"PlusLighter"
;

    // Microsoft.Maui.Graphics.CanvasDefaults
    export declare class Microsoft_Maui_Graphics_CanvasDefaults  {
			static defaultShadowColor: Microsoft_Maui_Graphics_Color
			static defaultShadowOffset: Microsoft_Maui_Graphics_SizeF
			static defaultShadowBlur: number
			static defaultMiterLimit: number

        }


    // Microsoft.Maui.Graphics.CanvasExtensions
    export declare class Microsoft_Maui_Graphics_CanvasExtensions  {
			static drawLine(target: Microsoft_Maui_Graphics_ICanvas,point1: Microsoft_Maui_Graphics_PointF,point2: Microsoft_Maui_Graphics_PointF): any
			static drawRectangle(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_Rect): any
			static drawRectangle(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_RectF): any
			static fillRectangle(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_Rect): any
			static fillRectangle(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_RectF): any
			static drawRoundedRectangle(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_Rect,cornerRadius: number): any
			static drawRoundedRectangle(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_RectF,cornerRadius: number): any
			static drawRoundedRectangle(target: Microsoft_Maui_Graphics_ICanvas,x: number,y: number,width: number,height: number,topLeftCornerRadius: number,topRightCornerRadius: number,bottomLeftCornerRadius: number,bottomRightCornerRadius: number): any
			static drawRoundedRectangle(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_Rect,topLeftCornerRadius: number,topRightCornerRadius: number,bottomLeftCornerRadius: number,bottomRightCornerRadius: number): any
			static drawRoundedRectangle(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_RectF,topLeftCornerRadius: number,topRightCornerRadius: number,bottomLeftCornerRadius: number,bottomRightCornerRadius: number): any
			static drawRoundedRectangle(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_RectF,xRadius: number,yRadius: number): any
			static fillRoundedRectangle(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_Rect,cornerRadius: number): any
			static fillRoundedRectangle(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_RectF,cornerRadius: number): any
			static fillRoundedRectangle(target: Microsoft_Maui_Graphics_ICanvas,x: number,y: number,width: number,height: number,topLeftCornerRadius: number,topRightCornerRadius: number,bottomLeftCornerRadius: number,bottomRightCornerRadius: number): any
			static fillRoundedRectangle(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_Rect,topLeftCornerRadius: number,topRightCornerRadius: number,bottomLeftCornerRadius: number,bottomRightCornerRadius: number): any
			static fillRoundedRectangle(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_RectF,topLeftCornerRadius: number,topRightCornerRadius: number,bottomLeftCornerRadius: number,bottomRightCornerRadius: number): any
			static fillRoundedRectangle(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_RectF,xRadius: number,yRadius: number): any
			static drawEllipse(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_Rect): any
			static drawEllipse(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_RectF): any
			static fillEllipse(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_Rect): any
			static fillEllipse(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_RectF): any
			static drawPath(target: Microsoft_Maui_Graphics_ICanvas,path: Microsoft_Maui_Graphics_PathF): any
			static fillPath(target: Microsoft_Maui_Graphics_ICanvas,path: Microsoft_Maui_Graphics_PathF): any
			static fillPath(target: Microsoft_Maui_Graphics_ICanvas,path: Microsoft_Maui_Graphics_PathF,windingMode: Microsoft_Maui_Graphics_WindingMode): any
			static clipPath(target: Microsoft_Maui_Graphics_ICanvas,path: Microsoft_Maui_Graphics_PathF,windingMode: Microsoft_Maui_Graphics_WindingMode): any
			static clipRectangle(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_Rect): any
			static clipRectangle(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_RectF): any
			static drawString(target: Microsoft_Maui_Graphics_ICanvas,value: string,bounds: Microsoft_Maui_Graphics_Rect,horizontalAlignment: Microsoft_Maui_Graphics_HorizontalAlignment,verticalAlignment: Microsoft_Maui_Graphics_VerticalAlignment,textFlow: Microsoft_Maui_Graphics_TextFlow,lineSpacingAdjustment: number): any
			static drawString(target: Microsoft_Maui_Graphics_ICanvas,value: string,bounds: Microsoft_Maui_Graphics_RectF,horizontalAlignment: Microsoft_Maui_Graphics_HorizontalAlignment,verticalAlignment: Microsoft_Maui_Graphics_VerticalAlignment,textFlow: Microsoft_Maui_Graphics_TextFlow,lineSpacingAdjustment: number): any
			static fillCircle(target: Microsoft_Maui_Graphics_ICanvas,centerX: number,centerY: number,radius: number): any
			static fillCircle(target: Microsoft_Maui_Graphics_ICanvas,center: Microsoft_Maui_Graphics_Point,radius: number): any
			static fillCircle(target: Microsoft_Maui_Graphics_ICanvas,center: Microsoft_Maui_Graphics_PointF,radius: number): any
			static drawCircle(target: Microsoft_Maui_Graphics_ICanvas,centerX: number,centerY: number,radius: number): any
			static drawCircle(target: Microsoft_Maui_Graphics_ICanvas,center: Microsoft_Maui_Graphics_Point,radius: number): any
			static drawCircle(target: Microsoft_Maui_Graphics_ICanvas,center: Microsoft_Maui_Graphics_PointF,radius: number): any
			static fillArc(canvas: Microsoft_Maui_Graphics_ICanvas,x: number,y: number,width: number,height: number,startAngle: number,endAngle: number,paint: Microsoft_Maui_Graphics_Paint,clockwise: boolean): any
			static drawArc(canvas: Microsoft_Maui_Graphics_ICanvas,bounds: Microsoft_Maui_Graphics_RectF,startAngle: number,endAngle: number,clockwise: boolean,closed: boolean): any
			static drawArc(canvas: Microsoft_Maui_Graphics_ICanvas,bounds: Microsoft_Maui_Graphics_Rect,startAngle: number,endAngle: number,clockwise: boolean,closed: boolean): any
			static fillArc(canvas: Microsoft_Maui_Graphics_ICanvas,bounds: Microsoft_Maui_Graphics_RectF,startAngle: number,endAngle: number,clockwise: boolean): any
			static fillArc(canvas: Microsoft_Maui_Graphics_ICanvas,bounds: Microsoft_Maui_Graphics_Rect,startAngle: number,endAngle: number,clockwise: boolean): any
			static enableDefaultShadow(canvas: Microsoft_Maui_Graphics_ICanvas,zoom: number): any
			static resetStroke(canvas: Microsoft_Maui_Graphics_ICanvas): any
			static setFillPattern(target: Microsoft_Maui_Graphics_ICanvas,pattern: Microsoft_Maui_Graphics_IPattern): any
			static setFillPattern(target: Microsoft_Maui_Graphics_ICanvas,pattern: Microsoft_Maui_Graphics_IPattern,foregroundColor: Microsoft_Maui_Graphics_Color): any
			static subtractFromClip(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_Rect): any
			static subtractFromClip(target: Microsoft_Maui_Graphics_ICanvas,rect: Microsoft_Maui_Graphics_RectF): any
			static setFillPaint(target: Microsoft_Maui_Graphics_ICanvas,paint: Microsoft_Maui_Graphics_Paint,point1: Microsoft_Maui_Graphics_Point,point2: Microsoft_Maui_Graphics_Point): any
			static setFillPaint(target: Microsoft_Maui_Graphics_ICanvas,paint: Microsoft_Maui_Graphics_Paint,point1: Microsoft_Maui_Graphics_PointF,point2: Microsoft_Maui_Graphics_PointF): any
			static setFillPaint(target: Microsoft_Maui_Graphics_ICanvas,paint: Microsoft_Maui_Graphics_Paint,rectangle: Microsoft_Maui_Graphics_Rect): any
			static setFillPaint(target: Microsoft_Maui_Graphics_ICanvas,paint: Microsoft_Maui_Graphics_Paint,rectangle: Microsoft_Maui_Graphics_RectF): any

        }


    // Microsoft.Maui.Graphics.CanvasState
    export declare class Microsoft_Maui_Graphics_CanvasState  {
			get strokeDashPattern(): any
			set strokeDashPattern(v: any);
			get strokeDashOffset(): number
			set strokeDashOffset(v: number);
			get strokeSize(): number
			set strokeSize(v: number);
			get transform(): any
			set transform(v: any);
			get scale(): number
			get scaleX(): number
			get scaleY(): number
			dispose(): any

        }


    // Microsoft.Maui.Graphics.Color
    export declare class Microsoft_Maui_Graphics_Color  {
			red: number
			green: number
			blue: number
			alpha: number
			static fromHex(colorAsArgbHex: string): Microsoft_Maui_Graphics_Color
			static fromHsva(h: number,s: number,v: number,a: number): Microsoft_Maui_Graphics_Color
			static fromUint(argb: number): Microsoft_Maui_Graphics_Color
			static fromInt(argb: number): Microsoft_Maui_Graphics_Color
			static fromRgb(red: number,green: number,blue: number): Microsoft_Maui_Graphics_Color
			static fromRgba(red: number,green: number,blue: number,alpha: number): Microsoft_Maui_Graphics_Color
			static fromRgb(red: number,green: number,blue: number): Microsoft_Maui_Graphics_Color
			static fromRgba(red: number,green: number,blue: number,alpha: number): Microsoft_Maui_Graphics_Color
			static fromRgb(red: number,green: number,blue: number): Microsoft_Maui_Graphics_Color
			static fromRgb(red: number,green: number,blue: number): Microsoft_Maui_Graphics_Color
			static fromRgba(r: number,g: number,b: number,a: number): Microsoft_Maui_Graphics_Color
			static fromRgba(r: number,g: number,b: number,a: number): Microsoft_Maui_Graphics_Color
			static fromRgba(colorAsHex: string): Microsoft_Maui_Graphics_Color
			static fromArgb(colorAsHex: string): Microsoft_Maui_Graphics_Color
			static fromHsla(h: number,s: number,l: number,a: number): Microsoft_Maui_Graphics_Color
			static fromHsla(h: number,s: number,l: number,a: number): Microsoft_Maui_Graphics_Color
			static fromHsv(h: number,s: number,v: number): Microsoft_Maui_Graphics_Color
			static fromHsva(h: number,s: number,v: number,a: number): Microsoft_Maui_Graphics_Color
			static fromHsv(h: number,s: number,v: number): Microsoft_Maui_Graphics_Color
			static parse(value: string): Microsoft_Maui_Graphics_Color
			static tryParse(value: string,color: any): boolean
			toString(): string
			getHashCode(): number
			equals(obj: any): boolean
			toHex(includeAlpha: boolean): string
			toHex(): string
			toArgbHex(includeAlpha: boolean): string
			toRgbaHex(includeAlpha: boolean): string
			asPaint(): Microsoft_Maui_Graphics_Paint
			withAlpha(alpha: number): Microsoft_Maui_Graphics_Color
			multiplyAlpha(multiplyBy: number): Microsoft_Maui_Graphics_Color
			toInt(): number
			toUint(): number
			toRgb(r: any,g: any,b: any): any
			toRgba(r: any,g: any,b: any,a: any): any
			getLuminosity(): number
			addLuminosity(delta: number): Microsoft_Maui_Graphics_Color
			withLuminosity(luminosity: number): Microsoft_Maui_Graphics_Color
			getSaturation(): number
			withSaturation(saturation: number): Microsoft_Maui_Graphics_Color
			getHue(): number
			withHue(hue: number): Microsoft_Maui_Graphics_Color
			getComplementary(): Microsoft_Maui_Graphics_Color
			toHsl(h: any,s: any,l: any): any

        }


    // Microsoft.Maui.Graphics.Colors
    export declare class Microsoft_Maui_Graphics_Colors  {
			static aliceBlue: Microsoft_Maui_Graphics_Color
			static antiqueWhite: Microsoft_Maui_Graphics_Color
			static aqua: Microsoft_Maui_Graphics_Color
			static aquamarine: Microsoft_Maui_Graphics_Color
			static azure: Microsoft_Maui_Graphics_Color
			static beige: Microsoft_Maui_Graphics_Color
			static bisque: Microsoft_Maui_Graphics_Color
			static black: Microsoft_Maui_Graphics_Color
			static blanchedAlmond: Microsoft_Maui_Graphics_Color
			static blue: Microsoft_Maui_Graphics_Color
			static blueViolet: Microsoft_Maui_Graphics_Color
			static brown: Microsoft_Maui_Graphics_Color
			static burlyWood: Microsoft_Maui_Graphics_Color
			static cadetBlue: Microsoft_Maui_Graphics_Color
			static chartreuse: Microsoft_Maui_Graphics_Color
			static chocolate: Microsoft_Maui_Graphics_Color
			static coral: Microsoft_Maui_Graphics_Color
			static cornflowerBlue: Microsoft_Maui_Graphics_Color
			static cornsilk: Microsoft_Maui_Graphics_Color
			static crimson: Microsoft_Maui_Graphics_Color
			static cyan: Microsoft_Maui_Graphics_Color
			static darkBlue: Microsoft_Maui_Graphics_Color
			static darkCyan: Microsoft_Maui_Graphics_Color
			static darkGoldenrod: Microsoft_Maui_Graphics_Color
			static darkGray: Microsoft_Maui_Graphics_Color
			static darkGreen: Microsoft_Maui_Graphics_Color
			static darkGrey: Microsoft_Maui_Graphics_Color
			static darkKhaki: Microsoft_Maui_Graphics_Color
			static darkMagenta: Microsoft_Maui_Graphics_Color
			static darkOliveGreen: Microsoft_Maui_Graphics_Color
			static darkOrange: Microsoft_Maui_Graphics_Color
			static darkOrchid: Microsoft_Maui_Graphics_Color
			static darkRed: Microsoft_Maui_Graphics_Color
			static darkSalmon: Microsoft_Maui_Graphics_Color
			static darkSeaGreen: Microsoft_Maui_Graphics_Color
			static darkSlateBlue: Microsoft_Maui_Graphics_Color
			static darkSlateGray: Microsoft_Maui_Graphics_Color
			static darkSlateGrey: Microsoft_Maui_Graphics_Color
			static darkTurquoise: Microsoft_Maui_Graphics_Color
			static darkViolet: Microsoft_Maui_Graphics_Color
			static deepPink: Microsoft_Maui_Graphics_Color
			static deepSkyBlue: Microsoft_Maui_Graphics_Color
			static dimGray: Microsoft_Maui_Graphics_Color
			static dimGrey: Microsoft_Maui_Graphics_Color
			static dodgerBlue: Microsoft_Maui_Graphics_Color
			static firebrick: Microsoft_Maui_Graphics_Color
			static floralWhite: Microsoft_Maui_Graphics_Color
			static forestGreen: Microsoft_Maui_Graphics_Color
			static fuchsia: Microsoft_Maui_Graphics_Color
			static gainsboro: Microsoft_Maui_Graphics_Color
			static ghostWhite: Microsoft_Maui_Graphics_Color
			static gold: Microsoft_Maui_Graphics_Color
			static goldenrod: Microsoft_Maui_Graphics_Color
			static gray: Microsoft_Maui_Graphics_Color
			static green: Microsoft_Maui_Graphics_Color
			static greenYellow: Microsoft_Maui_Graphics_Color
			static grey: Microsoft_Maui_Graphics_Color
			static honeydew: Microsoft_Maui_Graphics_Color
			static hotPink: Microsoft_Maui_Graphics_Color
			static indianRed: Microsoft_Maui_Graphics_Color
			static indigo: Microsoft_Maui_Graphics_Color
			static ivory: Microsoft_Maui_Graphics_Color
			static khaki: Microsoft_Maui_Graphics_Color
			static lavender: Microsoft_Maui_Graphics_Color
			static lavenderBlush: Microsoft_Maui_Graphics_Color
			static lawnGreen: Microsoft_Maui_Graphics_Color
			static lemonChiffon: Microsoft_Maui_Graphics_Color
			static lightBlue: Microsoft_Maui_Graphics_Color
			static lightCoral: Microsoft_Maui_Graphics_Color
			static lightCyan: Microsoft_Maui_Graphics_Color
			static lightGoldenrodYellow: Microsoft_Maui_Graphics_Color
			static lightGray: Microsoft_Maui_Graphics_Color
			static lightGreen: Microsoft_Maui_Graphics_Color
			static lightGrey: Microsoft_Maui_Graphics_Color
			static lightPink: Microsoft_Maui_Graphics_Color
			static lightSalmon: Microsoft_Maui_Graphics_Color
			static lightSeaGreen: Microsoft_Maui_Graphics_Color
			static lightSkyBlue: Microsoft_Maui_Graphics_Color
			static lightSlateGray: Microsoft_Maui_Graphics_Color
			static lightSlateGrey: Microsoft_Maui_Graphics_Color
			static lightSteelBlue: Microsoft_Maui_Graphics_Color
			static lightYellow: Microsoft_Maui_Graphics_Color
			static lime: Microsoft_Maui_Graphics_Color
			static limeGreen: Microsoft_Maui_Graphics_Color
			static linen: Microsoft_Maui_Graphics_Color
			static magenta: Microsoft_Maui_Graphics_Color
			static maroon: Microsoft_Maui_Graphics_Color
			static mediumAquamarine: Microsoft_Maui_Graphics_Color
			static mediumBlue: Microsoft_Maui_Graphics_Color
			static mediumOrchid: Microsoft_Maui_Graphics_Color
			static mediumPurple: Microsoft_Maui_Graphics_Color
			static mediumSeaGreen: Microsoft_Maui_Graphics_Color
			static mediumSlateBlue: Microsoft_Maui_Graphics_Color
			static mediumSpringGreen: Microsoft_Maui_Graphics_Color
			static mediumTurquoise: Microsoft_Maui_Graphics_Color
			static mediumVioletRed: Microsoft_Maui_Graphics_Color
			static midnightBlue: Microsoft_Maui_Graphics_Color
			static mintCream: Microsoft_Maui_Graphics_Color
			static mistyRose: Microsoft_Maui_Graphics_Color
			static moccasin: Microsoft_Maui_Graphics_Color
			static navajoWhite: Microsoft_Maui_Graphics_Color
			static navy: Microsoft_Maui_Graphics_Color
			static oldLace: Microsoft_Maui_Graphics_Color
			static olive: Microsoft_Maui_Graphics_Color
			static oliveDrab: Microsoft_Maui_Graphics_Color
			static orange: Microsoft_Maui_Graphics_Color
			static orangeRed: Microsoft_Maui_Graphics_Color
			static orchid: Microsoft_Maui_Graphics_Color
			static paleGoldenrod: Microsoft_Maui_Graphics_Color
			static paleGreen: Microsoft_Maui_Graphics_Color
			static paleTurquoise: Microsoft_Maui_Graphics_Color
			static paleVioletRed: Microsoft_Maui_Graphics_Color
			static papayaWhip: Microsoft_Maui_Graphics_Color
			static peachPuff: Microsoft_Maui_Graphics_Color
			static peru: Microsoft_Maui_Graphics_Color
			static pink: Microsoft_Maui_Graphics_Color
			static plum: Microsoft_Maui_Graphics_Color
			static powderBlue: Microsoft_Maui_Graphics_Color
			static purple: Microsoft_Maui_Graphics_Color
			static red: Microsoft_Maui_Graphics_Color
			static rosyBrown: Microsoft_Maui_Graphics_Color
			static royalBlue: Microsoft_Maui_Graphics_Color
			static saddleBrown: Microsoft_Maui_Graphics_Color
			static salmon: Microsoft_Maui_Graphics_Color
			static sandyBrown: Microsoft_Maui_Graphics_Color
			static seaGreen: Microsoft_Maui_Graphics_Color
			static seaShell: Microsoft_Maui_Graphics_Color
			static sienna: Microsoft_Maui_Graphics_Color
			static silver: Microsoft_Maui_Graphics_Color
			static skyBlue: Microsoft_Maui_Graphics_Color
			static slateBlue: Microsoft_Maui_Graphics_Color
			static slateGray: Microsoft_Maui_Graphics_Color
			static slateGrey: Microsoft_Maui_Graphics_Color
			static snow: Microsoft_Maui_Graphics_Color
			static springGreen: Microsoft_Maui_Graphics_Color
			static steelBlue: Microsoft_Maui_Graphics_Color
			static tan: Microsoft_Maui_Graphics_Color
			static teal: Microsoft_Maui_Graphics_Color
			static thistle: Microsoft_Maui_Graphics_Color
			static tomato: Microsoft_Maui_Graphics_Color
			static transparent: Microsoft_Maui_Graphics_Color
			static turquoise: Microsoft_Maui_Graphics_Color
			static violet: Microsoft_Maui_Graphics_Color
			static wheat: Microsoft_Maui_Graphics_Color
			static white: Microsoft_Maui_Graphics_Color
			static whiteSmoke: Microsoft_Maui_Graphics_Color
			static yellow: Microsoft_Maui_Graphics_Color
			static yellowGreen: Microsoft_Maui_Graphics_Color

        }


    // Microsoft.Maui.Graphics.FontWeights
    export declare class Microsoft_Maui_Graphics_FontWeights  {
			static default: number
			static thin: number
			static extraLight: number
			static ultraLight: number
			static light: number
			static semiLight: number
			static normal: number
			static regular: number
			static medium: number
			static demiBold: number
			static semiBold: number
			static bold: number
			static extraBold: number
			static ultraBold: number
			static black: number
			static heavy: number
			static extraBlack: number
			static ultraBlack: number

        }


    // Microsoft.Maui.Graphics.Font
    export declare class Microsoft_Maui_Graphics_Font  {
			static get default(): Microsoft_Maui_Graphics_Font
			static get defaultBold(): Microsoft_Maui_Graphics_Font
			get name(): string
			set name(v: string);
			get weight(): number
			set weight(v: number);
			get styleType(): Microsoft_Maui_Graphics_FontStyleType
			set styleType(v: Microsoft_Maui_Graphics_FontStyleType);
			get isDefault(): boolean
			equals(other: Microsoft_Maui_Graphics_IFont): boolean
			equals(obj: any): boolean
			getHashCode(): number

        }


    // Microsoft.Maui.Graphics.FontSource
    export declare class Microsoft_Maui_Graphics_FontSource  {
			name: string
			weight: number
			fontStyleType: Microsoft_Maui_Graphics_FontStyleType
			equals(other: Microsoft_Maui_Graphics_FontSource): boolean
			getHashCode(): number
			equals(obj: any): boolean

        }

export type Microsoft_Maui_Graphics_FontStyleType = 
"Normal"
|"Italic"
|"Oblique"
;

    // Microsoft.Maui.Graphics.GeometryUtil
    export declare class Microsoft_Maui_Graphics_GeometryUtil  {
			static epsilon: number
			static getDistance(x1: number,y1: number,x2: number,y2: number): number
			static getAngleAsDegrees(x1: number,y1: number,x2: number,y2: number): number
			static degreesToRadians(angle: number): number
			static degreesToRadians(angle: number): number
			static radiansToDegrees(angle: number): number
			static radiansToDegrees(angle: number): number
			static rotatePoint(point: Microsoft_Maui_Graphics_PointF,angle: number): Microsoft_Maui_Graphics_PointF
			static rotatePoint(center: Microsoft_Maui_Graphics_PointF,point: Microsoft_Maui_Graphics_PointF,angle: number): Microsoft_Maui_Graphics_PointF
			static getSweep(angle1: number,angle2: number,clockwise: boolean): number
			static polarToPoint(angleInRadians: number,fx: number,fy: number): Microsoft_Maui_Graphics_PointF
			static ellipseAngleToPoint(x: number,y: number,width: number,height: number,angleInDegrees: number): Microsoft_Maui_Graphics_PointF
			static getOppositePoint(pivot: Microsoft_Maui_Graphics_PointF,oppositePoint: Microsoft_Maui_Graphics_PointF): Microsoft_Maui_Graphics_PointF
			static isLineIntersectingLine(x0: number,y0: number,x1: number,y1: number,x2: number,y2: number,x3: number,y3: number): boolean
			static getFactor(aMin: number,aMax: number,aValue: number): number
			static getLinearValue(aMin: number,aMax: number,aFactor: number): number

        }


    // Microsoft.Maui.Graphics.GradientPaint
    export declare class Microsoft_Maui_Graphics_GradientPaint  {
			get gradientStops(): Microsoft_Maui_Graphics_PaintGradientStop[]
			set gradientStops(v: Microsoft_Maui_Graphics_PaintGradientStop[]);
			get startColor(): Microsoft_Maui_Graphics_Color
			set startColor(v: Microsoft_Maui_Graphics_Color);
			get endColor(): Microsoft_Maui_Graphics_Color
			set endColor(v: Microsoft_Maui_Graphics_Color);
			get startColorIndex(): number
			get endColorIndex(): number
			get isTransparent(): boolean
			getSortedStops(): Microsoft_Maui_Graphics_PaintGradientStop[]
			setGradientStops(offsets: any,colors: Microsoft_Maui_Graphics_Color[]): any
			addOffset(offset: number): any
			addOffset(offset: number,color: Microsoft_Maui_Graphics_Color): any
			removeOffset(index: number): any
			getColorAt(offset: number): Microsoft_Maui_Graphics_Color
			blendStartAndEndColors(): Microsoft_Maui_Graphics_Color
			blendStartAndEndColors(startColor: Microsoft_Maui_Graphics_Color,endColor: Microsoft_Maui_Graphics_Color,factor: number): Microsoft_Maui_Graphics_Color
			toString(): string

        }

export type Microsoft_Maui_Graphics_HorizontalAlignment = 
"Left"
|"Center"
|"Right"
|"Justified"
;

    // Microsoft.Maui.Graphics.IBitmapExportService
    export declare class Microsoft_Maui_Graphics_IBitmapExportService  {
			createContext(width: number,height: number,displayScale: number): Microsoft_Maui_Graphics_BitmapExportContext

        }


    // Microsoft.Maui.Graphics.IBlurrableCanvas
    export declare class Microsoft_Maui_Graphics_IBlurrableCanvas  {
			setBlur(blurRadius: number): any

        }


    // Microsoft.Maui.Graphics.ICanvas
    export declare class Microsoft_Maui_Graphics_ICanvas  {
			get displayScale(): number
			set displayScale(v: number);
			set strokeSize(v: number);
			set miterLimit(v: number);
			set strokeColor(v: Microsoft_Maui_Graphics_Color);
			set strokeLineCap(v: Microsoft_Maui_Graphics_LineCap);
			set strokeLineJoin(v: Microsoft_Maui_Graphics_LineJoin);
			set strokeDashPattern(v: any);
			set strokeDashOffset(v: number);
			set fillColor(v: Microsoft_Maui_Graphics_Color);
			set fontColor(v: Microsoft_Maui_Graphics_Color);
			set font(v: Microsoft_Maui_Graphics_IFont);
			set fontSize(v: number);
			set alpha(v: number);
			set antialias(v: boolean);
			set blendMode(v: Microsoft_Maui_Graphics_BlendMode);
			drawPath(path: Microsoft_Maui_Graphics_PathF): any
			fillPath(path: Microsoft_Maui_Graphics_PathF,windingMode: Microsoft_Maui_Graphics_WindingMode): any
			subtractFromClip(x: number,y: number,width: number,height: number): any
			clipPath(path: Microsoft_Maui_Graphics_PathF,windingMode: Microsoft_Maui_Graphics_WindingMode): any
			clipRectangle(x: number,y: number,width: number,height: number): any
			drawLine(x1: number,y1: number,x2: number,y2: number): any
			drawArc(x: number,y: number,width: number,height: number,startAngle: number,endAngle: number,clockwise: boolean,closed: boolean): any
			fillArc(x: number,y: number,width: number,height: number,startAngle: number,endAngle: number,clockwise: boolean): any
			drawRectangle(x: number,y: number,width: number,height: number): any
			fillRectangle(x: number,y: number,width: number,height: number): any
			drawRoundedRectangle(x: number,y: number,width: number,height: number,cornerRadius: number): any
			fillRoundedRectangle(x: number,y: number,width: number,height: number,cornerRadius: number): any
			drawEllipse(x: number,y: number,width: number,height: number): any
			fillEllipse(x: number,y: number,width: number,height: number): any
			drawString(value: string,x: number,y: number,horizontalAlignment: Microsoft_Maui_Graphics_HorizontalAlignment): any
			drawString(value: string,x: number,y: number,width: number,height: number,horizontalAlignment: Microsoft_Maui_Graphics_HorizontalAlignment,verticalAlignment: Microsoft_Maui_Graphics_VerticalAlignment,textFlow: Microsoft_Maui_Graphics_TextFlow,lineSpacingAdjustment: number): any
			drawText(value: Microsoft_Maui_Graphics_Text_IAttributedText,x: number,y: number,width: number,height: number): any
			rotate(degrees: number,x: number,y: number): any
			rotate(degrees: number): any
			scale(sx: number,sy: number): any
			translate(tx: number,ty: number): any
			concatenateTransform(transform: any): any
			saveState(): any
			restoreState(): boolean
			resetState(): any
			setShadow(offset: Microsoft_Maui_Graphics_SizeF,blur: number,color: Microsoft_Maui_Graphics_Color): any
			setFillPaint(paint: Microsoft_Maui_Graphics_Paint,rectangle: Microsoft_Maui_Graphics_RectF): any
			drawImage(image: Microsoft_Maui_Graphics_IImage,x: number,y: number,width: number,height: number): any
			getStringSize(value: string,font: Microsoft_Maui_Graphics_IFont,fontSize: number): Microsoft_Maui_Graphics_SizeF
			getStringSize(value: string,font: Microsoft_Maui_Graphics_IFont,fontSize: number,horizontalAlignment: Microsoft_Maui_Graphics_HorizontalAlignment,verticalAlignment: Microsoft_Maui_Graphics_VerticalAlignment): Microsoft_Maui_Graphics_SizeF

        }


    // Microsoft.Maui.Graphics.ICanvasStateService_1
    export declare class ICanvasStateService_1  {
			createNew(context: any): any
			createCopy(prototype: any): any

        }


    // Microsoft.Maui.Graphics.IDrawable
    export declare class Microsoft_Maui_Graphics_IDrawable  {
			draw(canvas: Microsoft_Maui_Graphics_ICanvas,dirtyRect: Microsoft_Maui_Graphics_RectF): any

        }


    // Microsoft.Maui.Graphics.IFont
    export declare class Microsoft_Maui_Graphics_IFont  {
			get name(): string
			get weight(): number
			get styleType(): Microsoft_Maui_Graphics_FontStyleType

        }


    // Microsoft.Maui.Graphics.IFontExtensions
    export declare class Microsoft_Maui_Graphics_IFontExtensions  {
			static getSvgWeight(font: Microsoft_Maui_Graphics_IFont): string
			static getSvgStyle(font: Microsoft_Maui_Graphics_IFont): string

        }

export type Microsoft_Maui_Graphics_ResizeMode = 
"Fit"
|"Bleed"
|"Stretch"
;

    // Microsoft.Maui.Graphics.IImage
    export declare class Microsoft_Maui_Graphics_IImage  {
			get width(): number
			get height(): number
			downsize(maxWidthOrHeight: number,disposeOriginal: boolean): Microsoft_Maui_Graphics_IImage
			downsize(maxWidth: number,maxHeight: number,disposeOriginal: boolean): Microsoft_Maui_Graphics_IImage
			resize(width: number,height: number,resizeMode: Microsoft_Maui_Graphics_ResizeMode,disposeOriginal: boolean): Microsoft_Maui_Graphics_IImage
			save(stream: any,format: Microsoft_Maui_Graphics_ImageFormat,quality: number): any
			saveAsync(stream: any,format: Microsoft_Maui_Graphics_ImageFormat,quality: number): any
			toPlatformImage(): Microsoft_Maui_Graphics_IImage

        }


    // Microsoft.Maui.Graphics.IImageLoadingService
    export declare class Microsoft_Maui_Graphics_IImageLoadingService  {
			fromStream(stream: any,format: Microsoft_Maui_Graphics_ImageFormat): Microsoft_Maui_Graphics_IImage

        }


    // Microsoft.Maui.Graphics.ImageExtensions
    export declare class Microsoft_Maui_Graphics_ImageExtensions  {
			static asBytes(target: Microsoft_Maui_Graphics_IImage,format: Microsoft_Maui_Graphics_ImageFormat,quality: number): any
			static asStream(target: Microsoft_Maui_Graphics_IImage,format: Microsoft_Maui_Graphics_ImageFormat,quality: number): any
			static asBytesAsync(target: Microsoft_Maui_Graphics_IImage,format: Microsoft_Maui_Graphics_ImageFormat,quality: number): any
			static asBase64(target: Microsoft_Maui_Graphics_IImage,format: Microsoft_Maui_Graphics_ImageFormat,quality: number): string
			static asPaint(target: Microsoft_Maui_Graphics_IImage): Microsoft_Maui_Graphics_Paint
			static setFillImage(canvas: Microsoft_Maui_Graphics_ICanvas,image: Microsoft_Maui_Graphics_IImage): any

        }

export type Microsoft_Maui_Graphics_ImageFormat = 
"Png"
|"Jpeg"
|"Gif"
|"Tiff"
|"Bmp"
;

    // Microsoft.Maui.Graphics.ImageLoadingServiceExtensions
    export declare class Microsoft_Maui_Graphics_ImageLoadingServiceExtensions  {
			static fromBytes(target: Microsoft_Maui_Graphics_IImageLoadingService,bytes: any): Microsoft_Maui_Graphics_IImage

        }


    // Microsoft.Maui.Graphics.ImagePaint
    export declare class Microsoft_Maui_Graphics_ImagePaint  {
			get image(): Microsoft_Maui_Graphics_IImage
			set image(v: Microsoft_Maui_Graphics_IImage);
			get isTransparent(): boolean

        }


    // Microsoft.Maui.Graphics.Insets
    export declare class Microsoft_Maui_Graphics_Insets  {
			get top(): number
			set top(v: number);
			get left(): number
			set left(v: number);
			get bottom(): number
			set bottom(v: number);
			get right(): number
			set right(v: number);
			get horizontal(): number
			get vertical(): number
			static parse(value: string): Microsoft_Maui_Graphics_Insets
			allValuesAreEqualTo(value: number): boolean
			equals(obj: any): boolean
			getHashCode(): number
			toParsableString(): string
			toString(): string

        }


    // Microsoft.Maui.Graphics.InsetsF
    export declare class Microsoft_Maui_Graphics_InsetsF  {
			get top(): number
			set top(v: number);
			get left(): number
			set left(v: number);
			get bottom(): number
			set bottom(v: number);
			get right(): number
			set right(v: number);
			get horizontal(): number
			get vertical(): number
			static parse(value: string): Microsoft_Maui_Graphics_InsetsF
			allValuesAreEqualTo(value: number): boolean
			equals(obj: any): boolean
			getHashCode(): number
			toParsableString(): string
			toString(): string

        }


    // Microsoft.Maui.Graphics.IPattern
    export declare class Microsoft_Maui_Graphics_IPattern  {
			get width(): number
			get height(): number
			get stepX(): number
			get stepY(): number
			draw(canvas: Microsoft_Maui_Graphics_ICanvas): any

        }


    // Microsoft.Maui.Graphics.IPdfPage
    export declare class Microsoft_Maui_Graphics_IPdfPage  {
			get width(): number
			get height(): number
			get pageNumber(): number
			save(stream: any): any
			saveAsync(stream: any): any

        }


    // Microsoft.Maui.Graphics.IPdfRenderService
    export declare class Microsoft_Maui_Graphics_IPdfRenderService  {
			createPage(stream: any,pageNumber: number): Microsoft_Maui_Graphics_IPdfPage

        }


    // Microsoft.Maui.Graphics.IPicture
    export declare class Microsoft_Maui_Graphics_IPicture  {
			get x(): number
			get y(): number
			get width(): number
			get height(): number
			draw(canvas: Microsoft_Maui_Graphics_ICanvas): any

        }


    // Microsoft.Maui.Graphics.IPictureWriter
    export declare class Microsoft_Maui_Graphics_IPictureWriter  {
			save(picture: Microsoft_Maui_Graphics_IPicture,stream: any): any
			saveAsync(picture: Microsoft_Maui_Graphics_IPicture,stream: any): any

        }


    // Microsoft.Maui.Graphics.IPlatformFonts
    export declare class Microsoft_Maui_Graphics_IPlatformFonts  {
			get default(): Microsoft_Maui_Graphics_IFont
			get defaultBold(): Microsoft_Maui_Graphics_IFont
			register(alias: string,sources: Microsoft_Maui_Graphics_FontSource[]): any
			get(font: Microsoft_Maui_Graphics_IFont): any
			get(alias: string,weight: number,fontStyleType: Microsoft_Maui_Graphics_FontStyleType): any

        }


    // Microsoft.Maui.Graphics.IStringSizeService
    export declare class Microsoft_Maui_Graphics_IStringSizeService  {
			getStringSize(value: string,font: Microsoft_Maui_Graphics_IFont,fontSize: number): Microsoft_Maui_Graphics_SizeF
			getStringSize(value: string,font: Microsoft_Maui_Graphics_IFont,fontSize: number,horizontalAlignment: Microsoft_Maui_Graphics_HorizontalAlignment,verticalAlignment: Microsoft_Maui_Graphics_VerticalAlignment): Microsoft_Maui_Graphics_SizeF

        }


    // Microsoft.Maui.Graphics.ITextAttributes
    export declare class Microsoft_Maui_Graphics_ITextAttributes  {
			get font(): Microsoft_Maui_Graphics_IFont
			set font(v: Microsoft_Maui_Graphics_IFont);
			get fontSize(): number
			set fontSize(v: number);
			get margin(): number
			set margin(v: number);
			get textFontColor(): Microsoft_Maui_Graphics_Color
			set textFontColor(v: Microsoft_Maui_Graphics_Color);
			get horizontalAlignment(): Microsoft_Maui_Graphics_HorizontalAlignment
			set horizontalAlignment(v: Microsoft_Maui_Graphics_HorizontalAlignment);
			get verticalAlignment(): Microsoft_Maui_Graphics_VerticalAlignment
			set verticalAlignment(v: Microsoft_Maui_Graphics_VerticalAlignment);

        }


    // Microsoft.Maui.Graphics.LayoutLine
    export declare class Microsoft_Maui_Graphics_LayoutLine  {
			invoke(aPoint: Microsoft_Maui_Graphics_PointF,aTextual: Microsoft_Maui_Graphics_ITextAttributes,aText: string,aAscent: number,aDescent: number,aLeading: number): any
			beginInvoke(aPoint: Microsoft_Maui_Graphics_PointF,aTextual: Microsoft_Maui_Graphics_ITextAttributes,aText: string,aAscent: number,aDescent: number,aLeading: number,callback: any,object: any): any
			endInvoke(result: any): any

        }


    // Microsoft.Maui.Graphics.LinearGradientPaint
    export declare class Microsoft_Maui_Graphics_LinearGradientPaint  {
			get startPoint(): Microsoft_Maui_Graphics_Point
			set startPoint(v: Microsoft_Maui_Graphics_Point);
			get endPoint(): Microsoft_Maui_Graphics_Point
			set endPoint(v: Microsoft_Maui_Graphics_Point);

        }

export type Microsoft_Maui_Graphics_LineCap = 
"Butt"
|"Round"
|"Square"
;
export type Microsoft_Maui_Graphics_LineJoin = 
"Miter"
|"Round"
|"Bevel"
;

    // Microsoft.Maui.Graphics.Paint
    export declare class Microsoft_Maui_Graphics_Paint  {
			get backgroundColor(): Microsoft_Maui_Graphics_Color
			set backgroundColor(v: Microsoft_Maui_Graphics_Color);
			get foregroundColor(): Microsoft_Maui_Graphics_Color
			set foregroundColor(v: Microsoft_Maui_Graphics_Color);
			get isTransparent(): boolean

        }


    // Microsoft.Maui.Graphics.PaintGradientStop
    export declare class Microsoft_Maui_Graphics_PaintGradientStop  {
			get color(): Microsoft_Maui_Graphics_Color
			set color(v: Microsoft_Maui_Graphics_Color);
			get offset(): number
			set offset(v: number);
			compareTo(obj: Microsoft_Maui_Graphics_PaintGradientStop): number

        }


    // Microsoft.Maui.Graphics.PaintPattern
    export declare class Microsoft_Maui_Graphics_PaintPattern  {
			get wrapped(): Microsoft_Maui_Graphics_IPattern
			get paint(): Microsoft_Maui_Graphics_Paint
			set paint(v: Microsoft_Maui_Graphics_Paint);
			get width(): number
			get height(): number
			get stepX(): number
			get stepY(): number
			draw(canvas: Microsoft_Maui_Graphics_ICanvas): any

        }


    // Microsoft.Maui.Graphics.PathArcExtensions
    export declare class Microsoft_Maui_Graphics_PathArcExtensions  {
			static sVGArcTo(aTarget: Microsoft_Maui_Graphics_PathF,rx: number,ry: number,angle: number,largeArcFlag: boolean,sweepFlag: boolean,x: number,y: number,lastPointX: number,lastPointY: number): any
			static drawArc(aPath: Microsoft_Maui_Graphics_PathF,x: number,y: number,startAngle: number,arc: number,radius: number,yRadius: number,xAxisRotation: number): any

        }


    // Microsoft.Maui.Graphics.PathBuilder
    export declare class Microsoft_Maui_Graphics_PathBuilder  {
			static build(definition: string): Microsoft_Maui_Graphics_PathF
			static parseFloat(value: string): number
			buildPath(pathAsString: string): Microsoft_Maui_Graphics_PathF

        }


    // Microsoft.Maui.Graphics.PathExtensions
    export declare class Microsoft_Maui_Graphics_PathExtensions  {
			static toDefinitionString(path: Microsoft_Maui_Graphics_PathF,ppu: number): string
			static asScaledPath(target: Microsoft_Maui_Graphics_PathF,scale: number): Microsoft_Maui_Graphics_PathF
			static asScaledPath(target: Microsoft_Maui_Graphics_PathF,xScale: number,yScale: number): Microsoft_Maui_Graphics_PathF

        }


    // Microsoft.Maui.Graphics.PathF
    export declare class Microsoft_Maui_Graphics_PathF  {
			get subPathCount(): number
			get closed(): boolean
			get firstPoint(): Microsoft_Maui_Graphics_PointF
			get segmentTypes(): any
			get points(): any
			get lastPoint(): Microsoft_Maui_Graphics_PointF
			get lastPointIndex(): number
			get item(): Microsoft_Maui_Graphics_PointF
			get count(): number
			get operationCount(): number
			get segmentCountExcludingOpenAndClose(): number
			get platformPath(): any
			set platformPath(v: any);
			get bounds(): Microsoft_Maui_Graphics_RectF
			setPoint(index: number,x: number,y: number): any
			setPoint(index: number,point: Microsoft_Maui_Graphics_PointF): any
			getSegmentType(aIndex: number): Microsoft_Maui_Graphics_PathOperation
			getArcAngle(aIndex: number): number
			setArcAngle(aIndex: number,aValue: number): any
			getArcClockwise(aIndex: number): boolean
			setArcClockwise(aIndex: number,aValue: boolean): any
			moveTo(x: number,y: number): Microsoft_Maui_Graphics_PathF
			moveTo(point: Microsoft_Maui_Graphics_PointF): Microsoft_Maui_Graphics_PathF
			close(): any
			open(): any
			lineTo(x: number,y: number): Microsoft_Maui_Graphics_PathF
			lineTo(point: Microsoft_Maui_Graphics_PointF): Microsoft_Maui_Graphics_PathF
			insertLineTo(point: Microsoft_Maui_Graphics_PointF,index: number): Microsoft_Maui_Graphics_PathF
			addArc(x1: number,y1: number,x2: number,y2: number,startAngle: number,endAngle: number,clockwise: boolean): Microsoft_Maui_Graphics_PathF
			addArc(topLeft: Microsoft_Maui_Graphics_PointF,bottomRight: Microsoft_Maui_Graphics_PointF,startAngle: number,endAngle: number,clockwise: boolean): Microsoft_Maui_Graphics_PathF
			quadTo(cx: number,cy: number,x: number,y: number): Microsoft_Maui_Graphics_PathF
			quadTo(controlPoint: Microsoft_Maui_Graphics_PointF,point: Microsoft_Maui_Graphics_PointF): Microsoft_Maui_Graphics_PathF
			insertQuadTo(controlPoint: Microsoft_Maui_Graphics_PointF,point: Microsoft_Maui_Graphics_PointF,index: number): Microsoft_Maui_Graphics_PathF
			curveTo(c1X: number,c1Y: number,c2X: number,c2Y: number,x: number,y: number): Microsoft_Maui_Graphics_PathF
			curveTo(controlPoint1: Microsoft_Maui_Graphics_PointF,controlPoint2: Microsoft_Maui_Graphics_PointF,point: Microsoft_Maui_Graphics_PointF): Microsoft_Maui_Graphics_PathF
			insertCurveTo(controlPoint1: Microsoft_Maui_Graphics_PointF,controlPoint2: Microsoft_Maui_Graphics_PointF,point: Microsoft_Maui_Graphics_PointF,index: number): Microsoft_Maui_Graphics_PathF
			getSegmentPointIndex(index: number): number
			getSegmentInfo(segmentIndex: number,pointIndex: any,arcAngleIndex: any,arcClockwiseIndex: any): Microsoft_Maui_Graphics_PathOperation
			getSegmentForPoint(pointIndex: number): number
			getPointsForSegment(segmentIndex: number): Microsoft_Maui_Graphics_PointF[]
			removeAllSegmentsAfter(segmentIndex: number): any
			removeSegment(segmentIndex: number): any
			rotate(angleAsDegrees: number,pivot: Microsoft_Maui_Graphics_PointF): Microsoft_Maui_Graphics_PathF
			getRotatedPoint(pointIndex: number,pivotPoint: Microsoft_Maui_Graphics_PointF,angle: number): Microsoft_Maui_Graphics_PointF
			transform(transform: any): any
			separate(): any
			reverse(): Microsoft_Maui_Graphics_PathF
			appendEllipse(rect: Microsoft_Maui_Graphics_RectF): any
			appendEllipse(x: number,y: number,w: number,h: number): any
			appendCircle(center: Microsoft_Maui_Graphics_PointF,r: number): any
			appendCircle(cx: number,cy: number,r: number): any
			appendRectangle(rect: Microsoft_Maui_Graphics_RectF,includeLast: boolean): any
			appendRectangle(x: number,y: number,w: number,h: number,includeLast: boolean): any
			appendRoundedRectangle(rect: Microsoft_Maui_Graphics_RectF,cornerRadius: number,includeLast: boolean): any
			appendRoundedRectangle(x: number,y: number,w: number,h: number,cornerRadius: number,includeLast: boolean): any
			appendRoundedRectangle(rect: Microsoft_Maui_Graphics_RectF,topLeftCornerRadius: number,topRightCornerRadius: number,bottomLeftCornerRadius: number,bottomRightCornerRadius: number,includeLast: boolean): any
			appendRoundedRectangle(rect: Microsoft_Maui_Graphics_RectF,xCornerRadius: number,yCornerRadius: number): any
			appendRoundedRectangle(x: number,y: number,w: number,h: number,topLeftCornerRadius: number,topRightCornerRadius: number,bottomLeftCornerRadius: number,bottomRightCornerRadius: number,includeLast: boolean): any
			isSubPathClosed(subPathIndex: number): boolean
			invalidate(): any
			dispose(): any
			move(x: number,y: number): any
			movePoint(index: number,dx: number,dy: number): any
			equals(obj: any): boolean
			getHashCode(): number
			equals(obj: any,epsilon: number): boolean
			getBoundsByFlattening(flatness: number): Microsoft_Maui_Graphics_RectF
			getFlattenedPath(flatness: number,includeSubPaths: boolean): Microsoft_Maui_Graphics_PathF

        }

export type Microsoft_Maui_Graphics_PathOperation = 
"Move"
|"Line"
|"Quad"
|"Cubic"
|"Arc"
|"Close"
;

    // Microsoft.Maui.Graphics.PatternExtensions
    export declare class Microsoft_Maui_Graphics_PatternExtensions  {
			static asPaint(target: Microsoft_Maui_Graphics_IPattern): Microsoft_Maui_Graphics_Paint
			static asPaint(target: Microsoft_Maui_Graphics_IPattern,foregroundColor: Microsoft_Maui_Graphics_Color): Microsoft_Maui_Graphics_Paint

        }


    // Microsoft.Maui.Graphics.PatternPaint
    export declare class Microsoft_Maui_Graphics_PatternPaint  {
			get pattern(): Microsoft_Maui_Graphics_IPattern
			set pattern(v: Microsoft_Maui_Graphics_IPattern);
			get isTransparent(): boolean

        }


    // Microsoft.Maui.Graphics.PdfPageExtensions
    export declare class Microsoft_Maui_Graphics_PdfPageExtensions  {
			static asBytes(target: Microsoft_Maui_Graphics_IPdfPage): any
			static asStream(target: Microsoft_Maui_Graphics_IPdfPage): any
			static asBytesAsync(target: Microsoft_Maui_Graphics_IPdfPage): any
			static asBase64(target: Microsoft_Maui_Graphics_IPdfPage): string

        }


    // Microsoft.Maui.Graphics.PictureCanvas
    export declare class Microsoft_Maui_Graphics_PictureCanvas  {
			get picture(): Microsoft_Maui_Graphics_IPicture
			get displayScale(): number
			set displayScale(v: number);
			set strokeSize(v: number);
			set miterLimit(v: number);
			set strokeColor(v: Microsoft_Maui_Graphics_Color);
			set strokeLineCap(v: Microsoft_Maui_Graphics_LineCap);
			set strokeLineJoin(v: Microsoft_Maui_Graphics_LineJoin);
			set strokeDashPattern(v: any);
			set strokeDashOffset(v: number);
			set fillColor(v: Microsoft_Maui_Graphics_Color);
			set fontColor(v: Microsoft_Maui_Graphics_Color);
			set font(v: Microsoft_Maui_Graphics_IFont);
			set fontSize(v: number);
			set alpha(v: number);
			set antialias(v: boolean);
			set blendMode(v: Microsoft_Maui_Graphics_BlendMode);
			dispose(): any
			subtractFromClip(x: number,y: number,width: number,height: number): any
			drawLine(x1: number,y1: number,x2: number,y2: number): any
			drawArc(x: number,y: number,width: number,height: number,startAngle: number,endAngle: number,clockwise: boolean,closed: boolean): any
			fillArc(x: number,y: number,width: number,height: number,startAngle: number,endAngle: number,clockwise: boolean): any
			drawRectangle(x: number,y: number,width: number,height: number): any
			fillRectangle(x: number,y: number,width: number,height: number): any
			drawRoundedRectangle(x: number,y: number,width: number,height: number,cornerRadius: number): any
			fillRoundedRectangle(x: number,y: number,width: number,height: number,cornerRadius: number): any
			drawEllipse(x: number,y: number,width: number,height: number): any
			fillEllipse(x: number,y: number,width: number,height: number): any
			drawString(value: string,x: number,y: number,horizontalAlignment: Microsoft_Maui_Graphics_HorizontalAlignment): any
			drawString(value: string,x: number,y: number,width: number,height: number,horizontalAlignment: Microsoft_Maui_Graphics_HorizontalAlignment,verticalAlignment: Microsoft_Maui_Graphics_VerticalAlignment,textFlow: Microsoft_Maui_Graphics_TextFlow,lineSpacingAdjustment: number): any
			drawText(value: Microsoft_Maui_Graphics_Text_IAttributedText,x: number,y: number,width: number,height: number): any
			drawPath(path: Microsoft_Maui_Graphics_PathF): any
			fillPath(path: Microsoft_Maui_Graphics_PathF,windingMode: Microsoft_Maui_Graphics_WindingMode): any
			clipPath(path: Microsoft_Maui_Graphics_PathF,windingMode: Microsoft_Maui_Graphics_WindingMode): any
			clipRectangle(x: number,y: number,width: number,height: number): any
			rotate(degrees: number,x: number,y: number): any
			rotate(degrees: number): any
			scale(sx: number,sy: number): any
			translate(tx: number,ty: number): any
			concatenateTransform(transform: any): any
			saveState(): any
			restoreState(): boolean
			resetState(): any
			setShadow(offset: Microsoft_Maui_Graphics_SizeF,blur: number,color: Microsoft_Maui_Graphics_Color): any
			setFillPaint(paint: Microsoft_Maui_Graphics_Paint,point1: Microsoft_Maui_Graphics_PointF,point2: Microsoft_Maui_Graphics_PointF): any
			setFillPaint(paint: Microsoft_Maui_Graphics_Paint,rectangle: Microsoft_Maui_Graphics_RectF): any
			getStringSize(value: string,font: Microsoft_Maui_Graphics_IFont,fontSize: number): Microsoft_Maui_Graphics_SizeF
			getStringSize(value: string,font: Microsoft_Maui_Graphics_IFont,fontSize: number,horizontalAlignment: Microsoft_Maui_Graphics_HorizontalAlignment,verticalAlignment: Microsoft_Maui_Graphics_VerticalAlignment): Microsoft_Maui_Graphics_SizeF
			drawImage(image: Microsoft_Maui_Graphics_IImage,x: number,y: number,width: number,height: number): any

        }

export type Microsoft_Maui_Graphics_PictureCommand = 
"DrawLine"
|"DrawRectangle"
|"DrawRoundedRectangle"
|"DrawEllipse"
|"DrawPath"
|"DrawImage"
|"DrawArc"
|"DrawPdfPage"
|"FillRectangle"
|"FillRoundedRectangle"
|"FillEllipse"
|"FillPath"
|"FillArc"
|"FillPath2"
|"DrawStringAtPoint"
|"DrawStringInRect"
|"DrawStringInPath"
|"DrawTextInRect"
|"StrokeSize"
|"StrokeColor"
|"StrokeDashPattern"
|"StrokeLineCap"
|"StrokeLineJoin"
|"StrokeLocation"
|"StrokeMiterLimit"
|"LimitStrokeScaling"
|"StrokeLimit"
|"StrokeBrush"
|"FillColor"
|"FillPaint"
|"FontColor"
|"FontName"
|"FontSize"
|"Scale"
|"Translate"
|"Rotate"
|"RotateAtPoint"
|"ConcatenateTransform"
|"Shadow"
|"Alpha"
|"BlendMode"
|"SubtractFromClip"
|"ClipPath"
|"ClipRectangle"
|"SubtractPathFromClip"
|"SaveState"
|"RestoreState"
|"ResetState"
|"SystemFont"
|"BoldSystemFont"
;

    // Microsoft.Maui.Graphics.PictureExtensions
    export declare class Microsoft_Maui_Graphics_PictureExtensions  {
			static getBounds(target: Microsoft_Maui_Graphics_IPicture): Microsoft_Maui_Graphics_RectF

        }


    // Microsoft.Maui.Graphics.PicturePattern
    export declare class Microsoft_Maui_Graphics_PicturePattern  {
			draw(canvas: Microsoft_Maui_Graphics_ICanvas): any

        }


    // Microsoft.Maui.Graphics.IPictureReader
    export declare class Microsoft_Maui_Graphics_IPictureReader  {
			read(data: any): Microsoft_Maui_Graphics_IPicture

        }


    // Microsoft.Maui.Graphics.PictureReaderExtensions
    export declare class Microsoft_Maui_Graphics_PictureReaderExtensions  {
			static read(target: Microsoft_Maui_Graphics_IPictureReader,stream: any,hash: string): Microsoft_Maui_Graphics_IPicture
			static readAsync(target: Microsoft_Maui_Graphics_IPictureReader,stream: any,hash: string): any

        }


    // Microsoft.Maui.Graphics.PictureWriterExtensions
    export declare class Microsoft_Maui_Graphics_PictureWriterExtensions  {
			static saveAsBytes(target: Microsoft_Maui_Graphics_IPictureWriter,picture: Microsoft_Maui_Graphics_IPicture): any
			static saveAsBytesAsync(target: Microsoft_Maui_Graphics_IPictureWriter,picture: Microsoft_Maui_Graphics_IPicture): any
			static saveAsBase64(target: Microsoft_Maui_Graphics_IPictureWriter,picture: Microsoft_Maui_Graphics_IPicture): string
			static saveAsStream(target: Microsoft_Maui_Graphics_IPictureWriter,picture: Microsoft_Maui_Graphics_IPicture): any

        }


    // Microsoft.Maui.Graphics.Point
    export declare class Microsoft_Maui_Graphics_Point  {
			get x(): number
			set x(v: number);
			get y(): number
			set y(v: number);
			get isEmpty(): boolean
			static zero: Microsoft_Maui_Graphics_Point
			static tryParse(value: string,point: any): boolean
			toString(): string
			equals(o: any): boolean
			equals(o: any,epsilon: number): boolean
			getHashCode(): number
			offset(dx: number,dy: number): Microsoft_Maui_Graphics_Point
			round(): Microsoft_Maui_Graphics_Point
			distance(other: Microsoft_Maui_Graphics_Point): number
			deconstruct(x: any,y: any): any

        }


    // Microsoft.Maui.Graphics.PointF
    export declare class Microsoft_Maui_Graphics_PointF  {
			get x(): number
			set x(v: number);
			get y(): number
			set y(v: number);
			get isEmpty(): boolean
			static zero: Microsoft_Maui_Graphics_PointF
			static tryParse(value: string,pointF: any): boolean
			toString(): string
			equals(o: any): boolean
			equals(o: any,epsilon: number): boolean
			getHashCode(): number
			offset(dx: number,dy: number): Microsoft_Maui_Graphics_PointF
			transformBy(transform: any): Microsoft_Maui_Graphics_PointF
			round(): Microsoft_Maui_Graphics_PointF
			distance(other: Microsoft_Maui_Graphics_PointF): number
			deconstruct(x: any,y: any): any

        }


    // Microsoft.Maui.Graphics.RadialGradientPaint
    export declare class Microsoft_Maui_Graphics_RadialGradientPaint  {
			get center(): Microsoft_Maui_Graphics_Point
			set center(v: Microsoft_Maui_Graphics_Point);
			get radius(): number
			set radius(v: number);

        }


    // Microsoft.Maui.Graphics.Rect
    export declare class Microsoft_Maui_Graphics_Rect  {
			get x(): number
			set x(v: number);
			get y(): number
			set y(v: number);
			get width(): number
			set width(v: number);
			get height(): number
			set height(v: number);
			get top(): number
			set top(v: number);
			get bottom(): number
			set bottom(v: number);
			get right(): number
			set right(v: number);
			get left(): number
			set left(v: number);
			get isEmpty(): boolean
			get size(): Microsoft_Maui_Graphics_Size
			set size(v: Microsoft_Maui_Graphics_Size);
			get location(): Microsoft_Maui_Graphics_Point
			set location(v: Microsoft_Maui_Graphics_Point);
			get center(): Microsoft_Maui_Graphics_Point
			static zero: Microsoft_Maui_Graphics_Rect
			static fromLTRB(left: number,top: number,right: number,bottom: number): Microsoft_Maui_Graphics_Rect
			static union(r1: Microsoft_Maui_Graphics_Rect,r2: Microsoft_Maui_Graphics_Rect): Microsoft_Maui_Graphics_Rect
			static intersect(r1: Microsoft_Maui_Graphics_Rect,r2: Microsoft_Maui_Graphics_Rect): Microsoft_Maui_Graphics_Rect
			static tryParse(value: string,rectangle: any): boolean
			toString(): string
			equals(other: Microsoft_Maui_Graphics_Rect): boolean
			equals(obj: any): boolean
			getHashCode(): number
			contains(rect: Microsoft_Maui_Graphics_Rect): boolean
			contains(pt: Microsoft_Maui_Graphics_Point): boolean
			contains(x: number,y: number): boolean
			intersectsWith(r: Microsoft_Maui_Graphics_Rect): boolean
			union(r: Microsoft_Maui_Graphics_Rect): Microsoft_Maui_Graphics_Rect
			intersect(r: Microsoft_Maui_Graphics_Rect): Microsoft_Maui_Graphics_Rect
			inflate(sz: Microsoft_Maui_Graphics_Size): Microsoft_Maui_Graphics_Rect
			inflate(width: number,height: number): Microsoft_Maui_Graphics_Rect
			offset(dx: number,dy: number): Microsoft_Maui_Graphics_Rect
			offset(dr: Microsoft_Maui_Graphics_Point): Microsoft_Maui_Graphics_Rect
			round(): Microsoft_Maui_Graphics_Rect
			deconstruct(x: any,y: any,width: any,height: any): any

        }


    // Microsoft.Maui.Graphics.RectF
    export declare class Microsoft_Maui_Graphics_RectF  {
			get x(): number
			set x(v: number);
			get y(): number
			set y(v: number);
			get width(): number
			set width(v: number);
			get height(): number
			set height(v: number);
			get top(): number
			set top(v: number);
			get bottom(): number
			set bottom(v: number);
			get right(): number
			set right(v: number);
			get left(): number
			set left(v: number);
			get isEmpty(): boolean
			get size(): Microsoft_Maui_Graphics_SizeF
			set size(v: Microsoft_Maui_Graphics_SizeF);
			get location(): Microsoft_Maui_Graphics_PointF
			set location(v: Microsoft_Maui_Graphics_PointF);
			get center(): Microsoft_Maui_Graphics_PointF
			static zero: Microsoft_Maui_Graphics_RectF
			static fromLTRB(left: number,top: number,right: number,bottom: number): Microsoft_Maui_Graphics_RectF
			static union(r1: Microsoft_Maui_Graphics_RectF,r2: Microsoft_Maui_Graphics_RectF): Microsoft_Maui_Graphics_RectF
			static intersect(r1: Microsoft_Maui_Graphics_RectF,r2: Microsoft_Maui_Graphics_RectF): Microsoft_Maui_Graphics_RectF
			static tryParse(value: string,rectangleF: any): boolean
			toString(): string
			equals(other: Microsoft_Maui_Graphics_RectF): boolean
			equals(obj: any): boolean
			getHashCode(): number
			contains(rect: Microsoft_Maui_Graphics_RectF): boolean
			contains(pt: Microsoft_Maui_Graphics_PointF): boolean
			contains(x: number,y: number): boolean
			intersectsWith(r: Microsoft_Maui_Graphics_RectF): boolean
			union(r: Microsoft_Maui_Graphics_RectF): Microsoft_Maui_Graphics_RectF
			intersect(r: Microsoft_Maui_Graphics_RectF): Microsoft_Maui_Graphics_RectF
			inflate(sz: Microsoft_Maui_Graphics_SizeF): Microsoft_Maui_Graphics_RectF
			inflate(width: number,height: number): Microsoft_Maui_Graphics_RectF
			offset(dx: number,dy: number): Microsoft_Maui_Graphics_RectF
			offset(dr: Microsoft_Maui_Graphics_PointF): Microsoft_Maui_Graphics_RectF
			round(): Microsoft_Maui_Graphics_RectF
			deconstruct(x: any,y: any,width: any,height: any): any

        }


    // Microsoft.Maui.Graphics.ScalingCanvas
    export declare class Microsoft_Maui_Graphics_ScalingCanvas  {
			get displayScale(): number
			set displayScale(v: number);
			get wrapped(): any
			get parentCanvas(): Microsoft_Maui_Graphics_ICanvas
			set strokeSize(v: number);
			set miterLimit(v: number);
			set strokeColor(v: Microsoft_Maui_Graphics_Color);
			set strokeLineCap(v: Microsoft_Maui_Graphics_LineCap);
			set alpha(v: number);
			set strokeLineJoin(v: Microsoft_Maui_Graphics_LineJoin);
			set strokeDashPattern(v: any);
			set strokeDashOffset(v: number);
			set fillColor(v: Microsoft_Maui_Graphics_Color);
			set fontColor(v: Microsoft_Maui_Graphics_Color);
			set font(v: Microsoft_Maui_Graphics_IFont);
			set fontSize(v: number);
			set blendMode(v: Microsoft_Maui_Graphics_BlendMode);
			set antialias(v: boolean);
			subtractFromClip(x1: number,y1: number,x2: number,y2: number): any
			drawLine(x1: number,y1: number,x2: number,y2: number): any
			drawArc(x: number,y: number,width: number,height: number,startAngle: number,endAngle: number,clockwise: boolean,closed: boolean): any
			fillArc(x: number,y: number,width: number,height: number,startAngle: number,endAngle: number,clockwise: boolean): any
			drawEllipse(x: number,y: number,width: number,height: number): any
			drawImage(image: Microsoft_Maui_Graphics_IImage,x: number,y: number,width: number,height: number): any
			drawRectangle(x: number,y: number,width: number,height: number): any
			drawRoundedRectangle(x: number,y: number,width: number,height: number,cornerRadius: number): any
			drawString(value: string,x: number,y: number,horizontalAlignment: Microsoft_Maui_Graphics_HorizontalAlignment): any
			drawString(value: string,x: number,y: number,width: number,height: number,horizontalAlignment: Microsoft_Maui_Graphics_HorizontalAlignment,verticalAlignment: Microsoft_Maui_Graphics_VerticalAlignment,textFlow: Microsoft_Maui_Graphics_TextFlow,lineSpacingAdjustment: number): any
			drawText(value: Microsoft_Maui_Graphics_Text_IAttributedText,x: number,y: number,width: number,height: number): any
			fillEllipse(x: number,y: number,width: number,height: number): any
			fillRectangle(x: number,y: number,width: number,height: number): any
			fillRoundedRectangle(x: number,y: number,width: number,height: number,cornerRadius: number): any
			drawPath(path: Microsoft_Maui_Graphics_PathF): any
			fillPath(path: Microsoft_Maui_Graphics_PathF,windingMode: Microsoft_Maui_Graphics_WindingMode): any
			clipPath(path: Microsoft_Maui_Graphics_PathF,windingMode: Microsoft_Maui_Graphics_WindingMode): any
			clipRectangle(x: number,y: number,width: number,height: number): any
			rotate(degrees: number,x: number,y: number): any
			setFillPaint(paint: Microsoft_Maui_Graphics_Paint,rectangle: Microsoft_Maui_Graphics_RectF): any
			rotate(degrees: number): any
			scale(sx: number,sy: number): any
			translate(tx: number,ty: number): any
			concatenateTransform(transform: any): any
			saveState(): any
			resetState(): any
			restoreState(): boolean
			getScale(): number
			setShadow(offset: Microsoft_Maui_Graphics_SizeF,blur: number,color: Microsoft_Maui_Graphics_Color): any
			setBlur(blurRadius: number): any
			getStringSize(value: string,font: Microsoft_Maui_Graphics_IFont,fontSize: number): Microsoft_Maui_Graphics_SizeF
			getStringSize(value: string,font: Microsoft_Maui_Graphics_IFont,fontSize: number,horizontalAlignment: Microsoft_Maui_Graphics_HorizontalAlignment,verticalAlignment: Microsoft_Maui_Graphics_VerticalAlignment): Microsoft_Maui_Graphics_SizeF

        }


    // Microsoft.Maui.Graphics.Size
    export declare class Microsoft_Maui_Graphics_Size  {
			get isZero(): boolean
			get width(): number
			set width(v: number);
			get height(): number
			set height(v: number);
			static zero: Microsoft_Maui_Graphics_Size
			static tryParse(value: string,size: any): boolean
			equals(other: Microsoft_Maui_Graphics_Size): boolean
			equals(obj: any): boolean
			getHashCode(): number
			toString(): string
			deconstruct(width: any,height: any): any

        }


    // Microsoft.Maui.Graphics.SizeF
    export declare class Microsoft_Maui_Graphics_SizeF  {
			get isZero(): boolean
			get width(): number
			set width(v: number);
			get height(): number
			set height(v: number);
			static zero: Microsoft_Maui_Graphics_SizeF
			static tryParse(value: string,sizeF: any): boolean
			transformNormalBy(transform: any): Microsoft_Maui_Graphics_SizeF
			equals(other: Microsoft_Maui_Graphics_SizeF): boolean
			equals(obj: any): boolean
			getHashCode(): number
			toString(): string
			deconstruct(width: any,height: any): any

        }


    // Microsoft.Maui.Graphics.SolidPaint
    export declare class Microsoft_Maui_Graphics_SolidPaint  {
			get color(): Microsoft_Maui_Graphics_Color
			set color(v: Microsoft_Maui_Graphics_Color);
			get isTransparent(): boolean
			toString(): string

        }


    // Microsoft.Maui.Graphics.DrawingCommand
    export declare class Microsoft_Maui_Graphics_DrawingCommand  {
			invoke(canvas: Microsoft_Maui_Graphics_ICanvas): any
			beginInvoke(canvas: Microsoft_Maui_Graphics_ICanvas,callback: any,object: any): any
			endInvoke(result: any): any

        }


    // Microsoft.Maui.Graphics.StandardPicture
    export declare class Microsoft_Maui_Graphics_StandardPicture  {
			get x(): number
			get y(): number
			get width(): number
			get height(): number
			get hash(): string
			set hash(v: string);
			draw(canvas: Microsoft_Maui_Graphics_ICanvas): any

        }


    // Microsoft.Maui.Graphics.StandardTextAttributes
    export declare class Microsoft_Maui_Graphics_StandardTextAttributes  {
			get font(): Microsoft_Maui_Graphics_IFont
			set font(v: Microsoft_Maui_Graphics_IFont);
			get fontSize(): number
			set fontSize(v: number);
			get horizontalAlignment(): Microsoft_Maui_Graphics_HorizontalAlignment
			set horizontalAlignment(v: Microsoft_Maui_Graphics_HorizontalAlignment);
			get margin(): number
			set margin(v: number);
			get textFontColor(): Microsoft_Maui_Graphics_Color
			set textFontColor(v: Microsoft_Maui_Graphics_Color);
			get verticalAlignment(): Microsoft_Maui_Graphics_VerticalAlignment
			set verticalAlignment(v: Microsoft_Maui_Graphics_VerticalAlignment);

        }

export type Microsoft_Maui_Graphics_TextFlow = 
"ClipBounds"
|"OverflowBounds"
;
export type Microsoft_Maui_Graphics_VerticalAlignment = 
"Top"
|"Center"
|"Bottom"
;
export type Microsoft_Maui_Graphics_WindingMode = 
"NonZero"
|"EvenOdd"
;

    // Microsoft.Maui.Graphics.XmlnsPrefixAttribute
    export declare class Microsoft_Maui_Graphics_XmlnsPrefixAttribute  {
			get xmlNamespace(): string
			get prefix(): string

        }


    // Microsoft.Maui.Graphics.Text.AbstractAttributedText
    export declare class Microsoft_Maui_Graphics_Text_AbstractAttributedText  {
			get text(): string
			get runs(): any
			get optimal(): boolean
			set optimal(v: boolean);

        }


    // Microsoft.Maui.Graphics.Text.AttributedText
    export declare class Microsoft_Maui_Graphics_Text_AttributedText  {
			get text(): string
			get runs(): any

        }


    // Microsoft.Maui.Graphics.Text.AttributedTextBlock
    export declare class Microsoft_Maui_Graphics_Text_AttributedTextBlock  {
			get text(): string
			get attributes(): Microsoft_Maui_Graphics_Text_ITextAttributes
			toString(): string

        }


    // Microsoft.Maui.Graphics.Text.AttributedTextExtensions
    export declare class Microsoft_Maui_Graphics_Text_AttributedTextExtensions  {
			static optimize(attributedText: Microsoft_Maui_Graphics_Text_IAttributedText): Microsoft_Maui_Graphics_Text_IAttributedText
			static createParagraphs(attributedText: Microsoft_Maui_Graphics_Text_IAttributedText): any
			static createParagraphRun(text: Microsoft_Maui_Graphics_Text_IAttributedText,start: number,length: number,runs: any,startIndexForSearch: number): number
			static createBlocks(text: Microsoft_Maui_Graphics_Text_IAttributedText): any

        }


    // Microsoft.Maui.Graphics.Text.AttributedTextRun
    export declare class Microsoft_Maui_Graphics_Text_AttributedTextRun  {
			get start(): number
			get length(): number
			get attributes(): Microsoft_Maui_Graphics_Text_ITextAttributes
			toString(): string

        }


    // Microsoft.Maui.Graphics.Text.AttributedTextRunComparer
    export declare class Microsoft_Maui_Graphics_Text_AttributedTextRunComparer  {
			static instance: Microsoft_Maui_Graphics_Text_AttributedTextRunComparer
			compare(first: Microsoft_Maui_Graphics_Text_IAttributedTextRun,second: Microsoft_Maui_Graphics_Text_IAttributedTextRun): number

        }


    // Microsoft.Maui.Graphics.Text.AttributedTextRunExtensions
    export declare class Microsoft_Maui_Graphics_Text_AttributedTextRunExtensions  {
			static getEnd(run: Microsoft_Maui_Graphics_Text_IAttributedTextRun): number
			static intersects(first: Microsoft_Maui_Graphics_Text_IAttributedTextRun,second: Microsoft_Maui_Graphics_Text_IAttributedTextRun): boolean
			static intersects(first: Microsoft_Maui_Graphics_Text_IAttributedTextRun,start: number,length: number): boolean
			static intersectsExactly(first: Microsoft_Maui_Graphics_Text_IAttributedTextRun,second: Microsoft_Maui_Graphics_Text_IAttributedTextRun): boolean
			static intersectsExactly(first: Microsoft_Maui_Graphics_Text_IAttributedTextRun,start: number,length: number): boolean
			static calculatedIntersections(first: Microsoft_Maui_Graphics_Text_IAttributedTextRun,second: Microsoft_Maui_Graphics_Text_IAttributedTextRun): any
			static optimize(runs: any,textLength: number): any

        }


    // Microsoft.Maui.Graphics.Text.CountingWriter
    export declare class Microsoft_Maui_Graphics_Text_CountingWriter  {
			get encoding(): any
			get count(): number
			write(value: string): any
			toString(): string

        }


    // Microsoft.Maui.Graphics.Text.IAttributedText
    export declare class Microsoft_Maui_Graphics_Text_IAttributedText  {
			get text(): string
			get runs(): any

        }


    // Microsoft.Maui.Graphics.Text.IAttributedTextRun
    export declare class Microsoft_Maui_Graphics_Text_IAttributedTextRun  {
			get start(): number
			get length(): number
			get attributes(): Microsoft_Maui_Graphics_Text_ITextAttributes

        }


    // Microsoft.Maui.Graphics.Text.ITextAttributes
    export declare class Microsoft_Maui_Graphics_Text_ITextAttributes  {

        }

export type Microsoft_Maui_Graphics_Text_MarkerType = 
"ClosedCircle"
|"OpenCircle"
|"Hyphen"
;

    // Microsoft.Maui.Graphics.Text.MutableAttributedText
    export declare class Microsoft_Maui_Graphics_Text_MutableAttributedText  {
			get text(): string
			get runs(): any
			addRun(run: Microsoft_Maui_Graphics_Text_IAttributedTextRun): any

        }

export type Microsoft_Maui_Graphics_Text_TextAttribute = 
"FontName"
|"FontSize"
|"Bold"
|"Italic"
|"Underline"
|"Strikethrough"
|"Subscript"
|"Superscript"
|"Color"
|"Background"
|"UnorderedList"
|"Marker"
;

    // Microsoft.Maui.Graphics.Text.TextAttributeExtensions
    export declare class Microsoft_Maui_Graphics_Text_TextAttributeExtensions  {
			static defaultFontSize: number
			static getFontName(attributes: Microsoft_Maui_Graphics_Text_ITextAttributes): string
			static setFontName(attributes: any,value: string): any
			static getFontSize(attributes: Microsoft_Maui_Graphics_Text_ITextAttributes,fontSize: number): number
			static setFontSize(attributes: any,value: number): any
			static getUnderline(attributes: Microsoft_Maui_Graphics_Text_ITextAttributes): boolean
			static setUnderline(attributes: any,value: boolean): any
			static getBold(attributes: Microsoft_Maui_Graphics_Text_ITextAttributes): boolean
			static setBold(attributes: any,value: boolean): any
			static getItalic(attributes: Microsoft_Maui_Graphics_Text_ITextAttributes): boolean
			static setItalic(attributes: any,value: boolean): any
			static getUnorderedList(attributes: Microsoft_Maui_Graphics_Text_ITextAttributes): boolean
			static setUnorderedList(attributes: any,value: boolean): any
			static getMarker(attributes: Microsoft_Maui_Graphics_Text_ITextAttributes): Microsoft_Maui_Graphics_Text_MarkerType
			static setMarker(attributes: any,value: Microsoft_Maui_Graphics_Text_MarkerType): any
			static getStrikethrough(attributes: Microsoft_Maui_Graphics_Text_ITextAttributes): boolean
			static setStrikethrough(attributes: any,value: boolean): any
			static getSuperscript(attributes: Microsoft_Maui_Graphics_Text_ITextAttributes): boolean
			static setSuperscript(attributes: any,value: boolean): any
			static getSubscript(attributes: Microsoft_Maui_Graphics_Text_ITextAttributes): boolean
			static setSubscript(attributes: any,value: boolean): any
			static getForegroundColor(attributes: Microsoft_Maui_Graphics_Text_ITextAttributes): string
			static setForegroundColor(attributes: any,value: string): any
			static getBackgroundColor(attributes: Microsoft_Maui_Graphics_Text_ITextAttributes): string
			static setBackgroundColor(attributes: any,value: string): any
			static union(first: any,second: any): Microsoft_Maui_Graphics_Text_ITextAttributes

        }


    // Microsoft.Maui.Graphics.Text.TextAttributes
    export declare class Microsoft_Maui_Graphics_Text_TextAttributes  {

        }


    // Microsoft.Maui.Graphics.Text.TextAttributesExtensions
    export declare class Microsoft_Maui_Graphics_Text_TextAttributesExtensions  {
			static getAttribute(attributes: Microsoft_Maui_Graphics_Text_ITextAttributes,type: Microsoft_Maui_Graphics_Text_TextAttribute,defaultValue: string): string
			static setAttribute(attributes: any,type: Microsoft_Maui_Graphics_Text_TextAttribute,value: string): any
			static removeAttribute(attributes: any,type: Microsoft_Maui_Graphics_Text_TextAttribute): any
			static getIntAttribute(attributes: Microsoft_Maui_Graphics_Text_ITextAttributes,type: Microsoft_Maui_Graphics_Text_TextAttribute,defaultValue: number): number
			static setIntAttribute(attributes: any,type: Microsoft_Maui_Graphics_Text_TextAttribute,value: number,defaultValue: number): any
			static getFloatAttribute(attributes: Microsoft_Maui_Graphics_Text_ITextAttributes,type: Microsoft_Maui_Graphics_Text_TextAttribute,defaultValue: number): number
			static setFloatAttribute(attributes: any,type: Microsoft_Maui_Graphics_Text_TextAttribute,value: number,defaultValue: number): any
			static getBoolAttribute(attributes: Microsoft_Maui_Graphics_Text_ITextAttributes,type: Microsoft_Maui_Graphics_Text_TextAttribute,defaultValue: boolean): boolean
			static setBoolAttribute(attributes: any,type: Microsoft_Maui_Graphics_Text_TextAttribute,value: boolean,defaultValue: boolean): any
			static getEnumAttribute(attributes: Microsoft_Maui_Graphics_Text_ITextAttributes,type: Microsoft_Maui_Graphics_Text_TextAttribute,defaultValue: any): any
			static setEnumAttribute(attributes: any,type: Microsoft_Maui_Graphics_Text_TextAttribute,value: any,defaultValue: any): any

        }


    // Microsoft.Maui.Graphics.Text.TextColors
    export declare class Microsoft_Maui_Graphics_Text_TextColors  {
			static standardColors: any
			static parse(color: string): any
			static parseAsInts(color: string): any

        }


    // Microsoft.Maui.Graphics.Text.XmlAttributedTextReader
    export declare class Microsoft_Maui_Graphics_Text_XmlAttributedTextReader  {
			read(text: string): Microsoft_Maui_Graphics_Text_IAttributedText
			read(reader: any): Microsoft_Maui_Graphics_Text_IAttributedText

        }


    // Microsoft.Maui.Graphics.Text.XmlAttributedTextWriter
    export declare class Microsoft_Maui_Graphics_Text_XmlAttributedTextWriter  {
			write(text: Microsoft_Maui_Graphics_Text_IAttributedText): string
			write(attributedText: Microsoft_Maui_Graphics_Text_IAttributedText,writer: any): any

        }


    // Microsoft.Maui.Graphics.Platform.PlatformImage
    export declare class Microsoft_Maui_Graphics_Platform_PlatformImage  {
			get bytes(): any
			get width(): number
			get height(): number
			static fromStream(stream: any,format: Microsoft_Maui_Graphics_ImageFormat): Microsoft_Maui_Graphics_IImage
			downsize(maxWidthOrHeight: number,disposeOriginal: boolean): Microsoft_Maui_Graphics_IImage
			downsize(maxWidth: number,maxHeight: number,disposeOriginal: boolean): Microsoft_Maui_Graphics_IImage
			resize(width: number,height: number,resizeMode: Microsoft_Maui_Graphics_ResizeMode,disposeOriginal: boolean): Microsoft_Maui_Graphics_IImage
			save(stream: any,format: Microsoft_Maui_Graphics_ImageFormat,quality: number): any
			saveAsync(stream: any,format: Microsoft_Maui_Graphics_ImageFormat,quality: number): any
			dispose(): any
			draw(canvas: Microsoft_Maui_Graphics_ICanvas,dirtyRect: Microsoft_Maui_Graphics_RectF): any
			toPlatformImage(): Microsoft_Maui_Graphics_IImage

        }


    // Microsoft.Maui.Graphics.Converters.ColorTypeConverter
    export declare class Microsoft_Maui_Graphics_Converters_ColorTypeConverter  {
			convertFrom(context: any,culture: any,fromValue: any): any
			convertTo(context: any,culture: any,value: any,destinationType: any): any
			getStandardValues(context: any): any
			getStandardValuesExclusive(context: any): boolean
			getStandardValuesSupported(context: any): boolean
			canConvertFrom(context: any,sourceType: any): boolean
			canConvertTo(context: any,destinationType: any): boolean

        }


    // Microsoft.Maui.Graphics.Converters.PointFTypeConverter
    export declare class Microsoft_Maui_Graphics_Converters_PointFTypeConverter  {
			canConvertFrom(context: any,sourceType: any): boolean
			canConvertTo(context: any,destinationType: any): boolean
			convertFrom(context: any,culture: any,value: any): any
			convertTo(context: any,culture: any,value: any,destinationType: any): any

        }


    // Microsoft.Maui.Graphics.Converters.PointTypeConverter
    export declare class Microsoft_Maui_Graphics_Converters_PointTypeConverter  {
			canConvertFrom(context: any,sourceType: any): boolean
			canConvertTo(context: any,destinationType: any): boolean
			convertFrom(context: any,culture: any,value: any): any
			convertTo(context: any,culture: any,value: any,destinationType: any): any

        }


    // Microsoft.Maui.Graphics.Converters.RectFTypeConverter
    export declare class Microsoft_Maui_Graphics_Converters_RectFTypeConverter  {
			canConvertFrom(context: any,sourceType: any): boolean
			canConvertTo(context: any,destinationType: any): boolean
			convertFrom(context: any,culture: any,value: any): any
			convertTo(context: any,culture: any,value: any,destinationType: any): any

        }


    // Microsoft.Maui.Graphics.Converters.RectTypeConverter
    export declare class Microsoft_Maui_Graphics_Converters_RectTypeConverter  {
			canConvertFrom(context: any,sourceType: any): boolean
			canConvertTo(context: any,destinationType: any): boolean
			convertFrom(context: any,culture: any,value: any): any
			convertTo(context: any,culture: any,value: any,destinationType: any): any

        }


    // Microsoft.Maui.Graphics.Converters.SizeFTypeConverter
    export declare class Microsoft_Maui_Graphics_Converters_SizeFTypeConverter  {
			canConvertFrom(context: any,sourceType: any): boolean
			canConvertTo(context: any,destinationType: any): boolean
			convertFrom(context: any,culture: any,value: any): any
			convertTo(context: any,culture: any,value: any,destinationType: any): any

        }


    // Microsoft.Maui.Graphics.Converters.SizeTypeConverter
    export declare class Microsoft_Maui_Graphics_Converters_SizeTypeConverter  {
			canConvertFrom(context: any,sourceType: any): boolean
			canConvertTo(context: any,destinationType: any): boolean
			convertFrom(context: any,culture: any,value: any): any
			convertTo(context: any,culture: any,value: any,destinationType: any): any

        }



export default interface IMicrosoft_Maui_Graphics {
    Microsoft: {
        Maui: {
            Graphics: {
                AbstractCanvas_1: typeof AbstractCanvas_1;
                AbstractPattern: typeof Microsoft_Maui_Graphics_AbstractPattern;
                BitmapExportContext: typeof Microsoft_Maui_Graphics_BitmapExportContext;
                BitmapExportContextExtensions: typeof Microsoft_Maui_Graphics_BitmapExportContextExtensions;
                CanvasDefaults: typeof Microsoft_Maui_Graphics_CanvasDefaults;
                CanvasExtensions: typeof Microsoft_Maui_Graphics_CanvasExtensions;
                CanvasState: typeof Microsoft_Maui_Graphics_CanvasState;
                Color: typeof Microsoft_Maui_Graphics_Color;
                Colors: typeof Microsoft_Maui_Graphics_Colors;
                FontWeights: typeof Microsoft_Maui_Graphics_FontWeights;
                Font: typeof Microsoft_Maui_Graphics_Font;
                FontSource: typeof Microsoft_Maui_Graphics_FontSource;
                GeometryUtil: typeof Microsoft_Maui_Graphics_GeometryUtil;
                GradientPaint: typeof Microsoft_Maui_Graphics_GradientPaint;
                IBitmapExportService: typeof Microsoft_Maui_Graphics_IBitmapExportService;
                IBlurrableCanvas: typeof Microsoft_Maui_Graphics_IBlurrableCanvas;
                ICanvas: typeof Microsoft_Maui_Graphics_ICanvas;
                ICanvasStateService_1: typeof ICanvasStateService_1;
                IDrawable: typeof Microsoft_Maui_Graphics_IDrawable;
                IFont: typeof Microsoft_Maui_Graphics_IFont;
                IFontExtensions: typeof Microsoft_Maui_Graphics_IFontExtensions;
                IImage: typeof Microsoft_Maui_Graphics_IImage;
                IImageLoadingService: typeof Microsoft_Maui_Graphics_IImageLoadingService;
                ImageExtensions: typeof Microsoft_Maui_Graphics_ImageExtensions;
                ImageLoadingServiceExtensions: typeof Microsoft_Maui_Graphics_ImageLoadingServiceExtensions;
                ImagePaint: typeof Microsoft_Maui_Graphics_ImagePaint;
                Insets: typeof Microsoft_Maui_Graphics_Insets;
                InsetsF: typeof Microsoft_Maui_Graphics_InsetsF;
                IPattern: typeof Microsoft_Maui_Graphics_IPattern;
                IPdfPage: typeof Microsoft_Maui_Graphics_IPdfPage;
                IPdfRenderService: typeof Microsoft_Maui_Graphics_IPdfRenderService;
                IPicture: typeof Microsoft_Maui_Graphics_IPicture;
                IPictureWriter: typeof Microsoft_Maui_Graphics_IPictureWriter;
                IPlatformFonts: typeof Microsoft_Maui_Graphics_IPlatformFonts;
                IStringSizeService: typeof Microsoft_Maui_Graphics_IStringSizeService;
                ITextAttributes: typeof Microsoft_Maui_Graphics_ITextAttributes;
                LayoutLine: typeof Microsoft_Maui_Graphics_LayoutLine;
                LinearGradientPaint: typeof Microsoft_Maui_Graphics_LinearGradientPaint;
                Paint: typeof Microsoft_Maui_Graphics_Paint;
                PaintGradientStop: typeof Microsoft_Maui_Graphics_PaintGradientStop;
                PaintPattern: typeof Microsoft_Maui_Graphics_PaintPattern;
                PathArcExtensions: typeof Microsoft_Maui_Graphics_PathArcExtensions;
                PathBuilder: typeof Microsoft_Maui_Graphics_PathBuilder;
                PathExtensions: typeof Microsoft_Maui_Graphics_PathExtensions;
                PathF: typeof Microsoft_Maui_Graphics_PathF;
                PatternExtensions: typeof Microsoft_Maui_Graphics_PatternExtensions;
                PatternPaint: typeof Microsoft_Maui_Graphics_PatternPaint;
                PdfPageExtensions: typeof Microsoft_Maui_Graphics_PdfPageExtensions;
                PictureCanvas: typeof Microsoft_Maui_Graphics_PictureCanvas;
                PictureExtensions: typeof Microsoft_Maui_Graphics_PictureExtensions;
                PicturePattern: typeof Microsoft_Maui_Graphics_PicturePattern;
                IPictureReader: typeof Microsoft_Maui_Graphics_IPictureReader;
                PictureReaderExtensions: typeof Microsoft_Maui_Graphics_PictureReaderExtensions;
                PictureWriterExtensions: typeof Microsoft_Maui_Graphics_PictureWriterExtensions;
                Point: typeof Microsoft_Maui_Graphics_Point;
                PointF: typeof Microsoft_Maui_Graphics_PointF;
                RadialGradientPaint: typeof Microsoft_Maui_Graphics_RadialGradientPaint;
                Rect: typeof Microsoft_Maui_Graphics_Rect;
                RectF: typeof Microsoft_Maui_Graphics_RectF;
                ScalingCanvas: typeof Microsoft_Maui_Graphics_ScalingCanvas;
                Size: typeof Microsoft_Maui_Graphics_Size;
                SizeF: typeof Microsoft_Maui_Graphics_SizeF;
                SolidPaint: typeof Microsoft_Maui_Graphics_SolidPaint;
                DrawingCommand: typeof Microsoft_Maui_Graphics_DrawingCommand;
                StandardPicture: typeof Microsoft_Maui_Graphics_StandardPicture;
                StandardTextAttributes: typeof Microsoft_Maui_Graphics_StandardTextAttributes;
                XmlnsPrefixAttribute: typeof Microsoft_Maui_Graphics_XmlnsPrefixAttribute;
                Text: {
                    AbstractAttributedText: typeof Microsoft_Maui_Graphics_Text_AbstractAttributedText;
                    AttributedText: typeof Microsoft_Maui_Graphics_Text_AttributedText;
                    AttributedTextBlock: typeof Microsoft_Maui_Graphics_Text_AttributedTextBlock;
                    AttributedTextExtensions: typeof Microsoft_Maui_Graphics_Text_AttributedTextExtensions;
                    AttributedTextRun: typeof Microsoft_Maui_Graphics_Text_AttributedTextRun;
                    AttributedTextRunComparer: typeof Microsoft_Maui_Graphics_Text_AttributedTextRunComparer;
                    AttributedTextRunExtensions: typeof Microsoft_Maui_Graphics_Text_AttributedTextRunExtensions;
                    CountingWriter: typeof Microsoft_Maui_Graphics_Text_CountingWriter;
                    IAttributedText: typeof Microsoft_Maui_Graphics_Text_IAttributedText;
                    IAttributedTextRun: typeof Microsoft_Maui_Graphics_Text_IAttributedTextRun;
                    ITextAttributes: typeof Microsoft_Maui_Graphics_Text_ITextAttributes;
                    MutableAttributedText: typeof Microsoft_Maui_Graphics_Text_MutableAttributedText;
                    TextAttributeExtensions: typeof Microsoft_Maui_Graphics_Text_TextAttributeExtensions;
                    TextAttributes: typeof Microsoft_Maui_Graphics_Text_TextAttributes;
                    TextAttributesExtensions: typeof Microsoft_Maui_Graphics_Text_TextAttributesExtensions;
                    TextColors: typeof Microsoft_Maui_Graphics_Text_TextColors;
                    XmlAttributedTextReader: typeof Microsoft_Maui_Graphics_Text_XmlAttributedTextReader;
                    XmlAttributedTextWriter: typeof Microsoft_Maui_Graphics_Text_XmlAttributedTextWriter;
                }
                Platform: {
                    PlatformImage: typeof Microsoft_Maui_Graphics_Platform_PlatformImage;
                }
                Converters: {
                    ColorTypeConverter: typeof Microsoft_Maui_Graphics_Converters_ColorTypeConverter;
                    PointFTypeConverter: typeof Microsoft_Maui_Graphics_Converters_PointFTypeConverter;
                    PointTypeConverter: typeof Microsoft_Maui_Graphics_Converters_PointTypeConverter;
                    RectFTypeConverter: typeof Microsoft_Maui_Graphics_Converters_RectFTypeConverter;
                    RectTypeConverter: typeof Microsoft_Maui_Graphics_Converters_RectTypeConverter;
                    SizeFTypeConverter: typeof Microsoft_Maui_Graphics_Converters_SizeFTypeConverter;
                    SizeTypeConverter: typeof Microsoft_Maui_Graphics_Converters_SizeTypeConverter;
                }
            }
        }
    }
}


