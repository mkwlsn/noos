---
title: >-
  setBoundVariableForLayoutGrid(layoutGrid: LayoutGrid, field:
  VariableBindableLayoutGridField, variable: Variable | null): LayoutGrid +
  importVariableByKeyAsync(key: string): Promise
slug: figma-variables-setboundvariableforlayoutgridlayoutgrid-
source_file: plugin-api-figma-variables.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-variables/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 36cd0ef23e432a92
token_count: 115
chunk_title: >-
  setBoundVariableForLayoutGrid(layoutGrid: LayoutGrid, field:
  VariableBindableLayoutGridField, variable: Variable | null): LayoutGrid +
  importVariableByKeyAsync(key: string): Promise
chunk_slug: figma-variables-setboundvariableforlayoutgridlayoutgrid-
chunk_index: 9
chunk_of_total: 10
parent_file: figma-variables.md
parent_slug: figma-variables
char_count: 402
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-variables-introduction
  - figma-variables-getvariablebyidasyncid-string-promise-ge
  - figma-variables-getvariablecollectionbyidasyncid-string-
  - figma-variables-getvariablecollectionbyidid-string-varia
  - figma-variables-getlocalvariablesasynctype-variableresol
  - figma-variables-getlocalvariablecollectionsasync-promise
  - figma-variables-createvariablename-string-collection-var
  - figma-variables-createvariablealiasvariable-variable-var
  - figma-variables-setboundvariableforpaintpaint-solidpaint
merged_titles:
  - >-
    setBoundVariableForLayoutGrid(layoutGrid: LayoutGrid, field:
    VariableBindableLayoutGridField, variable: Variable | null): LayoutGrid
  - 'importVariableByKeyAsync(key: string): Promise'
compiler: noos-figma
---

Helper function to bind a variable to a [`LayoutGrid`](/plugin-docs/api/LayoutGrid/)
.

If `null` is provided as the `variable`, the given `field` will be unbound from any variables.

Loads a variable from the team library. Promise is rejected if there is
no published variable with that key or if the request fails.

[View more →](/plugin-docs/api/properties/figma-variables-importvariablebykeyasync/)
