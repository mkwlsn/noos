---
title: 'getVariableCollectionById(id: string): VariableCollection | null'
slug: figma-variables-getvariablecollectionbyidid-string-varia
source_file: plugin-api-figma-variables.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-variables/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 3e565cbcda8d29c9
token_count: 122
chunk_title: 'getVariableCollectionById(id: string): VariableCollection | null'
chunk_slug: figma-variables-getvariablecollectionbyidid-string-varia
chunk_index: 3
chunk_of_total: 10
parent_file: figma-variables.md
parent_slug: figma-variables
char_count: 426
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-variables-introduction
  - figma-variables-getvariablebyidasyncid-string-promise-ge
  - figma-variables-getvariablecollectionbyidasyncid-string-
  - figma-variables-getlocalvariablesasynctype-variableresol
  - figma-variables-getlocalvariablecollectionsasync-promise
  - figma-variables-createvariablename-string-collection-var
  - figma-variables-createvariablealiasvariable-variable-var
  - figma-variables-setboundvariableforpaintpaint-solidpaint
  - figma-variables-setboundvariableforlayoutgridlayoutgrid-
compiler: noos-figma
---

DEPRECATED: Use [`getVariableCollectionByIdAsync`](/plugin-docs/api/properties/figma-variables-getvariablecollectionbyidasync/)
 instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Finds a variable collection by ID. If not found or the provided ID is invalid, returns `null`.

[View more →](/plugin-docs/api/properties/figma-variables-getvariablecollectionbyid/)
