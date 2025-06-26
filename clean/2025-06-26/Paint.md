---
title: Paint
slug: Paint
source_file: plugin-api-Paint.html
source_url: https://www.figma.com/plugin-docs/api/Paint/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 64a9823f2bf0d115
token_count: 1518
---
# Paint

Figma has five types of paints: solid colors, gradients, images, videos, and patterns (in beta).

```
type Paint = | SolidPaint | GradientPaint | ImagePaint | VideoPaint | PatternPaint
```## Common properties

### visible?: boolean [readonly]

Whether the paint is visible. Defaults to true.

### opacity?: number [readonly]

The opacity of the paint. Must be a value between 0 and 1. Defaults to 1.

You can use the [`solidPaint`](/plugin-docs/api/properties/figma-util-solidpaint/) utility function to set both `color` and `opacity` using CSS color strings:

```
// Create a new SolidPaintconst paint = figma.util.solidPaint('#FF00FF88')// Modify an existing SolidPaintif (node.fills[0].type === 'SOLID') { const updated = figma.util.solidPaint('#FF00FF88', node.fills[0])}
```### blendMode?: BlendMode [readonly]

Determines how the color of this paint blends with the colors underneath it. Defaults to "NORMAL".

## SolidPaint

### type: 'SOLID' [readonly]

The string literal "SOLID" representing the type of paint this is. Always check the `type` before reading other properties.

### color: RGB [readonly]

The color of the paint. This does not have a alpha property, use `opacity` instead.

You can use the [`solidPaint`](/plugin-docs/api/properties/figma-util-solidpaint/) utility function to set both `color` and `opacity` using CSS color strings:

```
// Create a new SolidPaintconst paint = figma.util.solidPaint('#FF00FF88')// Modify an existing SolidPaintif (node.fills[0].type === 'SOLID') { const updated = figma.util.solidPaint('#FF00FF88', node.fills[0])}
```### boundVariables?: { [field in VariableBindablePaintField]?: VariableAlias} [readonly]

The variables bound to a particular field on this paint

## GradientPaint

### type: 'GRADIENT_LINEAR' | 'GRADIENT_RADIAL' | 'GRADIENT_ANGULAR' | 'GRADIENT_DIAMOND' [readonly]

The string literal representing the type of paint this is. Always check the `type` before reading other properties.

### gradientTransform: Transform [readonly]

The positioning of the gradient within the layer.

### gradientStops: ReadonlyArray [readonly]

Array of colors and their position within the gradient.

## ImagePaint

This is where you'll find images in Figma, as there are no image nodes. See this [example of working with images](/plugin-docs/working-with-images/).

### type: 'IMAGE' [readonly]

The string literal "IMAGE" representing the type of paint this is. Always check the `type` before reading other properties.

### scaleMode: 'FILL' | 'FIT' | 'CROP' | 'TILE' [readonly]

How the image is positioned and scaled within the layer. Same as in the properties panel.

### imageHash: string | null [readonly]

The hash (id) of the image used for this paint, if any. Use [`figma.getImageByHash`](/plugin-docs/api/figma/#getimagebyhash) to get the corresponding image object.

### imageTransform?: Transform [readonly]

Applicable only for `scaleMode == "CROP"`. Determines how the image is positioned (thus, cropped) within the layer.

### scalingFactor?: number [readonly]

Applicable only for `scaleMode == "TILE"` (automatic for other modes). Determines the scaling (thus, repetition) of the image within the layer.

### rotation?: number [readonly]

Applicable only for `scaleMode == "TILE" | "FILL" | "FIT"` (automatic for `scaleMode == "CROP"`). Determines the rotation of the image within the layer. Must be in increments of +90.

### filters?: ImageFilters [readonly]

The values for the image filter slides, equivalent to those in the paint picker. All values default to 0.0 and have range -1.0 to +1.0.

## ImageFilters

```
interface ImageFilters { exposure?: number contrast?: number saturation?: number temperature?: number tint?: number highlights?: number shadows?: number}
```## ColorStop

```
interface ColorStop { readonly position: number readonly color: RGBA readonly boundVariables?: { [field in VariableBindableColorStopField]?: VariableAlias }}
```### position: number [readonly]

The position of the stop along the gradient between 0 and 1

### color: RGBA [readonly]

The color value of the gradient stop

### boundVariables?: { [field in VariableBindableColorStopField]?: VariableAlias} [readonly]

The variable bound to a gradient stop

## VideoPaint

### type: 'VIDEO' [readonly]

The string literal "VIDEO" representing the type of paint this is. Always check the `type` before reading other properties.

### scaleMode: 'FILL' | 'FIT' | 'CROP' | 'TILE' [readonly]

How the image is positioned and scaled within the layer. Same as in the properties panel.

### videoHash: string | null [readonly]

The hash (id) of the video used for this paint, if any.

### videoTransform?: Transform [readonly]

Applicable only for `scaleMode == "CROP"`. Determines how the video is positioned (thus, cropped) within the layer.

### scalingFactor?: number [readonly]

Applicable only for `scaleMode == "TILE"` (automatic for other modes). Determines the scaling (thus, repetition) of the video within the layer.

### rotation?: number [readonly]

Applicable only for `scaleMode == "TILE" | "FILL" | "FIT"` (automatic for `scaleMode == "CROP"`). Determines the rotation of the video within the layer. Must be in increments of +90.

### filters?: ImageFilters [readonly]

The values for the video filter slides, equivalent to those in the paint picker. All values default to 0.0 and have range -1.0 to +1.0.

## PatternPaint

Pattern paints are available in beta, and the API is subject to change.

### type: 'PATTERN' [readonly]

The string literal representing the type of paint this is. Always check the `type` before reading other properties.

### sourceNodeId: string [readonly]

The node id of the source node for the pattern

### tileType: 'RECTANGULAR' | 'HORIZONTAL_HEXAGONAL' | 'VERTICAL_HEXAGONAL' [readonly]

The way the pattern is tiled

### scalingFactor: number [readonly]

The scaling factor of the pattern

### spacing: Vector [readonly]

The spacing of the pattern

### horizontalAlignment: 'START' | 'CENTER' | 'END' [readonly]

The horizontal alignment of the pattern