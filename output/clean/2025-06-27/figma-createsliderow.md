---
title: createSlideRow
slug: figma-createsliderow
source_file: plugin-api-figma-createsliderow.html
source_url: https://www.figma.com/plugin-docs/api/figma-createsliderow/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 194ba72c55f690b8
token_count: 128
---
# createSlideRow

##### info

This API is only available in Figma Slides

Creates a new Slide Row, which automatically gets appended to the Slide Grid.

## Signature

### createSlideRow(row?: number): SlideRowNode

## Remarks

By default, the row gets appended to the end of the Slide Grid.

Create a slide row```
const slideRow = figma.createSlideRow()
```To specify a position in the Slide Grid, pass a row index to the function.

Create a slide row at index 0```
const slideRow = figma.createSlideRow(0)
```