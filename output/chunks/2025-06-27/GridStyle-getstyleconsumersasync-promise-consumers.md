---
title: 'getStyleConsumersAsync(): Promise + consumers: StyleConsumers[] [readonly]'
slug: GridStyle-getstyleconsumersasync-promise-consumers
source_file: plugin-api-GridStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/GridStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 7731ffb643369e4f
token_count: 161
chunk_title: 'getStyleConsumersAsync(): Promise + consumers: StyleConsumers[] [readonly]'
chunk_slug: GridStyle-getstyleconsumersasync-promise-consumers
chunk_index: 1
chunk_of_total: 12
parent_file: GridStyle.md
parent_slug: GridStyle
char_count: 561
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - GridStyle-id-string-readonly
  - GridStyle-getplugindatakey-string-string
  - GridStyle-setplugindatakey-string-value-string-voi
  - GridStyle-getplugindatakeys-string
  - GridStyle-getsharedplugindatanamespace-string-key-
  - GridStyle-setsharedplugindatanamespace-string-key-
  - GridStyle-getsharedplugindatakeysnamespace-string-
  - GridStyle-description-string-descriptionmarkdown-s
  - GridStyle-documentationlinks-readonlyarray-remote-
  - GridStyle-key-string-readonly
  - GridStyle-getpublishstatusasync-promise
merged_titles:
  - 'getStyleConsumersAsync(): Promise'
  - 'consumers: StyleConsumers[] [readonly]'
compiler: noos-figma
---

The consumers of this style. The `fields` in `StyleConsumers` refers to the field where the style is applied (e.g. a PaintStyle can be applied in `setFillStyleIdAsync` or `setStrokeStyleIdAsync`).

DEPRECATED: Use `getStyleConsumersAsync` instead. Accessing this property will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

The consumers of this style. The `fields` in `StyleConsumers` refers to the field where the style is applied (e.g. a PaintStyle can be applied in `setFillStyleIdAsync` or `setStrokeStyleIdAsync`).
