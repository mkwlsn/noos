---
title: Complete Section
slug: RGB-complete-section
source_file: plugin-api-RGB.html
source_url: 'https://www.figma.com/plugin-docs/api/RGB/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 4b852f67d45b8907
token_count: 268
chunk_title: Complete Section
chunk_slug: RGB-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: RGB.md
parent_slug: RGB
char_count: 938
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# RGB/RGBA

```
interface RGBA { // "Red" readonly r: number // "Green" readonly g: number // "Blue" readonly b: number // "Alpha" or "opacity" readonly a: number}
```Represents a full Figma color value. These values are from 0 to 1. For example black is `{r: 0, g: 0, b: 0, a: 1}` and white is `{r: 1, g: 1, b: 1, a: 1}`.

```
interface RGB { readonly r: number readonly g: number readonly b: number}
```Represents a color just like RGBA but without an alpha value. This is only used for [`SolidPaint`](/plugin-docs/api/Paint/). Colors normally have an alpha value but all paints have an opacity value so alpha was redundant for [`SolidPaint`](/plugin-docs/api/Paint/).

Figma supports [color management](https://help.figma.com/hc/en-us/articles/360039825114). All colors are specified in the same color space which will be the color profile of the document, [`documentColorProfile`](/plugin-docs/api/DocumentNode/#documentcolorprofile).
