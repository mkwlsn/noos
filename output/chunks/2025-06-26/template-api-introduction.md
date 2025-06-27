---
title: Introduction
slug: template-api-introduction
source_file: code-connect-template-api.html
source_url: 'https://www.figma.com/code-connect-docs/template-api/'
doc_type: code-connect
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: ee3049a5dde5b6b6
token_count: 234
chunk_title: Introduction
chunk_slug: template-api-introduction
chunk_index: 0
chunk_of_total: 6
parent_file: template-api.md
parent_slug: template-api
char_count: 819
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - template-api-figmaproperties-properties
  - template-api-methods
  - template-api-booleanpropertyname-string-options-recor
  - template-api-stringpropertyname-string-string-instanc
  - template-api-instanceinstanceswapprop-string-instance
compiler: noos-figma
---

# Template API

This reference describes the Code Connect Template API.

## `figma`

This the core object for retrieving data and can be accessed in your file with

```
const figma = require('figma')
```### `figma.code`

This function wraps the code to be rendered in the Code Connect Panel. Note the different format if you would like to pass prop data.

```
export default figma.code`${code}`// format used for passing metadata e.g. making instance prop data availableexport default { ...figma.code`${code}`, metadata: { __props } }\n`
```### `figma.currentLayer: InstanceHandle`

The `currentLayer` object represents the currently selected layer in the Figma document. This [InstanceHandle](#instancehandle-object) provides access to various properties and methods that allow you to interact with the selected layer.
