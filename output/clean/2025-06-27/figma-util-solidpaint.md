---
title: solidPaint
slug: figma-util-solidpaint
source_file: plugin-api-figma-util-solidpaint.html
source_url: https://www.figma.com/plugin-docs/api/figma-util-solidpaint/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 87c121f5f21d980c
token_count: 417
---
# solidPaint

Creates a `SolidPaint` object, assigning color and opacity from a variety of common color encodings.

Accepted color formats include CSS color strings with hex, `rgb()`, `hsl()`, or `lab()` encodings, as well as `RGB` and `RGBA` objects. The resulting alpha value will be applied to the `SolidPaint`'s `opacity` property, which defaults to 1 (opaque) if not specified. If a string encoding cannot be parsed, an error will be thrown.

Optionally, you can provide a set of overrides for any of the non-color properties of the `SolidPaint` object. This is useful for modifying the color of an existing `SolidPaint` while preserving its other properties.

Examples:

```
// Set the current page background to redfigma.currentPage.backgrounds = [figma.util.solidPaint("#FF0000")]// Modify an existing SolidPaint with new color and opacityif (node.fills[0].type === 'SOLID') { const updated = figma.util.solidPaint('#FF00FF88', node.fills[0])}
```You can alias this function for more concise code:

```
const solidPaint = figma.util.solidPaint// Set the current page background to redfigma.currentPage.backgrounds = [solidPaint("#FF0000")]// Modify an existing SolidPaint with new color and opacityif (node.fills[0].type === 'SOLID') { const updated = solidPaint('#FF00FF88', node.fills[0])}
```

## Signature

### solidPaint(color: string | RGB | RGBA, overrides?: Partial): SolidPaint

## Parameters

### color

A CSS color string, `RGB` object, or `RGBA` object.

### overrides

An optional object that allows you to specify additional `SolidPaint` properties, aside from color. This is useful for modifying the color of a pre-existing `SolidPaint` object.