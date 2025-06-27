---
title: figma.teamLibrary
slug: figma-teamlibrary
source_file: plugin-api-figma-teamlibrary.html
source_url: https://www.figma.com/plugin-docs/api/figma-teamlibrary/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: f786a464607b32b1
token_count: 407
---
# figma.teamLibrary

The TeamLibrary API is designed to work with library files and assets enabled for the current file. These libraries must be enabled manually via the UI, see [Manage libraries in design files](https://help.figma.com/hc/en-us/articles/1500008731201-Manage-libraries-in-design-files) for more info.

##### warning

`teamlibrary` must be specified in the permissions array in `manifest.json` to access this property.

```
{ "permissions": ["teamlibrary"]}
```If your manifest doesn't contain these fields, the teamLibrary API methods described below will throw errors if you try to use them.

### getAvailableLibraryVariableCollectionsAsync(): Promise

Returns a descriptor of all [`VariableCollection`](/plugin-docs/api/VariableCollection/)s that exist in the enabled libraries of the current file. Rejects if the request fails.

##### info

This requires that users enable libraries that contain variables via the UI. Currently it is not possible to enable libraries via the Plugin API.

[View more →](/plugin-docs/api/properties/figma-teamlibrary-getavailablelibraryvariablecollectionsasync/)### getVariablesInLibraryCollectionAsync(libraryCollectionKey: string): Promise

Returns a descriptor of all [`Variable`](/plugin-docs/api/Variable/)s that exist in a given [`LibraryVariableCollection`](/plugin-docs/api/LibraryVariableCollection/).
Rejects if the given variable collection does not exist, or if the current user
does not have access to that variable collection's library, or if the request fails.

[View more →](/plugin-docs/api/properties/figma-teamlibrary-getvariablesinlibrarycollectionasync/)