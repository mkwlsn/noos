---
title: Introduction
slug: figma-teamlibrary-introduction
source_file: plugin-api-figma-teamlibrary.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-teamlibrary/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 9967fea048622771
token_count: 174
chunk_title: Introduction
chunk_slug: figma-teamlibrary-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: figma-teamlibrary.md
parent_slug: figma-teamlibrary
char_count: 608
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-teamlibrary-getavailablelibraryvariablecollectionsas
compiler: noos-figma
---

# figma.teamLibrary

The TeamLibrary API is designed to work with library files and assets enabled for the current file. These libraries must be enabled manually via the UI, see [Manage libraries in design files](https://help.figma.com/hc/en-us/articles/1500008731201-Manage-libraries-in-design-files) for more info.

##### warning

`teamlibrary` must be specified in the permissions array in `manifest.json` to access this property.

```
{ "permissions": ["teamlibrary"]}
```If your manifest doesn't contain these fields, the teamLibrary API methods described below will throw errors if you try to use them.
