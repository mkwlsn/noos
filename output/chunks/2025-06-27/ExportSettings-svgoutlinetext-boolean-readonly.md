---
title: 'svgOutlineText?: boolean [readonly]'
slug: ExportSettings-svgoutlinetext-boolean-readonly
source_file: plugin-api-ExportSettings.html
source_url: 'https://www.figma.com/plugin-docs/api/ExportSettings/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: b98df3ff4a068d56
token_count: 158
chunk_title: 'svgOutlineText?: boolean [readonly]'
chunk_slug: ExportSettings-svgoutlinetext-boolean-readonly
chunk_index: 4
chunk_of_total: 10
parent_file: ExportSettings.md
parent_slug: ExportSettings
char_count: 552
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - ExportSettings-introduction
  - ExportSettings-contentsonly-boolean-readonly-useabsolut
  - ExportSettings-suffix-string-readonly-colorprofile-docu
  - ExportSettings-format-jpg-png-readonly-constraint-expor
  - ExportSettings-svgidattribute-boolean-readonly
  - ExportSettings-svgsimplifystroke-boolean-readonly
  - ExportSettings-format-svg-readonly-exportsettingssvgstr
  - ExportSettings-format-svgstring-readonly-format-pdf-rea
  - ExportSettings-format-jsonrestv1-readonly
compiler: noos-figma
---

Whether text elements are rendered as outlines (vector paths) or as `` elements in SVGs. Defaults to `true`.

Rendering text elements as outlines guarantees that the text looks exactly the same in the SVG as it does in the browser/inside Figma.

Exporting as `` allows text to be selectable inside SVGs and generally makes the SVG easier to read. However, this relies on the browser’s rendering engine which can vary between browsers and/or operating systems. As such, visual accuracy is not guaranteed as the result could look different than in Figma.
