---
title: Introduction
slug: ExportSettings-introduction
source_file: plugin-api-ExportSettings.html
source_url: 'https://www.figma.com/plugin-docs/api/ExportSettings/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: c7721d493eb0378e
token_count: 120
chunk_title: Introduction
chunk_slug: ExportSettings-introduction
chunk_index: 0
chunk_of_total: 10
parent_file: ExportSettings.md
parent_slug: ExportSettings
char_count: 419
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - ExportSettings-contentsonly-boolean-readonly-useabsolut
  - ExportSettings-suffix-string-readonly-colorprofile-docu
  - ExportSettings-format-jpg-png-readonly-constraint-expor
  - ExportSettings-svgoutlinetext-boolean-readonly
  - ExportSettings-svgidattribute-boolean-readonly
  - ExportSettings-svgsimplifystroke-boolean-readonly
  - ExportSettings-format-svg-readonly-exportsettingssvgstr
  - ExportSettings-format-svgstring-readonly-format-pdf-rea
  - ExportSettings-format-jsonrestv1-readonly
compiler: noos-figma
---

# ExportSettings

Figma has four types of exports: images, SVGs, PDFs, and REST API JSON.

```
type ExportSettings = | ExportSettingsImage | ExportSettingsSVG | ExportSettingsPDF | ExportSettingsREST
````ExportSettings` is used for the [`exportSettings`](/plugin-docs/api/node-properties/#exportsettings)
 property and the [`exportAsync`](/plugin-docs/api/properties/nodes-exportasync/)
 function.

## Common properties
