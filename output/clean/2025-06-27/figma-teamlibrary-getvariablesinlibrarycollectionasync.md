---
title: getVariablesInLibraryCollectionAsync
slug: figma-teamlibrary-getvariablesinlibrarycollectionasync
source_file: plugin-api-figma-teamlibrary-getvariablesinlibrarycollectionasync.html
source_url: https://www.figma.com/plugin-docs/api/figma-teamlibrary-getvariablesinlibrarycollectionasync/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 0970bb3d923cebc1
token_count: 321
---
# getVariablesInLibraryCollectionAsync

Returns a descriptor of all [`Variable`](/plugin-docs/api/Variable/)
s that exist in a given [`LibraryVariableCollection`](/plugin-docs/api/LibraryVariableCollection/)
.
Rejects if the given variable collection does not exist, or if the current user
does not have access to that variable collection's library, or if the request fails.

## Signature

### getVariablesInLibraryCollectionAsync(libraryCollectionKey: string): Promise

## Parameters

### libraryCollectionKey

the key of the library variable collection that contains the returned library variables.

## Example usage

Example usage of getVariablesInLibraryCollectionAsync```
// Query all published collections from libraries enabled for this fileconst libraryCollections = await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync()// Select a library variable collection to import into this fileconst variablesInFirstLibrary = await figma.teamLibrary.getVariablesInLibraryCollectionAsync(libraryCollections[0].key)// Import the first number variable we find in that collectionconst variableToImport = variablesInFirstLibrary.find((libVar) => libVar.resolvedType === 'FLOAT')const importedVariable = await figma.variables.importVariableByKeyAsync(variableToImport.key)
```