---
title: >-
  suffix?: string [readonly] + colorProfile?: 'DOCUMENT' | 'SRGB' |
  'DISPLAY_P3_V4' [readonly]
slug: ExportSettings-suffix-string-readonly-colorprofile-docu
source_file: plugin-api-ExportSettings.html
source_url: 'https://www.figma.com/plugin-docs/api/ExportSettings/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 75d025c850acdcea
token_count: 103
chunk_title: >-
  suffix?: string [readonly] + colorProfile?: 'DOCUMENT' | 'SRGB' |
  'DISPLAY_P3_V4' [readonly]
chunk_slug: ExportSettings-suffix-string-readonly-colorprofile-docu
chunk_index: 2
chunk_of_total: 10
parent_file: ExportSettings.md
parent_slug: ExportSettings
char_count: 358
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - ExportSettings-introduction
  - ExportSettings-contentsonly-boolean-readonly-useabsolut
  - ExportSettings-format-jpg-png-readonly-constraint-expor
  - ExportSettings-svgoutlinetext-boolean-readonly
  - ExportSettings-svgidattribute-boolean-readonly
  - ExportSettings-svgsimplifystroke-boolean-readonly
  - ExportSettings-format-svg-readonly-exportsettingssvgstr
  - ExportSettings-format-svgstring-readonly-format-pdf-rea
  - ExportSettings-format-jsonrestv1-readonly
merged_titles:
  - 'suffix?: string [readonly]'
  - 'colorProfile?: ''DOCUMENT'' | ''SRGB'' | ''DISPLAY_P3_V4'' [readonly]'
compiler: noos-figma
---

Suffix appended to the file name when exporting. Defaults to empty string.

Color profile of the export.

Defaults to `'DOCUMENT'`

- `"DOCUMENT"`: Use the color profile of `documentColorProfile`.
- `"SRGB"`: Use sRGB colors. This was the previous behavior of Figma before color management.
- `"DISPLAY_P3_V4"`: Use Display P3 colors.

## ExportSettingsImage
