---
title: LayoutGrid
slug: LayoutGrid
source_file: plugin-api-LayoutGrid.html
source_url: https://www.figma.com/plugin-docs/api/LayoutGrid/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: bc3a72b4a36954ee
token_count: 388
---
# LayoutGrid

Figma has two types of grids: uniform grids and regular (row or column) based grids.

```
type LayoutGrid = RowsColsLayoutGrid | GridLayoutGrid
```

## Common properties

### visible?: boolean [readonly]

Whether the layout grid is visible. Defaults to true.

### color?: RGBA [readonly]

The color of the layout grid.

## RowsColsLayoutGrid

### pattern: 'ROWS' | 'COLUMNS' [readonly]

The string literal representing the layout grid this is. Always check the `pattern` before reading other properties.

### alignment: 'MIN' | 'MAX' | 'STRETCH' | 'CENTER' [readonly]

How the layout grid is aligned. "MIN" corresponds to "Left" or "Top" in the UI depending on the orientation of the layout grid. "MAX" corresponds to "Right" or "Bottom".

### gutterSize: number [readonly]

The distance between the sections of the grid.

### count: number [readonly]

The number of sections. This can be set to the value `Infinity`, which corresponds to "Auto" in the UI.

### sectionSize?: number [readonly]

The size of a section. This is ignored when `alignment == "STRETCH"` since the size is set automatically.

### offset?: number [readonly]

The distance between the layout grid sections and the edges of the frame. This is ignored when `alignment == "CENTER"` since the size is set automatically.

## GridLayoutGrid

### pattern: 'GRID' [readonly]

The string literal "GRID" representing the layout grid this is. Always check the `pattern` before reading other properties.

### sectionSize: number [readonly]

The size of individual grid cells.