---
title: 'offset?: number [readonly] + pattern: ''GRID'' [readonly]'
slug: LayoutGrid-offset-number-readonly-pattern-grid-read
source_file: plugin-api-LayoutGrid.html
source_url: 'https://www.figma.com/plugin-docs/api/LayoutGrid/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 6040cf9bd092c465
token_count: 86
chunk_title: 'offset?: number [readonly] + pattern: ''GRID'' [readonly]'
chunk_slug: LayoutGrid-offset-number-readonly-pattern-grid-read
chunk_index: 3
chunk_of_total: 4
parent_file: LayoutGrid.md
parent_slug: LayoutGrid
char_count: 299
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - LayoutGrid-introduction-visible-boolean-readonly
  - LayoutGrid-alignment-min-max-stretch-center-readonl
  - LayoutGrid-count-number-readonly-sectionsize-number
merged_titles:
  - 'offset?: number [readonly]'
  - 'pattern: ''GRID'' [readonly]'
compiler: noos-figma
---

The distance between the layout grid sections and the edges of the frame. This is ignored when `alignment == "CENTER"` since the size is set automatically.

## GridLayoutGrid

The string literal "GRID" representing the layout grid this is. Always check the `pattern` before reading other properties.
