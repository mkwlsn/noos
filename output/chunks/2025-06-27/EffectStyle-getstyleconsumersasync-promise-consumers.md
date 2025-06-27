---
title: 'getStyleConsumersAsync(): Promise + consumers: StyleConsumers[] [readonly]'
slug: EffectStyle-getstyleconsumersasync-promise-consumers
source_file: plugin-api-EffectStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/EffectStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 7731ffb643369e4f
token_count: 161
chunk_title: 'getStyleConsumersAsync(): Promise + consumers: StyleConsumers[] [readonly]'
chunk_slug: EffectStyle-getstyleconsumersasync-promise-consumers
chunk_index: 1
chunk_of_total: 12
parent_file: EffectStyle.md
parent_slug: EffectStyle
char_count: 561
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - EffectStyle-id-string-readonly
  - EffectStyle-getplugindatakey-string-string
  - EffectStyle-setplugindatakey-string-value-string-voi
  - EffectStyle-getplugindatakeys-string
  - EffectStyle-getsharedplugindatanamespace-string-key-
  - EffectStyle-setsharedplugindatanamespace-string-key-
  - EffectStyle-getsharedplugindatakeysnamespace-string-
  - EffectStyle-description-string-descriptionmarkdown-s
  - EffectStyle-documentationlinks-readonlyarray-remote-
  - EffectStyle-key-string-readonly
  - EffectStyle-getpublishstatusasync-promise
merged_titles:
  - 'getStyleConsumersAsync(): Promise'
  - 'consumers: StyleConsumers[] [readonly]'
compiler: noos-figma
---

The consumers of this style. The `fields` in `StyleConsumers` refers to the field where the style is applied (e.g. a PaintStyle can be applied in `setFillStyleIdAsync` or `setStrokeStyleIdAsync`).

DEPRECATED: Use `getStyleConsumersAsync` instead. Accessing this property will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

The consumers of this style. The `fields` in `StyleConsumers` refers to the field where the style is applied (e.g. a PaintStyle can be applied in `setFillStyleIdAsync` or `setStrokeStyleIdAsync`).
