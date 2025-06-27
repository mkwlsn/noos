---
title: >-
  format: 'JPG' | 'PNG' [readonly] + constraint?: ExportSettingsConstraints
  [readonly]
slug: ExportSettings-format-jpg-png-readonly-constraint-expor
source_file: plugin-api-ExportSettings.html
source_url: 'https://www.figma.com/plugin-docs/api/ExportSettings/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 33c835a83b3c1f06
token_count: 300
chunk_title: >-
  format: 'JPG' | 'PNG' [readonly] + constraint?: ExportSettingsConstraints
  [readonly]
chunk_slug: ExportSettings-format-jpg-png-readonly-constraint-expor
chunk_index: 3
chunk_of_total: 10
parent_file: ExportSettings.md
parent_slug: ExportSettings
char_count: 1049
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - ExportSettings-introduction
  - ExportSettings-contentsonly-boolean-readonly-useabsolut
  - ExportSettings-suffix-string-readonly-colorprofile-docu
  - ExportSettings-svgoutlinetext-boolean-readonly
  - ExportSettings-svgidattribute-boolean-readonly
  - ExportSettings-svgsimplifystroke-boolean-readonly
  - ExportSettings-format-svg-readonly-exportsettingssvgstr
  - ExportSettings-format-svgstring-readonly-format-pdf-rea
  - ExportSettings-format-jsonrestv1-readonly
merged_titles:
  - 'format: ''JPG'' | ''PNG'' [readonly]'
  - 'constraint?: ExportSettingsConstraints [readonly]'
compiler: noos-figma
---

The string literal representing the export format.
When reading [`exportSettings`](/plugin-docs/api/node-properties/#exportsettings)
, always check the `format` before reading other properties.

Constraint on the image size when exporting.

```
interface ExportSettingsConstraints { type: "SCALE" | "WIDTH" | "HEIGHT" value: number}
```Defaults to 100% of image size `{ type: "SCALE", value: 1 }`.

- `"SCALE"`: The size of the exported image is proportional to the size of the exported layer in Figma. A `value` of 1 means the export is 100% of the layer size.
- `"WIDTH"`: The exported image is scaled to have a fixed width of `value`.
- `"HEIGHT"`: The exported image is scaled to have a fixed height of `value`.

## SVG export

[`ExportSettingsSVG`](#exportsettingssvg)
 controls SVG export settings.
The [`exportAsync`](/plugin-docs/api/properties/nodes-exportasync/)
 function supports an additional [`ExportSettingsSVGString`](#exportsettingssvgstring)
 type for exporting a node to an SVG string.
Both types have the below common properties.
