---
title: 'getSharedPluginData(namespace: string, key: string): string'
slug: GridStyle-getsharedplugindatanamespace-string-key-
source_file: plugin-api-GridStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/GridStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: b68efdfbc36a3c6e
token_count: 71
chunk_title: 'getSharedPluginData(namespace: string, key: string): string'
chunk_slug: GridStyle-getsharedplugindatanamespace-string-key-
chunk_index: 5
chunk_of_total: 12
parent_file: GridStyle.md
parent_slug: GridStyle
char_count: 246
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - GridStyle-id-string-readonly
  - GridStyle-getstyleconsumersasync-promise-consumers
  - GridStyle-getplugindatakey-string-string
  - GridStyle-setplugindatakey-string-value-string-voi
  - GridStyle-getplugindatakeys-string
  - GridStyle-setsharedplugindatanamespace-string-key-
  - GridStyle-getsharedplugindatakeysnamespace-string-
  - GridStyle-description-string-descriptionmarkdown-s
  - GridStyle-documentationlinks-readonlyarray-remote-
  - GridStyle-key-string-readonly
  - GridStyle-getpublishstatusasync-promise
compiler: noos-figma
---

Retrieves custom information that was stored on this node or style using [`setSharedPluginData`](/plugin-docs/api/properties/nodes-setsharedplugindata/)
. If there is no data stored for the provided namespace and key, an empty string is returned.
