---
title: 'getStyleConsumersAsync(): Promise + consumers: StyleConsumers[] [readonly]'
slug: BaseStyle-getstyleconsumersasync-promise-consumers
source_file: plugin-api-BaseStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/BaseStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 7731ffb643369e4f
token_count: 161
chunk_title: 'getStyleConsumersAsync(): Promise + consumers: StyleConsumers[] [readonly]'
chunk_slug: BaseStyle-getstyleconsumersasync-promise-consumers
chunk_index: 2
chunk_of_total: 13
parent_file: BaseStyle.md
parent_slug: BaseStyle
char_count: 561
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - BaseStyle-introduction
  - BaseStyle-id-string-readonly
  - BaseStyle-getplugindatakey-string-string
  - BaseStyle-setplugindatakey-string-value-string-voi
  - BaseStyle-getplugindatakeys-string
  - BaseStyle-getsharedplugindatanamespace-string-key-
  - BaseStyle-setsharedplugindatanamespace-string-key-
  - BaseStyle-getsharedplugindatakeysnamespace-string-
  - BaseStyle-description-string-descriptionmarkdown-s
  - BaseStyle-documentationlinks-readonlyarray-remote-
  - BaseStyle-key-string-readonly
  - BaseStyle-getpublishstatusasync-promise
merged_titles:
  - 'getStyleConsumersAsync(): Promise'
  - 'consumers: StyleConsumers[] [readonly]'
compiler: noos-figma
---

The consumers of this style. The `fields` in `StyleConsumers` refers to the field where the style is applied (e.g. a PaintStyle can be applied in `setFillStyleIdAsync` or `setStrokeStyleIdAsync`).

DEPRECATED: Use `getStyleConsumersAsync` instead. Accessing this property will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

The consumers of this style. The `fields` in `StyleConsumers` refers to the field where the style is applied (e.g. a PaintStyle can be applied in `setFillStyleIdAsync` or `setStrokeStyleIdAsync`).
