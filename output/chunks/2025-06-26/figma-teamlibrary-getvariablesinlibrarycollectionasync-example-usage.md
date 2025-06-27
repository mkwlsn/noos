---
title: Example usage
slug: figma-teamlibrary-getvariablesinlibrarycollectionasync-example-usage
source_file: plugin-api-figma-teamlibrary-getvariablesinlibrarycollectionasync.html
source_url: >-
  https://www.figma.com/plugin-docs/api/figma-teamlibrary-getvariablesinlibrarycollectionasync/
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 27a4953dd15d4fcb
token_count: 190
chunk_title: Example usage
chunk_slug: figma-teamlibrary-getvariablesinlibrarycollectionasync-example-usage
chunk_index: 1
chunk_of_total: 2
parent_file: figma-teamlibrary-getvariablesinlibrarycollectionasync.md
parent_slug: figma-teamlibrary-getvariablesinlibrarycollectionasync
char_count: 664
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-teamlibrary-getvariablesinlibrarycollectionasync-introduction
compiler: noos-figma
---

Example usage of getVariablesInLibraryCollectionAsync```
// Query all published collections from libraries enabled for this fileconst libraryCollections = await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync()// Select a library variable collection to import into this fileconst variablesInFirstLibrary = await figma.teamLibrary.getVariablesInLibraryCollectionAsync(libraryCollections[0].key)// Import the first number variable we find in that collectionconst variableToImport = variablesInFirstLibrary.find((libVar) => libVar.resolvedType === 'FLOAT')const importedVariable = await figma.variables.importVariableByKeyAsync(variableToImport.key)
```
