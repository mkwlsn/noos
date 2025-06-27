---
title: 'getSharedPluginData(namespace: string, key: string): string'
slug: PaintStyle-getsharedplugindatanamespace-string-key-
source_file: plugin-api-PaintStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/PaintStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: b68efdfbc36a3c6e
token_count: 71
chunk_title: 'getSharedPluginData(namespace: string, key: string): string'
chunk_slug: PaintStyle-getsharedplugindatanamespace-string-key-
chunk_index: 6
chunk_of_total: 13
parent_file: PaintStyle.md
parent_slug: PaintStyle
char_count: 246
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - PaintStyle-paints-readonlyarray-boundvariables-read
  - PaintStyle-id-string-readonly
  - PaintStyle-getstyleconsumersasync-promise-consumers
  - PaintStyle-getplugindatakey-string-string
  - PaintStyle-setplugindatakey-string-value-string-voi
  - PaintStyle-getplugindatakeys-string
  - PaintStyle-setsharedplugindatanamespace-string-key-
  - PaintStyle-getsharedplugindatakeysnamespace-string-
  - PaintStyle-description-string-descriptionmarkdown-s
  - PaintStyle-documentationlinks-readonlyarray-remote-
  - PaintStyle-key-string-readonly
  - PaintStyle-getpublishstatusasync-promise
compiler: noos-figma
---

Retrieves custom information that was stored on this node or style using [`setSharedPluginData`](/plugin-docs/api/properties/nodes-setsharedplugindata/)
. If there is no data stored for the provided namespace and key, an empty string is returned.
