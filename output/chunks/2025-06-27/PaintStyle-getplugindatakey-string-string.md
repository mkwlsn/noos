---
title: 'getPluginData(key: string): string'
slug: PaintStyle-getplugindatakey-string-string
source_file: plugin-api-PaintStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/PaintStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f88ccb271d0ec997
token_count: 63
chunk_title: 'getPluginData(key: string): string'
chunk_slug: PaintStyle-getplugindatakey-string-string
chunk_index: 3
chunk_of_total: 13
parent_file: PaintStyle.md
parent_slug: PaintStyle
char_count: 220
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - PaintStyle-paints-readonlyarray-boundvariables-read
  - PaintStyle-id-string-readonly
  - PaintStyle-getstyleconsumersasync-promise-consumers
  - PaintStyle-setplugindatakey-string-value-string-voi
  - PaintStyle-getplugindatakeys-string
  - PaintStyle-getsharedplugindatanamespace-string-key-
  - PaintStyle-setsharedplugindatanamespace-string-key-
  - PaintStyle-getsharedplugindatakeysnamespace-string-
  - PaintStyle-description-string-descriptionmarkdown-s
  - PaintStyle-documentationlinks-readonlyarray-remote-
  - PaintStyle-key-string-readonly
  - PaintStyle-getpublishstatusasync-promise
compiler: noos-figma
---

Retrieves custom information that was stored on this node or style using [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/)
. If there is no data stored for the provided key, an empty string is returned.
