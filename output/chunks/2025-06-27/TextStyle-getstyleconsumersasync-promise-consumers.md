---
title: 'getStyleConsumersAsync(): Promise + consumers: StyleConsumers[] [readonly]'
slug: TextStyle-getstyleconsumersasync-promise-consumers
source_file: plugin-api-TextStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/TextStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 7731ffb643369e4f
token_count: 161
chunk_title: 'getStyleConsumersAsync(): Promise + consumers: StyleConsumers[] [readonly]'
chunk_slug: TextStyle-getstyleconsumersasync-promise-consumers
chunk_index: 2
chunk_of_total: 13
parent_file: TextStyle.md
parent_slug: TextStyle
char_count: 561
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - TextStyle-boundvariables-field-in-variablebindable
  - TextStyle-id-string-readonly
  - TextStyle-getplugindatakey-string-string
  - TextStyle-setplugindatakey-string-value-string-voi
  - TextStyle-getplugindatakeys-string
  - TextStyle-getsharedplugindatanamespace-string-key-
  - TextStyle-setsharedplugindatanamespace-string-key-
  - TextStyle-getsharedplugindatakeysnamespace-string-
  - TextStyle-description-string-descriptionmarkdown-s
  - TextStyle-documentationlinks-readonlyarray-remote-
  - TextStyle-key-string-readonly
  - TextStyle-getpublishstatusasync-promise
merged_titles:
  - 'getStyleConsumersAsync(): Promise'
  - 'consumers: StyleConsumers[] [readonly]'
compiler: noos-figma
---

The consumers of this style. The `fields` in `StyleConsumers` refers to the field where the style is applied (e.g. a PaintStyle can be applied in `setFillStyleIdAsync` or `setStrokeStyleIdAsync`).

DEPRECATED: Use `getStyleConsumersAsync` instead. Accessing this property will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

The consumers of this style. The `fields` in `StyleConsumers` refers to the field where the style is applied (e.g. a PaintStyle can be applied in `setFillStyleIdAsync` or `setStrokeStyleIdAsync`).
