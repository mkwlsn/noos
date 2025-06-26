---
title: getAvailableLibraryVariableCollectionsAsync
slug: figma-teamlibrary-getavailablelibraryvariablecollectionsasync
source_file: plugin-api-figma-teamlibrary-getavailablelibraryvariablecollectionsasync.html
source_url: https://www.figma.com/plugin-docs/api/figma-teamlibrary-getavailablelibraryvariablecollectionsasync/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 52ae57a1d8dac670
token_count: 161
---
# getAvailableLibraryVariableCollectionsAsync

Returns a descriptor of all [`VariableCollection`](/plugin-docs/api/VariableCollection/)s that exist in the enabled libraries of the current file. Rejects if the request fails.

##### info

This requires that users enable libraries that contain variables via the UI. Currently it is not possible to enable libraries via the Plugin API.

## Signature

### getAvailableLibraryVariableCollectionsAsync(): Promise

## Remarks

This is intended to be used in conjunction with [`getVariablesInLibraryCollectionAsync`](/plugin-docs/api/properties/figma-teamlibrary-getvariablesinlibrarycollectionasync/)