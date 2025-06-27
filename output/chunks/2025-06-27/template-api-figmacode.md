---
title: `figma.code`
slug: template-api-figmacode
source_file: code-connect-template-api.html
source_url: https://www.figma.com/code-connect-docs/template-api/
doc_type: code-connect
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 4419b87c61932171
token_count: 92
chunk_title: `figma.code`
chunk_slug: template-api-figmacode
chunk_index: 1
chunk_of_total: 9
parent_file: template-api.md
parent_slug: template-api
char_count: 320
heading_level: h3
chunk_type: method
merge_type: atomic
tags: []
sibling_chunks: ["template-api-introduction", "template-api-figmacurrentlayer-instancehandle", "template-api-figmaproperties-properties", "template-api-methods", "template-api-booleanpropertyname-string-options-recor", "template-api-enumpropertyname-string-options-record-n", "template-api-stringpropertyname-string-string-instanc", "template-api-instanceinstanceswapprop-string-instance"]
---

This function wraps the code to be rendered in the Code Connect Panel. Note the different format if you would like to pass prop data.

```
export default figma.code`${code}`// format used for passing metadata e.g. making instance prop data availableexport default { ...figma.code`${code}`, metadata: { __props } }\n`
```