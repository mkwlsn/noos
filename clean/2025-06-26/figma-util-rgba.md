---
title: rgba
slug: figma-util-rgba
source_file: plugin-api-figma-util-rgba.html
source_url: https://www.figma.com/plugin-docs/api/figma-util-rgba/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 4acef9a6c5e52e01
token_count: 183
---
# rgba

Creates an `RGBA` color object from a variety of common color encodings.

Accepted color formats include CSS color strings with hex, `rgb()`, `hsl()`, or `lab()` encodings, as well as `RGB` and `RGBA` objects. Alpha defaults to 1 (opaque) if not provided in the input. If a string encoding cannot be parsed, an error will be thrown.

Examples:

```
const layoutGrid = { pattern: 'GRID', sectionSize: 1, color: figma.util.rgba('rgb(25% 25% 25% / 0.5)')}
```You can alias this function for more concise code:

```
const rgba = figma.util.rgbaconst color = rgba('rgb(25% 25% 25% / 0.5)')
```## Signature

### rgba(color: string | RGB | RGBA): RGBA

## Parameters

### color

A CSS color string, `RGB` object, or `RGBA` object.