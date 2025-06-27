---
title: RGB/RGBA
slug: RGB
source_file: plugin-api-RGB.html
source_url: https://www.figma.com/plugin-docs/api/RGB/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: dea0edbbeaae1d7c
token_count: 236
---
# RGB/RGBA

```
interface RGBA { // "Red" readonly r: number // "Green" readonly g: number // "Blue" readonly b: number // "Alpha" or "opacity" readonly a: number}
```Represents a full Figma color value. These values are from 0 to 1. For example black is `{r: 0, g: 0, b: 0, a: 1}` and white is `{r: 1, g: 1, b: 1, a: 1}`.

```
interface RGB { readonly r: number readonly g: number readonly b: number}
```Represents a color just like RGBA but without an alpha value. This is only used for [`SolidPaint`](/plugin-docs/api/Paint/)
. Colors normally have an alpha value but all paints have an opacity value so alpha was redundant for [`SolidPaint`](/plugin-docs/api/Paint/)
.

Figma supports [color management](https://help.figma.com/hc/en-us/articles/360039825114)
. All colors are specified in the same color space which will be the color profile of the document, [`documentColorProfile`](/plugin-docs/api/DocumentNode/#documentcolorprofile)
.