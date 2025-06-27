---
title: 'format: ''SVG'' [readonly] + ExportSettingsSVGString'
slug: ExportSettings-format-svg-readonly-exportsettingssvgstr
source_file: plugin-api-ExportSettings.html
source_url: 'https://www.figma.com/plugin-docs/api/ExportSettings/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: ddd50be57bda02d1
token_count: 115
chunk_title: 'format: ''SVG'' [readonly] + ExportSettingsSVGString'
chunk_slug: ExportSettings-format-svg-readonly-exportsettingssvgstr
chunk_index: 7
chunk_of_total: 10
parent_file: ExportSettings.md
parent_slug: ExportSettings
char_count: 401
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - ExportSettings-introduction
  - ExportSettings-contentsonly-boolean-readonly-useabsolut
  - ExportSettings-suffix-string-readonly-colorprofile-docu
  - ExportSettings-format-jpg-png-readonly-constraint-expor
  - ExportSettings-svgoutlinetext-boolean-readonly
  - ExportSettings-svgidattribute-boolean-readonly
  - ExportSettings-svgsimplifystroke-boolean-readonly
  - ExportSettings-format-svgstring-readonly-format-pdf-rea
  - ExportSettings-format-jsonrestv1-readonly
merged_titles:
  - 'format: ''SVG'' [readonly]'
  - ExportSettingsSVGString
compiler: noos-figma
---

The string literal "SVG" representing the export format.
When reading [`exportSettings`](/plugin-docs/api/node-properties/#exportsettings)
, always check the `format` before reading other properties.

This is used only by [`exportAsync`](/plugin-docs/api/properties/nodes-exportasync/)
, and is the same as `ExportSettingsSVG` above, but exports the node as an `"..."` string rather than a Uint8Array.
