---
title: 'getPluginDataKeys(): string[]'
slug: PaintStyle-getplugindatakeys-string
source_file: plugin-api-PaintStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/PaintStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 7e44c85c4733e960
token_count: 66
chunk_title: 'getPluginDataKeys(): string[]'
chunk_slug: PaintStyle-getplugindatakeys-string
chunk_index: 5
chunk_of_total: 13
parent_file: PaintStyle.md
parent_slug: PaintStyle
char_count: 231
heading_level: h3
chunk_type: method
merge_type: atomic
tags: []
sibling_chunks:
  - PaintStyle-paints-readonlyarray-boundvariables-read
  - PaintStyle-id-string-readonly
  - PaintStyle-getstyleconsumersasync-promise-consumers
  - PaintStyle-getplugindatakey-string-string
  - PaintStyle-setplugindatakey-string-value-string-voi
  - PaintStyle-getsharedplugindatanamespace-string-key-
  - PaintStyle-setsharedplugindatanamespace-string-key-
  - PaintStyle-getsharedplugindatakeysnamespace-string-
  - PaintStyle-description-string-descriptionmarkdown-s
  - PaintStyle-documentationlinks-readonlyarray-remote-
  - PaintStyle-key-string-readonly
  - PaintStyle-getpublishstatusasync-promise
compiler: noos-figma
---

Retrieves a list of all keys stored on this node or style using using [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/)
. This enables iterating through all data stored privately on a node or style by your plugin.
