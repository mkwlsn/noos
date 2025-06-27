---
title: 'format: ''JSON_REST_V1'' [readonly]'
slug: ExportSettings-format-jsonrestv1-readonly
source_file: plugin-api-ExportSettings.html
source_url: 'https://www.figma.com/plugin-docs/api/ExportSettings/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 6e9c5f7b69ed64cb
token_count: 261
chunk_title: 'format: ''JSON_REST_V1'' [readonly]'
chunk_slug: ExportSettings-format-jsonrestv1-readonly
chunk_index: 9
chunk_of_total: 10
parent_file: ExportSettings.md
parent_slug: ExportSettings
char_count: 913
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - ExportSettings-introduction
  - ExportSettings-contentsonly-boolean-readonly-useabsolut
  - ExportSettings-suffix-string-readonly-colorprofile-docu
  - ExportSettings-format-jpg-png-readonly-constraint-expor
  - ExportSettings-svgoutlinetext-boolean-readonly
  - ExportSettings-svgidattribute-boolean-readonly
  - ExportSettings-svgsimplifystroke-boolean-readonly
  - ExportSettings-format-svg-readonly-exportsettingssvgstr
  - ExportSettings-format-svgstring-readonly-format-pdf-rea
compiler: noos-figma
---

Returns the equivalent REST API response of hitting the endpoint `https://api.figma.com/v1/files/:file_key/nodes?ids=:id`.

This is useful if you have existing code that uses the REST API that you would like to have work inside a plugin as well. It can also be significantly more perfomant if you need to serialize large groups of nodes and their children.
Here is an example that logs the name of every child in a node using the REST API response:

Using the JSON_REST_V1 format```
function visitChildren(child: Object) { console.log(child.name); if (child.children) { child.children.forEach(visitChildren); }}const response = await figma.currentPage.selection[0].exportAsync({ format: "JSON_REST_V1",});visitChildren(response.document);
```For more information on the shape of the output of the 'JSON_REST_V1' format, see: [https://www.figma.com/developers/api#files](https://www.figma.com/developers/api#files)
