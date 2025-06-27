---
title: 'getPluginData(key: string): string'
slug: GridStyle-getplugindatakey-string-string
source_file: plugin-api-GridStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/GridStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f88ccb271d0ec997
token_count: 63
chunk_title: 'getPluginData(key: string): string'
chunk_slug: GridStyle-getplugindatakey-string-string
chunk_index: 2
chunk_of_total: 12
parent_file: GridStyle.md
parent_slug: GridStyle
char_count: 220
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - GridStyle-id-string-readonly
  - GridStyle-getstyleconsumersasync-promise-consumers
  - GridStyle-setplugindatakey-string-value-string-voi
  - GridStyle-getplugindatakeys-string
  - GridStyle-getsharedplugindatanamespace-string-key-
  - GridStyle-setsharedplugindatanamespace-string-key-
  - GridStyle-getsharedplugindatakeysnamespace-string-
  - GridStyle-description-string-descriptionmarkdown-s
  - GridStyle-documentationlinks-readonlyarray-remote-
  - GridStyle-key-string-readonly
  - GridStyle-getpublishstatusasync-promise
compiler: noos-figma
---

Retrieves custom information that was stored on this node or style using [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/)
. If there is no data stored for the provided key, an empty string is returned.
