---
title: 'svgSimplifyStroke?: boolean [readonly]'
slug: ExportSettings-svgsimplifystroke-boolean-readonly
source_file: plugin-api-ExportSettings.html
source_url: 'https://www.figma.com/plugin-docs/api/ExportSettings/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: ce4c14967480ee42
token_count: 72
chunk_title: 'svgSimplifyStroke?: boolean [readonly]'
chunk_slug: ExportSettings-svgsimplifystroke-boolean-readonly
chunk_index: 6
chunk_of_total: 10
parent_file: ExportSettings.md
parent_slug: ExportSettings
char_count: 251
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - ExportSettings-introduction
  - ExportSettings-contentsonly-boolean-readonly-useabsolut
  - ExportSettings-suffix-string-readonly-colorprofile-docu
  - ExportSettings-format-jpg-png-readonly-constraint-expor
  - ExportSettings-svgoutlinetext-boolean-readonly
  - ExportSettings-svgidattribute-boolean-readonly
  - ExportSettings-format-svg-readonly-exportsettingssvgstr
  - ExportSettings-format-svgstring-readonly-format-pdf-rea
  - ExportSettings-format-jsonrestv1-readonly
compiler: noos-figma
---

Whether to export inside and outside strokes as an approximation of the original to simplify the output. Otherwise, it uses a more precise but more bloated masking technique. This is needed because SVGs only support center strokes. Defaults to `true`.
