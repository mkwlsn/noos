---
title: 'format: ''SVG_STRING'' [readonly] + format: ''PDF'' [readonly]'
slug: ExportSettings-format-svgstring-readonly-format-pdf-rea
source_file: plugin-api-ExportSettings.html
source_url: 'https://www.figma.com/plugin-docs/api/ExportSettings/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 1272c063274771bc
token_count: 159
chunk_title: 'format: ''SVG_STRING'' [readonly] + format: ''PDF'' [readonly]'
chunk_slug: ExportSettings-format-svgstring-readonly-format-pdf-rea
chunk_index: 8
chunk_of_total: 10
parent_file: ExportSettings.md
parent_slug: ExportSettings
char_count: 555
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
  - ExportSettings-format-svg-readonly-exportsettingssvgstr
  - ExportSettings-format-jsonrestv1-readonly
merged_titles:
  - 'format: ''SVG_STRING'' [readonly]'
  - 'format: ''PDF'' [readonly]'
compiler: noos-figma
---

The string literal "SVG_STRING" representing the export format.

## ExportSettingsPDF

The string literal "PDF" representing the export format.
When reading [`exportSettings`](/plugin-docs/api/node-properties/#exportsettings)
, always check the `format` before reading other properties.

## ExportSettingsREST

This returns a JSON object in the shape of the response of the [https://api.figma.com/v1/files](https://api.figma.com/v1/files)
 endpoint. For more information read about the API [here](https://www.figma.com/developers/api#get-files-endpoint)
.
