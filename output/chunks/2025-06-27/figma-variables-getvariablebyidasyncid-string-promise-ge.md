---
title: >-
  getVariableByIdAsync(id: string): Promise + getVariableById(id: string):
  Variable | null
slug: figma-variables-getvariablebyidasyncid-string-promise-ge
source_file: plugin-api-figma-variables.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-variables/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: fc0a0e89c819a01d
token_count: 164
chunk_title: >-
  getVariableByIdAsync(id: string): Promise + getVariableById(id: string):
  Variable | null
chunk_slug: figma-variables-getvariablebyidasyncid-string-promise-ge
chunk_index: 1
chunk_of_total: 10
parent_file: figma-variables.md
parent_slug: figma-variables
char_count: 573
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-variables-introduction
  - figma-variables-getvariablecollectionbyidasyncid-string-
  - figma-variables-getvariablecollectionbyidid-string-varia
  - figma-variables-getlocalvariablesasynctype-variableresol
  - figma-variables-getlocalvariablecollectionsasync-promise
  - figma-variables-createvariablename-string-collection-var
  - figma-variables-createvariablealiasvariable-variable-var
  - figma-variables-setboundvariableforpaintpaint-solidpaint
  - figma-variables-setboundvariableforlayoutgridlayoutgrid-
merged_titles:
  - 'getVariableByIdAsync(id: string): Promise'
  - 'getVariableById(id: string): Variable | null'
compiler: noos-figma
---

Finds a variable by ID. If not found or the provided ID is invalid, returns a promise containing `null`.

[View more →](/plugin-docs/api/properties/figma-variables-getvariablebyidasync/)

DEPRECATED: Use [`getVariableByIdAsync`](/plugin-docs/api/properties/figma-variables-getvariablebyidasync/)
 instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Finds a variable by ID. If not found or the provided ID is invalid, returns `null`.

[View more →](/plugin-docs/api/properties/figma-variables-getvariablebyid/)
