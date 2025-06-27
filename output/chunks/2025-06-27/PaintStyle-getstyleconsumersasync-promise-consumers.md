---
title: 'getStyleConsumersAsync(): Promise + consumers: StyleConsumers[] [readonly]'
slug: PaintStyle-getstyleconsumersasync-promise-consumers
source_file: plugin-api-PaintStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/PaintStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 7731ffb643369e4f
token_count: 161
chunk_title: 'getStyleConsumersAsync(): Promise + consumers: StyleConsumers[] [readonly]'
chunk_slug: PaintStyle-getstyleconsumersasync-promise-consumers
chunk_index: 2
chunk_of_total: 13
parent_file: PaintStyle.md
parent_slug: PaintStyle
char_count: 561
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - PaintStyle-paints-readonlyarray-boundvariables-read
  - PaintStyle-id-string-readonly
  - PaintStyle-getplugindatakey-string-string
  - PaintStyle-setplugindatakey-string-value-string-voi
  - PaintStyle-getplugindatakeys-string
  - PaintStyle-getsharedplugindatanamespace-string-key-
  - PaintStyle-setsharedplugindatanamespace-string-key-
  - PaintStyle-getsharedplugindatakeysnamespace-string-
  - PaintStyle-description-string-descriptionmarkdown-s
  - PaintStyle-documentationlinks-readonlyarray-remote-
  - PaintStyle-key-string-readonly
  - PaintStyle-getpublishstatusasync-promise
merged_titles:
  - 'getStyleConsumersAsync(): Promise'
  - 'consumers: StyleConsumers[] [readonly]'
compiler: noos-figma
---

The consumers of this style. The `fields` in `StyleConsumers` refers to the field where the style is applied (e.g. a PaintStyle can be applied in `setFillStyleIdAsync` or `setStrokeStyleIdAsync`).

DEPRECATED: Use `getStyleConsumersAsync` instead. Accessing this property will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

The consumers of this style. The `fields` in `StyleConsumers` refers to the field where the style is applied (e.g. a PaintStyle can be applied in `setFillStyleIdAsync` or `setStrokeStyleIdAsync`).
