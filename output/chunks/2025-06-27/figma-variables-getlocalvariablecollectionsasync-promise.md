---
title: >-
  getLocalVariableCollectionsAsync(): Promise + getLocalVariableCollections():
  VariableCollection[]
slug: figma-variables-getlocalvariablecollectionsasync-promise
source_file: plugin-api-figma-variables.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-variables/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 63981d6f00524c21
token_count: 103
chunk_title: >-
  getLocalVariableCollectionsAsync(): Promise + getLocalVariableCollections():
  VariableCollection[]
chunk_slug: figma-variables-getlocalvariablecollectionsasync-promise
chunk_index: 5
chunk_of_total: 10
parent_file: figma-variables.md
parent_slug: figma-variables
char_count: 358
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - figma-variables-introduction
  - figma-variables-getvariablebyidasyncid-string-promise-ge
  - figma-variables-getvariablecollectionbyidasyncid-string-
  - figma-variables-getvariablecollectionbyidid-string-varia
  - figma-variables-getlocalvariablesasynctype-variableresol
  - figma-variables-createvariablename-string-collection-var
  - figma-variables-createvariablealiasvariable-variable-var
  - figma-variables-setboundvariableforpaintpaint-solidpaint
  - figma-variables-setboundvariableforlayoutgridlayoutgrid-
merged_titles:
  - 'getLocalVariableCollectionsAsync(): Promise'
  - 'getLocalVariableCollections(): VariableCollection[]'
compiler: noos-figma
---

Returns all local variable collections in the current file.

DEPRECATED: Use [`getLocalVariableCollectionsAsync`](/plugin-docs/api/figma-variables/#getlocalvariablecollectionsasync)
 instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Returns all local variable collections in the current file.
