---
title: setSlideGrid
slug: figma-setslidegrid
source_file: plugin-api-figma-setslidegrid.html
source_url: https://www.figma.com/plugin-docs/api/figma-setslidegrid/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 83cb22edd993267a
token_count: 178
---
# setSlideGrid

##### info

This API is only available in Figma Slides

## Signature

### setSlideGrid(slideGrid: Array>): void

## Remarks

The order of Slides within a presentation is a key part of updating and editing a deck.
Using this method you can manipulate and reorder the grid.

For example:

```
const grid = figma.getSlideGrid()const [firstRow, ...rest] = grid// move the first row to the endfigma.setSlideGrid([...rest, firstRow])
```So long as all the Slides in the current grid are passed back to `setSlideGrid` the update will succeed.
Meaning, you can change the amount of rows as you please - flatten all to one row, explode to many rows, etc, and the method will handle all updates for you.