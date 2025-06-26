---
title: rgb
slug: figma-util-rgb
source_file: plugin-api-figma-util-rgb.html
source_url: https://www.figma.com/plugin-docs/api/figma-util-rgb/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: c64a41c673f3344b
token_count: 229
---
# rgb

Creates an `RGB` color object from a variety of common color encodings.

Note: since `RGB` colors are primarily used for creating `SolidPaint` objects, you might want to use [`solidPaint`](/plugin-docs/api/properties/figma-util-solidpaint/) instead.

Accepted color formats include CSS color strings with hex, `rgb()`, `hsl()`, or `lab()` encodings, as well as `RGB` and `RGBA` objects. Alpha values in the input will be ignored. If a string encoding cannot be parsed, an error will be thrown.

Examples:

```
const color1 = figma.util.rgb('#FF00FF')const color2 = figma.util.rgb('hsl(25% 50% 75%)')
```You can alias this function for more concise code:

```
const rgb = figma.util.rgbconst color = rgb('#FF00FF')
```## Signature

### rgb(color: string | RGB | RGBA): RGB

## Parameters

### color

A CSS color string, `RGB` object, or `RGBA` object. The input color's alpha value, if any, will be ignored.