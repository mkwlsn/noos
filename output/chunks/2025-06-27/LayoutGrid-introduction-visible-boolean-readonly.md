---
title: 'Introduction + visible?: boolean [readonly]'
slug: LayoutGrid-introduction-visible-boolean-readonly
source_file: plugin-api-LayoutGrid.html
source_url: 'https://www.figma.com/plugin-docs/api/LayoutGrid/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 24e322674e987f40
token_count: 68
chunk_title: 'Introduction + visible?: boolean [readonly]'
chunk_slug: LayoutGrid-introduction-visible-boolean-readonly
chunk_index: 0
chunk_of_total: 4
parent_file: LayoutGrid.md
parent_slug: LayoutGrid
char_count: 238
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - LayoutGrid-alignment-min-max-stretch-center-readonl
  - LayoutGrid-count-number-readonly-sectionsize-number
  - LayoutGrid-offset-number-readonly-pattern-grid-read
merged_titles:
  - Introduction
  - 'visible?: boolean [readonly]'
compiler: noos-figma
---

# LayoutGrid

Figma has two types of grids: uniform grids and regular (row or column) based grids.

```
type LayoutGrid = RowsColsLayoutGrid | GridLayoutGrid
```

## Common properties

Whether the layout grid is visible. Defaults to true.
