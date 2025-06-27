---
title: figma.util
slug: figma-util
source_file: plugin-api-figma-util.html
source_url: https://www.figma.com/plugin-docs/api/figma-util/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: da2d54d449324fe1
token_count: 877
---
# figma.util

The `figma.util` global object provides a set of convenience functions for common operations.

### rgb(color: string | RGB | RGBA): RGB

Creates an `RGB` color object from a variety of common color encodings.

Note: since `RGB` colors are primarily used for creating `SolidPaint` objects, you might want to use [`solidPaint`](/plugin-docs/api/properties/figma-util-solidpaint/)
 instead.

Accepted color formats include CSS color strings with hex, `rgb()`, `hsl()`, or `lab()` encodings, as well as `RGB` and `RGBA` objects. Alpha values in the input will be ignored. If a string encoding cannot be parsed, an error will be thrown.

Examples:

```
const color1 = figma.util.rgb('#FF00FF')const color2 = figma.util.rgb('hsl(25% 50% 75%)')
```You can alias this function for more concise code:

```
const rgb = figma.util.rgbconst color = rgb('#FF00FF')
```[View more →](/plugin-docs/api/properties/figma-util-rgb/)

### rgba(color: string | RGB | RGBA): RGBA

Creates an `RGBA` color object from a variety of common color encodings.

Accepted color formats include CSS color strings with hex, `rgb()`, `hsl()`, or `lab()` encodings, as well as `RGB` and `RGBA` objects. Alpha defaults to 1 (opaque) if not provided in the input. If a string encoding cannot be parsed, an error will be thrown.

Examples:

```
const layoutGrid = { pattern: 'GRID', sectionSize: 1, color: figma.util.rgba('rgb(25% 25% 25% / 0.5)')}
```You can alias this function for more concise code:

```
const rgba = figma.util.rgbaconst color = rgba('rgb(25% 25% 25% / 0.5)')
```[View more →](/plugin-docs/api/properties/figma-util-rgba/)

### solidPaint(color: string | RGB | RGBA, overrides?: Partial): SolidPaint

Creates a `SolidPaint` object, assigning color and opacity from a variety of common color encodings.

Accepted color formats include CSS color strings with hex, `rgb()`, `hsl()`, or `lab()` encodings, as well as `RGB` and `RGBA` objects. The resulting alpha value will be applied to the `SolidPaint`'s `opacity` property, which defaults to 1 (opaque) if not specified. If a string encoding cannot be parsed, an error will be thrown.

Optionally, you can provide a set of overrides for any of the non-color properties of the `SolidPaint` object. This is useful for modifying the color of an existing `SolidPaint` while preserving its other properties.

Examples:

```
// Set the current page background to redfigma.currentPage.backgrounds = [figma.util.solidPaint("#FF0000")]// Modify an existing SolidPaint with new color and opacityif (node.fills[0].type === 'SOLID') { const updated = figma.util.solidPaint('#FF00FF88', node.fills[0])}
```You can alias this function for more concise code:

```
const solidPaint = figma.util.solidPaint// Set the current page background to redfigma.currentPage.backgrounds = [solidPaint("#FF0000")]// Modify an existing SolidPaint with new color and opacityif (node.fills[0].type === 'SOLID') { const updated = solidPaint('#FF00FF88', node.fills[0])}
```[View more →](/plugin-docs/api/properties/figma-util-solidpaint/)

### normalizeMarkdown(markdown: string): string

Normalizes the markdown string to verify what markdown will render with Figma's rich-text editors.

Examples:

```
const md = "# Hello, world!\n\nThis is a **bold** text."const normalizedMd = figma.util.normalizeMarkdown(md);// Set an component description with descriptionMarkdowncomponent.descriptionMarkdown = normalizedMd;
```[View more →](/plugin-docs/api/properties/figma-util-normalizemarkdown/)