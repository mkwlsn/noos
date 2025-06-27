---
title: createSlide
slug: figma-createslide
source_file: plugin-api-figma-createslide.html
source_url: https://www.figma.com/plugin-docs/api/figma-createslide/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: f59aa448bbe847ba
token_count: 119
---
# createSlide

##### info

This API is only available in Figma Slides

## Signature

### createSlide(row?: number, col?: number): SlideNode

## Remarks

By default, the slide gets appended to the end of the presentation (the last child in the last Slide Row).

Create a slide```
const slide = figma.createSlide()
```To specify a position in the Slide Grid, pass a row and column index to the function.

Create a slide at index 0, 0```
const slide = figma.createSlide(0, 0)
```