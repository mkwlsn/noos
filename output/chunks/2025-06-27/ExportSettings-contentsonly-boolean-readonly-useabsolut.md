---
title: 'contentsOnly?: boolean [readonly] + useAbsoluteBounds?: boolean [readonly]'
slug: ExportSettings-contentsonly-boolean-readonly-useabsolut
source_file: plugin-api-ExportSettings.html
source_url: 'https://www.figma.com/plugin-docs/api/ExportSettings/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: b09904ab627d9bd7
token_count: 85
chunk_title: 'contentsOnly?: boolean [readonly] + useAbsoluteBounds?: boolean [readonly]'
chunk_slug: ExportSettings-contentsonly-boolean-readonly-useabsolut
chunk_index: 1
chunk_of_total: 10
parent_file: ExportSettings.md
parent_slug: ExportSettings
char_count: 296
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - ExportSettings-introduction
  - ExportSettings-suffix-string-readonly-colorprofile-docu
  - ExportSettings-format-jpg-png-readonly-constraint-expor
  - ExportSettings-svgoutlinetext-boolean-readonly
  - ExportSettings-svgidattribute-boolean-readonly
  - ExportSettings-svgsimplifystroke-boolean-readonly
  - ExportSettings-format-svg-readonly-exportsettingssvgstr
  - ExportSettings-format-svgstring-readonly-format-pdf-rea
  - ExportSettings-format-jsonrestv1-readonly
merged_titles:
  - 'contentsOnly?: boolean [readonly]'
  - 'useAbsoluteBounds?: boolean [readonly]'
compiler: noos-figma
---

Whether only the contents of the node are exported, or any overlapping layer in the same area. Defaults to `true`.

Use the full dimensions of the node regardless of whether or not it is cropped or the space around it is empty. Use this to export text nodes without cropping. Defaults to `false`.
